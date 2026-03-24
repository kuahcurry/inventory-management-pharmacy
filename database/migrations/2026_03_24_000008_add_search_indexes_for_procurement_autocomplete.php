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
        $this->addIndexIfMissing('obat', 'obat_nama_obat_index', 'nama_obat');
        $this->addIndexIfMissing('obat', 'obat_kode_obat_index', 'kode_obat');
        $this->addIndexIfMissing('supplier', 'supplier_nama_supplier_index', 'nama_supplier');
        $this->addIndexIfMissing('supplier', 'supplier_kode_supplier_index', 'kode_supplier');
        $this->addIndexIfMissing('hutang', 'hutang_supplier_payment_status_index', ['supplier_id', 'payment_status']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $this->dropIndexIfExists('obat', 'obat_nama_obat_index');
        $this->dropIndexIfExists('obat', 'obat_kode_obat_index');
        $this->dropIndexIfExists('supplier', 'supplier_nama_supplier_index');
        $this->dropIndexIfExists('supplier', 'supplier_kode_supplier_index');
        $this->dropIndexIfExists('hutang', 'hutang_supplier_payment_status_index');
    }

    private function addIndexIfMissing(string $table, string $indexName, string|array $column): void
    {
        if ($this->hasIndex($table, $indexName)) {
            return;
        }

        Schema::table($table, function (Blueprint $blueprint) use ($column, $indexName) {
            $blueprint->index($column, $indexName);
        });
    }

    private function dropIndexIfExists(string $table, string $indexName): void
    {
        if (! $this->hasIndex($table, $indexName)) {
            return;
        }

        Schema::table($table, function (Blueprint $blueprint) use ($indexName) {
            $blueprint->dropIndex($indexName);
        });
    }

    private function hasIndex(string $table, string $indexName): bool
    {
        $driver = DB::getDriverName();

        if ($driver === 'sqlite') {
            $tableName = str_replace("'", "''", $table);
            $indexes = DB::select("PRAGMA index_list('{$tableName}')");

            foreach ($indexes as $index) {
                if (($index->name ?? null) === $indexName) {
                    return true;
                }
            }

            return false;
        }

        if ($driver === 'pgsql') {
            $result = DB::selectOne(
                'SELECT COUNT(*) AS total FROM pg_indexes WHERE tablename = ? AND indexname = ?',
                [$table, $indexName]
            );

            return ((int) ($result->total ?? 0)) > 0;
        }

        $database = DB::getDatabaseName();
        $result = DB::selectOne(
            'SELECT COUNT(*) as total FROM information_schema.statistics WHERE table_schema = ? AND table_name = ? AND index_name = ?',
            [$database, $table, $indexName]
        );

        return ((int) ($result->total ?? 0)) > 0;
    }
};
