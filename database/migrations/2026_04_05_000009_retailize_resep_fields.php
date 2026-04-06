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
        Schema::table('resep', function (Blueprint $table) {
            $table->string('nomor_referensi', 50)->nullable()->after('nomor_resep');
            $table->string('nama_pelanggan', 200)->nullable()->after('nomor_referensi');
            $table->enum('kategori_pelanggan', ['reguler', 'pelanggan_rutin', 'rujukan_dokter'])->nullable()->after('tanggal_resep');
            $table->enum('metode_pembayaran', ['tunai_umum', 'non_tunai', 'asuransi_rekanan'])->nullable()->after('kategori_pelanggan');
        });

        DB::table('resep')
            ->select(['id', 'nomor_rm', 'nama_pasien', 'jenis_pasien', 'cara_bayar'])
            ->orderBy('id')
            ->chunkById(200, function ($rows) {
                foreach ($rows as $row) {
                    $kategoriPelanggan = match ($row->jenis_pasien) {
                        'rawat_inap' => 'pelanggan_rutin',
                        'igd' => 'rujukan_dokter',
                        default => 'reguler',
                    };

                    $metodePembayaran = match ($row->cara_bayar) {
                        'bpjs' => 'non_tunai',
                        'asuransi' => 'asuransi_rekanan',
                        default => 'tunai_umum',
                    };

                    DB::table('resep')
                        ->where('id', $row->id)
                        ->update([
                            'nomor_referensi' => $row->nomor_rm,
                            'nama_pelanggan' => $row->nama_pasien,
                            'kategori_pelanggan' => $kategoriPelanggan,
                            'metode_pembayaran' => $metodePembayaran,
                        ]);
                }
            });

        Schema::table('resep', function (Blueprint $table) {
            $table->dropIndex(['nomor_rm', 'tanggal_resep']);
            $table->dropColumn(['nomor_rm', 'nama_pasien', 'jenis_pasien', 'cara_bayar']);
            $table->index(['nomor_referensi', 'tanggal_resep'], 'resep_nomor_referensi_tanggal_resep_index');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('resep', function (Blueprint $table) {
            $table->string('nomor_rm', 50)->nullable()->after('nomor_resep');
            $table->string('nama_pasien', 200)->nullable()->after('nomor_rm');
            $table->enum('jenis_pasien', ['rawat_jalan', 'rawat_inap', 'igd'])->nullable()->after('tanggal_resep');
            $table->enum('cara_bayar', ['umum', 'bpjs', 'asuransi'])->nullable()->after('jenis_pasien');
        });

        DB::table('resep')
            ->select(['id', 'nomor_referensi', 'nama_pelanggan', 'kategori_pelanggan', 'metode_pembayaran'])
            ->orderBy('id')
            ->chunkById(200, function ($rows) {
                foreach ($rows as $row) {
                    $jenisPasien = match ($row->kategori_pelanggan) {
                        'pelanggan_rutin' => 'rawat_inap',
                        'rujukan_dokter' => 'igd',
                        default => 'rawat_jalan',
                    };

                    $caraBayar = match ($row->metode_pembayaran) {
                        'non_tunai' => 'bpjs',
                        'asuransi_rekanan' => 'asuransi',
                        default => 'umum',
                    };

                    DB::table('resep')
                        ->where('id', $row->id)
                        ->update([
                            'nomor_rm' => $row->nomor_referensi,
                            'nama_pasien' => $row->nama_pelanggan,
                            'jenis_pasien' => $jenisPasien,
                            'cara_bayar' => $caraBayar,
                        ]);
                }
            });

        Schema::table('resep', function (Blueprint $table) {
            $table->dropIndex('resep_nomor_referensi_tanggal_resep_index');
            $table->dropColumn(['nomor_referensi', 'nama_pelanggan', 'kategori_pelanggan', 'metode_pembayaran']);
            $table->index(['nomor_rm', 'tanggal_resep']);
        });
    }
};
