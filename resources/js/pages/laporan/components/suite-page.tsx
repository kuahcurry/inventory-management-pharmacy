import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { formatCurrency } from '@/lib/utils';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';
import { Download, Search } from 'lucide-react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface SummaryCard {
    label: string;
    value: number | string;
}

interface Section {
    key: string;
    title: string;
    columns: string[];
    rows: Array<Record<string, string | number | null>>;
}

interface QuickAction {
    label: string;
    href: string;
    variant?: 'default' | 'outline';
}

export interface ReportSuitePageProps {
    suite: string;
    title: string;
    description: string;
    summaryCards: SummaryCard[];
    expenseComposition?: Array<{
        name: string;
        value: number;
    }>;
    sections: Section[];
    quickActions?: QuickAction[];
    filters: {
        tanggal_dari: string;
        tanggal_sampai: string;
        include_pajak?: boolean;
        include_bunga?: boolean;
        route_base?: string;
        export_url?: string;
    };
}

const maybeCurrency = (label: string, value: string | number | null) => {
    if (typeof value !== 'number') {
        return value ?? '-';
    }

    const key = label.toLowerCase();
    const isCurrency =
        key.includes('nilai') ||
        key.includes('omzet') ||
        key.includes('laba') ||
        key.includes('biaya') ||
        key.includes('revenue') ||
        key.includes('cash') ||
        key.includes('ppn') ||
        key.includes('modal');

    return isCurrency ? formatCurrency(value) : value.toLocaleString('id-ID');
};

export default function ReportSuitePage({ suite, title, description, summaryCards, expenseComposition = [], sections, quickActions = [], filters }: ReportSuitePageProps) {
    const routeBase = filters.route_base || `/reports/suite/${suite}`;
    const exportUrl = filters.export_url || `/reports/suite/${suite}/export`;
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Laporan', href: '/reports' },
        { title, href: routeBase },
    ];

    const applyFilter = (formData: FormData) => {
        const tanggal_dari = String(formData.get('tanggal_dari') || '');
        const tanggal_sampai = String(formData.get('tanggal_sampai') || '');
        const include_pajak = formData.get('include_pajak') === 'on';
        const include_bunga = formData.get('include_bunga') === 'on';

        router.get(routeBase, {
            tanggal_dari,
            tanggal_sampai,
            include_pajak,
            include_bunga,
        });
    };

    const exportExcel = () => {
        const params = new URLSearchParams({
            tanggal_dari: filters.tanggal_dari,
            tanggal_sampai: filters.tanggal_sampai,
            include_pajak: String(filters.include_pajak ?? true),
            include_bunga: String(filters.include_bunga ?? true),
        });

        window.location.href = `${exportUrl}?${params.toString()}`;
    };

    const expenseColorMap: Record<string, string> = {
        Pajak: '#dc2626',
        Bunga: '#7c3aed',
        Sewa: '#2563eb',
        Lainnya: '#0f766e',
    };

    const expenseChartData = expenseComposition.filter((item) => Number(item.value) > 0);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={title} />

            <div className="flex h-full flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
                <div className="rounded-xl border border-slate-300 bg-gradient-to-r from-slate-100 via-white to-slate-100 p-4">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">{title}</h1>
                    <p className="text-sm text-slate-600">{description}</p>
                </div>

                <form
                    className="rounded-xl border border-sidebar-border/70 bg-card p-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        applyFilter(new FormData(e.currentTarget));
                    }}
                >
                    <div className="grid gap-3 md:grid-cols-4">
                        <div>
                            <label className="mb-1 block text-xs uppercase tracking-wide text-muted-foreground">Tanggal Dari</label>
                            <Input name="tanggal_dari" type="date" defaultValue={filters.tanggal_dari} required />
                        </div>
                        <div>
                            <label className="mb-1 block text-xs uppercase tracking-wide text-muted-foreground">Tanggal Sampai</label>
                            <Input name="tanggal_sampai" type="date" defaultValue={filters.tanggal_sampai} required />
                        </div>
                        <div className="flex items-end gap-2 md:col-span-2">
                            <Button type="submit" className="w-full md:w-auto">
                                <Search className="mr-2 size-4" />
                                Terapkan
                            </Button>
                            <Button type="button" variant="outline" className="w-full md:w-auto" onClick={exportExcel}>
                                <Download className="mr-2 size-4" />
                                Export Excel
                            </Button>
                        </div>

                        {suite === 'keuangan_suite' && (
                            <div className="md:col-span-4 grid gap-2 rounded-md border border-sidebar-border/60 bg-muted/20 p-3 text-sm md:grid-cols-2">
                                <label className="flex items-center gap-2">
                                    <input name="include_pajak" type="checkbox" defaultChecked={filters.include_pajak ?? true} />
                                    Masukkan Pajak ke Laba Bersih
                                </label>
                                <label className="flex items-center gap-2">
                                    <input name="include_bunga" type="checkbox" defaultChecked={filters.include_bunga ?? true} />
                                    Masukkan Bunga ke Laba Bersih
                                </label>
                            </div>
                        )}
                    </div>

                    {quickActions.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2 border-t pt-3">
                            {quickActions.map((action) => (
                                <Button
                                    key={action.label}
                                    type="button"
                                    variant={action.variant === 'outline' ? 'outline' : 'default'}
                                    className="w-full md:w-auto"
                                    onClick={() => {
                                        window.location.href = action.href;
                                    }}
                                >
                                    {action.label}
                                </Button>
                            ))}
                        </div>
                    )}
                </form>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {summaryCards.map((card) => (
                        <div key={card.label} className="rounded-lg border bg-card p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground">{card.label}</p>
                            <p className="mt-1 text-xl font-semibold">
                                {typeof card.value === 'number' ? maybeCurrency(card.label, card.value) : card.value}
                            </p>
                        </div>
                    ))}
                </div>

                {suite === 'keuangan_suite' && (
                    <section className="rounded-xl border border-sidebar-border/70 bg-card p-4">
                        <h2 className="mb-2 text-lg font-semibold">Komposisi Beban Operasional</h2>
                        <p className="mb-4 text-xs text-muted-foreground">Ringkasan cepat porsi pajak, bunga, sewa, dan biaya lainnya.</p>

                        {expenseChartData.length > 0 ? (
                            <div className="h-72 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={expenseChartData}
                                            dataKey="value"
                                            nameKey="name"
                                            innerRadius={58}
                                            outerRadius={92}
                                            paddingAngle={2}
                                        >
                                            {expenseChartData.map((entry) => (
                                                <Cell key={entry.name} fill={expenseColorMap[entry.name] ?? '#64748b'} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value: number) => formatCurrency(value)} />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">Belum ada data biaya operasional pada periode ini.</p>
                        )}
                    </section>
                )}

                {sections.map((section) => (
                    <section key={section.key} className="rounded-xl border border-sidebar-border/70 bg-card p-4">
                        <h2 className="mb-3 text-lg font-semibold">{section.title}</h2>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        {section.columns.map((column) => (
                                            <TableHead key={column}>{column}</TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {section.rows.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={section.columns.length} className="text-center text-muted-foreground">
                                                Tidak ada data
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        section.rows.map((row, index) => (
                                            <TableRow key={`${section.key}-${index}`}>
                                                {section.columns.map((column) => (
                                                    <TableCell key={column}>{maybeCurrency(column, row[column])}</TableCell>
                                                ))}
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </section>
                ))}
            </div>
        </AppLayout>
    );
}