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
        Schema::create('golongan_obat', function (Blueprint $table) {
            $table->id();
            $table->string('nama_golongan', 50)->unique();
            $table->string('kode', 10)->unique();
            $table->text('deskripsi')->nullable();
            $table->boolean('butuh_resep')->default(false)
                ->comment('Jika true, obat hanya bisa dijual dengan resep dokter');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('golongan_obat');
    }
};
