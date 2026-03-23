import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Save, X } from 'lucide-react';
import type { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Batch Obat', href: '/obat/batch' },
    { title: 'Edit Batch', href: '#' },
];

interface Batch {
    id: number;
    obat_id: number;
    supplier_id: number | null;
    nomor_batch: string;
    tanggal_produksi: string | null;
    tanggal_expired: string;
    tanggal_masuk: string;
    stok_awal: number;
    harga_beli: number;
    status: string;
    catatan: string | null;
}

interface Obat {
    id: number;
    kode_obat: string;
    nama_obat: string;
    kategori?: { nama_kategori: string };
    jenis?: { nama_jenis: string };
    satuan?: { nama_satuan: string };
}

interface Supplier {
    id: number;
    kode_supplier: string;
    nama_supplier: string;
}

interface Props {
    batch: Batch;
    obat: Obat[];
    suppliers: Supplier[];
}

export default function BatchEdit({ batch, obat, suppliers }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        obat_id: batch.obat_id.toString(),
        supplier_id: batch.supplier_id?.toString() || '',
        nomor_batch: batch.nomor_batch,
        tanggal_produksi: batch.tanggal_produksi || '',
        tanggal_expired: batch.tanggal_expired,
        tanggal_masuk: batch.tanggal_masuk,
        stok_awal: batch.stok_awal.toString(),
        harga_beli: batch.harga_beli.toString(),
        status: batch.status,
        catatan: batch.catatan || '',
    });

    const selectedObat = obat.find((item) => item.id.toString() === data.obat_id);
    const estimasiNilaiBatch = (Number(data.stok_awal) || 0) * (Number(data.harga_beli) || 0);

    const getExpiryInfo = (value: string) => {
        if (!value) {
            return { label: 'Belum diisi', tone: 'text-muted-foreground' };
        }

        const today = new Date();
        const expiry = new Date(value);
        const diffDays = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays < 0) {
            return { label: `Kadaluarsa ${Math.abs(diffDays)} hari lalu`, tone: 'text-destructive' };
        }

        if (diffDays <= 30) {
            return { label: `${diffDays} hari menuju expired`, tone: 'text-amber-700' };
        }

        return { label: `${diffDays} hari menuju expired`, tone: 'text-emerald-700' };
    };

    const expiryInfo = getExpiryInfo(data.tanggal_expired);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        
        put(`/obat/batch/${batch.id}`, {
            onSuccess: () => {
                console.log('Batch updated successfully');
            },
            onError: (errors) => {
                console.error('Validation errors:', errors);
            },
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Batch Obat" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="rounded-xl border border-slate-300 bg-gradient-to-r from-slate-100 via-white to-slate-100 p-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Edit Batch Obat</h1>
                        <p className="text-sm text-slate-600">
                            Perbarui data batch {batch.nomor_batch} dengan format panel agar validasi stok dan tanggal tetap konsisten.
                        </p>
                    </div>
                </div>

                {Object.keys(errors).length > 0 && (
                    <div className="max-w-3xl rounded-xl border border-destructive/50 bg-destructive/10 p-4">
                        <h4 className="font-semibold text-destructive mb-2">Terdapat kesalahan pada form:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-destructive">
                            {Object.entries(errors).map(([key, value]) => (
                                <li key={key}>{value}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="rounded-xl border border-slate-300 bg-card p-4 shadow-sm">
                    <div className="grid gap-4 lg:grid-cols-12">
                        <section className="space-y-3 rounded-lg border border-slate-300 p-3 lg:col-span-7">
                            <h2 className="border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">Barang</h2>

                            <div className="grid gap-3">
                                <div className="space-y-1.5">
                                    <Label htmlFor="obat_id">Obat *</Label>
                                    <Select value={data.obat_id} onValueChange={(value) => setData('obat_id', value)}>
                                        <SelectTrigger id="obat_id">
                                            <SelectValue placeholder="Pilih obat" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {obat.map((item) => (
                                                <SelectItem key={item.id} value={item.id.toString()}>
                                                    {item.nama_obat} ({item.kode_obat})
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.obat_id && <p className="text-xs text-destructive">{errors.obat_id}</p>}
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="supplier_id">Supplier</Label>
                                        <Select value={data.supplier_id} onValueChange={(value) => setData('supplier_id', value)}>
                                            <SelectTrigger id="supplier_id">
                                                <SelectValue placeholder="Pilih supplier (opsional)" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {suppliers.map((supplier) => (
                                                    <SelectItem key={supplier.id} value={supplier.id.toString()}>
                                                        {supplier.nama_supplier} ({supplier.kode_supplier})
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.supplier_id && <p className="text-xs text-destructive">{errors.supplier_id}</p>}
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="nomor_batch">Nomor Batch / Lot *</Label>
                                        <Input
                                            id="nomor_batch"
                                            value={data.nomor_batch}
                                            onChange={(e) => setData('nomor_batch', e.target.value)}
                                            placeholder="Contoh: LOT2024A123"
                                            required
                                        />
                                        {errors.nomor_batch && <p className="text-xs text-destructive">{errors.nomor_batch}</p>}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-3 rounded-lg border border-slate-300 p-3 lg:col-span-5">
                            <h2 className="border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">Keterangan</h2>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <Label htmlFor="tanggal_masuk">Tanggal Masuk *</Label>
                                    <Input
                                        id="tanggal_masuk"
                                        type="date"
                                        value={data.tanggal_masuk}
                                        onChange={(e) => setData('tanggal_masuk', e.target.value)}
                                        required
                                    />
                                    {errors.tanggal_masuk && <p className="text-xs text-destructive">{errors.tanggal_masuk}</p>}
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="tanggal_produksi">Tanggal Produksi</Label>
                                    <Input
                                        id="tanggal_produksi"
                                        type="date"
                                        value={data.tanggal_produksi}
                                        onChange={(e) => setData('tanggal_produksi', e.target.value)}
                                    />
                                    {errors.tanggal_produksi && <p className="text-xs text-destructive">{errors.tanggal_produksi}</p>}
                                </div>

                                <div className="space-y-1.5 sm:col-span-2">
                                    <Label htmlFor="tanggal_expired">Tanggal Expired *</Label>
                                    <Input
                                        id="tanggal_expired"
                                        type="date"
                                        value={data.tanggal_expired}
                                        onChange={(e) => setData('tanggal_expired', e.target.value)}
                                        required
                                    />
                                    <p className={`text-xs ${expiryInfo.tone}`}>{expiryInfo.label}</p>
                                    {errors.tanggal_expired && <p className="text-xs text-destructive">{errors.tanggal_expired}</p>}
                                </div>

                                <div className="space-y-1.5 sm:col-span-2">
                                    <Label htmlFor="status">Status Batch</Label>
                                    <Select value={data.status} onValueChange={(value) => setData('status', value)}>
                                        <SelectTrigger id="status">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="active">Tersedia</SelectItem>
                                            <SelectItem value="empty">Habis</SelectItem>
                                            <SelectItem value="expired">Kadaluarsa</SelectItem>
                                            <SelectItem value="recalled">Ditarik</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-3 rounded-lg border border-emerald-300 bg-emerald-50/40 p-3 lg:col-span-7">
                            <h2 className="border-b border-emerald-200 pb-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">Beli</h2>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <Label htmlFor="stok_awal">Stok Awal *</Label>
                                    <Input
                                        id="stok_awal"
                                        type="number"
                                        min="1"
                                        value={data.stok_awal}
                                        onChange={(e) => setData('stok_awal', e.target.value)}
                                        placeholder="Jumlah stok awal"
                                        required
                                    />
                                    {errors.stok_awal && <p className="text-xs text-destructive">{errors.stok_awal}</p>}
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="harga_beli">Harga Beli per Unit *</Label>
                                    <Input
                                        id="harga_beli"
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        value={data.harga_beli}
                                        onChange={(e) => setData('harga_beli', e.target.value)}
                                        placeholder="Harga per satuan"
                                        required
                                    />
                                    {errors.harga_beli && <p className="text-xs text-destructive">{errors.harga_beli}</p>}
                                </div>
                            </div>
                        </section>

                        <section className="space-y-3 rounded-lg border border-amber-300 bg-amber-50/40 p-3 lg:col-span-5">
                            <h2 className="border-b border-amber-200 pb-2 text-sm font-semibold uppercase tracking-wide text-amber-800">Catatan</h2>
                            <div className="space-y-1.5">
                                <Label htmlFor="catatan">Catatan Batch</Label>
                                <Textarea
                                    id="catatan"
                                    value={data.catatan}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('catatan', e.target.value)}
                                    placeholder="Catatan tambahan (opsional)"
                                    rows={4}
                                />
                            </div>
                        </section>

                        <section className="rounded-lg border border-slate-300 bg-slate-50 p-3 lg:col-span-12">
                            <h2 className="mb-3 border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">Ringkasan Batch</h2>
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                <div className="rounded-md border border-slate-200 bg-white px-3 py-2">
                                    <div className="text-xs text-muted-foreground">Obat</div>
                                    <div className="text-sm font-semibold">{selectedObat?.nama_obat || '-'}</div>
                                    <div className="text-xs text-muted-foreground">{selectedObat?.kode_obat || 'Pilih obat terlebih dahulu'}</div>
                                </div>
                                <div className="rounded-md border border-slate-200 bg-white px-3 py-2">
                                    <div className="text-xs text-muted-foreground">Satuan</div>
                                    <div className="text-sm font-semibold">{selectedObat?.satuan?.nama_satuan || '-'}</div>
                                </div>
                                <div className="rounded-md border border-slate-200 bg-white px-3 py-2">
                                    <div className="text-xs text-muted-foreground">Nilai Batch</div>
                                    <div className="text-sm font-semibold text-emerald-700">{formatCurrency(estimasiNilaiBatch)}</div>
                                </div>
                                <div className="rounded-md border border-slate-200 bg-white px-3 py-2">
                                    <div className="text-xs text-muted-foreground">Status Expired</div>
                                    <div className={`text-sm font-semibold ${expiryInfo.tone}`}>{expiryInfo.label}</div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="mt-4 flex gap-2">
                        <Button type="submit" disabled={processing}>
                            <Save className="mr-2 size-4" />
                            {processing ? 'Menyimpan...' : 'Update Batch'}
                        </Button>
                        <Button type="button" variant="outline" asChild>
                            <Link href="/obat/batch">
                                <X className="mr-2 size-4" />
                                Batal
                            </Link>
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
