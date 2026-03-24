import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { 
    ArrowLeft, 
    Pencil, 
    Package, 
    User, 
    Calendar,
    Wallet,
    FileText,
    ArrowUpCircle,
    ArrowDownCircle,
    ShoppingCart,
    Clock3,
    CreditCard
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Transaksi', href: '/transaksi' },
    { title: 'Detail Transaksi', href: '#' },
];

interface Obat {
    nama_obat: string;
    kode_obat: string;
    satuan?: {
        nama_satuan: string;
    };
    kategori?: {
        nama_kategori: string;
    };
}

interface Batch {
    nomor_batch: string;
    tanggal_expired: string;
}

interface User {
    name: string;
    email: string;
}

interface HutangPayment {
    id: number;
    amount: number;
    paid_at: string;
    metode_pembayaran?: string | null;
    keterangan?: string | null;
    user?: {
        name: string;
    } | null;
}

interface Hutang {
    id: number;
    total_amount: number;
    remaining_amount: number;
    payment_status: 'unpaid' | 'partially_paid' | 'paid';
    settled_at?: string | null;
    payments: HutangPayment[];
}

interface Transaksi {
    id: number;
    kode_transaksi: string;
    jenis_transaksi: string;
    tanggal_transaksi: string;
    waktu_transaksi: string;
    jumlah: number;
    harga_satuan: number;
    total_harga: number;
    keterangan?: string;
    nomor_referensi?: string;
    obat: Obat;
    batch?: Batch;
    user: User;
    created_at: string;
    hutang?: Hutang | null;
}

interface Props {
    transaksi: Transaksi;
}

