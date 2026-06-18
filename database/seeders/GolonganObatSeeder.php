<?php

namespace Database\Seeders;

use App\Models\GolonganObat;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class GolonganObatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * Seeds the 5 standard Indonesian drug classifications (Permenkes No. 917/1993)
     */
    public function run(): void
    {
        $now = Carbon::now();

        $golongan = [
            [
                'nama_golongan' => 'Obat Bebas',
                'kode'          => 'G',
                'deskripsi'     => 'Obat yang dapat dibeli tanpa resep dokter. Ditandai dengan lingkaran hijau.',
                'butuh_resep'   => false,
            ],
            [
                'nama_golongan' => 'Obat Bebas Terbatas',
                'kode'          => 'GTB',
                'deskripsi'     => 'Obat yang dapat dibeli tanpa resep namun pemakaiannya perlu diperhatikan. Ditandai dengan lingkaran biru.',
                'butuh_resep'   => false,
            ],
            [
                'nama_golongan' => 'Obat Keras',
                'kode'          => 'GK',
                'deskripsi'     => 'Obat yang hanya dapat diperoleh dengan resep dokter. Ditandai dengan lingkaran merah dengan huruf K.',
                'butuh_resep'   => true,
            ],
            [
                'nama_golongan' => 'Psikotropika',
                'kode'          => 'PSI',
                'deskripsi'     => 'Obat golongan psikotropika yang penggunaannya diawasi ketat. Harus dengan resep dokter.',
                'butuh_resep'   => true,
            ],
            [
                'nama_golongan' => 'Narkotika',
                'kode'          => 'NAR',
                'deskripsi'     => 'Obat golongan narkotika yang penggunaannya diawasi sangat ketat sesuai UU No. 35/2009.',
                'butuh_resep'   => true,
            ],
        ];

        GolonganObat::upsert(
            array_map(
                fn (array $item) => [
                    ...$item,
                    'created_at' => $now,
                    'updated_at' => $now,
                ],
                $golongan,
            ),
            ['kode'],
            ['nama_golongan', 'deskripsi', 'butuh_resep', 'updated_at'],
        );

        $this->command?->info('✅ Golongan obat seeded: ' . GolonganObat::count() . ' golongan.');
    }
}
