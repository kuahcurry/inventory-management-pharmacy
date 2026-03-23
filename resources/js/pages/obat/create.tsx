import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import { Download, FileText, Save, Upload, X } from 'lucide-react';
import { useMemo, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Data Obat', href: '/obat' },
    { title: 'Tambah Obat', href: '/obat/create' },
];

interface KategoriObat {
    id: number;
    nama_kategori: string;
}

interface JenisObat {
    id: number;
    nama_jenis: string;
}

interface SatuanObat {
    id: number;
    nama_satuan: string;
}

interface Supplier {
    id: number;
    nama_supplier: string;
}

interface CreateProps {
    kategori: KategoriObat[];
    jenis: JenisObat[];
    satuan: SatuanObat[];
    suppliers: Supplier[];
}

type InfoTab = 'indikasi' | 'kontraindikasi' | 'efek_samping' | 'deskripsi';

const infoTabs: Array<{ key: InfoTab; label: string }> = [
    { key: 'indikasi', label: 'Indikasi' },
    { key: 'kontraindikasi', label: 'Kontraindikasi' },
    { key: 'efek_samping', label: 'Efek Samping' },
    { key: 'deskripsi', label: 'Deskripsi' },
];

export default function CreateObat({ kategori, jenis, satuan, suppliers }: CreateProps) {
    const [activeTab, setActiveTab] = useState<'manual' | 'import'>('manual');
    const [activeInfoTab, setActiveInfoTab] = useState<InfoTab>('indikasi');
    const [importFile, setImportFile] = useState<File | null>(null);
    const [importing, setImporting] = useState(false);

    const { data, setData, post, processing, errors } = useForm<{
        kode_obat: string;
        nama_obat: string;
        nama_generik: string;
        nama_brand: string;
        kategori_id: number | undefined;
        jenis_id: number | undefined;
        satuan_id: number | undefined;
        stok_minimum: number;
        harga_beli: number;
        harga_jual: number;
        lokasi_penyimpanan: string;
        deskripsi: string;
        efek_samping: string;
        indikasi: string;
        kontraindikasi: string;
        initial_supplier_id: number | undefined;
        initial_nomor_batch: string;
        initial_tanggal_produksi: string;
        initial_tanggal_expired: string;
        initial_tanggal_masuk: string;
        initial_stok_awal: number | '';
        initial_harga_beli: number | '';
        initial_catatan: string;
    }>({
        kode_obat: '',
        nama_obat: '',
        nama_generik: '',
        nama_brand: '',
        kategori_id: undefined,
        jenis_id: undefined,
        satuan_id: undefined,
        stok_minimum: 10,
        harga_beli: 0,
        harga_jual: 0,
        lokasi_penyimpanan: '',
        deskripsi: '',
        efek_samping: '',
        indikasi: '',
        kontraindikasi: '',
        initial_supplier_id: undefined,
        initial_nomor_batch: '',
        initial_tanggal_produksi: '',
        initial_tanggal_expired: '',
        initial_tanggal_masuk: '',
        initial_stok_awal: '',
        initial_harga_beli: '',
        initial_catatan: '',
    });

    const hargaBeli = Number(data.initial_harga_beli || data.harga_beli || 0);
    const hargaJual = Number(data.harga_jual || 0);

    const estimasiLaba = useMemo(() => {
        if (hargaBeli <= 0 || hargaJual <= 0) {
            return { nominal: 0, persen: 0 };
        }

        const nominal = hargaJual - hargaBeli;
        const persen = (nominal / hargaBeli) * 100;
        return { nominal, persen };
    }, [hargaBeli, hargaJual]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/obat', { preserveScroll: true });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImportFile(e.target.files[0]);
        }
    };

    const handleImport = () => {
        if (!importFile) return;

        setImporting(true);
        const formData = new FormData();
        formData.append('file', importFile);

        router.post('/obat/import', formData, {
            onSuccess: () => {
                setImportFile(null);
                setImporting(false);
            },
            onError: () => {
                setImporting(false);
            },
        });
    };

    const handleDownloadTemplate = () => {
        window.location.href = '/obat/download-template';
    };

    const infoValue = data[activeInfoTab] ?? '';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Obat" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="rounded-xl border border-slate-300 bg-gradient-to-r from-slate-100 via-white to-slate-100 p-4">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">Tambah Obat</h1>
                    <p className="text-sm text-slate-600">Tampilan form disusun seperti panel operasional apotek agar input cepat dan rapi.</p>
                </div>

                <div className="flex gap-2 border-b border-sidebar-border">
                    <button
                        onClick={() => setActiveTab('manual')}
                        className={`px-4 py-2 text-sm font-semibold transition-colors ${
                            activeTab === 'manual' ? 'border-b-2 border-teal-600 text-teal-700' : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        <FileText className="mr-2 inline-block size-4" />
                        Input Manual
                    </button>
                    <button
                        onClick={() => setActiveTab('import')}
                        className={`px-4 py-2 text-sm font-semibold transition-colors ${
                            activeTab === 'import' ? 'border-b-2 border-teal-600 text-teal-700' : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        <Upload className="mr-2 inline-block size-4" />
                        Import File
                    </button>
                </div>

                {activeTab === 'manual' && (
                    <form onSubmit={handleSubmit} className="rounded-xl border border-slate-300 bg-card p-4 shadow-sm">
                        <div className="grid gap-4 lg:grid-cols-12">
                            <section className="space-y-3 rounded-lg border border-slate-300 p-3 lg:col-span-7">
                                <h2 className="border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">Barang</h2>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="kode_obat">Kode (opsional)</Label>
                                        <Input id="kode_obat" value={data.kode_obat} onChange={(e) => setData('kode_obat', e.target.value)} placeholder="Kosongkan untuk generate otomatis" />
                                        {errors.kode_obat && <p className="text-xs text-destructive">{errors.kode_obat}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="nama_obat">Nama *</Label>
                                        <Input id="nama_obat" value={data.nama_obat} onChange={(e) => setData('nama_obat', e.target.value)} placeholder="Paracetamol 500mg" required />
                                        {errors.nama_obat && <p className="text-xs text-destructive">{errors.nama_obat}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="nama_generik">Generik</Label>
                                        <Input id="nama_generik" value={data.nama_generik} onChange={(e) => setData('nama_generik', e.target.value)} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="nama_brand">Brand</Label>
                                        <Input id="nama_brand" value={data.nama_brand} onChange={(e) => setData('nama_brand', e.target.value)} />
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    <div className="space-y-1.5">
                                        <Label>Kategori *</Label>
                                        <Select value={data.kategori_id?.toString() || undefined} onValueChange={(v) => setData('kategori_id', parseInt(v, 10))} required>
                                            <SelectTrigger><SelectValue placeholder="Pilih" /></SelectTrigger>
                                            <SelectContent>
                                                {kategori.map((item) => (
                                                    <SelectItem key={item.id} value={item.id.toString()}>{item.nama_kategori}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.kategori_id && <p className="text-xs text-destructive">{errors.kategori_id}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label>Jenis *</Label>
                                        <Select value={data.jenis_id?.toString() || undefined} onValueChange={(v) => setData('jenis_id', parseInt(v, 10))} required>
                                            <SelectTrigger><SelectValue placeholder="Pilih" /></SelectTrigger>
                                            <SelectContent>
                                                {jenis.map((item) => (
                                                    <SelectItem key={item.id} value={item.id.toString()}>{item.nama_jenis}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.jenis_id && <p className="text-xs text-destructive">{errors.jenis_id}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label>Satuan *</Label>
                                        <Select value={data.satuan_id?.toString() || undefined} onValueChange={(v) => setData('satuan_id', parseInt(v, 10))} required>
                                            <SelectTrigger><SelectValue placeholder="Pilih" /></SelectTrigger>
                                            <SelectContent>
                                                {satuan.map((item) => (
                                                    <SelectItem key={item.id} value={item.id.toString()}>{item.nama_satuan}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.satuan_id && <p className="text-xs text-destructive">{errors.satuan_id}</p>}
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-3 rounded-lg border border-slate-300 p-3 lg:col-span-5">
                                <h2 className="border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">Keterangan</h2>

                                <div className="space-y-1.5">
                                    <Label>Supplier Batch Awal</Label>
                                    <Select value={data.initial_supplier_id?.toString() || undefined} onValueChange={(v) => setData('initial_supplier_id', parseInt(v, 10))}>
                                        <SelectTrigger><SelectValue placeholder="Pilih supplier" /></SelectTrigger>
                                        <SelectContent>
                                            {suppliers.map((supplier) => (
                                                <SelectItem key={supplier.id} value={supplier.id.toString()}>{supplier.nama_supplier}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.initial_supplier_id && <p className="text-xs text-destructive">{errors.initial_supplier_id}</p>}
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="stok_minimum">Stok Min. *</Label>
                                        <Input id="stok_minimum" type="number" min={0} value={data.stok_minimum} onChange={(e) => setData('stok_minimum', parseInt(e.target.value, 10) || 0)} required />
                                        {errors.stok_minimum && <p className="text-xs text-destructive">{errors.stok_minimum}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="lokasi_penyimpanan">Lokasi</Label>
                                        <Input id="lokasi_penyimpanan" value={data.lokasi_penyimpanan} onChange={(e) => setData('lokasi_penyimpanan', e.target.value)} placeholder="Rak A-1" />
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="initial_nomor_batch">Nomor Batch</Label>
                                        <Input id="initial_nomor_batch" value={data.initial_nomor_batch} onChange={(e) => setData('initial_nomor_batch', e.target.value)} placeholder="Kosongkan untuk generate otomatis" />
                                        {errors.initial_nomor_batch && <p className="text-xs text-destructive">{errors.initial_nomor_batch}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="initial_tanggal_expired">Expired</Label>
                                        <Input id="initial_tanggal_expired" type="date" value={data.initial_tanggal_expired} onChange={(e) => setData('initial_tanggal_expired', e.target.value)} />
                                        {errors.initial_tanggal_expired && <p className="text-xs text-destructive">{errors.initial_tanggal_expired}</p>}
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-3 rounded-lg border border-emerald-300 bg-emerald-50/40 p-3 lg:col-span-6">
                                <h2 className="border-b border-emerald-200 pb-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">Beli</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="harga_beli">Harga Beli Dasar</Label>
                                        <Input id="harga_beli" type="number" min={0} step="0.01" value={data.harga_beli} onChange={(e) => setData('harga_beli', parseFloat(e.target.value) || 0)} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="initial_harga_beli">Harga Beli Batch</Label>
                                        <Input
                                            id="initial_harga_beli"
                                            type="number"
                                            min={0}
                                            step="0.01"
                                            value={data.initial_harga_beli}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setData('initial_harga_beli', value === '' ? '' : parseFloat(value) || '');
                                            }}
                                        />
                                        {errors.initial_harga_beli && <p className="text-xs text-destructive">{errors.initial_harga_beli}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="initial_stok_awal">Stok Awal Batch</Label>
                                        <Input
                                            id="initial_stok_awal"
                                            type="number"
                                            min={1}
                                            value={data.initial_stok_awal}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setData('initial_stok_awal', value === '' ? '' : parseInt(value, 10) || '');
                                            }}
                                        />
                                        {errors.initial_stok_awal && <p className="text-xs text-destructive">{errors.initial_stok_awal}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="initial_tanggal_masuk">Tanggal Masuk</Label>
                                        <Input id="initial_tanggal_masuk" type="date" value={data.initial_tanggal_masuk} onChange={(e) => setData('initial_tanggal_masuk', e.target.value)} />
                                        {errors.initial_tanggal_masuk && <p className="text-xs text-destructive">{errors.initial_tanggal_masuk}</p>}
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-3 rounded-lg border border-amber-300 bg-amber-50/40 p-3 lg:col-span-6">
                                <h2 className="border-b border-amber-200 pb-2 text-sm font-semibold uppercase tracking-wide text-amber-800">Jual</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="harga_jual">Harga Jual</Label>
                                        <Input id="harga_jual" type="number" min={0} step="0.01" value={data.harga_jual} onChange={(e) => setData('harga_jual', parseFloat(e.target.value) || 0)} />
                                    </div>
                                    <div className="rounded-md border border-amber-200 bg-white px-3 py-2 text-sm">
                                        <div className="text-muted-foreground">Estimasi Laba</div>
                                        <div className={`font-semibold ${estimasiLaba.nominal < 0 ? 'text-red-600' : 'text-emerald-700'}`}>
                                            Rp {Math.abs(estimasiLaba.nominal).toLocaleString('id-ID')}
                                        </div>
                                        <div className="text-xs text-muted-foreground">{estimasiLaba.persen.toFixed(1)}%</div>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="initial_tanggal_produksi">Tanggal Produksi</Label>
                                        <Input id="initial_tanggal_produksi" type="date" value={data.initial_tanggal_produksi} onChange={(e) => setData('initial_tanggal_produksi', e.target.value)} />
                                        {errors.initial_tanggal_produksi && <p className="text-xs text-destructive">{errors.initial_tanggal_produksi}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="initial_catatan">Catatan Batch</Label>
                                        <Input id="initial_catatan" value={data.initial_catatan} onChange={(e) => setData('initial_catatan', e.target.value)} placeholder="Catatan singkat" />
                                        {errors.initial_catatan && <p className="text-xs text-destructive">{errors.initial_catatan}</p>}
                                    </div>
                                </div>
                            </section>

                            <section className="rounded-lg border border-slate-300 p-3 lg:col-span-12">
                                <div className="mb-3 flex flex-wrap gap-2">
                                    {infoTabs.map((tab) => (
                                        <button
                                            key={tab.key}
                                            type="button"
                                            onClick={() => setActiveInfoTab(tab.key)}
                                            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                                                activeInfoTab === tab.key
                                                    ? 'bg-slate-800 text-white'
                                                    : 'border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200'
                                            }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <textarea
                                    value={infoValue}
                                    onChange={(e) => setData(activeInfoTab, e.target.value)}
                                    className="h-28 w-full rounded-lg border border-sidebar-border bg-background px-3 py-2 text-sm"
                                    placeholder={`Isi ${infoTabs.find((tab) => tab.key === activeInfoTab)?.label?.toLowerCase()} obat`}
                                />
                            </section>
                        </div>

                        <div className="mt-5 flex justify-end gap-2">
                            <Button type="button" variant="outline" asChild>
                                <a href="/obat">
                                    <X className="mr-2 size-4" />
                                    Batal
                                </a>
                            </Button>
                            <Button type="submit" disabled={processing}>
                                <Save className="mr-2 size-4" />
                                {processing ? 'Menyimpan...' : 'Simpan Obat'}
                            </Button>
                        </div>
                    </form>
                )}

                {activeTab === 'import' && (
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6">
                        <div className="space-y-6">
                            <div className="rounded-lg bg-sky-50 p-4">
                                <h3 className="mb-2 font-semibold text-sky-900">Panduan Import Data Obat</h3>
                                <ul className="space-y-1 text-sm text-sky-800">
                                    <li>• Download template Excel/CSV terlebih dahulu</li>
                                    <li>• Isi data obat sesuai format yang disediakan</li>
                                    <li>• Upload file dengan format .xlsx atau .csv</li>
                                    <li>• Pastikan semua kolom wajib terisi dengan benar</li>
                                </ul>
                            </div>

                            <div>
                                <Label className="mb-2 block">Download Template</Label>
                                <Button type="button" variant="outline" onClick={handleDownloadTemplate} className="gap-2">
                                    <Download className="size-4" />
                                    Download Template Excel
                                </Button>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="import_file">Upload File</Label>
                                <Input id="import_file" type="file" accept=".xlsx,.xls,.csv" onChange={handleFileChange} className="flex-1" />
                                {importFile && <p className="text-sm text-muted-foreground">File terpilih: {importFile.name}</p>}
                            </div>

                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="outline" onClick={() => router.visit('/obat')}>
                                    <X className="mr-2 size-4" />
                                    Batal
                                </Button>
                                <Button type="button" onClick={handleImport} disabled={!importFile || importing}>
                                    <Upload className="mr-2 size-4" />
                                    {importing ? 'Mengimport...' : 'Import Data'}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
