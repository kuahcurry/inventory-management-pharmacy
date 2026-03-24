import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';
import { formatCurrency } from '@/lib/utils';
import axios from 'axios';
import { useState } from 'react';

interface ReorderSuggestion {
    id: number;
    suggested_order_qty: number;
    reorder_point: number;
    avg_daily_usage: number;
    lead_time_days: number;
    obat?: {
        kode_obat: string;
        nama_obat: string;
    };
}

interface DemandForecast {
    id: number;
    period_type: 'weekly' | 'monthly';
    forecast_quantity: number;
    confidence_percentage: number;
    seasonality_factor: number;
    obat?: {
        kode_obat: string;
        nama_obat: string;
    };
}

interface PendingApproval {
    id: number;
    status: 'pending' | 'approved' | 'rejected';
    requested_quantity: number;
    approval_level_required: number;
    obat?: {
        kode_obat: string;
        nama_obat: string;
    };
    requested_by?: {
        name: string;
    };
}

interface MarginRow {
    obat_id?: number;
    batch_id?: number;
    nomor_batch?: string;
    nama_obat?: string;
    qty_sold: number;
    revenue: number;
    cost: number;
    margin_value: number;
    margin_percentage: number;
}

interface Props {
    reorderSuggestions: ReorderSuggestion[];
    demandForecasts: DemandForecast[];
    pendingApprovals: PendingApproval[];
    margin: {
        summary: {
            revenue_30d: number;
            cost_30d: number;
            margin_value_30d: number;
            avg_margin_percentage_30d: number;
        };
        per_item: MarginRow[];
        per_batch: MarginRow[];
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Laporan', href: '/reports/stock' },
    { title: 'Operasional Cerdas', href: '/reports/operational' },
];

export default function OperationalReport({ reorderSuggestions, demandForecasts, pendingApprovals, margin }: Props) {
    const [isGeneratingReorder, setIsGeneratingReorder] = useState(false);
    const [isGeneratingForecast, setIsGeneratingForecast] = useState(false);
    const [decisionLoadingId, setDecisionLoadingId] = useState<number | null>(null);

    const reloadOperationalData = () => {
        router.reload({
            only: ['reorderSuggestions', 'demandForecasts', 'pendingApprovals', 'margin'],
            preserveScroll: true,
            preserveState: true,
        });
    };

    const generateReorder = async () => {
        setIsGeneratingReorder(true);
        try {
            await axios.get('/api/insights/reorder-suggestions');
            reloadOperationalData();
        } finally {
            setIsGeneratingReorder(false);
        }
    };

    const generateForecast = async () => {
        setIsGeneratingForecast(true);
        try {
            await axios.get('/api/insights/forecasts', {
                params: { period_type: 'weekly' },
            });
            reloadOperationalData();
        } finally {
            setIsGeneratingForecast(false);
        }
    };

    const handleApprovalDecision = async (approvalId: number, status: 'approved' | 'rejected') => {
        setDecisionLoadingId(approvalId);
        try {
            await axios.post(`/api/insights/approvals/${approvalId}/decision`, {
                status,
            });
            reloadOperationalData();
        } finally {
            setDecisionLoadingId(null);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan Operasional Cerdas" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
                <div>
                    <h1 className="text-2xl font-bold">Laporan Operasional Cerdas</h1>
                    <p className="text-sm text-muted-foreground">
                        Ringkasan reorder, forecast, approval high-risk, dan margin per item/batch.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <Button onClick={generateReorder} disabled={isGeneratingReorder}>
                            {isGeneratingReorder ? 'Generating Reorder...' : 'Generate Reorder Suggestions'}
                        </Button>
                        <Button variant="outline" onClick={generateForecast} disabled={isGeneratingForecast}>
                            {isGeneratingForecast ? 'Generating Forecast...' : 'Generate Forecasts'}
                        </Button>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg border bg-card p-4">
                        <p className="text-sm text-muted-foreground">Revenue 30 Hari</p>
                        <p className="text-xl font-semibold">{formatCurrency(margin.summary.revenue_30d)}</p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <p className="text-sm text-muted-foreground">Cost 30 Hari</p>
                        <p className="text-xl font-semibold">{formatCurrency(margin.summary.cost_30d)}</p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <p className="text-sm text-muted-foreground">Margin 30 Hari</p>
                        <p className="text-xl font-semibold">{formatCurrency(margin.summary.margin_value_30d)}</p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <p className="text-sm text-muted-foreground">Rata-Rata Margin</p>
                        <p className="text-xl font-semibold">{margin.summary.avg_margin_percentage_30d}%</p>
                    </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                    <section className="rounded-lg border bg-card p-4">
                        <h2 className="mb-3 text-lg font-semibold">Reorder Suggestion Otomatis</h2>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Obat</TableHead>
                                    <TableHead>ROP</TableHead>
                                    <TableHead>Usulan</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {reorderSuggestions.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.obat?.nama_obat} ({item.obat?.kode_obat})</TableCell>
                                        <TableCell>{item.reorder_point}</TableCell>
                                        <TableCell>
                                            <Badge variant={item.suggested_order_qty > 0 ? 'default' : 'outline'}>
                                                {item.suggested_order_qty}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </section>

                    <section className="rounded-lg border bg-card p-4">
                        <h2 className="mb-3 text-lg font-semibold">Forecast Kebutuhan Obat</h2>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Obat</TableHead>
                                    <TableHead>Periode</TableHead>
                                    <TableHead>Forecast</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {demandForecasts.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.obat?.nama_obat}</TableCell>
                                        <TableCell className="capitalize">{item.period_type}</TableCell>
                                        <TableCell>
                                            {item.forecast_quantity} ({item.confidence_percentage}%)
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </section>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                    <section className="rounded-lg border bg-card p-4">
                        <h2 className="mb-3 text-lg font-semibold">Approval High-Risk Pending</h2>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Obat</TableHead>
                                    <TableHead>Qty</TableHead>
                                    <TableHead>Level</TableHead>
                                    <TableHead className="text-right">Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {pendingApprovals.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.obat?.nama_obat}</TableCell>
                                        <TableCell>{item.requested_quantity}</TableCell>
                                        <TableCell>{item.approval_level_required}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    size="sm"
                                                    onClick={() => handleApprovalDecision(item.id, 'approved')}
                                                    disabled={decisionLoadingId === item.id}
                                                >
                                                    Approve
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => handleApprovalDecision(item.id, 'rejected')}
                                                    disabled={decisionLoadingId === item.id}
                                                >
                                                    Reject
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </section>

                    <section className="rounded-lg border bg-card p-4">
                        <h2 className="mb-3 text-lg font-semibold">Margin per Item (Top 10)</h2>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Obat</TableHead>
                                    <TableHead>Margin</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {margin.per_item.slice(0, 10).map((item, index) => (
                                    <TableRow key={`${item.obat_id}-${index}`}>
                                        <TableCell>{item.nama_obat}</TableCell>
                                        <TableCell>
                                            {formatCurrency(item.margin_value)} ({item.margin_percentage}%)
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </section>
                </div>
            </div>
        </AppLayout>
    );
}
