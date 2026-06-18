<?php

namespace Database\Seeders;

use App\Models\BatchObat;
use App\Models\GolonganObat;
use App\Models\Obat;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class ObatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * Drugs commonly found in small Indonesian retail pharmacies (apotek).
     * Golongan IDs: G=1(Bebas), GTB=2(Bebas Terbatas), GK=3(Keras), PSI=4(Psikotropika), NAR=5(Narkotika)
     */
    public function run(): void
    {
        // Resolve golongan IDs dynamically so the seeder is order-independent
        $golonganMap = GolonganObat::pluck('id', 'kode'); // ['G' => 1, 'GTB' => 2, ...]

        $G   = $golonganMap['G']   ?? null;
        $GTB = $golonganMap['GTB'] ?? null;
        $GK  = $golonganMap['GK']  ?? null;

        $obats = [
            // ─────────────────────────────────────────
            // ANALGESIK / ANTIPIRETIK (Bebas)
            // ─────────────────────────────────────────
            [
                'kode_obat'          => 'OBT-001',
                'nama_obat'          => 'Paracetamol 500mg',
                'nama_generik'       => 'Paracetamol',
                'nama_brand'         => 'Panadol',
                'kategori_id'        => 2,  // Analgesik
                'golongan_id'        => $G,
                'jenis_id'           => 1,  // Tablet
                'satuan_id'          => 1,  // Tablet
                'stok_minimum'       => 200,
                'harga_beli'         => 500,
                'harga_jual'         => 1000,
                'lokasi_penyimpanan' => 'Rak A-1',
                'deskripsi'          => 'Obat penurun demam dan pereda nyeri ringan.',
                'indikasi'           => 'Demam, sakit kepala, nyeri ringan hingga sedang.',
                'efek_samping'       => 'Jarang terjadi pada dosis normal. Dosis berlebih dapat merusak hati.',
                'kontraindikasi'     => 'Hipersensitif terhadap paracetamol. Gangguan fungsi hati berat.',
            ],
            [
                'kode_obat'          => 'OBT-002',
                'nama_obat'          => 'Ibuprofen 400mg',
                'nama_generik'       => 'Ibuprofen',
                'nama_brand'         => 'Proris',
                'kategori_id'        => 4,  // Antiinflamasi
                'golongan_id'        => $GTB,
                'jenis_id'           => 1,  // Tablet
                'satuan_id'          => 1,
                'stok_minimum'       => 100,
                'harga_beli'         => 800,
                'harga_jual'         => 1500,
                'lokasi_penyimpanan' => 'Rak A-2',
                'deskripsi'          => 'NSAID untuk pereda nyeri, demam, dan peradangan.',
                'indikasi'           => 'Nyeri, demam, nyeri haid, sakit gigi.',
                'efek_samping'       => 'Gangguan lambung, mual. Konsumsi setelah makan.',
                'kontraindikasi'     => 'Tukak lambung aktif, gagal ginjal berat, hamil trimester 3.',
            ],
            [
                'kode_obat'          => 'OBT-003',
                'nama_obat'          => 'Asam Mefenamat 500mg',
                'nama_generik'       => 'Asam Mefenamat',
                'nama_brand'         => 'Ponstan',
                'kategori_id'        => 4,  // Antiinflamasi
                'golongan_id'        => $GK,
                'jenis_id'           => 2,  // Kapsul
                'satuan_id'          => 2,
                'stok_minimum'       => 100,
                'harga_beli'         => 1200,
                'harga_jual'         => 2000,
                'lokasi_penyimpanan' => 'Rak A-3',
                'deskripsi'          => 'Pereda nyeri NSAID. Sering diresepkan untuk nyeri haid.',
                'indikasi'           => 'Nyeri akut ringan-sedang, nyeri haid.',
                'efek_samping'       => 'Gangguan GI, pusing, diare.',
                'kontraindikasi'     => 'Tukak lambung, gangguan ginjal/hati berat.',
            ],

            // ─────────────────────────────────────────
            // ANTIBIOTIK (Obat Keras – butuh resep)
            // ─────────────────────────────────────────
            [
                'kode_obat'          => 'OBT-004',
                'nama_obat'          => 'Amoxicillin 500mg',
                'nama_generik'       => 'Amoxicillin',
                'nama_brand'         => 'Amoxsan',
                'kategori_id'        => 1,  // Antibiotik
                'golongan_id'        => $GK,
                'jenis_id'           => 2,  // Kapsul
                'satuan_id'          => 2,
                'stok_minimum'       => 100,
                'harga_beli'         => 1500,
                'harga_jual'         => 2500,
                'lokasi_penyimpanan' => 'Rak B-1',
                'deskripsi'          => 'Antibiotik golongan penisilin spektrum luas.',
                'indikasi'           => 'Infeksi saluran napas, infeksi saluran kemih, ISPA.',
                'efek_samping'       => 'Diare, mual, ruam kulit.',
                'kontraindikasi'     => 'Hipersensitif terhadap penisilin.',
            ],
            [
                'kode_obat'          => 'OBT-005',
                'nama_obat'          => 'Amoxicillin 250mg Sirup Kering',
                'nama_generik'       => 'Amoxicillin',
                'nama_brand'         => 'Kalmoxillin',
                'kategori_id'        => 1,  // Antibiotik
                'golongan_id'        => $GK,
                'jenis_id'           => 4,  // Sirup
                'satuan_id'          => 4,  // Botol
                'stok_minimum'       => 30,
                'harga_beli'         => 12000,
                'harga_jual'         => 20000,
                'lokasi_penyimpanan' => 'Rak B-2',
                'deskripsi'          => 'Antibiotik penisilin dalam bentuk sirup untuk anak.',
                'indikasi'           => 'ISPA, otitis media, infeksi kulit pada anak.',
                'efek_samping'       => 'Diare, mual, ruam.',
                'kontraindikasi'     => 'Alergi penisilin.',
            ],
            [
                'kode_obat'          => 'OBT-006',
                'nama_obat'          => 'Cotrimoxazole 480mg (Trimethoprim 80mg + Sulfamethoxazole 400mg)',
                'nama_generik'       => 'Cotrimoxazole',
                'nama_brand'         => 'Bactrim',
                'kategori_id'        => 1,  // Antibiotik
                'golongan_id'        => $GK,
                'jenis_id'           => 1,  // Tablet
                'satuan_id'          => 1,
                'stok_minimum'       => 50,
                'harga_beli'         => 700,
                'harga_jual'         => 1200,
                'lokasi_penyimpanan' => 'Rak B-3',
                'deskripsi'          => 'Kombinasi antibiotik sulfonilamida dan trimetoprim.',
                'indikasi'           => 'ISK, diare bakteri, infeksi saluran napas.',
                'efek_samping'       => 'Mual, ruam, reaksi alergi.',
                'kontraindikasi'     => 'Gangguan hati/ginjal berat, hipersensitif sulfonamid.',
            ],

            // ─────────────────────────────────────────
            // ANTASIDA / LAMBUNG
            // ─────────────────────────────────────────
            [
                'kode_obat'          => 'OBT-007',
                'nama_obat'          => 'Antasida Doen (Aluminium Hidroksida + Magnesium Hidroksida)',
                'nama_generik'       => 'Antasida Doen',
                'nama_brand'         => 'Mylanta',
                'kategori_id'        => 8,  // Antasida
                'golongan_id'        => $G,
                'jenis_id'           => 1,  // Tablet
                'satuan_id'          => 1,
                'stok_minimum'       => 100,
                'harga_beli'         => 400,
                'harga_jual'         => 800,
                'lokasi_penyimpanan' => 'Rak C-1',
                'deskripsi'          => 'Antasida generik untuk menetralisir asam lambung.',
                'indikasi'           => 'Nyeri ulu hati, maag, kembung.',
                'efek_samping'       => 'Konstipasi (Al-OH), diare (Mg-OH) jika berlebihan.',
                'kontraindikasi'     => 'Gangguan ginjal berat.',
            ],
            [
                'kode_obat'          => 'OBT-008',
                'nama_obat'          => 'Omeprazole 20mg',
                'nama_generik'       => 'Omeprazole',
                'nama_brand'         => 'Losec',
                'kategori_id'        => 8,  // Antasida
                'golongan_id'        => $GK,
                'jenis_id'           => 2,  // Kapsul
                'satuan_id'          => 2,
                'stok_minimum'       => 50,
                'harga_beli'         => 3000,
                'harga_jual'         => 5000,
                'lokasi_penyimpanan' => 'Rak C-2',
                'deskripsi'          => 'Penghambat pompa proton (PPI). Menekan produksi asam lambung.',
                'indikasi'           => 'GERD, tukak lambung, tukak duodenum.',
                'efek_samping'       => 'Sakit kepala, diare, mual.',
                'kontraindikasi'     => 'Hipersensitif terhadap omeprazole.',
            ],

            // ─────────────────────────────────────────
            // ANTIHISTAMIN / ALERGI
            // ─────────────────────────────────────────
            [
                'kode_obat'          => 'OBT-009',
                'nama_obat'          => 'Cetirizine 10mg',
                'nama_generik'       => 'Cetirizine HCl',
                'nama_brand'         => 'Incidal-OD',
                'kategori_id'        => 7,  // Antihistamin
                'golongan_id'        => $GTB,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 100,
                'harga_beli'         => 1500,
                'harga_jual'         => 3000,
                'lokasi_penyimpanan' => 'Rak A-4',
                'deskripsi'          => 'Antihistamin generasi kedua, efek sedasi minimal.',
                'indikasi'           => 'Rinitis alergi, urtikaria, gatal-gatal.',
                'efek_samping'       => 'Mengantuk ringan, mulut kering.',
                'kontraindikasi'     => 'Hipersensitif terhadap cetirizine.',
            ],
            [
                'kode_obat'          => 'OBT-010',
                'nama_obat'          => 'Loratadine 10mg',
                'nama_generik'       => 'Loratadine',
                'nama_brand'         => 'Claritin',
                'kategori_id'        => 7,  // Antihistamin
                'golongan_id'        => $GTB,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 100,
                'harga_beli'         => 1200,
                'harga_jual'         => 2500,
                'lokasi_penyimpanan' => 'Rak A-5',
                'deskripsi'          => 'Antihistamin non-sedatif untuk alergi sehari-hari.',
                'indikasi'           => 'Rinitis alergi, urtikaria kronik.',
                'efek_samping'       => 'Jarang. Pusing, mulut kering.',
                'kontraindikasi'     => 'Hipersensitif terhadap loratadine.',
            ],

            // ─────────────────────────────────────────
            // ANTIDIARE / PENCERNAAN
            // ─────────────────────────────────────────
            [
                'kode_obat'          => 'OBT-011',
                'nama_obat'          => 'Oralit 200ml (Oral Rehydration Salt)',
                'nama_generik'       => 'Oralit',
                'nama_brand'         => 'Oralit WHO',
                'kategori_id'        => 14, // Antidiare
                'golongan_id'        => $G,
                'jenis_id'           => 9,  // Serbuk (21 = Serbuk)
                'satuan_id'          => 9,  // Sachet
                'stok_minimum'       => 100,
                'harga_beli'         => 2000,
                'harga_jual'         => 4000,
                'lokasi_penyimpanan' => 'Rak D-1',
                'deskripsi'          => 'Larutan rehidrasi oral untuk menggantikan cairan akibat diare.',
                'indikasi'           => 'Dehidrasi ringan-sedang akibat diare.',
                'efek_samping'       => 'Mual jika diminum terlalu cepat.',
                'kontraindikasi'     => 'Ileus.',
            ],
            [
                'kode_obat'          => 'OBT-012',
                'nama_obat'          => 'Loperamide 2mg',
                'nama_generik'       => 'Loperamide HCl',
                'nama_brand'         => 'Imodium',
                'kategori_id'        => 14, // Antidiare
                'golongan_id'        => $GTB,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 50,
                'harga_beli'         => 1000,
                'harga_jual'         => 2000,
                'lokasi_penyimpanan' => 'Rak D-2',
                'deskripsi'          => 'Antidiare yang memperlambat motilitas usus.',
                'indikasi'           => 'Diare akut non-spesifik.',
                'efek_samping'       => 'Konstipasi, perut kembung.',
                'kontraindikasi'     => 'Diare berdarah, kolitis pseudomembranosa.',
            ],
            [
                'kode_obat'          => 'OBT-013',
                'nama_obat'          => 'Attapulgite 600mg',
                'nama_generik'       => 'Dioctahedral Smectite',
                'nama_brand'         => 'Neo Entrostop',
                'kategori_id'        => 14, // Antidiare
                'golongan_id'        => $G,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 100,
                'harga_beli'         => 500,
                'harga_jual'         => 1000,
                'lokasi_penyimpanan' => 'Rak D-3',
                'deskripsi'          => 'Adsorben untuk diare ringan.',
                'indikasi'           => 'Diare non-spesifik.',
                'efek_samping'       => 'Konstipasi jika berlebihan.',
                'kontraindikasi'     => 'Obstruksi usus.',
            ],

            // ─────────────────────────────────────────
            // ANTIEMETIK / MUAL
            // ─────────────────────────────────────────
            [
                'kode_obat'          => 'OBT-014',
                'nama_obat'          => 'Domperidone 10mg',
                'nama_generik'       => 'Domperidone',
                'nama_brand'         => 'Vometa',
                'kategori_id'        => 12, // Antiemetik
                'golongan_id'        => $GK,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 50,
                'harga_beli'         => 1500,
                'harga_jual'         => 2500,
                'lokasi_penyimpanan' => 'Rak C-3',
                'deskripsi'          => 'Antagonis dopamin untuk mual dan muntah.',
                'indikasi'           => 'Mual, muntah, perut kembung.',
                'efek_samping'       => 'Efek ekstrapiramidal jarang, mulut kering.',
                'kontraindikasi'     => 'Aritmia jantung, prolaktinoma.',
            ],

            // ─────────────────────────────────────────
            // VITAMIN & SUPLEMEN
            // ─────────────────────────────────────────
            [
                'kode_obat'          => 'OBT-015',
                'nama_obat'          => 'Vitamin C 500mg',
                'nama_generik'       => 'Ascorbic Acid',
                'nama_brand'         => 'Vitacimin',
                'kategori_id'        => 11, // Vitamin & Suplemen
                'golongan_id'        => $G,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 200,
                'harga_beli'         => 300,
                'harga_jual'         => 600,
                'lokasi_penyimpanan' => 'Rak F-1',
                'deskripsi'          => 'Suplemen vitamin C untuk daya tahan tubuh.',
                'indikasi'           => 'Defisiensi vitamin C, peningkatan imunitas.',
                'efek_samping'       => 'Gangguan pencernaan pada dosis tinggi.',
                'kontraindikasi'     => 'Batu ginjal oksalat (dosis tinggi).',
            ],
            [
                'kode_obat'          => 'OBT-016',
                'nama_obat'          => 'Zinc Sulfate 20mg',
                'nama_generik'       => 'Zinc Sulfate',
                'nama_brand'         => 'Zinkid',
                'kategori_id'        => 11,
                'golongan_id'        => $G,
                'jenis_id'           => 4,  // Sirup
                'satuan_id'          => 4,  // Botol
                'stok_minimum'       => 30,
                'harga_beli'         => 15000,
                'harga_jual'         => 25000,
                'lokasi_penyimpanan' => 'Rak F-2',
                'deskripsi'          => 'Suplemen zinc untuk diare pada anak dan imunitas.',
                'indikasi'           => 'Diare pada anak, defisiensi zinc.',
                'efek_samping'       => 'Mual jika dosis tinggi.',
                'kontraindikasi'     => 'Hipersensitif zinc.',
            ],
            [
                'kode_obat'          => 'OBT-017',
                'nama_obat'          => 'Vitamin B-Complex (B1, B6, B12)',
                'nama_generik'       => 'Thiamine + Pyridoxine + Cyanocobalamin',
                'nama_brand'         => 'Neurobion',
                'kategori_id'        => 11,
                'golongan_id'        => $G,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 100,
                'harga_beli'         => 500,
                'harga_jual'         => 1000,
                'lokasi_penyimpanan' => 'Rak F-3',
                'deskripsi'          => 'Suplemen vitamin B kompleks untuk saraf dan energi.',
                'indikasi'           => 'Defisiensi B1/B6/B12, neuritis perifer.',
                'efek_samping'       => 'Sangat jarang pada dosis terapi.',
                'kontraindikasi'     => 'Hipersensitif vitamin B.',
            ],

            // ─────────────────────────────────────────
            // ANTIHIPERTENSI (Obat Keras)
            // ─────────────────────────────────────────
            [
                'kode_obat'          => 'OBT-018',
                'nama_obat'          => 'Amlodipine 5mg',
                'nama_generik'       => 'Amlodipine Besylate',
                'nama_brand'         => 'Norvasc',
                'kategori_id'        => 5,  // Antihipertensi
                'golongan_id'        => $GK,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 100,
                'harga_beli'         => 2000,
                'harga_jual'         => 3500,
                'lokasi_penyimpanan' => 'Rak E-1',
                'deskripsi'          => 'Penghambat kanal kalsium untuk hipertensi.',
                'indikasi'           => 'Hipertensi, angina stabil.',
                'efek_samping'       => 'Edema perifer, pusing, wajah memerah.',
                'kontraindikasi'     => 'Syok kardiogenik, stenosis aorta berat.',
            ],
            [
                'kode_obat'          => 'OBT-019',
                'nama_obat'          => 'Captopril 25mg',
                'nama_generik'       => 'Captopril',
                'nama_brand'         => 'Capoten',
                'kategori_id'        => 5,
                'golongan_id'        => $GK,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 50,
                'harga_beli'         => 600,
                'harga_jual'         => 1000,
                'lokasi_penyimpanan' => 'Rak E-2',
                'deskripsi'          => 'ACE inhibitor untuk hipertensi dan gagal jantung.',
                'indikasi'           => 'Hipertensi, gagal jantung, diabetik nefropati.',
                'efek_samping'       => 'Batuk kering persisten, hiperkalemia.',
                'kontraindikasi'     => 'Hamil, riwayat angioedema, stenosis arteri renalis bilateral.',
            ],

            // ─────────────────────────────────────────
            // ANTIDIABETES (Obat Keras)
            // ─────────────────────────────────────────
            [
                'kode_obat'          => 'OBT-020',
                'nama_obat'          => 'Metformin 500mg',
                'nama_generik'       => 'Metformin HCl',
                'nama_brand'         => 'Glucophage',
                'kategori_id'        => 6,  // Antidiabetes
                'golongan_id'        => $GK,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 100,
                'harga_beli'         => 600,
                'harga_jual'         => 1200,
                'lokasi_penyimpanan' => 'Rak E-3',
                'deskripsi'          => 'Antidiabetes oral lini pertama untuk DM tipe 2.',
                'indikasi'           => 'Diabetes mellitus tipe 2.',
                'efek_samping'       => 'Mual, diare, nyeri perut (kurangi dengan makan).',
                'kontraindikasi'     => 'GFR < 30, asidosis metabolik, alkoholisme.',
            ],

            // ─────────────────────────────────────────
            // BATUK & PILEK (Bebas / Bebas Terbatas)
            // ─────────────────────────────────────────
            [
                'kode_obat'          => 'OBT-021',
                'nama_obat'          => 'OBH Combi Batuk Berdahak 100ml',
                'nama_generik'       => 'Gliseril Guaiakolat + Chlorphenamine + Dextromethorphan',
                'nama_brand'         => 'OBH Combi',
                'kategori_id'        => 9,  // Bronkodilator / Pernapasan
                'golongan_id'        => $GTB,
                'jenis_id'           => 4,  // Sirup
                'satuan_id'          => 4,  // Botol
                'stok_minimum'       => 30,
                'harga_beli'         => 12000,
                'harga_jual'         => 20000,
                'lokasi_penyimpanan' => 'Rak G-1',
                'deskripsi'          => 'Obat batuk berdahak kombinasi ekspektoran-antihistamin.',
                'indikasi'           => 'Batuk berdahak, batuk alergi.',
                'efek_samping'       => 'Mengantuk, mulut kering.',
                'kontraindikasi'     => 'Hipersensitif, tidak untuk anak < 2 tahun.',
            ],
            [
                'kode_obat'          => 'OBT-022',
                'nama_obat'          => 'Pseudoephedrine + Triprolidine (CTM) Tablet',
                'nama_generik'       => 'Pseudoephedrine + Triprolidine',
                'nama_brand'         => 'Actifed',
                'kategori_id'        => 7,  // Antihistamin
                'golongan_id'        => $GTB,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 50,
                'harga_beli'         => 1000,
                'harga_jual'         => 1800,
                'lokasi_penyimpanan' => 'Rak G-2',
                'deskripsi'          => 'Dekongestan dan antihistamin untuk flu dan hidung tersumbat.',
                'indikasi'           => 'Flu, hidung tersumbat, rinitis.',
                'efek_samping'       => 'Mengantuk, jantung berdebar, mulut kering.',
                'kontraindikasi'     => 'Hipertensi, hipertiroid, glaukoma.',
            ],

            // ─────────────────────────────────────────
            // ANTISEPTIK / TOPIKAL (Bebas)
            // ─────────────────────────────────────────
            [
                'kode_obat'          => 'OBT-023',
                'nama_obat'          => 'Povidone Iodine 10% 30ml',
                'nama_generik'       => 'Povidone Iodine',
                'nama_brand'         => 'Betadine',
                'kategori_id'        => 16, // Antiseptik
                'golongan_id'        => $G,
                'jenis_id'           => 9,  // Salep / liquid
                'satuan_id'          => 4,  // Botol
                'stok_minimum'       => 20,
                'harga_beli'         => 8000,
                'harga_jual'         => 15000,
                'lokasi_penyimpanan' => 'Rak H-1',
                'deskripsi'          => 'Antiseptik topikal untuk luka dan infeksi kulit.',
                'indikasi'           => 'Disinfeksi luka lecet, luka bakar ringan.',
                'efek_samping'       => 'Iritasi kulit pada penggunaan berkepanjangan.',
                'kontraindikasi'     => 'Hipersensitif iodine. Jangan ditelan.',
            ],
            [
                'kode_obat'          => 'OBT-024',
                'nama_obat'          => 'Asam Fusidat Krim 2% 5g',
                'nama_generik'       => 'Asam Fusidat',
                'nama_brand'         => 'Fucidin',
                'kategori_id'        => 20, // Obat Kulit
                'golongan_id'        => $GK,
                'jenis_id'           => 10, // Krim
                'satuan_id'          => 7,  // Tube
                'stok_minimum'       => 20,
                'harga_beli'         => 25000,
                'harga_jual'         => 45000,
                'lokasi_penyimpanan' => 'Rak H-2',
                'deskripsi'          => 'Antibiotik topikal untuk infeksi bakteri kulit.',
                'indikasi'           => 'Impetigo, folikulitis, infeksi kulit superfisial.',
                'efek_samping'       => 'Iritasi lokal, gatal.',
                'kontraindikasi'     => 'Hipersensitif asam fusidat.',
            ],

            // ─────────────────────────────────────────
            // BRONKODILATOR / ASMA
            // ─────────────────────────────────────────
            [
                'kode_obat'          => 'OBT-025',
                'nama_obat'          => 'Salbutamol Inhaler 100mcg/dosis (200 dosis)',
                'nama_generik'       => 'Salbutamol',
                'nama_brand'         => 'Ventolin Evohaler',
                'kategori_id'        => 9,  // Bronkodilator
                'golongan_id'        => $GK,
                'jenis_id'           => 18, // Inhaler
                'satuan_id'          => 15, // Buah
                'stok_minimum'       => 10,
                'harga_beli'         => 55000,
                'harga_jual'         => 85000,
                'lokasi_penyimpanan' => 'Rak G-3',
                'deskripsi'          => 'Bronkodilator kerja cepat untuk serangan asma.',
                'indikasi'           => 'Asma bronkial, bronkospasme.',
                'efek_samping'       => 'Tremor, palpitasi, sakit kepala.',
                'kontraindikasi'     => 'Hipersensitif salbutamol.',
            ],
            [
                'kode_obat'          => 'OBT-026',
                'nama_obat'          => 'Triminza Sirup 60ml',
                'nama_generik'       => 'Pseudoephedrine HCl + Chlorpheniramine Maleate',
                'nama_brand'         => 'Triminza',
                'kategori_id'        => 7,  // Antihistamin
                'golongan_id'        => $GK, // Obat Keras (butuh resep)
                'jenis_id'           => 4,  // Sirup
                'satuan_id'          => 4,  // Botol
                'stok_minimum'       => 20,
                'harga_beli'         => 15000,
                'harga_jual'         => 22000,
                'lokasi_penyimpanan' => 'Rak G-4',
                'deskripsi'          => 'Obat flu dan batuk untuk meringankan gejala bersin-bersin dan hidung tersumbat.',
                'indikasi'           => 'Meringankan gejala flu seperti bersin dan hidung tersumbat.',
                'efek_samping'       => 'Mengantuk, mulut kering, takikardia.',
                'kontraindikasi'     => 'Penderita hipertensi berat, penyakit jantung koroner.',
            ],

            // ─────────────────────────────────────────
            // OBAT BEBAS POPULER (Common OTC)
            // ─────────────────────────────────────────
            [
                'kode_obat'          => 'OBT-027',
                'nama_obat'          => 'Paramex 500mg (Paracetamol + Caffeine)',
                'nama_generik'       => 'Paracetamol + Caffeine',
                'nama_brand'         => 'Paramex',
                'kategori_id'        => 2,  // Analgesik
                'golongan_id'        => $G,
                'jenis_id'           => 1,  // Tablet
                'satuan_id'          => 1,
                'stok_minimum'       => 100,
                'harga_beli'         => 500,
                'harga_jual'         => 1000,
                'lokasi_penyimpanan' => 'Rak A-6',
                'deskripsi'          => 'Kombinasi paracetamol dan kafein untuk sakit kepala.',
                'indikasi'           => 'Sakit kepala, migrain, nyeri otot.',
                'efek_samping'       => 'Mual, gelisah pada dosis tinggi.',
                'kontraindikasi'     => 'Hipersensitif, gangguan hati berat.',
            ],
            [
                'kode_obat'          => 'OBT-028',
                'nama_obat'          => 'Antimo Tablet (Dimenhydrinate 50mg)',
                'nama_generik'       => 'Dimenhydrinate',
                'nama_brand'         => 'Antimo',
                'kategori_id'        => 12, // Antiemetik
                'golongan_id'        => $GTB,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 50,
                'harga_beli'         => 800,
                'harga_jual'         => 1500,
                'lokasi_penyimpanan' => 'Rak A-7',
                'deskripsi'          => 'Obat mabuk perjalanan dan anti mual.',
                'indikasi'           => 'Mabuk darat/laut/udara, vertigo.',
                'efek_samping'       => 'Mengantuk berat, mulut kering.',
                'kontraindikasi'     => 'Glaukoma, pembesaran prostat.',
            ],
            [
                'kode_obat'          => 'OBT-029',
                'nama_obat'          => 'Mixagrip Flu (Paracetamol + Pseudoephedrine + CTM)',
                'nama_generik'       => 'Paracetamol + Pseudoephedrine + Chlorpheniramine',
                'nama_brand'         => 'Mixagrip',
                'kategori_id'        => 7,  // Antihistamin
                'golongan_id'        => $GTB,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 100,
                'harga_beli'         => 800,
                'harga_jual'         => 1500,
                'lokasi_penyimpanan' => 'Rak G-5',
                'deskripsi'          => 'Obat flu kombinasi untuk meredakan gejala pilek dan demam.',
                'indikasi'           => 'Flu, demam, hidung tersumbat, bersin.',
                'efek_samping'       => 'Mengantuk, mulut kering.',
                'kontraindikasi'     => 'Hipertensi, hipertiroid, glaukoma.',
            ],
            [
                'kode_obat'          => 'OBT-030',
                'nama_obat'          => 'Promag Tablet (Aluminium + Magnesium + Simethicone)',
                'nama_generik'       => 'Antasida + Simethicone',
                'nama_brand'         => 'Promag',
                'kategori_id'        => 8,  // Antasida
                'golongan_id'        => $G,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 100,
                'harga_beli'         => 600,
                'harga_jual'         => 1200,
                'lokasi_penyimpanan' => 'Rak C-4',
                'deskripsi'          => 'Antasida kombinasi dengan anti kembung untuk maag.',
                'indikasi'           => 'Maag, kembung, nyeri ulu hati.',
                'efek_samping'       => 'Konstipasi ringan.',
                'kontraindikasi'     => 'Gagal ginjal berat.',
            ],
            [
                'kode_obat'          => 'OBT-031',
                'nama_obat'          => 'Tolak Angin Cair 15ml',
                'nama_generik'       => 'Herbal (Jahe, Mint, Kayu Manis dll)',
                'nama_brand'         => 'Tolak Angin Sido Muncul',
                'kategori_id'        => 11, // Vitamin & Suplemen
                'golongan_id'        => $G,
                'jenis_id'           => 4,  // Sirup
                'satuan_id'          => 9,  // Sachet
                'stok_minimum'       => 50,
                'harga_beli'         => 1500,
                'harga_jual'         => 3000,
                'lokasi_penyimpanan' => 'Rak F-4',
                'deskripsi'          => 'Obat herbal untuk masuk angin, perut kembung, dan mual.',
                'indikasi'           => 'Masuk angin, kembung, mual, meriang.',
                'efek_samping'       => 'Jarang dilaporkan.',
                'kontraindikasi'     => 'Hipersensitif terhadap bahan herbal.',
            ],
            [
                'kode_obat'          => 'OBT-032',
                'nama_obat'          => 'Konidin Tablet (Dextromethorphan + Guaifenesin + Pseudoephedrine)',
                'nama_generik'       => 'Dextromethorphan + Guaifenesin + Pseudoephedrine',
                'nama_brand'         => 'Konidin',
                'kategori_id'        => 9,  // Bronkodilator
                'golongan_id'        => $GTB,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 50,
                'harga_beli'         => 1000,
                'harga_jual'         => 2000,
                'lokasi_penyimpanan' => 'Rak G-6',
                'deskripsi'          => 'Obat batuk kombinasi untuk batuk tidak berdahak.',
                'indikasi'           => 'Batuk kering, batuk berdahak ringan.',
                'efek_samping'       => 'Mengantuk, pusing.',
                'kontraindikasi'     => 'Asma, batuk kronis.',
            ],
            [
                'kode_obat'          => 'OBT-033',
                'nama_obat'          => 'Diapet Tablet (Psidium guajava + Curcuma)',
                'nama_generik'       => 'Ekstrak Jambu Biji + Kunyit',
                'nama_brand'         => 'Diapet',
                'kategori_id'        => 14, // Antidiare
                'golongan_id'        => $G,
                'jenis_id'           => 2,  // Kapsul
                'satuan_id'          => 2,
                'stok_minimum'       => 50,
                'harga_beli'         => 1200,
                'harga_jual'         => 2500,
                'lokasi_penyimpanan' => 'Rak D-4',
                'deskripsi'          => 'Obat herbal untuk diare dan gangguan pencernaan.',
                'indikasi'           => 'Diare akut non-spesifik, gangguan pencernaan.',
                'efek_samping'       => 'Jarang dilaporkan.',
                'kontraindikasi'     => 'Hipersensitif terhadap bahan.',
            ],
            [
                'kode_obat'          => 'OBT-034',
                'nama_obat'          => 'Minyak Kayu Putih Cap Lang 30ml',
                'nama_generik'       => 'Oleum Cajuputi',
                'nama_brand'         => 'Cap Lang',
                'kategori_id'        => 16, // Antiseptik
                'golongan_id'        => $G,
                'jenis_id'           => 9,  // Liquid/Minuman
                'satuan_id'          => 4,  // Botol
                'stok_minimum'       => 20,
                'harga_beli'         => 12000,
                'harga_jual'         => 22000,
                'lokasi_penyimpanan' => 'Rak H-3',
                'deskripsi'          => 'Minyak kayu putih untuk menghangatkan badan dan meredakan perut kembung.',
                'indikasi'           => 'Masuk angin, kembung, nyeri otot, gatal gigitan serangga.',
                'efek_samping'       => 'Iritasi kulit pada pemakaian berlebihan.',
                'kontraindikasi'     => 'Hipersensitif, jangan diminum.',
            ],
            [
                'kode_obat'          => 'OBT-035',
                'nama_obat'          => 'Sanaflu Flu & Batuk Sirup 60ml',
                'nama_generik'       => 'Paracetamol + Chlorpheniramine + Dextromethorphan',
                'nama_brand'         => 'Sanaflu',
                'kategori_id'        => 7,  // Antihistamin
                'golongan_id'        => $GTB,
                'jenis_id'           => 4,  // Sirup
                'satuan_id'          => 4,  // Botol
                'stok_minimum'       => 20,
                'harga_beli'         => 10000,
                'harga_jual'         => 18000,
                'lokasi_penyimpanan' => 'Rak G-7',
                'deskripsi'          => 'Sirup untuk meredakan gejala flu dan batuk pada anak dan dewasa.',
                'indikasi'           => 'Flu, batuk, demam ringan.',
                'efek_samping'       => 'Mengantuk, mulut kering.',
                'kontraindikasi'     => 'Hipersensitif. Tidak untuk anak < 2 tahun.',
            ],
            [
                'kode_obat'          => 'OBT-036',
                'nama_obat'          => 'Entrostop Anak Sirup 60ml',
                'nama_generik'       => 'Attapulgite',
                'nama_brand'         => 'Entrostop',
                'kategori_id'        => 14, // Antidiare
                'golongan_id'        => $G,
                'jenis_id'           => 4,  // Sirup
                'satuan_id'          => 4,  // Botol
                'stok_minimum'       => 20,
                'harga_beli'         => 8000,
                'harga_jual'         => 15000,
                'lokasi_penyimpanan' => 'Rak D-5',
                'deskripsi'          => 'Sirup untuk diare pada anak-anak.',
                'indikasi'           => 'Diare akut pada anak.',
                'efek_samping'       => 'Konstipasi jika berlebihan.',
                'kontraindikasi'     => 'Obstruksi usus.',
            ],
            [
                'kode_obat'          => 'OBT-037',
                'nama_obat'          => 'Bodrex Migra (Paracetamol + Caffeine + Propyphenazone)',
                'nama_generik'       => 'Paracetamol + Caffeine + Propyphenazone',
                'nama_brand'         => 'Bodrex',
                'kategori_id'        => 2,  // Analgesik
                'golongan_id'        => $G,
                'jenis_id'           => 1,
                'satuan_id'          => 1,
                'stok_minimum'       => 100,
                'harga_beli'         => 600,
                'harga_jual'         => 1200,
                'lokasi_penyimpanan' => 'Rak A-8',
                'deskripsi'          => 'Obat sakit kepala dan migrain kombinasi.',
                'indikasi'           => 'Sakit kepala tegang, migrain, nyeri haid.',
                'efek_samping'       => 'Mual, gangguan lambung ringan.',
                'kontraindikasi'     => 'Gangguan lambung berat, hipersensitif.',
            ],
        ];

        foreach ($obats as $obatData) {
            $obat = Obat::create($obatData);
            $this->createSampleBatches($obat);
        }
    }

    private function createSampleBatches(Obat $obat): void
    {
        $batchCount = rand(2, 3);
        $totalStok  = 0;
        $now        = Carbon::now();

        for ($i = 1; $i <= $batchCount; $i++) {
            $stokAwal      = rand(50, 300);
            $stokTersedia  = rand(intval($stokAwal * 0.4), $stokAwal);
            $totalStok    += $stokTersedia;

            $tanggalMasuk   = $now->copy()->subDays(rand(30, 180));
            $tanggalProduksi = $tanggalMasuk->copy()->subMonths(3);
            $tanggalExpired = $tanggalMasuk->copy()->addMonths(rand(12, 30));

            // 1 in 4 chance first batch is expiring soon (for alert testing)
            if ($i === 1 && rand(1, 4) === 1) {
                $tanggalExpired = $now->copy()->addDays(rand(14, 60));
            }

            $year  = $tanggalMasuk->format('Y');
            $month = $tanggalMasuk->format('m');
            $seq   = str_pad($i, 3, '0', STR_PAD_LEFT);

            BatchObat::create([
                'obat_id'          => $obat->id,
                'nomor_batch'      => "BC-{$year}{$month}-{$seq}",
                'tanggal_produksi' => $tanggalProduksi,
                'tanggal_expired'  => $tanggalExpired,
                'tanggal_masuk'    => $tanggalMasuk,
                'stok_awal'        => $stokAwal,
                'stok_tersedia'    => $stokTersedia,
                'harga_beli'       => $obat->harga_beli,
                'status'           => $tanggalExpired->isPast() ? 'expired' : 'active',
                'catatan'          => null,
            ]);
        }

        $obat->update(['stok_total' => $totalStok]);
    }
}
