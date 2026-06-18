<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DummyDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sqlPath = base_path('dummy_data_min20.sql');
        
        if (!file_exists($sqlPath)) {
            $this->command->error("File dummy_data_min20.sql not found at " . $sqlPath);
            return;
        }

        $this->command->info("Executing dummy_data_min20.sql...");
        
        DB::unprepared(file_get_contents($sqlPath));
        
        $this->command->info("Dummy data loaded successfully!");
    }
}
