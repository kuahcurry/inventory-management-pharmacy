<?php

namespace Tests\Feature;

use App\Models\BatchObat;
use App\Models\JenisObat;
use App\Models\KategoriObat;
use App\Models\Obat;
use App\Models\SatuanObat;
use App\Models\UnitRumahSakit;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BlackBoxUserExperienceTest extends TestCase
{
    use RefreshDatabase;

    public function test_report_export_stock_csv_can_be_downloaded(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/api/reports/export/stock?format=csv');

        $response->assertOk();
        $response->assertHeader('content-type', 'text/csv; charset=UTF-8');
        $this->assertStringContainsString('stock-report-', (string) $response->headers->get('content-disposition'));
    }

    public function test_report_export_invalid_type_returns_validation_error(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->get('/api/reports/export/unknown?format=csv')
            ->assertStatus(422)
            ->assertJsonPath('message', 'Jenis laporan tidak dikenali.');
    }

    public function test_api_unit_store_accepts_legacy_payload_keys(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->postJson('/api/unit-rumah-sakit', [
                'kode' => 'UGD01',
                'nama' => 'Unit Gawat Darurat',
                'lokasi' => 'Lantai 1',
                'is_active' => true,
            ])
            ->assertCreated()
            ->assertJsonPath('data.kode_unit', 'UGD01')
            ->assertJsonPath('data.nama_unit', 'Unit Gawat Darurat');
    }

    public function test_web_unit_page_supports_create_and_delete_flow(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->get('/unit-rumah-sakit')
            ->assertOk();

        $this->actingAs($user)
            ->post('/unit-rumah-sakit', [
                'kode_unit' => 'RAW01',
                'nama_unit' => 'Rawat Jalan',
                'lokasi' => 'Lantai 2',
                'penanggung_jawab' => 'dr. Sinta',
                'no_telepon' => '021123456',
                'is_active' => true,
            ])
            ->assertRedirect('/unit-rumah-sakit');

        $this->assertDatabaseHas('unit_rumah_sakit', [
            'kode_unit' => 'RAW01',
            'nama_unit' => 'Rawat Jalan',
        ]);

        $unit = UnitRumahSakit::query()->where('kode_unit', 'RAW01')->firstOrFail();

        $this->actingAs($user)
            ->delete('/unit-rumah-sakit/'.$unit->id)
            ->assertRedirect('/unit-rumah-sakit');

        $this->assertDatabaseMissing('unit_rumah_sakit', [
            'id' => $unit->id,
        ]);
    }

    public function test_kasir_transfer_requires_bank_information(): void
    {
        $user = User::factory()->create();
        $batch = $this->createBatchWithMedicine(20, 45000);

        $this->actingAs($user)
            ->post(route('transaksi.kasir.checkout'), [
                'mode' => 'penjualan',
                'metode_pembayaran' => 'transfer',
                'tanggal_transaksi' => now()->toDateString(),
                'pelanggan_nama' => 'Pelanggan Uji',
                'kasir_nama' => 'Kasir Uji',
                'tipe_penjualan' => 'biasa',
                'items' => [[
                    'obat_id' => $batch->obat_id,
                    'batch_id' => $batch->id,
                    'jumlah' => 1,
                    'harga_satuan' => 45000,
                ]],
            ])
            ->assertSessionHasErrors(['bank_code']);
    }

    public function test_kasir_cash_checkout_successfully_creates_transaction(): void
    {
        $user = User::factory()->create();
        $batch = $this->createBatchWithMedicine(20, 50000);

        $this->actingAs($user)
            ->post(route('transaksi.kasir.checkout'), [
                'mode' => 'penjualan',
                'metode_pembayaran' => 'cash',
                'tanggal_transaksi' => now()->toDateString(),
                'pelanggan_nama' => 'Pelanggan Uji Kasir',
                'kasir_nama' => 'Kasir Uji',
                'tipe_penjualan' => 'biasa',
                'pembayaran_diterima' => 70000,
                'items' => [[
                    'obat_id' => $batch->obat_id,
                    'batch_id' => $batch->id,
                    'jumlah' => 1,
                    'harga_satuan' => 50000,
                ]],
            ])
            ->assertRedirect();

        $this->assertDatabaseHas('transaksi', [
            'user_id' => $user->id,
            'batch_id' => $batch->id,
            'jenis_transaksi' => 'penjualan',
            'metode_pembayaran' => 'cash',
        ]);

        $this->assertSame(19, (int) $batch->fresh()->stok_tersedia);
    }

    private function createBatchWithMedicine(int $stok, float $hargaJual): BatchObat
    {
        $kategori = KategoriObat::query()->create([
            'nama_kategori' => 'Kategori BBX '.uniqid(),
            'is_active' => true,
        ]);

        $jenis = JenisObat::query()->create([
            'nama_jenis' => 'Jenis BBX '.uniqid(),
            'is_active' => true,
        ]);

        $satuan = SatuanObat::query()->create([
            'nama_satuan' => 'Satuan BBX '.uniqid(),
            'singkatan' => 'bbx',
            'is_active' => true,
        ]);

        $obat = Obat::query()->create([
            'kode_obat' => 'OBT-BBX-'.uniqid(),
            'nama_obat' => 'Obat BBX '.uniqid(),
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
            'nomor_batch' => 'B-BBX-'.uniqid(),
            'tanggal_produksi' => now()->subMonth()->toDateString(),
            'tanggal_expired' => now()->addMonths(6)->toDateString(),
            'tanggal_masuk' => now()->subDay()->toDateString(),
            'stok_awal' => $stok,
            'stok_tersedia' => $stok,
            'harga_beli' => $hargaJual * 0.6,
            'status' => 'active',
        ]);
    }
}
