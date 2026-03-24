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
        if (! Schema::hasColumn('transaksi', 'supplier_id')) {
            Schema::table('transaksi', function (Blueprint $table) {
                $table->unsignedBigInteger('supplier_id')->nullable()->after('nomor_referensi');
                $table->index('supplier_id', 'transaksi_supplier_id_index');
            });

            if (DB::getDriverName() !== 'sqlite') {
                Schema::table('transaksi', function (Blueprint $table) {
                    $table->foreign('supplier_id')->references('id')->on('supplier')->nullOnDelete();
                });
            }
        }

        if (! Schema::hasColumn('hutang', 'supplier_id')) {
            Schema::table('hutang', function (Blueprint $table) {
                $table->unsignedBigInteger('supplier_id')->nullable()->after('transaksi_id');
                $table->index('supplier_id', 'hutang_supplier_id_index');
            });

            if (DB::getDriverName() !== 'sqlite') {
                Schema::table('hutang', function (Blueprint $table) {
                    $table->foreign('supplier_id')->references('id')->on('supplier')->nullOnDelete();
                });
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasColumn('hutang', 'supplier_id')) {
            if (DB::getDriverName() !== 'sqlite') {
                Schema::table('hutang', function (Blueprint $table) {
                    $table->dropForeign(['supplier_id']);
                });
            }

            Schema::table('hutang', function (Blueprint $table) {
                $table->dropIndex('hutang_supplier_id_index');
                $table->dropColumn('supplier_id');
            });
        }

        if (Schema::hasColumn('transaksi', 'supplier_id')) {
            if (DB::getDriverName() !== 'sqlite') {
                Schema::table('transaksi', function (Blueprint $table) {
                    $table->dropForeign(['supplier_id']);
                });
            }

            Schema::table('transaksi', function (Blueprint $table) {
                $table->dropIndex('transaksi_supplier_id_index');
                $table->dropColumn('supplier_id');
            });
        }
    }
};
