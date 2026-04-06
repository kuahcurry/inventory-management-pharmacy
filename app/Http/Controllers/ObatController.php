<?php

namespace App\Http\Controllers;

use App\Models\BatchObat;
use App\Models\Obat;
use App\Models\KategoriObat;
use App\Models\JenisObat;
use App\Models\SatuanObat;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ObatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $obats = Obat::with(['kategori', 'jenis', 'satuan'])
            ->when($request->search, function ($query, $search) {
                $query->where('nama_obat', 'like', "%{$search}%")
                    ->orWhere('kode_obat', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(15)
            ->withQueryString();

        $batches = BatchObat::with(['obat.satuan', 'obat.kategori', 'supplier'])
            ->when($request->search, function ($query, $search) {
                $query->where('nomor_batch', 'like', "%{$search}%")
                    ->orWhereHas('obat', function ($obatQuery) use ($search) {
                        $obatQuery->where('nama_obat', 'like', "%{$search}%")
                            ->orWhere('kode_obat', 'like', "%{$search}%");
                    })
                    ->orWhereHas('supplier', function ($supplierQuery) use ($search) {
                        $supplierQuery->where('nama_supplier', 'like', "%{$search}%")
                            ->orWhere('kode_supplier', 'like', "%{$search}%");
                    });
            })
            ->latest('tanggal_masuk')
            ->latest('created_at')
            ->paginate(10, ['*'], 'batch_page')
            ->withQueryString();

        return Inertia::render('obat/data-obat', [
            'obats' => $obats,
            'batches' => $batches,
            'filters' => $request->only(['search']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('obat/create', [
            'kategori' => KategoriObat::where('is_active', true)->get(),
            'jenis' => JenisObat::where('is_active', true)->get(),
            'satuan' => SatuanObat::where('is_active', true)->get(),
            'suppliers' => Supplier::where('status', 'active')->orderBy('nama_supplier')->get(['id', 'nama_supplier']),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'existing_obat_id' => 'nullable|exists:obat,id',
            'kode_obat' => 'nullable|string|max:50|unique:obat,kode_obat',
            'nama_obat' => 'nullable|string|max:191',
            'nama_generik' => 'nullable|string|max:191',
            'nama_brand' => 'nullable|string|max:191',
            'kategori_id' => 'nullable|exists:kategori_obat,id',
            'jenis_id' => 'nullable|exists:jenis_obat,id',
            'satuan_id' => 'nullable|exists:satuan_obat,id',
            'stok_minimum' => 'nullable|integer|min:0',
            'harga_beli' => 'nullable|numeric|min:0',
            'harga_jual' => 'nullable|numeric|min:0',
            'lokasi_penyimpanan' => 'nullable|string|max:100',
            'deskripsi' => 'nullable|string',
            'efek_samping' => 'nullable|string',
            'indikasi' => 'nullable|string',
            'kontraindikasi' => 'nullable|string',
            'initial_supplier_id' => 'required|exists:supplier,id',
            'initial_nomor_batch' => 'nullable|string|max:100',
            'initial_tanggal_produksi' => 'nullable|date',
            'initial_tanggal_expired' => 'required|date|after:today',
            'initial_tanggal_masuk' => 'required|date',
            'initial_stok_awal' => 'required|integer|min:1',
            'initial_harga_beli' => 'required|numeric|min:0',
            'initial_catatan' => 'nullable|string',
        ]);

        $existingObatId = $validated['existing_obat_id'] ?? null;
        $isUsingExisting = filled($existingObatId);

        if (! $isUsingExisting) {
            $requiredMedicineErrors = [];
            foreach (['nama_obat', 'kategori_id', 'jenis_id', 'satuan_id'] as $field) {
                if (empty($validated[$field])) {
                    $requiredMedicineErrors[$field] = 'Field wajib diisi untuk obat baru.';
                }
            }

            if (! empty($requiredMedicineErrors)) {
                throw ValidationException::withMessages($requiredMedicineErrors);
            }
        }

        DB::transaction(function () use ($validated, $isUsingExisting, $existingObatId): void {
            if ($isUsingExisting) {
                $obat = Obat::query()->findOrFail($existingObatId);
            } else {
                $normalizedName = mb_strtolower(trim((string) $validated['nama_obat']));

                $duplicate = Obat::query()
                    ->whereRaw('LOWER(nama_obat) = ?', [$normalizedName])
                    ->whereHas('batches', function ($query) use ($validated) {
                        $query->where('supplier_id', $validated['initial_supplier_id']);
                    })
                    ->exists();

                if ($duplicate) {
                    throw ValidationException::withMessages([
                        'nama_obat' => 'Obat dengan nama dan supplier yang sama sudah ada. Pilih obat yang sudah ada melalui autocomplete.',
                    ]);
                }

                $obat = Obat::create([
                    'kode_obat' => $validated['kode_obat'] ?? null,
                    'nama_obat' => $validated['nama_obat'],
                    'nama_generik' => $validated['nama_generik'] ?? null,
                    'nama_brand' => $validated['nama_brand'] ?? null,
                    'kategori_id' => $validated['kategori_id'],
                    'jenis_id' => $validated['jenis_id'],
                    'satuan_id' => $validated['satuan_id'],
                    'stok_minimum' => $validated['stok_minimum'] ?? 10,
                    'harga_beli' => $validated['harga_beli'] ?? 0,
                    'harga_jual' => $validated['harga_jual'] ?? 0,
                    'lokasi_penyimpanan' => $validated['lokasi_penyimpanan'] ?? null,
                    'deskripsi' => $validated['deskripsi'] ?? null,
                    'efek_samping' => $validated['efek_samping'] ?? null,
                    'indikasi' => $validated['indikasi'] ?? null,
                    'kontraindikasi' => $validated['kontraindikasi'] ?? null,
                    'stok_total' => 0,
                    'is_active' => true,
                ]);
            }

            if (! empty($validated['initial_nomor_batch'])) {
                $batchExists = BatchObat::query()
                    ->where('obat_id', $obat->id)
                    ->where('nomor_batch', $validated['initial_nomor_batch'])
                    ->exists();

                if ($batchExists) {
                    throw ValidationException::withMessages([
                        'initial_nomor_batch' => 'Nomor batch sudah dipakai untuk obat ini.',
                    ]);
                }
            }

            BatchObat::create([
                'obat_id' => $obat->id,
                'supplier_id' => $validated['initial_supplier_id'],
                'nomor_batch' => $validated['initial_nomor_batch'] ?? null,
                'tanggal_produksi' => $validated['initial_tanggal_produksi'] ?? null,
                'tanggal_expired' => $validated['initial_tanggal_expired'],
                'tanggal_masuk' => $validated['initial_tanggal_masuk'],
                'stok_awal' => (int) $validated['initial_stok_awal'],
                'stok_tersedia' => (int) $validated['initial_stok_awal'],
                'harga_beli' => (float) $validated['initial_harga_beli'],
                'status' => 'active',
                'catatan' => $validated['initial_catatan'] ?? null,
            ]);

            $obat->recalculateStok();
        });

        return redirect()->route('obat.index')
            ->with('success', $isUsingExisting ? 'Batch baru untuk obat existing berhasil ditambahkan' : 'Obat dan batch berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        $obat = Obat::with(['kategori', 'jenis', 'satuan', 'batches.supplier'])
            ->findOrFail($id);

        return Inertia::render('obat/show', [
            'obat' => $obat,
            'batchCount' => $obat->batches()->count(),
            'activeBatchCount' => $obat->batches()->where('status', 'active')->count(),
            'latestBatch' => $obat->batches()->with('supplier')->latest('tanggal_masuk')->first(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): Response
    {
        $obat = Obat::findOrFail($id);

        return Inertia::render('obat/edit', [
            'obat' => $obat,
            'kategori' => KategoriObat::where('is_active', true)->get(),
            'jenis' => JenisObat::where('is_active', true)->get(),
            'satuan' => SatuanObat::where('is_active', true)->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        $obat = Obat::findOrFail($id);

        $validated = $request->validate([
            'kode_obat' => 'sometimes|filled|string|max:50|unique:obat,kode_obat,' . $id,
            'nama_obat' => 'required|string|max:191',
            'nama_generik' => 'nullable|string|max:191',
            'nama_brand' => 'nullable|string|max:191',
            'kategori_id' => 'required|exists:kategori_obat,id',
            'jenis_id' => 'required|exists:jenis_obat,id',
            'satuan_id' => 'required|exists:satuan_obat,id',
            'stok_minimum' => 'required|integer|min:0',
            'harga_beli' => 'nullable|numeric|min:0',
            'harga_jual' => 'nullable|numeric|min:0',
            'lokasi_penyimpanan' => 'nullable|string|max:100',
            'deskripsi' => 'nullable|string',
            'efek_samping' => 'nullable|string',
            'indikasi' => 'nullable|string',
            'kontraindikasi' => 'nullable|string',
        ]);

        $obat->update($validated);

        return redirect()->route('obat.index')
            ->with('success', 'Obat berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): RedirectResponse
    {
        $obat = Obat::findOrFail($id);
        $obat->delete();

        return redirect()->back()
            ->with('success', 'Obat berhasil dihapus');
    }

    /**
     * Display trashed medicines and batches.
     */
    public function trash(Request $request): Response
    {
        $trashedObats = Obat::onlyTrashed()
            ->with(['kategori', 'jenis', 'satuan'])
            ->withCount('batches')
            ->latest('deleted_at')
            ->paginate(15, ['*'], 'obat_page')
            ->withQueryString();

        $trashedBatches = BatchObat::onlyTrashed()
            ->with(['obat.kategori', 'obat.satuan', 'supplier'])
            ->latest('deleted_at')
            ->paginate(15, ['*'], 'batch_page')
            ->withQueryString();

        return Inertia::render('obat/trash', [
            'obats' => $trashedObats,
            'batches' => $trashedBatches,
            'filters' => $request->only(['search']),
        ]);
    }

    /**
     * Restore a trashed medicine.
     */
    public function restore(string $id): RedirectResponse
    {
        $obat = Obat::onlyTrashed()->findOrFail($id);
        $obat->restore();

        return redirect()->route('obat.trash')
            ->with('success', 'Obat berhasil dipulihkan');
    }

    /**
     * Permanently delete a trashed medicine.
     */
    public function forceDelete(string $id): RedirectResponse
    {
        $obat = Obat::onlyTrashed()->findOrFail($id);
        $obat->forceDelete();

        return redirect()->route('obat.trash')
            ->with('success', 'Obat dihapus permanen');
    }

    /**
     * Download template for import
     */
    public function downloadTemplate(): StreamedResponse
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        // Set headers
        $headers = [
            'Kode Obat',
            'Nama Obat',
            'Nama Generik',
            'Nama Brand',
            'Kategori ID',
            'Jenis ID',
            'Satuan ID',
            'Stok Total',
            'Stok Minimum',
            'Harga Beli',
            'Harga Jual',
            'Lokasi Penyimpanan',
            'Deskripsi',
            'Efek Samping',
            'Indikasi',
            'Kontraindikasi'
        ];

        $column = 'A';
        foreach ($headers as $header) {
            $sheet->setCellValue($column . '1', $header);
            $sheet->getStyle($column . '1')->getFont()->setBold(true);
            $sheet->getColumnDimension($column)->setAutoSize(true);
            $column++;
        }

        // Add sample data
        $sheet->setCellValue('A2', 'OBT001');
        $sheet->setCellValue('B2', 'Paracetamol 500mg');
        $sheet->setCellValue('C2', 'Paracetamol');
        $sheet->setCellValue('D2', 'Panadol');
        $sheet->setCellValue('E2', '1');
        $sheet->setCellValue('F2', '1');
        $sheet->setCellValue('G2', '1');
        $sheet->setCellValue('H2', '100');
        $sheet->setCellValue('I2', '10');
        $sheet->setCellValue('J2', '5000');
        $sheet->setCellValue('K2', '7000');
        $sheet->setCellValue('L2', 'Rak A-1');
        $sheet->setCellValue('M2', 'Obat pereda nyeri dan demam');
        $sheet->setCellValue('N2', 'Mual, ruam kulit');
        $sheet->setCellValue('O2', 'Nyeri, demam');
        $sheet->setCellValue('P2', 'Gangguan hati');

        // Add instruction sheet
        $instructionSheet = $spreadsheet->createSheet();
        $instructionSheet->setTitle('Panduan');
        $instructionSheet->setCellValue('A1', 'PANDUAN IMPORT DATA OBAT');
        $instructionSheet->getStyle('A1')->getFont()->setBold(true)->setSize(14);
        
        $instructions = [
            ['A3', 'Kolom yang wajib diisi:'],
            ['A4', '- Nama Obat'],
            ['A5', '- Kategori ID (lihat master data kategori)'],
            ['A6', '- Jenis ID (lihat master data jenis)'],
            ['A7', '- Satuan ID (lihat master data satuan)'],
            ['A8', '- Stok Total (angka, jumlah stok saat ini)'],
            ['A9', '- Stok Minimum (angka, minimal stok sebelum reorder)'],
            ['A11', ''],
            ['A12', 'Kolom opsional:'],
            ['A13', '- Kode Obat (jika kosong akan dibuat otomatis)'],
            ['A14', '- Harga Beli, Harga Jual (bisa diisi 0 jika belum ada)'],
            ['A15', '- Nama Generik, Nama Brand, Lokasi Penyimpanan'],
            ['A16', '- Deskripsi, Efek Samping, Indikasi, Kontraindikasi'],
            ['A17', 'Format file: .xlsx atau .csv'],
            ['A18', 'Hapus baris contoh sebelum upload'],
        ];

        foreach ($instructions as $instruction) {
            $instructionSheet->setCellValue($instruction[0], $instruction[1]);
        }
        $instructionSheet->getColumnDimension('A')->setWidth(60);

        $writer = new Xlsx($spreadsheet);
        
        return response()->streamDownload(function () use ($writer) {
            $writer->save('php://output');
        }, 'template_import_obat.xlsx', [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ]);
    }

    /**
     * Import data from Excel/CSV
     */
    public function import(Request $request): RedirectResponse
    {
        $request->validate([
            'file' => 'required|file|mimes:xlsx,xls,csv|max:2048',
        ]);

        try {
            $file = $request->file('file');
            $spreadsheet = IOFactory::load($file->getPathname());
            $sheet = $spreadsheet->getActiveSheet();
            $rows = $sheet->toArray();

            // Remove header row
            array_shift($rows);

            $imported = 0;
            $errors = [];
            $skipped = 0;

            \Log::info('Starting import', ['total_rows' => count($rows)]);

            foreach ($rows as $index => $row) {
                // Skip empty rows
                if (empty(array_filter($row))) {
                    $skipped++;
                    continue;
                }

                $rowNumber = $index + 2; // +2 because we removed header and arrays are 0-indexed

                $validator = Validator::make([
                    'kode_obat' => $row[0] ?? null,
                    'nama_obat' => $row[1] ?? null,
                    'kategori_id' => $row[4] ?? null,
                    'jenis_id' => $row[5] ?? null,
                    'satuan_id' => $row[6] ?? null,
                    'stok_total' => $row[7] ?? null,
                    'stok_minimum' => $row[8] ?? null,
                    'harga_beli' => $row[9] ?? null,
                    'harga_jual' => $row[10] ?? null,
                ], [
                    'kode_obat' => 'nullable|unique:obat,kode_obat',
                    'nama_obat' => 'required',
                    'kategori_id' => 'required|exists:kategori_obat,id',
                    'jenis_id' => 'required|exists:jenis_obat,id',
                    'satuan_id' => 'required|exists:satuan_obat,id',
                    'stok_total' => 'required|numeric|min:0',
                    'stok_minimum' => 'required|numeric|min:0',
                    'harga_beli' => 'nullable|numeric|min:0',
                    'harga_jual' => 'nullable|numeric|min:0',
                ]);

                if ($validator->fails()) {
                    $errorMsg = "Baris {$rowNumber} [{$row[0]}]: " . implode(', ', $validator->errors()->all());
                    $errors[] = $errorMsg;
                    \Log::warning('Import validation failed', [
                        'row' => $rowNumber,
                        'kode_obat' => $row[0] ?? 'N/A',
                        'errors' => $validator->errors()->all()
                    ]);
                    continue;
                }

                try {
                    Obat::create([
                        'kode_obat' => $row[0] ?? null,
                        'nama_obat' => $row[1],
                        'nama_generik' => $row[2] ?? null,
                        'nama_brand' => $row[3] ?? null,
                        'kategori_id' => $row[4],
                        'jenis_id' => $row[5],
                        'satuan_id' => $row[6],
                        'stok_total' => $row[7] ?? 0,
                        'stok_minimum' => $row[8],
                        'harga_beli' => $row[9] ?? 0,
                        'harga_jual' => $row[10] ?? 0,
                        'lokasi_penyimpanan' => $row[11] ?? null,
                        'deskripsi' => $row[12] ?? null,
                        'efek_samping' => $row[13] ?? null,
                        'indikasi' => $row[14] ?? null,
                        'kontraindikasi' => $row[15] ?? null,
                        'is_active' => true,
                    ]);

                    $imported++;
                } catch (\Exception $e) {
                    $errorMsg = "Baris {$rowNumber} [{$row[0]}]: Database error - " . $e->getMessage();
                    $errors[] = $errorMsg;
                    \Log::error('Import database error', [
                        'row' => $rowNumber,
                        'kode_obat' => $row[0] ?? 'N/A',
                        'error' => $e->getMessage()
                    ]);
                }
            }

            \Log::info('Import completed', [
                'imported' => $imported,
                'errors' => count($errors),
                'skipped' => $skipped
            ]);

            if (!empty($errors)) {
                $errorCount = count($errors);
                $errorPreview = array_slice($errors, 0, 5);
                $message = "Import selesai. {$imported} data berhasil, {$errorCount} gagal. ";
                $message .= "Error pertama: " . implode(' | ', $errorPreview);
                if ($errorCount > 5) {
                    $message .= " ... dan " . ($errorCount - 5) . " error lainnya. Lihat log untuk detail lengkap.";
                }
                
                return redirect()->route('obat.index')
                    ->with('warning', $message);
            }

            return redirect()->route('obat.index')
                ->with('success', "Berhasil mengimport {$imported} data obat");

        } catch (\Exception $e) {
            return redirect()->route('obat.create')
                ->with('error', 'Gagal mengimport data: ' . $e->getMessage());
        }
    }
}
