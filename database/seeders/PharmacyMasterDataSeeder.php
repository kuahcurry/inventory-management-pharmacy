<?php

namespace Database\Seeders;

use App\Models\JenisObat;
use App\Models\KategoriObat;
use App\Models\SatuanObat;
use App\Models\Supplier;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class PharmacyMasterDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        $kategoriObat = [
            ['nama_kategori' => 'Antibiotik', 'deskripsi' => 'Obat untuk melawan infeksi bakteri'],
            ['nama_kategori' => 'Analgesik', 'deskripsi' => 'Obat penghilang rasa sakit'],
            ['nama_kategori' => 'Antipiretik', 'deskripsi' => 'Obat penurun demam'],
            ['nama_kategori' => 'Antiinflamasi', 'deskripsi' => 'Obat antiradang'],
            ['nama_kategori' => 'Antihipertensi', 'deskripsi' => 'Obat tekanan darah tinggi'],
            ['nama_kategori' => 'Antidiabetes', 'deskripsi' => 'Obat untuk diabetes mellitus'],
            ['nama_kategori' => 'Antihistamin', 'deskripsi' => 'Obat alergi'],
            ['nama_kategori' => 'Antasida', 'deskripsi' => 'Obat maag dan asam lambung'],
            ['nama_kategori' => 'Bronkodilator', 'deskripsi' => 'Obat untuk saluran pernapasan'],
            ['nama_kategori' => 'Kardiovaskular', 'deskripsi' => 'Obat untuk jantung dan pembuluh darah'],
            ['nama_kategori' => 'Vitamin & Suplemen', 'deskripsi' => 'Vitamin dan suplemen kesehatan'],
            ['nama_kategori' => 'Antiemetik', 'deskripsi' => 'Obat antimual dan muntah'],
            ['nama_kategori' => 'Laksatif', 'deskripsi' => 'Obat pencahar'],
            ['nama_kategori' => 'Antidiare', 'deskripsi' => 'Obat untuk diare'],
            ['nama_kategori' => 'Sedatif & Hipnotik', 'deskripsi' => 'Obat penenang dan tidur'],
            ['nama_kategori' => 'Antiseptik', 'deskripsi' => 'Obat antiseptik dan desinfektan'],
            ['nama_kategori' => 'Kortikosteroid', 'deskripsi' => 'Obat hormon steroid'],
            ['nama_kategori' => 'Cairan Infus', 'deskripsi' => 'Cairan infus dan elektrolit'],
            ['nama_kategori' => 'Obat Mata', 'deskripsi' => 'Obat tetes mata dan salep mata'],
            ['nama_kategori' => 'Obat Kulit', 'deskripsi' => 'Obat topikal untuk kulit'],
            ['nama_kategori' => 'Obat THT', 'deskripsi' => 'Obat telinga, hidung, tenggorokan'],
            ['nama_kategori' => 'Narkotika', 'deskripsi' => 'Obat golongan narkotika (terbatas)'],
            ['nama_kategori' => 'Psikotropika', 'deskripsi' => 'Obat golongan psikotropika (terbatas)'],
            ['nama_kategori' => 'Vaksin', 'deskripsi' => 'Vaksin dan imunisasi'],
            ['nama_kategori' => 'Lainnya', 'deskripsi' => 'Kategori obat lainnya'],
        ];

        $jenisObat = [
            ['nama_jenis' => 'Tablet', 'deskripsi' => 'Obat bentuk tablet padat'],
            ['nama_jenis' => 'Kapsul', 'deskripsi' => 'Obat dalam cangkang kapsul'],
            ['nama_jenis' => 'Kaplet', 'deskripsi' => 'Tablet berbentuk kapsul'],
            ['nama_jenis' => 'Sirup', 'deskripsi' => 'Obat cair manis'],
            ['nama_jenis' => 'Suspensi', 'deskripsi' => 'Obat cair dengan partikel tersuspensi'],
            ['nama_jenis' => 'Emulsi', 'deskripsi' => 'Campuran dua cairan tidak larut'],
            ['nama_jenis' => 'Injeksi', 'deskripsi' => 'Obat suntik'],
            ['nama_jenis' => 'Infus', 'deskripsi' => 'Cairan infus intravena'],
            ['nama_jenis' => 'Salep', 'deskripsi' => 'Obat oles setengah padat'],
            ['nama_jenis' => 'Krim', 'deskripsi' => 'Obat oles berbentuk krim'],
            ['nama_jenis' => 'Gel', 'deskripsi' => 'Obat oles berbentuk gel'],
            ['nama_jenis' => 'Lotion', 'deskripsi' => 'Cairan untuk kulit'],
            ['nama_jenis' => 'Tetes Mata', 'deskripsi' => 'Obat tetes untuk mata'],
            ['nama_jenis' => 'Tetes Telinga', 'deskripsi' => 'Obat tetes untuk telinga'],
            ['nama_jenis' => 'Tetes Hidung', 'deskripsi' => 'Obat tetes untuk hidung'],
            ['nama_jenis' => 'Suppositoria', 'deskripsi' => 'Obat yang dimasukkan melalui rektum'],
            ['nama_jenis' => 'Ovula', 'deskripsi' => 'Obat yang dimasukkan melalui vagina'],
            ['nama_jenis' => 'Inhaler', 'deskripsi' => 'Obat hirup untuk pernapasan'],
            ['nama_jenis' => 'Nebulizer', 'deskripsi' => 'Obat uap untuk pernapasan'],
            ['nama_jenis' => 'Patch', 'deskripsi' => 'Obat tempel transdermal'],
            ['nama_jenis' => 'Serbuk', 'deskripsi' => 'Obat dalam bentuk serbuk'],
            ['nama_jenis' => 'Granul', 'deskripsi' => 'Obat dalam bentuk butiran'],
            ['nama_jenis' => 'Plester', 'deskripsi' => 'Plester obat'],
            ['nama_jenis' => 'Spray', 'deskripsi' => 'Obat semprot'],
            ['nama_jenis' => 'Lainnya', 'deskripsi' => 'Bentuk sediaan lainnya'],
        ];

        $satuanObat = [
            ['nama_satuan' => 'Tablet', 'singkatan' => 'tab'],
            ['nama_satuan' => 'Kapsul', 'singkatan' => 'kaps'],
            ['nama_satuan' => 'Kaplet', 'singkatan' => 'kapl'],
            ['nama_satuan' => 'Botol', 'singkatan' => 'btl'],
            ['nama_satuan' => 'Ampul', 'singkatan' => 'amp'],
            ['nama_satuan' => 'Vial', 'singkatan' => 'vial'],
            ['nama_satuan' => 'Tube', 'singkatan' => 'tube'],
            ['nama_satuan' => 'Pot', 'singkatan' => 'pot'],
            ['nama_satuan' => 'Sachet', 'singkatan' => 'sach'],
            ['nama_satuan' => 'Strip', 'singkatan' => 'str'],
            ['nama_satuan' => 'Blister', 'singkatan' => 'bls'],
            ['nama_satuan' => 'Box', 'singkatan' => 'box'],
            ['nama_satuan' => 'Dus', 'singkatan' => 'dus'],
            ['nama_satuan' => 'Pack', 'singkatan' => 'pack'],
            ['nama_satuan' => 'Buah', 'singkatan' => 'bh'],
            ['nama_satuan' => 'Pcs', 'singkatan' => 'pcs'],
            ['nama_satuan' => 'Set', 'singkatan' => 'set'],
            ['nama_satuan' => 'Liter', 'singkatan' => 'L'],
            ['nama_satuan' => 'Mililiter', 'singkatan' => 'mL'],
            ['nama_satuan' => 'Gram', 'singkatan' => 'g'],
            ['nama_satuan' => 'Miligram', 'singkatan' => 'mg'],
            ['nama_satuan' => 'Kilogram', 'singkatan' => 'kg'],
            ['nama_satuan' => 'Suppositoria', 'singkatan' => 'supp'],
            ['nama_satuan' => 'Ovula', 'singkatan' => 'ovl'],
            ['nama_satuan' => 'Flakon', 'singkatan' => 'flk'],
        ];

        $suppliers = [
            [
                'kode_supplier' => 'SUP-001',
                'nama_supplier' => 'PT Kimia Farma Trading & Distribution',
                'alamat' => 'Jakarta, Indonesia',
                'no_telepon' => '021-0001001',
                'email' => 'sales@kimiafarma.co.id',
                'kontak_person' => 'Tim Sales KFTD',
                'no_hp_kontak' => '08120001001',
                'npwp' => null,
                'status' => 'active',
                'lead_time_days' => 7,
                'catatan' => 'Distributor nasional obat dan alat kesehatan',
            ],
            [
                'kode_supplier' => 'SUP-002',
                'nama_supplier' => 'PT Indofarma Global Medika',
                'alamat' => 'Bekasi, Indonesia',
                'no_telepon' => '021-0001002',
                'email' => 'sales@indofarma.id',
                'kontak_person' => 'Tim Penjualan IGM',
                'no_hp_kontak' => '08120001002',
                'npwp' => null,
                'status' => 'active',
                'lead_time_days' => 8,
                'catatan' => 'Penyedia produk generik dan OTC',
            ],
            [
                'kode_supplier' => 'SUP-003',
                'nama_supplier' => 'PT Dexa Medica Distribution',
                'alamat' => 'Tangerang, Indonesia',
                'no_telepon' => '021-0001003',
                'email' => 'order@dexa.co.id',
                'kontak_person' => 'Sales Dexa',
                'no_hp_kontak' => '08120001003',
                'npwp' => null,
                'status' => 'active',
                'lead_time_days' => 6,
                'catatan' => 'Fokus pada obat etikal dan hospital care',
            ],
            [
                'kode_supplier' => 'SUP-004',
                'nama_supplier' => 'PT Kalbe Farma Distribution',
                'alamat' => 'Jakarta Timur, Indonesia',
                'no_telepon' => '021-0001004',
                'email' => 'hospital@kalbe.co.id',
                'kontak_person' => 'Key Account Kalbe',
                'no_hp_kontak' => '08120001004',
                'npwp' => null,
                'status' => 'active',
                'lead_time_days' => 7,
                'catatan' => 'Produk farmasi, nutrisi, dan consumer health',
            ],
            [
                'kode_supplier' => 'SUP-005',
                'nama_supplier' => 'PT Sanbe Farma Distribution',
                'alamat' => 'Bandung, Indonesia',
                'no_telepon' => '022-0001005',
                'email' => 'sales@sanbe-farma.com',
                'kontak_person' => 'Sales Sanbe',
                'no_hp_kontak' => '08120001005',
                'npwp' => null,
                'status' => 'active',
                'lead_time_days' => 9,
                'catatan' => 'Penyedia antibiotik, injeksi, dan suplemen',
            ],
            [
                'kode_supplier' => 'SUP-006',
                'nama_supplier' => 'PT Pharos Indonesia',
                'alamat' => 'Jakarta Selatan, Indonesia',
                'no_telepon' => '021-0001006',
                'email' => 'order@pharos.co.id',
                'kontak_person' => 'CS Pharos',
                'no_hp_kontak' => '08120001006',
                'npwp' => null,
                'status' => 'active',
                'lead_time_days' => 8,
                'catatan' => 'Produk etikal dan OTC',
            ],
            [
                'kode_supplier' => 'SUP-007',
                'nama_supplier' => 'PT Soho Global Health',
                'alamat' => 'Jakarta, Indonesia',
                'no_telepon' => '021-0001007',
                'email' => 'sales@soho.co.id',
                'kontak_person' => 'SOHO Hospital Team',
                'no_hp_kontak' => '08120001007',
                'npwp' => null,
                'status' => 'active',
                'lead_time_days' => 7,
                'catatan' => 'Produk herbal modern dan farmasi',
            ],
            [
                'kode_supplier' => 'SUP-008',
                'nama_supplier' => 'PT Tempo Scan Pacific Tbk',
                'alamat' => 'Jakarta Barat, Indonesia',
                'no_telepon' => '021-0001008',
                'email' => 'b2b@temposcangroup.com',
                'kontak_person' => 'Key Account Tempo',
                'no_hp_kontak' => '08120001008',
                'npwp' => null,
                'status' => 'active',
                'lead_time_days' => 8,
                'catatan' => 'Produk consumer health dan ethical',
            ],
            [
                'kode_supplier' => 'SUP-009',
                'nama_supplier' => 'PT Bernofarm',
                'alamat' => 'Sidoarjo, Indonesia',
                'no_telepon' => '031-0001009',
                'email' => 'order@bernofarm.com',
                'kontak_person' => 'Tim Sales Bernofarm',
                'no_hp_kontak' => '08120001009',
                'npwp' => null,
                'status' => 'active',
                'lead_time_days' => 9,
                'catatan' => 'Produk injeksi dan antibiotik',
            ],
            [
                'kode_supplier' => 'SUP-010',
                'nama_supplier' => 'PT Novell Pharmaceutical Labs',
                'alamat' => 'Bogor, Indonesia',
                'no_telepon' => '0251-0001010',
                'email' => 'hospital@novellpharm.com',
                'kontak_person' => 'Tim KAM Novell',
                'no_hp_kontak' => '08120001010',
                'npwp' => null,
                'status' => 'active',
                'lead_time_days' => 10,
                'catatan' => 'Produk generik bermerek dan biologis',
            ],
        ];

        KategoriObat::upsert(
            array_map(
                fn (array $item) => [
                    ...$item,
                    'is_active' => true,
                    'created_at' => $now,
                    'updated_at' => $now,
                ],
                $kategoriObat,
            ),
            ['nama_kategori'],
            ['deskripsi', 'is_active', 'updated_at'],
        );

        JenisObat::upsert(
            array_map(
                fn (array $item) => [
                    ...$item,
                    'is_active' => true,
                    'created_at' => $now,
                    'updated_at' => $now,
                ],
                $jenisObat,
            ),
            ['nama_jenis'],
            ['deskripsi', 'is_active', 'updated_at'],
        );

        SatuanObat::upsert(
            array_map(
                fn (array $item) => [
                    ...$item,
                    'is_active' => true,
                    'created_at' => $now,
                    'updated_at' => $now,
                ],
                $satuanObat,
            ),
            ['nama_satuan'],
            ['singkatan', 'is_active', 'updated_at'],
        );

        Supplier::upsert(
            array_map(
                fn (array $item) => [
                    ...$item,
                    'created_at' => $now,
                    'updated_at' => $now,
                ],
                $suppliers,
            ),
            ['kode_supplier'],
            [
                'nama_supplier',
                'alamat',
                'no_telepon',
                'email',
                'kontak_person',
                'no_hp_kontak',
                'npwp',
                'status',
                'lead_time_days',
                'catatan',
                'updated_at',
            ],
        );

        $this->command?->info('✅ Pharmacy master data seeded successfully.');
        $this->command?->info('   - Kategori Obat: '.KategoriObat::count());
        $this->command?->info('   - Jenis Obat: '.JenisObat::count());
        $this->command?->info('   - Satuan Obat: '.SatuanObat::count());
        $this->command?->info('   - Supplier: '.Supplier::count());
    }
}
