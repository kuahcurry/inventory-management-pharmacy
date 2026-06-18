$OutputPath = "C:\Users\aqefh\Documents\Projects\sim-apotek-skripshit\docs\DFD_Comprehensive.drawio"

function esc($s) { "$s".Replace("&","&amp;").Replace("<","&lt;").Replace(">","&gt;").Replace('"',"&quot;") }

$writer = New-Object System.IO.StreamWriter($OutputPath, $false, [System.Text.UTF8Encoding]::new($false))
$writer.WriteLine('<?xml version="1.0" encoding="UTF-8"?>')
$writer.WriteLine('<mxfile host="app.diagrams.net">')

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
    $w.WriteLine('  <diagram id="' + $name + '" name="' + $name + '">')
    $w.WriteLine('    <mxGraphModel dx="0" dy="0" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="' + $pw + '" pageHeight="' + $ph + '" math="0" shadow="0">')
    $w.WriteLine('      <root>')
    $w.WriteLine('        <mxCell id="0" />')
    $w.WriteLine('        <mxCell id="1" parent="0" />')
}

function EndDiagram($w) {
    $w.WriteLine('      </root>')
    $w.WriteLine('    </mxGraphModel>')
    $w.WriteLine('  </diagram>')
}

# ============================================================
# DFD LEVEL 0 - KONTEX (Sistem Manajemen Inventaris Apotek)
# ============================================================
NewDiagram "DFD Level 0 - Konteks" $writer 2000 1400

# External entities
$eUser     = AddEntity $writer 40  200  150 60 "Pengguna Apotek"
$eSupplier = AddEntity $writer 1800 200 150 60 "Supplier"
$eKonsumen = AddEntity $writer 40  700  150 60 "Konsumen / Pasien"
$eAdmin    = AddEntity $writer 1800 700 150 60 "Administrator"

# Main process (Sistem Manajemen Inventaris)
sMain = AddProcess $writer 1000 600 260 160 "Sistem Manajemen Inventaris Apotek" "#dae8fc" "#6c8ebf"

# Data stores
dsObat     = AddStore $writer 300 1300 160 60 "D1 Data Obat"
$dsBatch    = AddStore $writer 500 1300 160 60 "D2 Batch Obat"
$dsTransaksi = AddStore $writer 700 1300 160 60 "D3 Transaksi"
$dsLaporan  = AddStore $writer 900 1300 160 60 "D4 Laporan"
$dsUser     = AddStore $writer 1100 1300 160 60 "D5 User"
$dsQRLog    = AddStore $writer 1300 1300 160 60 "D6 QR Scan Log"
$dsAPI      = AddStore $writer 1500 1300 160 60 "D7 API Cache"

# Flows
AddFlow $writer $eUser $sMain 0.5 0.5 0 0.5 "Akses sistem"
AddFlow $writer $eSupplier $sMain 0.5 0.5 0 0.5 "Faktur pembelian & data barang"
AddFlow $writer $eKonsumen $sMain 0.5 0.5 0 0.5 "Resep & permintaan"
AddFlow $writer $eAdmin $sMain 0.5 0.5 0 0.5 "Manajemen user & sistem"
AddFlow $writer $sMain $dsObat 0.5 0 0.5 1 "Simpan/baca data obat"
AddFlow $writer $sMain $dsBatch 0.5 0 0.5 1 "Simpan/baca data batch"
AddFlow $writer $sMain $dsTransaksi 0.5 0 0.5 1 "Simpan/baca transaksi"
AddFlow $writer $sMain $dsLaporan 0.5 0 0.5 1 "Simpan/baca laporan"
AddFlow $writer $sMain $dsUser 0.5 0 0.5 1 "Manajemen user"
AddFlow $writer $sMain $dsQRLog 0.5 0 0.5 1 "Simpan log scan QR"
AddFlow $writer $sMain $dsAPI 0.5 0 0.5 1 "Cache data API"
AddFlow $writer $sMain $eUser 0.5 1 0.5 0 "Laporan & notifikasi"
AddFlow $writer $sMain $eKonsumen 0.5 1 0.5 0 "Resep & status transaksi"

