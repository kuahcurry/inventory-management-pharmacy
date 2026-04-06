<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            PharmacyMasterDataSeeder::class,
            UnitRumahSakitSeeder::class,
            UserSeeder::class,
            ObatSeeder::class,
        ]);
    }
}
