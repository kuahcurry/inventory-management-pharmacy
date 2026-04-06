<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BatchObat;
use App\Models\Obat;
use App\Models\Transaksi;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ReportController extends Controller
{
    /**
     * Generate stock report.
     */
    public function stockReport(Request $request): JsonResponse
    {
        return response()->json($this->buildStockPayload($request));
    }

    /**
     * Generate transaction report.
     */
    public function transactionReport(Request $request): JsonResponse
    {
        return response()->json($this->buildTransactionPayload($request));
    }

    /**
     * Generate expiry report.
     */
    public function expiryReport(Request $request): JsonResponse
    {
        return response()->json($this->buildExpiryPayload($request));
    }

    /**
     * Export report data in CSV format.
     */
    public function export(Request $request, string $type): StreamedResponse|JsonResponse
    {
        $payload = match ($type) {
            'stock' => $this->buildStockPayload($request),
            'transactions' => $this->buildTransactionPayload($request),
            'expiry' => $this->buildExpiryPayload($request),
            default => null,
        };

        if ($payload === null) {
            return response()->json([
                'message' => 'Jenis laporan tidak dikenali.',
                'type' => $type,
            ], 422);
        }

        $format = strtolower((string) $request->get('format', 'csv'));
        if ($format !== 'csv') {
            return response()->json($payload);
        }

        $rows = $this->payloadToRows($type, $payload);
        $filename = sprintf('%s-report-%s.csv', $type, now()->format('Ymd-His'));

        return response()->streamDownload(function () use ($rows): void {
            $handle = fopen('php://output', 'w');

            if ($handle === false) {
                return;
            }

            if (! empty($rows)) {
                fputcsv($handle, array_keys($rows[0]));
                foreach ($rows as $row) {
                    fputcsv($handle, $row);
                }
            }

            fclose($handle);
        }, $filename, [
            'Content-Type' => 'text/csv; charset=UTF-8',
        ]);
    }

    private function buildStockPayload(Request $request): array
    {
        $query = Obat::with([
            'kategori:id,nama_kategori',
            'jenis:id,nama_jenis',
            'satuan:id,nama_satuan',
        ])->withCount('batches');

        if ($request->filled('kategori_id')) {
            $query->where('kategori_id', $request->kategori_id);
        }

        if ($request->filled('jenis_id')) {
            $query->where('jenis_id', $request->jenis_id);
        }

        if ($request->boolean('low_stock_only')) {
            $query->whereColumn('stok_total', '<=', 'stok_minimum');
        }

        $obats = $query->orderBy('nama_obat')->get();

        return [
            'summary' => [
                'total_items' => $obats->count(),
                'low_stock_items' => $obats->filter(fn ($obat) => $obat->isStokRendah())->count(),
                'total_value' => $obats->sum(fn ($obat) => ((float) $obat->stok_total) * ((float) $obat->harga_beli)),
            ],
            'data' => $obats,
        ];
    }

    private function buildTransactionPayload(Request $request): array
    {
        $query = Transaksi::with([
            'obat:id,nama_obat',
            'batch:id,nomor_batch',
            'user:id,name',
            'unit:id,nama_unit',
        ]);

        if ($request->filled('date_from')) {
            $query->whereDate('tanggal_transaksi', '>=', $request->date_from);
        }

        if ($request->filled('date_to')) {
            $query->whereDate('tanggal_transaksi', '<=', $request->date_to);
        }

        if ($request->filled('jenis_transaksi')) {
            $query->where('jenis_transaksi', $request->jenis_transaksi);
        }

        if ($request->filled('obat_id')) {
            $query->where('obat_id', $request->obat_id);
        }

        $transaksis = $query->latest('tanggal_transaksi')->get();

        return [
            'summary' => [
                'total_transactions' => $transaksis->count(),
                'by_type' => [
                    'masuk' => $transaksis->where('jenis_transaksi', Transaksi::JENIS_MASUK)->count(),
                    'keluar' => $transaksis->where('jenis_transaksi', Transaksi::JENIS_KELUAR)->count(),
                    'penjualan' => $transaksis->where('jenis_transaksi', Transaksi::JENIS_PENJUALAN)->count(),
                ],
                'total_value' => [
                    'masuk' => $transaksis->where('jenis_transaksi', Transaksi::JENIS_MASUK)
                        ->sum(fn ($trx) => ((float) $trx->jumlah) * ((float) $trx->harga_satuan)),
                    'keluar' => $transaksis->where('jenis_transaksi', Transaksi::JENIS_KELUAR)
                        ->sum(fn ($trx) => ((float) $trx->jumlah) * ((float) $trx->harga_satuan)),
                    'penjualan' => $transaksis->where('jenis_transaksi', Transaksi::JENIS_PENJUALAN)
                        ->sum(fn ($trx) => ((float) $trx->jumlah) * ((float) $trx->harga_satuan)),
                ],
            ],
            'data' => $transaksis,
        ];
    }

    private function buildExpiryPayload(Request $request): array
    {
        $days = (int) $request->get('days', 30);

        $expiringSoon = BatchObat::with(['obat:id,nama_obat,kode_obat', 'supplier:id,nama'])
            ->expiringSoon($days)
            ->where('status', 'active')
            ->where('stok_tersedia', '>', 0)
            ->orderBy('tanggal_expired')
            ->get();

        $expired = BatchObat::with(['obat:id,nama_obat,kode_obat', 'supplier:id,nama'])
            ->expired()
            ->where('stok_tersedia', '>', 0)
            ->orderBy('tanggal_expired', 'desc')
            ->get();

        return [
            'summary' => [
                'expiring_soon_count' => $expiringSoon->count(),
                'expiring_soon_value' => $expiringSoon->sum(fn ($batch) => ((float) $batch->stok_tersedia) * ((float) $batch->harga_beli)),
                'expired_count' => $expired->count(),
                'expired_value' => $expired->sum(fn ($batch) => ((float) $batch->stok_tersedia) * ((float) $batch->harga_beli)),
            ],
            'expiring_soon' => $expiringSoon,
            'expired' => $expired,
        ];
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array<int, array<string, mixed>>
     */
    private function payloadToRows(string $type, array $payload): array
    {
        if ($type === 'stock') {
            return collect($payload['data'] ?? [])->map(function ($obat) {
                return [
                    'kode_obat' => $obat->kode_obat,
                    'nama_obat' => $obat->nama_obat,
                    'kategori' => $obat->kategori?->nama_kategori,
                    'jenis' => $obat->jenis?->nama_jenis,
                    'satuan' => $obat->satuan?->nama_satuan,
                    'stok_total' => $obat->stok_total,
                    'stok_minimum' => $obat->stok_minimum,
                    'harga_beli' => $obat->harga_beli,
                    'nilai_stok' => ((float) $obat->stok_total) * ((float) $obat->harga_beli),
                ];
            })->all();
        }

        if ($type === 'transactions') {
            return collect($payload['data'] ?? [])->map(function ($transaksi) {
                return [
                    'kode_transaksi' => $transaksi->kode_transaksi,
                    'tanggal' => optional($transaksi->tanggal_transaksi)->format('Y-m-d'),
                    'jenis_transaksi' => $transaksi->jenis_transaksi,
                    'obat' => $transaksi->obat?->nama_obat,
                    'batch' => $transaksi->batch?->nomor_batch,
                    'jumlah' => $transaksi->jumlah,
                    'harga_satuan' => $transaksi->harga_satuan,
                    'total_harga' => $transaksi->total_harga,
                    'operator' => $transaksi->user?->name,
                ];
            })->all();
        }

        return collect($payload['expiring_soon'] ?? [])->map(function ($batch) {
            return [
                'status' => 'expiring_soon',
                'kode_obat' => $batch->obat?->kode_obat,
                'nama_obat' => $batch->obat?->nama_obat,
                'nomor_batch' => $batch->nomor_batch,
                'tanggal_expired' => optional($batch->tanggal_expired)->format('Y-m-d'),
                'stok_tersedia' => $batch->stok_tersedia,
                'supplier' => $batch->supplier?->nama,
            ];
        })->merge(collect($payload['expired'] ?? [])->map(function ($batch) {
            return [
                'status' => 'expired',
                'kode_obat' => $batch->obat?->kode_obat,
                'nama_obat' => $batch->obat?->nama_obat,
                'nomor_batch' => $batch->nomor_batch,
                'tanggal_expired' => optional($batch->tanggal_expired)->format('Y-m-d'),
                'stok_tersedia' => $batch->stok_tersedia,
                'supplier' => $batch->supplier?->nama,
            ];
        }))->all();
    }
}
