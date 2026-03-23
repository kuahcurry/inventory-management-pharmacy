<?php

namespace App\Http\Controllers;

use App\Models\ApprovalRequest;
use App\Models\BatchObat;
use App\Models\Obat;
use App\Models\Transaksi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class TransaksiController extends Controller
{
    /**
     * Display kasir page.
     */
    public function kasir()
    {
        $batches = \App\Models\BatchObat::query()
            ->with(['obat.satuan'])
            ->where('status', 'active')
            ->where('stok_tersedia', '>', 0)
            ->whereDate('tanggal_expired', '>=', today())
            ->orderBy('tanggal_expired')
            ->get();

        return Inertia::render('transaksi/kasir', [
            'batches' => $batches,
            'paymentMethodsByMode' => [
                'penjualan' => [
                    'qris' => 'QRIS',
                    'cash' => 'Cash',
                    'transfer' => 'Transfer',
                    'debit' => 'Debit',
                    'kredit' => 'Kredit',
                ],
                'masuk' => [
                    'cash' => 'Cash',
                    'konsinyasi' => 'Konsinyasi',
                    'tempo' => 'Tempo',
                ],
            ],
        ]);
    }

    /**
     * Minimal checkout gate for high-risk items.
     */
    public function kasirCheckout(Request $request)
    {
        $validated = $request->validate([
            'mode' => 'required|in:penjualan,masuk',
            'metode_pembayaran' => 'required|string',
            'tanggal_transaksi' => 'required|date',
            'diskon_persen' => 'nullable|numeric|min:0|max:100',
            'ppn_persen' => 'nullable|numeric|min:0|max:100',
            'pembayaran_diterima' => 'nullable|numeric|min:0',
            'tempo_jatuh_tempo' => 'nullable|date|after_or_equal:tanggal_transaksi',
            'supplier_nama' => 'nullable|string|max:255',
            'pelanggan_nama' => 'nullable|string|max:255',
            'dokter_nama' => 'nullable|string|max:255',
            'sales_nama' => 'nullable|string|max:255',
            'operator_nama' => 'nullable|string|max:255',
            'tipe_penjualan' => 'nullable|in:biasa,resep',
            'is_taxed' => 'nullable|boolean',
            'items' => 'required|array|min:1',
            'items.*.obat_id' => 'required|exists:obat,id',
            'items.*.batch_id' => 'nullable|exists:batch_obat,id',
            'items.*.jumlah' => 'required|integer|min:1',
            'items.*.harga_satuan' => 'required|numeric|min:0',
        ]);

        $allowedMethods = $validated['mode'] === 'penjualan'
            ? ['qris', 'cash', 'transfer', 'debit', 'kredit']
            : ['cash', 'konsinyasi', 'tempo'];

        if (! in_array($validated['metode_pembayaran'], $allowedMethods, true)) {
            throw ValidationException::withMessages([
                'metode_pembayaran' => 'Metode pembayaran tidak valid untuk mode transaksi ini.',
            ]);
        }

        if ($validated['mode'] === 'masuk' && $validated['metode_pembayaran'] === 'tempo' && empty($validated['tempo_jatuh_tempo'])) {
            throw ValidationException::withMessages([
                'tempo_jatuh_tempo' => 'Tanggal jatuh tempo wajib diisi untuk pembayaran tempo.',
            ]);
        }

        if ($validated['mode'] !== 'masuk' && ! empty($validated['tempo_jatuh_tempo'])) {
            throw ValidationException::withMessages([
                'tempo_jatuh_tempo' => 'Tanggal jatuh tempo hanya boleh diisi untuk mode Masuk dengan metode Tempo.',
            ]);
        }

        $subtotal = collect($validated['items'])->sum(function (array $item): float {
            return (int) $item['jumlah'] * (float) $item['harga_satuan'];
        });
        $diskonPersen = (float) ($validated['diskon_persen'] ?? 0);
        $ppnPersen = (float) ($validated['ppn_persen'] ?? 11);
        $diskonNominal = $subtotal * ($diskonPersen / 100);
        $dasarPajak = max($subtotal - $diskonNominal, 0);
        $ppnNominal = $dasarPajak * ($ppnPersen / 100);
        $grandTotal = $dasarPajak + $ppnNominal;

        if ($validated['mode'] === 'penjualan' && isset($validated['pembayaran_diterima']) && (float) $validated['pembayaran_diterima'] < $grandTotal) {
            throw ValidationException::withMessages([
                'pembayaran_diterima' => 'Pembayaran diterima tidak boleh kurang dari total tagihan.',
            ]);
        }

        if ($validated['mode'] === 'penjualan') {
            $highRiskItems = collect($validated['items'])
                ->map(function (array $item) {
                    $obat = Obat::query()->find($item['obat_id']);

                    if (! $obat || ! $obat->is_high_risk_drug) {
                        return null;
                    }

                    return [
                        'obat' => $obat,
                        'jumlah' => (int) $item['jumlah'],
                    ];
                })
                ->filter();

            if ($highRiskItems->isNotEmpty()) {
                DB::transaction(function () use ($highRiskItems): void {
                    foreach ($highRiskItems as $item) {
                        ApprovalRequest::query()->create([
                            'request_type' => 'high_risk_sale',
                            'obat_id' => $item['obat']->id,
                            'requested_by' => auth()->id(),
                            'approval_level_required' => 2,
                            'status' => 'pending',
                            'requested_quantity' => $item['jumlah'],
                            'reason' => 'Permintaan penjualan obat high-risk dari kasir.',
                        ]);
                    }
                });

                throw ValidationException::withMessages([
                    'items' => 'Keranjang mengandung obat high-risk. Approval supervisor telah dibuat dan harus disetujui sebelum checkout diproses.',
                ]);
            }
        }

        DB::transaction(function () use ($validated): void {
            $jenisTransaksi = $validated['mode'] === 'masuk' ? Transaksi::JENIS_MASUK : Transaksi::JENIS_PENJUALAN;

            foreach ($validated['items'] as $index => $item) {
                $batchId = $item['batch_id'] ?? null;

                if ($batchId) {
                    $batch = BatchObat::query()->lockForUpdate()->findOrFail($batchId);

                    if ($validated['mode'] === 'penjualan' && $batch->stok_tersedia < (int) $item['jumlah']) {
                        throw ValidationException::withMessages([
                            "items.{$index}.jumlah" => "Stok batch {$batch->nomor_batch} tidak cukup. Tersedia: {$batch->stok_tersedia}.",
                        ]);
                    }
                }

                $transaksi = Transaksi::query()->create([
                    'obat_id' => (int) $item['obat_id'],
                    'batch_id' => $batchId,
                    'user_id' => auth()->id(),
                    'unit_id' => null,
                    'jenis_transaksi' => $jenisTransaksi,
                    'jumlah' => (int) $item['jumlah'],
                    'harga_satuan' => (float) $item['harga_satuan'],
                    'total_harga' => (int) $item['jumlah'] * (float) $item['harga_satuan'],
                    'tanggal_transaksi' => $validated['tanggal_transaksi'],
                    'waktu_transaksi' => now()->format('H:i:s'),
                    'keterangan' => implode(' | ', array_filter([
                        'Checkout kasir',
                        'Metode: '.strtoupper($validated['metode_pembayaran']),
                        $validated['metode_pembayaran'] === 'tempo' ? 'Jatuh tempo: '.$validated['tempo_jatuh_tempo'] : null,
                        'Diskon: '.number_format($diskonPersen, 2).'%',
                        'PPN: '.number_format($ppnPersen, 2).'%',
                        'Grand total: '.number_format($grandTotal, 2, '.', ''),
                    ])),
                    'nomor_referensi' => null,
                    'supplier_nama' => $validated['supplier_nama'] ?? null,
                    'pelanggan_nama' => $validated['pelanggan_nama'] ?? null,
                    'dokter_nama' => $validated['dokter_nama'] ?? null,
                    'sales_nama' => $validated['sales_nama'] ?? null,
                    'operator_nama' => $validated['operator_nama'] ?? null,
                    'kasir_nama' => auth()->user()?->name,
                    'metode_pembayaran' => $validated['metode_pembayaran'],
                    'tipe_penjualan' => $validated['mode'] === 'penjualan' ? ($validated['tipe_penjualan'] ?? 'biasa') : null,
                    'kategori_keuangan' => $validated['mode'] === 'masuk' && $validated['metode_pembayaran'] === 'tempo'
                        ? 'hutang'
                        : ($validated['mode'] === 'penjualan' && $validated['metode_pembayaran'] === 'kredit' ? 'piutang' : 'none'),
                    'status_pelunasan' => ($validated['mode'] === 'masuk' && $validated['metode_pembayaran'] === 'tempo')
                        || ($validated['mode'] === 'penjualan' && $validated['metode_pembayaran'] === 'kredit')
                            ? 'belum_lunas'
                            : 'lunas',
                    'jatuh_tempo' => $validated['tempo_jatuh_tempo'] ?? null,
                    'is_taxed' => (bool) ($validated['is_taxed'] ?? false),
                ]);

                $this->updateStock($transaksi);
            }
        });

        return back()->with('success', 'Checkout kasir berhasil diproses.');
    }

    public function index(Request $request): Response
    {
        $query = Transaksi::with(['obat.satuan', 'batch', 'user']);

        // Filter by jenis transaksi
        if ($request->filled('jenis')) {
            $query->where('jenis_transaksi', $request->jenis);
        }

        // Filter by date range
        if ($request->filled('start_date')) {
            $query->whereDate('tanggal_transaksi', '>=', $request->start_date);
        }
        if ($request->filled('end_date')) {
            $query->whereDate('tanggal_transaksi', '<=', $request->end_date);
        }

        // Search
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('kode_transaksi', 'like', "%{$search}%")
                    ->orWhere('nomor_referensi', 'like', "%{$search}%")
                    ->orWhereHas('obat', function ($q) use ($search) {
                        $q->where('nama_obat', 'like', "%{$search}%")
                            ->orWhere('kode_obat', 'like', "%{$search}%");
                    });
            });
        }

        $transaksi = $query->latest('tanggal_transaksi')
            ->latest('waktu_transaksi')
            ->paginate(20)
            ->withQueryString();

        // Statistics
        $stats = [
            'total_today' => Transaksi::today()->count(),
            'total_masuk_today' => Transaksi::today()->masuk()->sum('jumlah'),
            'total_keluar_today' => Transaksi::today()->keluar()->sum('jumlah'),
            'total_value_today' => Transaksi::today()->sum('total_harga'),
        ];

        return Inertia::render('transaksi/semua-transaksi', [
            'transaksi' => $transaksi,
            'stats' => $stats,
            'filters' => $request->only(['jenis', 'start_date', 'end_date', 'search']),
        ]);
    }

    /**
     * Show the form for creating a new transaction
     */
    public function create()
    {
        $obat = \App\Models\Obat::with(['satuan', 'kategori'])
            ->where('is_active', true)
            ->orderBy('nama_obat')
            ->get();

        $batches = \App\Models\BatchObat::with(['obat.satuan'])
            ->where('status', 'active')
            ->where('stok_tersedia', '>', 0)
            ->orderBy('tanggal_expired')
            ->get();

        return Inertia::render('transaksi/create', [
            'obat' => $obat,
            'batches' => $batches,
        ]);
    }

    /**
     * Store a newly created transaction
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'obat_id' => 'required|exists:obat,id',
            'batch_id' => 'nullable|exists:batch_obat,id',
            'jenis_transaksi' => 'required|in:masuk,keluar,penjualan',
            'jumlah' => 'required|integer|min:1',
            'harga_satuan' => 'required|numeric|min:0',
            'tanggal_transaksi' => 'required|date',
            'keterangan' => 'nullable|string',
            'nomor_referensi' => 'nullable|string|max:100',
            'supplier_nama' => 'nullable|string|max:255',
            'pelanggan_nama' => 'nullable|string|max:255',
            'dokter_nama' => 'nullable|string|max:255',
            'sales_nama' => 'nullable|string|max:255',
            'operator_nama' => 'nullable|string|max:255',
            'kasir_nama' => 'nullable|string|max:255',
            'metode_pembayaran' => 'nullable|string|max:30',
            'tipe_penjualan' => 'nullable|in:biasa,resep',
            'kategori_keuangan' => 'nullable|in:none,hutang,piutang',
            'status_pelunasan' => 'nullable|in:lunas,belum_lunas',
            'jatuh_tempo' => 'nullable|date',
            'is_taxed' => 'nullable|boolean',
        ]);

        // Calculate total
        $validated['total_harga'] = $validated['jumlah'] * $validated['harga_satuan'];
        $validated['user_id'] = auth()->id();
        $validated['waktu_transaksi'] = now()->toTimeString();
        $validated['kategori_keuangan'] = $validated['kategori_keuangan'] ?? 'none';
        $validated['status_pelunasan'] = $validated['status_pelunasan'] ?? 'lunas';
        $validated['is_taxed'] = (bool) ($validated['is_taxed'] ?? false);

        // Validate stock for keluar/penjualan
        if (in_array($validated['jenis_transaksi'], ['keluar', 'penjualan'])) {
            if ($validated['batch_id']) {
                $batch = \App\Models\BatchObat::find($validated['batch_id']);
                if ($batch->stok_tersedia < $validated['jumlah']) {
                    return back()->withErrors([
                        'jumlah' => "Stok tidak mencukupi. Tersedia: {$batch->stok_tersedia}",
                    ])->withInput();
                }
            }
        }

        $transaksi = Transaksi::create($validated);

        // Update stock
        $this->updateStock($transaksi);

        return redirect()->route('transaksi.index')
            ->with('success', 'Transaksi berhasil dibuat');
    }

    /**
     * Display the specified transaction
     */
    public function show(string $id)
    {
        $transaksi = Transaksi::with([
            'obat.satuan',
            'obat.kategori',
            'batch',
            'user',
        ])->findOrFail($id);

        return Inertia::render('transaksi/show', [
            'transaksi' => $transaksi,
        ]);
    }

    /**
     * Show the form for editing transaction
     */
    public function edit(string $id)
    {
        $transaksi = Transaksi::with(['obat', 'batch'])->findOrFail($id);

        $obat = \App\Models\Obat::with(['satuan', 'kategori'])
            ->where('is_active', true)
            ->orderBy('nama_obat')
            ->get();

        $batches = \App\Models\BatchObat::with(['obat.satuan'])
            ->where('status', 'active')
            ->where('stok_tersedia', '>', 0)
            ->orderBy('tanggal_expired')
            ->get();

        return Inertia::render('transaksi/edit', [
            'transaksi' => $transaksi,
            'obat' => $obat,
            'batches' => $batches,
        ]);
    }

    /**
     * Update the specified transaction
     */
    public function update(Request $request, string $id)
    {
        $transaksi = Transaksi::findOrFail($id);

        // Revert previous stock changes
        $this->revertStock($transaksi);

        $validated = $request->validate([
            'obat_id' => 'required|exists:obat,id',
            'batch_id' => 'nullable|exists:batch_obat,id',
            'jenis_transaksi' => 'required|in:masuk,keluar,penjualan',
            'jumlah' => 'required|integer|min:1',
            'harga_satuan' => 'required|numeric|min:0',
            'tanggal_transaksi' => 'required|date',
            'keterangan' => 'nullable|string',
            'nomor_referensi' => 'nullable|string|max:100',
            'supplier_nama' => 'nullable|string|max:255',
            'pelanggan_nama' => 'nullable|string|max:255',
            'dokter_nama' => 'nullable|string|max:255',
            'sales_nama' => 'nullable|string|max:255',
            'operator_nama' => 'nullable|string|max:255',
            'kasir_nama' => 'nullable|string|max:255',
            'metode_pembayaran' => 'nullable|string|max:30',
            'tipe_penjualan' => 'nullable|in:biasa,resep',
            'kategori_keuangan' => 'nullable|in:none,hutang,piutang',
            'status_pelunasan' => 'nullable|in:lunas,belum_lunas',
            'jatuh_tempo' => 'nullable|date',
            'is_taxed' => 'nullable|boolean',
        ]);

        // Calculate total
        $validated['total_harga'] = $validated['jumlah'] * $validated['harga_satuan'];
        $validated['kategori_keuangan'] = $validated['kategori_keuangan'] ?? 'none';
        $validated['status_pelunasan'] = $validated['status_pelunasan'] ?? 'lunas';
        $validated['is_taxed'] = (bool) ($validated['is_taxed'] ?? false);

        // Validate stock for keluar/penjualan
        if (in_array($validated['jenis_transaksi'], ['keluar', 'penjualan'])) {
            if ($validated['batch_id']) {
                $batch = \App\Models\BatchObat::find($validated['batch_id']);
                if ($batch->stok_tersedia < $validated['jumlah']) {
                    return back()->withErrors([
                        'jumlah' => "Stok tidak mencukupi. Tersedia: {$batch->stok_tersedia}",
                    ])->withInput();
                }
            }
        }

        $transaksi->update($validated);

        // Apply new stock changes
        $this->updateStock($transaksi);

        return redirect()->route('transaksi.index')
            ->with('success', 'Transaksi berhasil diupdate');
    }

    /**
     * Remove the specified transaction
     */
    public function destroy(string $id)
    {
        $transaksi = Transaksi::findOrFail($id);

        // Revert stock changes
        $this->revertStock($transaksi);

        $transaksi->delete();

        return redirect()->route('transaksi.index')
            ->with('success', 'Transaksi berhasil dihapus');
    }

    /**
     * Update stock based on transaction
     */
    protected function updateStock(Transaksi $transaksi)
    {
        if (! $transaksi->batch_id) {
            return;
        }

        $batch = $transaksi->batch;

        if ($transaksi->jenis_transaksi === 'masuk') {
            // Increase stock
            $batch->stok_tersedia += $transaksi->jumlah;
        } else {
            // Decrease stock (keluar/penjualan)
            $batch->stok_tersedia -= $transaksi->jumlah;

            // Update batch status if empty
            if ($batch->stok_tersedia <= 0) {
                $batch->status = 'empty';
            }
        }

        $batch->save();

        // Recalculate medicine total stock
        $batch->obat->recalculateStok();
    }

    /**
     * Revert stock changes
     */
    protected function revertStock(Transaksi $transaksi)
    {
        if (! $transaksi->batch_id) {
            return;
        }

        $batch = $transaksi->batch;

        if ($transaksi->jenis_transaksi === 'masuk') {
            // Decrease stock
            $batch->stok_tersedia -= $transaksi->jumlah;
        } else {
            // Increase stock (keluar/penjualan)
            $batch->stok_tersedia += $transaksi->jumlah;

            // Restore batch status if was empty
            if ($batch->status === 'empty' && $batch->stok_tersedia > 0) {
                $batch->status = 'active';
            }
        }

        $batch->save();

        // Recalculate medicine total stock
        $batch->obat->recalculateStok();
    }

    /**
     * Display incoming transactions page
     */
    public function masuk(Request $request): Response
    {
        $query = Transaksi::with(['obat.satuan', 'batch', 'user'])
            ->where('jenis_transaksi', 'masuk');

        // Filter by date range
        if ($request->filled('start_date')) {
            $query->whereDate('tanggal_transaksi', '>=', $request->start_date);
        }
        if ($request->filled('end_date')) {
            $query->whereDate('tanggal_transaksi', '<=', $request->end_date);
        }

        // Search
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('kode_transaksi', 'like', "%{$search}%")
                    ->orWhere('nomor_referensi', 'like', "%{$search}%")
                    ->orWhereHas('obat', function ($q) use ($search) {
                        $q->where('nama_obat', 'like', "%{$search}%")
                            ->orWhere('kode_obat', 'like', "%{$search}%");
                    });
            });
        }

        $transaksi = $query->latest('tanggal_transaksi')
            ->latest('waktu_transaksi')
            ->paginate(20)
            ->withQueryString();

        // Statistics for incoming transactions
        $stats = [
            'total_today' => Transaksi::today()->masuk()->count(),
            'total_quantity_today' => Transaksi::today()->masuk()->sum('jumlah'),
            'total_value_today' => Transaksi::today()->masuk()->sum('total_harga'),
            'total_this_month' => Transaksi::thisMonth()->masuk()->count(),
        ];

        return Inertia::render('transaksi/barang-masuk', [
            'transaksi' => $transaksi,
            'stats' => $stats,
            'filters' => $request->only(['start_date', 'end_date', 'search']),
        ]);
    }

    /**
     * Display outgoing transactions page
     */
    public function keluar(Request $request): Response
    {
        $query = Transaksi::with(['obat.satuan', 'batch', 'user'])
            ->whereIn('jenis_transaksi', ['keluar', 'penjualan']);

        // Filter by date range
        if ($request->filled('start_date')) {
            $query->whereDate('tanggal_transaksi', '>=', $request->start_date);
        }
        if ($request->filled('end_date')) {
            $query->whereDate('tanggal_transaksi', '<=', $request->end_date);
        }

        // Search
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('kode_transaksi', 'like', "%{$search}%")
                    ->orWhere('nomor_referensi', 'like', "%{$search}%")
                    ->orWhereHas('obat', function ($q) use ($search) {
                        $q->where('nama_obat', 'like', "%{$search}%")
                            ->orWhere('kode_obat', 'like', "%{$search}%");
                    });
            });
        }

        $transaksi = $query->latest('tanggal_transaksi')
            ->latest('waktu_transaksi')
            ->paginate(20)
            ->withQueryString();

        // Statistics for outgoing transactions
        $stats = [
            'total_today' => Transaksi::today()->keluar()->count(),
            'total_quantity_today' => Transaksi::today()->keluar()->sum('jumlah'),
            'total_value_today' => Transaksi::today()->keluar()->sum('total_harga'),
            'total_this_month' => Transaksi::thisMonth()->keluar()->count(),
        ];

        return Inertia::render('transaksi/barang-keluar', [
            'transaksi' => $transaksi,
            'stats' => $stats,
            'filters' => $request->only(['start_date', 'end_date', 'search']),
        ]);
    }
}
