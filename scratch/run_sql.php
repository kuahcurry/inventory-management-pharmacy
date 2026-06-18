<?php
require 'vendor/autoload.php';
$app = require 'bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

try {
    // Force connection to use latin1 to reproduce user's error
    DB::unprepared("
SET NAMES latin1;
SET @today = CURDATE();
SET @now_ts = NOW();
SET @user_primary = 1;

DROP TEMPORARY TABLE IF EXISTS tmp_num;
CREATE TEMPORARY TABLE tmp_num (n INT PRIMARY KEY);
INSERT INTO tmp_num (n) VALUES (1);

-- This should fail if it's the exact same problem
INSERT INTO resep(
  nomor_resep, nomor_referensi, nama_pelanggan, nama_dokter, tanggal_resep,
  kategori_pelanggan, metode_pembayaran, status, processed_by, processed_at,
  catatan, created_at, updated_at
)
SELECT
  'RSP-TEST-1',
  'REF-TEST-1',
  'Ahmad Fauzan',
  'dr. Andi Pratama',
  CASE
    WHEN n.n <= 12 THEN @today
    WHEN n.n <= 24 THEN DATE_SUB(@today, INTERVAL 1 DAY)
    ELSE DATE_SUB(@today, INTERVAL (MOD(n.n, 10) + 2) DAY)
  END,
  'reguler',
  'tunai_umum',
  'completed',
  NULL,
  NULL,
  'Test',
  @now_ts,
  @now_ts
FROM tmp_num n;
    ");
    echo "Query 1 (Original) Passed!\n";
} catch (\Exception $e) {
    echo "Query 1 (Original) Failed: " . $e->getMessage() . "\n";
}

try {
    // Test with CURDATE() directly
    DB::unprepared("
SET NAMES latin1;
SET @now_ts = NOW();

DROP TEMPORARY TABLE IF EXISTS tmp_num;
CREATE TEMPORARY TABLE tmp_num (n INT PRIMARY KEY);
INSERT INTO tmp_num (n) VALUES (1);

INSERT INTO resep(
  nomor_resep, nomor_referensi, nama_pelanggan, nama_dokter, tanggal_resep,
  kategori_pelanggan, metode_pembayaran, status, processed_by, processed_at,
  catatan, created_at, updated_at
)
SELECT
  'RSP-TEST-2',
  'REF-TEST-2',
  'Ahmad Fauzan',
  'dr. Andi Pratama',
  CASE
    WHEN n.n <= 12 THEN CURDATE()
    WHEN n.n <= 24 THEN DATE_SUB(CURDATE(), INTERVAL 1 DAY)
    ELSE DATE_SUB(CURDATE(), INTERVAL (MOD(n.n, 10) + 2) DAY)
  END,
  'reguler',
  'tunai_umum',
  'completed',
  NULL,
  NULL,
  'Test',
  @now_ts,
  @now_ts
FROM tmp_num n;
    ");
    echo "Query 2 (with CURDATE) Passed!\n";
} catch (\Exception $e) {
    echo "Query 2 (with CURDATE) Failed: " . $e->getMessage() . "\n";
}
