<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (Schema::hasTable('transaksi')) {
            if (! Schema::hasColumn('transaksi', 'bank_code')) {
                Schema::table('transaksi', function (Blueprint $table) {
                    $table->string('bank_code', 16)->nullable()->after('metode_pembayaran');
                    $table->index('bank_code', 'transaksi_bank_code_index');
                });
            }

            if (! Schema::hasColumn('transaksi', 'bank_nama')) {
                Schema::table('transaksi', function (Blueprint $table) {
                    $table->string('bank_nama')->nullable()->after('bank_code');
                    $table->index('bank_nama', 'transaksi_bank_nama_index');
                });
            }
        }

        if (Schema::hasTable('biaya_operasional')) {
            if (! Schema::hasColumn('biaya_operasional', 'bank_code')) {
                Schema::table('biaya_operasional', function (Blueprint $table) {
                    $table->string('bank_code', 16)->nullable()->after('metode_pembayaran');
                    $table->index('bank_code', 'biaya_operasional_bank_code_index');
                });
            }

            if (! Schema::hasColumn('biaya_operasional', 'bank_nama')) {
                Schema::table('biaya_operasional', function (Blueprint $table) {
                    $table->string('bank_nama')->nullable()->after('bank_code');
                    $table->index('bank_nama', 'biaya_operasional_bank_nama_index');
                });
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasTable('transaksi')) {
            if (Schema::hasColumn('transaksi', 'bank_nama')) {
                Schema::table('transaksi', function (Blueprint $table) {
                    $table->dropIndex('transaksi_bank_nama_index');
                    $table->dropColumn('bank_nama');
                });
            }

            if (Schema::hasColumn('transaksi', 'bank_code')) {
                Schema::table('transaksi', function (Blueprint $table) {
                    $table->dropIndex('transaksi_bank_code_index');
                    $table->dropColumn('bank_code');
                });
            }
        }

        if (Schema::hasTable('biaya_operasional')) {
            if (Schema::hasColumn('biaya_operasional', 'bank_nama')) {
                Schema::table('biaya_operasional', function (Blueprint $table) {
                    $table->dropIndex('biaya_operasional_bank_nama_index');
                    $table->dropColumn('bank_nama');
                });
            }

            if (Schema::hasColumn('biaya_operasional', 'bank_code')) {
                Schema::table('biaya_operasional', function (Blueprint $table) {
                    $table->dropIndex('biaya_operasional_bank_code_index');
                    $table->dropColumn('bank_code');
                });
            }
        }
    }
};
