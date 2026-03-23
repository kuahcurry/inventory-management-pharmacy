import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Save, X } from 'lucide-react';
import { useMemo, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Data Obat', href: '/obat' },
    { title: 'Edit Obat', href: '#' },
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

interface Obat {
    id: number;
    kode_obat: string;
    nama_obat: string;
    nama_generik?: string;
    nama_brand?: string;
    kategori_id: number;
    jenis_id: number;
    satuan_id: number;
    stok_minimum: number;
    harga_beli: number;
    harga_jual: number;
    lokasi_penyimpanan?: string;
    deskripsi?: string;
    efek_samping?: string;
    indikasi?: string;
    kontraindikasi?: string;
}

interface EditProps {
    obat: Obat;
    kategori: KategoriObat[];
    jenis: JenisObat[];
    satuan: SatuanObat[];
}

type InfoTab = 'indikasi' | 'kontraindikasi' | 'efek_samping' | 'deskripsi';

const infoTabs: Array<{ key: InfoTab; label: string }> = [
    { key: 'indikasi', label: 'Indikasi' },
    { key: 'kontraindikasi', label: 'Kontraindikasi' },
    { key: 'efek_samping', label: 'Efek Samping' },
    { key: 'deskripsi', label: 'Deskripsi' },
];

export default function EditObat({ obat, kategori, jenis, satuan }: EditProps) {
    const [activeInfoTab, setActiveInfoTab] = useState<InfoTab>('indikasi');

    const { data, setData, put, processing, errors } = useForm({
        kode_obat: obat.kode_obat,
        nama_obat: obat.nama_obat,
        nama_generik: obat.nama_generik || '',
        nama_brand: obat.nama_brand || '',
        kategori_id: obat.kategori_id.toString(),
        jenis_id: obat.jenis_id.toString(),
        satuan_id: obat.satuan_id.toString(),
        stok_minimum: obat.stok_minimum.toString(),
        harga_beli: obat.harga_beli.toString(),
        harga_jual: obat.harga_jual.toString(),
        lokasi_penyimpanan: obat.lokasi_penyimpanan || '',
        deskripsi: obat.deskripsi || '',
        efek_samping: obat.efek_samping || '',
        indikasi: obat.indikasi || '',
        kontraindikasi: obat.kontraindikasi || '',
    });

    const hargaBeli = Number(data.harga_beli || 0);
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
        put(`/obat/${obat.id}`);
    };

    const infoValue = data[activeInfoTab] ?? '';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Obat" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="rounded-xl border border-slate-300 bg-gradient-to-r from-slate-100 via-white to-slate-100 p-4">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">Edit Obat</h1>
                    <p className="text-sm text-slate-600">Layout panel disetarakan dengan form operasional untuk update data lebih cepat.</p>
                </div>

                <form onSubmit={handleSubmit} className="rounded-xl border border-slate-300 bg-card p-4 shadow-sm">
                    <div className="grid gap-4 lg:grid-cols-12">
                        <section className="space-y-3 rounded-lg border border-slate-300 p-3 lg:col-span-7">
                            <h2 className="border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">Barang</h2>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <Label htmlFor="kode_obat">Kode *</Label>
                                    <Input id="kode_obat" value={data.kode_obat} onChange={(e) => setData('kode_obat', e.target.value)} required />
                                    {errors.kode_obat && <p className="text-xs text-destructive">{errors.kode_obat}</p>}
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="nama_obat">Nama *</Label>
                                    <Input id="nama_obat" value={data.nama_obat} onChange={(e) => setData('nama_obat', e.target.value)} required />
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
                                    <Select value={data.kategori_id} onValueChange={(v) => setData('kategori_id', v)} required>
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
                                    <Select value={data.jenis_id} onValueChange={(v) => setData('jenis_id', v)} required>
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
                                    <Select value={data.satuan_id} onValueChange={(v) => setData('satuan_id', v)} required>
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
                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <Label htmlFor="stok_minimum">Stok Min. *</Label>
                                    <Input id="stok_minimum" type="number" value={data.stok_minimum} onChange={(e) => setData('stok_minimum', e.target.value)} required />
                                    {errors.stok_minimum && <p className="text-xs text-destructive">{errors.stok_minimum}</p>}
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="lokasi_penyimpanan">Lokasi</Label>
                                    <Input id="lokasi_penyimpanan" value={data.lokasi_penyimpanan} onChange={(e) => setData('lokasi_penyimpanan', e.target.value)} />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="harga_beli">Harga Beli</Label>
                                    <Input id="harga_beli" type="number" step="0.01" value={data.harga_beli} onChange={(e) => setData('harga_beli', e.target.value)} />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="harga_jual">Harga Jual</Label>
                                    <Input id="harga_jual" type="number" step="0.01" value={data.harga_jual} onChange={(e) => setData('harga_jual', e.target.value)} />
                                </div>
                            </div>

                            <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                                <div className="text-muted-foreground">Estimasi Laba Saat Ini</div>
                                <div className={`font-semibold ${estimasiLaba.nominal < 0 ? 'text-red-600' : 'text-emerald-700'}`}>
                                    Rp {Math.abs(estimasiLaba.nominal).toLocaleString('id-ID')}
                                </div>
                                <div className="text-xs text-muted-foreground">{estimasiLaba.persen.toFixed(1)}%</div>
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
                            {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
