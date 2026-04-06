<?php

namespace App\Http\Controllers;

use App\Actions\BuildOperationalInsights;
use App\Models\DrugInteraction;
use App\Models\Obat;
use App\Models\Resep;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ResepController extends Controller
{
    public function __construct(private BuildOperationalInsights $insights) {}

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $resep = Resep::with(['processedBy', 'details.obat'])
            ->latest()
            ->paginate(20);

        return Inertia::render('obat/resep/index', [
            'resep' => $resep,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $obat = Obat::with(['kategori', 'jenis', 'satuan'])
            ->where('stok_total', '>', 0)
            ->orderBy('nama_obat')
            ->get();

        return Inertia::render('obat/resep/create', [
            'obat' => $obat,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nomor_referensi' => 'required|string|max:50',
            'nama_pelanggan' => 'required|string|max:200',
            'nama_dokter' => 'nullable|string|max:200',
            'tanggal_resep' => 'required|date',
            'kategori_pelanggan' => 'required|in:reguler,pelanggan_rutin,rujukan_dokter',
            'metode_pembayaran' => 'required|in:tunai_umum,non_tunai,asuransi_rekanan',
            'catatan' => 'nullable|string',
            'details' => 'required|array|min:1',
            'details.*.obat_id' => 'required|exists:obat,id',
            'details.*.jumlah' => 'required|integer|min:1',
            'details.*.dosis' => 'nullable|string|max:100',
            'details.*.aturan_pakai' => 'nullable|string|max:200',
            'details.*.catatan' => 'nullable|string',
        ]);

        $this->assertNoBlockingInteraction($validated['details']);

    $validated['unit_id'] = null;

        $resep = Resep::create($validated);

        // Create details
        foreach ($validated['details'] as $detail) {
            $resep->details()->create($detail);
        }

        return redirect()->route('resep.index')
            ->with('success', 'Resep berhasil dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $resep = Resep::with(['processedBy', 'details.obat.satuan'])
            ->findOrFail($id);

        return Inertia::render('obat/resep/show', [
            'resep' => $resep,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $resep = Resep::with(['details'])->findOrFail($id);

        // Only allow editing pending prescriptions
        if ($resep->status !== 'pending') {
            return redirect()->route('resep.show', $id)
                ->with('error', 'Hanya resep dengan status pending yang dapat diedit');
        }

        $obat = Obat::with(['kategori', 'jenis', 'satuan'])
            ->where('stok_total', '>', 0)
            ->orderBy('nama_obat')
            ->get();

        return Inertia::render('obat/resep/edit', [
            'resep' => $resep,
            'obat' => $obat,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $resep = Resep::findOrFail($id);

        // Only allow updating pending prescriptions
        if ($resep->status !== 'pending') {
            return redirect()->route('resep.show', $id)
                ->with('error', 'Hanya resep dengan status pending yang dapat diupdate');
        }

        $validated = $request->validate([
            'nomor_referensi' => 'required|string|max:50',
            'nama_pelanggan' => 'required|string|max:200',
            'nama_dokter' => 'nullable|string|max:200',
            'tanggal_resep' => 'required|date',
            'kategori_pelanggan' => 'required|in:reguler,pelanggan_rutin,rujukan_dokter',
            'metode_pembayaran' => 'required|in:tunai_umum,non_tunai,asuransi_rekanan',
            'catatan' => 'nullable|string',
            'details' => 'required|array|min:1',
            'details.*.obat_id' => 'required|exists:obat,id',
            'details.*.jumlah' => 'required|integer|min:1',
            'details.*.dosis' => 'nullable|string|max:100',
            'details.*.aturan_pakai' => 'nullable|string|max:200',
            'details.*.catatan' => 'nullable|string',
        ]);

        $this->assertNoBlockingInteraction($validated['details']);

    $validated['unit_id'] = null;

        $resep->update($validated);

        // Delete old details and create new ones
        $resep->details()->delete();
        foreach ($validated['details'] as $detail) {
            $resep->details()->create($detail);
        }

        return redirect()->route('resep.index')
            ->with('success', 'Resep berhasil diupdate');
    }

    /**
     * @param  array<int, array<string, mixed>>  $details
     */
    private function assertNoBlockingInteraction(array $details): void
    {
        $obatIds = collect($details)
            ->pluck('obat_id')
            ->map(fn ($id) => (int) $id)
            ->filter()
            ->unique()
            ->values()
            ->all();

        $interactions = $this->insights->checkDrugInteractions($obatIds);
        $blocking = $interactions->filter(fn (DrugInteraction $interaction) => $interaction->isBlockingSeverity());

        if ($blocking->isEmpty()) {
            return;
        }

        $messages = $blocking->map(function (DrugInteraction $item) {
            return sprintf(
                '%s x %s (%s)',
                $item->obat?->nama_obat,
                $item->interactsWith?->nama_obat,
                strtoupper($item->severity)
            );
        })->implode(', ');

        abort(422, 'Interaksi obat berisiko terdeteksi: '.$messages);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $resep = Resep::findOrFail($id);

        // Only allow deleting pending prescriptions
        if ($resep->status !== 'pending') {
            return redirect()->route('resep.index')
                ->with('error', 'Hanya resep dengan status pending yang dapat dihapus');
        }

        $resep->delete();

        return redirect()->route('resep.index')
            ->with('success', 'Resep berhasil dihapus');
    }
}
