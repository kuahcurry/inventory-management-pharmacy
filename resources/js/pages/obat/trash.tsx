import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { RotateCcw, Trash2, Trash } from 'lucide-react';
import { useMemo } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Data Obat', href: '/obat' },
    { title: 'Trash', href: '#' },
];

interface TrashedObat {
    id: number;
    kode_obat: string;
    nama_obat: string;
    deleted_at: string;
    batches_count: number;
    kategori?: { nama_kategori: string };
    jenis?: { nama_jenis: string };
    satuan?: { nama_satuan: string };
}

interface TrashedBatch {
    id: number;
    nomor_batch: string;
    deleted_at: string;
    obat: { nama_obat: string; kode_obat: string; kategori?: { nama_kategori: string }; satuan?: { nama_satuan: string } };
    supplier?: { nama_supplier: string };
}

interface Props {
    obats: { data: TrashedObat[]; current_page: number; last_page: number; total: number };
    batches: { data: TrashedBatch[]; current_page: number; last_page: number; total: number };
}

type PageToken = number | 'dots-left' | 'dots-right';

function getPageTokens(currentPage: number, lastPage: number): PageToken[] {
    if (lastPage <= 7) {
        return Array.from({ length: lastPage }, (_, i) => i + 1);
    }

    const tokens: PageToken[] = [1];
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(lastPage - 1, currentPage + 1);

    if (start > 2) tokens.push('dots-left');
    for (let page = start; page <= end; page += 1) tokens.push(page);
    if (end < lastPage - 1) tokens.push('dots-right');

    tokens.push(lastPage);
    return tokens;
}

