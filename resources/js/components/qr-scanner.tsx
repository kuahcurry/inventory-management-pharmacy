import { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Camera, Loader2, Search, Package, Calendar, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

interface BatchData {
  id: number;
  nomor_batch: string;
  tanggal_expired: string;
  stok_tersedia: number;
  obat: {
    id: number;
    nama_obat: string;
    kode_obat: string;
    kategori: { nama_kategori: string };
    jenis: { nama_jenis: string };
    satuan: { nama_satuan: string };
  };
}

interface ScanResponse {
  success: boolean;
  message: string;
  severity: 'success' | 'warning' | 'error';
  batch?: BatchData;
  obat?: BatchData['obat'];
}

export function QrScanner() {
  const [scanning, setScanning] = useState(false);
  const [manualCode, setManualCode] = useState('');
  const [scanResult, setScanResult] = useState<ScanResponse | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [cameraLoading, setCameraLoading] = useState(false);
  const [availableCameras, setAvailableCameras] = useState<Array<{ id: string; label: string }>>([]);
  const [selectedCameraId, setSelectedCameraId] = useState('');
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const invalidAlertAtRef = useRef(0);

  const showInvalidQrPopup = () => {
    const now = Date.now();

    if (now - invalidAlertAtRef.current < 2000) {
      return;
    }

    invalidAlertAtRef.current = now;
    alert('QR Code tidak valid silahkan periksa kembali');
  };

  const normalizeDecodedQr = (decodedText: string) => {
    const text = decodedText.trim();

    if (!text) return '';

    try {
      const data = JSON.parse(text);
      return (
        data.kode_qr ||
        data.kodeQr ||
        data.code ||
        data.batch?.kode_qr ||
        data.batch?.code ||
        text
      );
    } catch {
      return text;
    }
  };

  const loadCameras = async () => {
    const cameras = await Html5Qrcode.getCameras();
    const mappedCameras = cameras.map((camera) => ({
      id: camera.id,
      label: camera.label || `Kamera ${camera.id.slice(0, 6)}`,
    }));

    setAvailableCameras(mappedCameras);

    if (!selectedCameraId && mappedCameras.length > 0) {
      const preferred = mappedCameras.find((camera) => {
        const label = camera.label.toLowerCase();
        return /(back|rear|environment)/i.test(label) && !/(wide|ultra)/i.test(label);
      }) ?? mappedCameras.find((camera) => /(back|rear|environment)/i.test(camera.label)) ?? mappedCameras[0];

      setSelectedCameraId(preferred.id);
      return preferred.id;
    }

    return selectedCameraId;
  };

  const requestCameraPermission = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    stream.getTracks().forEach((track) => track.stop());
  };

  const processScan = async (kodeQr: string, metode: 'camera' | 'scanner') => {
    setLoading(true);
    try {
      const response = await axios.post<ScanResponse>('/api/qr/scan', {
        kode_qr: kodeQr,
        metode: metode,
      });
      
      setScanResult(response.data);
      setError('');
      
      // Stop scanner after successful scan
      if (scannerRef.current?.isScanning) {
        await scannerRef.current.stop();
        setScanning(false);
      }
    } catch (err: any) {
      const errorData = err.response?.data;
      setError(errorData?.message || 'Gagal memindai QR code');

      if (metode === 'camera' && [404, 422].includes(err.response?.status)) {
        showInvalidQrPopup();
      }
      
      // If expired, still show batch info
      if (errorData?.batch) {
        setScanResult(errorData);
      } else {
        setScanResult(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const startCameraScanner = async () => {
    setCameraLoading(true);
    setError('');

    try {
      await requestCameraPermission();
      const cameraId = await loadCameras();
      const scanner = new Html5Qrcode("qr-reader");
      scannerRef.current = scanner;

      const cameraSource = cameraId
        ? cameraId
        : { facingMode: { ideal: 'environment' } };
      
      await scanner.start(
        cameraSource,
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          const normalizedCode = normalizeDecodedQr(decodedText);

          if (normalizedCode) {
            processScan(normalizedCode, 'camera');
          } else {
            showInvalidQrPopup();
            setError('QR Code tidak valid');
          }
        },
        undefined
      );
      
      setScanning(true);
    } catch (err) {
      console.error('Failed to start camera scanner:', err);
      setError('Gagal mengakses kamera. Pastikan izin kamera sudah diberikan atau gunakan input manual.');
      setScanning(false);
    }
    finally {
      setCameraLoading(false);
    }
  };

  const stopScanner = async () => {
    if (scannerRef.current?.isScanning) {
      await scannerRef.current.stop();
      setScanning(false);
    }
  };

  const handleManualScan = () => {
    const normalizedCode = normalizeDecodedQr(manualCode);

    if (normalizedCode) {
      processScan(normalizedCode, 'scanner');
    }
  };

  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  const getSeverityIcon = (severity?: string) => {
    switch (severity) {
      case 'success':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Scan QR Code
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div 
            id="qr-reader" 
            className="w-full rounded-lg overflow-hidden border"
            style={{ minHeight: scanning ? '300px' : '0px' }}
          />
          
          <div className="flex gap-2">
            <div className="flex-1">
              <Select value={selectedCameraId} onValueChange={setSelectedCameraId}>
                <SelectTrigger>
                  <SelectValue placeholder={availableCameras.length ? 'Pilih kamera' : 'Kamera akan dimuat otomatis'} />
                </SelectTrigger>
                <SelectContent>
                  {availableCameras.length === 0 ? (
                    <SelectItem value="auto">Auto</SelectItem>
                  ) : (
                    availableCameras.map((camera) => (
                      <SelectItem key={camera.id} value={camera.id}>
                        {camera.label}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
            {!scanning ? (
              <Button onClick={startCameraScanner} className="flex-1" disabled={loading || cameraLoading}>
                <Camera className="mr-2 h-4 w-4" />
                {cameraLoading ? 'Membuka Kamera...' : 'Start Camera'}
              </Button>
            ) : (
              <Button onClick={stopScanner} variant="destructive" className="flex-1">
                Stop Scanner
              </Button>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Atau masukkan manual
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Masukkan kode QR (contoh: QR-20260210-A3F2)"
              value={manualCode}
              onChange={(e) => setManualCode(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleManualScan()}
              disabled={loading}
            />
            <Button onClick={handleManualScan} disabled={loading || !manualCode.trim()}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            </Button>
          </div>

          {loading && (
            <div className="text-center py-4">
              <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
              <p className="text-sm text-muted-foreground mt-2">Memproses scan...</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Hasil Scan
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && !scanResult && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {scanResult && scanResult.batch && (
            <div className="space-y-4">
              <Alert variant={
                scanResult.severity === 'error' ? 'destructive' : 
                scanResult.severity === 'warning' ? 'default' : 
                'default'
              }>
                <div className="flex items-center gap-2">
                  {getSeverityIcon(scanResult.severity)}
                  <AlertDescription>{scanResult.message}</AlertDescription>
                </div>
              </Alert>

              <div className="space-y-3 p-4 border rounded-lg bg-muted/30">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Obat</span>
                    </div>
                    <p className="font-semibold text-lg">{scanResult.obat?.nama_obat}</p>
                    <p className="text-sm text-muted-foreground font-mono">{scanResult.obat?.kode_obat}</p>
                  </div>
                  <Badge variant={scanResult.severity === 'error' ? 'destructive' : 'default'}>
                    {scanResult.obat?.kategori?.nama_kategori}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t">
                  <div>
                    <span className="text-sm text-muted-foreground">Batch</span>
                    <p className="font-mono font-semibold">{scanResult.batch.nomor_batch}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Jenis</span>
                    <p className="font-semibold">{scanResult.obat?.jenis?.nama_jenis}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <span className="text-sm text-muted-foreground">Expired</span>
                      <p className="font-semibold">
                        {new Date(scanResult.batch.tanggal_expired).toLocaleDateString('id-ID', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <span className="text-sm text-muted-foreground">Stok</span>
                      <p className="font-semibold">
                        {scanResult.batch.stok_tersedia} {scanResult.obat?.satuan?.nama_satuan}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full" asChild>
                <a href={`/obat/batch/${scanResult.batch.id}?from=qr`}>
                  Lihat Detail Batch
                </a>
              </Button>
            </div>
          )}

          {!scanResult && !error && !loading && (
            <div className="text-center text-muted-foreground py-12">
              <Camera className="mx-auto h-16 w-16 mb-4 opacity-30" />
              <p className="text-lg font-medium mb-1">Belum ada hasil scan</p>
              <p className="text-sm">Scan QR code atau masukkan kode manual untuk melihat informasi batch</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
