import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Eye, Package, Plus, Pencil, Search, Trash, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Data Obat', href: '/obat' },
];

interface Obat {
    id: number;
    kode_obat: string;
    nama_obat: string;
    stok_total: number;
    stok_minimum: number;
    harga_jual?: number;
    kategori?: { nama_kategori: string };
    jenis?: { nama_jenis: string };
    satuan?: { nama_satuan: string };
}

interface BatchRow {
    id: number;
    nomor_batch: string;
    tanggal_masuk: string;
    tanggal_expired: string;
    stok_awal: number;
    stok_tersedia: number;
    harga_beli: number;
    obat: {
        id: number;
        nama_obat: string;
        kode_obat: string;
        kategori?: { nama_kategori: string };
        satuan?: { nama_satuan: string };
    };
    supplier?: { nama_supplier: string };
}

interface ObatIndexProps {
    obats: { data: Obat[]; total: number };
    batches: {
        data: BatchRow[];
        current_page: number;
        last_page: number;
        total: number;
        per_page?: number;
    };
    filters: { search?: string };
}

type PageToken = number | 'dots-left' | 'dots-right';

function getPageTokens(currentPage: number, lastPage: number): PageToken[] {
    if (lastPage <= 7) return Array.from({ length: lastPage }, (_, i) => i + 1);

    const tokens: PageToken[] = [1];
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(lastPage - 1, currentPage + 1);

    if (start > 2) tokens.push('dots-left');
    for (let page = start; page <= end; page += 1) tokens.push(page);
    if (end < lastPage - 1) tokens.push('dots-right');
    tokens.push(lastPage);

    return tokens;
}

