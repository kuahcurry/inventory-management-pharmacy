<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BatchObat;
use App\Models\Obat;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class InventoryController extends Controller
{
    public function createWithBatch(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'existing_obat_id' => 'nullable|exists:obat,id',
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
            'supplier_id' => 'required|exists:supplier,id',
            'nomor_batch' => 'nullable|string|max:100',
            'tanggal_produksi' => 'nullable|date',
            'tanggal_expired' => 'required|date|after:today',
            'tanggal_masuk' => 'required|date',
            'stok_awal' => 'required|integer|min:1',
            'harga_beli_batch' => 'required|numeric|min:0',
            'catatan' => 'nullable|string',
        ]);

        $existingObatId = $validated['existing_obat_id'] ?? null;
        $isExisting = filled($existingObatId);

        if (! $isExisting) {
            foreach (['nama_obat', 'kategori_id', 'jenis_id', 'satuan_id'] as $field) {
                if (empty($validated[$field])) {
                    throw ValidationException::withMessages([
                        $field => 'Field wajib diisi untuk obat baru.',
                    ]);
                }
            }
        }

        $result = DB::transaction(function () use ($validated, $isExisting, $existingObatId) {
            if ($isExisting) {
                $obat = Obat::query()->findOrFail($existingObatId);
            } else {
                $normalizedName = mb_strtolower(trim((string) $validated['nama_obat']));

                $duplicate = Obat::query()
                    ->whereRaw('LOWER(nama_obat) = ?', [$normalizedName])
                    ->whereHas('batches', function ($query) use ($validated) {
                        $query->where('supplier_id', $validated['supplier_id']);
                    })
                    ->exists();

                if ($duplicate) {
                    throw ValidationException::withMessages([
                        'nama_obat' => 'Obat dengan nama dan supplier yang sama sudah ada.',
                    ]);
                }

                $obat = Obat::query()->create([
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

            if (! empty($validated['nomor_batch'])) {
                $batchExists = BatchObat::query()
                    ->where('obat_id', $obat->id)
                    ->where('nomor_batch', $validated['nomor_batch'])
                    ->exists();

                if ($batchExists) {
                    throw ValidationException::withMessages([
                        'nomor_batch' => 'Nomor batch sudah dipakai untuk obat ini.',
                    ]);
                }
            }

            $batch = BatchObat::query()->create([
                'obat_id' => $obat->id,
                'supplier_id' => $validated['supplier_id'],
                'nomor_batch' => $validated['nomor_batch'] ?? null,
                'tanggal_produksi' => $validated['tanggal_produksi'] ?? null,
                'tanggal_expired' => $validated['tanggal_expired'],
                'tanggal_masuk' => $validated['tanggal_masuk'],
                'stok_awal' => (int) $validated['stok_awal'],
                'stok_tersedia' => (int) $validated['stok_awal'],
                'harga_beli' => (float) $validated['harga_beli_batch'],
                'status' => 'active',
                'catatan' => $validated['catatan'] ?? null,
            ]);

            $obat->recalculateStok();

            return [
                'obat' => $obat->fresh(['kategori', 'jenis', 'satuan']),
                'batch' => $batch->fresh(['supplier']),
            ];
        });

        return response()->json([
            'message' => $isExisting ? 'Batch berhasil ditambahkan ke obat existing.' : 'Obat dan batch berhasil dibuat.',
            'data' => $result,
        ], 201);
    }
}
