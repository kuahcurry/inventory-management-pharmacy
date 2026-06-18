$OutputPath = "C:\Users\aqefh\Documents\Projects\sim-apotek-skripshit\docs\DFD.drawio"

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
# 1. KASIR DFD
# ============================================================
NewDiagram "1. Kasir" $sw 2200 1600

# External entities
$kApoteker = AddEntity $sw 40  200  150 60 "Apoteker / Kasir"
$kPasien   = AddEntity $sw 40  700  150 60 "Pasien"
$kManajer  = AddEntity $sw 1840 700 150 60 "Manajer"

# Data stores
$kdsBatch  = AddStore $sw 600  80  160 60 "D1 Batch Obat"
$kdsObat   = AddStore $sw 860  80  160 60 "D2 Data Obat"
$kdsTrans  = AddStore $sw 600  1400 160 60 "D3 Transaksi"
$kdsHutang = AddStore $sw 860  1400 160 60 "D4 Hutang"
$kdsResep  = AddStore $sw 340  1400 160 60 "D5 Resep"
$kdsApprv  = AddStore $sw 1120 700 160 60 "D6 Approval Request"
$kdsBiaya  = AddStore $sw 600  1100 160 60 "D7 Biaya Operasional"

# Processes
$kp1 = AddProcess $sw 260 120 180 60 "1.1 Kelola\\nKeranjang Belanja" "#dae8fc" "#6c8ebf"
$kp2 = AddProcess $sw 520 400 180 60 "1.2 Hitung\\nPembayaran" "#dae8fc" "#6c8ebf"
$kp3 = AddProcess $sw 520 700 180 60 "1.3 Proses\\nCheckout" "#dae8fc" "#6c8ebf"
$kp4 = AddProcess $sw 900 400 180 60 "1.4 Approval Obat\\nBerisiko Tinggi" "#dae8fc" "#6c8ebf"
$kp5 = AddProcess $sw 900 1200 180 60 "1.5 Catat Biaya\\nOperasional" "#dae8fc" "#6c8ebf"

# Flows
AddFlow $sw $kApoteker $kp1 0.5 0.5 0 0.5 "Pilih obat & batch"
AddFlow $sw $kp1 $kdsBatch 0.5 0 0.5 1 "Cek stok FEFO"
AddFlow $sw $kp1 $kdsObat 0.5 0 0.5 1 "Info obat"
AddFlow $sw $kp1 $kp2 0.5 1 0.5 0 "Data keranjang"
AddFlow $sw $kApoteker $kp2 0.5 0.5 0 0.5 "Input diskon & PPN"
AddFlow $sw $kp2 $kp3 0.5 1 0.5 0 "Total pembayaran"
AddFlow $sw $kApoteker $kp3 0.5 0.5 0 0.5 "Konfirmasi bayar"
AddFlow $sw $kPasien $kp3 0.5 0.5 0 0.5 "Pembayaran"
AddFlow $sw $kp3 $kdsTrans 0.5 0 0.5 1 "Simpan transaksi"
AddFlow $sw $kp3 $kdsBatch 0.5 0 0.5 1 "Kurangi stok"
AddFlow $sw $kp3 $kdsHutang 0.5 0 0.5 1 "Catat hutang (debit/kredit)"
AddFlow $sw $kp3 $kdsResep 0.5 0 0.5 1 "Update status resep"
AddFlow $sw $kp3 $kp4 0.5 1 0.5 0 "Butuh approval"
AddFlow $sw $kp4 $kdsApprv 0.5 0 0.5 1 "Buat approval pending"
AddFlow $sw $kManajer $kp4 0.5 0.5 0 0.5 "Setujui / Tolak"
AddFlow $sw $kp4 $kdsBatch 0.5 0 0.5 1 "Kurangi stok (setelah approval)"
AddFlow $sw $kp4 $kdsTrans 0.5 0 0.5 1 "Update approval status"
AddFlow $sw $kApoteker $kp5 0.5 0.5 0 0.5 "Input biaya operasional"
AddFlow $sw $kp5 $kdsBiaya 0.5 0 0.5 1 "Simpan biaya"
AddFlow $sw $kp3 $kPasien 1 0.5 0.5 0.5 "Struk pembayaran"

EndDiagram

# ============================================================
# 2. QR CODE DFD
# ============================================================
NewDiagram "2. QR Code" $sw 2000 1400

$qApoteker = AddEntity $sw 40  300  150 60 "Apoteker / Staff"
$qSistem   = AddEntity $sw 40  700  150 60 "Sistem Kamera"

