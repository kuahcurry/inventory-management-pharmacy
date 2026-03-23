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
        Schema::create('drug_interactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('obat_id')->constrained('obat')->onDelete('cascade');
            $table->foreignId('interacts_with_obat_id')->constrained('obat')->onDelete('cascade');
            $table->enum('severity', ['low', 'moderate', 'high', 'critical'])->default('moderate');
            $table->text('effect_description');
            $table->text('recommendation')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->unique(['obat_id', 'interacts_with_obat_id']);
            $table->index(['severity', 'is_active']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drug_interactions');
    }
};
