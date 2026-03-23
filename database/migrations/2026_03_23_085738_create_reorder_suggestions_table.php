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
        Schema::create('reorder_suggestions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('obat_id')->constrained('obat')->onDelete('cascade');
            $table->unsignedInteger('avg_daily_usage')->default(0);
            $table->unsignedInteger('lead_time_days')->default(7);
            $table->unsignedInteger('safety_stock')->default(0);
            $table->unsignedInteger('reorder_point')->default(0);
            $table->unsignedInteger('suggested_order_qty')->default(0);
            $table->date('period_start');
            $table->date('period_end');
            $table->timestamp('calculated_at')->nullable();
            $table->boolean('is_applied')->default(false);
            $table->timestamps();

            $table->index(['obat_id', 'period_start', 'period_end']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reorder_suggestions');
    }
};
