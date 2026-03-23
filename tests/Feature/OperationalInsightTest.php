<?php

namespace Tests\Feature;

use App\Models\BatchObat;
use App\Models\DrugInteraction;
use App\Models\JenisObat;
use App\Models\KategoriObat;
use App\Models\Obat;
use App\Models\Supplier;
use App\Models\Transaksi;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class OperationalInsightTest extends TestCase
{
    use RefreshDatabase;

    public function test_operational_endpoints_generate_reorder_and_forecast_records(): void
    {
        $user = User::factory()->create();
        [$kategori, $jenis, $satuan] = $this->createMasterData();

        Obat::query()->create([
            'kode_obat' => 'OBT-201',
            'nama_obat' => 'Antasida',
            'kategori_id' => $kategori->id,
            'jenis_id' => $jenis->id,
            'satuan_id' => $satuan->id,
            'stok_total' => 5,
            'stok_minimum' => 10,
            'harga_beli' => 2500,
            'harga_jual' => 4000,
            'is_active' => true,
            'supplier_lead_time_days' => 7,
        ]);

        $this->actingAs($user)
            ->getJson(route('api.insights.reorder-suggestions'))
            ->assertOk()
            ->assertJsonPath('summary.generated', 1);

        $this->actingAs($user)
            ->getJson(route('api.insights.forecasts', ['period_type' => 'weekly']))
            ->assertOk()
            ->assertJsonPath('summary.generated', 1);

        $this->assertDatabaseCount('reorder_suggestions', 1);
        $this->assertDatabaseCount('demand_forecasts', 1);
    }

    public function test_drug_interaction_check_marks_blocking_combination(): void
    {
        $user = User::factory()->create();
        [$kategori, $jenis, $satuan] = $this->createMasterData();

        $obatA = Obat::query()->create([
            'kode_obat' => 'OBT-301',
            'nama_obat' => 'Warfarin',
            'kategori_id' => $kategori->id,
            'jenis_id' => $jenis->id,
            'satuan_id' => $satuan->id,
            'stok_total' => 10,
            'stok_minimum' => 2,
            'harga_beli' => 10000,
            'harga_jual' => 12000,
            'is_active' => true,
        ]);

        $obatB = Obat::query()->create([
            'kode_obat' => 'OBT-302',
            'nama_obat' => 'Aspirin',
            'kategori_id' => $kategori->id,
            'jenis_id' => $jenis->id,
            'satuan_id' => $satuan->id,
            'stok_total' => 10,
            'stok_minimum' => 2,
            'harga_beli' => 2000,
            'harga_jual' => 3500,
            'is_active' => true,
        ]);

        DrugInteraction::query()->create([
            'obat_id' => $obatA->id,
            'interacts_with_obat_id' => $obatB->id,
            'severity' => 'critical',
            'effect_description' => 'Risiko pendarahan meningkat.',
            'recommendation' => 'Hindari kombinasi.',
            'is_active' => true,
        ]);

        $this->actingAs($user)
            ->postJson(route('api.insights.check-interactions'), [
                'obat_ids' => [$obatA->id, $obatB->id],
            ])
            ->assertOk()
            ->assertJsonPath('has_blocking', true);
    }

    public function test_high_risk_checkout_requires_approval_request(): void
    {
        $user = User::factory()->create();
        [$kategori, $jenis, $satuan] = $this->createMasterData();

        $obat = Obat::query()->create([
            'kode_obat' => 'OBT-401',
            'nama_obat' => 'Morphine',
            'kategori_id' => $kategori->id,
            'jenis_id' => $jenis->id,
            'satuan_id' => $satuan->id,
            'stok_total' => 6,
            'stok_minimum' => 2,
            'harga_beli' => 15000,
            'harga_jual' => 20000,
            'is_active' => true,
            'is_high_risk_drug' => true,
        ]);

        $batch = BatchObat::query()->create([
            'obat_id' => $obat->id,
            'nomor_batch' => 'BATCH-HR-01',
            'tanggal_produksi' => now()->subMonth()->toDateString(),
            'tanggal_expired' => now()->addMonths(10)->toDateString(),
            'tanggal_masuk' => now()->subDays(3)->toDateString(),
            'stok_awal' => 6,
            'stok_tersedia' => 6,
            'harga_beli' => 15000,
            'status' => 'active',
        ]);

        $response = $this->actingAs($user)->post(route('transaksi.kasir.checkout'), [
            'mode' => 'penjualan',
            'metode_pembayaran' => 'qris',
            'tanggal_transaksi' => now()->toDateString(),
            'items' => [
                [
                    'obat_id' => $obat->id,
                    'batch_id' => $batch->id,
                    'jumlah' => 1,
                    'harga_satuan' => 20000,
                ],
            ],
        ]);

        $response->assertSessionHasErrors(['items']);
        $this->assertDatabaseHas('approval_requests', [
            'obat_id' => $obat->id,
            'status' => 'pending',
            'requested_quantity' => 1,
        ]);
        $this->assertDatabaseCount('transaksi', 0);
    }

    public function test_mobile_stock_scan_session_records_matched_and_unmatched_codes(): void
    {
        $user = User::factory()->create();
        [$kategori, $jenis, $satuan] = $this->createMasterData();

        $supplier = Supplier::query()->create([
            'kode_supplier' => 'SUP-01',
            'nama_supplier' => 'Supplier A',
            'status' => 'active',
            'lead_time_days' => 7,
        ]);

        $obat = Obat::query()->create([
            'kode_obat' => 'OBT-501',
            'nama_obat' => 'Amlodipine',
            'kategori_id' => $kategori->id,
            'jenis_id' => $jenis->id,
            'satuan_id' => $satuan->id,
            'stok_total' => 4,
            'stok_minimum' => 2,
            'harga_beli' => 4000,
            'harga_jual' => 7000,
            'is_active' => true,
        ]);

        BatchObat::query()->create([
            'obat_id' => $obat->id,
            'supplier_id' => $supplier->id,
            'nomor_batch' => 'BATCH-SCAN-01',
            'tanggal_produksi' => now()->subMonth()->toDateString(),
            'tanggal_expired' => now()->addMonths(12)->toDateString(),
            'tanggal_masuk' => now()->subDays(2)->toDateString(),
            'stok_awal' => 4,
            'stok_tersedia' => 4,
            'harga_beli' => 4000,
            'status' => 'active',
            'kode_qr' => 'QR-VALID-123',
        ]);

        $sessionResponse = $this->actingAs($user)
            ->postJson(route('api.insights.stock-scan.start'))
            ->assertOk();

        $sessionId = $sessionResponse->json('data.id');

        $this->actingAs($user)
            ->postJson(route('api.insights.stock-scan.scan', ['session' => $sessionId]), [
                'codes' => ['QR-VALID-123', 'QR-TIDAK-ADA'],
            ])
            ->assertOk()
            ->assertJsonPath('summary.total_scans', 2)
            ->assertJsonPath('summary.matched_scans', 1)
            ->assertJsonPath('summary.unmatched_scans', 1);

        $this->actingAs($user)
            ->postJson(route('api.insights.stock-scan.complete', ['session' => $sessionId]))
            ->assertOk()
            ->assertJsonPath('data.status', 'completed');
    }

    public function test_margin_dashboard_endpoint_returns_summary(): void
    {
        $user = User::factory()->create();
        [$kategori, $jenis, $satuan] = $this->createMasterData();

        $obat = Obat::query()->create([
            'kode_obat' => 'OBT-601',
            'nama_obat' => 'Omeprazole',
            'kategori_id' => $kategori->id,
            'jenis_id' => $jenis->id,
            'satuan_id' => $satuan->id,
            'stok_total' => 8,
            'stok_minimum' => 2,
            'harga_beli' => 5000,
            'harga_jual' => 9000,
            'is_active' => true,
        ]);

        $batch = BatchObat::query()->create([
            'obat_id' => $obat->id,
            'nomor_batch' => 'BATCH-MRG-01',
            'tanggal_produksi' => now()->subMonths(2)->toDateString(),
            'tanggal_expired' => now()->addMonths(8)->toDateString(),
            'tanggal_masuk' => now()->subDays(8)->toDateString(),
            'stok_awal' => 8,
            'stok_tersedia' => 8,
            'harga_beli' => 5000,
            'status' => 'active',
        ]);

        Transaksi::query()->create([
            'obat_id' => $obat->id,
            'batch_id' => $batch->id,
            'user_id' => $user->id,
            'jenis_transaksi' => Transaksi::JENIS_PENJUALAN,
            'jumlah' => 2,
            'harga_satuan' => 9000,
            'total_harga' => 18000,
            'tanggal_transaksi' => now()->toDateString(),
            'waktu_transaksi' => now()->toTimeString(),
            'keterangan' => 'Test margin',
        ]);

        $this->actingAs($user)
            ->getJson(route('api.insights.margins'))
            ->assertOk()
            ->assertJsonStructure([
                'summary' => ['revenue_30d', 'cost_30d', 'margin_value_30d', 'avg_margin_percentage_30d'],
                'per_item',
                'per_batch',
            ]);
    }

    private function createMasterData(): array
    {
        $kategori = KategoriObat::query()->create([
            'nama_kategori' => 'Kategori Test',
            'is_active' => true,
        ]);

        $jenis = JenisObat::query()->create([
            'nama_jenis' => 'Jenis Test',
            'is_active' => true,
        ]);

        $satuan = \App\Models\SatuanObat::query()->create([
            'nama_satuan' => 'Tablet',
            'singkatan' => 'tab',
            'is_active' => true,
        ]);

        return [$kategori, $jenis, $satuan];
    }
}