export default function TransaksiShow({ transaksi }: Props) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    const formatDateTime = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const getJenisBadge = (jenis: string) => {
        switch (jenis) {
            case 'masuk':
                return (
                    <Badge className="bg-green-600 hover:bg-green-700 text-lg px-4 py-1">
                        <ArrowDownCircle className="mr-2 size-5" />
                        Barang Masuk
                    </Badge>
                );
            case 'keluar':
                return (
                    <Badge className="bg-orange-600 hover:bg-orange-700 text-lg px-4 py-1">
                        <ArrowUpCircle className="mr-2 size-5" />
                        Barang Keluar
                    </Badge>
                );
            case 'penjualan':
                return (
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-lg px-4 py-1">
                        <ShoppingCart className="mr-2 size-5" />
                        Penjualan
                    </Badge>
                );
            default:
                return <Badge variant="outline">{jenis}</Badge>;
        }
    };

    const getHutangStatusBadge = (status: Hutang['payment_status']) => {
        switch (status) {
            case 'paid':
                return <Badge className="bg-emerald-600 hover:bg-emerald-700">Lunas</Badge>;
            case 'partially_paid':
                return <Badge className="bg-amber-600 hover:bg-amber-700">Parsial</Badge>;
            default:
                return <Badge className="bg-rose-600 hover:bg-rose-700">Belum Lunas</Badge>;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Transaksi ${transaksi.kode_transaksi}`} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="rounded-xl border border-slate-300 bg-gradient-to-r from-slate-100 via-white to-slate-100 p-4">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">Detail Transaksi {transaksi.kode_transaksi}</h1>
                    <p className="text-sm text-slate-600">
                        Halaman verifikasi transaksi untuk audit jenis, batch, nilai, dan petugas pelaksana.
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Detail Transaksi</h1>
                        <p className="text-sm text-muted-foreground">
                            Informasi lengkap transaksi obat
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button asChild>
                            <Link href={`/transaksi/${transaksi.id}/edit`}>
                                <Pencil className="mr-2 size-4" />
                                Edit
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/transaksi">
                                <ArrowLeft className="mr-2 size-4" />
                                Kembali
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Informasi Transaksi */}
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <FileText className="size-5 text-muted-foreground" />
                            <h3 className="text-lg font-semibold">Informasi Transaksi</h3>
                        </div>
                        
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Kode Transaksi:</span>
                                <code className="font-mono font-medium bg-muted px-2 py-1 rounded">
                                    {transaksi.kode_transaksi}
                                </code>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Jenis:</span>
                                {getJenisBadge(transaksi.jenis_transaksi)}
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Tanggal:</span>
                                <span className="font-medium">{formatDate(transaksi.tanggal_transaksi)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Waktu:</span>
                                <span>{transaksi.waktu_transaksi.substring(0, 5)} WIB</span>
                            </div>
                            {transaksi.nomor_referensi && (
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">No. Referensi:</span>
                                    <span className="font-medium">{transaksi.nomor_referensi}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <Package className="size-5 text-muted-foreground" />
                            <h3 className="text-lg font-semibold">Detail Obat</h3>
                        </div>
                        
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Nama Obat:</span>
                                <span className="font-medium">{transaksi.obat.nama_obat}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Kode Obat:</span>
                                <code className="font-mono text-xs bg-muted px-2 py-1 rounded">
                                    {transaksi.obat.kode_obat}
                                </code>
                            </div>
                            {transaksi.obat.kategori && (
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Kategori:</span>
                                    <Badge variant="outline">{transaksi.obat.kategori.nama_kategori}</Badge>
                                </div>
                            )}
                            {transaksi.batch && (
                                <>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Batch:</span>
                                        <code className="font-mono text-xs bg-muted px-2 py-1 rounded">
                                            {transaksi.batch.nomor_batch}
                                        </code>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Expired:</span>
                                        <span>{formatDate(transaksi.batch.tanggal_expired)}</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <Wallet className="size-5 text-muted-foreground" />
                            <h3 className="text-lg font-semibold">Nilai Transaksi</h3>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Jumlah:</span>
                                <span className="font-medium text-lg">
                                    {transaksi.jumlah} {transaksi.obat.satuan?.nama_satuan || 'unit'}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Harga Satuan:</span>
                                <span className="font-medium">{formatCurrency(transaksi.harga_satuan)}</span>
                            </div>
                            <div className="pt-4 border-t">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground font-medium">Total Harga:</span>
                                    <span className="text-2xl font-bold text-emerald-700">
                                        {formatCurrency(transaksi.total_harga)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {transaksi.hutang && (
                        <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-4 md:col-span-2">
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                    <CreditCard className="size-5 text-muted-foreground" />
                                    <h3 className="text-lg font-semibold">Timeline Pembayaran Hutang</h3>
                                </div>
                                {getHutangStatusBadge(transaksi.hutang.payment_status)}
                            </div>

                            <div className="grid gap-3 text-sm md:grid-cols-3">
                                <div className="rounded-lg border p-3">
                                    <p className="text-muted-foreground">Total Hutang</p>
                                    <p className="text-lg font-semibold">{formatCurrency(transaksi.hutang.total_amount)}</p>
                                </div>
                                <div className="rounded-lg border p-3">
                                    <p className="text-muted-foreground">Sisa Hutang</p>
                                    <p className="text-lg font-semibold text-amber-700">{formatCurrency(transaksi.hutang.remaining_amount)}</p>
                                </div>
                                <div className="rounded-lg border p-3">
                                    <p className="text-muted-foreground">Total Pembayaran</p>
                                    <p className="text-lg font-semibold text-emerald-700">
                                        {formatCurrency(transaksi.hutang.total_amount - transaksi.hutang.remaining_amount)}
                                    </p>
                                </div>
                            </div>

                            {transaksi.hutang.payments.length === 0 ? (
                                <div className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
                                    Belum ada riwayat pembayaran untuk hutang ini.
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {transaksi.hutang.payments.map((payment) => (
                                        <div key={payment.id} className="rounded-lg border p-4">
                                            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Clock3 className="size-4" />
                                                        <span>{formatDateTime(payment.paid_at)}</span>
                                                    </div>
                                                    <p className="text-sm">
                                                        Metode: <span className="font-medium uppercase">{payment.metode_pembayaran || '-'}</span>
                                                    </p>
                                                    {payment.user?.name && (
                                                        <p className="text-sm text-muted-foreground">Diproses oleh: {payment.user.name}</p>
                                                    )}
                                                    {payment.keterangan && (
                                                        <p className="text-sm text-muted-foreground">Catatan: {payment.keterangan}</p>
                                                    )}
                                                </div>
                                                <p className="text-lg font-bold text-emerald-700">{formatCurrency(payment.amount)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <User className="size-5 text-muted-foreground" />
                            <h3 className="text-lg font-semibold">Info Petugas</h3>
                        </div>
                        
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Petugas:</span>
                                <span className="font-medium">{transaksi.user.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Email:</span>
                                <span>{transaksi.user.email}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Keterangan */}
                {transaksi.keterangan && (
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="size-5 text-muted-foreground" />
                            <h3 className="text-lg font-semibold">Keterangan</h3>
                        </div>
                        <p className="text-sm">{transaksi.keterangan}</p>
                    </div>
                )}

                {/* Audit Info */}
                <div className="rounded-xl border border-sidebar-border/70 bg-card p-4">
                    <p className="text-xs text-muted-foreground">
                        Dibuat pada: {formatDateTime(transaksi.created_at)}
                    </p>
                </div>
            </div>
        </AppLayout>
    );
}