EndDiagram $writer

# ============================================================
# DFD LEVEL 1 - OVERVIEW (Arsitektur Sistem)
# ============================================================
NewDiagram "DFD Level 1 - Overview" $writer 2400 1800

# External entities (same as Level 0)
$eUser     = AddEntity $writer 40  200  150 60 "Pengguna Apotek"
$eSupplier = AddEntity $writer 2240 200 150 60 "Supplier"
$eKonsumen = AddEntity $writer 40  700  150 60 "Konsumen / Pasien"
$eAdmin    = AddEntity $writer 2240 700 150 60 "Administrator"

# Data stores (same as Level 0)
$dsObat     = AddStore $writer 300 1300 160 60 "D1 Data Obat"
$dsBatch    = AddStore $writer 500 1300 160 60 "D2 Batch Obat"
$dsTransaksi = AddStore $writer 700 1300 160 60 "D3 Transaksi"
$dsLaporan  = AddStore $writer 900 1300 160 60 "D4 Laporan"
$dsUser     = AddStore $writer 1100 1300 160 60 "D5 User"
$dsQRLog    = AddStore $writer 1300 1300 160 60 "D6 QR Scan Log"
$dsAPI      = AddStore $writer 1500 1300 160 60 "D7 API Cache"

# Processes
$p1 = AddProcess $writer 260 200 180 60 "1.0 Manajemen\\nObat & Stok" "#dae8fc" "#6c8ebf"
$p2 = AddProcess $writer 540 200 180 60 "1.1 Kelola\\nData Obat" "#dae8fc" "#6c8ebf"
$p3 = AddProcess $writer 820 200 180 60 "1.2 Kelola\\nBatch Obat" "#dae8fc" "#6c8ebf"
$p4 = AddProcess $writer 1100 200 180 60 "1.3 Kelola\\nResep" "#dae8fc" "#6c8ebf"
$p5 = AddProcess $writer 1380 200 180 60 "1.4 Pemusnahan\\nObat" "#dae8fc" "#6c8ebf"
$p6 = AddProcess $writer 260 500 180 60 "2.0 Transaksi &\\nKasir" "#dae8fc" "#6c8ebf"
$p7 = AddProcess $writer 540 500 180 60 "2.1 Catat Barang\\nMasuk" "#dae8fc" "#6c8ebf"
$p8 = AddProcess $writer 820 500 180 60 "2.2 Catat Barang\\nKeluar" "#dae8fc" "#6c8ebf"
$p9 = AddProcess $writer 1100 500 180 60 "2.3 Kelola\\nTransaksi" "#dae8fc" "#6c8ebf"
$p10 = AddProcess $writer 1380 500 180 60 "2.4 Kelola\\nHutang" "#dae8fc" "#6c8ebf"
$p11 = AddProcess $writer 260 800 180 60 "3.0 QR Code &\\nScanning" "#dae8fc" "#6c8ebf"
$p12 = AddProcess $writer 540 800 180 60 "3.1 Generate\\nQR Code" "#dae8fc" "#6c8ebf"
$p13 = AddProcess $writer 820 800 180 60 "3.2 Scan\\nQR Code" "#dae8fc" "#6c8ebf"
$p14 = AddProcess $writer 1100 800 180 60 "3.3 Audit\\nScan QR" "#dae8fc" "#6c8ebf"
$p15 = AddProcess $writer 1380 800 180 60 "3.4 Sesi Stok\\nOpname" "#dae8fc" "#6c8ebf"
$p16 = AddProcess $writer 260 1100 180 60 "4.0 Laporan &\\nAnalisis" "#dae8fc" "#6c8ebf"
$p17 = AddProcess $writer 540 1100 180 60 "4.1 Laporan\\nStok" "#dae8fc" "#6c8ebf"
$p18 = AddProcess $writer 820 1100 180 60 "4.2 Laporan\\nTransaksi" "#dae8fc" "#6c8ebf"
$p19 = AddProcess $writer 1100 1100 180 60 "4.3 Laporan\\nPenjualan" "#dae8fc" "#6c8ebf"
$p20 = AddProcess $writer 1380 1100 180 60 "4.4 Laporan\\nKeuangan" "#dae8fc" "#6c8ebf"
$p21 = AddProcess $writer 260 1400 180 60 "5.0 RESTful\\nAPI" "#dae8fc" "#6c8ebf"
$p22 = AddProcess $writer 540 1400 180 60 "5.1 Web\\nFrontend" "#dae8fc" "#6c8ebf"
$p23 = AddProcess $writer 820 1400 180 60 "5.2 Visualisasi\\nData" "#dae8fc" "#6c8ebf"
$p24 = AddProcess $writer 1100 1400 180 60 "5.3 Manajemen\\nUser" "#dae8fc" "#6c8ebf"
$p25 = AddProcess $writer 1380 1400 180 60 "5.4 Integrasi\\nLuar" "#dae8fc" "#6c8ebf"

