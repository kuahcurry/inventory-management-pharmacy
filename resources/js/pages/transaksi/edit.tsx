import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Save, X, Package } from 'lucide-react';
import type { FormEventHandler } from 'react';
import { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Transaksi', href: '/transaksi' },
    { title: 'Edit Transaksi', href: '/transaksi/edit' },
];

interface Obat {
    id: number;
    kode_obat: string;
    nama_obat: string;
    satuan?: {
        nama_satuan: string;
    };
    kategori?: {
        nama_kategori: string;
    };
}

interface Batch {
    id: number;
    nomor_batch: string;
    tanggal_expired: string;
    stok_tersedia: number;
    harga_beli: number;
    obat: {
        nama_obat: string;
        kode_obat: string;
    };
}

interface Transaksi {
    id: number;
    obat_id: number;
    batch_id: number | null;
    jenis_transaksi: string;
    jumlah: number;
    harga_satuan: number;
    tanggal_transaksi: string;
    keterangan: string | null;
    nomor_referensi: string | null;
    supplier_nama?: string | null;
    pelanggan_nama?: string | null;
    dokter_nama?: string | null;
    sales_nama?: string | null;
    operator_nama?: string | null;
    kasir_nama?: string | null;
    metode_pembayaran?: string | null;
    tipe_penjualan?: string | null;
    kategori_keuangan?: string | null;
    status_pelunasan?: string | null;
    jatuh_tempo?: string | null;
    is_taxed?: boolean;
}

interface Props {
    transaksi: Transaksi;
    obat: Obat[];
    batches: Batch[];
}

