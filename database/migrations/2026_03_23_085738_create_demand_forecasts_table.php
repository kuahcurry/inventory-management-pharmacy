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
        Schema::create('demand_forecasts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('obat_id')->constrained('obat')->onDelete('cascade');
            $table->enum('period_type', ['weekly', 'monthly']);
            $table->unsignedInteger('lookback_days')->default(30);
            $table->unsignedInteger('avg_daily_usage')->default(0);
            $table->decimal('seasonality_factor', 6, 2)->default(1);
            $table->unsignedInteger('forecast_quantity')->default(0);
            $table->unsignedTinyInteger('confidence_percentage')->default(70);
            $table->date('forecast_start_date');
            $table->date('forecast_end_date');
            $table->timestamps();

            $table->index(['obat_id', 'period_type', 'forecast_start_date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demand_forecasts');
    }
};
