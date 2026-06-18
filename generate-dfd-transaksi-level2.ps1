$OutputPath = "C:\Users\aqefh\Documents\Projects\sim-apotek-skripshit\docs\DFD_Transaksi_Level2.drawio"

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
# DFD LEVEL 2 - CATAT BARANG MASUK (Incoming Stock)
# ============================================================
NewDiagram "DFD Level 2 - Catat Barang Masuk" $sw 2000 1400

# External entities
$eStaff = AddEntity $sw 40  200  150 60 "Apoteker / Staff"
$eSupplier = AddEntity $sw 1800 200 150 60 "Supplier"

# Data stores
$dsTrans = AddStore $sw 500 80   160 60 "D1 Transaksi"
$dsBatch = AddStore $sw 760 80   160 60 "D2 Batch Obat"
$dsObat = AddStore $sw 1020 80  160 60 "D3 Data Obat"
$dsHutang = AddStore $sw 500 1300 160 60 "D4 Hutang"

# Processes
$p1 = AddProcess $sw 260 200 180 60 "2.1 Input Barang\\nMasuk" "#dae8fc" "#6c8ebf"
$p2 = AddProcess $sw 500 200 180 60 "2.2 Validasi\\nInput" "#dae8fc" "#6c8ebf"
$p3 = AddProcess $sw 260 500 180 60 "2.3 Buat\\nTransaksi" "#dae8fc" "#6c8ebf"
$p4 = AddProcess $sw 500 500 180 60 "2.4 Update\\nStok Batch" "#dae8fc" "#6c8ebf"
$p5 = AddProcess $sw 260 800 180 60 "2.5 Sinkronisasi\\nHutang" "#dae8fc" "#6c8ebf"

# Flows
AddFlow $sw $eStaff $p1 0.5 0.5 0 0.5 "Input data barang masuk"
AddFlow $sw $p1 $p2 0.5 1 0.5 0 "Data input"
AddFlow $sw $p2 $p3 0.5 0 0.5 1 "Validasi berhasil"
AddFlow $sw $p2 $p1 0.5 0 0.5 1 "Perbaiki input"
AddFlow $sw $p3 $dsTrans 0.5 0 0.5 1 "Simpan transaksi masuk"
AddFlow $sw $p3 $p4 0.5 1 0.5 0 "Referensi batch & obat"
AddFlow $sw $p4 $dsBatch 0.5 0 0.5 1 "Update stok_tersedia"
AddFlow $sw $p4 $dsObat 0.5 0 0.5 1 "Update stok_total"
AddFlow $sw $p3 $p5 0.5 1 0.5 0 "Referensi supplier & metode"
AddFlow $sw $p5 $dsHutang 0.5 0 0.5 1 "Buat/update hutang"
AddFlow $sw $p5 $dsTrans 0.5 0 0.5 1 "Update status pelunasan"
AddFlow $sw $p3 $eSupplier 0.5 0 0.5 1 "Faktur pembelian"

EndDiagram

$sw.WriteLine('</mxfile>')
$sw.Close()

Write-Host "DFD Level 2 - Catat Barang Masuk generated: $OutputPath"
