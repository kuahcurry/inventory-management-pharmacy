<?php

namespace App\Actions;

use App\Models\DrugInteraction;
use App\Models\LogAktivitas;
use App\Models\Obat;
use App\Models\Transaksi;
use Illuminate\Support\Collection;

class BuildOperationalInsights
{
    public function buildReorderSuggestionForObat(Obat $obat, int $lookbackDays = 30): array
    {
        $startDate = now()->subDays($lookbackDays)->toDateString();
        $totalUsage = Transaksi::query()
            ->where('obat_id', $obat->id)
            ->where('jenis_transaksi', Transaksi::JENIS_PENJUALAN)
            ->whereDate('tanggal_transaksi', '>=', $startDate)
            ->sum('jumlah');

        $avgDailyUsage = (int) ceil($totalUsage / max($lookbackDays, 1));
        $leadTimeDays = max((int) $obat->supplier_lead_time_days, 1);
        $safetyStock = max((int) ceil($avgDailyUsage * 0.3 * $leadTimeDays), (int) $obat->stok_minimum);
        $reorderPoint = ($avgDailyUsage * $leadTimeDays) + $safetyStock;
        $suggestedOrderQty = max($reorderPoint - (int) $obat->stok_total, 0);

        return [
            'obat_id' => $obat->id,
            'avg_daily_usage' => $avgDailyUsage,
            'lead_time_days' => $leadTimeDays,
            'safety_stock' => $safetyStock,
            'reorder_point' => $reorderPoint,
            'suggested_order_qty' => $suggestedOrderQty,
            'period_start' => now()->subDays($lookbackDays)->toDateString(),
            'period_end' => now()->toDateString(),
            'calculated_at' => now(),
        ];
    }

    public function buildForecastForObat(Obat $obat, string $periodType = 'weekly'): array
    {
        $lookbackDays = $periodType === 'monthly' ? 90 : 30;
        $windowStart = now()->subDays($lookbackDays)->toDateString();
        $totalUsage = Transaksi::query()
            ->where('obat_id', $obat->id)
            ->where('jenis_transaksi', Transaksi::JENIS_PENJUALAN)
            ->whereDate('tanggal_transaksi', '>=', $windowStart)
            ->sum('jumlah');

        $avgDailyUsage = (int) ceil($totalUsage / max($lookbackDays, 1));
        $daysAhead = $periodType === 'monthly' ? 30 : 7;
        $currentMonth = (int) now()->format('m');
        $seasonalityFactor = in_array($currentMonth, [1, 2, 12], true) ? 1.15 : 1.0;
        $forecastQuantity = (int) ceil($avgDailyUsage * $daysAhead * $seasonalityFactor);

        return [
            'obat_id' => $obat->id,
            'period_type' => $periodType,
            'lookback_days' => $lookbackDays,
            'avg_daily_usage' => $avgDailyUsage,
            'seasonality_factor' => $seasonalityFactor,
            'forecast_quantity' => $forecastQuantity,
            'confidence_percentage' => min(95, max(50, 65 + (int) floor($totalUsage > 0 ? 20 : 0))),
            'forecast_start_date' => now()->toDateString(),
            'forecast_end_date' => now()->addDays($daysAhead)->toDateString(),
        ];
    }

    /**
     * @param  array<int>  $obatIds
     * @return Collection<int, DrugInteraction>
     */
    public function checkDrugInteractions(array $obatIds): Collection
    {
        if (count($obatIds) < 2) {
            return collect();
        }

        return DrugInteraction::query()
            ->with(['obat:id,nama_obat', 'interactsWith:id,nama_obat'])
            ->where('is_active', true)
            ->where(function ($query) use ($obatIds) {
                $query->whereIn('obat_id', $obatIds)
                    ->whereIn('interacts_with_obat_id', $obatIds);
            })
            ->get();
    }

    public function buildMarginSummary(): array
    {
        $sales = Transaksi::query()
            ->with(['obat:id,nama_obat', 'batch:id,obat_id,nomor_batch,harga_beli'])
            ->where('jenis_transaksi', Transaksi::JENIS_PENJUALAN)
            ->whereDate('tanggal_transaksi', '>=', now()->subDays(30))
            ->get();

        $perItem = $sales->groupBy('obat_id')->map(function (Collection $rows) {
            $first = $rows->first();
            $revenue = (float) $rows->sum('total_harga');
            $cost = $rows->sum(function (Transaksi $trx) {
                $buyPrice = (float) ($trx->batch?->harga_beli ?? $trx->obat?->harga_beli ?? 0);

                return $buyPrice * (int) $trx->jumlah;
            });
            $marginValue = $revenue - $cost;
            $marginPct = $revenue > 0 ? round(($marginValue / $revenue) * 100, 2) : 0;

            return [
                'obat_id' => $first?->obat_id,
                'nama_obat' => $first?->obat?->nama_obat,
                'qty_sold' => (int) $rows->sum('jumlah'),
                'revenue' => round($revenue, 2),
                'cost' => round((float) $cost, 2),
                'margin_value' => round($marginValue, 2),
                'margin_percentage' => $marginPct,
            ];
        })->values()->sortByDesc('margin_value')->values();

        $perBatch = $sales->groupBy('batch_id')->map(function (Collection $rows) {
            $first = $rows->first();
            $revenue = (float) $rows->sum('total_harga');
            $buyPrice = (float) ($first?->batch?->harga_beli ?? 0);
            $qty = (int) $rows->sum('jumlah');
            $cost = $buyPrice * $qty;
            $marginValue = $revenue - $cost;

            return [
                'batch_id' => $first?->batch_id,
                'nomor_batch' => $first?->batch?->nomor_batch,
                'nama_obat' => $first?->obat?->nama_obat,
                'qty_sold' => $qty,
                'revenue' => round($revenue, 2),
                'cost' => round($cost, 2),
                'margin_value' => round($marginValue, 2),
                'margin_percentage' => $revenue > 0 ? round(($marginValue / $revenue) * 100, 2) : 0,
            ];
        })->values()->sortByDesc('margin_value')->values();

        return [
            'summary' => [
                'revenue_30d' => round((float) $perItem->sum('revenue'), 2),
                'cost_30d' => round((float) $perItem->sum('cost'), 2),
                'margin_value_30d' => round((float) $perItem->sum('margin_value'), 2),
                'avg_margin_percentage_30d' => round((float) $perItem->avg('margin_percentage'), 2),
            ],
            'per_item' => $perItem,
            'per_batch' => $perBatch,
        ];
    }

    public function formatTransactionAudit(int $transaksiId): array
    {
        $logs = LogAktivitas::query()
            ->with('user:id,name')
            ->where('modul', 'transaksi')
            ->where('loggable_type', Transaksi::class)
            ->where('loggable_id', $transaksiId)
            ->latest('waktu')
            ->get();

        return $logs->map(function (LogAktivitas $log) {
            return [
                'id' => $log->id,
                'waktu' => optional($log->waktu)->toDateTimeString(),
                'aksi' => $log->aksi,
                'oleh' => $log->user?->name,
                'aktivitas' => $log->aktivitas,
                'sebelum' => $log->data_lama,
                'sesudah' => $log->data_baru,
            ];
        })->all();
    }
}