$qdsBatch  = AddStore $sw 500 80   160 60 "D1 Batch Obat"
$qdsObat   = AddStore $sw 760 80   160 60 "D2 Data Obat"
$qdsLog    = AddStore $sw 500 1100 160 60 "D3 QR Scan Log"
$qdsSesi   = AddStore $sw 760 1100 160 60 "D4 Sesi Stok Opname"

$qp1 = AddProcess $sw 260 200 180 60 "2.1 Generate\\nQR Code" "#dae8fc" "#6c8ebf"
$qp2 = AddProcess $sw 260 500 180 60 "2.2 Scan\\nQR Code" "#dae8fc" "#6c8ebf"
$qp3 = AddProcess $sw 520 800 180 60 "2.3 Audit\\nScan" "#dae8fc" "#6c8ebf"
$qp4 = AddProcess $sw 260 1000 180 60 "2.4 Sesi Scan\\nStok Opname" "#dae8fc" "#6c8ebf"

AddFlow $sw $qApoteker $qp1 0.5 0.5 0 0.5 "Generate QR batch"
AddFlow $sw $qp1 $qdsBatch 0.5 0 0.5 1 "Simpan kode_qr & qr_data"
AddFlow $sw $qApoteker $qp2 0.5 0.5 0 0.5 "Scan QR (kamera/manual)"
AddFlow $sw $qSistem $qp2 0.5 0.5 0 0.5 "Hasil scan kamera"
AddFlow $sw $qp2 $qdsBatch 0.5 0 0.5 1 "Cari batch by kode_qr"
AddFlow $sw $qp2 $qdsObat 0.5 0 0.5 1 "Cari obat by kode_obat"
AddFlow $sw $qp2 $qp3 0.5 1 0.5 0 "Data hasil scan"
AddFlow $sw $qp3 $qdsLog 0.5 0 0.5 1 "Catat log scan"
AddFlow $sw $qApoteker $qp4 0.5 0.5 0 0.5 "Mulai sesi scan"
AddFlow $sw $qp4 $qdsSesi 0.5 0 0.5 1 "Simpan sesi & item"
AddFlow $sw $qp2 $qp4 0.5 1 0.5 0 "Data scan untuk sesi"

EndDiagram

# ============================================================
# 3. TRANSAKSI DFD
# ============================================================
NewDiagram "3. Transaksi" $sw 2200 1600

$tStaff   = AddEntity $sw 40  500  150 60 "Apoteker / Staff"
$tSupplier = AddEntity $sw 1840 300 150 60 "Supplier"

$tdsTrans = AddStore $sw 500 80   160 60 "D1 Transaksi"
$tdsHutang = AddStore $sw 760 80   160 60 "D2 Hutang"
$tdsHpay  = AddStore $sw 1020 80  160 60 "D3 Hutang Payment"
$tdsBatch = AddStore $sw 500 1300 160 60 "D4 Batch Obat"
$tdsObat  = AddStore $sw 760 1300 160 60 "D5 Data Obat"
$tdsBiaya = AddStore $sw 1020 1300 160 60 "D6 Biaya Operasional"
$tdsLog   = AddStore $sw 1280 1300 160 60 "D7 Log Aktivitas"

$tp1 = AddProcess $sw 260 200 180 60 "3.1 Catat Barang\\nMasuk" "#dae8fc" "#6c8ebf"
$tp2 = AddProcess $sw 260 500 180 60 "3.2 Catat Barang\\nKeluar" "#dae8fc" "#6c8ebf"
$tp3 = AddProcess $sw 260 800 180 60 "3.3 Kelola\\nTransaksi" "#dae8fc" "#6c8ebf"
$tp4 = AddProcess $sw 600 500 180 60 "3.4 Kelola\\nHutang" "#dae8fc" "#6c8ebf"
$tp5 = AddProcess $sw 600 800 180 60 "3.5 Catat Biaya\\nOperasional" "#dae8fc" "#6c8ebf"

AddFlow $sw $tStaff $tp1 0.5 0.5 0 0.5 "Input barang masuk"
AddFlow $sw $tSupplier $tp1 0.5 0.5 0 0.5 "Faktur pembelian"
AddFlow $sw $tp1 $tdsTrans 0.5 0 0.5 1 "Simpan transaksi masuk"
AddFlow $sw $tp1 $tdsBatch 0.5 0 0.5 1 "Tambah stok batch"

AddFlow $sw $tStaff $tp2 0.5 0.5 0 0.5 "Input barang keluar"
AddFlow $sw $tp2 $tdsBatch 0.5 0 0.5 1 "Kurangi stok (FEFO)"
AddFlow $sw $tp2 $tdsTrans 0.5 0 0.5 1 "Simpan transaksi keluar"
AddFlow $sw $tp2 $tdsObat 0.5 0 0.5 1 "Update stok_total"