export default function ObatIndex({ obats, batches, filters }: ObatIndexProps) {
    const [search, setSearch] = useState(filters.search || '');

    const batchPerPage = batches.per_page ?? 10;
    const batchStartNo = (batches.current_page - 1) * batchPerPage + 1;
    const batchFrom = batches.total === 0 ? 0 : batchStartNo;
    const batchTo = batches.total === 0 ? 0 : batchStartNo + batches.data.length - 1;
    const batchPageTokens = useMemo(() => getPageTokens(batches.current_page, batches.last_page), [batches.current_page, batches.last_page]);

    const stokKritis = useMemo(() => obats.data.filter((item) => item.stok_total <= item.stok_minimum).length, [obats.data]);

    const totalBatchValue = useMemo(
        () => batches.data.reduce((sum, item) => sum + item.stok_tersedia * Number(item.harga_beli || 0), 0),
        [batches.data],
    );

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get('/obat', { search }, { preserveState: true });
    };

    const handleDeleteBatch = (id: number, batchNo: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus batch "${batchNo}"?`)) {
            router.delete(`/obat/batch/${id}`);
        }
    };

    const formatCurrency = (amount: number) =>
        new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Obat" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="rounded-xl border border-slate-300 bg-gradient-to-r from-slate-100 via-white to-slate-100 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-slate-800">Inventori Obat & Batch</h1>
                            <p className="text-sm text-slate-600">Satu tabel terpadu: setiap baris batch memuat informasi obat, supplier, stok, expired, dan harga beli.</p>
                        </div>
                        <div className="flex gap-2">
                            <Button asChild>
                                <Link href="/obat/create">
                                    <Plus className="mr-2 size-4" />
                                    Tambah Obat
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="/obat/trash">
                                    <Trash className="mr-2 size-4" />
                                    Trash
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid gap-3 md:grid-cols-4">
                    <div className="rounded-lg border border-slate-300 bg-card p-3">
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">Total Obat</div>
                        <div className="text-2xl font-bold text-slate-800">{obats.total}</div>
                    </div>
                    <div className="rounded-lg border border-sky-300 bg-sky-50 p-3">
                        <div className="text-xs uppercase tracking-wide text-sky-700">Total Batch</div>
                        <div className="text-2xl font-bold text-sky-800">{batches.total}</div>
                    </div>
                    <div className="rounded-lg border border-amber-300 bg-amber-50 p-3">
                        <div className="text-xs uppercase tracking-wide text-amber-700">Stok Kritis</div>
                        <div className="text-2xl font-bold text-amber-800">{stokKritis}</div>
                    </div>
                    <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-3">
                        <div className="text-xs uppercase tracking-wide text-emerald-700">Nilai Batch (Halaman Ini)</div>
                        <div className="text-xl font-bold text-emerald-800">{formatCurrency(totalBatchValue)}</div>
                    </div>
                </div>

                <form onSubmit={handleSearch} className="flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Cari nama obat, kode obat, supplier, atau nomor batch..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-lg border border-sidebar-border bg-card py-2 pl-10 pr-4 text-sm"
                        />
                    </div>
                    <Button type="submit">Cari</Button>
                </form>

                <div className="rounded-xl border border-slate-300 bg-card">
                    <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">Tabel Inventori Terpadu</div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="border-b border-sidebar-border/70">
                                <tr className="bg-slate-50/60">
                                    <th className="w-16 p-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-600">No.</th>
                                    <th className="p-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Obat</th>
                                    <th className="p-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Kategori</th>
                                    <th className="p-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Supplier</th>
                                    <th className="p-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Batch ID</th>
                                    <th className="p-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-600">Stok</th>
                                    <th className="p-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Expired</th>
                                    <th className="p-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-600">Harga Beli</th>
                                    <th className="p-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-600">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {batches.data.length > 0 ? (
                                    batches.data.map((batch, index) => {
                                        const expiring = new Date(batch.tanggal_expired).getTime() <= new Date().getTime() + 1000 * 60 * 60 * 24 * 30;

                                        return (
                                            <tr key={batch.id} className="border-b border-sidebar-border/50 last:border-0 hover:bg-slate-50/60">
                                                <td className="p-3 text-right text-sm font-medium text-slate-700">{batchStartNo + index}</td>
                                                <td className="p-3 text-sm">
                                                    <div className="font-medium text-slate-800">{batch.obat.nama_obat}</div>
                                                    <div className="text-xs text-muted-foreground">{batch.obat.kode_obat}</div>
                                                </td>
                                                <td className="p-3 text-sm text-muted-foreground">{batch.obat.kategori?.nama_kategori || '-'}</td>
                                                <td className="p-3 text-sm text-muted-foreground">{batch.supplier?.nama_supplier || '-'}</td>
                                                <td className="p-3 text-sm font-mono text-slate-700">{batch.nomor_batch}</td>
                                                <td className="p-3 text-right text-sm font-semibold text-slate-800">
                                                    {batch.stok_tersedia} / {batch.stok_awal} {batch.obat.satuan?.nama_satuan || ''}
                                                </td>
                                                <td className="p-3 text-sm">
                                                    <span className={expiring ? 'font-medium text-amber-700' : 'text-muted-foreground'}>
                                                        {new Date(batch.tanggal_expired).toLocaleDateString('id-ID')}
                                                    </span>
                                                </td>
                                                <td className="p-3 text-right text-sm font-semibold text-emerald-700">{formatCurrency(Number(batch.harga_beli || 0))}</td>
                                                <td className="p-3 text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <Button variant="ghost" size="sm" asChild>
                                                            <Link href={`/obat/batch/${batch.id}`}>
                                                                <Eye className="size-4" />
                                                            </Link>
                                                        </Button>
                                                        <Button variant="ghost" size="sm" asChild>
                                                            <Link href={`/obat/batch/${batch.id}/edit`}>
                                                                <Pencil className="size-4" />
                                                            </Link>
                                                        </Button>
                                                        <Button type="button" variant="ghost" size="sm" onClick={() => handleDeleteBatch(batch.id, batch.nomor_batch)}>
                                                            <Trash2 className="size-4 text-destructive" />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan={9} className="p-8 text-center text-sm text-muted-foreground">
                                            <Package className="mx-auto mb-2 size-8" />
                                            Tidak ada data batch inventori
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {batches.last_page > 1 && (
                        <div className="flex items-center justify-between border-t border-sidebar-border/70 p-4">
                            <p className="text-sm text-muted-foreground">Menampilkan {batchFrom}-{batchTo} dari {batches.total} batch</p>
                            <div className="flex max-w-[58vw] items-center gap-2 overflow-x-auto pb-1 sm:max-w-none">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    disabled={batches.current_page <= 1}
                                    onClick={() => router.get('/obat', { search, batch_page: Math.max(1, batches.current_page - 1) }, { preserveState: true })}
                                >
                                    Prev
                                </Button>
                                {batchPageTokens.map((token, index) =>
                                    typeof token === 'number' ? (
                                        <Button
                                            key={`batch-page-${token}`}
                                            size="sm"
                                            variant={token === batches.current_page ? 'default' : 'outline'}
                                            onClick={() => router.get('/obat', { search, batch_page: token }, { preserveState: true })}
                                        >
                                            {token}
                                        </Button>
                                    ) : (
                                        <span key={`batch-${token}-${index}`} className="px-2 py-1 text-sm text-muted-foreground">
                                            ...
                                        </span>
                                    ),
                                )}
                                <Button
                                    size="sm"
                                    variant="outline"
                                    disabled={batches.current_page >= batches.last_page}
                                    onClick={() => router.get('/obat', { search, batch_page: Math.min(batches.last_page, batches.current_page + 1) }, { preserveState: true })}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
