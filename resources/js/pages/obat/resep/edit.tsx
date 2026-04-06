import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Save, X, Plus, Trash2 } from 'lucide-react';
import type { FormEventHandler } from 'react';

interface Obat {
    id: number;
    kode_obat: string;
    nama_obat: string;
    kategori?: { nama_kategori: string };
    jenis?: { nama_jenis: string };
    satuan?: { nama_satuan: string };
    stok_total: number;
}

interface ResepDetail {
    id: number;
    resep_id: number;
    obat_id: number;
    jumlah: number;
    dosis: string | null;
    aturan_pakai: string | null;
    catatan: string | null;
    is_dispensed: boolean;
    obat?: Obat;
}

interface Resep {
    id: number;
    nomor_resep: string;
    nomor_referensi: string;
    nama_pelanggan: string;
    nama_dokter: string;
    tanggal_resep: string;
    kategori_pelanggan: string;
    metode_pembayaran: string;
    status: string;
    processed_by: number | null;
    processed_at: string | null;
    catatan: string | null;
    details: ResepDetail[];
}

interface Props {
    resep: Resep;
    obat: Obat[];
}

interface DetailItem {
    obat_id: string;
    jumlah: string;
    dosis: string;
    aturan_pakai: string;
    catatan: string;
}

export default function ResepEdit({ resep, obat }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Resep', href: '/resep' },
        { title: 'Edit Resep', href: `/resep/${resep.id}/edit` },
    ];

    const { data, setData, put, processing, errors } = useForm({
        nomor_referensi: resep.nomor_referensi || '',
        nama_pelanggan: resep.nama_pelanggan || '',
        nama_dokter: resep.nama_dokter || '',
        tanggal_resep: resep.tanggal_resep || new Date().toISOString().split('T')[0],
        kategori_pelanggan: resep.kategori_pelanggan || 'reguler',
        metode_pembayaran: resep.metode_pembayaran || 'tunai_umum',
        catatan: resep.catatan || '',
        details: resep.details.map(detail => ({
            obat_id: detail.obat_id.toString(),
            jumlah: detail.jumlah.toString(),
            dosis: detail.dosis || '',
            aturan_pakai: detail.aturan_pakai || '',
            catatan: detail.catatan || '',
        })) as DetailItem[],
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        put(`/resep/${resep.id}`, {
            onSuccess: () => {
                console.log('Resep updated successfully');
            },
            onError: (errors) => {
                console.error('Validation errors:', errors);
            },
            preserveScroll: true,
        });
    };

    const addDetailRow = () => {
        setData('details', [
            ...data.details,
            {
                obat_id: '',
                jumlah: '',
                dosis: '',
                aturan_pakai: '',
                catatan: '',
            },
        ]);
    };

    const removeDetailRow = (index: number) => {
        const newDetails = data.details.filter((_, i) => i !== index);
        setData('details', newDetails);
    };

    const updateDetail = (index: number, field: keyof DetailItem, value: string) => {
        const newDetails = [...data.details];
        newDetails[index][field] = value;
        setData('details', newDetails);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Resep" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Edit Resep Obat</h1>
                        <p className="text-sm text-muted-foreground">
                            Edit resep pelanggan {resep.nomor_resep}
                        </p>
                    </div>
                </div>

                {Object.keys(errors).length > 0 && (
                    <div className="max-w-5xl rounded-xl border border-destructive/50 bg-destructive/10 p-4">
                        <h4 className="font-semibold text-destructive mb-2">Terdapat kesalahan pada form:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-destructive">
                            {Object.entries(errors).map(([key, value]) => (
                                <li key={key}>{value}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="max-w-5xl space-y-6">
                    {/* Informasi Pasien */}
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Informasi Pasien</h3>
                            <p className="text-sm text-muted-foreground">
                                Data pelanggan dan informasi resep
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid gap-2">
                                <Label htmlFor="nomor_referensi">No. Referensi *</Label>
                                <Input
                                    id="nomor_referensi"
                                    value={data.nomor_referensi}
                                    onChange={(e) => setData('nomor_referensi', e.target.value)}
                                    placeholder="Contoh: No. HP / ID Member / No. Resep"
                                    required
                                />
                                {errors.nomor_referensi && (
                                    <p className="text-sm text-destructive">{errors.nomor_referensi}</p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="nama_pelanggan">Nama Pelanggan *</Label>
                                <Input
                                    id="nama_pelanggan"
                                    value={data.nama_pelanggan}
                                    onChange={(e) => setData('nama_pelanggan', e.target.value)}
                                    placeholder="Nama lengkap pelanggan"
                                    required
                                />
                                {errors.nama_pelanggan && (
                                    <p className="text-sm text-destructive">{errors.nama_pelanggan}</p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="nama_dokter">Nama Dokter (Opsional)</Label>
                                <Input
                                    id="nama_dokter"
                                    value={data.nama_dokter}
                                    onChange={(e) => setData('nama_dokter', e.target.value)}
                                    placeholder="Isi jika resep dari dokter"
                                />
                                {errors.nama_dokter && (
                                    <p className="text-sm text-destructive">{errors.nama_dokter}</p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="tanggal_resep">Tanggal Resep *</Label>
                                <Input
                                    id="tanggal_resep"
                                    type="date"
                                    value={data.tanggal_resep}
                                    onChange={(e) => setData('tanggal_resep', e.target.value)}
                                    required
                                />
                                {errors.tanggal_resep && (
                                    <p className="text-sm text-destructive">{errors.tanggal_resep}</p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="kategori_pelanggan">Kategori Pelanggan *</Label>
                                <Select value={data.kategori_pelanggan} onValueChange={(value) => setData('kategori_pelanggan', value)}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="reguler">Reguler</SelectItem>
                                        <SelectItem value="pelanggan_rutin">Pelanggan Rutin</SelectItem>
                                        <SelectItem value="rujukan_dokter">Rujukan Dokter</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.kategori_pelanggan && (
                                    <p className="text-sm text-destructive">{errors.kategori_pelanggan}</p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="metode_pembayaran">Metode Pembayaran *</Label>
                                <Select value={data.metode_pembayaran} onValueChange={(value) => setData('metode_pembayaran', value)}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="tunai_umum">Tunai / Umum</SelectItem>
                                        <SelectItem value="non_tunai">Non-Tunai</SelectItem>
                                        <SelectItem value="asuransi_rekanan">Asuransi / Rekanan</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.metode_pembayaran && (
                                    <p className="text-sm text-destructive">{errors.metode_pembayaran}</p>
                                )}
                            </div>

                            <div className="grid gap-2 md:col-span-2">
                                <Label htmlFor="catatan">Catatan</Label>
                                <Textarea
                                    id="catatan"
                                    value={data.catatan}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('catatan', e.target.value)}
                                    placeholder="Catatan tambahan (opsional)"
                                    rows={2}
                                />
                                {errors.catatan && (
                                    <p className="text-sm text-destructive">{errors.catatan}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Detail Obat */}
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Detail Obat</h3>
                                <p className="text-sm text-muted-foreground">
                                    Daftar obat yang diresepkan
                                </p>
                            </div>
                            <Button type="button" variant="outline" size="sm" onClick={addDetailRow}>
                                <Plus className="mr-2 size-4" />
                                Tambah Obat
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {data.details.map((detail, index) => (
                                <div key={index} className="border rounded-lg p-4 space-y-4 relative">
                                    {data.details.length > 1 && (
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="absolute top-2 right-2"
                                            onClick={() => removeDetailRow(index)}
                                        >
                                            <Trash2 className="size-4" />
                                        </Button>
                                    )}

                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="grid gap-2 md:col-span-2">
                                            <Label htmlFor={`obat_${index}`}>Obat *</Label>
                                            <Select
                                                value={detail.obat_id}
                                                onValueChange={(value) => updateDetail(index, 'obat_id', value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Pilih obat" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {obat.map((item) => (
                                                        <SelectItem key={item.id} value={item.id.toString()}>
                                                            {item.nama_obat} - Stok: {item.stok_total} ({item.kode_obat})
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors[`details.${index}.obat_id`] && (
                                                <p className="text-sm text-destructive">{errors[`details.${index}.obat_id`]}</p>
                                            )}
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor={`jumlah_${index}`}>Jumlah *</Label>
                                            <Input
                                                id={`jumlah_${index}`}
                                                type="number"
                                                min="1"
                                                value={detail.jumlah}
                                                onChange={(e) => updateDetail(index, 'jumlah', e.target.value)}
                                                placeholder="Jumlah"
                                                required
                                            />
                                            {errors[`details.${index}.jumlah`] && (
                                                <p className="text-sm text-destructive">{errors[`details.${index}.jumlah`]}</p>
                                            )}
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor={`dosis_${index}`}>Dosis</Label>
                                            <Input
                                                id={`dosis_${index}`}
                                                value={detail.dosis}
                                                onChange={(e) => updateDetail(index, 'dosis', e.target.value)}
                                                placeholder="Contoh: 500mg"
                                            />
                                            {errors[`details.${index}.dosis`] && (
                                                <p className="text-sm text-destructive">{errors[`details.${index}.dosis`]}</p>
                                            )}
                                        </div>

                                        <div className="grid gap-2 md:col-span-2">
                                            <Label htmlFor={`aturan_pakai_${index}`}>Aturan Pakai</Label>
                                            <Input
                                                id={`aturan_pakai_${index}`}
                                                value={detail.aturan_pakai}
                                                onChange={(e) => updateDetail(index, 'aturan_pakai', e.target.value)}
                                                placeholder="Contoh: 3 x sehari sesudah makan"
                                            />
                                            {errors[`details.${index}.aturan_pakai`] && (
                                                <p className="text-sm text-destructive">{errors[`details.${index}.aturan_pakai`]}</p>
                                            )}
                                        </div>

                                        <div className="grid gap-2 md:col-span-2">
                                            <Label htmlFor={`catatan_detail_${index}`}>Catatan</Label>
                                            <Input
                                                id={`catatan_detail_${index}`}
                                                value={detail.catatan}
                                                onChange={(e) => updateDetail(index, 'catatan', e.target.value)}
                                                placeholder="Catatan untuk obat ini (opsional)"
                                            />
                                            {errors[`details.${index}.catatan`] && (
                                                <p className="text-sm text-destructive">{errors[`details.${index}.catatan`]}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button type="submit" disabled={processing}>
                            <Save className="mr-2 size-4" />
                            {processing ? 'Menyimpan...' : 'Update Resep'}
                        </Button>
                        <Button type="button" variant="outline" asChild>
                            <Link href="/resep">
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
