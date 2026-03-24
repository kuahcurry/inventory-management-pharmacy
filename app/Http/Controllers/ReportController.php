<?php

namespace App\Http\Controllers;

use App\Actions\BuildOperationalInsights;
use App\Models\ApprovalRequest;
use App\Models\BatchObat;
use App\Models\BiayaOperasional;
use App\Models\DemandForecast;
use App\Models\HutangPayment;
use App\Models\KategoriObat;
use App\Models\Obat;
use App\Models\ReorderSuggestion;
use App\Models\Transaksi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ReportController extends Controller
{
    public function __construct(private BuildOperationalInsights $insights) {}

    /**
     * Display merged report center with grouped report packs.
     */
    public function index(): Response
    {
        $overview = [
            'total_obat' => Obat::count(),
            'total_stok' => (int) Obat::sum('stok_total'),
            'total_transaksi_30d' => (int) Transaksi::query()
                ->whereDate('tanggal_transaksi', '>=', now()->subDays(30)->toDateString())
                ->count(),
            'nilai_transaksi_30d' => (float) Transaksi::query()
                ->whereDate('tanggal_transaksi', '>=', now()->subDays(30)->toDateString())
                ->sum('total_harga'),
            'batch_expired' => (int) BatchObat::query()
                ->where('stok_tersedia', '>', 0)
                ->whereDate('tanggal_expired', '<', now())
                ->count(),
            'batch_expiring_30d' => (int) BatchObat::query()
                ->where('stok_tersedia', '>', 0)
                ->whereDate('tanggal_expired', '>=', now())
                ->whereDate('tanggal_expired', '<=', now()->addDays(30))
                ->count(),
        ];

        $mergedReports = [
            [
                'key' => 'pembelian_suite',
                'title' => 'Pembelian Suite',
                'description' => 'Satu paket laporan pembelian untuk semua dimensi utama agar tidak memecah menu.',
                'status' => 'ready',
                'primary_link' => '/reports/pembelian',
                'secondary_link' => '/transaksi/masuk',
                'contains' => [
                    'Laporan Pembelian',
                    'Laporan Pembelian Detail',
                    'Laporan Pembelian Detail Suplier',
                    'Laporan Pembelian per Barang',
                    'Laporan Pembelian per Suplier',
                    'Laporan Pembelian Kredit',
                    'Laporan Pembelian Tunai',
                ],
            ],
            [
                'key' => 'penjualan_suite',
                'title' => 'Penjualan Suite',
                'description' => 'Satu paket penjualan berbasis filter dinamis (tanggal, barang, kategori, metode bayar, operator).',
                'status' => 'ready',
                'primary_link' => '/reports/penjualan',
                'secondary_link' => '/transaksi/keluar',
                'contains' => [
                    'Laporan Penjualan',
                    'Laporan Penjualan Detail',
                    'Laporan Penjualan Detail Pelanggan',
                    'Laporan Penjualan Detail Dokter',
                    'Laporan Penjualan Detail Sales',
                    'Laporan Penjualan Operator',
                    'Laporan Penjualan Kasir',
                    'Laporan Penjualan per Tanggal',
                    'Laporan Penjualan per Barang',
                    'Laporan Penjualan per Kategori',
                    'Laporan Penjualan per Pelanggan',
                    'Laporan Penjualan per Dokter',
                    'Laporan Penjualan Tunai',
                    'Laporan Penjualan Debit',
                    'Laporan Penjualan Kredit',
                    'Laporan Penjualan Transfer',
                    'Laporan Penjualan QRIS',
                    'Laporan Penjualan Biasa',
                    'Laporan Penjualan Resep',
                    'Laporan Penjualan Pajak',
                    'Laporan Penjualan Grafik',
                ],
            ],
            [
                'key' => 'ar_ap_suite',
                'title' => 'AR/AP Suite (Hutang & Piutang)',
                'description' => 'Gabungan aging hutang dan piutang agar monitoring kewajiban dan tagihan dalam satu layar.',
                'status' => 'ready',
                'primary_link' => '/reports/hutang-piutang',
                'secondary_link' => '/kasir',
                'contains' => [
                    'Laporan Hutang',
                    'Laporan Hutang Lunas',
                    'Laporan Hutang Belum-Lunas',
                    'Laporan Piutang',
                    'Laporan Piutang Lunas',
                    'Laporan Piutang Belum-Lunas',
                ],
            ],
            [
                'key' => 'cashflow_suite',
                'title' => 'Cashflow Suite',
                'description' => 'Kas masuk/keluar disatukan dari transaksi untuk pemantauan arus kas bersih.',
                'status' => 'ready',
                'primary_link' => '/reports/cashflow',
                'secondary_link' => '/transaksi',
                'contains' => [
                    'Laporan Cashflow',
                    'Laporan Cashflow Masuk',
                    'Laporan Cashflow Keluar',
                ],
            ],
            [
                'key' => 'obat_suite',
                'title' => 'Obat Intelligence Suite',
                'description' => 'Semua laporan obat digabung dalam satu paket stok, mutasi, laris/tidak laku, dan expired.',
                'status' => 'ready',
                'primary_link' => '/reports/obat',
                'secondary_link' => '/reports/expiry',
                'contains' => [
                    'Lap. Obat Terlaris',
                    'Lap. Obat Tidak Laku',
                    'Lap. Obat Expired',
                    'Lap. Obat Stok',
                    'Lap. Obat Stok Total',
                    'Lap. Obat Stok Minimal',
                    'Lap. Obat Stok Habis',
                    'Lap. Obat Keluar Masuk',
                    'Lap. Obat Keluar',
                    'Lap. Obat Masuk',
                    'Lap. Obat Kartu Stok',
                ],
            ],
            [
                'key' => 'keuangan_suite',
                'title' => 'Keuangan Suite',
                'description' => 'Ringkasan laba rugi dan modal barang dikonsolidasikan untuk pengambilan keputusan cepat.',
                'status' => 'ready',
                'primary_link' => '/reports/keuangan',
                'secondary_link' => '/reports/transactions',
                'contains' => [
                    'Laba Rugi',
                    'Modal Barang',
                ],
            ],
        ];

        return Inertia::render('laporan/index/index', [
            'overview' => $overview,
            'mergedReports' => $mergedReports,
        ]);
    }

    public function pembelian(Request $request): Response
    {
        return $this->renderSuitePage($request, 'pembelian_suite', '/reports/pembelian', '/reports/pembelian/export', 'laporan/pembelian/index');
    }

    public function pembelianExport(Request $request)
    {
        return $this->exportSuitePage($request, 'pembelian_suite');
    }

    public function penjualan(Request $request): Response
    {
        return $this->renderSuitePage($request, 'penjualan_suite', '/reports/penjualan', '/reports/penjualan/export', 'laporan/penjualan/index');
    }

    public function penjualanExport(Request $request)
    {
        return $this->exportSuitePage($request, 'penjualan_suite');
    }

    public function hutangPiutang(Request $request): Response
    {
        return $this->renderSuitePage($request, 'ar_ap_suite', '/reports/hutang-piutang', '/reports/hutang-piutang/export', 'laporan/hutang-piutang/index');
    }

    public function hutangPiutangExport(Request $request)
    {
        return $this->exportSuitePage($request, 'ar_ap_suite');
    }

    public function cashflow(Request $request): Response
    {
        return $this->renderSuitePage($request, 'cashflow_suite', '/reports/cashflow', '/reports/cashflow/export', 'laporan/cashflow/index');
    }

    public function cashflowExport(Request $request)
    {
        return $this->exportSuitePage($request, 'cashflow_suite');
    }

    public function obat(Request $request): Response
    {
        return $this->renderSuitePage($request, 'obat_suite', '/reports/obat', '/reports/obat/export', 'laporan/obat/index');
    }

    public function obatExport(Request $request)
    {
        return $this->exportSuitePage($request, 'obat_suite');
    }

    public function keuangan(Request $request): Response
    {
        return $this->renderSuitePage($request, 'keuangan_suite', '/reports/keuangan', '/reports/keuangan/export', 'laporan/keuangan/index');
    }

    public function keuanganExport(Request $request)
    {
        return $this->exportSuitePage($request, 'keuangan_suite');
    }

    public function suite(Request $request, string $suite): Response
    {
        return $this->renderSuitePage($request, $suite, '/reports/suite/'.$suite, '/reports/suite/'.$suite.'/export', 'laporan/suite/index');
    }

    public function suiteExport(Request $request, string $suite)
    {
        return $this->exportSuitePage($request, $suite);
    }

    private function renderSuitePage(Request $request, string $suite, string $routeBase, string $exportUrl, string $view): Response
    {
        abort_unless(in_array($suite, $this->allowedSuiteKeys(), true), 404);

        [$startDate, $endDate] = $this->resolveDateFilter($request);
        $includeTaxExpense = $request->boolean('include_pajak', true);
        $includeInterestExpense = $request->boolean('include_bunga', true);

        $base = Transaksi::query()
            ->with(['obat.kategori', 'batch', 'hutang'])
            ->whereDate('tanggal_transaksi', '>=', $startDate)
            ->whereDate('tanggal_transaksi', '<=', $endDate);

        $payload = $this->buildSuitePayload($suite, $base, $startDate, $endDate, [
            'include_pajak' => $includeTaxExpense,
            'include_bunga' => $includeInterestExpense,
        ]);

        return Inertia::render($view, [
            'suite' => $suite,
            'title' => $payload['title'],
            'description' => $payload['description'],
            'summaryCards' => $payload['summaryCards'],
            'expenseComposition' => $payload['expenseComposition'] ?? [],
            'sections' => $payload['sections'],
            'quickActions' => $this->suiteQuickActions($suite),
            'filters' => [
                'tanggal_dari' => $startDate,
                'tanggal_sampai' => $endDate,
                'include_pajak' => $includeTaxExpense,
                'include_bunga' => $includeInterestExpense,
                'route_base' => $routeBase,
                'export_url' => $exportUrl,
            ],
        ]);
    }

    private function exportSuitePage(Request $request, string $suite): StreamedResponse
    {
        abort_unless(in_array($suite, $this->allowedSuiteKeys(), true), 404);

        [$startDate, $endDate] = $this->resolveDateFilter($request);
        $includeTaxExpense = $request->boolean('include_pajak', true);
        $includeInterestExpense = $request->boolean('include_bunga', true);

        $base = Transaksi::query()
            ->with(['obat.kategori', 'batch', 'hutang'])
            ->whereDate('tanggal_transaksi', '>=', $startDate)
            ->whereDate('tanggal_transaksi', '<=', $endDate);

        $payload = $this->buildSuitePayload($suite, $base, $startDate, $endDate, [
            'include_pajak' => $includeTaxExpense,
            'include_bunga' => $includeInterestExpense,
        ]);
        $spreadsheet = $this->buildSpreadsheetFromSections(
            $payload['title'],
            $payload['sections'],
            [['Generated At', now()->toDateTimeString()]]
        );

        $filename = 'laporan-'.$suite.'-'.$startDate.'-'.$endDate.'.xlsx';

        return $this->downloadSpreadsheet($spreadsheet, $filename);
    }

    private function resolveDateFilter(Request $request): array
    {
        $startDate = $request->string('tanggal_dari')->toString() ?: now()->startOfMonth()->toDateString();
        $endDate = $request->string('tanggal_sampai')->toString() ?: now()->toDateString();

        return [$startDate, $endDate];
    }

    private function allowedSuiteKeys(): array
    {
        return [
            'pembelian_suite',
            'penjualan_suite',
            'ar_ap_suite',
            'cashflow_suite',
            'obat_suite',
            'keuangan_suite',
        ];
    }

    private function buildSuitePayload(string $suite, $base, string $startDate, string $endDate, array $options = []): array
    {
        return match ($suite) {
            'pembelian_suite' => $this->buildPembelianSuite($base),
            'penjualan_suite' => $this->buildPenjualanSuite($base),
            'ar_ap_suite' => $this->buildArApSuite($base),
            'cashflow_suite' => $this->buildCashflowSuite($base, $startDate, $endDate),
            'obat_suite' => $this->buildObatSuite($base, $startDate, $endDate),
            default => $this->buildKeuanganSuite($base, $startDate, $endDate, $options),
        };
    }

    private function suiteQuickActions(string $suite): array
    {
        return match ($suite) {
            'ar_ap_suite' => [
                [
                    'label' => 'Tambah Hutang',
                    'href' => '/transaksi/masuk',
                    'variant' => 'default',
                ],
                [
                    'label' => 'Tambah Piutang',
                    'href' => '/kasir?mode=penjualan&metode_pembayaran=kredit',
                    'variant' => 'outline',
                ],
            ],
            default => [],
        };
    }

    private function buildSpreadsheetFromSections(string $title, array $sections, array $summaryRows = []): Spreadsheet
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle(Str::limit(Str::slug($title, ' '), 31, ''));

        $rowIndex = 1;
        $sheet->setCellValue('A'.$rowIndex, $title);
        $sheet->getStyle('A'.$rowIndex)->getFont()->setBold(true)->setSize(14);
        $rowIndex++;

        foreach ($summaryRows as $summaryRow) {
            $sheet->setCellValue('A'.$rowIndex, (string) ($summaryRow[0] ?? ''));
            $sheet->setCellValue('B'.$rowIndex, $this->normalizeExportValue($summaryRow[1] ?? ''));
            $sheet->getStyle('A'.$rowIndex)->getFont()->setBold(true);
            $rowIndex++;
        }

        if ($summaryRows !== []) {
            $rowIndex++;
        }

        $maxColumns = 1;

        foreach ($sections as $section) {
            $columns = $section['columns'] ?? [];
            $rows = $section['rows'] ?? [];

            $sheet->setCellValue('A'.$rowIndex, (string) ($section['title'] ?? 'Section'));
            $sheet->getStyle('A'.$rowIndex)->getFont()->setBold(true);
            $rowIndex++;

            foreach ($columns as $colIndex => $column) {
                $cell = Coordinate::stringFromColumnIndex($colIndex + 1).$rowIndex;
                $sheet->setCellValue($cell, (string) $column);
                $sheet->getStyle($cell)->getFont()->setBold(true);
            }
            $maxColumns = max($maxColumns, count($columns));
            $rowIndex++;

            foreach ($rows as $row) {
                foreach ($columns as $colIndex => $column) {
                    $cell = Coordinate::stringFromColumnIndex($colIndex + 1).$rowIndex;
                    $sheet->setCellValue($cell, $this->normalizeExportValue($row[$column] ?? null));
                }
                $rowIndex++;
            }

            $rowIndex++;
        }

        for ($i = 1; $i <= $maxColumns; $i++) {
            $sheet->getColumnDimension(Coordinate::stringFromColumnIndex($i))->setAutoSize(true);
        }

        return $spreadsheet;
    }

    private function normalizeExportValue(mixed $value): mixed
    {
        if ($value instanceof \DateTimeInterface) {
            return $value->format('Y-m-d H:i:s');
        }

        if (is_bool($value)) {
            return $value ? 'Yes' : 'No';
        }

        if ($value === null) {
            return '';
        }

        return $value;
    }

    private function downloadSpreadsheet(Spreadsheet $spreadsheet, string $filename): StreamedResponse
    {
        return response()->streamDownload(function () use ($spreadsheet) {
            $writer = new Xlsx($spreadsheet);
            $writer->save('php://output');
        }, $filename, [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ]);
    }

    private function buildPembelianSuite($base): array
    {
        $rows = (clone $base)
            ->where('jenis_transaksi', Transaksi::JENIS_MASUK)
            ->get();

        $summaryCards = [
            ['label' => 'Total Pembelian', 'value' => $rows->count()],
            ['label' => 'Total Qty', 'value' => (int) $rows->sum('jumlah')],
            ['label' => 'Nilai Pembelian', 'value' => (float) $rows->sum('total_harga')],
        ];

        return [
            'title' => 'Pembelian Suite',
            'description' => 'Konsolidasi detail, supplier, barang, dan metode pembayaran pembelian.',
            'summaryCards' => $summaryCards,
            'sections' => [
                [
                    'key' => 'metode',
                    'title' => 'Pembelian per Metode',
                    'columns' => ['Metode', 'Jumlah Transaksi', 'Nilai'],
                    'rows' => $rows->groupBy(fn ($r) => $this->paymentMethodLabel($r->metode_pembayaran, $r->bank_nama))->map(function ($group, $key) {
                        return [
                            'Metode' => $key,
                            'Jumlah Transaksi' => $group->count(),
                            'Nilai' => (float) $group->sum('total_harga'),
                        ];
                    })->values()->all(),
                ],
                [
                    'key' => 'barang',
                    'title' => 'Pembelian per Barang',
                    'columns' => ['Barang', 'Qty', 'Nilai'],
                    'rows' => $rows->groupBy(fn ($r) => $r->obat?->nama_obat ?: 'Tanpa Obat')->map(function ($group, $key) {
                        return [
                            'Barang' => $key,
                            'Qty' => (int) $group->sum('jumlah'),
                            'Nilai' => (float) $group->sum('total_harga'),
                        ];
                    })->values()->all(),
                ],
                [
                    'key' => 'supplier',
                    'title' => 'Pembelian per Supplier',
                    'columns' => ['Supplier', 'Jumlah Transaksi', 'Nilai'],
                    'rows' => $rows->groupBy(fn ($r) => $r->supplier_nama ?: 'Tanpa Supplier')->map(function ($group, $key) {
                        return [
                            'Supplier' => $key,
                            'Jumlah Transaksi' => $group->count(),
                            'Nilai' => (float) $group->sum('total_harga'),
                        ];
                    })->values()->all(),
                ],
            ],
        ];
    }

    private function buildPenjualanSuite($base): array
    {
        $rows = (clone $base)->where('jenis_transaksi', Transaksi::JENIS_PENJUALAN)->get();
        $totalSales = (float) $rows->sum('total_harga');
        $outstandingDebt = (float) $rows->sum(function ($row) {
            return (float) ($row->hutang?->remaining_amount ?? 0);
        });
        $paidSales = max($totalSales - $outstandingDebt, 0);

        return [
            'title' => 'Penjualan Suite',
            'description' => 'Detail penjualan per metode, barang, kategori, aktor, dan tipe.',
            'summaryCards' => [
                ['label' => 'Total Penjualan', 'value' => $rows->count()],
                ['label' => 'Total Qty', 'value' => (int) $rows->sum('jumlah')],
                ['label' => 'total_sales', 'value' => $totalSales],
                ['label' => 'paid_sales', 'value' => $paidSales],
                ['label' => 'unpaid_sales', 'value' => $outstandingDebt],
            ],
            'sections' => [
                [
                    'key' => 'ringkasan_hutang',
                    'title' => 'Ringkasan Penjualan vs Hutang',
                    'columns' => ['Komponen', 'Nilai'],
                    'rows' => [
                        ['Komponen' => 'Total Sales', 'Nilai' => $totalSales],
                        ['Komponen' => 'Paid Sales', 'Nilai' => $paidSales],
                        ['Komponen' => 'Unpaid Sales (Hutang)', 'Nilai' => $outstandingDebt],
                    ],
                ],
                [
                    'key' => 'metode',
                    'title' => 'Penjualan per Metode Bayar',
                    'columns' => ['Metode', 'Jumlah Transaksi', 'Omzet'],
                    'rows' => $rows->groupBy(fn ($r) => $this->paymentMethodLabel($r->metode_pembayaran, $r->bank_nama))->map(function ($group, $key) {
                        return [
                            'Metode' => $key,
                            'Jumlah Transaksi' => $group->count(),
                            'Omzet' => (float) $group->sum('total_harga'),
                        ];
                    })->values()->all(),
                ],
                [
                    'key' => 'transfer_bank',
                    'title' => 'Penjualan Transfer per Bank',
                    'columns' => ['Bank', 'Jumlah Transaksi', 'Omzet'],
                    'rows' => $rows
                        ->where('metode_pembayaran', 'transfer')
                        ->groupBy(fn ($r) => $this->bankLabel($r->bank_nama, $r->bank_code))
                        ->map(function ($group, $bank) {
                            return [
                                'Bank' => $bank,
                                'Jumlah Transaksi' => $group->count(),
                                'Omzet' => (float) $group->sum('total_harga'),
                            ];
                        })
                        ->values()
                        ->all(),
                ],
                [
                    'key' => 'barang',
                    'title' => 'Penjualan per Barang',
                    'columns' => ['Barang', 'Qty', 'Omzet'],
                    'rows' => $rows->groupBy(fn ($r) => $r->obat?->nama_obat ?: 'Tanpa Obat')->map(function ($group, $key) {
                        return [
                            'Barang' => $key,
                            'Qty' => (int) $group->sum('jumlah'),
                            'Omzet' => (float) $group->sum('total_harga'),
                        ];
                    })->values()->all(),
                ],
                [
                    'key' => 'kategori',
                    'title' => 'Penjualan per Kategori',
                    'columns' => ['Kategori', 'Qty', 'Omzet'],
                    'rows' => $rows->groupBy(fn ($r) => $r->obat?->kategori?->nama_kategori ?: 'Tanpa Kategori')->map(function ($group, $key) {
                        return [
                            'Kategori' => $key,
                            'Qty' => (int) $group->sum('jumlah'),
                            'Omzet' => (float) $group->sum('total_harga'),
                        ];
                    })->values()->all(),
                ],
                [
                    'key' => 'aktor',
                    'title' => 'Penjualan per Aktor',
                    'columns' => ['Kasir', 'Jumlah Transaksi', 'Omzet'],
                    'rows' => $rows
                        ->filter(fn ($r) => filled($r->kasir_nama))
                        ->groupBy(fn ($r) => $r->kasir_nama)
                        ->map(function ($group, $kasirNama) {
                            return [
                                'Kasir' => $kasirNama,
                                'Jumlah Transaksi' => $group->count(),
                                'Omzet' => (float) $group->sum('total_harga'),
                            ];
                        })
                        ->values()
                        ->all(),
                ],
            ],
        ];
    }

    private function buildArApSuite($base): array
    {
        $rows = (clone $base)->whereIn('kategori_keuangan', ['hutang', 'piutang'])->get();

        return [
            'title' => 'AR/AP Suite',
            'description' => 'Aging hutang/piutang berdasarkan status pelunasan dan jatuh tempo.',
            'summaryCards' => [
                ['label' => 'Total AR/AP', 'value' => $rows->count()],
                ['label' => 'Belum Lunas', 'value' => (int) $rows->where('status_pelunasan', 'belum_lunas')->count()],
                ['label' => 'Nilai Outstanding', 'value' => (float) $rows->where('status_pelunasan', 'belum_lunas')->sum('total_harga')],
            ],
            'sections' => [
                [
                    'key' => 'aging',
                    'title' => 'AR/AP per Status',
                    'columns' => ['Kategori', 'Status', 'Jumlah', 'Nilai'],
                    'rows' => $rows->groupBy(fn ($r) => ($r->kategori_keuangan ?: 'none').'|'.($r->status_pelunasan ?: 'lunas'))->map(function ($group, $key) {
                        [$kategori, $status] = explode('|', $key);
                        return [
                            'Kategori' => Str::upper($kategori),
                            'Status' => Str::upper($status),
                            'Jumlah' => $group->count(),
                            'Nilai' => (float) $group->sum('total_harga'),
                        ];
                    })->values()->all(),
                ],
                [
                    'key' => 'tempo',
                    'title' => 'Daftar Belum Lunas',
                    'columns' => ['Kode', 'Kategori', 'Jatuh Tempo', 'Nilai'],
                    'rows' => $rows->where('status_pelunasan', 'belum_lunas')->map(function ($row) {
                        return [
                            'Kode' => $row->kode_transaksi,
                            'Kategori' => Str::upper((string) $row->kategori_keuangan),
                            'Jatuh Tempo' => optional($row->jatuh_tempo)->toDateString() ?: '-',
                            'Nilai' => (float) $row->total_harga,
                        ];
                    })->values()->all(),
                ],
            ],
        ];
    }

    private function buildCashflowSuite($base, string $startDate, string $endDate): array
    {
        $rows = (clone $base)->get();

        $cashInFromMasuk = (float) $rows->where('jenis_transaksi', Transaksi::JENIS_MASUK)->sum('total_harga');
        $cashInFromDirectSales = (float) $rows
            ->where('jenis_transaksi', Transaksi::JENIS_PENJUALAN)
            ->filter(fn ($row) => $row->hutang === null)
            ->sum('total_harga');
        $hutangPayments = HutangPayment::query()
            ->whereDate('paid_at', '>=', $startDate)
            ->whereDate('paid_at', '<=', $endDate)
            ->get();
        $cashInFromHutangPayments = (float) $hutangPayments->sum('amount');
        $realizedRows = $rows->filter(function ($row) {
            return ! ($row->jenis_transaksi === Transaksi::JENIS_PENJUALAN && $row->hutang !== null);
        });
        $methodRows = $realizedRows
            ->groupBy(fn ($r) => $this->paymentMethodLabel($r->metode_pembayaran, $r->bank_nama))
            ->map(function ($group, $key) {
                return [
                    'Metode' => $key,
                    'Jumlah' => $group->count(),
                    'Nilai' => (float) $group->sum('total_harga'),
                ];
            });
        foreach ($hutangPayments->groupBy(fn ($payment) => $this->paymentMethodLabel($payment->metode_pembayaran, null)) as $method => $group) {
            $existing = $methodRows->get($method);
            $methodRows->put($method, [
                'Metode' => $method,
                'Jumlah' => ($existing['Jumlah'] ?? 0) + $group->count(),
                'Nilai' => (float) (($existing['Nilai'] ?? 0) + $group->sum('amount')),
            ]);
        }

        $cashIn = $cashInFromMasuk + $cashInFromDirectSales + $cashInFromHutangPayments;
        $cashOut = (float) $rows->where('jenis_transaksi', Transaksi::JENIS_KELUAR)->sum('total_harga');
        $ppnCollected = (float) $rows
            ->where('jenis_transaksi', Transaksi::JENIS_PENJUALAN)
            ->where('is_taxed', true)
            ->sum(function ($row) {
                $ppnPercent = 11.0;
                if (preg_match('/PPN:\s*([0-9]+(?:\.[0-9]+)?)%/i', (string) ($row->keterangan ?? ''), $matches) === 1) {
                    $ppnPercent = (float) ($matches[1] ?? 11.0);
                }

                return ((float) $row->total_harga) * ($ppnPercent / 100);
            });

        return [
            'title' => 'Cashflow Suite',
            'description' => 'Arus kas masuk dan keluar berdasarkan transaksi serta metode pembayaran.',
            'summaryCards' => [
                ['label' => 'Cash In', 'value' => $cashIn],
                ['label' => 'Cash Out', 'value' => $cashOut],
                ['label' => 'Net Cashflow', 'value' => $cashIn - $cashOut],
                ['label' => 'PPN Terkumpul', 'value' => $ppnCollected],
            ],
            'sections' => [
                [
                    'key' => 'arah_kas',
                    'title' => 'Ringkasan Cashflow',
                    'columns' => ['Arah', 'Nilai'],
                    'rows' => [
                        ['Arah' => 'Masuk (Total Realisasi)', 'Nilai' => $cashIn],
                        ['Arah' => 'Masuk dari Penjualan Tunai/Non-Hutang', 'Nilai' => $cashInFromDirectSales],
                        ['Arah' => 'Masuk dari Pelunasan Hutang', 'Nilai' => $cashInFromHutangPayments],
                        ['Arah' => 'Keluar', 'Nilai' => $cashOut],
                        ['Arah' => 'Net', 'Nilai' => $cashIn - $cashOut],
                        ['Arah' => 'PPN Terkumpul', 'Nilai' => $ppnCollected],
                    ],
                ],
                [
                    'key' => 'metode',
                    'title' => 'Cashflow per Metode',
                    'columns' => ['Metode', 'Jumlah', 'Nilai'],
                    'rows' => $methodRows->values()->all(),
                ],
                [
                    'key' => 'transfer_bank',
                    'title' => 'Cashflow Transfer per Bank',
                    'columns' => ['Bank', 'Jumlah', 'Nilai'],
                    'rows' => $rows
                        ->where('metode_pembayaran', 'transfer')
                        ->groupBy(fn ($r) => $this->bankLabel($r->bank_nama, $r->bank_code))
                        ->map(function ($group, $bank) {
                            return [
                                'Bank' => $bank,
                                'Jumlah' => $group->count(),
                                'Nilai' => (float) $group->sum('total_harga'),
                            ];
                        })
                        ->values()
                        ->all(),
                ],
            ],
        ];
    }

    private function buildObatSuite($base, string $startDate, string $endDate): array
    {
        $rows = (clone $base)->get();
        $salesRows = $rows->where('jenis_transaksi', Transaksi::JENIS_PENJUALAN);

        $activeIds = Obat::query()->pluck('id');
        $soldIds = $salesRows->pluck('obat_id')->filter()->unique();
        $notSold = Obat::query()->whereIn('id', $activeIds->diff($soldIds))->limit(20)->get(['nama_obat']);

        return [
            'title' => 'Obat Intelligence Suite',
            'description' => 'Gabungan laporan obat laris, tidak laku, expired, stok, dan mutasi masuk/keluar.',
            'summaryCards' => [
                ['label' => 'Obat Terjual', 'value' => $soldIds->count()],
                ['label' => 'Obat Tidak Laku', 'value' => $notSold->count()],
                ['label' => 'Batch Expired', 'value' => (int) BatchObat::query()->whereDate('tanggal_expired', '<', now())->where('stok_tersedia', '>', 0)->count()],
            ],
            'sections' => [
                [
                    'key' => 'terlaris',
                    'title' => 'Obat Terlaris',
                    'columns' => ['Obat', 'Qty Keluar', 'Nilai'],
                    'rows' => $salesRows->groupBy(fn ($r) => $r->obat?->nama_obat ?: 'Tanpa Obat')->map(function ($group, $key) {
                        return [
                            'Obat' => $key,
                            'Qty Keluar' => (int) $group->sum('jumlah'),
                            'Nilai' => (float) $group->sum('total_harga'),
                        ];
                    })->sortByDesc('Qty Keluar')->values()->take(20)->all(),
                ],
                [
                    'key' => 'tidak_laku',
                    'title' => 'Obat Tidak Laku',
                    'columns' => ['Obat'],
                    'rows' => $notSold->map(fn ($row) => ['Obat' => $row->nama_obat])->values()->all(),
                ],
                [
                    'key' => 'mutasi',
                    'title' => 'Mutasi Obat Keluar/Masuk',
                    'columns' => ['Obat', 'Qty Masuk', 'Qty Keluar'],
                    'rows' => $rows->groupBy(fn ($r) => $r->obat?->nama_obat ?: 'Tanpa Obat')->map(function ($group, $key) {
                        return [
                            'Obat' => $key,
                            'Qty Masuk' => (int) $group->where('jenis_transaksi', Transaksi::JENIS_MASUK)->sum('jumlah'),
                            'Qty Keluar' => (int) $group->whereIn('jenis_transaksi', [Transaksi::JENIS_KELUAR, Transaksi::JENIS_PENJUALAN])->sum('jumlah'),
                        ];
                    })->values()->all(),
                ],
                [
                    'key' => 'stok',
                    'title' => 'Stok Obat',
                    'columns' => ['Obat', 'Stok Total', 'Stok Minimum', 'Status'],
                    'rows' => Obat::query()->limit(100)->get(['nama_obat', 'stok_total', 'stok_minimum'])->map(function ($row) {
                        return [
                            'Obat' => $row->nama_obat,
                            'Stok Total' => (int) $row->stok_total,
                            'Stok Minimum' => (int) $row->stok_minimum,
                            'Status' => $row->stok_total <= 0 ? 'Habis' : ($row->stok_total <= $row->stok_minimum ? 'Minimum' : 'Aman'),
                        ];
                    })->values()->all(),
                ],
            ],
        ];
    }

    private function buildKeuanganSuite($base, string $startDate, string $endDate, array $options = []): array
    {
        $rows = (clone $base)->get();
        $penjualanRows = $rows->where('jenis_transaksi', Transaksi::JENIS_PENJUALAN);
        $includeTaxExpense = (bool) ($options['include_pajak'] ?? true);
        $includeInterestExpense = (bool) ($options['include_bunga'] ?? true);

        $revenue = (float) $penjualanRows->sum('total_harga');
        $hpp = (float) $penjualanRows->sum(function ($row) {
            $costPerUnit = (float) ($row->batch?->harga_beli ?? $row->obat?->harga_beli ?? 0);
            return $costPerUnit * (int) $row->jumlah;
        });

        $expenseRows = BiayaOperasional::query()
            ->whereDate('tanggal_biaya', '>=', $startDate)
            ->whereDate('tanggal_biaya', '<=', $endDate)
            ->get();

        $taxExpense = (float) $expenseRows->where('kategori', 'pajak')->sum('nominal');
        $interestExpense = (float) $expenseRows->where('kategori', 'bunga')->sum('nominal');
        $rentExpense = (float) $expenseRows->where('kategori', 'sewa')->sum('nominal');
        $otherOperatingExpense = (float) $expenseRows->where('kategori', 'lainnya')->sum('nominal');

        $taxExpenseApplied = $includeTaxExpense ? $taxExpense : 0.0;
        $interestExpenseApplied = $includeInterestExpense ? $interestExpense : 0.0;
        $grossProfit = $revenue - $hpp;
        $operatingExpense = $rentExpense + $otherOperatingExpense;
        $operatingProfit = $grossProfit - $operatingExpense;
        $netProfit = $operatingProfit - $taxExpenseApplied - $interestExpenseApplied;

        $modalBarang = (float) BatchObat::query()
            ->where('stok_tersedia', '>', 0)
            ->select(DB::raw('SUM(stok_tersedia * harga_beli) as total'))
            ->value('total');

        return [
            'title' => 'Keuangan Suite',
            'description' => 'Ringkasan laba kotor, laba operasional, laba bersih, dan modal barang aktif.',
            'summaryCards' => [
                ['label' => 'Revenue', 'value' => $revenue],
                ['label' => 'Laba Kotor', 'value' => $grossProfit],
                ['label' => 'Laba Operasional', 'value' => $operatingProfit],
                ['label' => 'Laba Bersih', 'value' => $netProfit],
                ['label' => 'Modal Barang', 'value' => $modalBarang],
            ],
            'expenseComposition' => [
                ['name' => 'Pajak', 'value' => $taxExpense],
                ['name' => 'Bunga', 'value' => $interestExpense],
                ['name' => 'Sewa', 'value' => $rentExpense],
                ['name' => 'Lainnya', 'value' => $otherOperatingExpense],
            ],
            'sections' => [
                [
                    'key' => 'lr',
                    'title' => 'Laba Rugi Ringkas',
                    'columns' => ['Komponen', 'Nilai'],
                    'rows' => [
                        ['Komponen' => 'Revenue Penjualan', 'Nilai' => $revenue],
                        ['Komponen' => 'HPP Penjualan', 'Nilai' => $hpp],
                        ['Komponen' => 'Laba Kotor', 'Nilai' => $grossProfit],
                        ['Komponen' => 'Biaya Operasional (Sewa + Lainnya)', 'Nilai' => $operatingExpense],
                        ['Komponen' => 'Laba Operasional', 'Nilai' => $operatingProfit],
                        ['Komponen' => $includeTaxExpense ? 'Pajak' : 'Pajak (dikecualikan)', 'Nilai' => $taxExpenseApplied],
                        ['Komponen' => $includeInterestExpense ? 'Bunga' : 'Bunga (dikecualikan)', 'Nilai' => $interestExpenseApplied],
                        ['Komponen' => 'Laba Bersih', 'Nilai' => $netProfit],
                    ],
                ],
                [
                    'key' => 'beban_operasional',
                    'title' => 'Beban Operasional (Input Kasir)',
                    'columns' => ['Kategori', 'Nilai'],
                    'rows' => [
                        ['Kategori' => 'Pajak', 'Nilai' => $taxExpense],
                        ['Kategori' => 'Bunga', 'Nilai' => $interestExpense],
                        ['Kategori' => 'Sewa', 'Nilai' => $rentExpense],
                        ['Kategori' => 'Lainnya', 'Nilai' => $otherOperatingExpense],
                    ],
                ],
                [
                    'key' => 'detail_beban_operasional',
                    'title' => 'Detail Biaya Operasional',
                    'columns' => ['Tanggal', 'Kategori', 'Kasir', 'Metode', 'Bank', 'Nominal', 'Keterangan'],
                    'rows' => $expenseRows
                        ->sortByDesc('tanggal_biaya')
                        ->values()
                        ->map(function ($row) {
                            return [
                                'Tanggal' => optional($row->tanggal_biaya)->toDateString() ?: '-',
                                'Kategori' => Str::upper((string) $row->kategori),
                                'Kasir' => $row->kasir_nama ?: '-',
                                'Metode' => $this->paymentMethodLabel($row->metode_pembayaran, null),
                                'Bank' => $this->bankLabel($row->bank_nama, $row->bank_code),
                                'Nominal' => (float) $row->nominal,
                                'Keterangan' => $row->keterangan ?: '-',
                            ];
                        })
                        ->all(),
                ],
                [
                    'key' => 'modal',
                    'title' => 'Modal Barang',
                    'columns' => ['Komponen', 'Nilai'],
                    'rows' => [
                        ['Komponen' => 'Nilai Modal Barang Aktif', 'Nilai' => $modalBarang],
                    ],
                ],
            ],
        ];
    }

    private function paymentMethodLabel(?string $method, ?string $bankName = null): string
    {
        $methodText = trim((string) $method);
        if ($methodText === '') {
            return 'TANPA_METODE';
        }

        $base = Str::upper($methodText);
        if (strtolower($methodText) !== 'transfer') {
            return $base;
        }

        $bankText = trim((string) $bankName);
        if ($bankText === '') {
            return $base;
        }

        return $base.' - '.Str::upper($bankText);
    }

    private function bankLabel(?string $bankName, ?string $bankCode = null): string
    {
        $name = trim((string) $bankName);
        $code = trim((string) $bankCode);

        if ($name === '' && $code === '') {
            return '-';
        }

        if ($name === '') {
            return Str::upper($code);
        }

        if ($code === '') {
            return Str::upper($name);
        }

        return Str::upper($name).' ('.$code.')';
    }

    /**
     * Display stock report
     */
    public function stock(Request $request): Response
    {
        $query = Obat::with(['kategori', 'satuan', 'batches' => function ($q) {
            $q->where('stok_tersedia', '>', 0)
                ->whereDate('tanggal_expired', '>', now());
        }]);

        // Filter by kategori
        if ($request->filled('kategori_id')) {
            $query->where('kategori_id', $request->kategori_id);
        }

        // Filter by stock status
        if ($request->filled('status')) {
            switch ($request->status) {
                case 'habis':
                    $query->where('stok_total', '=', 0);
                    break;
                case 'minimum':
                    $query->where('stok_total', '>', 0)
                        ->whereRaw('stok_total <= stok_minimum');
                    break;
                case 'tersedia':
                    $query->whereRaw('stok_total > stok_minimum');
                    break;
            }
        }

        // Search by name or code
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('nama_obat', 'like', "%{$search}%")
                    ->orWhere('kode_obat', 'like', "%{$search}%");
            });
        }

        $obat = $query->orderBy('nama_obat')->paginate(20)->withQueryString();

        // Calculate statistics
        $stats = [
            'total_obat' => Obat::count(),
            'total_stok' => Obat::sum('stok_total'),
            'stok_minimum' => Obat::whereRaw('stok_total > 0 AND stok_total <= stok_minimum')->count(),
            'stok_habis' => Obat::where('stok_total', 0)->count(),
            'total_value' => BatchObat::where('stok_tersedia', '>', 0)
                ->select(DB::raw('SUM(stok_tersedia * harga_beli) as total'))
                ->value('total') ?? 0,
        ];

        $kategori = KategoriObat::orderBy('nama_kategori')->get(['id', 'nama_kategori']);

        return Inertia::render('laporan/stok/index', [
            'obat' => $obat,
            'stats' => $stats,
            'kategori' => $kategori,
            'filters' => $request->only(['search', 'kategori_id', 'status']),
        ]);
    }

    public function stockExport(Request $request): StreamedResponse
    {
        $query = Obat::with(['kategori', 'satuan']);

        if ($request->filled('kategori_id')) {
            $query->where('kategori_id', $request->kategori_id);
        }

        if ($request->filled('status')) {
            switch ($request->status) {
                case 'habis':
                    $query->where('stok_total', '=', 0);
                    break;
                case 'minimum':
                    $query->where('stok_total', '>', 0)
                        ->whereRaw('stok_total <= stok_minimum');
                    break;
                case 'tersedia':
                    $query->whereRaw('stok_total > stok_minimum');
                    break;
            }
        }

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('nama_obat', 'like', "%{$search}%")
                    ->orWhere('kode_obat', 'like', "%{$search}%");
            });
        }

        $rows = $query->orderBy('nama_obat')->get();

        $sections = [[
            'title' => 'Data Stok Obat',
            'columns' => ['Kode Obat', 'Nama Obat', 'Kategori', 'Satuan', 'Stok Total', 'Stok Minimum', 'Status'],
            'rows' => $rows->map(function ($obat) {
                return [
                    'Kode Obat' => $obat->kode_obat,
                    'Nama Obat' => $obat->nama_obat,
                    'Kategori' => $obat->kategori?->nama_kategori ?? '-',
                    'Satuan' => $obat->satuan?->nama_satuan ?? '-',
                    'Stok Total' => (int) $obat->stok_total,
                    'Stok Minimum' => (int) $obat->stok_minimum,
                    'Status' => $obat->stok_total === 0 ? 'Habis' : ($obat->stok_total <= $obat->stok_minimum ? 'Minimum' : 'Tersedia'),
                ];
            })->all(),
        ]];

        $spreadsheet = $this->buildSpreadsheetFromSections('Laporan Stok', $sections, [
            ['Total Obat', Obat::count()],
            ['Total Stok', (int) Obat::sum('stok_total')],
            ['Stok Minimum', Obat::whereRaw('stok_total > 0 AND stok_total <= stok_minimum')->count()],
            ['Stok Habis', Obat::where('stok_total', 0)->count()],
            ['Nilai Stok', (float) (BatchObat::where('stok_tersedia', '>', 0)->select(DB::raw('SUM(stok_tersedia * harga_beli) as total'))->value('total') ?? 0)],
        ]);

        return $this->downloadSpreadsheet($spreadsheet, 'laporan-stok-'.now()->format('Ymd-His').'.xlsx');
    }

    public function transactions(Request $request): Response
    {
        $query = Transaksi::with(['obat', 'batch', 'user']);

        // Filter by transaction type
        if ($request->filled('jenis')) {
            $query->where('jenis_transaksi', $request->jenis);
        }

        // Filter by date range
        if ($request->filled('tanggal_dari') && $request->filled('tanggal_sampai')) {
            $query->whereBetween('tanggal_transaksi', [
                $request->tanggal_dari,
                $request->tanggal_sampai,
            ]);
        } elseif ($request->filled('tanggal_dari')) {
            $query->whereDate('tanggal_transaksi', '>=', $request->tanggal_dari);
        } elseif ($request->filled('tanggal_sampai')) {
            $query->whereDate('tanggal_transaksi', '<=', $request->tanggal_sampai);
        }

        // Search by transaction code or medicine name
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('kode_transaksi', 'like', "%{$search}%")
                    ->orWhereHas('obat', function ($q) use ($search) {
                        $q->where('nama_obat', 'like', "%{$search}%")
                            ->orWhere('kode_obat', 'like', "%{$search}%");
                    });
            });
        }

        $transaksi = $query->orderBy('tanggal_transaksi', 'desc')
            ->orderBy('waktu_transaksi', 'desc')
            ->paginate(20)
            ->withQueryString();

        // Calculate statistics
        $statsQuery = Transaksi::query();

        // Apply same filters to statistics
        if ($request->filled('jenis')) {
            $statsQuery->where('jenis_transaksi', $request->jenis);
        }
        if ($request->filled('tanggal_dari') && $request->filled('tanggal_sampai')) {
            $statsQuery->whereBetween('tanggal_transaksi', [
                $request->tanggal_dari,
                $request->tanggal_sampai,
            ]);
        }
        if ($request->filled('search')) {
            $search = $request->search;
            $statsQuery->where(function ($q) use ($search) {
                $q->where('kode_transaksi', 'like', "%{$search}%")
                    ->orWhereHas('obat', function ($q) use ($search) {
                        $q->where('nama_obat', 'like', "%{$search}%")
                            ->orWhere('kode_obat', 'like', "%{$search}%");
                    });
            });
        }

        $stats = [
            'total_transaksi' => $statsQuery->count(),
            'total_masuk' => (clone $statsQuery)->where('jenis_transaksi', Transaksi::JENIS_MASUK)->count(),
            'total_keluar' => (clone $statsQuery)->where('jenis_transaksi', Transaksi::JENIS_KELUAR)->count(),
            'total_value' => $statsQuery->sum('total_harga') ?? 0,
        ];

        return Inertia::render('laporan/transaksi/index', [
            'transaksi' => $transaksi,
            'stats' => $stats,
            'filters' => $request->only(['search', 'jenis', 'tanggal_dari', 'tanggal_sampai']),
        ]);
    }

    public function transactionsExport(Request $request): StreamedResponse
    {
        $query = Transaksi::with(['obat', 'batch', 'user']);

        if ($request->filled('jenis')) {
            $query->where('jenis_transaksi', $request->jenis);
        }

        if ($request->filled('tanggal_dari') && $request->filled('tanggal_sampai')) {
            $query->whereBetween('tanggal_transaksi', [
                $request->tanggal_dari,
                $request->tanggal_sampai,
            ]);
        } elseif ($request->filled('tanggal_dari')) {
            $query->whereDate('tanggal_transaksi', '>=', $request->tanggal_dari);
        } elseif ($request->filled('tanggal_sampai')) {
            $query->whereDate('tanggal_transaksi', '<=', $request->tanggal_sampai);
        }

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('kode_transaksi', 'like', "%{$search}%")
                    ->orWhereHas('obat', function ($q) use ($search) {
                        $q->where('nama_obat', 'like', "%{$search}%")
                            ->orWhere('kode_obat', 'like', "%{$search}%");
                    });
            });
        }

        $rows = $query->orderBy('tanggal_transaksi', 'desc')
            ->orderBy('waktu_transaksi', 'desc')
            ->get();

        $sections = [[
            'title' => 'Data Transaksi',
            'columns' => ['Kode', 'Tanggal', 'Waktu', 'Jenis', 'Obat', 'Batch', 'Jumlah', 'Harga Satuan', 'Total', 'User', 'Keterangan'],
            'rows' => $rows->map(function ($trx) {
                return [
                    'Kode' => $trx->kode_transaksi,
                    'Tanggal' => optional($trx->tanggal_transaksi)->toDateString(),
                    'Waktu' => (string) $trx->waktu_transaksi,
                    'Jenis' => Str::upper((string) $trx->jenis_transaksi),
                    'Obat' => $trx->obat?->nama_obat ?? '-',
                    'Batch' => $trx->batch?->nomor_batch ?? '-',
                    'Jumlah' => (int) $trx->jumlah,
                    'Harga Satuan' => (float) $trx->harga_satuan,
                    'Total' => (float) $trx->total_harga,
                    'User' => $trx->user?->name ?? '-',
                    'Keterangan' => $trx->keterangan ?? '-',
                ];
            })->all(),
        ]];

        $spreadsheet = $this->buildSpreadsheetFromSections('Laporan Transaksi', $sections, [
            ['Total Transaksi', $rows->count()],
            ['Transaksi Masuk', $rows->where('jenis_transaksi', Transaksi::JENIS_MASUK)->count()],
            ['Transaksi Keluar', $rows->where('jenis_transaksi', Transaksi::JENIS_KELUAR)->count()],
            ['Total Nilai', (float) $rows->sum('total_harga')],
        ]);

        return $this->downloadSpreadsheet($spreadsheet, 'laporan-transaksi-'.now()->format('Ymd-His').'.xlsx');
    }

    public function expiry(Request $request): Response
    {
        $monthsAhead = $request->get('months_ahead', 3);
        $maxDate = now()->addMonths($monthsAhead);

        $query = BatchObat::with(['obat.kategori'])
            ->where('stok_tersedia', '>', 0)
            ->whereDate('tanggal_expired', '<=', $maxDate);

        // Filter by kategori
        if ($request->filled('kategori_id')) {
            $query->whereHas('obat', function ($q) use ($request) {
                $q->where('kategori_id', $request->kategori_id);
            });
        }

        // Filter by status (expired or expiring soon)
        if ($request->filled('status')) {
            if ($request->status === 'expired') {
                $query->whereDate('tanggal_expired', '<', now());
            } elseif ($request->status === 'expiring_soon') {
                $query->whereDate('tanggal_expired', '>=', now());
            }
        }

        // Search by batch number or medicine name
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('nomor_batch', 'like', "%{$search}%")
                    ->orWhereHas('obat', function ($q) use ($search) {
                        $q->where('nama_obat', 'like', "%{$search}%")
                            ->orWhere('kode_obat', 'like', "%{$search}%");
                    });
            });
        }

        $batches = $query->orderBy('tanggal_expired', 'asc')
            ->paginate(20)
            ->withQueryString();

        // Add days_until_expiry to each batch
        $batches->getCollection()->transform(function ($batch) {
            $batch->days_until_expiry = now()->diffInDays($batch->tanggal_expired, false);

            return $batch;
        });

        // Calculate statistics
        $statsQuery = BatchObat::where('stok_tersedia', '>', 0);

        // Apply same filters to statistics
        if ($request->filled('kategori_id')) {
            $statsQuery->whereHas('obat', function ($q) use ($request) {
                $q->where('kategori_id', $request->kategori_id);
            });
        }
        if ($request->filled('search')) {
            $search = $request->search;
            $statsQuery->where(function ($q) use ($search) {
                $q->where('nomor_batch', 'like', "%{$search}%")
                    ->orWhereHas('obat', function ($q) use ($search) {
                        $q->where('nama_obat', 'like', "%{$search}%")
                            ->orWhere('kode_obat', 'like', "%{$search}%");
                    });
            });
        }

        $now = now();
        $thisMonthEnd = now()->endOfMonth();
        $nextMonthEnd = now()->addMonth()->endOfMonth();

        $stats = [
            'expired' => (clone $statsQuery)->whereDate('tanggal_expired', '<', $now)->count(),
            'expiring_this_month' => (clone $statsQuery)
                ->whereDate('tanggal_expired', '>=', $now)
                ->whereDate('tanggal_expired', '<=', $thisMonthEnd)
                ->count(),
            'expiring_next_month' => (clone $statsQuery)
                ->whereDate('tanggal_expired', '>', $thisMonthEnd)
                ->whereDate('tanggal_expired', '<=', $nextMonthEnd)
                ->count(),
            'total_batches' => (clone $statsQuery)->whereDate('tanggal_expired', '<=', $maxDate)->count(),
            'total_value_at_risk' => (clone $statsQuery)
                ->whereDate('tanggal_expired', '<=', $maxDate)
                ->get()
                ->sum(function ($batch) {
                    return $batch->stok_tersedia * $batch->harga_beli;
                }),
        ];

        $kategori = KategoriObat::orderBy('nama_kategori')->get(['id', 'nama_kategori']);

        return Inertia::render('laporan/kadaluarsa/index', [
            'batches' => $batches,
            'stats' => $stats,
            'kategori' => $kategori,
            'filters' => $request->only(['search', 'kategori_id', 'months_ahead', 'status']),
        ]);
    }

    public function expiryExport(Request $request): StreamedResponse
    {
        $monthsAhead = $request->get('months_ahead', 3);
        $maxDate = now()->addMonths($monthsAhead);

        $query = BatchObat::with(['obat.kategori'])
            ->where('stok_tersedia', '>', 0)
            ->whereDate('tanggal_expired', '<=', $maxDate);

        if ($request->filled('kategori_id')) {
            $query->whereHas('obat', function ($q) use ($request) {
                $q->where('kategori_id', $request->kategori_id);
            });
        }

        if ($request->filled('status')) {
            if ($request->status === 'expired') {
                $query->whereDate('tanggal_expired', '<', now());
            } elseif ($request->status === 'expiring_soon') {
                $query->whereDate('tanggal_expired', '>=', now());
            }
        }

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('nomor_batch', 'like', "%{$search}%")
                    ->orWhereHas('obat', function ($q) use ($search) {
                        $q->where('nama_obat', 'like', "%{$search}%")
                            ->orWhere('kode_obat', 'like', "%{$search}%");
                    });
            });
        }

        $rows = $query->orderBy('tanggal_expired', 'asc')->get()->map(function ($batch) {
            $days = now()->diffInDays($batch->tanggal_expired, false);

            return [
                'Nomor Batch' => $batch->nomor_batch,
                'Kode Obat' => $batch->obat?->kode_obat ?? '-',
                'Nama Obat' => $batch->obat?->nama_obat ?? '-',
                'Kategori' => $batch->obat?->kategori?->nama_kategori ?? '-',
                'Tanggal Expired' => optional($batch->tanggal_expired)->toDateString(),
                'Hari ke Expired' => $days,
                'Stok Tersedia' => (int) $batch->stok_tersedia,
                'Harga Beli' => (float) $batch->harga_beli,
                'Nilai Risiko' => (float) ($batch->stok_tersedia * $batch->harga_beli),
            ];
        });

        $now = now();
        $thisMonthEnd = now()->endOfMonth();
        $nextMonthEnd = now()->addMonth()->endOfMonth();

        $spreadsheet = $this->buildSpreadsheetFromSections('Laporan Kadaluarsa', [[
            'title' => 'Data Batch Kadaluarsa',
            'columns' => ['Nomor Batch', 'Kode Obat', 'Nama Obat', 'Kategori', 'Tanggal Expired', 'Hari ke Expired', 'Stok Tersedia', 'Harga Beli', 'Nilai Risiko'],
            'rows' => $rows->all(),
        ]], [
            ['Sudah Kadaluarsa', $rows->where('Hari ke Expired', '<', 0)->count()],
            ['Kadaluarsa Bulan Ini', $rows->filter(fn ($r) => ($r['Hari ke Expired'] ?? 0) >= 0 && $r['Tanggal Expired'] <= $thisMonthEnd->toDateString())->count()],
            ['Kadaluarsa Bulan Depan', $rows->filter(fn ($r) => $r['Tanggal Expired'] > $thisMonthEnd->toDateString() && $r['Tanggal Expired'] <= $nextMonthEnd->toDateString())->count()],
            ['Total Batch', $rows->count()],
            ['Total Nilai Berisiko', (float) $rows->sum('Nilai Risiko')],
            ['Generated At', $now->toDateTimeString()],
        ]);

        return $this->downloadSpreadsheet($spreadsheet, 'laporan-kadaluarsa-'.now()->format('Ymd-His').'.xlsx');
    }

    public function operational(): Response
    {
        $margin = $this->insights->buildMarginSummary();

        return Inertia::render('laporan/operasional/index', [
            'reorderSuggestions' => ReorderSuggestion::query()->with('obat:id,nama_obat,kode_obat')->latest()->limit(20)->get(),
            'demandForecasts' => DemandForecast::query()->with('obat:id,nama_obat,kode_obat')->latest()->limit(20)->get(),
            'pendingApprovals' => ApprovalRequest::query()->with(['obat:id,nama_obat,kode_obat', 'requestedBy:id,name'])->where('status', 'pending')->latest()->limit(20)->get(),
            'margin' => $margin,
        ]);
    }
}