AddFlow $sw $tStaff $tp3 0.5 0.5 0 0.5 "CRUD transaksi"
AddFlow $sw $tp3 $tdsTrans 0.5 0 0.5 1 "Baca/tulis/edit transaksi"

AddFlow $sw $tStaff $tp4 0.5 0.5 0 0.5 "Bayar hutang"
AddFlow $sw $tp4 $tdsHutang 0.5 0 0.5 1 "Update status hutang"
AddFlow $sw $tp4 $tdsHpay 0.5 0 0.5 1 "Catat pembayaran"
AddFlow $sw $tp4 $tdsTrans 0.5 0 0.5 1 "Update status pelunasan"

AddFlow $sw $tStaff $tp5 0.5 0.5 0 0.5 "Input biaya"
AddFlow $sw $tp5 $tdsBiaya 0.5 0 0.5 1 "Simpan biaya operasional"

AddFlow $sw $tp1 $tp3 0.5 1 0.5 0 "Data transaksi baru"
AddFlow $sw $tp2 $tp3 0.5 1 0.5 0 "Data transaksi baru"

EndDiagram

# ============================================================
# 4. LAPORAN DFD
# ============================================================
NewDiagram "4. Laporan" $sw 2200 1600

$lManajer = AddEntity $sw 40  500  150 60 "Manajer"
$lStaff   = AddEntity $sw 40  200  150 60 "Apoteker / Staff"

$ldsTrans = AddStore $sw 500 80   160 60 "D1 Transaksi"
$ldsObat  = AddStore $sw 760 80   160 60 "D2 Data Obat"
$ldsBatch = AddStore $sw 1020 80  160 60 "D3 Batch Obat"
$ldsBiaya = AddStore $sw 500 1300 160 60 "D4 Biaya Operasional"
$ldsHutang= AddStore $sw 760 1300 160 60 "D5 Hutang"
$ldsHpay  = AddStore $sw 1020 1300 160 60 "D6 Hutang Payment"
$ldsLog   = AddStore $sw 1280 80  160 60 "D7 Log Aktivitas"

$lp1 = AddProcess $sw 260 120 180 60 "4.1 Laporan\\nStok" "#dae8fc" "#6c8ebf"
$lp2 = AddProcess $sw 500 300 180 60 "4.2 Laporan\\nTransaksi" "#dae8fc" "#6c8ebf"
$lp3 = AddProcess $sw 260 500 180 60 "4.3 Laporan\\nPenjualan" "#dae8fc" "#6c8ebf"
$lp4 = AddProcess $sw 500 700 180 60 "4.4 Laporan\\nKeuangan" "#dae8fc" "#6c8ebf"
$lp5 = AddProcess $sw 260 900 180 60 "4.5 Laporan\\nKadaluarsa" "#dae8fc" "#6c8ebf"
$lp6 = AddProcess $sw 600 1100 180 60 "4.6 Ekspor\\nLaporan" "#dae8fc" "#6c8ebf"

AddFlow $sw $lManajer $lp1 0.5 0.5 0 0.5 "Minta laporan stok"
AddFlow $sw $lp1 $ldsObat 0.5 0 0.5 1 "Baca data obat & stok"
AddFlow $sw $lStaff $lp1 0.5 0.5 0 0.5 "Minta laporan stok"

AddFlow $sw $lManajer $lp2 0.5 0.5 0 0.5 "Minta laporan transaksi"
AddFlow $sw $lp2 $ldsTrans 0.5 0 0.5 1 "Baca data transaksi"

AddFlow $sw $lManajer $lp3 0.5 0.5 0 0.5 "Minta laporan penjualan"
AddFlow $sw $lp3 $ldsTrans 0.5 0 0.5 1 "Baca data penjualan"

AddFlow $sw $lManajer $lp4 0.5 0.5 0 0.5 "Minta laporan keuangan"
AddFlow $sw $lp4 $ldsTrans 0.5 0 0.5 1 "Baca data transaksi"
AddFlow $sw $lp4 $ldsBiaya 0.5 0 0.5 1 "Baca biaya operasional"
AddFlow $sw $lp4 $ldsHutang 0.5 0 0.5 1 "Baca data hutang"

AddFlow $sw $lManajer $lp5 0.5 0.5 0 0.5 "Minta laporan kadaluarsa"
AddFlow $sw $lp5 $ldsBatch 0.5 0 0.5 1 "Baca batch expired"

AddFlow $sw $lManajer $lp6 0.5 0.5 0 0.5 "Ekspor laporan"
AddFlow $sw $lStaff $lp6 0.5 0.5 0 0.5 "Ekspor laporan"
AddFlow $sw $lp6 $lp1 0.5 1 0.5 0 "Data laporan"
AddFlow $sw $lp6 $ldsLog 0.5 0 0.5 1 "Log aktivitas"

