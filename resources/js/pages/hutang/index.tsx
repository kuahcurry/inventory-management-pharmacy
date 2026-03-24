import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface HutangItem {
    id: number;
    customer_name: string | null;
    total_amount: number;
    remaining_amount: number;
    payment_status: 'unpaid' | 'partially_paid' | 'paid';
    created_at: string;
    transaksi: {
        id: number;
        kode_transaksi: string;
        tanggal_transaksi: string;
        obat?: { nama_obat: string };
    };
}

interface Props {
    hutang: {
        data: HutangItem[];
        current_page: number;
        last_page: number;
        total: number;
    };
    filters: {
        status?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Hutang Suite', href: '/hutang' },
];

export default function HutangIndex({ hutang, filters }: Props) {
    const [status, setStatus] = useState(filters.status || 'active');
    const [selected, setSelected] = useState<HutangItem | null>(null);
    const [partialAmount, setPartialAmount] = useState('');
    const [showPayDialog, setShowPayDialog] = useState(false);
    const [showPartialDialog, setShowPartialDialog] = useState(false);

    const formatCurrency = (value: number): string =>
        new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);

    const applyFilter = (nextStatus: string) => {
        setStatus(nextStatus);
        router.get('/hutang', {
            status: nextStatus === 'all' ? undefined : nextStatus,
        }, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const statusBadge = (value: HutangItem['payment_status']) => {
        if (value === 'paid') {
            return <Badge className="bg-emerald-600">Paid</Badge>;
        }
        if (value === 'partially_paid') {
            return <Badge className="bg-amber-600">Partially Paid</Badge>;
        }

        return <Badge className="bg-red-600">Unpaid</Badge>;
    };

    const settle = () => {
        if (!selected) return;

        router.post(`/hutang/${selected.id}/pay`, {
            confirmed: true,
            metode_pembayaran: 'cash',
        }, {
            preserveScroll: true,
            onSuccess: () => {
                setShowPayDialog(false);
                setSelected(null);
            },
        });
    };

    const partialPay = () => {
        if (!selected) return;

        router.post(`/hutang/${selected.id}/partial-pay`, {
            confirmed: true,
            amount: Number(partialAmount || 0),
            metode_pembayaran: 'cash',
        }, {
            preserveScroll: true,
            onSuccess: () => {
                setShowPartialDialog(false);
                setSelected(null);
                setPartialAmount('');
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Hutang Suite" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
                <div className="rounded-xl border border-slate-300 bg-gradient-to-r from-slate-100 via-white to-slate-100 p-4">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">Hutang Suite</h1>
                    <p className="text-sm text-slate-600">
                        Monitoring hutang transaksi penjualan, termasuk status pelunasan dan sisa tagihan.
                    </p>
                </div>

                <div className="rounded-xl border border-sidebar-border/70 bg-card p-4">
                    <div className="grid gap-2 md:max-w-xs">
                        <Label>Status Hutang</Label>
                        <Select value={status} onValueChange={applyFilter}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="active">Active (Unpaid + Partial)</SelectItem>
                                <SelectItem value="all">Semua</SelectItem>
                                <SelectItem value="unpaid">Unpaid</SelectItem>
                                <SelectItem value="partially_paid">Partially Paid</SelectItem>
                                <SelectItem value="paid">Paid</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="rounded-xl border border-sidebar-border/70 bg-card">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Kode Transaksi</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Tanggal</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Sisa</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {hutang.data.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="py-8 text-center text-muted-foreground">
                                        Tidak ada data hutang.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                hutang.data.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-mono text-xs">{item.transaksi.kode_transaksi}</TableCell>
                                        <TableCell>{item.customer_name || '-'}</TableCell>
                                        <TableCell>{new Date(item.transaksi.tanggal_transaksi).toLocaleDateString('id-ID')}</TableCell>
                                        <TableCell>{formatCurrency(item.total_amount)}</TableCell>
                                        <TableCell>{formatCurrency(item.remaining_amount)}</TableCell>
                                        <TableCell>{statusBadge(item.payment_status)}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    disabled={item.payment_status === 'paid'}
                                                    onClick={() => {
                                                        setSelected(item);
                                                        setShowPartialDialog(true);
                                                    }}
                                                >
                                                    Partial
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    disabled={item.payment_status === 'paid'}
                                                    onClick={() => {
                                                        setSelected(item);
                                                        setShowPayDialog(true);
                                                    }}
                                                >
                                                    Bayar Hutang
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            <Dialog open={showPayDialog} onOpenChange={setShowPayDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Konfirmasi Pelunasan</DialogTitle>
                        <DialogDescription>
                            Apakah Anda yakin hutang ini sudah dibayar?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowPayDialog(false)}>Batal</Button>
                        <Button onClick={settle}>Ya, Bayar Lunas</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={showPartialDialog} onOpenChange={setShowPartialDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Pembayaran Parsial</DialogTitle>
                        <DialogDescription>
                            Masukkan nominal pembayaran untuk mengurangi sisa hutang.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-2">
                        <Label htmlFor="partial-amount">Nominal Bayar</Label>
                        <Input
                            id="partial-amount"
                            type="number"
                            min={1}
                            value={partialAmount}
                            onChange={(event) => setPartialAmount(event.target.value)}
                        />
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowPartialDialog(false)}>Batal</Button>
                        <Button onClick={partialPay}>Simpan Pembayaran</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </AppLayout>
    );
}
