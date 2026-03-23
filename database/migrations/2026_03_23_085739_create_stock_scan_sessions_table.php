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
        Schema::create('stock_scan_sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('session_code', 50)->unique();
            $table->enum('status', ['in_progress', 'completed'])->default('in_progress');
            $table->timestamp('started_at')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->unsignedInteger('total_scans')->default(0);
            $table->unsignedInteger('matched_scans')->default(0);
            $table->unsignedInteger('unmatched_scans')->default(0);
            $table->timestamps();

            $table->index(['user_id', 'status']);
        });

        Schema::create('stock_scan_session_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('stock_scan_session_id')->constrained('stock_scan_sessions')->onDelete('cascade');
            $table->string('kode_qr', 100);
            $table->foreignId('batch_id')->nullable()->constrained('batch_obat')->onDelete('set null');
            $table->boolean('is_match')->default(false);
            $table->timestamp('scanned_at')->nullable();
            $table->timestamps();

            $table->index(['stock_scan_session_id', 'is_match']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_scan_session_items');
        Schema::dropIfExists('stock_scan_sessions');
    }
};
