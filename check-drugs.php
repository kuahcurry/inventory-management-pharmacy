<?php
// Check if drugs were inserted
$databasePath = __DIR__ . '/database/database.sqlite';

if (file_exists($databasePath)) {
    $db = new PDO("sqlite:$databasePath");
    
    // Check total drugs
    $stmt = $db->query("SELECT COUNT(*) FROM obat");
    $totalDrugs = $stmt->fetchColumn();
    
    echo "Total obat di database: $totalDrugs\n";
    
    if ($totalDrugs > 0) {
        echo "Daftar 10 obat pertama:\n";
        $stmt = $db->query("SELECT kode_obat, nama_obat, nama_generik FROM obat LIMIT 10");
        foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $drug) {
            echo "  - {$drug['kode_obat']}: {$drug['nama_obat']} ({$drug['nama_generik']})\n";
        }
    }
} else {
    echo "Database file not found!\n";
}
?>