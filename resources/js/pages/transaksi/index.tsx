import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowDownCircle, ArrowRight, ArrowUpCircle, CircleDollarSign, ListChecks, Plus, ScanLine } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Transaksi', href: '/transaksi' },
];

export default function TransaksiIndex() {
    const workflowCards = [
        {
            title: 'Kasir',
            description: 'Checkout cepat untuk penjualan dan barang masuk berbasis batch.',
            href: '/kasir',
            action: 'Buka Kasir',
            icon: CircleDollarSign,
            tone: 'border-emerald-300 bg-emerald-50/40 text-emerald-800',
        },
        {
            title: 'Semua Transaksi',
            description: 'Pantau seluruh histori transaksi dengan filter lengkap.',
            href: '/transaksi',
            action: 'Lihat Histori',
            icon: ListChecks,
            tone: 'border-slate-300 bg-slate-50 text-slate-800',
        },
        {
            title: 'Barang Masuk',
            description: 'Fokus pemantauan alur penerimaan dan nilai pembelian.',
            href: '/transaksi/masuk',
            action: 'Buka Barang Masuk',
            icon: ArrowDownCircle,
            tone: 'border-cyan-300 bg-cyan-50 text-cyan-800',
        },
        {
            title: 'Barang Keluar',
            description: 'Fokus mutasi keluar dan penjualan untuk kontrol stok.',
            href: '/transaksi/keluar',
            action: 'Buka Barang Keluar',
            icon: ArrowUpCircle,
            tone: 'border-amber-300 bg-amber-50 text-amber-800',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Transaksi" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="rounded-xl border border-slate-300 bg-gradient-to-r from-slate-100 via-white to-slate-100 p-4">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">Workflow Transaksi</h1>
                    <p className="text-sm text-slate-600">
                        Pilih alur kerja transaksi sesuai fungsi: kasir, monitoring lengkap, barang masuk, atau barang keluar.
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Transaksi</h1>
                        <p className="text-sm text-muted-foreground">
                            Kelola transaksi barang masuk, keluar, dan penjualan
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href="/kasir">
                                <ScanLine className="mr-2 size-4" />
                                Kasir
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href="/transaksi/create">
                                <Plus className="mr-2 size-4" />
                                Tambah Transaksi
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {workflowCards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <div key={card.title} className={`rounded-xl border p-4 ${card.tone}`}>
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h2 className="text-lg font-semibold">{card.title}</h2>
                                        <p className="mt-1 text-sm text-current/80">{card.description}</p>
                                    </div>
                                    <Icon className="size-6" />
                                </div>

                                <Button className="mt-4" variant="secondary" asChild>
                                    <Link href={card.href}>
                                        {card.action}
                                        <ArrowRight className="ml-2 size-4" />
                                    </Link>
                                </Button>
                            </div>
                        );
                    })}
                </div>

                <div className="rounded-xl border border-sidebar-border/70 bg-card p-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Urutan Operasional Disarankan</h3>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
                        <li>Gunakan Kasir untuk transaksi real-time.</li>
                        <li>Verifikasi di Semua Transaksi dengan filter tanggal dan jenis.</li>
                        <li>Audit khusus per jenis pada Barang Masuk atau Barang Keluar.</li>
                    </ol>
                </div>
            </div>
        </AppLayout>
    );
}