export default function TransaksiEdit({ transaksi, obat, batches }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        obat_id: transaksi.obat_id.toString(),
        batch_id: transaksi.batch_id?.toString() || '',
        jenis_transaksi: transaksi.jenis_transaksi,
        jumlah: transaksi.jumlah.toString(),
        harga_satuan: transaksi.harga_satuan.toString(),
        tanggal_transaksi: transaksi.tanggal_transaksi,
        keterangan: transaksi.keterangan || '',
        nomor_referensi: transaksi.nomor_referensi || '',
        supplier_nama: transaksi.supplier_nama || '',
        pelanggan_nama: transaksi.pelanggan_nama || '',
        dokter_nama: transaksi.dokter_nama || '',
        sales_nama: transaksi.sales_nama || '',
        operator_nama: transaksi.operator_nama || '',
        kasir_nama: transaksi.kasir_nama || '',
        metode_pembayaran: transaksi.metode_pembayaran || '',
        tipe_penjualan: transaksi.tipe_penjualan || '',
        kategori_keuangan: transaksi.kategori_keuangan || 'none',
        status_pelunasan: transaksi.status_pelunasan || 'lunas',
        jatuh_tempo: transaksi.jatuh_tempo || '',
        is_taxed: Boolean(transaksi.is_taxed),
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        put(`/transaksi/${transaksi.id}`, {
            onSuccess: () => {
                console.log('Transaksi updated successfully');
            },
            onError: (errors) => {
                console.error('Validation errors:', errors);
            },
            preserveScroll: true,
        });
    };

    const handleObatChange = (value: string) => {
        setData('obat_id', value);
        // Auto-select batch if only one available for this medicine
        const obatBatches = batches.filter(b => b.obat.kode_obat === obat.find(o => o.id.toString() === value)?.kode_obat);
        if (obatBatches.length === 1) {
            setData('batch_id', obatBatches[0].id.toString());
            setData('harga_satuan', obatBatches[0].harga_beli.toString());
        }
    };

    const handleBatchChange = (value: string) => {
        setData('batch_id', value);
        const batch = batches.find(b => b.id.toString() === value);
        if (batch) {
            setData('harga_satuan', batch.harga_beli.toString());
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    const getTotalHarga = () => {
        const jumlah = parseFloat(data.jumlah) || 0;
        const harga = parseFloat(data.harga_satuan) || 0;
        return jumlah * harga;
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const selectedBatch = batches.find((item) => item.id.toString() === data.batch_id);
    const isMasuk = data.jenis_transaksi === 'masuk';
    const isPenjualan = data.jenis_transaksi === 'penjualan';
    const isKeluar = data.jenis_transaksi === 'keluar';
    const requiresTempoDate = (isMasuk && data.metode_pembayaran === 'tempo') || (isPenjualan && data.metode_pembayaran === 'kredit');

    useEffect(() => {
        // Keep legacy fields empty because current transaction logic does not use them.
        if (data.sales_nama !== '') {
            setData('sales_nama', '');
        }
        if (data.operator_nama !== '') {
            setData('operator_nama', '');
        }

        if (isMasuk) {
            if (!['cash', 'konsinyasi', 'tempo'].includes(data.metode_pembayaran)) {
                setData('metode_pembayaran', 'cash');
            }
            if (data.tipe_penjualan !== '') {
                setData('tipe_penjualan', '');
            }
            if (data.pelanggan_nama !== '') {
                setData('pelanggan_nama', '');
            }
            if (data.dokter_nama !== '') {
                setData('dokter_nama', '');
            }
            if (data.kasir_nama !== '') {
                setData('kasir_nama', '');
            }
            return;
        }

        if (isPenjualan) {
            if (!['qris', 'cash', 'transfer', 'debit', 'kredit'].includes(data.metode_pembayaran)) {
                setData('metode_pembayaran', 'cash');
            }
            if (data.supplier_nama !== '') {
                setData('supplier_nama', '');
            }
            if (data.tipe_penjualan === '') {
                setData('tipe_penjualan', 'biasa');
            }
            return;
        }

        if (data.metode_pembayaran !== '') {
            setData('metode_pembayaran', '');
        }
        if (data.tipe_penjualan !== '') {
            setData('tipe_penjualan', '');
        }
        if (data.supplier_nama !== '') {
            setData('supplier_nama', '');
        }
        if (data.pelanggan_nama !== '') {
            setData('pelanggan_nama', '');
        }
        if (data.dokter_nama !== '') {
            setData('dokter_nama', '');
        }
        if (data.kasir_nama !== '') {
            setData('kasir_nama', '');
        }
    }, [
        data.dokter_nama,
        data.kasir_nama,
        data.metode_pembayaran,
        data.operator_nama,
        data.pelanggan_nama,
        data.sales_nama,
        data.supplier_nama,
        data.tipe_penjualan,
        isMasuk,
        isPenjualan,
        setData,
    ]);

    useEffect(() => {
        if (isKeluar) {
            if (data.kategori_keuangan !== 'none') {
                setData('kategori_keuangan', 'none');
            }
            if (data.status_pelunasan !== 'lunas') {
                setData('status_pelunasan', 'lunas');
            }
            if (data.jatuh_tempo !== '') {
                setData('jatuh_tempo', '');
            }
            return;
        }

        if (isMasuk && data.metode_pembayaran === 'tempo') {
            if (data.kategori_keuangan !== 'hutang') {
                setData('kategori_keuangan', 'hutang');
            }
            if (data.status_pelunasan !== 'belum_lunas') {
                setData('status_pelunasan', 'belum_lunas');
            }
            return;
        }

        if (isPenjualan && data.metode_pembayaran === 'kredit') {
            if (data.kategori_keuangan !== 'piutang') {
                setData('kategori_keuangan', 'piutang');
            }
            if (data.status_pelunasan !== 'belum_lunas') {
                setData('status_pelunasan', 'belum_lunas');
            }
            return;
        }

        if (data.kategori_keuangan !== 'none') {
            setData('kategori_keuangan', 'none');
        }
        if (data.status_pelunasan !== 'lunas') {
            setData('status_pelunasan', 'lunas');
        }
        if (data.jatuh_tempo !== '') {
            setData('jatuh_tempo', '');
        }
    }, [
        data.jatuh_tempo,
        data.kategori_keuangan,
        data.metode_pembayaran,
        data.status_pelunasan,
        isKeluar,
        isMasuk,
        isPenjualan,
        setData,
    ]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Transaksi" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="rounded-xl border border-slate-300 bg-gradient-to-r from-slate-100 via-white to-slate-100 p-4">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">Edit Transaksi</h1>
                    <p className="text-sm text-slate-600">
                        Pastikan perubahan jumlah, batch, dan nilai transaksi tetap sinkron sebelum menyimpan pembaruan.
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Edit Transaksi</h1>
                        <p className="text-sm text-muted-foreground">
                            Ubah transaksi obat masuk atau keluar
                        </p>
                    </div>
                </div>

                {Object.keys(errors).length > 0 && (
                    <div className="max-w-4xl rounded-xl border border-destructive/50 bg-destructive/10 p-4">
                        <h4 className="font-semibold text-destructive mb-2">Terdapat kesalahan pada form:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-destructive">
                            {Object.entries(errors).map(([key, value]) => (
                                <li key={key}>{value}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
                    {/* Jenis Transaksi */}
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Jenis Transaksi</h3>
                            <p className="text-sm text-muted-foreground">
                                Pilih jenis transaksi yang akan dicatat
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid gap-2">
                                <Label htmlFor="jenis_transaksi">Jenis Transaksi *</Label>
                                <Select value={data.jenis_transaksi} onValueChange={(value) => setData('jenis_transaksi', value)}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="masuk">Barang Masuk</SelectItem>
                                        <SelectItem value="keluar">Barang Keluar</SelectItem>
                                        <SelectItem value="penjualan">Penjualan</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.jenis_transaksi && (
                                    <p className="text-sm text-destructive">{errors.jenis_transaksi}</p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="tanggal_transaksi">Tanggal Transaksi *</Label>
                                <Input
                                    id="tanggal_transaksi"
                                    type="date"
                                    value={data.tanggal_transaksi}
                                    onChange={(e) => setData('tanggal_transaksi', e.target.value)}
                                    required
                                />
                                {errors.tanggal_transaksi && (
                                    <p className="text-sm text-destructive">{errors.tanggal_transaksi}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Detail Obat */}
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Detail Obat</h3>
                            <p className="text-sm text-muted-foreground">
                                Informasi obat dan batch yang ditransaksikan
                            </p>
                        </div>

                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="obat_id">Obat *</Label>
                                <Select value={data.obat_id} onValueChange={handleObatChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih obat" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {obat.map((item) => (
                                            <SelectItem key={item.id} value={item.id.toString()}>
                                                {item.nama_obat} ({item.kode_obat}) - {item.kategori?.nama_kategori}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.obat_id && (
                                    <p className="text-sm text-destructive">{errors.obat_id}</p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="batch_id">Batch (Opsional untuk Barang Masuk)</Label>
                                <Select value={data.batch_id} onValueChange={handleBatchChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih batch (opsional)" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {batches.map((batch) => (
                                            <SelectItem key={batch.id} value={batch.id.toString()}>
                                                <div className="flex flex-col">
                                                    <span>{batch.obat.nama_obat} - Batch: {batch.nomor_batch}</span>
                                                    <span className="text-xs text-muted-foreground">
                                                        Expired: {formatDate(batch.tanggal_expired)} | Stok: {batch.stok_tersedia}
                                                    </span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.batch_id && (
                                    <p className="text-sm text-destructive">{errors.batch_id}</p>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* Jumlah & Harga */}
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Jumlah & Harga</h3>
                            <p className="text-sm text-muted-foreground">
                                Informasi kuantitas dan nilai transaksi
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid gap-2">
                                <Label htmlFor="jumlah">Jumlah *</Label>
                                <Input
                                    id="jumlah"
                                    type="number"
                                    min="1"
                                    value={data.jumlah}
                                    onChange={(e) => setData('jumlah', e.target.value)}
                                    placeholder="Jumlah"
                                    required
                                />
                                {errors.jumlah && (
                                    <p className="text-sm text-destructive">{errors.jumlah}</p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="harga_satuan">Harga Satuan (Rp) *</Label>
                                <Input
                                    id="harga_satuan"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={data.harga_satuan}
                                    onChange={(e) => setData('harga_satuan', e.target.value)}
                                    placeholder="Harga per unit"
                                    required
                                />
                                {errors.harga_satuan && (
                                    <p className="text-sm text-destructive">{errors.harga_satuan}</p>
                                )}
                            </div>
                        </div>

                        {data.jumlah && data.harga_satuan && (
                            <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Total Harga:</span>
                                    <span className="text-2xl font-bold text-emerald-700">
                                        {formatCurrency(getTotalHarga())}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-4">
                        <h3 className="text-lg font-semibold">Ringkasan Operasional</h3>
                        <div className="grid gap-3 md:grid-cols-4">
                            <div className="rounded-md border px-3 py-2">
                                <p className="text-xs text-muted-foreground">Mode</p>
                                <p className="text-sm font-semibold">{data.jenis_transaksi}</p>
                            </div>
                            <div className="rounded-md border px-3 py-2">
                                <p className="text-xs text-muted-foreground">Batch</p>
                                <p className="text-sm font-semibold">{selectedBatch?.nomor_batch || '-'}</p>
                            </div>
                            <div className="rounded-md border px-3 py-2">
                                <p className="text-xs text-muted-foreground">Stok Batch</p>
                                <p className="text-sm font-semibold">{selectedBatch ? selectedBatch.stok_tersedia : '-'}</p>
                            </div>
                            <div className="rounded-md border px-3 py-2">
                                <p className="text-xs text-muted-foreground">Nilai Transaksi</p>
                                <p className="text-sm font-semibold text-emerald-700">{formatCurrency(getTotalHarga())}</p>
                            </div>
                        </div>
                    </div>

                    {/* Informasi Tambahan */}
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Informasi Tambahan</h3>
                            <p className="text-sm text-muted-foreground">
                                Catatan dan referensi transaksi
                            </p>
                        </div>

                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="nomor_referensi">Nomor Referensi</Label>
                                <Input
                                    id="nomor_referensi"
                                    value={data.nomor_referensi}
                                    onChange={(e) => setData('nomor_referensi', e.target.value)}
                                    placeholder="Nomor PO, Invoice, dll (opsional)"
                                />
                                {errors.nomor_referensi && (
                                    <p className="text-sm text-destructive">{errors.nomor_referensi}</p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="keterangan">Keterangan</Label>
                                <Textarea
                                    id="keterangan"
                                    value={data.keterangan}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('keterangan', e.target.value)}
                                    placeholder="Keterangan tambahan (opsional)"
                                    rows={3}
                                />
                                {errors.keterangan && (
                                    <p className="text-sm text-destructive">{errors.keterangan}</p>
                                )}
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                                <div className="grid gap-2">
                                    <Label htmlFor="metode_pembayaran">Metode Pembayaran</Label>
                                    {isKeluar ? (
                                        <Input id="metode_pembayaran" value="Tidak digunakan untuk barang keluar" disabled />
                                    ) : (
                                        <Select value={data.metode_pembayaran || undefined} onValueChange={(value) => setData('metode_pembayaran', value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pilih metode" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {isMasuk ? (
                                                    <>
                                                        <SelectItem value="cash">Cash</SelectItem>
                                                        <SelectItem value="konsinyasi">Konsinyasi</SelectItem>
                                                        <SelectItem value="tempo">Tempo</SelectItem>
                                                    </>
                                                ) : (
                                                    <>
                                                        <SelectItem value="qris">QRIS</SelectItem>
                                                        <SelectItem value="cash">Cash</SelectItem>
                                                        <SelectItem value="transfer">Transfer</SelectItem>
                                                        <SelectItem value="debit">Debit</SelectItem>
                                                        <SelectItem value="kredit">Kredit</SelectItem>
                                                    </>
                                                )}
                                            </SelectContent>
                                        </Select>
                                    )}
                                    {errors.metode_pembayaran && <p className="text-sm text-destructive">{errors.metode_pembayaran}</p>}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="kategori_keuangan">Kategori Keuangan</Label>
                                    <Input id="kategori_keuangan" value={data.kategori_keuangan} disabled />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="status_pelunasan">Status Pelunasan</Label>
                                    <Input id="status_pelunasan" value={data.status_pelunasan} disabled />
                                </div>
                                {isMasuk && (
                                    <div className="grid gap-2">
                                        <Label htmlFor="supplier_nama">Supplier</Label>
                                        <Input id="supplier_nama" value={data.supplier_nama} onChange={(e) => setData('supplier_nama', e.target.value)} placeholder="Nama supplier" />
                                    </div>
                                )}
                                {isPenjualan && (
                                    <div className="grid gap-2">
                                        <Label htmlFor="pelanggan_nama">Pelanggan</Label>
                                        <Input id="pelanggan_nama" value={data.pelanggan_nama} onChange={(e) => setData('pelanggan_nama', e.target.value)} placeholder="Nama pelanggan" />
                                    </div>
                                )}
                                {isPenjualan && (
                                    <div className="grid gap-2">
                                        <Label htmlFor="tipe_penjualan">Tipe Penjualan</Label>
                                        <Select value={data.tipe_penjualan || undefined} onValueChange={(value) => setData('tipe_penjualan', value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pilih tipe" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="biasa">Biasa</SelectItem>
                                                <SelectItem value="resep">Resep</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}
                                {isPenjualan && data.tipe_penjualan === 'resep' && (
                                    <div className="grid gap-2">
                                        <Label htmlFor="dokter_nama">Dokter</Label>
                                        <Input id="dokter_nama" value={data.dokter_nama} onChange={(e) => setData('dokter_nama', e.target.value)} placeholder="Nama dokter resep" />
                                    </div>
                                )}
                                {isPenjualan && (
                                    <div className="grid gap-2">
                                        <Label htmlFor="kasir_nama">Kasir</Label>
                                        <Input id="kasir_nama" value={data.kasir_nama} onChange={(e) => setData('kasir_nama', e.target.value)} placeholder="Nama kasir (opsional)" />
                                    </div>
                                )}
                                {requiresTempoDate && (
                                    <div className="grid gap-2">
                                        <Label htmlFor="jatuh_tempo">Jatuh Tempo</Label>
                                        <Input id="jatuh_tempo" type="date" value={data.jatuh_tempo} onChange={(e) => setData('jatuh_tempo', e.target.value)} />
                                    </div>
                                )}
                                <label className="md:col-span-3 flex items-center gap-2 text-sm">
                                    <input type="checkbox" checked={data.is_taxed} onChange={(e) => setData('is_taxed', e.target.checked)} />
                                    Transaksi dikenakan pajak
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button type="submit" disabled={processing}>
                            <Save className="mr-2 size-4" />
                            {processing ? 'Menyimpan...' : 'Update Transaksi'}
                        </Button>
                        <Button type="button" variant="outline" asChild>
                            <Link href="/transaksi">
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