EndDiagram

# ============================================================
# 5. OBAT DFD
# ============================================================
NewDiagram "5. Obat" $sw 2600 1800

$oStaff    = AddEntity $sw 40  300  150 60 "Apoteker / Staff"
$oSupplier = AddEntity $sw 2200 900 150 60 "Supplier"

$odsObat   = AddStore $sw 600 80   160 60 "D1 Data Obat"
$odsBatch  = AddStore $sw 860 80   160 60 "D2 Batch Obat"
$odsKategori= AddStore $sw 1120 80  160 60 "D3 Kategori Obat"
$odsGolongan= AddStore $sw 1380 80  160 60 "D4 Golongan Obat"
$odsJenis  = AddStore $sw 1640 80  160 60 "D5 Jenis Obat"
$odsSatuan = AddStore $sw 1900 80  160 60 "D6 Satuan Obat"
$odsSupp   = AddStore $sw 600 1300 160 60 "D7 Supplier"
$odsResep  = AddStore $sw 860 1300 160 60 "D8 Resep"
$odsMusnah = AddStore $sw 1120 1300 160 60 "D9 Pemusnahan Obat"
$odsMusnahD= AddStore $sw 1380 1300 160 60 "D10 Pemusnahan Detail"

$op1 = AddProcess $sw 260 180 180 60 "5.1 Kelola\\nData Obat" "#dae8fc" "#6c8ebf"
$op2 = AddProcess $sw 500 350 180 60 "5.2 Kelola\\nBatch Obat" "#dae8fc" "#6c8ebf"
$op3 = AddProcess $sw 260 600 180 60 "5.3 Kelola\\nResep" "#dae8fc" "#6c8ebf"
$op4 = AddProcess $sw 500 800 180 60 "5.4 Pemusnahan\\nObat" "#dae8fc" "#6c8ebf"
$op5 = AddProcess $sw 260 1000 180 60 "5.5 Impor/Ekspor\\nData Obat" "#dae8fc" "#6c8ebf"
$op6 = AddProcess $sw 800 600 180 60 "5.6 Kelola\\nMaster Data" "#dae8fc" "#6c8ebf"

AddFlow $sw $oStaff $op1 0.5 0.5 0 0.5 "CRUD obat"
AddFlow $sw $op1 $odsObat 0.5 0 0.5 1 "Simpan/baca/ubah obat"
AddFlow $sw $op1 $op2 0.5 1 0.5 0 "Data obat untuk batch"

AddFlow $sw $oStaff $op2 0.5 0.5 0 0.5 "CRUD batch"
AddFlow $sw $op2 $odsBatch 0.5 0 0.5 1 "Simpan/baca/ubah batch"
AddFlow $sw $oSupplier $op2 0.5 0.5 0 0.5 "Data batch dari supplier"
AddFlow $sw $op2 $odsObat 0.5 0 0.5 1 "Update stok_total"

AddFlow $sw $oStaff $op3 0.5 0.5 0 0.5 "CRUD resep"
AddFlow $sw $op3 $odsResep 0.5 0 0.5 1 "Simpan/baca/ubah resep"
AddFlow $sw $op3 $odsObat 0.5 0 0.5 1 "Cek stok obat"

AddFlow $sw $oStaff $op4 0.5 0.5 0 0.5 "CRUD pemusnahan"
AddFlow $sw $op4 $odsMusnah 0.5 0 0.5 1 "Simpan berita acara"
AddFlow $sw $op4 $odsMusnahD 0.5 0 0.5 1 "Simpan detail pemusnahan"
AddFlow $sw $op4 $odsBatch 0.5 0 0.5 1 "Update stok batch"
AddFlow $sw $op4 $odsObat 0.5 0 0.5 1 "Update stok_total"

AddFlow $sw $oStaff $op5 0.5 0.5 0 0.5 "Upload/impor file"
AddFlow $sw $op5 $odsObat 0.5 0 0.5 1 "Impor data obat"
AddFlow $sw $op5 $odsBatch 0.5 0 0.5 1 "Impor data batch"

AddFlow $sw $oStaff $op6 0.5 0.5 0 0.5 "CRUD kategori/golongan/jenis/satuan"
AddFlow $sw $op6 $odsKategori 0.5 0 0.5 1 "Simpan kategori"
AddFlow $sw $op6 $odsGolongan 0.5 0 0.5 1 "Simpan golongan"
AddFlow $sw $op6 $odsJenis 0.5 0 0.5 1 "Simpan jenis"
AddFlow $sw $op6 $odsSatuan 0.5 0 0.5 1 "Simpan satuan"

EndDiagram

$sw.WriteLine('</mxfile>')
$sw.Close()

Write-Host "5 DFD diagrams generated: $OutputPath"
