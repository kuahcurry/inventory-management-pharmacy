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
        Schema::table('obat', function (Blueprint $table) {
            $table->boolean('is_high_risk_drug')->default(false)->after('is_active');
            $table->unsignedInteger('supplier_lead_time_days')->default(7)->after('is_high_risk_drug');
            $table->unsignedInteger('review_period_days')->default(30)->after('supplier_lead_time_days');
            $table->decimal('target_margin_percentage', 5, 2)->default(20)->after('review_period_days');
        });

        Schema::table('supplier', function (Blueprint $table) {
            $table->unsignedInteger('lead_time_days')->default(7)->after('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('obat', function (Blueprint $table) {
            $table->dropColumn([
                'is_high_risk_drug',
                'supplier_lead_time_days',
                'review_period_days',
                'target_margin_percentage',
            ]);
        });

        Schema::table('supplier', function (Blueprint $table) {
            $table->dropColumn('lead_time_days');
        });
    }
};
