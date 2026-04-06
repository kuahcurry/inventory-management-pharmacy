import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Package, ShieldAlert, Warehouse } from 'lucide-react';

interface Props {
    obat: {
        id: number;
        kode_obat: string;
        kode_formularium?: string | null;
        kode_bpjs?: string | null;
        nama_obat: string;
        nama_generik?: string | null;
        nama_brand?: string | null;
        stok_total: number;
        stok_minimum: number;
        harga_beli: number;
        harga_jual: number;
        lokasi_penyimpanan?: string | null;
        deskripsi?: string | null;
        efek_samping?: string | null;
        indikasi?: string | null;
        kontraindikasi?: string | null;
        is_high_risk_drug: boolean;
        kategori?: { nama_kategori: string };
        jenis?: { nama_jenis: string };
        satuan?: { nama_satuan: string };
    };
    batchCount: number;
    activeBatchCount: number;
    latestBatch?: {
        nomor_batch: string;
        tanggal_expired: string;
        stok_tersedia: number;
        supplier?: { nama_supplier: string };
    } | null;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Data Obat', href: '/obat' },
    { title: 'Detail Obat', href: '#' },
];

export default function ObatShow({ obat, batchCount, activeBatchCount, latestBatch }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Detail ${obat.nama_obat}`} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Detail Obat</h1>
                        <p className="text-sm text-muted-foreground">Informasi lengkap master obat dan ringkasan batch.</p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/obat">
                            <ArrowLeft className="mr-2 size-4" />
                            Kembali
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border bg-card p-4 md:col-span-2">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <div className="mb-2 flex items-center gap-2">
                                    <Package className="size-5 text-primary" />
                                    <h2 className="text-xl font-semibold">{obat.nama_obat}</h2>
                                </div>
                                <p className="text-sm text-muted-foreground">{obat.nama_generik || '-'} {obat.nama_brand ? `• ${obat.nama_brand}` : ''}</p>
                            </div>
                            {obat.is_high_risk_drug && <Badge variant="destructive">High Risk</Badge>}
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <InfoCard label="Kode Obat" value={obat.kode_obat} />
                            <InfoCard label="Kategori" value={obat.kategori?.nama_kategori || '-'} />
                            <InfoCard label="Jenis" value={obat.jenis?.nama_jenis || '-'} />
                            <InfoCard label="Satuan" value={obat.satuan?.nama_satuan || '-'} />
                            <InfoCard label="Stok Total" value={`${obat.stok_total}`} />
                            <InfoCard label="Stok Minimum" value={`${obat.stok_minimum}`} />
                            <InfoCard label="Harga Beli" value={formatCurrency(obat.harga_beli)} />
                            <InfoCard label="Harga Jual" value={formatCurrency(obat.harga_jual)} />
                            <InfoCard label="Lokasi" value={obat.lokasi_penyimpanan || '-'} />
                        </div>

                        {(obat.deskripsi || obat.efek_samping || obat.indikasi || obat.kontraindikasi) && (
                            <div className="mt-6 grid gap-4">
                                {obat.deskripsi && <TextBlock title="Deskripsi" text={obat.deskripsi} />}
                                {obat.indikasi && <TextBlock title="Indikasi" text={obat.indikasi} />}
                                {obat.efek_samping && <TextBlock title="Efek Samping" text={obat.efek_samping} />}
                                {obat.kontraindikasi && <TextBlock title="Kontraindikasi" text={obat.kontraindikasi} />}
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <div className="rounded-xl border bg-card p-4">
                            <div className="flex items-center gap-2">
                                <Warehouse className="size-5 text-primary" />
                                <h3 className="font-semibold">Ringkasan Batch</h3>
                            </div>
                            <div className="mt-4 space-y-3 text-sm">
                                <Row label="Total batch" value={`${batchCount}`} />
                                <Row label="Batch aktif" value={`${activeBatchCount}`} />
                                <Row label="Batch terakhir" value={latestBatch?.nomor_batch || '-'} />
                                <Row label="Supplier terakhir" value={latestBatch?.supplier?.nama_supplier || '-'} />
                            </div>
                        </div>

                        <div className="rounded-xl border bg-card p-4">
                            <div className="flex items-center gap-2">
                                <ShieldAlert className="size-5 text-primary" />
                                <h3 className="font-semibold">Batch Terakhir</h3>
                            </div>
                            {latestBatch ? (
                                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                                    <p>Nomor: {latestBatch.nomor_batch}</p>
                                    <p>Expired: {new Date(latestBatch.tanggal_expired).toLocaleDateString('id-ID')}</p>
                                    <p>Stok: {latestBatch.stok_tersedia}</p>
                                </div>
                            ) : (
                                <p className="mt-4 text-sm text-muted-foreground">Belum ada batch.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(Number(amount || 0));
}

function InfoCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-lg border bg-muted/30 p-3">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
            <div className="mt-1 font-medium text-slate-800">{value}</div>
        </div>
    );
}

function TextBlock({ title, text }: { title: string; text: string }) {
    return (
        <div className="rounded-lg border bg-muted/20 p-3">
            <div className="mb-1 text-sm font-semibold text-slate-700">{title}</div>
            <div className="text-sm text-muted-foreground">{text}</div>
        </div>
    );
}

function Row({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between gap-3">
            <span className="text-muted-foreground">{label}</span>
            <span className="font-medium text-slate-800">{value}</span>
        </div>
    );
}