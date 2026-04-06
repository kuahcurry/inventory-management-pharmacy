import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Pencil, Package, User, Calendar, CreditCard } from 'lucide-react';

interface ResepDetail {
    id: number;
    obat: {
        nama_obat: string;
        kode_obat: string;
        satuan?: {
            nama_satuan: string;
        };
    };
    jumlah: number;
    dosis?: string;
    aturan_pakai?: string;
    catatan?: string;
}

interface Resep {
    id: number;
    nomor_resep: string;
    tanggal_resep: string;
    nomor_referensi: string;
    nama_pelanggan: string;
    nama_dokter?: string;
    kategori_pelanggan: string;
    metode_pembayaran: string;
    status: string;
    tanggal_ditebus?: string;
    processed_by?: {
        name: string;
    };
    processed_at?: string;
    catatan?: string;
    details: ResepDetail[];
}

interface Props {
    resep: Resep;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Resep', href: '/resep' },
    { title: 'Detail Resep', href: '#' },
];

export default function ResepShow({ resep }: Props) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
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

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'pending':
                return <Badge variant="secondary">Pending</Badge>;
            case 'processed':
                return <Badge variant="default">Diproses</Badge>;
            case 'completed':
                return <Badge variant="default" className="bg-green-600">Selesai</Badge>;
            case 'cancelled':
                return <Badge variant="destructive">Dibatalkan</Badge>;
            default:
                return <Badge variant="outline">{status}</Badge>;
        }
    };

    const getKategoriPelangganLabel = (kategori: string) => {
        switch (kategori) {
            case 'reguler': return 'Reguler';
            case 'pelanggan_rutin': return 'Pelanggan Rutin';
            case 'rujukan_dokter': return 'Rujukan Dokter';
            default: return kategori;
        }
    };

    const getMetodePembayaranLabel = (metode: string) => {
        switch (metode) {
            case 'tunai_umum': return 'Tunai / Umum';
            case 'non_tunai': return 'Non-Tunai';
            case 'asuransi_rekanan': return 'Asuransi / Rekanan';
            default: return metode;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Resep ${resep.nomor_resep}`} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Detail Resep</h1>
                        <p className="text-sm text-muted-foreground">
                            Informasi lengkap resep pelanggan
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {resep.status === 'pending' && (
                            <Button asChild>
                                <Link href={`/resep/${resep.id}/edit`}>
                                    <Pencil className="mr-2 size-4" />
                                    Edit
                                </Link>
                            </Button>
                        )}
                        <Button variant="outline" asChild>
                            <Link href="/resep">
                                <ArrowLeft className="mr-2 size-4" />
                                Kembali
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Informasi Umum */}
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <Package className="size-5 text-muted-foreground" />
                            <h3 className="text-lg font-semibold">Informasi Resep</h3>
                        </div>
                        
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Nomor Resep:</span>
                                <span className="font-medium">{resep.nomor_resep}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Tanggal:</span>
                                <span>{formatDate(resep.tanggal_resep)}</span>
                            </div>
                            {resep.tanggal_ditebus && (
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Tanggal Ditebus:</span>
                                    <span>{formatDate(resep.tanggal_ditebus)}</span>
                                </div>
                            )}
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Status:</span>
                                {getStatusBadge(resep.status)}
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <User className="size-5 text-muted-foreground" />
                            <h3 className="text-lg font-semibold">Informasi Pasien</h3>
                        </div>
                        
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">No. Referensi:</span>
                                <span className="font-medium">{resep.nomor_referensi}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Nama Pelanggan:</span>
                                <span className="font-medium">{resep.nama_pelanggan}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Dokter:</span>
                                <span>{resep.nama_dokter || '-'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Jenis Pelanggan:</span>
                                <span>{getKategoriPelangganLabel(resep.kategori_pelanggan)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <CreditCard className="size-5 text-muted-foreground" />
                            <h3 className="text-lg font-semibold">Pembayaran</h3>
                        </div>
                        
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Cara Bayar:</span>
                                <Badge variant="outline">
                                    <CreditCard className="mr-1 size-3" />
                                    {getMetodePembayaranLabel(resep.metode_pembayaran)}
                                </Badge>
                            </div>
                        </div>
                    </div>

                    {(resep.processed_by || resep.catatan) && (
                        <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="size-5 text-muted-foreground" />
                                <h3 className="text-lg font-semibold">Informasi Tambahan</h3>
                            </div>
                            
                            <div className="space-y-3 text-sm">
                                {resep.processed_by && (
                                    <>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Diproses Oleh:</span>
                                            <span>{resep.processed_by.name}</span>
                                        </div>
                                        {resep.processed_at && (
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Waktu Proses:</span>
                                                <span>{formatDateTime(resep.processed_at)}</span>
                                            </div>
                                        )}
                                    </>
                                )}
                                {resep.catatan && (
                                    <div>
                                        <span className="text-muted-foreground block mb-1">Catatan:</span>
                                        <p className="text-sm">{resep.catatan}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Detail Obat */}
                <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 space-y-4">
                    <h3 className="text-lg font-semibold">Detail Obat</h3>
                    
                    <div className="rounded-lg border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Kode</TableHead>
                                    <TableHead>Nama Obat</TableHead>
                                    <TableHead className="text-right">Jumlah</TableHead>
                                    <TableHead>Dosis</TableHead>
                                    <TableHead>Aturan Pakai</TableHead>
                                    <TableHead>Catatan</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {resep.details.map((detail) => (
                                    <TableRow key={detail.id}>
                                        <TableCell className="font-mono text-sm">{detail.obat.kode_obat}</TableCell>
                                        <TableCell className="font-medium">{detail.obat.nama_obat}</TableCell>
                                        <TableCell className="text-right">
                                            {detail.jumlah} {detail.obat.satuan?.nama_satuan || 'unit'}
                                        </TableCell>
                                        <TableCell>{detail.dosis || '-'}</TableCell>
                                        <TableCell>{detail.aturan_pakai || '-'}</TableCell>
                                        <TableCell>{detail.catatan || '-'}</TableCell>
                                    </TableRow>
                                ))}
                                {resep.details.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                            Tidak ada detail obat
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
