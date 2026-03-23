import { FirstTimeTutorial } from '@/components/onboarding/first-time-tutorial';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { AlertCircle, Package, TrendingDown } from 'lucide-react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface DashboardStats {
    total_obat: number;
    total_stok: number;
    low_stock_count: number;
    expired_soon_count: number;
    today_transactions: number;
    today_incoming: number;
    today_outgoing: number;
    yesterday_transactions: number;
    yesterday_incoming: number;
    yesterday_outgoing: number;
}

interface LowStockItem {
    id: number;
    nama_obat: string;
    stok_total: number;
    stok_minimum: number;
    kategori: { nama_kategori: string };
    satuan: { nama_satuan: string };
}

interface ExpiringItem {
    id: number;
    nomor_batch: string;
    tanggal_expired: string;
    stok_batch: number;
    obat: {
        nama_obat: string;
        kategori: { nama_kategori: string };
    };
}

interface DashboardProps {
    stats: DashboardStats;
    lowStock: LowStockItem[];
    expiringSoon: ExpiringItem[];
    transactionTrend7d: Array<{
        date: string;
        label: string;
        total: number;
        masuk: number;
        keluar: number;
    }>;
}

export default function Dashboard({
    stats,
    lowStock,
    expiringSoon,
    transactionTrend7d,
}: DashboardProps) {
    const lowStockChartData = lowStock.slice(0, 5).map((item) => ({
        nama: item.nama_obat.length > 20 ? `${item.nama_obat.slice(0, 20)}...` : item.nama_obat,
        defisit: Math.max(item.stok_minimum - item.stok_total, 0),
        stok: item.stok_total,
        minimum: item.stok_minimum,
    }));

    const activityPieData = [
        { name: 'Barang Masuk', value: Number(stats.today_incoming || 0), color: '#16a34a' },
        { name: 'Barang Keluar', value: Number(stats.today_outgoing || 0), color: '#2563eb' },
    ].filter((item) => item.value > 0);

    const expiryBucketMap = expiringSoon.reduce<Record<string, number>>((acc, item) => {
        const daysLeft = Math.ceil((new Date(item.tanggal_expired).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
        const bucket =
            daysLeft <= 7
                ? '0-7 hari'
                : daysLeft <= 14
                  ? '8-14 hari'
                  : daysLeft <= 21
                    ? '15-21 hari'
                    : '22-30 hari';
        acc[bucket] = (acc[bucket] || 0) + 1;
        return acc;
    }, {});

    const expiryChartData = ['0-7 hari', '8-14 hari', '15-21 hari', '22-30 hari'].map((label) => ({
        label,
        jumlah: expiryBucketMap[label] || 0,
    }));

    const transactionDelta = stats.today_transactions - (stats.yesterday_transactions || 0);
    const incomingDelta = stats.today_incoming - (stats.yesterday_incoming || 0);
    const outgoingDelta = stats.today_outgoing - (stats.yesterday_outgoing || 0);

    const fmtDelta = (value: number) => {
        if (value === 0) return 'Sama dengan kemarin';
        return `${value > 0 ? '+' : ''}${value} vs kemarin`;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <FirstTimeTutorial />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto p-4">
                <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Total Obat</p>
                                <p className="text-3xl font-bold">{stats.total_obat}</p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    Total stok: {stats.total_stok.toLocaleString()}
                                </p>
                            </div>
                            <Package className="size-8 text-muted-foreground" />
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Stok Kritis</p>
                                <p className="text-3xl font-bold text-orange-600">{stats.low_stock_count}</p>
                                <p className="mt-1 text-xs text-muted-foreground">Perlu restock sekarang</p>
                            </div>
                            <TrendingDown className="size-8 text-orange-600" />
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Kadaluarsa Segera</p>
                                <p className="text-3xl font-bold text-red-600">{stats.expired_soon_count}</p>
                                <p className="mt-1 text-xs text-muted-foreground">Dalam 30 hari</p>
                            </div>
                            <AlertCircle className="size-8 text-red-600" />
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                        <p className="text-sm font-medium text-muted-foreground">Total Transaksi Hari Ini</p>
                        <p className="text-3xl font-bold">{stats.today_transactions}</p>
                        <p className={`mt-1 text-xs ${transactionDelta >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>{fmtDelta(transactionDelta)}</p>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                        <p className="text-sm text-muted-foreground">Barang Masuk Hari Ini</p>
                        <p className="text-2xl font-bold text-green-600">{stats.today_incoming}</p>
                        <p className={`mt-1 text-xs ${incomingDelta >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>{fmtDelta(incomingDelta)}</p>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                        <p className="text-sm text-muted-foreground">Barang Keluar Hari Ini</p>
                        <p className="text-2xl font-bold text-blue-600">{stats.today_outgoing}</p>
                        <p className={`mt-1 text-xs ${outgoingDelta >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>{fmtDelta(outgoingDelta)}</p>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                        <p className="text-sm text-muted-foreground">Aksi Cepat</p>
                        <p className="mt-2 text-sm font-medium">Prioritaskan 5 obat kritis teratas di grafik stok.</p>
                        <p className="mt-1 text-xs text-muted-foreground">Fokus urutan dari defisit terbesar.</p>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border md:col-span-2">
                        <h3 className="mb-2 text-lg font-semibold">Top 5 Stok Kritis</h3>
                        <p className="mb-4 text-xs text-muted-foreground">Semakin panjang bar, semakin mendesak kebutuhan restock.</p>
                        {lowStockChartData.length > 0 ? (
                            <div className="h-72 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={lowStockChartData} margin={{ left: 12, right: 8, top: 8, bottom: 12 }} layout="vertical">
                                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                        <XAxis type="number" allowDecimals={false} tick={{ fontSize: 11 }} />
                                        <YAxis type="category" dataKey="nama" width={140} tick={{ fontSize: 11 }} />
                                        <Tooltip formatter={(value: number) => [value, 'Defisit']} />
                                        <Bar dataKey="defisit" fill="#dc2626" name="Defisit" radius={[0, 6, 6, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">Belum ada data stok rendah untuk digrafikkan.</p>
                        )}
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                        <h3 className="mb-2 text-lg font-semibold">Aktivitas Hari Ini</h3>
                        <p className="mb-4 text-xs text-muted-foreground">Perbandingan jumlah barang masuk vs keluar.</p>
                        {activityPieData.length > 0 ? (
                            <div className="h-72 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={activityPieData}
                                            dataKey="value"
                                            nameKey="name"
                                            innerRadius={52}
                                            outerRadius={88}
                                            paddingAngle={3}
                                        >
                                            {activityPieData.map((entry) => (
                                                <Cell key={entry.name} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">Belum ada aktivitas masuk/keluar hari ini.</p>
                        )}
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                        <h3 className="mb-2 text-lg font-semibold">Kadaluarsa 30 Hari</h3>
                        <p className="mb-4 text-xs text-muted-foreground">Kelompok waktu agar prioritas penanganan lebih jelas.</p>
                        {expiringSoon.length > 0 ? (
                            <div className="h-72 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={expiryChartData} margin={{ left: 0, right: 0, top: 8, bottom: 8 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                        <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                                        <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
                                        <Tooltip />
                                        <Bar dataKey="jumlah" name="Jumlah Batch" radius={[6, 6, 0, 0]}>
                                            {expiryChartData.map((item) => (
                                                <Cell
                                                    key={item.label}
                                                    fill={
                                                        item.label === '0-7 hari'
                                                            ? '#b91c1c'
                                                            : item.label === '8-14 hari'
                                                              ? '#dc2626'
                                                              : item.label === '15-21 hari'
                                                                ? '#ea580c'
                                                                : '#f59e0b'
                                                    }
                                                />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">Tidak ada batch yang masuk window kadaluarsa 30 hari.</p>
                        )}
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                        <h3 className="mb-2 text-lg font-semibold">Tren Transaksi 7 Hari</h3>
                        <p className="mb-4 text-xs text-muted-foreground">Satu garis total transaksi agar mudah dipahami sekilas.</p>
                        <div className="h-72 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={transactionTrend7d} margin={{ left: 0, right: 8, top: 8, bottom: 8 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                    <XAxis dataKey="label" tick={{ fontSize: 11 }} />
                                    <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="total"
                                        name="Total Transaksi"
                                        stroke="#0f766e"
                                        strokeWidth={3}
                                        dot={{ r: 4 }}
                                        activeDot={{ r: 6 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                        <h3 className="mb-4 text-lg font-semibold">
                            Daftar Obat Stok Kritis
                        </h3>
                        <div className="space-y-2">
                            {lowStock.length > 0 ? (
                                lowStock.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between rounded-lg border border-sidebar-border/50 p-3"
                                    >
                                        <div>
                                            <p className="font-medium">{item.nama_obat}</p>
                                            <p className="text-xs text-muted-foreground">{item.kategori.nama_kategori}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-orange-600">
                                                {item.stok_total} {item.satuan.nama_satuan}
                                            </p>
                                            <p className="text-xs text-muted-foreground">Min: {item.stok_minimum}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-muted-foreground">Tidak ada stok rendah</p>
                            )}
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                        <h3 className="mb-4 text-lg font-semibold">Daftar Segera Kadaluarsa</h3>
                        <div className="space-y-2">
                            {expiringSoon.length > 0 ? (
                                expiringSoon.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between rounded-lg border border-sidebar-border/50 p-3"
                                    >
                                        <div>
                                            <p className="font-medium">{item.obat.nama_obat}</p>
                                            <p className="text-xs text-muted-foreground">Batch: {item.nomor_batch}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-red-600">
                                                {new Date(item.tanggal_expired).toLocaleDateString('id-ID')}
                                            </p>
                                            <p className="text-xs text-muted-foreground">Stok: {item.stok_batch}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-muted-foreground">Tidak ada yang kadaluarsa</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
