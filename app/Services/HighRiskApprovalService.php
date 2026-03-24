<?php

namespace App\Services;

use App\Models\ApprovalRequest;
use App\Models\BatchObat;
use App\Models\Hutang;
use App\Models\Resep;
use App\Models\Transaksi;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class HighRiskApprovalService
{
    public function __construct(private PrescriptionLifecycleService $prescriptionLifecycleService) {}

    /**
     * @param  array<string, mixed>  $validated
     */
    public function createPendingCheckoutTransactions(array $validated, ?Resep $selectedResep, int $userId): Collection
    {
        return DB::transaction(function () use ($validated, $selectedResep, $userId) {
            return collect($validated['items'])->map(function (array $item, int $index) use ($validated, $selectedResep, $userId) {
                $batchId = $item['batch_id'] ?? null;
                if (! $batchId) {
                    throw ValidationException::withMessages([
                        "items.{$index}.batch_id" => 'Batch wajib dipilih untuk approval high-risk.',
                    ]);
                }

                $batch = BatchObat::query()->lockForUpdate()->findOrFail($batchId);
                if ($batch->stok_tersedia < (int) $item['jumlah']) {
                    throw ValidationException::withMessages([
                        "items.{$index}.jumlah" => "Stok batch {$batch->nomor_batch} tidak cukup. Tersedia: {$batch->stok_tersedia}.",
                    ]);
                }

                $transaksi = Transaksi::query()->create([
                    'obat_id' => (int) $item['obat_id'],
                    'batch_id' => $batchId,
                    'user_id' => $userId,
                    'unit_id' => null,
                    'resep_id' => $selectedResep?->id,
                    'jenis_transaksi' => Transaksi::JENIS_PENJUALAN,
                    'jumlah' => (int) $item['jumlah'],
                    'harga_satuan' => (float) $item['harga_satuan'],
                    'total_harga' => (int) $item['jumlah'] * (float) $item['harga_satuan'],
                    'tanggal_transaksi' => $validated['tanggal_transaksi'],
                    'waktu_transaksi' => now()->format('H:i:s'),
                    'keterangan' => implode(' | ', array_filter([
                        'Checkout kasir',
                        'Status: PENDING_APPROVAL',
                        'Metode: '.strtoupper((string) $validated['metode_pembayaran']),
                        ($validated['metode_pembayaran'] ?? null) === 'transfer' ? 'Bank: '.($validated['bank_nama'] ?? '-') : null,
                        $selectedResep ? 'Resep: '.$selectedResep->nomor_resep : null,
                    ])),
                    'nomor_referensi' => null,
                    'supplier_nama' => $validated['supplier_nama'] ?? null,
                    'pelanggan_nama' => $validated['pelanggan_nama'] ?? null,
                    'dokter_nama' => $selectedResep?->nama_dokter ?? ($validated['dokter_nama'] ?? null),
                    'sales_nama' => null,
                    'operator_nama' => null,
                    'kasir_nama' => $validated['kasir_nama'] ?? null,
                    'metode_pembayaran' => $validated['metode_pembayaran'],
                    'bank_code' => ($validated['metode_pembayaran'] ?? null) === 'transfer' ? ($validated['bank_code'] ?? null) : null,
                    'bank_nama' => ($validated['metode_pembayaran'] ?? null) === 'transfer' ? ($validated['bank_nama'] ?? null) : null,
                    'tipe_penjualan' => $validated['tipe_penjualan'] ?? 'biasa',
                    'kategori_keuangan' => in_array((string) ($validated['metode_pembayaran'] ?? null), ['debit', 'kredit'], true) ? 'hutang' : 'none',
                    'status_pelunasan' => in_array((string) ($validated['metode_pembayaran'] ?? null), ['debit', 'kredit'], true) ? 'belum_lunas' : 'lunas',
                    'jatuh_tempo' => null,
                    'is_taxed' => (bool) ($validated['is_taxed'] ?? false),
                    'approval_status' => 'pending',
                ]);

                return ApprovalRequest::query()->create([
                    'request_type' => 'high_risk_sale',
                    'obat_id' => $transaksi->obat_id,
                    'transaksi_id' => $transaksi->id,
                    'requested_by' => $userId,
                    'approval_level_required' => 2,
                    'status' => 'pending',
                    'requested_quantity' => $transaksi->jumlah,
                    'reason' => 'Permintaan penjualan obat high-risk dari kasir.',
                ]);
            });
        });
    }

    public function finalizeApprovedRequest(ApprovalRequest $approval, int $processedBy): ?Transaksi
    {
        if (! $approval->transaksi_id) {
            return null;
        }

        $transaksi = Transaksi::query()->with(['batch.obat', 'resep'])->find($approval->transaksi_id);
        if (! $transaksi) {
            return null;
        }

        if ($transaksi->approval_status === 'approved') {
            return $transaksi;
        }

        if ($approval->status === 'rejected') {
            $transaksi->approval_status = 'rejected';
            $transaksi->approval_processed_at = now();
            $transaksi->save();

            return $transaksi;
        }

        if ($approval->status !== 'approved') {
            throw ValidationException::withMessages([
                'approval' => 'Approval request belum disetujui.',
            ]);
        }

        return DB::transaction(function () use ($transaksi, $processedBy) {
            $trx = Transaksi::query()->with(['batch.obat', 'resep'])->lockForUpdate()->findOrFail($transaksi->id);

            if ($trx->approval_status === 'approved') {
                return $trx;
            }

            $batch = $trx->batch;
            if (! $batch) {
                throw ValidationException::withMessages([
                    'batch' => 'Batch transaksi tidak ditemukan untuk finalisasi approval.',
                ]);
            }

            if ($batch->stok_tersedia < $trx->jumlah) {
                throw ValidationException::withMessages([
                    'stok' => "Stok batch {$batch->nomor_batch} tidak cukup untuk finalisasi approval.",
                ]);
            }

            $batch->stok_tersedia -= $trx->jumlah;
            if ($batch->stok_tersedia <= 0) {
                $batch->status = 'empty';
            }
            $batch->save();
            $batch->obat->recalculateStok();

            if (in_array((string) $trx->metode_pembayaran, ['debit', 'kredit'], true)) {
                Hutang::query()->updateOrCreate(
                    ['transaksi_id' => $trx->id],
                    [
                        'customer_name' => $trx->pelanggan_nama,
                        'total_amount' => (float) $trx->total_harga,
                        'remaining_amount' => (float) $trx->total_harga,
                        'payment_status' => 'unpaid',
                        'user_id' => $trx->user_id,
                    ]
                );
            }

            $trx->approval_status = 'approved';
            $trx->approval_processed_at = now();
            $trx->save();

            if ($trx->resep) {
                $this->prescriptionLifecycleService->markProcessedFromCheckout(
                    $trx->resep,
                    [$trx->obat_id],
                    $trx->user_id ?? $processedBy
                );
            }

            return $trx;
        });
    }
}
