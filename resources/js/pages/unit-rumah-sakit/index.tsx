import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import { Building2, Plus, Trash2 } from 'lucide-react';
import type { FormEvent } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Unit Rumah Sakit', href: '/unit-rumah-sakit' },
];

interface UnitItem {
    id: number;
    kode_unit: string;
    nama_unit: string;
    lokasi?: string | null;
    penanggung_jawab?: string | null;
    no_telepon?: string | null;
    is_active: boolean;
}

interface Props {
    units: {
        data: UnitItem[];
    };
}

export default function UnitRumahSakitIndex({ units }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        kode_unit: '',
        nama_unit: '',
        lokasi: '',
        penanggung_jawab: '',
        no_telepon: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/unit-rumah-sakit', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    const handleDelete = (id: number) => {
        router.delete(`/unit-rumah-sakit/${id}`, {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Unit Rumah Sakit" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Unit Rumah Sakit</h1>
                        <p className="text-sm text-muted-foreground">
                            Kelola unit dan departemen rumah sakit
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="rounded-xl border border-sidebar-border/70 bg-card p-4">
                    <div className="mb-4 flex items-center gap-2">
                        <Plus className="size-4" />
                        <h2 className="text-lg font-semibold">Tambah Unit</h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="grid gap-2">
                            <Label htmlFor="kode_unit">Kode Unit</Label>
                            <Input id="kode_unit" value={data.kode_unit} onChange={(e) => setData('kode_unit', e.target.value)} required />
                            {errors.kode_unit && <p className="text-sm text-destructive">{errors.kode_unit}</p>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="nama_unit">Nama Unit</Label>
                            <Input id="nama_unit" value={data.nama_unit} onChange={(e) => setData('nama_unit', e.target.value)} required />
                            {errors.nama_unit && <p className="text-sm text-destructive">{errors.nama_unit}</p>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="lokasi">Lokasi</Label>
                            <Input id="lokasi" value={data.lokasi} onChange={(e) => setData('lokasi', e.target.value)} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="penanggung_jawab">Penanggung Jawab</Label>
                            <Input id="penanggung_jawab" value={data.penanggung_jawab} onChange={(e) => setData('penanggung_jawab', e.target.value)} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="no_telepon">No. Telepon</Label>
                            <Input id="no_telepon" value={data.no_telepon} onChange={(e) => setData('no_telepon', e.target.value)} />
                        </div>
                    </div>

                    <div className="mt-4">
                        <Button type="submit" disabled={processing}>
                            <Plus className="mr-2 size-4" />
                            {processing ? 'Menyimpan...' : 'Simpan Unit'}
                        </Button>
                    </div>
                </form>

                <div className="rounded-xl border border-sidebar-border/70 bg-card p-4">
                    <div className="mb-4 flex items-center gap-2">
                        <Building2 className="size-4" />
                        <h2 className="text-lg font-semibold">Daftar Unit</h2>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Kode</TableHead>
                                <TableHead>Nama Unit</TableHead>
                                <TableHead>Lokasi</TableHead>
                                <TableHead>PJ</TableHead>
                                <TableHead>No. Telepon</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {units.data.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="py-8 text-center text-muted-foreground">
                                        Belum ada data unit.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                units.data.map((unit) => (
                                    <TableRow key={unit.id}>
                                        <TableCell>{unit.kode_unit}</TableCell>
                                        <TableCell>{unit.nama_unit}</TableCell>
                                        <TableCell>{unit.lokasi || '-'}</TableCell>
                                        <TableCell>{unit.penanggung_jawab || '-'}</TableCell>
                                        <TableCell>{unit.no_telepon || '-'}</TableCell>
                                        <TableCell>{unit.is_active ? 'Aktif' : 'Nonaktif'}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm" onClick={() => handleDelete(unit.id)}>
                                                <Trash2 className="size-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