# Flows
# 1.0 Manajemen Obat & Stok
AddFlow $writer $eUser $p1 0.5 0.5 0 0.5 "Akses manajemen"
AddFlow $writer $p1 $p2 0.5 1 0.5 0 "Kelola data obat"
AddFlow $writer $p1 $p3 0.5 1 0.5 0 "Kelola batch"
AddFlow $writer $p1 $p4 0.5 1 0.5 0 "Kelola resep"
AddFlow $writer $p1 $p5 0.5 1 0.5 0 "Kelola pemusnahan"
AddFlow $writer $p2 $dsObat 0.5 0 0.5 1 "CRUD obat"
AddFlow $writer $p3 $dsBatch 0.5 0 0.5 1 "CRUD batch"
AddFlow $writer $p3 $dsObat 0.5 0 0.5 1 "Referensi obat"
AddFlow $writer $p4 $dsResep 0.5 0 0.5 1 "CRUD resep"
AddFlow $writer $p4 $dsObat 0.5 0 0.5 1 "Cek stok obat"
AddFlow $writer $p5 $dsBatch 0.5 0 0.5 1 "CRUD pemusnahan"

# 2.0 Transaksi & Kasir
AddFlow $writer $eUser $p6 0.5 0.5 0 0.5 "Akses kasir"
AddFlow $writer $p6 $p7 0.5 1 0.5 0 "Catat barang masuk"
AddFlow $writer $p6 $p8 0.5 1 0.5 0 "Catat barang keluar"
AddFlow $writer $p6 $p9 0.5 1 0.5 0 "Kelola transaksi"
AddFlow $writer $p6 $p10 0.5 1 0.5 0 "Kelola hutang"
AddFlow $writer $p7 $dsTransaksi 0.5 0 0.5 1 "Simpan transaksi"
AddFlow $writer $p7 $dsBatch 0.5 0 0.5 1 "Update stok"
AddFlow $writer $p7 $dsHutang 0.5 0 0.5 1 "Buat hutang"
AddFlow $writer $p8 $dsTransaksi 0.5 0 0.5 1 "Simpan transaksi"
AddFlow $writer $p8 $dsBatch 0.5 0 0.5 1 "Update stok"
AddFlow $writer $p9 $dsTransaksi 0.5 0 0.5 1 "CRUD transaksi"
AddFlow $writer $p10 $dsHutang 0.5 0 0.5 1 "CRUD hutang"

# 3.0 QR Code & Scanning
AddFlow $writer $eUser $p11 0.5 0.5 0 0.5 "Akses QR"
AddFlow $writer $p11 $p12 0.5 1 0.5 0 "Generate QR"
AddFlow $writer $p11 $p13 0.5 1 0.5 0 "Scan QR"
AddFlow $writer $p11 $p14 0.5 1 0.5 0 "Audit scan"
AddFlow $writer $p11 $p15 0.5 1 0.5 0 "Sesi stok opname"
AddFlow $writer $p12 $dsBatch 0.5 0 0.5 1 "Simpan kode_qr"
AddFlow $writer $p13 $dsBatch 0.5 0 0.5 1 "Cari batch"
AddFlow $writer $p13 $dsObat 0.5 0 0.5 1 "Cari obat"
AddFlow $writer $p13 $p14 0.5 1 0.5 0 "Data scan"
AddFlow $writer $p14 $dsQRLog 0.5 0 0.5 1 "Simpan log"
AddFlow $writer $p15 $dsBatch 0.5 0 0.5 1 "Data sesi scan"

