<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BatchObat;
use App\Models\Obat;
use App\Models\Transaksi;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Build a fixed 7-day transaction series ending today.
     *
     * @return array<int, array<string, int|string>>
     */
    private function buildTransactionTrend7d(): array
    {
        $startDate = now()->subDays(6)->startOfDay();

        $grouped = Transaksi::query()
            ->whereDate('tanggal_transaksi', '>=', $startDate->toDateString())
            ->get()
            ->groupBy(fn (Transaksi $item) => $item->tanggal_transaksi->format('Y-m-d'));

        return collect(range(0, 6))->map(function (int $offset) use ($startDate, $grouped): array {
            $date = $startDate->copy()->addDays($offset);
            $key = $date->format('Y-m-d');
            $rows = $grouped->get($key, collect());

            return [
                'date' => $key,
                'label' => $date->isoFormat('dd, D MMM'),
                'total' => (int) $rows->count(),
                'masuk' => (int) $rows->where('jenis_transaksi', Transaksi::JENIS_MASUK)->count(),
                'keluar' => (int) $rows->whereIn('jenis_transaksi', [Transaksi::JENIS_KELUAR, Transaksi::JENIS_PENJUALAN])->count(),
            ];
        })->all();
    }

    /**
     * Display the dashboard page
     */
    public function index(Request $request): Response
    {
        $todayTransactions = Transaksi::today()->count();
        $yesterdayTransactions = Transaksi::query()
            ->whereDate('tanggal_transaksi', now()->subDay()->toDateString())
            ->count();

        $todayIncoming = (int) Transaksi::today()->masuk()->sum('jumlah');
        $yesterdayIncoming = (int) Transaksi::query()
            ->whereDate('tanggal_transaksi', now()->subDay()->toDateString())
            ->masuk()
            ->sum('jumlah');

        $todayOutgoing = (int) Transaksi::today()->keluar()->sum('jumlah');
        $yesterdayOutgoing = (int) Transaksi::query()
            ->whereDate('tanggal_transaksi', now()->subDay()->toDateString())
            ->keluar()
            ->sum('jumlah');

        $stats = [
            'total_obat' => Obat::active()->count(),
            'total_stok' => Obat::active()->sum('stok_total'),
            'low_stock_count' => Obat::active()->stokRendah()->count(),
            'expired_soon_count' => BatchObat::active()->expiringSoon(30)->count(),
            'today_transactions' => $todayTransactions,
            'today_incoming' => $todayIncoming,
            'today_outgoing' => $todayOutgoing,
            'yesterday_transactions' => $yesterdayTransactions,
            'yesterday_incoming' => $yesterdayIncoming,
            'yesterday_outgoing' => $yesterdayOutgoing,
        ];

        // Get low stock medicines
        $lowStock = Obat::with(['kategori', 'jenis', 'satuan'])
            ->active()
            ->stokRendah()
            ->orderByRaw('(stok_total - stok_minimum)')
            ->limit(5)
            ->get();

        // Get expiring soon batches
        $expiringSoon = BatchObat::with(['obat.kategori'])
            ->active()
            ->expiringSoon(30)
            ->orderBy('tanggal_expired', 'asc')
            ->limit(5)
            ->get();

        return Inertia::render('dashboard', [
            'stats' => $stats,
            'lowStock' => $lowStock,
            'expiringSoon' => $expiringSoon,
            'transactionTrend7d' => $this->buildTransactionTrend7d(),
        ]);
    }

    /**
     * Get dashboard statistics
     */
    public function stats(Request $request): JsonResponse
    {
        $stats = [
            'total_obat' => Obat::active()->count(),
            'total_stok' => Obat::active()->sum('stok_total'),
            'low_stock_count' => Obat::active()->stokRendah()->count(),
            'expired_soon_count' => BatchObat::active()->expiringSoon(30)->count(),
            'today_transactions' => Transaksi::today()->count(),
            'today_incoming' => Transaksi::today()->masuk()->sum('jumlah'),
            'today_outgoing' => Transaksi::today()->keluar()->sum('jumlah'),
        ];

        return response()->json($stats);
    }

    /**
     * Get stock levels by category
     */
    public function stockLevels(Request $request): JsonResponse
    {
        $stockLevels = Obat::with(['kategori'])
            ->active()
            ->get()
            ->groupBy('kategori.nama_kategori')
            ->map(function ($obats) {
                return [
                    'count' => $obats->count(),
                    'total_stok' => $obats->sum('stok_total'),
                    'low_stock_count' => $obats->filter->isStokRendah()->count(),
                ];
            });

        return response()->json($stockLevels);
    }

    /**
     * Get transaction trends
     */
    public function transactionTrends(Request $request): JsonResponse
    {
        $period = $request->get('period', 'week'); // week, month, year
        $startDate = match($period) {
            'week' => now()->subWeek(),
            'month' => now()->subMonth(),
            'year' => now()->subYear(),
            default => now()->subWeek(),
        };

        $transactions = Transaksi::where('tanggal_transaksi', '>=', $startDate)
            ->get()
            ->groupBy(function ($item) use ($period) {
                return match($period) {
                    'week' => $item->tanggal_transaksi->format('Y-m-d'),
                    'month' => $item->tanggal_transaksi->format('Y-m-d'),
                    'year' => $item->tanggal_transaksi->format('Y-m'),
                };
            })
            ->map(function ($transactions) {
                return [
                    'total' => $transactions->count(),
                    'masuk' => $transactions->where('jenis_transaksi', 'masuk')->sum('jumlah'),
                    'keluar' => $transactions->where('jenis_transaksi', 'keluar')->sum('jumlah'),
                    'penjualan' => $transactions->where('jenis_transaksi', 'penjualan')->sum('total_harga'),
                ];
            });

        return response()->json($transactions);
    }

    /**
     * Get medicines expiring soon
     */
    public function expiringSoon(Request $request): JsonResponse
    {
        $days = $request->get('days', 30);
        
        $batches = BatchObat::with(['obat.kategori', 'obat.jenis', 'obat.satuan'])
            ->active()
            ->expiringSoon($days)
            ->orderBy('tanggal_expired', 'asc')
            ->limit(20)
            ->get();

        return response()->json($batches);
    }

    /**
     * Get low stock medicines
     */
    public function lowStock(Request $request): JsonResponse
    {
        $obats = Obat::with(['kategori', 'jenis', 'satuan', 'batches'])
            ->active()
            ->stokRendah()
            ->orderByRaw('(stok_total - stok_minimum)')
            ->limit(20)
            ->get();

        return response()->json($obats);
    }

    /**
     * Get top medicines by usage
     */
    public function topMedicines(Request $request): JsonResponse
    {
        $period = $request->get('period', 'month');
        $limit = $request->get('limit', 10);
        
        $startDate = match($period) {
            'week' => now()->subWeek(),
            'month' => now()->subMonth(),
            'year' => now()->subYear(),
            default => now()->subMonth(),
        };

        $topMedicines = Transaksi::with('obat')
            ->where('jenis_transaksi', 'keluar')
            ->where('tanggal_transaksi', '>=', $startDate)
            ->get()
            ->groupBy('obat_id')
            ->map(function ($transactions) {
                $obat = $transactions->first()->obat;
                return [
                    'obat' => $obat,
                    'total_keluar' => $transactions->sum('jumlah'),
                    'frequency' => $transactions->count(),
                ];
            })
            ->sortByDesc('total_keluar')
            ->take($limit)
            ->values();

        return response()->json($topMedicines);
    }

    /**
     * Get recent transactions
     */
    public function recentTransactions(Request $request): JsonResponse
    {
        $limit = $request->get('limit', 10);
        
        $transactions = Transaksi::with(['obat', 'batch', 'user', 'unit'])
            ->latest('tanggal_transaksi')
            ->latest('waktu_transaksi')
            ->limit($limit)
            ->get();

        return response()->json($transactions);
    }
}
