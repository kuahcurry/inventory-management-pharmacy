import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router, Link, usePage } from '@inertiajs/react';
import { 
    QrCode, 
    History, 
    Scan, 
    Download, 
    Printer, 
    Copy, 
    CheckCircle2,
    XCircle,
    AlertTriangle,
    Camera,
    Search,
    Calendar,
    User,
    Filter,
    BarChart3,
    Eye,
    PlusCircle,
    Loader2
} from 'lucide-react';
import { QrScanner } from '@/components/qr-scanner';
import axios from 'axios';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'QR Code', href: '/qr' },
];

interface BatchOption {
    id: number;
    nomor_batch: string;
    kode_qr: string;
    tanggal_expired: string;
    stok_tersedia: number;
    obat: {
        nama_obat: string;
        kode_obat: string;
    };
}

interface ObatOption {
    id: number;
    kode_obat: string;
    nama_obat: string;
    kategori?: { nama_kategori: string } | null;
    jenis?: { nama_jenis: string } | null;
    satuan?: { nama_satuan: string } | null;
}

interface PaginatedBatchOptions {
    data: BatchOption[];
    total: number;
}

interface ScanLog {
    id: number;
    kode_qr_scanned: string;
    metode_scan: 'camera' | 'scanner';
    hasil_scan: 'success' | 'not_found' | 'expired' | 'error';
    pesan_error?: string;
    waktu_scan: string;
    batch?: {
        nomor_batch: string;
        obat: {
            nama_obat: string;
        };
    };
    user?: {
        name: string;
    };
}

interface QrPageProps {
    initialBatches: {
        data: BatchOption[];
        total: number;
    };
    initialObats: {
        data: ObatOption[];
        total: number;
    };
}

