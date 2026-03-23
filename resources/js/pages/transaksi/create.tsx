import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Save, X, Package, QrCode, Scan, AlertCircle, CheckCircle2, Camera, Keyboard } from 'lucide-react';
import type { FormEventHandler } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Transaksi', href: '/transaksi' },
    { title: 'Tambah Transaksi', href: '/transaksi/create' },
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

interface Props {
    obat: Obat[];
    batches: Batch[];
}

export default function TransaksiCreate({ obat, batches }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        obat_id: '',
        batch_id: '',
        jenis_transaksi: 'masuk',
        jumlah: '',
        harga_satuan: '',
        tanggal_transaksi: new Date().toISOString().split('T')[0],
        keterangan: '',
        nomor_referensi: '',
        supplier_nama: '',
        pelanggan_nama: '',
        dokter_nama: '',
        sales_nama: '',
        operator_nama: '',
        kasir_nama: '',
        metode_pembayaran: '',
        tipe_penjualan: '',
        kategori_keuangan: 'none',
        status_pelunasan: 'lunas',
        jatuh_tempo: '',
        is_taxed: false,
    });

    // QR Scanner states
    const [qrDialogOpen, setQrDialogOpen] = useState(false);
    const [scanMethod, setScanMethod] = useState<'camera' | 'manual'>('camera');
    const [manualQrCode, setManualQrCode] = useState('');
    const [scanning, setScanning] = useState(false);
    const [scanResult, setScanResult] = useState<any>(null);
    const [scanError, setScanError] = useState<string>('');

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/transaksi', {
            onSuccess: () => {
                console.log('Transaksi saved successfully');
            },
            onError: (errors) => {
                console.error('Validation errors:', errors);
            },
            preserveScroll: true,
        });
    };

    // QR Scan Handler
    const handleQrScan = async (kodeQr: string) => {
        setScanning(true);
        setScanError('');
        setScanResult(null);

        try {
            const response = await axios.post('/api/qr/scan', {
                kode_qr: kodeQr,
                metode: scanMethod === 'camera' ? 'camera' : 'manual'
            });

            const result = response.data;
            setScanResult(result);

            if (result.success) {
                // Auto-fill form with scanned batch data
                const qrData = result.qr_data;
                
                // Set obat_id
                const foundObat = obat.find(o => o.id === qrData.obat_id);
                if (foundObat) {
                    setData('obat_id', foundObat.id.toString());
                }

                // Set batch_id
                setData('batch_id', qrData.batch_id.toString());
                
                // Set harga_satuan from batch
                const foundBatch = batches.find(b => b.id === qrData.batch_id);
                if (foundBatch) {
                    setData('harga_satuan', foundBatch.harga_beli.toString());
                }

                // Close dialog after successful scan
                setTimeout(() => {
                    setQrDialogOpen(false);
                    setManualQrCode('');
                }, 1500);
            } else {
                setScanError(result.message || 'QR code tidak valid');
            }
        } catch (error: any) {
            setScanError(error.response?.data?.message || 'Gagal memindai QR code');
        } finally {
            setScanning(false);
        }
    };

    const handleManualSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (manualQrCode.trim()) {
            handleQrScan(manualQrCode.trim());
        }
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
            <Head title="Tambah Transaksi" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="rounded-xl border border-slate-300 bg-gradient-to-r from-slate-100 via-white to-slate-100 p-4">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">Tambah Transaksi</h1>
                    <p className="text-sm text-slate-600">
                        Form transaksi disusun per panel agar input mode, batch, nilai, dan referensi bisa diproses cepat tanpa kehilangan konteks.
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Tambah Transaksi Baru</h1>
                        <p className="text-sm text-muted-foreground">
                            Catat transaksi obat masuk atau keluar
                        </p>
                    </div>
                    <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setQrDialogOpen(true)}
                        className="gap-2"
                    >
                        <QrCode className="size-4" />
                        Scan QR
                    </Button>
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
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="batch_id">Batch (Opsional untuk Barang Masuk)</Label>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setQrDialogOpen(true)}
                                        className="h-auto py-1 px-2 text-xs gap-1"
                                    >
                                        <QrCode className="size-3" />
                                        Scan
                                    </Button>
                                </div>
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
                            {processing ? 'Menyimpan...' : 'Simpan Transaksi'}
                        </Button>
                        <Button type="button" variant="outline" asChild>
                            <Link href="/transaksi">
                                <X className="mr-2 size-4" />
                                Batal
                            </Link>
                        </Button>
                    </div>
                </form>

                {/* QR Scanner Dialog */}
                <Dialog open={qrDialogOpen} onOpenChange={setQrDialogOpen}>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                                <Scan className="size-5" />
                                Scan QR Code Batch
                            </DialogTitle>
                            <DialogDescription>
                                Pindai QR code pada label batch untuk mengisi form otomatis
                            </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4">
                            {/* Method Selection */}
                            <div className="flex gap-2 p-1 bg-muted rounded-lg">
                                <button
                                    onClick={() => setScanMethod('camera')}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-colors ${
                                        scanMethod === 'camera' 
                                            ? 'bg-background shadow-sm' 
                                            : 'hover:bg-background/50'
                                    }`}
                                >
                                    <Camera className="size-4" />
                                    <span className="text-sm font-medium">Kamera</span>
                                </button>
                                <button
                                    onClick={() => setScanMethod('manual')}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-colors ${
                                        scanMethod === 'manual' 
                                            ? 'bg-background shadow-sm' 
                                            : 'hover:bg-background/50'
                                    }`}
                                >
                                    <Keyboard className="size-4" />
                                    <span className="text-sm font-medium">Manual</span>
                                </button>
                            </div>

                            {/* Camera Scanner */}
                            {scanMethod === 'camera' && (
                                <div className="space-y-3">
                                    <div className="rounded-lg border-2 border-dashed border-muted-foreground/25 p-8 text-center">
                                        <Camera className="size-12 mx-auto mb-3 text-muted-foreground" />
                                        <p className="text-sm text-muted-foreground mb-2">
                                            Fitur kamera memerlukan komponen Html5Qrcode
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Untuk sementara, gunakan mode Manual untuk memasukkan kode QR
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Manual Input */}
                            {scanMethod === 'manual' && (
                                <form onSubmit={handleManualSubmit} className="space-y-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="manual-qr">Kode QR</Label>
                                        <Input
                                            id="manual-qr"
                                            value={manualQrCode}
                                            onChange={(e) => setManualQrCode(e.target.value)}
                                            placeholder="Masukkan kode QR (misal: BATCH-001-20250210)"
                                            disabled={scanning}
                                        />
                                        <p className="text-xs text-muted-foreground">
                                            Ketik atau scan kode QR dari label batch
                                        </p>
                                    </div>
                                    <Button 
                                        type="submit" 
                                        disabled={scanning || !manualQrCode.trim()}
                                        className="w-full"
                                    >
                                        {scanning ? 'Memproses...' : 'Scan QR Code'}
                                    </Button>
                                </form>
                            )}

                            {/* Scan Result */}
                            {scanResult && (
                                <div className={`rounded-lg border p-4 ${
                                    scanResult.success 
                                        ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' 
                                        : scanResult.severity === 'warning'
                                        ? 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800'
                                        : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800'
                                }`}>
                                    <div className="flex items-start gap-3">
                                        {scanResult.success ? (
                                            <CheckCircle2 className="size-5 text-green-600 dark:text-green-400 mt-0.5" />
                                        ) : (
                                            <AlertCircle className="size-5 text-red-600 dark:text-red-400 mt-0.5" />
                                        )}
                                        <div className="flex-1 space-y-2">
                                            <p className="font-medium text-sm">
                                                {scanResult.message}
                                            </p>
                                            
                                            {scanResult.success && scanResult.qr_data && (
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Package className="size-4" />
                                                        <span className="font-medium">{scanResult.qr_data.nama_obat}</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                                        <div>
                                                            <span className="text-muted-foreground">Batch:</span>{' '}
                                                            <span className="font-medium">{scanResult.qr_data.nomor_batch}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-muted-foreground">Stok:</span>{' '}
                                                            <span className="font-medium">{scanResult.qr_data.stok_tersedia}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-muted-foreground">Expired:</span>{' '}
                                                            <span className="font-medium">
                                                                {new Date(scanResult.qr_data.tanggal_expired).toLocaleDateString('id-ID')}
                                                            </span>
                                                        </div>
                                                        {scanResult.qr_data.harga_beli && (
                                                            <div>
                                                                <span className="text-muted-foreground">Harga:</span>{' '}
                                                                <span className="font-medium">
                                                                    Rp {scanResult.qr_data.harga_beli.toLocaleString('id-ID')}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Scan Error */}
                            {scanError && (
                                <div className="rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20 p-4">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="size-5 text-red-600 dark:text-red-400 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-sm text-red-900 dark:text-red-100">
                                                Gagal memindai QR
                                            </p>
                                            <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                                                {scanError}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </AppLayout>
    );
}
