import { Head, useForm, usePage } from '@inertiajs/react';
import { useEffect, useMemo, useState } from 'react';
import { Search, Trash2 } from 'lucide-react';

import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

type Batch = {
    id: number;
    nomor_batch: string;
    tanggal_expired: string;
    stok_tersedia: number;
    harga_beli: number;
    obat: {
        id: number;
        nama_obat: string;
        kode_obat: string;
        harga_jual: number;
        satuan?: { nama_satuan: string };
    };
};

type CartItem = {
    rowId: string;
    obat_id: number;
    batch_id: number;
    jumlah: number;
    harga_satuan: number;
};

type Props = {
    batches: Batch[];
    reseps: Array<{
        id: number;
        nomor_resep: string;
        nama_pelanggan: string;
        nama_dokter: string;
        tanggal_resep: string;
        details: Array<{
            obat_id: number;
        }>;
    }>;
    paymentMethodsByMode: {
        penjualan: Record<string, string>;
        biaya: Record<string, string>;
    };
};

type BankOption = {
    name: string;
    code: string;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Kasir', href: '/kasir' },
];

const formatCurrency = (value: number): string =>
    new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);

export default function Kasir({ batches, reseps, paymentMethodsByMode }: Props) {
    const { flash, auth } = usePage<SharedData>().props;
    const [search, setSearch] = useState('');
    const [cart, setCart] = useState<CartItem[]>([]);
    const [bankSearch, setBankSearch] = useState('');
    const [banks, setBanks] = useState<BankOption[]>([]);
    const [banksLoading, setBanksLoading] = useState(false);
    const [banksError, setBanksError] = useState<string | null>(null);
    const [banner, setBanner] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const { data, setData, post, processing, errors, transform } = useForm({
        mode: 'penjualan',
        metode_pembayaran: 'qris',
        tanggal_transaksi: new Date().toISOString().slice(0, 10),
        supplier_nama: '',
        pelanggan_nama: '',
        dokter_nama: '',
        kasir_nama: auth.user.name,
        resep_id: '',
        tipe_penjualan: 'biasa',
        is_taxed: false,
        diskon_persen: '0',
        ppn_persen: '11',
        pembayaran_diterima: '',
        tempo_jatuh_tempo: '',
        bank_code: '',
        bank_nama: '',
        biaya_kategori: 'pajak',
        biaya_nominal: '',
        biaya_keterangan: '',
        items: [] as Array<{
            obat_id: number;
            batch_id: number;
            jumlah: number;
            harga_satuan: number;
        }>,
    });

    const paymentMethods = useMemo(
        () =>
            data.mode === 'biaya'
                  ? paymentMethodsByMode.biaya
                  : paymentMethodsByMode.penjualan,
        [data.mode, paymentMethodsByMode.biaya, paymentMethodsByMode.penjualan],
    );

    const isTransferMethod = useMemo(() => {
        const key = (data.metode_pembayaran || '').toLowerCase();
        const label = (paymentMethods[data.metode_pembayaran] || '').toLowerCase();

        return key === 'transfer' || label.includes('transfer');
    }, [data.metode_pembayaran, paymentMethods]);

    const filteredBanks = useMemo(() => {
        const query = bankSearch.trim().toLowerCase();
        if (!query) {
            return banks;
        }

        return banks.filter((bank) => `${bank.name} ${bank.code}`.toLowerCase().includes(query));
    }, [bankSearch, banks]);

    const filteredBatches = useMemo(() => {
        const q = search.trim().toLowerCase();

        return batches.filter((batch) => {
            if (!q) return true;

            return [
                batch.obat.nama_obat,
                batch.obat.kode_obat,
                batch.nomor_batch,
            ]
                .join(' ')
                .toLowerCase()
                .includes(q);
        });
    }, [batches, search]);

    const findBatch = (batchId: number) => batches.find((b) => b.id === batchId);
    const cartObatIds = useMemo(
        () => new Set(cart.map((item) => item.obat_id)),
        [cart],
    );

    const filteredReseps = useMemo(() => {
        if (cartObatIds.size === 0) {
            return reseps;
        }

        return reseps.filter((resep) => {
            const resepObatIds = new Set(resep.details.map((detail) => detail.obat_id));
            return Array.from(cartObatIds).every((obatId) => resepObatIds.has(obatId));
        });
    }, [cartObatIds, reseps]);

    const selectedResep = useMemo(() => {
        if (!data.resep_id) {
            return null;
        }

        return filteredReseps.find((resep) => String(resep.id) === data.resep_id) ?? null;
    }, [data.resep_id, filteredReseps]);

    const addToCart = (batch: Batch) => {
        const defaultPrice = Number(batch.obat.harga_jual || batch.harga_beli || 0);

        setCart((prev) => {
            const exists = prev.find((item) => item.batch_id === batch.id);
            if (exists) {
                return prev.map((item) =>
                    item.batch_id === batch.id
                        ? { ...item, jumlah: item.jumlah + 1, harga_satuan: defaultPrice }
                        : item
                );
            }

            return [
                ...prev,
                {
                    rowId: `${batch.id}-${Date.now()}`,
                    obat_id: batch.obat.id,
                    batch_id: batch.id,
                    jumlah: 1,
                    harga_satuan: defaultPrice,
                },
            ];
        });
    };

    const removeCartItem = (rowId: string) => {
        setCart((prev) => prev.filter((item) => item.rowId !== rowId));
    };

    const updateCart = (rowId: string, patch: Partial<CartItem>) => {
        setCart((prev) => prev.map((item) => (item.rowId === rowId ? { ...item, ...patch } : item)));
    };

    const subtotal = cart.reduce((sum, item) => sum + item.jumlah * item.harga_satuan, 0);
    const diskonPersen = Math.max(0, Math.min(100, Number(data.diskon_persen || 0)));
    const ppnPersen = Math.max(0, Math.min(100, Number(data.ppn_persen || 11)));
    const diskonNominal = subtotal * (diskonPersen / 100);
    const dasarPajak = Math.max(subtotal - diskonNominal, 0);
    const ppnNominal = dasarPajak * (ppnPersen / 100);
    const grandTotal = dasarPajak + ppnNominal;
    const biayaNominal = Math.max(0, Number(data.biaya_nominal || 0));
    const pembayaranDiterima = Number(data.pembayaran_diterima || 0);
    const kembalian = Math.max(pembayaranDiterima - grandTotal, 0);

    useEffect(() => {
        if (flash?.success) {
            setBanner({ type: 'success', message: flash.success });
            return;
        }

        if (flash?.error) {
            setBanner({ type: 'error', message: flash.error });
        }
    }, [flash?.error, flash?.success]);

    useEffect(() => {
        if (!banner) {
            return;
        }

        const timeout = window.setTimeout(() => {
            setBanner(null);
        }, 3500);

        return () => window.clearTimeout(timeout);
    }, [banner]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const mode = params.get('mode');
        const metodePembayaran = params.get('metode_pembayaran');
        const tipePenjualan = params.get('tipe_penjualan');

        if (mode === 'penjualan' || mode === 'biaya') {
            setData('mode', mode);
        }
        if (metodePembayaran) {
            setData('metode_pembayaran', metodePembayaran);
        }
        if (tipePenjualan === 'biasa' || tipePenjualan === 'resep') {
            setData('tipe_penjualan', tipePenjualan);
        }
    }, [setData]);

    useEffect(() => {
        const defaults = {
            penjualan: 'qris',
            biaya: 'cash',
        };

        const allowed = Object.keys(
            data.mode === 'biaya'
                  ? paymentMethodsByMode.biaya
                  : paymentMethodsByMode.penjualan,
        );
        if (!allowed.includes(data.metode_pembayaran)) {
            const nextMethod = defaults[data.mode as 'penjualan' | 'biaya'];
            setData('metode_pembayaran', nextMethod);
        }

        if (data.mode !== 'penjualan') {
            setData('tipe_penjualan', 'biasa');
            setData('resep_id', '');
            setData('dokter_nama', '');
            setData('pelanggan_nama', '');
        }

        setData('supplier_nama', '');
        setData('tempo_jatuh_tempo', '');

        if (data.mode !== 'biaya') {
            setData('biaya_nominal', '');
            setData('biaya_keterangan', '');
        }

        if (!isTransferMethod && (data.bank_code || data.bank_nama)) {
            setData('bank_code', '');
            setData('bank_nama', '');
        }
    }, [data.metode_pembayaran, data.mode, paymentMethodsByMode.biaya, paymentMethodsByMode.penjualan, setData]);

    useEffect(() => {
        let cancelled = false;

        if (!isTransferMethod) {
            setBanksError(null);
            setBankSearch('');
            return;
        }

        if (banks.length > 0) {
            return;
        }

        setBanksLoading(true);
        setBanksError(null);

        fetch('/storage/indonesian-bank/indonesia-bank.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('failed-to-load-bank-list');
                }

                return response.json() as Promise<unknown>;
            })
            .then((payload) => {
                if (cancelled) {
                    return;
                }

                if (!Array.isArray(payload)) {
                    throw new Error('invalid-bank-list-format');
                }

                const parsed = payload
                    .filter((item): item is { name?: unknown; code?: unknown } => typeof item === 'object' && item !== null)
                    .map((item) => ({
                        name: String(item.name || '').trim(),
                        code: String(item.code || '').trim(),
                    }))
                    .filter((bank) => bank.name.length > 0 && bank.code.length > 0);

                setBanks(parsed);
                setBanksError(null);
            })
            .catch(() => {
                if (!cancelled) {
                    setBanksError('Daftar bank gagal dimuat. Cek file JSON di public/storage.');
                }
            })
            .finally(() => {
                if (!cancelled) {
                    setBanksLoading(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [banks.length, isTransferMethod]);

    useEffect(() => {
        if (data.mode !== 'penjualan' || data.tipe_penjualan !== 'resep') {
            setData('resep_id', '');
            setData('dokter_nama', '');
            return;
        }

        if (selectedResep) {
            setData('dokter_nama', selectedResep.nama_dokter);
        }
    }, [data.mode, data.tipe_penjualan, selectedResep, setData]);

    useEffect(() => {
        if (data.tipe_penjualan !== 'resep' || !data.resep_id) {
            return;
        }

        const stillValid = filteredReseps.some((resep) => String(resep.id) === data.resep_id);
        if (!stillValid) {
            setData('resep_id', '');
            setData('dokter_nama', '');
        }
    }, [data.resep_id, data.tipe_penjualan, filteredReseps, setData]);

    const checkout = () => {
        if (isTransferMethod && !data.bank_code) {
            setBanner({ type: 'error', message: 'Pilih bank tujuan untuk pembayaran transfer.' });
            return;
        }

        const payloadItems = cart.map((item) => ({
            obat_id: item.obat_id,
            batch_id: item.batch_id,
            jumlah: item.jumlah,
            harga_satuan: item.harga_satuan,
        }));

        transform((current) => ({
            ...current,
            resep_id: current.resep_id ? Number(current.resep_id) : null,
            bank_code: current.bank_code || null,
            bank_nama: current.bank_nama || null,
            items: payloadItems,
        }));

        post('/kasir/checkout', {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kasir" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
                <div className="rounded-xl border border-slate-300 bg-gradient-to-r from-slate-100 via-white to-slate-100 p-4">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">Kasir Transaksi</h1>
                    <p className="text-sm text-slate-600">
                        Operasional checkout berbasis batch untuk penjualan dan pencatatan biaya operasional.
                    </p>
                </div>

                <div>
                    <h1 className="text-2xl font-bold">Kasir</h1>
                    <p className="text-sm text-muted-foreground">
                        POS berbasis batch obat dengan checkout cepat.
                    </p>
                </div>

                {banner && (
                    <div
                        className={`rounded-lg border px-4 py-3 text-sm ${
                            banner.type === 'success'
                                ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                                : 'border-red-300 bg-red-50 text-red-800'
                        }`}
                    >
                        {banner.message}
                    </div>
                )}

                <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
                    <div className="space-y-4 rounded-xl border border-sidebar-border/70 bg-card p-4">
                        <div className="grid gap-2 md:grid-cols-2">
                            <div className="grid gap-2">
                                <Label>Mode</Label>
                                <Select value={data.mode} onValueChange={(value) => setData('mode', value)}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="penjualan">Penjualan</SelectItem>
                                        <SelectItem value="biaya">Biaya Operasional</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid gap-2">
                                <Label>Metode Pembayaran</Label>
                                <Select
                                    value={data.metode_pembayaran}
                                    onValueChange={(value) => setData('metode_pembayaran', value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(paymentMethods).map(([key, label]) => (
                                            <SelectItem key={key} value={key}>
                                                {label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.metode_pembayaran && (
                                    <p className="text-sm text-destructive">{errors.metode_pembayaran}</p>
                                )}
                            </div>
                        </div>

                        {isTransferMethod && (
                            <div className="grid gap-3 rounded-lg border border-sidebar-border/70 p-3">
                                <div className="grid gap-2">
                                    <Label htmlFor="bank-search">Cari Bank</Label>
                                    <Input
                                        id="bank-search"
                                        value={bankSearch}
                                        onChange={(e) => setBankSearch(e.target.value)}
                                        placeholder="Contoh: BCA, Mandiri, BNI, 014"
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label>Bank Tujuan Transfer</Label>
                                    <Select
                                        value={data.bank_code || undefined}
                                        onValueChange={(value) => {
                                            const selected = banks.find((bank) => bank.code === value);
                                            setData('bank_code', value);
                                            setData('bank_nama', selected?.name || '');
                                        }}
                                    >
                                        <SelectTrigger>
                                            <SelectValue
                                                placeholder={banksLoading ? 'Memuat daftar bank...' : 'Pilih bank'}
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {!banksLoading && filteredBanks.length === 0 ? (
                                                <SelectItem value="__no_bank_result" disabled>
                                                    Bank tidak ditemukan
                                                </SelectItem>
                                            ) : (
                                                filteredBanks.map((bank) => (
                                                    <SelectItem key={`${bank.code}-${bank.name}`} value={bank.code}>
                                                        {bank.name} ({bank.code})
                                                    </SelectItem>
                                                ))
                                            )}
                                        </SelectContent>
                                    </Select>
                                    {(errors as Record<string, string | undefined>).bank_code && (
                                        <p className="text-sm text-destructive">
                                            {(errors as Record<string, string | undefined>).bank_code}
                                        </p>
                                    )}
                                    {banksError && <p className="text-sm text-destructive">{banksError}</p>}
                                </div>
                            </div>
                        )}

                        <div className="grid gap-2 md:grid-cols-2">
                            {data.mode === 'penjualan' ? (
                                <div className="grid gap-2">
                                    <Label htmlFor="pelanggan-nama">Pelanggan</Label>
                                    <Input
                                        id="pelanggan-nama"
                                        value={data.pelanggan_nama}
                                        onChange={(e) => setData('pelanggan_nama', e.target.value)}
                                        placeholder="Nama pelanggan"
                                    />
                                </div>
                            ) : (
                                <div />
                            )}

                            <div className="grid gap-2">
                                <Label htmlFor="kasir-nama">Kasir</Label>
                                <Input
                                    id="kasir-nama"
                                    value={data.kasir_nama}
                                    onChange={(e) => setData('kasir_nama', e.target.value)}
                                    placeholder="Nama kasir"
                                />
                            </div>
                        </div>

                        {data.mode === 'penjualan' && (
                            <div className="grid gap-2 md:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label>Tipe Penjualan</Label>
                                    <Select value={data.tipe_penjualan} onValueChange={(value) => setData('tipe_penjualan', value)}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="biasa">Biasa</SelectItem>
                                            <SelectItem value="resep">Resep</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {data.tipe_penjualan === 'resep' && (
                                    <div className="grid gap-2">
                                        <Label>Resep</Label>
                                        <Select
                                            value={data.resep_id || undefined}
                                            onValueChange={(value) => setData('resep_id', value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pilih resep" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {filteredReseps.map((resep) => (
                                                    <SelectItem key={resep.id} value={String(resep.id)}>
                                                        {resep.nomor_resep} - {resep.nama_pelanggan}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <p className="text-xs text-muted-foreground">
                                            {cartObatIds.size > 0
                                                ? `${filteredReseps.length} resep mencakup semua obat di keranjang.`
                                                : 'Tambahkan obat ke keranjang untuk menyaring resep yang relevan.'}
                                        </p>
                                        {errors.resep_id && <p className="text-sm text-destructive">{errors.resep_id}</p>}
                                    </div>
                                )}

                                {data.tipe_penjualan === 'resep' && (
                                    <div className="grid gap-2 md:col-span-2">
                                        <Label htmlFor="dokter-dari-resep">Dokter (dari resep)</Label>
                                        <Input
                                            id="dokter-dari-resep"
                                            value={selectedResep?.nama_dokter || ''}
                                            readOnly
                                            placeholder="Pilih resep terlebih dahulu"
                                        />
                                    </div>
                                )}

                                <label className="md:col-span-2 flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={data.is_taxed}
                                        onChange={(e) => setData('is_taxed', e.target.checked)}
                                    />
                                    Transaksi dikenakan pajak
                                </label>
                            </div>
                        )}

                        {data.mode !== 'biaya' && (
                            <>
                                <div className="space-y-2">
                                    <Label htmlFor="search-batch">Cari Batch / Obat</Label>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            id="search-batch"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="pl-9"
                                            placeholder="Nama obat, kode, batch"
                                        />
                                    </div>
                                </div>

                                <div className="max-h-[500px] space-y-2 overflow-y-auto pr-1">
                                    {filteredBatches.map((batch) => (
                                        <div key={batch.id} className="rounded-lg border border-sidebar-border/70 p-3">
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <p className="font-medium">
                                                        {batch.obat.nama_obat} - {batch.nomor_batch}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {batch.obat.kode_obat} - Stok {batch.stok_tersedia}
                                                    </p>
                                                </div>
                                                <Button size="sm" onClick={() => addToCart(batch)}>
                                                    Tambah
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="space-y-4 rounded-xl border border-sidebar-border/70 bg-card p-4">
                        <h2 className="text-lg font-semibold">{data.mode === 'biaya' ? 'Input Biaya Operasional' : 'Keranjang'}</h2>

                        {data.mode !== 'biaya' ? (
                            <div className="max-h-[500px] space-y-3 overflow-y-auto pr-1">
                                {cart.map((item) => {
                                const batch = findBatch(item.batch_id);
                                if (!batch) return null;

                                return (
                                    <div key={item.rowId} className="rounded-lg border border-sidebar-border/70 p-3">
                                        <div className="mb-2 flex items-start justify-between">
                                            <div>
                                                <p className="font-medium">{batch.obat.nama_obat}</p>
                                                <p className="text-xs text-muted-foreground">{batch.nomor_batch}</p>
                                            </div>
                                            <Button variant="ghost" size="sm" onClick={() => removeCartItem(item.rowId)}>
                                                <Trash2 className="size-4 text-destructive" />
                                            </Button>
                                        </div>

                                        <div className="grid gap-3 md:grid-cols-3">
                                            <div className="grid gap-1">
                                                <Label>Jumlah</Label>
                                                <Input
                                                    type="number"
                                                    min={1}
                                                    value={item.jumlah}
                                                    onChange={(e) =>
                                                        updateCart(item.rowId, {
                                                            jumlah: Math.max(1, Number(e.target.value || 1)),
                                                        })
                                                    }
                                                />
                                            </div>

                                            <div className="grid gap-1">
                                                <Label>Harga Satuan</Label>
                                                <Input
                                                    type="number"
                                                    min={0}
                                                    value={item.harga_satuan}
                                                    onChange={(e) =>
                                                        updateCart(item.rowId, {
                                                            harga_satuan: Math.max(0, Number(e.target.value || 0)),
                                                        })
                                                    }
                                                />
                                            </div>

                                            <div className="grid gap-1">
                                                <Label>Subtotal</Label>
                                                <div className="h-10 rounded-md border bg-muted px-3 py-2 text-sm">
                                                    {formatCurrency(item.jumlah * item.harga_satuan)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                                {!cart.length && (
                                    <div className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
                                        Belum ada item di keranjang.
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="space-y-3 rounded-lg border border-sidebar-border/70 p-3">
                                <div className="grid gap-2">
                                    <Label>Kategori Biaya</Label>
                                    <Select value={data.biaya_kategori} onValueChange={(value) => setData('biaya_kategori', value)}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pajak">Pajak</SelectItem>
                                            <SelectItem value="bunga">Bunga</SelectItem>
                                            <SelectItem value="sewa">Sewa / Rent</SelectItem>
                                            <SelectItem value="lainnya">Lainnya</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.biaya_kategori && <p className="text-sm text-destructive">{errors.biaya_kategori}</p>}
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="biaya-nominal">Nominal</Label>
                                    <Input
                                        id="biaya-nominal"
                                        type="number"
                                        min={1}
                                        value={data.biaya_nominal}
                                        onChange={(e) => setData('biaya_nominal', e.target.value)}
                                        placeholder="Nominal biaya"
                                    />
                                    {errors.biaya_nominal && <p className="text-sm text-destructive">{errors.biaya_nominal}</p>}
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="biaya-keterangan">Keterangan</Label>
                                    <Input
                                        id="biaya-keterangan"
                                        value={data.biaya_keterangan}
                                        onChange={(e) => setData('biaya_keterangan', e.target.value)}
                                        placeholder="Catatan biaya (opsional)"
                                    />
                                    {errors.biaya_keterangan && <p className="text-sm text-destructive">{errors.biaya_keterangan}</p>}
                                </div>
                            </div>
                        )}

                        <div className="grid gap-2 border-t pt-4">
                            {data.mode !== 'biaya' ? (
                                <>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span className="font-semibold">{formatCurrency(subtotal)}</span>
                                    </div>

                                    <div className="grid gap-3 rounded-lg border p-3">
                                <div className="grid gap-1">
                                    <Label htmlFor="diskon-persen">Diskon (%)</Label>
                                    <Input
                                        id="diskon-persen"
                                        type="number"
                                        min={0}
                                        max={100}
                                        step="0.01"
                                        value={data.diskon_persen}
                                        onChange={(e) => setData('diskon_persen', e.target.value)}
                                    />
                                    {errors.diskon_persen && (
                                        <p className="text-sm text-destructive">{errors.diskon_persen}</p>
                                    )}
                                </div>

                                <div className="grid gap-1">
                                    <Label htmlFor="ppn-persen">PPN (%)</Label>
                                    <Input
                                        id="ppn-persen"
                                        type="number"
                                        min={0}
                                        max={100}
                                        step="0.01"
                                        value={data.ppn_persen}
                                        onChange={(e) => setData('ppn_persen', e.target.value)}
                                    />
                                    {errors.ppn_persen && (
                                        <p className="text-sm text-destructive">{errors.ppn_persen}</p>
                                    )}
                                </div>

                                <div className="space-y-1 text-sm">
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Diskon Nominal</span>
                                        <span>{formatCurrency(diskonNominal)}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">DPP</span>
                                        <span>{formatCurrency(dasarPajak)}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">PPN ({ppnPersen}%)</span>
                                        <span>{formatCurrency(ppnNominal)}</span>
                                    </div>
                                    <div className="flex items-center justify-between border-t pt-2 font-semibold">
                                        <span>Grand Total</span>
                                        <span>{formatCurrency(grandTotal)}</span>
                                    </div>
                                </div>
                                    </div>
                                </>
                            ) : (
                                <div className="grid gap-3 rounded-lg border p-3">
                                    <div className="flex items-center justify-between font-semibold">
                                        <span>Total Biaya</span>
                                        <span>{formatCurrency(biayaNominal)}</span>
                                    </div>
                                </div>
                            )}

                            {data.mode === 'penjualan' && (
                                <div className="grid gap-1">
                                    <Label htmlFor="pembayaran-diterima">Pembayaran Diterima</Label>
                                    <Input
                                        id="pembayaran-diterima"
                                        type="number"
                                        min={0}
                                        value={data.pembayaran_diterima}
                                        onChange={(e) => setData('pembayaran_diterima', e.target.value)}
                                    />
                                    {errors.pembayaran_diterima && (
                                        <p className="text-sm text-destructive">{errors.pembayaran_diterima}</p>
                                    )}
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Estimasi Kembalian</span>
                                        <span>{formatCurrency(kembalian)}</span>
                                    </div>
                                </div>
                            )}

                            {(errors.items || errors.mode) && (
                                <p className="text-sm text-destructive">{errors.items || errors.mode}</p>
                            )}

                            <Button onClick={checkout} disabled={processing || (data.mode === 'biaya' ? biayaNominal <= 0 : !cart.length)}>
                                {processing ? 'Memproses...' : 'Checkout'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
