import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { FileText, Plus, Eye, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Resep', href: '/resep' },
];

interface ResepDetail {
    id: number;
    obat: {
        nama_obat: string;
    };
    jumlah: number;
    dosis?: string;
    aturan_pakai?: string;
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
    details: ResepDetail[];
}

interface Props {
    resep: {
        data: Resep[];
        current_page: number;
        last_page: number;
        prev_page_url: string | null;
        next_page_url: string | null;
    };
}

export default function ResepIndex({ resep }: Props) {
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const handleDelete = () => {
        if (deleteId) {
            router.delete(`/resep/${deleteId}`, {
                onSuccess: () => setDeleteId(null),
            });
        }
    };

    const getStatusBadge = (status: string) => {
        const variants = {
            pending: { label: 'Pending', variant: 'secondary' as const },
            processed: { label: 'Diproses', variant: 'default' as const },
            completed: { label: 'Selesai', variant: 'default' as const },
            cancelled: { label: 'Dibatalkan', variant: 'destructive' as const },
        };
        const config = variants[status as keyof typeof variants] || variants.pending;
        return <Badge variant={config.variant}>{config.label}</Badge>;
    };

    const getKategoriPelangganLabel = (kategori: string) => {
        const labels = {
            reguler: 'Reguler',
            pelanggan_rutin: 'Pelanggan Rutin',
            rujukan_dokter: 'Rujukan Dokter',
        };
        return labels[kategori as keyof typeof labels] || kategori;
    };

    const getMetodePembayaranLabel = (metode: string) => {
        const labels = {
            tunai_umum: 'Tunai / Umum',
            non_tunai: 'Non-Tunai',
            asuransi_rekanan: 'Asuransi / Rekanan',
        };
        return labels[metode as keyof typeof labels] || metode;
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Resep" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Resep Obat</h1>
                        <p className="text-sm text-muted-foreground">
                            Kelola resep pelanggan apotek retail
                        </p>
                    </div>
                    <Button asChild>
                        <Link href="/resep/create">
                            <Plus className="mr-2 size-4" />
                            Tambah Resep
                        </Link>
                    </Button>
                </div>

                <div className="rounded-xl border border-sidebar-border/70 bg-card">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>No. Resep</TableHead>
                                <TableHead>No. Referensi</TableHead>
                                <TableHead>Pelanggan</TableHead>
                                <TableHead>Dokter</TableHead>
                                <TableHead>Tanggal</TableHead>
                                <TableHead>Kategori</TableHead>
                                <TableHead>Metode Bayar</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {resep.data.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={9} className="text-center py-8">
                                        <FileText className="mx-auto mb-2 size-12 text-muted-foreground" />
                                        <p className="text-muted-foreground">Belum ada data resep</p>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                resep.data.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">{item.nomor_resep}</TableCell>
                                        <TableCell>{item.nomor_referensi}</TableCell>
                                        <TableCell>{item.nama_pelanggan}</TableCell>
                                        <TableCell>{item.nama_dokter || '-'}</TableCell>
                                        <TableCell>{formatDate(item.tanggal_resep)}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{getKategoriPelangganLabel(item.kategori_pelanggan)}</Badge>
                                        </TableCell>
                                        <TableCell>{getMetodePembayaranLabel(item.metode_pembayaran)}</TableCell>
                                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="ghost" size="sm" asChild>
                                                    <Link href={`/resep/${item.id}`}>
                                                        <Eye className="size-4" />
                                                    </Link>
                                                </Button>
                                                {item.status === 'pending' && (
                                                    <>
                                                        <Button variant="ghost" size="sm" asChild>
                                                            <Link href={`/resep/${item.id}/edit`}>
                                                                <Pencil className="size-4" />
                                                            </Link>
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => setDeleteId(item.id)}
                                                        >
                                                            <Trash2 className="size-4" />
                                                        </Button>
                                                    </>
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>

                    {resep.last_page > 1 && (
                        <div className="flex items-center justify-between p-4 border-t">
                            <div className="text-sm text-muted-foreground">
                                Halaman {resep.current_page} dari {resep.last_page}
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    disabled={!resep.prev_page_url}
                                    onClick={() => resep.prev_page_url && router.visit(resep.prev_page_url)}
                                >
                                    <ChevronLeft className="size-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    disabled={!resep.next_page_url}
                                    onClick={() => resep.next_page_url && router.visit(resep.next_page_url)}
                                >
                                    <ChevronRight className="size-4" />
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Dialog open={deleteId !== null} onOpenChange={() => setDeleteId(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Konfirmasi Hapus</DialogTitle>
                        <DialogDescription>
                            Apakah Anda yakin ingin menghapus resep ini? Tindakan ini tidak dapat dibatalkan.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setDeleteId(null)}>
                            Batal
                        </Button>
                        <Button variant="destructive" onClick={handleDelete}>
                            Hapus
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </AppLayout>
    );
}

