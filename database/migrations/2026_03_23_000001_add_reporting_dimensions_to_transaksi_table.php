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
        if (! Schema::hasColumn('transaksi', 'supplier_nama')) {
            Schema::table('transaksi', function (Blueprint $table) {
                $table->string('supplier_nama')->nullable()->after('nomor_referensi');
            });
        }

        if (! Schema::hasColumn('transaksi', 'pelanggan_nama')) {
            Schema::table('transaksi', function (Blueprint $table) {
                $table->string('pelanggan_nama')->nullable();
            });
        }

        if (! Schema::hasColumn('transaksi', 'dokter_nama')) {
            Schema::table('transaksi', function (Blueprint $table) {
                $table->string('dokter_nama')->nullable();
            });
        }

        if (! Schema::hasColumn('transaksi', 'sales_nama')) {
            Schema::table('transaksi', function (Blueprint $table) {
                $table->string('sales_nama')->nullable();
            });
        }

        if (! Schema::hasColumn('transaksi', 'operator_nama')) {
            Schema::table('transaksi', function (Blueprint $table) {
                $table->string('operator_nama')->nullable();
            });
        }

        if (! Schema::hasColumn('transaksi', 'kasir_nama')) {
            Schema::table('transaksi', function (Blueprint $table) {
                $table->string('kasir_nama')->nullable();
            });
        }

        if (! Schema::hasColumn('transaksi', 'metode_pembayaran')) {
            Schema::table('transaksi', function (Blueprint $table) {
                $table->string('metode_pembayaran', 30)->nullable();
            });
        }

        if (! Schema::hasColumn('transaksi', 'tipe_penjualan')) {
            Schema::table('transaksi', function (Blueprint $table) {
                $table->string('tipe_penjualan', 30)->nullable();
            });
        }

        if (! Schema::hasColumn('transaksi', 'kategori_keuangan')) {
            Schema::table('transaksi', function (Blueprint $table) {
                $table->string('kategori_keuangan', 30)->default('none');
            });
        }

        if (! Schema::hasColumn('transaksi', 'status_pelunasan')) {
            Schema::table('transaksi', function (Blueprint $table) {
                $table->string('status_pelunasan', 30)->default('lunas');
            });
        }

        if (! Schema::hasColumn('transaksi', 'jatuh_tempo')) {
            Schema::table('transaksi', function (Blueprint $table) {
                $table->date('jatuh_tempo')->nullable();
            });
        }

        if (! Schema::hasColumn('transaksi', 'is_taxed')) {
            Schema::table('transaksi', function (Blueprint $table) {
                $table->boolean('is_taxed')->default(false);
            });
        }

        $this->addIndexIfMissing('transaksi', 'transaksi_supplier_nama_index', 'supplier_nama');
        $this->addIndexIfMissing('transaksi', 'transaksi_pelanggan_nama_index', 'pelanggan_nama');
        $this->addIndexIfMissing('transaksi', 'transaksi_dokter_nama_index', 'dokter_nama');
        $this->addIndexIfMissing('transaksi', 'transaksi_sales_nama_index', 'sales_nama');
        $this->addIndexIfMissing('transaksi', 'transaksi_operator_nama_index', 'operator_nama');
        $this->addIndexIfMissing('transaksi', 'transaksi_kasir_nama_index', 'kasir_nama');
        $this->addIndexIfMissing('transaksi', 'transaksi_metode_pembayaran_index', 'metode_pembayaran');
        $this->addIndexIfMissing('transaksi', 'transaksi_tipe_penjualan_index', 'tipe_penjualan');
        $this->addIndexIfMissing('transaksi', 'transaksi_kategori_keuangan_index', 'kategori_keuangan');
        $this->addIndexIfMissing('transaksi', 'transaksi_status_pelunasan_index', 'status_pelunasan');
        $this->addIndexIfMissing('transaksi', 'transaksi_jatuh_tempo_index', 'jatuh_tempo');
        $this->addIndexIfMissing('transaksi', 'transaksi_is_taxed_index', 'is_taxed');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $this->dropIndexIfExists('transaksi', 'transaksi_supplier_nama_index');
        $this->dropIndexIfExists('transaksi', 'transaksi_pelanggan_nama_index');
        $this->dropIndexIfExists('transaksi', 'transaksi_dokter_nama_index');
        $this->dropIndexIfExists('transaksi', 'transaksi_sales_nama_index');
        $this->dropIndexIfExists('transaksi', 'transaksi_operator_nama_index');
        $this->dropIndexIfExists('transaksi', 'transaksi_kasir_nama_index');
        $this->dropIndexIfExists('transaksi', 'transaksi_metode_pembayaran_index');
        $this->dropIndexIfExists('transaksi', 'transaksi_tipe_penjualan_index');
        $this->dropIndexIfExists('transaksi', 'transaksi_kategori_keuangan_index');
        $this->dropIndexIfExists('transaksi', 'transaksi_status_pelunasan_index');
        $this->dropIndexIfExists('transaksi', 'transaksi_jatuh_tempo_index');
        $this->dropIndexIfExists('transaksi', 'transaksi_is_taxed_index');

        $columns = [
            'supplier_nama',
            'pelanggan_nama',
            'dokter_nama',
            'sales_nama',
            'operator_nama',
            'kasir_nama',
            'metode_pembayaran',
            'tipe_penjualan',
            'kategori_keuangan',
            'status_pelunasan',
            'jatuh_tempo',
            'is_taxed',
        ];

        foreach ($columns as $column) {
            if (! Schema::hasColumn('transaksi', $column)) {
                continue;
            }

            Schema::table('transaksi', function (Blueprint $table) use ($column) {
                $table->dropColumn($column);
            });
        }
    }

    private function addIndexIfMissing(string $table, string $indexName, string $column): void
    {
        if (! Schema::hasColumn($table, $column) || $this->hasIndex($table, $indexName)) {
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
        $database = DB::getDatabaseName();
        $result = DB::selectOne(
            'SELECT COUNT(*) as total FROM information_schema.statistics WHERE table_schema = ? AND table_name = ? AND index_name = ?',
            [$database, $table, $indexName]
        );

        return ((int) ($result->total ?? 0)) > 0;
    }
};