# 4.0 Laporan & Analisis
AddFlow $writer $eUser $p16 0.5 0.5 0 0.5 "Akses laporan"
AddFlow $writer $p16 $p17 0.5 1 0.5 0 "Laporan stok"
AddFlow $writer $p16 $p18 0.5 1 0.5 0 "Laporan transaksi"
AddFlow $writer $p16 $p19 0.5 1 0.5 0 "Laporan penjualan"
AddFlow $writer $p16 $p20 0.5 1 0.5 0 "Laporan keuangan"
AddFlow $writer $p17 $dsObat 0.5 0 0.5 1 "Baca data stok"
AddFlow $writer $p18 $dsTransaksi 0.5 0 0.5 1 "Baca data transaksi"
AddFlow $writer $p19 $dsTransaksi 0.5 0 0.5 1 "Baca data penjualan"
AddFlow $writer $p20 $dsTransaksi 0.5 0 0.5 1 "Baca data keuangan"
AddFlow $writer $p20 $dsBiaya 0.5 0 0.5 1 "Baca biaya operasional"

# 5.0 RESTful API
AddFlow $writer $eUser $p21 0.5 0.5 0 0.5 "Akses API"
AddFlow $writer $eSupplier $p21 0.5 0.5 0 0.5 "API supplier"
AddFlow $writer $eKonsumen $p21 0.5 0.5 0 0.5 "API konsumen"
AddFlow $writer $eAdmin $p21 0.5 0.5 0 0.5 "API admin"
AddFlow $writer $p21 $dsObat 0.5 0 0.5 1 "API obat"
AddFlow $writer $p21 $dsBatch 0.5 0 0.5 1 "API batch"
AddFlow $writer $p21 $dsTransaksi 0.5 0 0.5 1 "API transaksi"
AddFlow $writer $p21 $dsLaporan 0.5 0 0.5 1 "API laporan"
AddFlow $writer $p21 $dsUser 0.5 0 0.5 1 "API user"
AddFlow $writer $p21 $dsQRLog 0.5 0 0.5 1 "API scan log"
AddFlow $writer $p21 $p22 0.5 1 0.5 0 "Data API"
AddFlow $writer $p21 $p25 0.5 1 0.5 0 "Integrasi"

# 5.1 Web Frontend
AddFlow $writer $p22 $p23 0.5 1 0.5 0 "Data visualisasi"
AddFlow $writer $p22 $p24 0.5 1 0.5 0 "Manajemen user"
AddFlow $writer $p22 $p25 0.5 1 0.5 0 "Integrasi"

# 5.2 Visualisasi Data
AddFlow $writer $p23 $dsObat 0.5 0 0.5 1 "Data stok"
AddFlow $writer $p23 $dsBatch 0.5 0 0.5 1 "Data batch"
AddFlow $writer $p23 $dsTransaksi 0.5 0 0.5 1 "Data transaksi"
AddFlow $writer $p23 $dsLaporan 0.5 0 0.5 1 "Data laporan"
AddFlow $writer $p23 $dsQRLog 0.5 0 0.5 1 "Data scan"
AddFlow $writer $p23 $eUser 0.5 1 0.5 0 "Dashboard & grafik"

# 5.3 Manajemen User
AddFlow $writer $p24 $dsUser 0.5 0 0.5 1 "CRUD user"
AddFlow $writer $p24 $eAdmin 0.5 1 0.5 0 "Manajemen admin"

# 5.4 Integrasi Luar
AddFlow $writer $p25 $eSupplier 0.5 0 0.5 1 "Data supplier"
AddFlow $writer $p25 $eKonsumen 0.5 0 0.5 1 "Data konsumen"
AddFlow $writer $p25 $p21 0.5 1 0.5 0 "API"

EndDiagram $writer

$writer.WriteLine('</mxfile>')
$writer.Close()

Write-Host "Comprehensive DFD generated: $OutputPath"
