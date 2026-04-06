<?php

namespace Database\Seeders;

use App\Models\BatchObat;
use App\Models\Obat;
use App\Models\Supplier;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class IndonesiaDrugWithBatchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $csvPath = storage_path('app/imports/obat_100_indonesia.csv');

        if (! file_exists($csvPath)) {
            throw new \RuntimeException("CSV source not found: {$csvPath}");
        }

        $suppliers = Supplier::query()->orderBy('id')->get(['id', 'lead_time_days'])->values();

        if ($suppliers->isEmpty()) {
            throw new \RuntimeException('No suppliers found. Run the pharmacy master data seeder first.');
        }

        $now = Carbon::now();

        DB::transaction(function () use ($csvPath, $suppliers, $now): void {
            $oldObatIds = Obat::query()
                ->where('kode_obat', 'like', 'OBT-IND-%')
                ->pluck('id');

            if ($oldObatIds->isNotEmpty()) {
                DB::table('batch_obat')->whereIn('obat_id', $oldObatIds)->delete();
                DB::table('obat')->whereIn('id', $oldObatIds)->delete();
            }

            $handle = fopen($csvPath, 'r');
            if ($handle === false) {
                throw new \RuntimeException("Unable to open CSV file: {$csvPath}");
            }

            $header = fgetcsv($handle);
            if ($header === false) {
                fclose($handle);
                throw new \RuntimeException('CSV file is empty.');
            }

            $created = 0;

            while (($row = fgetcsv($handle)) !== false) {
                if (count(array_filter($row, fn ($value) => $value !== null && $value !== '')) === 0) {
                    continue;
                }

                $data = array_combine($header, $row);
                if ($data === false) {
                    continue;
                }

                $index = $created + 1;
                $supplier = $suppliers[$created % $suppliers->count()];

                $kodeObat = trim((string) ($data['Kode Obat'] ?? ''));
                $namaObat = trim((string) ($data['Nama Obat'] ?? ''));
                $namaGenerik = trim((string) ($data['Nama Generik'] ?? '')) ?: null;
                $namaBrand = trim((string) ($data['Nama Brand'] ?? '')) ?: null;

                $kategoriId = (int) ($data['Kategori ID'] ?? 0);
                $jenisId = (int) ($data['Jenis ID'] ?? 0);
                $satuanId = (int) ($data['Satuan ID'] ?? 0);
                $stokTotal = (int) ($data['Stok Total'] ?? 0);
                $stokMinimum = (int) ($data['Stok Minimum'] ?? 0);
                $hargaBeli = (float) ($data['Harga Beli'] ?? 0);
                $hargaJual = (float) ($data['Harga Jual'] ?? 0);

                $isHighRisk = $this->isHighRiskDrug($namaObat, $namaGenerik, $namaBrand);

                $obat = Obat::create([
                    'kode_obat' => $kodeObat,
                    'kode_formularium' => null,
                    'kode_bpjs' => null,
                    'nama_obat' => $namaObat,
                    'nama_generik' => $namaGenerik,
                    'nama_brand' => $namaBrand,
                    'kategori_id' => $kategoriId,
                    'jenis_id' => $jenisId,
                    'satuan_id' => $satuanId,
                    'stok_total' => $stokTotal,
                    'stok_minimum' => $stokMinimum,
                    'harga_beli' => $hargaBeli,
                    'harga_jual' => $hargaJual,
                    'lokasi_penyimpanan' => $data['Lokasi Penyimpanan'] ?? null,
                    'deskripsi' => $data['Deskripsi'] ?? null,
                    'efek_samping' => $data['Efek Samping'] ?? null,
                    'indikasi' => $data['Indikasi'] ?? null,
                    'kontraindikasi' => $data['Kontraindikasi'] ?? null,
                    'gambar' => null,
                    'is_active' => true,
                    'is_high_risk_drug' => $isHighRisk,
                    'supplier_lead_time_days' => (int) ($supplier->lead_time_days ?? 7),
                    'review_period_days' => 30,
                    'target_margin_percentage' => 20,
                ]);

                $tanggalMasuk = $now->copy()->subDays(15 + (($index - 1) % 75));
                $tanggalProduksi = $tanggalMasuk->copy()->subMonths(2);
                $tanggalExpired = $tanggalMasuk->copy()->addMonths(24 + (($index - 1) % 6));

                BatchObat::create([
                    'obat_id' => $obat->id,
                    'supplier_id' => $supplier->id,
                    'nomor_batch' => sprintf('B-IND-%03d', $index),
                    'tanggal_produksi' => $tanggalProduksi->format('Y-m-d'),
                    'tanggal_expired' => $tanggalExpired->format('Y-m-d'),
                    'tanggal_masuk' => $tanggalMasuk->format('Y-m-d'),
                    'stok_awal' => $stokTotal,
                    'stok_tersedia' => $stokTotal,
                    'harga_beli' => $hargaBeli,
                    'status' => $tanggalExpired->isPast() ? 'expired' : 'active',
                    'catatan' => 'Batch awal hasil seed 100 drug list Indonesia',
                ]);

                $created++;
            }

            fclose($handle);

            $this->command?->info('✅ Recreated 100 Indonesian drugs with batches.');
            $this->command?->info('   - Obat: '.Obat::query()->where('kode_obat', 'like', 'OBT-IND-%')->count());
            $this->command?->info('   - Batch: '.BatchObat::query()->whereHas('obat', fn ($q) => $q->where('kode_obat', 'like', 'OBT-IND-%'))->count());
        });
    }

    private function isHighRiskDrug(string $namaObat, ?string $namaGenerik, ?string $namaBrand): bool
    {
        $text = Str::lower(trim($namaObat.' '.$namaGenerik.' '.$namaBrand));

        return Str::contains($text, [
            'insulin',
            'meropenem',
            'gentamicin injeksi',
            'ceftriaxone injeksi',
            'digoxin',
            'tramadol',
        ]);
    }
}
