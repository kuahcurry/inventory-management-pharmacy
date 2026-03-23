<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $database = DB::getDatabaseName();

        $column = DB::selectOne(
            'SELECT DATA_TYPE as data_type, COLUMN_TYPE as column_type FROM information_schema.columns WHERE table_schema = ? AND table_name = ? AND column_name = ?',
            [$database, 'transaksi', 'metode_pembayaran']
        );

        if (! $column) {
            return;
        }

        if (($column->data_type ?? null) === 'enum') {
            DB::statement("ALTER TABLE transaksi MODIFY metode_pembayaran VARCHAR(30) NULL DEFAULT 'cash'");
        }

        // Normalize legacy values used by older enum definitions.
        DB::table('transaksi')
            ->where('metode_pembayaran', 'konsinyasi_sistem')
            ->update(['metode_pembayaran' => 'konsinyasi']);

        DB::table('transaksi')
            ->where('metode_pembayaran', 'tempo_sistem')
            ->update(['metode_pembayaran' => 'tempo']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Intentionally left as no-op to avoid destructive enum coercion on rollback.
    }
};