export default function ObatTrash({ obats, batches }: Props) {
    const obatPageTokens = useMemo(() => getPageTokens(obats.current_page, obats.last_page), [obats.current_page, obats.last_page]);
    const batchPageTokens = useMemo(() => getPageTokens(batches.current_page, batches.last_page), [batches.current_page, batches.last_page]);

    const restoreObat = (id: number, name: string) => {
        if (confirm(`Pulihkan obat "${name}"?`)) {
            router.post(`/obat/${id}/restore`);
        }
    };

    const forceDeleteObat = (id: number, name: string) => {
        if (confirm(`Hapus permanen obat "${name}"? Tindakan ini tidak bisa dibatalkan.`)) {
            router.delete(`/obat/${id}/force`);
        }
    };

    const restoreBatch = (id: number, batchNo: string) => {
        if (confirm(`Pulihkan batch "${batchNo}"?`)) {
            router.post(`/obat/batch/${id}/restore`);
        }
    };

    const forceDeleteBatch = (id: number, batchNo: string) => {
        if (confirm(`Hapus permanen batch "${batchNo}"? Tindakan ini tidak bisa dibatalkan.`)) {
            router.delete(`/obat/batch/${id}/force`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Trash Obat" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Trash Obat</h1>
                        <p className="text-sm text-muted-foreground">Pulihkan atau hapus permanen obat dan batch yang sudah dihapus.</p>
                    </div>
                    <Button asChild variant="outline">
                        <Link href="/obat">
                            <Trash className="mr-2 size-4" />
                            Kembali ke Data Obat
                        </Link>
                    </Button>
                </div>

                <section className="rounded-xl border bg-card">
                    <div className="border-b px-4 py-3 font-semibold">Obat Terhapus</div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b bg-muted/30 text-left text-sm">
                                    <th className="p-3">Kode</th>
                                    <th className="p-3">Nama</th>
                                    <th className="p-3">Kategori</th>
                                    <th className="p-3">Batch</th>
                                    <th className="p-3">Dihapus</th>
                                    <th className="p-3 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {obats.data.length === 0 ? (
                                    <tr><td className="p-6 text-center text-sm text-muted-foreground" colSpan={6}>Tidak ada obat terhapus</td></tr>
                                ) : obats.data.map((item) => (
                                    <tr key={item.id} className="border-b last:border-0">
                                        <td className="p-3 font-mono text-sm">{item.kode_obat}</td>
                                        <td className="p-3 text-sm font-medium">{item.nama_obat}</td>
                                        <td className="p-3 text-sm text-muted-foreground">{item.kategori?.nama_kategori || '-'}</td>
                                        <td className="p-3 text-sm text-muted-foreground">{item.batches_count}</td>
                                        <td className="p-3 text-sm text-muted-foreground">{new Date(item.deleted_at).toLocaleString('id-ID')}</td>
                                        <td className="p-3">
                                            <div className="flex justify-end gap-2">
                                                <Button type="button" size="sm" variant="outline" onClick={() => restoreObat(item.id, item.nama_obat)}><RotateCcw className="mr-2 size-4" />Pulihkan</Button>
                                                <Button type="button" size="sm" variant="destructive" onClick={() => forceDeleteObat(item.id, item.nama_obat)}><Trash2 className="mr-2 size-4" />Hapus Permanen</Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {obats.last_page > 1 && (
                        <div className="flex items-center justify-between border-t px-4 py-3">
                            <p className="text-sm text-muted-foreground">Halaman {obats.current_page} dari {obats.last_page} • {obats.total} data</p>
                            <div className="flex items-center gap-2">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    disabled={obats.current_page <= 1}
                                    onClick={() => router.get('/obat/trash', { obat_page: Math.max(1, obats.current_page - 1), batch_page: batches.current_page }, { preserveState: true })}
                                >
                                    Prev
                                </Button>
                                {obatPageTokens.map((token, index) => typeof token === 'number' ? (
                                    <Button
                                        key={`obat-trash-${token}`}
                                        size="sm"
                                        variant={token === obats.current_page ? 'default' : 'outline'}
                                        onClick={() => router.get('/obat/trash', { obat_page: token, batch_page: batches.current_page }, { preserveState: true })}
                                    >
                                        {token}
                                    </Button>
                                ) : (
                                    <span key={`obat-trash-dots-${index}`} className="px-2 text-sm text-muted-foreground">...</span>
                                ))}
                                <Button
                                    size="sm"
                                    variant="outline"
                                    disabled={obats.current_page >= obats.last_page}
                                    onClick={() => router.get('/obat/trash', { obat_page: Math.min(obats.last_page, obats.current_page + 1), batch_page: batches.current_page }, { preserveState: true })}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    )}
                </section>

                <section className="rounded-xl border bg-card">
                    <div className="border-b px-4 py-3 font-semibold">Batch Terhapus</div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b bg-muted/30 text-left text-sm">
                                    <th className="p-3">Batch</th>
                                    <th className="p-3">Obat</th>
                                    <th className="p-3">Supplier</th>
                                    <th className="p-3">Dihapus</th>
                                    <th className="p-3 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {batches.data.length === 0 ? (
                                    <tr><td className="p-6 text-center text-sm text-muted-foreground" colSpan={5}>Tidak ada batch terhapus</td></tr>
                                ) : batches.data.map((batch) => (
                                    <tr key={batch.id} className="border-b last:border-0">
                                        <td className="p-3 font-mono text-sm">{batch.nomor_batch}</td>
                                        <td className="p-3 text-sm">
                                            <div className="font-medium">{batch.obat.nama_obat}</div>
                                            <div className="text-xs text-muted-foreground">{batch.obat.kode_obat}</div>
                                        </td>
                                        <td className="p-3 text-sm text-muted-foreground">{batch.supplier?.nama_supplier || '-'}</td>
                                        <td className="p-3 text-sm text-muted-foreground">{new Date(batch.deleted_at).toLocaleString('id-ID')}</td>
                                        <td className="p-3">
                                            <div className="flex justify-end gap-2">
                                                <Button type="button" size="sm" variant="outline" onClick={() => restoreBatch(batch.id, batch.nomor_batch)}><RotateCcw className="mr-2 size-4" />Pulihkan</Button>
                                                <Button type="button" size="sm" variant="destructive" onClick={() => forceDeleteBatch(batch.id, batch.nomor_batch)}><Trash2 className="mr-2 size-4" />Hapus Permanen</Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {batches.last_page > 1 && (
                        <div className="flex items-center justify-between border-t px-4 py-3">
                            <p className="text-sm text-muted-foreground">Halaman {batches.current_page} dari {batches.last_page} • {batches.total} data</p>
                            <div className="flex items-center gap-2">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    disabled={batches.current_page <= 1}
                                    onClick={() => router.get('/obat/trash', { obat_page: obats.current_page, batch_page: Math.max(1, batches.current_page - 1) }, { preserveState: true })}
                                >
                                    Prev
                                </Button>
                                {batchPageTokens.map((token, index) => typeof token === 'number' ? (
                                    <Button
                                        key={`batch-trash-${token}`}
                                        size="sm"
                                        variant={token === batches.current_page ? 'default' : 'outline'}
                                        onClick={() => router.get('/obat/trash', { obat_page: obats.current_page, batch_page: token }, { preserveState: true })}
                                    >
                                        {token}
                                    </Button>
                                ) : (
                                    <span key={`batch-trash-dots-${index}`} className="px-2 text-sm text-muted-foreground">...</span>
                                ))}
                                <Button
                                    size="sm"
                                    variant="outline"
                                    disabled={batches.current_page >= batches.last_page}
                                    onClick={() => router.get('/obat/trash', { obat_page: obats.current_page, batch_page: Math.min(batches.last_page, batches.current_page + 1) }, { preserveState: true })}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </AppLayout>
    );
}