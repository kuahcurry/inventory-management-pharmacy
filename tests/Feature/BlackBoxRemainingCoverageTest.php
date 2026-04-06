<?php

namespace Tests\Feature;

use App\Models\BatchObat;
use App\Models\BiayaOperasional;
use App\Models\JenisObat;
use App\Models\KategoriObat;
use App\Models\Obat;
use App\Models\Resep;
use App\Models\SatuanObat;
use App\Models\StokOpname;
use App\Models\StokOpnameDetail;
use App\Models\UnitRumahSakit;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BlackBoxRemainingCoverageTest extends TestCase
{
    use RefreshDatabase;

    public function test_kasir_resep_rejects_items_outside_selected_resep_details(): void
    {
        $user = User::factory()->create();
        $allowedBatch = $this->createBatchWithMedicine(20, 30000, 'ALLOWED');
        $otherBatch = $this->createBatchWithMedicine(20, 25000, 'OTHER');

        $resep = $this->createResepWithDetails([
            $allowedBatch->obat_id,
        ]);

        $this->actingAs($user)
            ->post(route('transaksi.kasir.checkout'), [
                'mode' => 'penjualan',
                'metode_pembayaran' => 'cash',
                'tanggal_transaksi' => now()->toDateString(),
                'pelanggan_nama' => 'Pelanggan Resep',
                'kasir_nama' => 'Kasir BBX',
                'tipe_penjualan' => 'resep',
                'resep_id' => $resep->id,
                'pembayaran_diterima' => 50000,
                'items' => [[
                    'obat_id' => $otherBatch->obat_id,
                    'batch_id' => $otherBatch->id,
                    'jumlah' => 1,
                    'harga_satuan' => 25000,
                ]],
            ])
            ->assertSessionHasErrors(['resep_id']);
    }

    public function test_kasir_rejects_payment_lower_than_bill_total(): void
    {
        $user = User::factory()->create();
        $batch = $this->createBatchWithMedicine(10, 50000, 'PAY');

        $this->actingAs($user)
            ->post(route('transaksi.kasir.checkout'), [
                'mode' => 'penjualan',
                'metode_pembayaran' => 'cash',
                'tanggal_transaksi' => now()->toDateString(),
                'pelanggan_nama' => 'Pelanggan Bayar Kurang',
                'kasir_nama' => 'Kasir BBX',
                'tipe_penjualan' => 'biasa',
                'pembayaran_diterima' => 50000,
                'items' => [[
                    'obat_id' => $batch->obat_id,
                    'batch_id' => $batch->id,
                    'jumlah' => 1,
                    'harga_satuan' => 50000,
                ]],
            ])
            ->assertSessionHasErrors(['pembayaran_diterima']);
    }

    public function test_kasir_checkout_with_resep_marks_resep_completed_and_dispensed(): void
    {
        $user = User::factory()->create();
        $batch = $this->createBatchWithMedicine(10, 45000, 'RX');

        $resep = $this->createResepWithDetails([
            $batch->obat_id,
        ]);

        $this->actingAs($user)
            ->post(route('transaksi.kasir.checkout'), [
                'mode' => 'penjualan',
                'metode_pembayaran' => 'cash',
                'tanggal_transaksi' => now()->toDateString(),
                'pelanggan_nama' => 'Pelanggan Resep',
                'kasir_nama' => 'Kasir BBX',
                'tipe_penjualan' => 'resep',
                'resep_id' => $resep->id,
                'pembayaran_diterima' => 70000,
                'items' => [[
                    'obat_id' => $batch->obat_id,
                    'batch_id' => $batch->id,
                    'jumlah' => 1,
                    'harga_satuan' => 45000,
                ]],
            ])
            ->assertRedirect();

        $resep->refresh();

        $this->assertSame(Resep::STATUS_COMPLETED, $resep->status);
        $this->assertNotNull($resep->processed_at);
        $this->assertDatabaseHas('resep_detail', [
            'resep_id' => $resep->id,
            'obat_id' => $batch->obat_id,
            'is_dispensed' => 1,
        ]);
    }

    public function test_manual_qr_scan_returns_batch_data_for_kasir_prefill(): void
    {
        $user = User::factory()->create();
        $batch = $this->createBatchWithMedicine(5, 20000, 'QRSCAN');

        $this->actingAs($user)
            ->postJson('/api/qr/scan', [
                'kode_qr' => $batch->kode_qr,
                'metode' => 'scanner',
            ])
            ->assertOk()
            ->assertJsonPath('success', true)
            ->assertJsonPath('batch.id', $batch->id)
            ->assertJsonPath('obat.id', $batch->obat_id);
    }

    public function test_kasir_biaya_mode_stores_operational_expense(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->post(route('transaksi.kasir.checkout'), [
                'mode' => 'biaya',
                'metode_pembayaran' => 'transfer',
                'bank_code' => 'BCA',
                'bank_nama' => 'Bank Central Asia',
                'tanggal_transaksi' => now()->toDateString(),
                'kasir_nama' => 'Kasir Biaya',
                'biaya_kategori' => 'sewa',
                'biaya_nominal' => 125000,
                'biaya_keterangan' => 'Sewa kios harian',
            ])
            ->assertRedirect();

        $this->assertDatabaseHas('biaya_operasional', [
            'user_id' => $user->id,
            'kategori' => 'sewa',
            'nominal' => 125000,
            'metode_pembayaran' => 'transfer',
            'bank_code' => 'BCA',
            'bank_nama' => 'Bank Central Asia',
        ]);

        $this->assertSame(1, BiayaOperasional::query()->count());
    }

    public function test_stok_opname_full_flow_updates_batch_stock_after_approval(): void
    {
        $user = User::factory()->create();
        $unit = $this->createUnit();
        $batch = $this->createBatchWithMedicine(20, 15000, 'SOFLOW');

        $this->actingAs($user)
            ->post(route('stok-opname.store'), [
                'unit_id' => $unit->id,
                'tanggal_opname' => now()->toDateString(),
                'catatan' => 'Opname mingguan',
                'details' => [[
                    'batch_id' => $batch->id,
                    'stok_fisik' => 15,
                    'keterangan_selisih' => 'Koreksi fisik',
                ]],
            ])
            ->assertRedirect();

        $opname = StokOpname::query()->latest('id')->firstOrFail();

        $this->actingAs($user)
            ->post(route('stok-opname.start', $opname))
            ->assertRedirect();

        $this->actingAs($user)
            ->post(route('stok-opname.complete', $opname))
            ->assertRedirect();

        $this->actingAs($user)
            ->post(route('stok-opname.approve', $opname), [
                'berita_acara' => 'Disetujui sesuai hasil pengecekan',
            ])
            ->assertRedirect();

        $this->assertDatabaseHas('stok_opname', [
            'id' => $opname->id,
            'status' => StokOpname::STATUS_APPROVED,
            'approved_by' => $user->id,
        ]);

        $this->assertDatabaseHas('stok_opname_detail', [
            'stok_opname_id' => $opname->id,
            'batch_id' => $batch->id,
            'stok_sistem' => 20,
            'stok_fisik' => 15,
            'selisih' => -5,
        ]);

        $this->assertSame(15, (int) $batch->fresh()->stok_tersedia);
        $this->assertSame(15, (int) $batch->obat->fresh()->stok_total);
    }

    public function test_stok_opname_show_contains_discrepancy_detail_data(): void
    {
        $user = User::factory()->create();
        $batch = $this->createBatchWithMedicine(12, 10000, 'SODTL');
        $unit = $this->createUnit('SOU02');

        $opname = StokOpname::query()->create([
            'tanggal_opname' => now()->toDateString(),
            'penanggung_jawab' => $user->id,
            'unit_id' => $unit->id,
            'status' => StokOpname::STATUS_DRAFT,
            'catatan' => 'Detail selisih',
        ]);

        StokOpnameDetail::query()->create([
            'stok_opname_id' => $opname->id,
            'batch_id' => $batch->id,
            'stok_sistem' => 12,
            'stok_fisik' => 10,
            'keterangan_selisih' => 'Rusak 2 strip',
        ]);

        $this->actingAs($user)
            ->getJson('/api/stok-opname/'.$opname->id)
            ->assertOk()
            ->assertJsonPath('id', $opname->id)
            ->assertJsonPath('details.0.selisih', -2)
            ->assertJsonPath('details.0.keterangan_selisih', 'Rusak 2 strip');
    }

    public function test_stok_opname_approval_requires_login(): void
    {
        $batch = $this->createBatchWithMedicine(12, 10000, 'SOAUTH');
        $unit = $this->createUnit('SOU03');
        $user = User::factory()->create();

        $opname = StokOpname::query()->create([
            'tanggal_opname' => now()->toDateString(),
            'penanggung_jawab' => $user->id,
            'unit_id' => $unit->id,
            'status' => StokOpname::STATUS_COMPLETED,
            'catatan' => 'Approval harus login',
        ]);

        StokOpnameDetail::query()->create([
            'stok_opname_id' => $opname->id,
            'batch_id' => $batch->id,
            'stok_sistem' => 12,
            'stok_fisik' => 12,
            'keterangan_selisih' => null,
        ]);

        $this->post(route('stok-opname.approve', $opname), [
            'berita_acara' => 'Tidak boleh diproses tanpa login',
        ])->assertRedirect('/login');
    }

    public function test_qr_scan_logs_can_be_filtered_by_result(): void
    {
        $user = User::factory()->create();
        $batch = $this->createBatchWithMedicine(8, 30000, 'QRLOG');

        $this->actingAs($user)->postJson('/api/qr/scan', [
            'kode_qr' => $batch->kode_qr,
            'metode' => 'camera',
        ])->assertOk();

        $this->actingAs($user)->postJson('/api/qr/scan', [
            'kode_qr' => 'QR-TIDAK-ADA',
            'metode' => 'scanner',
        ])->assertStatus(404);

        $this->actingAs($user)
            ->getJson('/api/qr/scan-logs?hasil=success&per_page=50')
            ->assertOk()
            ->assertJsonPath('data.0.hasil_scan', 'success')
            ->assertJsonMissing(['hasil_scan' => 'not_found']);
    }

    public function test_qr_analytics_returns_summary_for_today_period(): void
    {
        $user = User::factory()->create();
        $batch = $this->createBatchWithMedicine(6, 22000, 'QRANL');

        $this->actingAs($user)->postJson('/api/qr/scan', [
            'kode_qr' => $batch->kode_qr,
            'metode' => 'camera',
        ])->assertOk();

        $this->actingAs($user)->postJson('/api/qr/scan', [
            'kode_qr' => 'QR-NOT-FOUND-ANALYTIC',
            'metode' => 'scanner',
        ])->assertStatus(404);

        $this->actingAs($user)
            ->getJson('/api/qr/analytics?period=today')
            ->assertOk()
            ->assertJsonPath('period', 'today')
            ->assertJsonPath('summary.total_scans', 2)
            ->assertJsonPath('summary.success_count', 1)
            ->assertJsonPath('summary.error_count', 1);
    }

    private function createResepWithDetails(array $obatIds): Resep
    {
        $resep = Resep::query()->create([
            'nomor_referensi' => 'REF-'.uniqid(),
            'nama_pelanggan' => 'Pelanggan Resep '.uniqid(),
            'nama_dokter' => 'dr. Retail',
            'tanggal_resep' => now()->toDateString(),
            'kategori_pelanggan' => 'reguler',
            'metode_pembayaran' => 'tunai_umum',
            'status' => Resep::STATUS_PENDING,
        ]);

        foreach ($obatIds as $obatId) {
            $resep->details()->create([
                'obat_id' => $obatId,
                'jumlah' => 1,
                'dosis' => '3x1',
                'aturan_pakai' => 'Sesudah makan',
                'is_dispensed' => false,
            ]);
        }

        return $resep;
    }

    private function createBatchWithMedicine(int $stok, float $hargaJual, string $kodePrefix): BatchObat
    {
        $kategori = KategoriObat::query()->create([
            'nama_kategori' => 'Kategori '.uniqid(),
            'is_active' => true,
        ]);

        $jenis = JenisObat::query()->create([
            'nama_jenis' => 'Jenis '.uniqid(),
            'is_active' => true,
        ]);

        $satuan = SatuanObat::query()->create([
            'nama_satuan' => 'Satuan '.uniqid(),
            'singkatan' => 'sat',
            'is_active' => true,
        ]);

        $obat = Obat::query()->create([
            'kode_obat' => 'OBT-'.$kodePrefix.'-'.uniqid(),
            'nama_obat' => 'Obat '.$kodePrefix.' '.uniqid(),
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
            'nomor_batch' => 'B-'.$kodePrefix.'-'.uniqid(),
            'tanggal_produksi' => now()->subMonth()->toDateString(),
            'tanggal_expired' => now()->addMonths(8)->toDateString(),
            'tanggal_masuk' => now()->subDay()->toDateString(),
            'stok_awal' => $stok,
            'stok_tersedia' => $stok,
            'harga_beli' => $hargaJual * 0.6,
            'status' => 'active',
        ]);
    }

    private function createUnit(string $kode = 'SOU01'): UnitRumahSakit
    {
        return UnitRumahSakit::query()->create([
            'kode_unit' => $kode,
            'nama_unit' => 'Unit '.$kode,
            'lokasi' => 'Lantai 1',
            'penanggung_jawab' => 'Apoteker Test',
            'no_telepon' => '021555777',
            'is_active' => true,
        ]);
    }
}
