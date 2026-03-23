import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, Boxes, ChartCandlestick, ClipboardList, Package, Wallet } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface Overview {
    total_obat: number;
    total_stok: number;
    total_transaksi_30d: number;
    nilai_transaksi_30d: number;
    batch_expired: number;
    batch_expiring_30d: number;
}

interface MergedReport {
    key: string;
    title: string;
    description: string;
    status: 'ready' | 'mapped';
    primary_link: string;
    secondary_link: string;
    contains: string[];
}

interface Props {
    overview: Overview;
    mergedReports: MergedReport[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Laporan', href: '/reports' },
];

const iconByKey: Record<string, typeof ClipboardList> = {
    pembelian_suite: ClipboardList,
    penjualan_suite: ChartCandlestick,
    ar_ap_suite: Wallet,
    cashflow_suite: Wallet,
    obat_suite: Package,
    keuangan_suite: Boxes,
};

export default function ReportCenter({ overview, mergedReports }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pusat Laporan" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
                <div className="rounded-xl border border-slate-300 bg-gradient-to-r from-slate-100 via-white to-slate-100 p-4">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">Pusat Laporan Terintegrasi</h1>
                    <p className="text-sm text-slate-600">
                        Semua kebutuhan laporan digabung menjadi suite per domain agar tidak menumpuk menu dan tetap detail saat dibuka.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
                    <div className="rounded-lg border bg-card p-4">
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">Total Obat</p>
                        <p className="mt-1 text-xl font-semibold">{overview.total_obat}</p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">Total Stok</p>
                        <p className="mt-1 text-xl font-semibold">{overview.total_stok.toLocaleString('id-ID')}</p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">Transaksi 30 Hari</p>
                        <p className="mt-1 text-xl font-semibold">{overview.total_transaksi_30d}</p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">Nilai 30 Hari</p>
                        <p className="mt-1 text-lg font-semibold text-emerald-700">{formatCurrency(overview.nilai_transaksi_30d)}</p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">Batch Expired</p>
                        <p className="mt-1 text-xl font-semibold text-destructive">{overview.batch_expired}</p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">Expired {'<='} 30 Hari</p>
                        <p className="mt-1 text-xl font-semibold text-amber-700">{overview.batch_expiring_30d}</p>
                    </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                    {mergedReports.map((report) => {
                        const Icon = iconByKey[report.key] ?? ClipboardList;

                        return (
                            <section key={report.key} className="rounded-xl border border-sidebar-border/70 bg-card p-4">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h2 className="text-lg font-semibold">{report.title}</h2>
                                        <p className="mt-1 text-sm text-muted-foreground">{report.description}</p>
                                    </div>
                                    <Icon className="size-6 text-muted-foreground" />
                                </div>

                                <div className="mt-3 flex items-center gap-2">
                                    <Badge variant={report.status === 'ready' ? 'default' : 'secondary'}>
                                        {report.status === 'ready' ? 'Ready' : 'Mapped'}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">
                                        {report.contains.length} varian laporan tergabung
                                    </span>
                                </div>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {report.contains.map((item) => (
                                        <Badge key={item} variant="outline" className="text-xs">
                                            {item}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="mt-4 flex gap-2">
                                    <Button asChild>
                                        <Link href={report.primary_link}>
                                            Buka Data Utama
                                            <ArrowRight className="ml-2 size-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <Link href={report.secondary_link}>Data Pendukung</Link>
                                    </Button>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </AppLayout>
    );
}
