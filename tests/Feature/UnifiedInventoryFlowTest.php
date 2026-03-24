<?php

namespace Tests\Feature;

use App\Models\BatchObat;
use App\Models\JenisObat;
use App\Models\KategoriObat;
use App\Models\Obat;
use App\Models\SatuanObat;
use App\Models\Supplier;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UnifiedInventoryFlowTest extends TestCase
{
    use RefreshDatabase;

    public function test_batch_create_route_redirects_to_unified_form_with_info_notice(): void
    {
        $user = User::factory()->create([
            'email_verified_at' => now(),
        ]);

        $response = $this->actingAs($user)->get(route('batch.create'));

        $response->assertRedirect(route('obat.create'));
        $response->assertSessionHas('info');
    }

    public function test_existing_medicine_mode_creates_only_new_batch(): void
    {
        $user = User::factory()->create([
            'email_verified_at' => now(),
        ]);

        [$kategori, $jenis, $satuan] = $this->createMasterData();

        $supplier = Supplier::query()->create([
            'kode_supplier' => 'SUP-EX-01',
            'nama_supplier' => 'Supplier Existing',
            'status' => 'active',
            'lead_time_days' => 7,
        ]);

        $obat = Obat::query()->create([
            'kode_obat' => 'OBT-EX-01',
            'nama_obat' => 'Amoxicillin 500mg',
            'kategori_id' => $kategori->id,
            'jenis_id' => $jenis->id,
            'satuan_id' => $satuan->id,
            'stok_total' => 0,
            'stok_minimum' => 5,
            'harga_beli' => 1500,
            'harga_jual' => 2500,
            'is_active' => true,
        ]);

        $response = $this->actingAs($user)->post('/obat', [
            'existing_obat_id' => $obat->id,
            'initial_supplier_id' => $supplier->id,
            'initial_nomor_batch' => 'B-EX-NEW-001',
            'initial_tanggal_expired' => now()->addMonths(8)->toDateString(),
            'initial_tanggal_masuk' => now()->toDateString(),
            'initial_stok_awal' => 40,
            'initial_harga_beli' => 1600,
            'initial_catatan' => 'Batch tambahan',
        ]);

        $response->assertRedirect(route('obat.index'));
        $response->assertSessionHasNoErrors();

        $this->assertDatabaseCount('obat', 1);
        $this->assertDatabaseHas('batch_obat', [
            'obat_id' => $obat->id,
            'supplier_id' => $supplier->id,
            'nomor_batch' => 'B-EX-NEW-001',
            'stok_awal' => 40,
            'stok_tersedia' => 40,
        ]);

        $this->assertSame(40, (int) $obat->fresh()->stok_total);
    }

    public function test_new_medicine_duplicate_name_and_supplier_is_rejected(): void
    {
        $user = User::factory()->create([
            'email_verified_at' => now(),
        ]);

        [$kategori, $jenis, $satuan] = $this->createMasterData();

        $supplier = Supplier::query()->create([
            'kode_supplier' => 'SUP-DUP-01',
            'nama_supplier' => 'Supplier Duplikat',
            'status' => 'active',
            'lead_time_days' => 7,
        ]);

        $obat = Obat::query()->create([
            'kode_obat' => 'OBT-DUP-01',
            'nama_obat' => 'Cefixime',
            'kategori_id' => $kategori->id,
            'jenis_id' => $jenis->id,
            'satuan_id' => $satuan->id,
            'stok_total' => 0,
            'stok_minimum' => 5,
            'harga_beli' => 3000,
            'harga_jual' => 4500,
            'is_active' => true,
        ]);

        BatchObat::query()->create([
            'obat_id' => $obat->id,
            'supplier_id' => $supplier->id,
            'nomor_batch' => 'B-DUP-BASE-001',
            'tanggal_expired' => now()->addMonths(6)->toDateString(),
            'tanggal_masuk' => now()->subDays(5)->toDateString(),
            'stok_awal' => 10,
            'stok_tersedia' => 10,
            'harga_beli' => 3000,
            'status' => 'active',
        ]);

        $response = $this->actingAs($user)->post('/obat', [
            'nama_obat' => '  cEfIxImE  ',
            'kategori_id' => $kategori->id,
            'jenis_id' => $jenis->id,
            'satuan_id' => $satuan->id,
            'stok_minimum' => 3,
            'harga_beli' => 3200,
            'harga_jual' => 4700,
            'initial_supplier_id' => $supplier->id,
            'initial_nomor_batch' => 'B-DUP-TRY-002',
            'initial_tanggal_expired' => now()->addMonths(9)->toDateString(),
            'initial_tanggal_masuk' => now()->toDateString(),
            'initial_stok_awal' => 20,
            'initial_harga_beli' => 3200,
        ]);

        $response->assertSessionHasErrors(['nama_obat']);
        $this->assertDatabaseCount('obat', 1);
        $this->assertDatabaseCount('batch_obat', 1);
    }

    /**
     * @return array{0: KategoriObat, 1: JenisObat, 2: SatuanObat}
     */
    private function createMasterData(): array
    {
        $kategori = KategoriObat::query()->create([
            'nama_kategori' => 'Antibiotik',
            'deskripsi' => null,
            'is_active' => true,
        ]);

        $jenis = JenisObat::query()->create([
            'nama_jenis' => 'Tablet',
            'deskripsi' => null,
            'is_active' => true,
        ]);

        $satuan = SatuanObat::query()->create([
            'nama_satuan' => 'Strip',
            'singkatan' => 'str',
            'is_active' => true,
        ]);

        return [$kategori, $jenis, $satuan];
    }
}
