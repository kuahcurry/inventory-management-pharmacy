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
        if (! Schema::hasTable('transaksi')) {
            return;
        }

        Schema::table('transaksi', function (Blueprint $table) {
            if (! Schema::hasColumn('transaksi', 'approval_status')) {
                $table->string('approval_status', 20)
                    ->default('none')
                    ->after('status_pelunasan');
                $table->index('approval_status', 'transaksi_approval_status_index');
            }

            if (! Schema::hasColumn('transaksi', 'approval_processed_at')) {
                $table->timestamp('approval_processed_at')
                    ->nullable()
                    ->after('approval_status');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (! Schema::hasTable('transaksi')) {
            return;
        }

        Schema::table('transaksi', function (Blueprint $table) {
            if (Schema::hasColumn('transaksi', 'approval_processed_at')) {
                $table->dropColumn('approval_processed_at');
            }

            if (Schema::hasColumn('transaksi', 'approval_status')) {
                $table->dropIndex('transaksi_approval_status_index');
                $table->dropColumn('approval_status');
            }
        });
    }
};
