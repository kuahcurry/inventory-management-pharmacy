<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('stok_opname', function (Blueprint $table) {
            $table->string('unit_nama', 100)->nullable()->after('unit_id');
        });

        $unitNameById = DB::table('unit_rumah_sakit')
            ->select('id', 'nama_unit')
            ->pluck('nama_unit', 'id');

        DB::table('stok_opname')
            ->select('id', 'unit_id')
            ->orderBy('id')
            ->chunkById(500, function ($rows) use ($unitNameById): void {
                foreach ($rows as $row) {
                    $unitName = $row->unit_id ? ($unitNameById[$row->unit_id] ?? null) : null;

                    DB::table('stok_opname')
                        ->where('id', $row->id)
                        ->update(['unit_nama' => $unitName]);
                }
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('stok_opname', function (Blueprint $table) {
            $table->dropColumn('unit_nama');
        });
    }
};
