$OutputPath = "C:\Users\aqefh\Documents\Projects\sim-apotek-skripshit\docs\DFD_Comprehensive.drawio"

function esc($s) { "$s".Replace("&","&amp;").Replace("<","&lt;").Replace(">","&gt;").Replace('"',"&quot;") }

$sw = New-Object System.IO.StreamWriter($OutputPath, $false, [System.Text.UTF8Encoding]::new($false))
$sw.WriteLine('<?xml version="1.0" encoding="UTF-8"?>')
$sw.WriteLine('<mxfile host="app.diagrams.net">')

$cellId = 1
function NextId() { $script:cellId++; return $script:cellId }

function AddProcess($w, $x, $y, $pw, $ph, $label, $fill, $stroke) {
    $id = NextId; $l = esc $label; $f = esc $fill; $s = esc $stroke
    $w.WriteLine("        <mxCell id=`"$id`" value=`"$l`" style=`"rounded=1;whiteSpace=wrap;html=1;fillColor=$f;strokeColor=$s;fontSize=11;`" parent=`"1`" vertex=`"1`">")
    $w.WriteLine("          <mxGeometry x=`"$x`" y=`"$y`" width=`"$pw`" height=`"$ph`" as=`"geometry`" />")
    $w.WriteLine("        </mxCell>")
    return $id
}

function AddEntity($w, $x, $y, $pw, $ph, $label) {
    $id = NextId; $l = esc $label
    $w.WriteLine("        <mxCell id=`"$id`" value=`"$l`" style=`"rounded=0;whiteSpace=wrap;html=1;shadow=1;fillColor=#FFF2CC;strokeColor=#D6B656;fontSize=11;`" parent=`"1`" vertex=`"1`">")
    $w.WriteLine("          <mxGeometry x=`"$x`" y=`"$y`" width=`"$pw`" height=`"$ph`" as=`"geometry`" />")
    $w.WriteLine("        </mxCell>")
    return $id
}

function AddStore($w, $x, $y, $pw, $ph, $label) {
    $id = NextId; $l = esc $label
    $w.WriteLine("        <mxCell id=`"$id`" value=`"$l`" style=`"shape=cylinder;whiteSpace=wrap;html=1;fillColor=#E1D5E7;strokeColor=#9673A6;fontSize=11;`" parent=`"1`" vertex=`"1`">")
    $w.WriteLine("          <mxGeometry x=`"$x`" y=`"$y`" width=`"$pw`" height=`"$ph`" as=`"geometry`" />")
    $w.WriteLine("        </mxCell>")
    return $id
}

function AddFlow($w, $from, $to, $exX, $exY, $enX, $enY, $label) {
    $id = NextId; $l = esc $label
    $style = "edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=$exX;exitY=$exY;exitDx=0;exitDy=0;entryX=$enX;entryY=$enY;entryDx=0;entryDy=0;endArrow=open;fontSize=10;"
    $w.WriteLine("        <mxCell id=`"$id`" value=`"$l`" style=`"$style`" parent=`"1`" source=`"$from`" target=`"$to`" edge=`"1`">")
    $w.WriteLine("          <mxGeometry relative=`"1`" as=`"geometry`" />")
    $w.WriteLine("        </mxCell>")
}

function NewDiagram($name, $w, $pw, $ph) {
    $sw.WriteLine('  <diagram id="' + $name + '" name="' + $name + '">')
    $sw.WriteLine('    <mxGraphModel dx="0" dy="0" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="' + $pw + '" pageHeight="' + $ph + '" math="0" shadow="0">')
    $sw.WriteLine('      <root>')
    $sw.WriteLine('        <mxCell id="0" />')
    $sw.WriteLine('        <mxCell id="1" parent="0" />')
}

function EndDiagram() {
    $sw.WriteLine('      </root>')
    $sw.WriteLine('    </mxGraphModel>')
    $sw.WriteLine('  </diagram>')
}

# ============================================================
# DFD LEVEL 0 - KONTEX (Sistem Manajemen Inventaris Apotek)
# ============================================================
NewDiagram "DFD Level 0 - Konteks" $sw 2000 1400

# External entities
$eUser     = AddEntity $sw 40  200  150 60 "Pengguna Apotek"
$eSupplier = AddEntity $sw 1800 200 150 60 "Supplier"
$eKonsumen = AddEntity $sw 40  700  150 60 "Konsumen / Pasien"
$eAdmin    = AddEntity $sw 1800 700 150 60 "Administrator"

# Main process (Sistem Manajemen Inventaris)
sMain = AddProcess $sw 1000 600 260 160 "Sistem Manajemen Inventaris Apotek" "#dae8fc" "#6c8ebf"

# Data stores
dsObat     = AddStore $sw 300 1300 160 60 "D1 Data Obat"
$dsBatch    = AddStore $sw 500 1300 160 60 "D2 Batch Obat"
$dsTransaksi = AddStore $sw 700 1300 160 60 "D3 Transaksi"
$dsLaporan  = AddStore $sw 900 1300 160 60 "D4 Laporan"
$dsUser     = AddStore $sw 1100 1300 160 60 "D5 User"
$dsQRLog    = AddStore $sw 1300 1300 160 60 "D6 QR Scan Log"
$dsAPI      = AddStore $sw 1500 1300 160 60 "D7 API Cache"

# Flows
AddFlow $sw $eUser $sMain 0.5 0.5 0 0.5 "Akses sistem"
AddFlow $sw $eSupplier $sMain 0.5 0.5 0 0.5 "Faktur pembelian & data barang"
AddFlow $sw $eKonsumen $sMain 0.5 0.5 0 0.5 "Resep & permintaan"
AddFlow $sw $eAdmin $sMain 0.5 0.5 0 0.5 "Manajemen user & sistem"
AddFlow $sw $sMain $dsObat 0.5 0 0.5 1 "Simpan/baca data obat"
AddFlow $sw $sMain $dsBatch 0.5 0 0.5 1 "Simpan/baca data batch"
AddFlow $sw $sMain $dsTransaksi 0.5 0 0.5 1 "Simpan/baca transaksi"
AddFlow $sw $sMain $dsLaporan 0.5 0 0.5 1 "Simpan/baca laporan"
AddFlow $sw $sMain $dsUser 0.5 0 0.5 1 "Manajemen user"
AddFlow $sw $sMain $dsQRLog 0.5 0 0.5 1 "Simpan log scan QR"
AddFlow $sw $sMain $dsAPI 0.5 0 0.5 1 "Cache data API"
AddFlow $sw $sMain $eUser 0.5 1 0.5 0 "Laporan & notifikasi"
AddFlow $sw $sMain $eKonsumen 0.5 1 0.5 0 "Resep & status transaksi"

EndDiagram

# ============================================================
# DFD LEVEL 1 - OVERVIEW (Arsitektur Sistem)
# ============================================================
NewDiagram "DFD Level 1 - Overview" $sw 2400 1800

# External entities (same as Level 0)
$eUser     = AddEntity $sw 40  200  150 60 "Pengguna Apotek"
$eSupplier = AddEntity $sw 2240 200 150 60 "Supplier"
$eKonsumen = AddEntity $sw 40  700  150 60 "Konsumen / Pasien"
$eAdmin    = AddEntity $sw 2240 700 150 60 "Administrator"

# Data stores (same as Level 0)
$dsObat     = AddStore $sw 300 1300 160 60 "D1 Data Obat"
$dsBatch    = AddStore $sw 500 1300 160 60 "D2 Batch Obat"
$dsTransaksi = AddStore $sw 700 1300 160 60 "D3 Transaksi"
$dsLaporan  = AddStore $sw 900 1300 160 60 "D4 Laporan"
$dsUser     = AddStore $sw 1100 1300 160 60 "D5 User"
$dsQRLog    = AddStore $sw 1300 1300 160 60 "D6 QR Scan Log"
$dsAPI      = AddStore $sw 1500 1300 160 60 "D7 API Cache"

# Processes
$p1 = AddProcess $sw 260 200 180 60 "1.0 Manajemen\\nObat & Stok" "#dae8fc" "#6c8ebf"
$p2 = AddProcess $sw 540 200 180 60 "1.1 Kelola\\nData Obat" "#dae8fc" "#6c8ebf"
$p3 = AddProcess $sw 820 200 180 60 "1.2 Kelola\\nBatch Obat" "#dae8fc" "#6c8ebf"
$p4 = AddProcess $sw 1100 200 180 60 "1.3 Kelola\\nResep" "#dae8fc" "#6c8ebf"
$p5 = AddProcess $sw 1380 200 180 60 "1.4 Pemusnahan\\nObat" "#dae8fc" "#6c8ebf"
$p6 = AddProcess $sw 260 500 180 60 "2.0 Transaksi &\\nKasir" "#dae8fc" "#6c8ebf"
$p7 = AddProcess $sw 540 500 180 60 "2.1 Catat Barang\\nMasuk" "#dae8fc" "#6c8ebf"
$p8 = AddProcess $sw 820 500 180 60 "2.2 Catat Barang\\nKeluar" "#dae8fc" "#6c8ebf"
$p9 = AddProcess $sw 1100 500 180 60 "2.3 Kelola\\nTransaksi" "#dae8fc" "#6c8ebf"
$p10 = AddProcess $sw 1380 500 180 60 "2.4 Kelola\\nHutang" "#dae8fc" "#6c8ebf"
$p11 = AddProcess $sw 260 800 180 60 "3.0 QR Code &\\nScanning" "#dae8fc" "#6c8ebf"
$p12 = AddProcess $sw 540 800 180 60 "3.1 Generate\\nQR Code" "#dae8fc" "#6c8ebf"
$p13 = AddProcess $sw 820 800 180 60 "3.2 Scan\\nQR Code" "#dae8fc" "#6c8ebf"
$p14 = AddProcess $sw 1100 800 180 60 "3.3 Audit\\nScan QR" "#dae8fc" "#6c8ebf"
$p15 = AddProcess $sw 1380 800 180 60 "3.4 Sesi Stok\\nOpname" "#dae8fc" "#6c8ebf"
$p16 = AddProcess $sw 260 1100 180 60 "4.0 Laporan &\\nAnalisis" "#dae8fc" "#6c8ebf"
$p17 = AddProcess $sw 540 1100 180 60 "4.1 Laporan\\nStok" "#dae8fc" "#6c8ebf"
$p18 = AddProcess $sw 820 1100 180 60 "4.2 Laporan\\nTransaksi" "#dae8fc" "#6c8ebf"
$p19 = AddProcess $sw 1100 1100 180 60 "4.3 Laporan\\nPenjualan" "#dae8fc" "#6c8ebf"
$p20 = AddProcess $sw 1380 1100 180 60 "4.4 Laporan\\nKeuangan" "#dae8fc" "#6c8ebf"
$p21 = AddProcess $sw 260 1400 180 60 "5.0 RESTful\\nAPI" "#dae8fc" "#6c8ebf"
$p22 = AddProcess $sw 540 1400 180 60 "5.1 Web\\nFrontend" "#dae8fc" "#6c8ebf"
$p23 = AddProcess $sw 820 1400 180 60 "5.2 Visualisasi\\nData" "#dae8fc" "#6c8ebf"
$p24 = AddProcess $sw 1100 1400 180 60 "5.3 Manajemen\\nUser" "#dae8fc" "#6c8ebf"
$p25 = AddProcess $sw 1380 1400 180 60 "5.4 Integrasi\\nLuar" "#dae8fc" "#6c8ebf"

# Flows
# 1.0 Manajemen Obat & Stok
AddFlow $sw $eUser $p1 0.5 0.5 0 0.5 "Akses manajemen"
AddFlow $sw $p1 $p2 0.5 1 0.5 0 "Kelola data obat"
AddFlow $sw $p1 $p3 0.5 1 0.5 0 "Kelola batch"
AddFlow $sw $p1 $p4 0.5 1 0.5 0 "Kelola resep"
AddFlow $sw $p1 $p5 0.5 1 0.5 0 "Kelola pemusnahan"
AddFlow $sw $p2 $dsObat 0.5 0 0.5 1 "CRUD obat"
AddFlow $sw $p3 $dsBatch 0.5 0 0.5 1 "CRUD batch"
AddFlow $sw $p3 $dsObat 0.5 0 0.5 1 "Referensi obat"
AddFlow $sw $p4 $dsResep 0.5 0 0.5 1 "CRUD resep"
AddFlow $sw $p4 $dsObat 0.5 0 0.5 1 "Cek stok obat"
AddFlow $sw $p5 $dsBatch 0.5 0 0.5 1 "CRUD pemusnahan"

# 2.0 Transaksi & Kasir
AddFlow $sw $eUser $p6 0.5 0.5 0 0.5 "Akses kasir"
AddFlow $sw $p6 $p7 0.5 1 0.5 0 "Catat barang masuk"
AddFlow $sw $p6 $p8 0.5 1 0.5 0 "Catat barang keluar"
AddFlow $sw $p6 $p9 0.5 1 0.5 0 "Kelola transaksi"
AddFlow $sw $p6 $p10 0.5 1 0.5 0 "Kelola hutang"
AddFlow $sw $p7 $dsTransaksi 0.5 0 0.5 1 "Simpan transaksi"
AddFlow $sw $p7 $dsBatch 0.5 0 0.5 1 "Update stok"
AddFlow $sw $p7 $dsHutang 0.5 0 0.5 1 "Buat hutang"
AddFlow $sw $p8 $dsTransaksi 0.5 0 0.5 1 "Simpan transaksi"
AddFlow $sw $p8 $dsBatch 0.5 0 0.5 1 "Update stok"
AddFlow $sw $p9 $dsTransaksi 0.5 0 0.5 1 "CRUD transaksi"
AddFlow $sw $p10 $dsHutang 0.5 0 0.5 1 "CRUD hutang"

# 3.0 QR Code & Scanning
AddFlow $sw $eUser $p11 0.5 0.5 0 0.5 "Akses QR"
AddFlow $sw $p11 $p12 0.5 1 0.5 0 "Generate QR"
AddFlow $sw $p11 $p13 0.5 1 0.5 0 "Scan QR"
AddFlow $sw $p11 $p14 0.5 1 0.5 0 "Audit scan"
AddFlow $sw $p11 $p15 0.5 1 0.5 0 "Sesi stok opname"
AddFlow $sw $p12 $dsBatch 0.5 0 0.5 1 "Simpan kode_qr"
AddFlow $sw $p13 $dsBatch 0.5 0 0.5 1 "Cari batch"
AddFlow $sw $p13 $dsObat 0.5 0 0.5 1 "Cari obat"
AddFlow $sw $p13 $p14 0.5 1 0.5 0 "Data scan"
AddFlow $sw $p14 $dsQRLog 0.5 0 0.5 1 "Simpan log"
AddFlow $sw $p15 $dsBatch 0.5 0 0.5 1 "Data sesi scan"

# 4.0 Laporan & Analisis
AddFlow $sw $eUser $p16 0.5 0.5 0 0.5 "Akses laporan"
AddFlow $sw $p16 $p17 0.5 1 0.5 0 "Laporan stok"
AddFlow $sw $p16 $p18 0.5 1 0.5 0 "Laporan transaksi"
AddFlow $sw $p16 $p19 0.5 1 0.5 0 "Laporan penjualan"
AddFlow $sw $p16 $p20 0.5 1 0.5 0 "Laporan keuangan"
AddFlow $sw $p17 $dsObat 0.5 0 0.5 1 "Baca data stok"
AddFlow $sw $p18 $dsTransaksi 0.5 0 0.5 1 "Baca data transaksi"
AddFlow $sw $p19 $dsTransaksi 0.5 0 0.5 1 "Baca data penjualan"
AddFlow $sw $p20 $dsTransaksi 0.5 0 0.5 1 "Baca data keuangan"
AddFlow $sw $p20 $dsBiaya 0.5 0 0.5 1 "Baca biaya operasional"

# 5.0 RESTful API
AddFlow $sw $eUser $p21 0.5 0.5 0 0.5 "Akses API"
AddFlow $sw $eSupplier $p21 0.5 0.5 0 0.5 "API supplier"
AddFlow $sw $eKonsumen $p21 0.5 0.5 0 0.5 "API konsumen"
AddFlow $sw $eAdmin $p21 0.5 0.5 0 0.5 "API admin"
AddFlow $sw $p21 $dsObat 0.5 0 0.5 1 "API obat"
AddFlow $sw $p21 $dsBatch 0.5 0 0.5 1 "API batch"
AddFlow $sw $p21 $dsTransaksi 0.5 0 0.5 1 "API transaksi"
AddFlow $sw $p21 $dsLaporan 0.5 0 0.5 1 "API laporan"
AddFlow $sw $p21 $dsUser 0.5 0 0.5 1 "API user"
AddFlow $sw $p21 $dsQRLog 0.5 0 0.5 1 "API scan log"
AddFlow $sw $p21 $p22 0.5 1 0.5 0 "Data API"
AddFlow $sw $p21 $p25 0.5 1 0.5 0 "Integrasi"

# 5.1 Web Frontend
AddFlow $sw $p22 $p23 0.5 1 0.5 0 "Data visualisasi"
AddFlow $sw $p22 $p24 0.5 1 0.5 0 "Manajemen user"
AddFlow $sw $p22 $p25 0.5 1 0.5 0 "Integrasi"

# 5.2 Visualisasi Data
AddFlow $sw $p23 $dsObat 0.5 0 0.5 1 "Data stok"
AddFlow $sw $p23 $dsBatch 0.5 0 0.5 1 "Data batch"
AddFlow $sw $p23 $dsTransaksi 0.5 0 0.5 1 "Data transaksi"
AddFlow $sw $p23 $dsLaporan 0.5 0 0.5 1 "Data laporan"
AddFlow $sw $p23 $dsQRLog 0.5 0 0.5 1 "Data scan"
AddFlow $sw $p23 $eUser 0.5 1 0.5 0 "Dashboard & grafik"

# 5.3 Manajemen User
AddFlow $sw $p24 $dsUser 0.5 0 0.5 1 "CRUD user"
AddFlow $sw $p24 $eAdmin 0.5 1 0.5 0 "Manajemen admin"

# 5.4 Integrasi Luar
AddFlow $sw $p25 $eSupplier 0.5 0 0.5 1 "Data supplier"
AddFlow $sw $p25 $eKonsumen 0.5 0 0.5 1 "Data konsumen"
AddFlow $sw $p25 $p21 0.5 1 0.5 0 "API"

EndDiagram

# ============================================================
# DFD LEVEL 2 - KASIR (Point of Sale)
# ============================================================
NewDiagram "DFD Level 2 - Kasir" $sw 2000 1400

# External entities
$eApoteker = AddEntity $sw 40  200  150 60 "Apoteker / Kasir"
$ePasien   = AddEntity $sw 1800 200 150 60 "Pasien"
$eManajer  = AddEntity $sw 40  700  150 60 "Manajer"

# Data stores
$dsBatch  = AddStore $sw 500 80   160 60 "D1 Batch Obat"
$dsObat   = AddStore $sw 760 80   160 60 "D2 Data Obat"
$dsTrans  = AddStore $sw 500 1300 160 60 "D3 Transaksi"
$dsHutang = AddStore $sw 760 1300 160 60 "D4 Hutang"
$dsResep  = AddStore $sw 1020 1300 160 60 "D5 Resep"
$dsApprv  = AddStore $sw 1280 1300 160 60 "D6 Approval Request"

# Processes
$kp1 = AddProcess $sw 260 120 180 60 "2.1 Kelola\\nKeranjang Belanja" "#dae8fc" "#6c8ebf"
$kp2 = AddProcess $sw 520 400 180 60 "2.2 Hitung\\nPembayaran" "#dae8fc" "#6c8ebf"
$kp3 = AddProcess $sw 520 700 180 60 "2.3 Proses\\nCheckout" "#dae8fc" "#6c8ebf"
$kp4 = AddProcess $sw 900 400 180 60 "2.4 Approval Obat\\nBerisiko Tinggi" "#dae8fc" "#6c8ebf"

# Flows
AddFlow $sw $eApoteker $kp1 0.5 0.5 0 0.5 "Pilih obat & batch"
AddFlow $sw $kp1 $dsBatch 0.5 0 0.5 1 "Cek stok FEFO"
AddFlow $sw $kp1 $dsObat 0.5 0 0.5 1 "Info obat"
AddFlow $sw $kp1 $kp2 0.5 1 0.5 0 "Data keranjang"
AddFlow $sw $eApoteker $kp2 0.5 0.5 0 0.5 "Input diskon & PPN"
AddFlow $sw $kp2 $kp3 0.5 1 0.5 0 "Total pembayaran"
AddFlow $sw $eApoteker $kp3 0.5 0.5 0 0.5 "Konfirmasi bayar"
AddFlow $sw $ePasien $kp3 0.5 0.5 0 0.5 "Pembayaran"
AddFlow $sw $kp3 $dsTrans 0.5 0 0.5 1 "Simpan transaksi"
AddFlow $sw $kp3 $dsBatch 0.5 0 0.5 1 "Kurangi stok"
AddFlow $sw $kp3 $dsHutang 0.5 0 0.5 1 "Catat hutang"
AddFlow $sw $kp3 $dsResep 0.5 0 0.5 1 "Update resep"
AddFlow $sw $kp3 $kp4 0.5 1 0.5 0 "Butuh approval"
AddFlow $sw $kp4 $dsApprv 0.5 0 0.5 1 "Buat approval"
AddFlow $sw $eManajer $kp4 0.5 0.5 0 0.5 "Setujui / Tolak"
AddFlow $sw $kp4 $dsBatch 0.5 0 0.5 1 "Kurangi stok"
AddFlow $sw $kp3 $ePasien 1 0.5 0.5 0 "Struk pembayaran"

EndDiagram

# ============================================================
# DFD LEVEL 2 - QR GENERATE (QR Code Generation)
# ============================================================
NewDiagram "DFD Level 2 - QR Generate" $sw 2000 1400

# External entities
$eApoteker = AddEntity $sw 40  200  150 60 "Apoteker / Staff"

# Data stores
$dsBatch  = AddStore $sw 500 80   160 60 "D1 Batch Obat"
$dsObat   = AddStore $sw 760 80   160 60 "D2 Data Obat"
$dsLog    = AddStore $sw 500 1300 160 60 "D3 Log Aktivitas"

# Processes
$qp1 = AddProcess $sw 260 200 180 60 "3.1 Pilih Batch\\natau Obat" "#dae8fc" "#6c8ebf"
$qp2 = AddProcess $sw 540 200 180 60 "3.2 Generate\\nQR Code" "#dae8fc" "#6c8ebf"
$qp3 = AddProcess $sw 820 200 180 60 "3.3 Validasi\\nQR" "#dae8fc" "#6c8ebf"
$qp4 = AddProcess $sw 260 500 180 60 "3.4 Download\\n& Print" "#dae8fc" "#6c8ebf"

# Flows
AddFlow $sw $eApoteker $qp1 0.5 0.5 0 0.5 "Pilih batch/obat"
AddFlow $sw $qp1 $dsBatch 0.5 0 0.5 1 "Cari batch"
AddFlow $sw $qp1 $dsObat 0.5 0 0.5 1 "Cari obat"
AddFlow $sw $qp1 $qp2 0.5 1 0.5 0 "Generate QR"
AddFlow $sw $qp2 $dsBatch 0.5 0 0.5 1 "Simpan kode_qr"
AddFlow $sw $qp2 $qp3 0.5 1 0.5 0 "Validasi QR"
AddFlow $sw $qp3 $dsLog 0.5 0 0.5 1 "Log aktivitas"
AddFlow $qp2 $qp4 0.5 1 0.5 0 "Data QR"
AddFlow $qp4 $eApoteker 0.5 1 0.5 0 "QR siap digunakan"

EndDiagram

# ============================================================
# DFD LEVEL 2 - QR SCAN (QR Code Scanning)
# ============================================================
NewDiagram "DFD Level 2 - QR Scan" $sw 2000 1400

# External entities
$eApoteker = AddEntity $sw 40  200  150 60 "Apoteker / Staff"
$eKamera   = AddEntity $sw 40  700  150 60 "Kamera Scanner"

# Data stores
$dsBatch  = AddStore $sw 500 80   160 60 "D1 Batch Obat"
$dsObat   = AddStore $sw 760 80   160 60 "D2 Data Obat"
$dsLog    = AddStore $sw 500 1300 160 60 "D3 QR Scan Log"

# Processes
$qs1 = AddProcess $sw 260 200 180 60 "3.1 Pilih\\nMetode Scan" "#dae8fc" "#6c8ebf"
$qs2 = AddProcess $sw 540 200 180 60 "3.2 Proses\\nScan QR" "#dae8fc" "#6c8ebf"
$qs3 = AddProcess $sw 820 200 180 60 "3.3 Validasi\\nScan" "#dae8fc" "#6c8ebf"
$qs4 = AddProcess $sw 260 500 180 60 "3.4 Isi Form\\nTransaksi" "#dae8fc" "#6c8ebf"

# Flows
AddFlow $sw $eApoteker $qs1 0.5 0.5 0 0.5 "Pilih metode scan"
AddFlow $sw $eKamera $qs1 0.5 0.5 0 0.5 "Scan kamera"
AddFlow $sw $qs1 $qs2 0.5 1 0.5 0 "Proses scan"
AddFlow $sw $qs2 $dsBatch 0.5 0 0.5 1 "Cari batch"
AddFlow $sw $qs2 $dsObat 0.5 0 0.5 1 "Cari obat"
AddFlow $sw $qs2 $qs3 0.5 1 0.5 0 "Data scan"
AddFlow $sw $qs3 $dsLog 0.5 0 0.5 1 "Catat log scan"
AddFlow $qs3 $qs4 0.5 1 0.5 0 "Data scan"
AddFlow $qs4 $eApoteker 0.5 1 0.5 0 "Form terisi"

EndDiagram

# ============================================================
# DFD LEVEL 2 - VISUALISASI DATA (Data Visualization)
# ============================================================
NewDiagram "DFD Level 2 - Visualisasi Data" $sw 2400 1600

# External entities
$eManajer = AddEntity $sw 40  200  150 60 "Manajer"
$eApoteker = AddEntity $sw 40  500  150 60 "Apoteker"
$eStaff   = AddEntity $sw 40  800  150 60 "Staff"

# Data stores
$dsObat     = AddStore $sw 300 80   160 60 "D1 Data Obat"
$dsBatch    = AddStore $sw 500 80   160 60 "D2 Batch Obat"
$dsTransaksi = AddStore $sw 700 80   160 60 "D3 Transaksi"
$dsLaporan  = AddStore $sw 900 80   160 60 "D4 Laporan"
$dsQRLog    = AddStore $sw 1100 80  160 60 "D5 QR Scan Log"

# Processes
$vp1 = AddProcess $sw 260 120 180 60 "4.1 Dashboard\\nStok" "#dae8fc" "#6c8ebf"
$vp2 = AddProcess $sw 540 120 180 60 "4.2 Grafik\\nPenjualan" "#dae8fc" "#6c8ebf"
$vp3 = AddProcess $sw 820 120 180 60 "4.3 Tren\\nStok" "#dae8fc" "#6c8ebf"
$vp4 = AddProcess $sw 1100 120 180 60 "4.4 Analisis\\nQR" "#dae8fc" "#6c8ebf"
$vp5 = AddProcess $sw 260 400 180 60 "4.5 Laporan\\nStok" "#dae8fc" "#6c8ebf"
$vp6 = AddProcess $sw 540 400 180 60 "4.6 Laporan\\nTransaksi" "#dae8fc" "#6c8ebf"
$vp7 = AddProcess $sw 820 400 180 60 "4.7 Laporan\\nPenjualan" "#dae8fc" "#6c8ebf"
$vp8 = AddProcess $sw 1100 400 180 60 "4.8 Laporan\\nKeuangan" "#dae8fc" "#6c8ebf"

# Flows
AddFlow $sw $eManajer $vp1 0.5 0.5 0 0.5 "Akses dashboard"
AddFlow $sw $eApoteker $vp1 0.5 0.5 0 0.5 "Akses dashboard"
AddFlow $sw $eStaff $vp1 0.5 0.5 0 0.5 "Akses dashboard"
AddFlow $sw $vp1 $dsObat 0.5 0 0.5 1 "Data stok"
AddFlow $sw $vp1 $dsBatch 0.5 0 0.5 1 "Data batch"
AddFlow $sw $vp1 $vp2 0.5 1 0.5 0 "Data penjualan"
AddFlow $sw $vp1 $vp3 0.5 1 0.5 0 "Data stok"
AddFlow $sw $vp1 $vp4 0.5 1 0.5 0 "Data scan"
AddFlow $sw $vp2 $dsTransaksi 0.5 0 0.5 1 "Data penjualan"
AddFlow $sw $vp3 $dsBatch 0.5 0 0.5 1 "Data batch"
AddFlow $sw $vp4 $dsQRLog 0.5 0 0.5 1 "Data scan"
AddFlow $vp2 $eManajer 0.5 1 0.5 0 "Grafik penjualan"
AddFlow $vp3 $eManajer 0.5 1 0.5 0 "Tren stok"
AddFlow $vp4 $eManajer 0.5 1 0.5 0 "Analisis QR"
AddFlow $sw $eManajer $vp5 0.5 0.5 0 0.5 "Minta laporan"
AddFlow $sw $eApoteker $vp5 0.5 0.5 0 0.5 "Minta laporan"
AddFlow $sw $vp5 $dsObat 0.5 0 0.5 1 "Data stok"
AddFlow $sw $vp5 $dsBatch 0.5 0 0.5 1 "Data batch"
AddFlow $vp5 $eManajer 0.5 1 0.5 0 "Laporan stok"
AddFlow $sw $eManajer $vp6 0.5 0.5 0 0.5 "Minta laporan"
AddFlow $sw $vp6 $dsTransaksi 0.5 0 0.5 1 "Data transaksi"
AddFlow $vp6 $eManajer 0.5 1 0.5 0 "Laporan transaksi"
AddFlow $sw $eManajer $vp7 0.5 0.5 0 0.5 "Minta laporan"
AddFlow $sw $vp7 $dsTransaksi 0.5 0 0.5 1 "Data penjualan"
AddFlow $vp7 $eManajer 0.5 1 0.5 0 "Laporan penjualan"
AddFlow $sw $eManajer $vp8 0.5 0.5 0 0.5 "Minta laporan"
AddFlow $sw $vp8 $dsTransaksi 0.5 0 0.5 1 "Data keuangan"
AddFlow $vp8 $eManajer 0.5 1 0.5 0 "Laporan keuangan"

EndDiagram

$sw.WriteLine('</mxfile>')
$sw.Close()

Write-Host "Comprehensive DFD generated: $OutputPath"