export default function QrIndex() {
    const [activeTab, setActiveTab] = useState('scan');
    const { initialBatches, initialObats } = usePage<QrPageProps>().props;
    
    // Data lists
    const [batches, setBatches] = useState<BatchOption[]>([]);
    const [obats, setObats] = useState<ObatOption[]>([]);
    
    // Generate QR state
    const [generateType, setGenerateType] = useState<'batch' | 'obat'>('batch');
    const [selectedBatch, setSelectedBatch] = useState<string>('');
    const [selectedObat, setSelectedObat] = useState<string>('');
    const [qrCode, setQrCode] = useState<string>('');
    const [qrData, setQrData] = useState<any>(null);
    const [searchBatch, setSearchBatch] = useState('');
    const [searchObat, setSearchObat] = useState('');
    const [generatingQr, setGeneratingQr] = useState(false);
    
    // Scan logs state
    const [scanLogs, setScanLogs] = useState<ScanLog[]>([]);
    const [filterResult, setFilterResult] = useState<string>('all');
    const [loadingLogs, setLoadingLogs] = useState(false);

    // List tab search/filter state
    const [listSubTab, setListSubTab] = useState<'batch' | 'obat'>('batch');
    const [searchListBatch, setSearchListBatch] = useState('');
    const [searchListObat, setSearchListObat] = useState('');

    // Modal preview state
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewQrCode, setPreviewQrCode] = useState('');
    const [previewQrData, setPreviewQrData] = useState<any>(null);
    const [loadingPreview, setLoadingPreview] = useState(false);

    // Load batches and medicines for QR lists/generation
    useEffect(() => {
        if (activeTab === 'generate' || activeTab === 'list') {
            if (initialBatches?.data?.length) {
                setBatches(initialBatches.data);
            } else {
                loadBatches();
            }
            
            if (initialObats?.data?.length) {
                setObats(initialObats.data);
            } else {
                loadObats();
            }
        }
    }, [activeTab, initialBatches, initialObats]);

    // Load scan logs
    useEffect(() => {
        if (activeTab === 'history') {
            loadScanLogs();
        }
    }, [activeTab, filterResult]);

    const loadBatches = async () => {
        try {
            const response = await axios.get('/api/batch', {
                params: { per_page: 100 }
            });
            const batchData = response.data.data || response.data;
            setBatches(Array.isArray(batchData) ? batchData : []);
        } catch (error: any) {
            console.error('Failed to load batches:', error);
        }
    };

    const loadObats = async () => {
        try {
            const response = await axios.get('/api/obat', {
                params: { per_page: 100 }
            });
            const obatData = response.data.data || response.data;
            setObats(Array.isArray(obatData) ? obatData : []);
        } catch (error: any) {
            console.error('Failed to load medicines:', error);
        }
    };

    const loadScanLogs = async () => {
        setLoadingLogs(true);
        try {
            const response = await axios.get('/api/qr/scan-logs', {
                params: {
                    per_page: 20,
                    hasil: filterResult !== 'all' ? filterResult : undefined
                }
            });
            setScanLogs(response.data.data || []);
        } catch (error) {
            console.error('Failed to load scan logs:', error);
        } finally {
            setLoadingLogs(false);
        }
    };

    const generateQr = async () => {
        const id = generateType === 'batch' ? selectedBatch : selectedObat;
        if (!id) return;
        
        setGeneratingQr(true);
        try {
            const endpoint = generateType === 'batch'
                ? `/api/qr/generate/${id}`
                : `/api/qr/generate-obat/${id}`;
            const response = await axios.get(endpoint);
            setQrCode(response.data.qr_code);
            setQrData(response.data.qr_data);
        } catch (error) {
            console.error('Failed to generate QR:', error);
            alert('Gagal generate QR code');
        } finally {
            setGeneratingQr(false);
        }
    };

    const showQrCodePreview = async (type: 'batch' | 'obat', id: number) => {
        setLoadingPreview(true);
        setPreviewQrCode('');
        setPreviewQrData(null);
        setPreviewOpen(true);
        try {
            const endpoint = type === 'batch' 
                ? `/api/qr/generate/${id}`
                : `/api/qr/generate-obat/${id}`;
            const response = await axios.get(endpoint);
            setPreviewQrCode(response.data.qr_code);
            setPreviewQrData(response.data.qr_data);
        } catch (error) {
            console.error('Failed to load QR code preview:', error);
            alert('Gagal memuat preview QR code');
            setPreviewOpen(false);
        } finally {
            setLoadingPreview(false);
        }
    };

    const downloadQr = (customCode?: string, customData?: any) => {
        const code = customCode || qrCode;
        const data = customData || qrData;
        if (!code) return;
        
        const link = document.createElement('a');
        link.href = code;
        link.download = `QR-${data?.kode_qr || 'code'}.png`;
        link.click();
    };

    const printQr = (customCode?: string, customData?: any) => {
        const code = customCode || qrCode;
        const data = customData || qrData;
        if (!code) return;
        
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            const batchNo = data?.batch?.nomor || '';
            const medicineName = data?.obat?.nama || data?.nama_obat || '';
            const qrStr = data?.kode_qr || '';
            printWindow.document.write(`
                <html>
                    <head>
                        <title>Print QR Code</title>
                        <style>
                            body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; flex-direction: column; }
                            img { max-width: 400px; }
                            .info { text-align: center; margin-top: 20px; font-family: Arial; }
                            .batch { font-size: 18px; font-weight: bold; }
                            .medicine { font-size: 14px; color: #666; }
                        </style>
                    </head>
                    <body>
                        <img src="${code}" />
                        <div class="info">
                            ${batchNo ? `<div class="batch">Batch: ${batchNo}</div>` : ''}
                            <div class="medicine">${medicineName}</div>
                            <div class="medicine">Kode: ${qrStr}</div>
                        </div>
                    </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }
    };

    const copyQrCode = (customData?: any) => {
        const data = customData || qrData;
        if (data?.kode_qr) {
            navigator.clipboard.writeText(data.kode_qr);
            alert('Kode QR berhasil disalin!');
        }
    };

    const quickPrint = async (type: 'batch' | 'obat', id: number) => {
        try {
            const endpoint = type === 'batch' 
                ? `/api/qr/generate/${id}`
                : `/api/qr/generate-obat/${id}`;
            const response = await axios.get(endpoint);
            printQr(response.data.qr_code, response.data.qr_data);
        } catch (error) {
            console.error('Quick print failed:', error);
            alert('Gagal mencetak QR code');
        }
    };

    const quickDownload = async (type: 'batch' | 'obat', id: number) => {
        try {
            const endpoint = type === 'batch' 
                ? `/api/qr/generate/${id}`
                : `/api/qr/generate-obat/${id}`;
            const response = await axios.get(endpoint);
            downloadQr(response.data.qr_code, response.data.qr_data);
        } catch (error) {
            console.error('Quick download failed:', error);
            alert('Gagal mendownload QR code');
        }
    };

    const getResultBadge = (hasil: string) => {
        switch (hasil) {
            case 'success':
                return <Badge variant="default" className="bg-green-600"><CheckCircle2 className="h-3 w-3 mr-1" />Sukses</Badge>;
            case 'expired':
                return <Badge variant="default" className="bg-yellow-600"><AlertTriangle className="h-3 w-3 mr-1" />Expired</Badge>;
            case 'not_found':
                return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Tidak Ditemukan</Badge>;
            case 'error':
                return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Error</Badge>;
            default:
                return <Badge variant="secondary">{hasil}</Badge>;
        }
    };

    const filteredBatches = batches.filter(batch => 
        searchBatch === '' || 
        batch.nomor_batch.toLowerCase().includes(searchBatch.toLowerCase()) ||
        batch.obat.nama_obat.toLowerCase().includes(searchBatch.toLowerCase()) ||
        batch.kode_qr.toLowerCase().includes(searchBatch.toLowerCase())
    );

    const filteredObats = obats.filter(obat => 
        searchObat === '' || 
        obat.nama_obat.toLowerCase().includes(searchObat.toLowerCase()) ||
        obat.kode_obat.toLowerCase().includes(searchObat.toLowerCase())
    );

    const filteredListBatches = batches.filter(batch => 
        searchListBatch === '' || 
        batch.nomor_batch.toLowerCase().includes(searchListBatch.toLowerCase()) ||
        batch.obat.nama_obat.toLowerCase().includes(searchListBatch.toLowerCase()) ||
        batch.kode_qr.toLowerCase().includes(searchListBatch.toLowerCase())
    );

    const filteredListObats = obats.filter(obat => 
        searchListObat === '' || 
        obat.nama_obat.toLowerCase().includes(searchListObat.toLowerCase()) ||
        obat.kode_obat.toLowerCase().includes(searchListObat.toLowerCase())
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="QR Code" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <QrCode className="h-6 w-6" />
                            QR Code Scanner
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Scan, generate, dan kelola QR code untuk batch dan obat
                        </p>
                    </div>
                    <Button asChild variant="outline">
                        <Link href="/qr/analytics">
                            <BarChart3 className="h-4 w-4 mr-2" />
                            Analytics
                        </Link>
                    </Button>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
                    <TabsList className="grid w-full max-w-lg grid-cols-4">
                        <TabsTrigger value="scan" className="flex items-center gap-2">
                            <Scan className="h-4 w-4" />
                            Scan QR
                        </TabsTrigger>
                        <TabsTrigger value="list" className="flex items-center gap-2">
                            <QrCode className="h-4 w-4" />
                            Daftar QR
                        </TabsTrigger>
                        <TabsTrigger value="history" className="flex items-center gap-2">
                            <History className="h-4 w-4" />
                            Riwayat
                        </TabsTrigger>
                        <TabsTrigger value="generate" className="flex items-center gap-2">
                            <QrCode className="h-4 w-4" />
                            Generate
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="scan" className="flex-1">
                        <QrScanner />
                    </TabsContent>

                    <TabsContent value="list" className="space-y-4">
                        <Card>
                            <CardHeader className="pb-3 border-b">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <CardTitle>Daftar QR Code Aktif</CardTitle>
                                        <CardDescription>Cari dan gunakan QR code yang sudah digenerate sebelumnya</CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2 border rounded-lg p-0.5 bg-muted">
                                        <Button 
                                            variant={listSubTab === 'batch' ? 'default' : 'ghost'} 
                                            size="sm" 
                                            className="h-8"
                                            onClick={() => setListSubTab('batch')}
                                        >
                                            QR Batch
                                        </Button>
                                        <Button 
                                            variant={listSubTab === 'obat' ? 'default' : 'ghost'} 
                                            size="sm" 
                                            className="h-8"
                                            onClick={() => setListSubTab('obat')}
                                        >
                                            QR Obat (Master)
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                {listSubTab === 'batch' ? (
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                placeholder="Cari nomor batch, nama obat, atau kode QR..."
                                                className="pl-9"
                                                value={searchListBatch}
                                                onChange={(e) => setSearchListBatch(e.target.value)}
                                            />
                                        </div>

                                        <div className="rounded-md border">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Nama Obat</TableHead>
                                                        <TableHead>No. Batch</TableHead>
                                                        <TableHead>Expired</TableHead>
                                                        <TableHead>Stok Tersedia</TableHead>
                                                        <TableHead>Kode QR</TableHead>
                                                        <TableHead className="text-right">Aksi</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {filteredListBatches.length === 0 ? (
                                                        <TableRow>
                                                            <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                                                Tidak ada QR batch aktif ditemukan
                                                            </TableCell>
                                                        </TableRow>
                                                    ) : (
                                                        filteredListBatches.map((batch) => (
                                                            <TableRow key={batch.id} className="hover:bg-muted/40 transition-colors">
                                                                <TableCell className="font-semibold">{batch.obat.nama_obat}</TableCell>
                                                                <TableCell className="font-mono text-sm">{batch.nomor_batch}</TableCell>
                                                                <TableCell>
                                                                    {new Date(batch.tanggal_expired).toLocaleDateString('id-ID', {
                                                                        day: '2-digit',
                                                                        month: 'short',
                                                                        year: 'numeric'
                                                                    })}
                                                                </TableCell>
                                                                <TableCell className="font-medium">{batch.stok_tersedia}</TableCell>
                                                                <TableCell className="font-mono text-xs text-muted-foreground">{batch.kode_qr}</TableCell>
                                                                <TableCell className="text-right space-x-1">
                                                                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-slate-100" title="View QR" onClick={() => showQrCodePreview('batch', batch.id)}>
                                                                        <Eye className="h-4 w-4 text-slate-700" />
                                                                    </Button>
                                                                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-slate-100" title="Print QR" onClick={() => quickPrint('batch', batch.id)}>
                                                                        <Printer className="h-4 w-4 text-slate-700" />
                                                                    </Button>
                                                                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-slate-100" title="Download QR" onClick={() => quickDownload('batch', batch.id)}>
                                                                        <Download className="h-4 w-4 text-slate-700" />
                                                                    </Button>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                placeholder="Cari kode obat atau nama obat..."
                                                className="pl-9"
                                                value={searchListObat}
                                                onChange={(e) => setSearchListObat(e.target.value)}
                                            />
                                        </div>

                                        <div className="rounded-md border">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Nama Obat</TableHead>
                                                        <TableHead>Kode Obat</TableHead>
                                                        <TableHead>Kategori</TableHead>
                                                        <TableHead>Satuan</TableHead>
                                                        <TableHead className="text-right">Aksi</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {filteredListObats.length === 0 ? (
                                                        <TableRow>
                                                            <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                                                Tidak ada QR obat ditemukan
                                                            </TableCell>
                                                        </TableRow>
                                                    ) : (
                                                        filteredListObats.map((obat) => (
                                                            <TableRow key={obat.id} className="hover:bg-muted/40 transition-colors">
                                                                <TableCell className="font-semibold">{obat.nama_obat}</TableCell>
                                                                <TableCell className="font-mono text-sm">{obat.kode_obat}</TableCell>
                                                                <TableCell>{obat.kategori?.nama_kategori || '-'}</TableCell>
                                                                <TableCell>{obat.satuan?.nama_satuan || '-'}</TableCell>
                                                                <TableCell className="text-right space-x-1">
                                                                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-slate-100" title="View QR" onClick={() => showQrCodePreview('obat', obat.id)}>
                                                                        <Eye className="h-4 w-4 text-slate-700" />
                                                                    </Button>
                                                                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-slate-100" title="Print QR" onClick={() => quickPrint('obat', obat.id)}>
                                                                        <Printer className="h-4 w-4 text-slate-700" />
                                                                    </Button>
                                                                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-slate-100" title="Download QR" onClick={() => quickDownload('obat', obat.id)}>
                                                                        <Download className="h-4 w-4 text-slate-700" />
                                                                    </Button>
                                                                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-teal-50" title="Restock / Tambah Batch" asChild>
                                                                        <Link href={`/obat/create?existing_obat_id=${obat.id}`}>
                                                                            <PlusCircle className="h-4 w-4 text-teal-600" />
                                                                        </Link>
                                                                    </Button>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="history" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle>Riwayat Scan</CardTitle>
                                        <CardDescription>Log semua aktivitas scan QR code</CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Filter className="h-4 w-4 text-muted-foreground" />
                                        <Select value={filterResult} onValueChange={setFilterResult}>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Filter hasil" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">Semua</SelectItem>
                                                <SelectItem value="success">Sukses</SelectItem>
                                                <SelectItem value="expired">Expired</SelectItem>
                                                <SelectItem value="not_found">Tidak Ditemukan</SelectItem>
                                                <SelectItem value="error">Error</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {loadingLogs ? (
                                    <div className="text-center py-8 text-muted-foreground">Loading...</div>
                                ) : scanLogs.length === 0 ? (
                                    <div className="text-center py-8 text-muted-foreground">
                                        <History className="h-12 w-12 mx-auto mb-2 opacity-30" />
                                        <p>Belum ada riwayat scan</p>
                                    </div>
                                ) : (
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Waktu</TableHead>
                                                <TableHead>Kode QR</TableHead>
                                                <TableHead>Batch</TableHead>
                                                <TableHead>Obat</TableHead>
                                                <TableHead>User</TableHead>
                                                <TableHead>Metode</TableHead>
                                                <TableHead>Hasil</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {scanLogs.map((log) => (
                                                <TableRow key={log.id}>
                                                    <TableCell className="text-sm">
                                                        {new Date(log.waktu_scan).toLocaleString('id-ID', {
                                                            day: '2-digit',
                                                            month: 'short',
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })}
                                                    </TableCell>
                                                    <TableCell className="font-mono text-sm">{log.kode_qr_scanned}</TableCell>
                                                    <TableCell className="font-mono text-sm">
                                                        {log.batch?.nomor_batch || '-'}
                                                    </TableCell>
                                                    <TableCell>{log.batch?.obat?.nama_obat || '-'}</TableCell>
                                                    <TableCell>{log.user?.name || 'Guest'}</TableCell>
                                                    <TableCell>
                                                        <Badge variant="outline" className="gap-1">
                                                            {log.metode_scan === 'camera' ? 
                                                                <><Camera className="h-3 w-3" />Camera</> : 
                                                                <><Search className="h-3 w-3" />Manual</>
                                                            }
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell>{getResultBadge(log.hasil_scan)}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="generate" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Generate QR Code</CardTitle>
                                    <CardDescription>Pilih batch atau obat untuk generate QR code</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Pilih Tipe QR</Label>
                                        <div className="grid grid-cols-2 gap-2">
                                            <Button 
                                                type="button" 
                                                variant={generateType === 'batch' ? 'default' : 'outline'}
                                                onClick={() => {
                                                    setGenerateType('batch');
                                                    setQrCode('');
                                                    setQrData(null);
                                                }}
                                            >
                                                Batch Obat
                                            </Button>
                                            <Button 
                                                type="button" 
                                                variant={generateType === 'obat' ? 'default' : 'outline'}
                                                onClick={() => {
                                                    setGenerateType('obat');
                                                    setQrCode('');
                                                    setQrData(null);
                                                }}
                                            >
                                                Obat (Master)
                                            </Button>
                                        </div>
                                    </div>

                                    {generateType === 'batch' ? (
                                        <>
                                            <div className="space-y-2">
                                                <Label htmlFor="search-batch">Cari Batch</Label>
                                                <Input
                                                    id="search-batch"
                                                    placeholder="Cari nomor batch, nama obat, atau kode QR..."
                                                    value={searchBatch}
                                                    onChange={(e) => setSearchBatch(e.target.value)}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="batch-select">Pilih Batch</Label>
                                                <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                                                    <SelectTrigger id="batch-select">
                                                        <SelectValue placeholder="Pilih batch..." />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {filteredBatches.length === 0 ? (
                                                            <div className="p-4 text-sm text-muted-foreground text-center">
                                                                Tidak ada batch ditemukan
                                                            </div>
                                                        ) : (
                                                            filteredBatches.map((batch) => (
                                                                <SelectItem key={batch.id} value={batch.id.toString()}>
                                                                    <div className="flex flex-col">
                                                                        <span className="font-semibold">{batch.obat.nama_obat}</span>
                                                                        <span className="text-xs text-muted-foreground">
                                                                            {batch.nomor_batch} • Exp: {new Date(batch.tanggal_expired).toLocaleDateString('id-ID')}
                                                                        </span>
                                                                    </div>
                                                                </SelectItem>
                                                            ))
                                                        )}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="space-y-2">
                                                <Label htmlFor="search-obat">Cari Obat</Label>
                                                <Input
                                                    id="search-obat"
                                                    placeholder="Cari nama obat atau kode..."
                                                    value={searchObat}
                                                    onChange={(e) => setSearchObat(e.target.value)}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="obat-select">Pilih Obat</Label>
                                                <Select value={selectedObat} onValueChange={setSelectedObat}>
                                                    <SelectTrigger id="obat-select">
                                                        <SelectValue placeholder="Pilih obat..." />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {filteredObats.length === 0 ? (
                                                            <div className="p-4 text-sm text-muted-foreground text-center">
                                                                Tidak ada obat ditemukan
                                                            </div>
                                                        ) : (
                                                            filteredObats.map((obat) => (
                                                                <SelectItem key={obat.id} value={obat.id.toString()}>
                                                                    <div className="flex flex-col">
                                                                        <span className="font-semibold">{obat.nama_obat}</span>
                                                                        <span className="text-xs text-muted-foreground">
                                                                            {obat.kode_obat}
                                                                        </span>
                                                                    </div>
                                                                </SelectItem>
                                                            ))
                                                        )}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </>
                                    )}

                                    <Button 
                                        onClick={generateQr} 
                                        className="w-full bg-teal-600 hover:bg-teal-700"
                                        disabled={(generateType === 'batch' ? !selectedBatch : !selectedObat) || generatingQr}
                                    >
                                        {generatingQr ? 'Generating...' : 'Generate QR Code'}
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>QR Code Preview</CardTitle>
                                    <CardDescription>Preview dan download QR code</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {qrCode ? (
                                        <div className="space-y-4">
                                            <div className="flex justify-center p-4 border rounded-lg bg-white shadow-inner">
                                                <img src={qrCode} alt="QR Code" className="max-w-[300px] w-full" />
                                            </div>
                                            
                                            {qrData && (
                                                <div className="space-y-2 p-3 border rounded-lg bg-muted/30 text-sm">
                                                    {qrData.type === 'obat' ? (
                                                        <>
                                                            <div>
                                                                <span className="text-xs text-muted-foreground">Obat (Master):</span>
                                                                <p className="font-semibold">{qrData.nama_obat}</p>
                                                            </div>
                                                            <div>
                                                                <span className="text-xs text-muted-foreground">Kode Obat:</span>
                                                                <p className="font-mono">{qrData.kode_obat}</p>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div>
                                                                <span className="text-xs text-muted-foreground">Obat:</span>
                                                                <p className="font-semibold">{qrData.obat?.nama}</p>
                                                            </div>
                                                            <div>
                                                                <span className="text-xs text-muted-foreground">Batch:</span>
                                                                <p className="font-mono">{qrData.batch?.nomor}</p>
                                                            </div>
                                                            <div>
                                                                <span className="text-xs text-muted-foreground">Kode QR:</span>
                                                                <p className="font-mono text-sm">{qrData.kode_qr}</p>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            )}

                                            <div className="grid grid-cols-3 gap-2">
                                                <Button onClick={() => downloadQr()} variant="outline" size="sm">
                                                    <Download className="h-4 w-4 mr-1" />
                                                    Download
                                                </Button>
                                                <Button onClick={() => printQr()} variant="outline" size="sm">
                                                    <Printer className="h-4 w-4 mr-1" />
                                                    Print
                                                </Button>
                                                <Button onClick={() => copyQrCode()} variant="outline" size="sm">
                                                    <Copy className="h-4 w-4 mr-1" />
                                                    Copy
                                                </Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center py-12 text-muted-foreground">
                                            <QrCode className="h-16 w-16 mx-auto mb-4 opacity-30" />
                                            <p>Pilih item untuk generate QR code</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            {/* Dialog Preview QR Code */}
            <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
                <DialogContent className="max-w-md bg-white border border-slate-200">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold flex items-center gap-2">
                            <QrCode className="h-5 w-5 text-teal-600" />
                            Detail QR Code
                        </DialogTitle>
                        <DialogDescription>
                            Preview, print, atau unduh QR code item
                        </DialogDescription>
                    </DialogHeader>
                    {loadingPreview ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <Loader2 className="h-10 w-10 animate-spin text-teal-600 mb-2" />
                            <p className="text-sm text-slate-500 font-medium">Menghasilkan QR Code...</p>
                        </div>
                    ) : (
                        previewQrCode && (
                            <div className="space-y-6">
                                <div className="flex justify-center p-4 border rounded-xl bg-slate-50 shadow-inner">
                                    <img src={previewQrCode} alt="QR Code" className="max-w-[240px] w-full" />
                                </div>
                                
                                {previewQrData && (
                                    <div className="space-y-3 p-4 border rounded-xl bg-slate-50/50 text-sm">
                                        {previewQrData.type === 'obat' ? (
                                            <>
                                                <div className="grid grid-cols-3 border-b pb-2">
                                                    <span className="text-slate-500 font-medium col-span-1">Tipe QR:</span>
                                                    <span className="font-semibold col-span-2 text-teal-700 flex items-center gap-1">
                                                        <Badge className="bg-teal-100 text-teal-800 border-none">Master Obat</Badge>
                                                    </span>
                                                </div>
                                                <div className="grid grid-cols-3 border-b pb-2">
                                                    <span className="text-slate-500 font-medium col-span-1">Obat:</span>
                                                    <span className="font-semibold col-span-2 text-slate-800">{previewQrData.nama_obat}</span>
                                                </div>
                                                <div className="grid grid-cols-3 border-b pb-2">
                                                    <span className="text-slate-500 font-medium col-span-1">Kode Obat:</span>
                                                    <span className="font-mono col-span-2 text-slate-800">{previewQrData.kode_obat}</span>
                                                </div>
                                                <div className="grid grid-cols-3">
                                                    <span className="text-slate-500 font-medium col-span-1">Kategori:</span>
                                                    <span className="col-span-2 text-slate-800">{previewQrData.kategori || '-'}</span>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="grid grid-cols-3 border-b pb-2">
                                                    <span className="text-slate-500 font-medium col-span-1">Tipe QR:</span>
                                                    <span className="font-semibold col-span-2 text-indigo-700">
                                                        <Badge className="bg-indigo-100 text-indigo-800 border-none">Batch Obat</Badge>
                                                    </span>
                                                </div>
                                                <div className="grid grid-cols-3 border-b pb-2">
                                                    <span className="text-slate-500 font-medium col-span-1">Obat:</span>
                                                    <span className="font-semibold col-span-2 text-slate-800">{previewQrData.obat?.nama}</span>
                                                </div>
                                                <div className="grid grid-cols-3 border-b pb-2">
                                                    <span className="text-slate-500 font-medium col-span-1">No. Batch:</span>
                                                    <span className="font-mono col-span-2 text-slate-800 font-semibold">{previewQrData.batch?.nomor}</span>
                                                </div>
                                                <div className="grid grid-cols-3 border-b pb-2">
                                                    <span className="text-slate-500 font-medium col-span-1">Stok:</span>
                                                    <span className="col-span-2 text-slate-800 font-medium">{previewQrData.batch?.stok} {previewQrData.obat?.satuan}</span>
                                                </div>
                                                <div className="grid grid-cols-3">
                                                    <span className="text-slate-500 font-medium col-span-1">Expired:</span>
                                                    <span className="col-span-2 text-red-600 font-semibold">{previewQrData.batch?.expired}</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}

                                <div className="grid grid-cols-3 gap-2 pt-2">
                                    <Button onClick={() => downloadQr(previewQrCode, previewQrData)} variant="outline" size="sm" className="hover:bg-slate-50">
                                        <Download className="h-4 w-4 mr-2" />
                                        Download
                                    </Button>
                                    <Button onClick={() => printQr(previewQrCode, previewQrData)} variant="outline" size="sm" className="hover:bg-slate-50">
                                        <Printer className="h-4 w-4 mr-2" />
                                        Print
                                    </Button>
                                    <Button onClick={() => copyQrCode(previewQrData)} variant="outline" size="sm" className="hover:bg-slate-50">
                                        <Copy className="h-4 w-4 mr-2" />
                                        Copy Code
                                    </Button>
                                </div>
                            </div>
                        )
                    )}
                </DialogContent>
            </Dialog>
        </AppLayout>
    );
}
