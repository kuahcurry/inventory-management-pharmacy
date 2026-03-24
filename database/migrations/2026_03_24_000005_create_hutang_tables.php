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
        Schema::create('hutang', function (Blueprint $table) {
            $table->id();
            $table->foreignId('transaksi_id')->unique()->constrained('transaksi')->cascadeOnDelete();
            $table->string('customer_name')->nullable();
            $table->decimal('total_amount', 15, 2);
            $table->decimal('remaining_amount', 15, 2);
            $table->enum('payment_status', ['unpaid', 'partially_paid', 'paid'])->default('unpaid')->index();
            $table->timestamp('settled_at')->nullable();
            $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });

        Schema::create('hutang_payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hutang_id')->constrained('hutang')->cascadeOnDelete();
            $table->decimal('amount', 15, 2);
            $table->timestamp('paid_at')->useCurrent()->index();
            $table->string('metode_pembayaran', 30)->nullable()->index();
            $table->text('keterangan')->nullable();
            $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hutang_payments');
        Schema::dropIfExists('hutang');
    }
};
