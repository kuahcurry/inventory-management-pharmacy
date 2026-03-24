<?php

namespace Tests\Feature;

use App\Models\BatchObat;
use App\Models\Hutang;
use App\Models\JenisObat;
use App\Models\KategoriObat;
use App\Models\Obat;
use App\Models\SatuanObat;
use App\Models\Transaksi;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class HutangManagementTest extends TestCase
{
    use RefreshDatabase;

    public function test_debit_checkout_creates_hutang_record(): void
    {
        $user = User::factory()->create();
        $batch = $this->createBatchWithMedicine(30, 50000);

        $transaksi = $this->performKasirCheckout(
            user: $user,
            batch: $batch,
            metodePembayaran: 'debit',
            qty: 2,
            hargaSatuan: 50000
        );

        $this->assertDatabaseHas('hutang', [
            'transaksi_id' => $transaksi->id,
            'total_amount' => 100000,
            'remaining_amount' => 100000,
            'payment_status' => 'unpaid',
        ]);

        $transaksi->refresh();
        $this->assertSame('hutang', $transaksi->kategori_keuangan);
        $this->assertSame('belum_lunas', $transaksi->status_pelunasan);
    }

    public function test_full_hutang_payment_marks_hutang_and_transaksi_as_paid(): void
    {
        $user = User::factory()->create();
        $batch = $this->createBatchWithMedicine(30, 75000);

        $transaksi = $this->performKasirCheckout(
            user: $user,
            batch: $batch,
            metodePembayaran: 'kredit',
            qty: 1,
            hargaSatuan: 75000
        );

        $hutang = Hutang::query()->where('transaksi_id', $transaksi->id)->firstOrFail();

        $this->actingAs($user)
            ->post(route('hutang.pay', $hutang), [
                'confirmed' => '1',
                'metode_pembayaran' => 'cash',
                'keterangan' => 'Pelunasan test otomatis',
            ])
            ->assertRedirect();

        $hutang->refresh();
        $transaksi->refresh();

        $this->assertSame('paid', $hutang->payment_status);
        $this->assertSame(0.0, (float) $hutang->remaining_amount);
        $this->assertNotNull($hutang->settled_at);
        $this->assertSame('lunas', $transaksi->status_pelunasan);

        $this->assertDatabaseHas('hutang_payments', [
            'hutang_id' => $hutang->id,
            'amount' => 75000,
            'metode_pembayaran' => 'cash',
        ]);
    }

    public function test_partial_hutang_payment_updates_remaining_and_status(): void
    {
        $user = User::factory()->create();
        $batch = $this->createBatchWithMedicine(30, 60000);

        $transaksi = $this->performKasirCheckout(
            user: $user,
            batch: $batch,
            metodePembayaran: 'debit',
            qty: 2,
            hargaSatuan: 60000
        );

        $hutang = Hutang::query()->where('transaksi_id', $transaksi->id)->firstOrFail();

        $this->actingAs($user)
            ->post(route('hutang.partial-pay', $hutang), [
                'confirmed' => '1',
                'amount' => 50000,
                'metode_pembayaran' => 'transfer',
                'keterangan' => 'Bayar sebagian',
            ])
            ->assertRedirect();

        $hutang->refresh();
        $transaksi->refresh();

        $this->assertSame('partially_paid', $hutang->payment_status);
        $this->assertSame(70000.0, (float) $hutang->remaining_amount);
        $this->assertSame('belum_lunas', $transaksi->status_pelunasan);

        $this->assertDatabaseHas('hutang_payments', [
            'hutang_id' => $hutang->id,
            'amount' => 50000,
            'metode_pembayaran' => 'transfer',
        ]);
    }

    public function test_cashflow_counts_only_realized_sales_and_hutang_payments(): void
    {
        $user = User::factory()->create();
        $batchDebt = $this->createBatchWithMedicine(30, 100000, 'OBT-HUTANG');
        $batchCash = $this->createBatchWithMedicine(30, 200000, 'OBT-CASH');

        $transaksiHutang = $this->performKasirCheckout(
            user: $user,
            batch: $batchDebt,
            metodePembayaran: 'debit',
            qty: 1,
            hargaSatuan: 100000
        );

        $this->performKasirCheckout(
            user: $user,
            batch: $batchCash,
            metodePembayaran: 'cash',
            qty: 1,
            hargaSatuan: 200000,
            pembayaranDiterima: 300000
        );

        $hutang = Hutang::query()->where('transaksi_id', $transaksiHutang->id)->firstOrFail();

        $this->actingAs($user)
            ->post(route('hutang.partial-pay', $hutang), [
                'confirmed' => '1',
                'amount' => 40000,
                'metode_pembayaran' => 'cash',
                'keterangan' => 'Realisasi kas parsial',
            ])
            ->assertRedirect();

        $today = now()->toDateString();

        $this->actingAs($user)
            ->get(route('reports.cashflow', [
                'tanggal_dari' => $today,
                'tanggal_sampai' => $today,
            ]))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('laporan/cashflow/index')
                ->where('summaryCards.0.label', 'Cash In')
                ->where('summaryCards.0.value', 240000.0)
                ->where('sections.0.rows.1.Arah', 'Masuk dari Penjualan Tunai/Non-Hutang')
                ->where('sections.0.rows.1.Nilai', 200000.0)
                ->where('sections.0.rows.2.Arah', 'Masuk dari Pelunasan Hutang')
                ->where('sections.0.rows.2.Nilai', 40000.0)
            );
    }

    private function performKasirCheckout(
        User $user,
        BatchObat $batch,
        string $metodePembayaran,
        int $qty,
        float $hargaSatuan,
        ?float $pembayaranDiterima = null
    ): Transaksi {
        $payload = [
            'mode' => 'penjualan',
            'metode_pembayaran' => $metodePembayaran,
            'tanggal_transaksi' => now()->toDateString(),
            'pelanggan_nama' => 'Pelanggan Test',
            'kasir_nama' => 'Kasir Test',
            'tipe_penjualan' => 'biasa',
            'items' => [[
                'obat_id' => $batch->obat_id,
                'batch_id' => $batch->id,
                'jumlah' => $qty,
                'harga_satuan' => $hargaSatuan,
            ]],
        ];

        if ($pembayaranDiterima !== null) {
            $payload['pembayaran_diterima'] = $pembayaranDiterima;
        }

        $this->actingAs($user)
            ->post(route('transaksi.kasir.checkout'), $payload)
            ->assertRedirect();

        return Transaksi::query()
            ->where('user_id', $user->id)
            ->where('batch_id', $batch->id)
            ->latest('id')
            ->firstOrFail();
    }

    private function createBatchWithMedicine(int $stok, float $hargaJual, string $kodeObat = 'OBT-TEST'): BatchObat
    {
        $kategori = KategoriObat::query()->create([
            'nama_kategori' => 'Kategori Test '.uniqid(),
            'deskripsi' => 'Kategori untuk pengujian',
            'is_active' => true,
        ]);

        $jenis = JenisObat::query()->create([
            'nama_jenis' => 'Jenis Test '.uniqid(),
            'deskripsi' => 'Jenis untuk pengujian',
            'is_active' => true,
        ]);

        $satuan = SatuanObat::query()->create([
            'nama_satuan' => 'Tablet '.uniqid(),
            'singkatan' => 'tab',
            'is_active' => true,
        ]);

        $obat = Obat::query()->create([
            'kode_obat' => $kodeObat.'-'.uniqid(),
            'nama_obat' => 'Obat Test '.uniqid(),
            'kategori_id' => $kategori->id,
            'jenis_id' => $jenis->id,
            'satuan_id' => $satuan->id,
            'stok_total' => $stok,
            'stok_minimum' => 1,
            'harga_beli' => $hargaJual * 0.6,
            'harga_jual' => $hargaJual,
            'is_active' => true,
        ]);

        return BatchObat::query()->create([
            'obat_id' => $obat->id,
            'nomor_batch' => 'BATCH-'.uniqid(),
            'tanggal_produksi' => now()->subMonths(1)->toDateString(),
            'tanggal_expired' => now()->addYear()->toDateString(),
            'tanggal_masuk' => now()->subDays(5)->toDateString(),
            'stok_awal' => $stok,
            'stok_tersedia' => $stok,
            'harga_beli' => $hargaJual * 0.6,
            'status' => 'active',
        ]);
    }
}
