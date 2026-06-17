-- Dummy data generator for sim_apotek.sql
-- Scope:
-- 1) Resep (20) + resep_detail
-- 2) Pemusnahan (20) + pemusnahan_detail
-- 3) Transaksi barang masuk (20)
-- 4) Transaksi barang keluar (20)
-- 5) Hutang suite (20 hutang + payment rows)
-- 6) Stok opname (20) + stok_opname_detail
-- 7) Batch obat otomatis untuk obat yang belum punya batch

START TRANSACTION;

-- ------------------------------------------------------------------
-- Base references
-- ------------------------------------------------------------------
SET @now_ts = NOW();
SET @today = CURDATE();
SET @user_primary = (SELECT id FROM users ORDER BY id ASC LIMIT 1);
SET @user_secondary = (SELECT id FROM users ORDER BY id DESC LIMIT 1);
SET @supplier_default = (SELECT id FROM supplier ORDER BY id ASC LIMIT 1);
SET @dummy_reorder_start = '2099-01-01';
SET @dummy_reorder_end = '2099-01-30';
SET @dummy_forecast_start = '2099-02-01';
SET @dummy_forecast_end = '2099-02-28';

-- ------------------------------------------------------------------
-- Cleanup old dummy block (idempotent by prefix)
-- ------------------------------------------------------------------
DELETE hp
FROM hutang_payments hp
JOIN hutang h ON h.id = hp.hutang_id
JOIN transaksi t ON t.id = h.transaksi_id
WHERE t.kode_transaksi LIKE 'DMY26-%';

DELETE h
FROM hutang h
JOIN transaksi t ON t.id = h.transaksi_id
WHERE t.kode_transaksi LIKE 'DMY26-%';

DELETE FROM transaksi
WHERE kode_transaksi LIKE 'DMY26-%';

DELETE rd
FROM resep_detail rd
JOIN resep r ON r.id = rd.resep_id
WHERE r.nomor_resep LIKE 'RSP-DMY26-%';

DELETE FROM resep
WHERE nomor_resep LIKE 'RSP-DMY26-%';

DELETE pod
FROM pemusnahan_obat_detail pod
JOIN pemusnahan_obat po ON po.id = pod.pemusnahan_id
WHERE po.nomor_berita_acara LIKE 'BA-DMY26-%';

DELETE FROM pemusnahan_obat
WHERE nomor_berita_acara LIKE 'BA-DMY26-%';

DELETE sod
FROM stok_opname_detail sod
JOIN stok_opname so ON so.id = sod.stok_opname_id
WHERE so.nomor_opname LIKE 'SO-DMY26-%';

DELETE FROM stok_opname
WHERE nomor_opname LIKE 'SO-DMY26-%';

DELETE FROM biaya_operasional
WHERE keterangan LIKE 'DMY26-%';

DELETE FROM approval_requests
WHERE reason LIKE 'DMY26-%';

DELETE FROM demand_forecasts
WHERE forecast_start_date = @dummy_forecast_start
  AND forecast_end_date = @dummy_forecast_end;

DELETE FROM reorder_suggestions
WHERE period_start = @dummy_reorder_start
  AND period_end = @dummy_reorder_end;

DELETE FROM batch_obat
WHERE nomor_batch LIKE 'B-EXP-DMY26-%'
  AND catatan = 'DMY26-near-expiry';

DELETE FROM log_aktivitas
WHERE ip_address = '127.0.0.9';

-- ------------------------------------------------------------------
-- Ensure every obat has at least one batch
-- ------------------------------------------------------------------
INSERT INTO batch_obat
(
  obat_id, supplier_id, nomor_batch, tanggal_produksi, tanggal_expired, tanggal_masuk,
  stok_awal, stok_tersedia, harga_beli, kode_qr, qr_data, status, catatan, created_at, updated_at
)
SELECT
  o.id,
  @supplier_default,
  CONCAT('B-AUTO-', LPAD(o.id, 4, '0')),
  DATE_SUB(@today, INTERVAL 60 DAY),
  DATE_ADD(@today, INTERVAL 720 DAY),
  DATE_SUB(@today, INTERVAL 30 DAY),
  GREATEST(COALESCE(o.stok_total, 0), 50),
  GREATEST(COALESCE(o.stok_total, 0), 50),
  COALESCE(o.harga_beli, 1000),
  CONCAT('QR-AUTO-', LPAD(o.id, 4, '0')),
  CONCAT('{"source":"auto-batch","obat_id":', o.id, ',"kode_qr":"QR-AUTO-', LPAD(o.id, 4, '0'), '"}'),
  'active',
  'Batch otomatis untuk obat tanpa batch',
  @now_ts,
  @now_ts
FROM obat o
LEFT JOIN batch_obat b ON b.obat_id = o.id AND b.deleted_at IS NULL
WHERE b.id IS NULL
  AND o.deleted_at IS NULL;

-- ------------------------------------------------------------------
-- Number helper (1..20)
-- ------------------------------------------------------------------
DROP TEMPORARY TABLE IF EXISTS tmp_num;
CREATE TEMPORARY TABLE tmp_num (n INT PRIMARY KEY);
INSERT INTO tmp_num (n) VALUES
(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16),(17),(18),(19),(20),
(21),(22),(23),(24),(25),(26),(27),(28),(29),(30),(31),(32),(33),(34),(35),(36),(37),(38),(39),(40),
(41),(42),(43),(44),(45),(46),(47),(48),(49),(50);

-- ------------------------------------------------------------------
-- Make some obat have critical stock (stok_total <= stok_minimum)
-- ------------------------------------------------------------------
UPDATE batch_obat b
JOIN (
  SELECT id FROM obat WHERE deleted_at IS NULL ORDER BY id ASC LIMIT 7
) o ON b.obat_id = o.id
SET b.stok_tersedia = CASE o.id
  WHEN 1 THEN 5
  WHEN 2 THEN 2
  WHEN 3 THEN 0
  WHEN 4 THEN 8
  WHEN 5 THEN 10
  WHEN 6 THEN 3
  ELSE 1
END
WHERE b.status = 'active';

UPDATE obat o
SET o.stok_total = (
  SELECT COALESCE(SUM(b.stok_tersedia), 0)
  FROM batch_obat b
  WHERE b.obat_id = o.id AND b.status = 'active' AND b.deleted_at IS NULL
)
WHERE o.id IN (1,2,3,4,5,6,7);

-- ------------------------------------------------------------------
-- Pick 20 active batches as seed backbone
-- ------------------------------------------------------------------
DROP TEMPORARY TABLE IF EXISTS tmp_seed_map;
CREATE TEMPORARY TABLE tmp_seed_map (
  rn INT NOT NULL AUTO_INCREMENT,
  batch_id BIGINT UNSIGNED NOT NULL,
  obat_id BIGINT UNSIGNED NOT NULL,
  supplier_id BIGINT UNSIGNED NULL,
  stok_tersedia INT NOT NULL,
  harga_beli DECIMAL(15,2) NOT NULL,
  harga_jual DECIMAL(15,2) NOT NULL,
  PRIMARY KEY (rn)
) ENGINE=MEMORY;

INSERT INTO tmp_seed_map (batch_id, obat_id, supplier_id, stok_tersedia, harga_beli, harga_jual)
SELECT
  b.id,
  b.obat_id,
  COALESCE(b.supplier_id, @supplier_default),
  COALESCE(b.stok_tersedia, 0),
  COALESCE(b.harga_beli, 1000),
  COALESCE(o.harga_jual, COALESCE(b.harga_beli, 1000) * 1.3)
FROM batch_obat b
JOIN obat o ON o.id = b.obat_id
WHERE b.deleted_at IS NULL
  AND o.deleted_at IS NULL
ORDER BY b.id
LIMIT 50;

SET @seed_count = (SELECT COUNT(*) FROM tmp_seed_map);

-- ------------------------------------------------------------------
-- Near-expiry batches for expiry report (7 obat)
-- ------------------------------------------------------------------
INSERT INTO batch_obat
(
  obat_id, supplier_id, nomor_batch, tanggal_produksi, tanggal_expired, tanggal_masuk,
  stok_awal, stok_tersedia, harga_beli, kode_qr, qr_data, status, catatan, created_at, updated_at
)
SELECT
  m.obat_id,
  m.supplier_id,
  CONCAT('B-EXP-DMY26-', LPAD(n.n, 2, '0')),
  DATE_SUB(@today, INTERVAL 180 DAY),
  DATE_ADD(@today, INTERVAL (5 + n.n) DAY),
  DATE_SUB(@today, INTERVAL 20 DAY),
  18 + n.n,
  8 + n.n,
  m.harga_beli,
  CONCAT('QR-EXP-DMY26-', LPAD(n.n, 2, '0')),
  CONCAT('{"source":"near-expiry-dummy","obat_id":', m.obat_id, ',"kode_qr":"QR-EXP-DMY26-', LPAD(n.n, 2, '0'), '"}'),
  'active',
  'DMY26-near-expiry',
  @now_ts,
  @now_ts
FROM tmp_num n
JOIN tmp_seed_map m ON m.rn = (MOD(n.n - 1, @seed_count) + 1)
WHERE n.n <= 7;

-- ------------------------------------------------------------------
-- 1) RESEP (20)
-- ------------------------------------------------------------------
INSERT INTO resep
(
  nomor_resep, nomor_referensi, nama_pelanggan, nama_dokter, tanggal_resep,
  kategori_pelanggan, metode_pembayaran, status, processed_by, processed_at,
  catatan, created_at, updated_at
)
SELECT
  CONCAT('RSP-DMY26-', LPAD(n.n, 4, '0')),
  CONCAT('REF-DMY26-', LPAD(n.n, 4, '0')),
  ELT(
    MOD(n.n - 1, 20) + 1,
    'Ahmad Fauzan',
    'Siti Nurhaliza',
    'Budi Hartono',
    'Dewi Lestari',
    'Rian Saputra',
    'Maya Putri',
    'Andika Pratama',
    'Nabila Safitri',
    'Fajar Ramadhan',
    'Intan Permata',
    'Rizal Maulana',
    'Anisa Rahma',
    'Dimas Prakoso',
    'Nadia Azzahra',
    'Arif Setiawan',
    'Laila Khairunnisa',
    'Yusuf Firmansyah',
    'Putri Maharani',
    'Bagas Nugroho',
    'Rina Oktavia'
  ),
  CASE MOD(n.n, 4)
    WHEN 1 THEN 'dr. Andi Pratama'
    WHEN 2 THEN 'dr. Rina Oktaviani'
    WHEN 3 THEN 'dr. Budi Santoso'
    ELSE 'dr. Maya Lestari'
  END,
  CASE
    WHEN n.n <= 12 THEN @today
    WHEN n.n <= 24 THEN DATE_SUB(@today, INTERVAL 1 DAY)
    ELSE DATE_SUB(@today, INTERVAL (MOD(n.n, 10) + 2) DAY)
  END,
  CASE MOD(n.n, 3)
    WHEN 1 THEN 'reguler'
    WHEN 2 THEN 'pelanggan_rutin'
    ELSE 'rujukan_dokter'
  END,
  CASE MOD(n.n, 3)
    WHEN 1 THEN 'tunai_umum'
    WHEN 2 THEN 'non_tunai'
    ELSE 'asuransi_rekanan'
  END,
  CASE MOD(n.n, 4)
    WHEN 0 THEN 'completed'
    WHEN 1 THEN 'processed'
    ELSE 'pending'
  END,
  CASE
    WHEN MOD(n.n, 4) IN (0,1) THEN @user_primary
    ELSE NULL
  END,
  CASE
    WHEN MOD(n.n, 4) IN (0,1) THEN DATE_SUB(@now_ts, INTERVAL n.n HOUR)
    ELSE NULL
  END,
  'Dummy resep untuk pengujian skripsi',
  @now_ts,
  @now_ts
FROM tmp_num n
WHERE n.n <= 35;

INSERT INTO resep_detail
(
  resep_id, obat_id, jumlah, dosis, aturan_pakai, catatan, is_dispensed, created_at, updated_at
)
SELECT
  r.id,
  m.obat_id,
  1 + MOD(n.n, 3),
  '3x1',
  'Sesudah makan',
  'Item utama dummy',
  CASE WHEN r.status IN ('processed','completed') THEN 1 ELSE 0 END,
  @now_ts,
  @now_ts
FROM tmp_num n
JOIN tmp_seed_map m ON m.rn = (MOD(n.n - 1, @seed_count) + 1)
JOIN resep r ON r.nomor_resep = CONCAT('RSP-DMY26-', LPAD(n.n, 4, '0'));

INSERT INTO resep_detail
(
  resep_id, obat_id, jumlah, dosis, aturan_pakai, catatan, is_dispensed, created_at, updated_at
)
SELECT
  r.id,
  m2.obat_id,
  1,
  '1x1',
  'Sebelum tidur',
  'Item tambahan dummy',
  CASE WHEN r.status = 'completed' THEN 1 ELSE 0 END,
  @now_ts,
  @now_ts
FROM tmp_num n
JOIN tmp_seed_map m2 ON m2.rn = (MOD(n.n, @seed_count) + 1)
JOIN resep r ON r.nomor_resep = CONCAT('RSP-DMY26-', LPAD(n.n, 4, '0'));

-- ------------------------------------------------------------------
-- 3) TRANSAKSI BARANG MASUK (20)
-- ------------------------------------------------------------------
INSERT INTO transaksi
(
  kode_transaksi, obat_id, batch_id, user_id, resep_id, jenis_transaksi,
  jumlah, harga_satuan, total_harga, tanggal_transaksi, waktu_transaksi,
  keterangan, nomor_referensi, supplier_id, supplier_nama,
  pelanggan_nama, dokter_nama, sales_nama, operator_nama, kasir_nama,
  metode_pembayaran, bank_code, bank_nama, tipe_penjualan,
  kategori_keuangan, status_pelunasan, approval_status, approval_processed_at,
  jatuh_tempo, is_taxed, created_at, updated_at
)
SELECT
  CONCAT('DMY26-IN-', LPAD(n.n, 4, '0')),
  m.obat_id,
  m.batch_id,
  @user_primary,
  NULL,
  'masuk',
  10 + n.n,
  m.harga_beli,
  (10 + n.n) * m.harga_beli,
  CASE
    WHEN n.n <= 5 THEN @today
    WHEN n.n <= 10 THEN DATE_SUB(@today, INTERVAL 1 DAY)
    ELSE DATE_SUB(@today, INTERVAL (MOD(n.n, 7) + 2) DAY)
  END,
  '08:00:00',
  'Dummy transaksi barang masuk',
  CONCAT('PO-DMY26-', LPAD(n.n, 4, '0')),
  m.supplier_id,
  (SELECT s.nama_supplier FROM supplier s WHERE s.id = m.supplier_id LIMIT 1),
  NULL,
  NULL,
  CONCAT('Sales Dummy ', LPAD(n.n, 2, '0')),
  CONCAT('Operator Dummy ', LPAD(n.n, 2, '0')),
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  'none',
  'lunas',
  'approved',
  @now_ts,
  NULL,
  0,
  @now_ts,
  @now_ts
FROM tmp_num n
JOIN tmp_seed_map m ON m.rn = (MOD(n.n - 1, @seed_count) + 1)
WHERE n.n <= 20;

-- ------------------------------------------------------------------
-- 4b) TRANSAKSI PENJUALAN KASIR (20) + PPN 11% + 4 transaksi diskon
-- ------------------------------------------------------------------
INSERT INTO transaksi
(
  kode_transaksi, obat_id, batch_id, user_id, resep_id, jenis_transaksi,
  jumlah, harga_satuan, total_harga, tanggal_transaksi, waktu_transaksi,
  keterangan, nomor_referensi, supplier_id, supplier_nama,
  pelanggan_nama, dokter_nama, sales_nama, operator_nama, kasir_nama,
  metode_pembayaran, bank_code, bank_nama, tipe_penjualan,
  kategori_keuangan, status_pelunasan, approval_status, approval_processed_at,
  jatuh_tempo, is_taxed, created_at, updated_at
)
SELECT
  CONCAT('DMY26-SALE-', LPAD(n.n, 4, '0')),
  m.obat_id,
  m.batch_id,
  @user_primary,
  r.id,
  'penjualan',
  1 + MOD(n.n, 2),
  m.harga_jual,
  ROUND(
    (
      ((1 + MOD(n.n, 2)) * m.harga_jual)
      - (
          ((1 + MOD(n.n, 2)) * m.harga_jual)
          * (CASE WHEN n.n IN (2, 6, 11, 17) THEN 10 ELSE 0 END / 100)
        )
    ) * 1.11,
    2
  ),
  CASE
    WHEN n.n <= 12 THEN @today
    WHEN n.n <= 24 THEN DATE_SUB(@today, INTERVAL 1 DAY)
    ELSE DATE_SUB(@today, INTERVAL (MOD(n.n, 7) + 2) DAY)
  END,
  '14:00:00',
  CONCAT(
    'Checkout kasir | Mode: Penjualan | Diskon: ',
    CASE WHEN n.n IN (2, 6, 11, 17) THEN '10' ELSE '0' END,
    '% | PPN: 11%'
  ),
  CONCAT('KSR-DMY26-', LPAD(n.n, 4, '0')),
  NULL,
  NULL,
  r.nama_pelanggan,
  r.nama_dokter,
  NULL,
  NULL,
  CASE MOD(n.n, 7)
    WHEN 1 THEN 'Rizqi Nurus Saadah'
    WHEN 2 THEN 'NADEA MURPRATAMI'
    WHEN 3 THEN 'PUTRI AZARIA FEBRIANI'
    WHEN 4 THEN 'SINTA AULIYA'
    WHEN 5 THEN 'RATNA HILMI TRIYANI'
    WHEN 6 THEN 'DWI PUJI LESTARI'
    ELSE 'Rizki nur fadilah'
  END,
  CASE MOD(n.n, 3)
    WHEN 1 THEN 'transfer'
    WHEN 2 THEN 'cash'
    ELSE 'qris'
  END,
  CASE
    WHEN MOD(n.n, 3) = 1 THEN
      CASE MOD(n.n, 7)
        WHEN 1 THEN 'BCA'
        WHEN 2 THEN 'BRI'
        WHEN 3 THEN 'BNI'
        WHEN 4 THEN 'MANDIRI'
        WHEN 5 THEN 'CIMB'
        WHEN 6 THEN 'PERMATA'
        ELSE 'BTN'
      END
    ELSE NULL
  END,
  CASE
    WHEN MOD(n.n, 3) = 1 THEN
      CASE MOD(n.n, 7)
        WHEN 1 THEN 'Bank Central Asia'
        WHEN 2 THEN 'Bank Rakyat Indonesia'
        WHEN 3 THEN 'Bank Negara Indonesia'
        WHEN 4 THEN 'Bank Mandiri'
        WHEN 5 THEN 'Bank CIMB Niaga'
        WHEN 6 THEN 'Bank Permata'
        ELSE 'Bank Tabungan Negara'
      END
    ELSE NULL
  END,
  'resep',
  'none',
  'lunas',
  'approved',
  @now_ts,
  NULL,
  1,
  @now_ts,
  @now_ts
FROM tmp_num n
JOIN tmp_seed_map m ON m.rn = (MOD(n.n - 1, @seed_count) + 1)
JOIN resep r ON r.nomor_resep = CONCAT('RSP-DMY26-', LPAD(n.n, 4, '0'))
WHERE n.n <= 35;

-- ------------------------------------------------------------------
-- 4) TRANSAKSI BARANG KELUAR (20)
-- ------------------------------------------------------------------
INSERT INTO transaksi
(
  kode_transaksi, obat_id, batch_id, user_id, resep_id, jenis_transaksi,
  jumlah, harga_satuan, total_harga, tanggal_transaksi, waktu_transaksi,
  keterangan, nomor_referensi, supplier_id, supplier_nama,
  pelanggan_nama, dokter_nama, sales_nama, operator_nama, kasir_nama,
  metode_pembayaran, bank_code, bank_nama, tipe_penjualan,
  kategori_keuangan, status_pelunasan, approval_status, approval_processed_at,
  jatuh_tempo, is_taxed, created_at, updated_at
)
SELECT
  CONCAT('DMY26-OUT-', LPAD(n.n, 4, '0')),
  m.obat_id,
  m.batch_id,
  @user_primary,
  NULL,
  'keluar',
  2 + MOD(n.n, 4),
  m.harga_jual,
  (2 + MOD(n.n, 4)) * m.harga_jual,
  CASE
    WHEN n.n <= 5 THEN @today
    WHEN n.n <= 10 THEN DATE_SUB(@today, INTERVAL 1 DAY)
    ELSE DATE_SUB(@today, INTERVAL (MOD(n.n, 7) + 2) DAY)
  END,
  '10:00:00',
  'Dummy transaksi barang keluar retail',
  CONCAT('REQ-DMY26-', LPAD(n.n, 4, '0')),
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  CONCAT('Operator Unit ', LPAD(n.n, 2, '0')),
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  'none',
  'lunas',
  'approved',
  @now_ts,
  NULL,
  0,
  @now_ts,
  @now_ts
FROM tmp_num n
JOIN tmp_seed_map m ON m.rn = (MOD(n.n - 1, @seed_count) + 1)
WHERE n.n <= 20;

-- ------------------------------------------------------------------
-- 5) HUTANG SUITE (20 hutang transactions + hutang + payments)
-- ------------------------------------------------------------------
INSERT INTO transaksi
(
  kode_transaksi, obat_id, batch_id, user_id, resep_id, jenis_transaksi,
  jumlah, harga_satuan, total_harga, tanggal_transaksi, waktu_transaksi,
  keterangan, nomor_referensi, supplier_id, supplier_nama,
  pelanggan_nama, dokter_nama, sales_nama, operator_nama, kasir_nama,
  metode_pembayaran, bank_code, bank_nama, tipe_penjualan,
  kategori_keuangan, status_pelunasan, approval_status, approval_processed_at,
  jatuh_tempo, is_taxed, created_at, updated_at
)
SELECT
  CONCAT('DMY26-HTG-', LPAD(n.n, 4, '0')),
  m.obat_id,
  m.batch_id,
  @user_primary,
  r.id,
  'penjualan',
  1 + MOD(n.n, 3),
  m.harga_jual,
  (1 + MOD(n.n, 3)) * m.harga_jual,
  CASE
    WHEN n.n <= 3 THEN @today
    WHEN n.n <= 6 THEN DATE_SUB(@today, INTERVAL 1 DAY)
    ELSE DATE_SUB(@today, INTERVAL (MOD(n.n, 7) + 2) DAY)
  END,
  '13:00:00',
  'Dummy transaksi hutang suite',
  CONCAT('INV-DMY26-', LPAD(n.n, 4, '0')),
  NULL,
  NULL,
  r.nama_pelanggan,
  r.nama_dokter,
  NULL,
  NULL,
  CASE MOD(n.n, 7)
    WHEN 1 THEN 'Rizqi Nurus Saadah'
    WHEN 2 THEN 'NADEA MURPRATAMI'
    WHEN 3 THEN 'PUTRI AZARIA FEBRIANI'
    WHEN 4 THEN 'SINTA AULIYA'
    WHEN 5 THEN 'RATNA HILMI TRIYANI'
    WHEN 6 THEN 'DWI PUJI LESTARI'
    ELSE 'Rizki nur fadilah'
  END,
  CASE WHEN MOD(n.n, 2) = 0 THEN 'debit' ELSE 'kredit' END,
  CASE WHEN MOD(n.n, 2) = 0 THEN 'BCA' ELSE 'BRI' END,
  CASE WHEN MOD(n.n, 2) = 0 THEN 'Bank Central Asia' ELSE 'Bank Rakyat Indonesia' END,
  'resep',
  'hutang',
  'belum_lunas',
  'approved',
  @now_ts,
  DATE_ADD(@today, INTERVAL 30 DAY),
  1,
  @now_ts,
  @now_ts
FROM tmp_num n
JOIN tmp_seed_map m ON m.rn = (MOD(n.n - 1, @seed_count) + 1)
JOIN resep r ON r.nomor_resep = CONCAT('RSP-DMY26-', LPAD(n.n, 4, '0'))
WHERE n.n <= 12;

INSERT INTO hutang
(
  transaksi_id, supplier_id, customer_name,
  total_amount, remaining_amount, payment_status,
  settled_at, user_id, created_at, updated_at
)
SELECT
  t.id,
  NULL,
  t.pelanggan_nama,
  t.total_harga,
  CASE MOD(CAST(RIGHT(t.kode_transaksi, 4) AS UNSIGNED), 3)
    WHEN 0 THEN 0
    WHEN 1 THEN ROUND(t.total_harga * 0.50, 2)
    ELSE t.total_harga
  END,
  CASE MOD(CAST(RIGHT(t.kode_transaksi, 4) AS UNSIGNED), 3)
    WHEN 0 THEN 'paid'
    WHEN 1 THEN 'partially_paid'
    ELSE 'unpaid'
  END,
  CASE
    WHEN MOD(CAST(RIGHT(t.kode_transaksi, 4) AS UNSIGNED), 3) = 0 THEN DATE_SUB(@now_ts, INTERVAL 1 DAY)
    ELSE NULL
  END,
  @user_primary,
  @now_ts,
  @now_ts
FROM transaksi t
WHERE t.kode_transaksi LIKE 'DMY26-HTG-%';

INSERT INTO hutang_payments
(
  hutang_id, amount, paid_at, metode_pembayaran, keterangan, user_id, created_at, updated_at
)
SELECT
  h.id,
  (h.total_amount - h.remaining_amount),
  DATE_ADD(@now_ts, INTERVAL CAST(RIGHT(t.kode_transaksi, 4) AS UNSIGNED) MINUTE),
  CASE WHEN MOD(CAST(RIGHT(t.kode_transaksi, 4) AS UNSIGNED), 2) = 0 THEN 'transfer' ELSE 'cash' END,
  'Pembayaran dummy hutang suite',
  @user_secondary,
  @now_ts,
  @now_ts
FROM hutang h
JOIN transaksi t ON t.id = h.transaksi_id
WHERE t.kode_transaksi LIKE 'DMY26-HTG-%'
  AND (h.total_amount - h.remaining_amount) > 0;

-- ------------------------------------------------------------------
-- 5b) BIAYA OPERASIONAL KASIR (untuk reports/keuangan)
-- ------------------------------------------------------------------
INSERT INTO biaya_operasional
(
  tanggal_biaya, kategori, nominal, keterangan, metode_pembayaran,
  bank_code, bank_nama, kasir_nama, user_id, created_at, updated_at
)
SELECT
  CASE
    WHEN n.n <= 2 THEN @today
    WHEN n.n <= 4 THEN DATE_SUB(@today, INTERVAL 1 DAY)
    ELSE DATE_SUB(@today, INTERVAL (MOD(n.n, 10) + 2) DAY)
  END,
  CASE MOD(n.n, 4)
    WHEN 1 THEN 'pajak'
    WHEN 2 THEN 'bunga'
    WHEN 3 THEN 'sewa'
    ELSE 'lainnya'
  END,
  25000 + (n.n * 3500),
  CONCAT('DMY26-biaya-operasional-', LPAD(n.n, 2, '0')),
  CASE MOD(n.n, 3)
    WHEN 1 THEN 'transfer'
    WHEN 2 THEN 'cash'
    ELSE 'debit'
  END,
  CASE
    WHEN MOD(n.n, 3) = 1 THEN
      CASE MOD(n.n, 7)
        WHEN 1 THEN 'BCA'
        WHEN 2 THEN 'BRI'
        WHEN 3 THEN 'BNI'
        WHEN 4 THEN 'MANDIRI'
        WHEN 5 THEN 'CIMB'
        WHEN 6 THEN 'PERMATA'
        ELSE 'BTN'
      END
    ELSE NULL
  END,
  CASE
    WHEN MOD(n.n, 3) = 1 THEN
      CASE MOD(n.n, 7)
        WHEN 1 THEN 'Bank Central Asia'
        WHEN 2 THEN 'Bank Rakyat Indonesia'
        WHEN 3 THEN 'Bank Negara Indonesia'
        WHEN 4 THEN 'Bank Mandiri'
        WHEN 5 THEN 'Bank CIMB Niaga'
        WHEN 6 THEN 'Bank Permata'
        ELSE 'Bank Tabungan Negara'
      END
    ELSE NULL
  END,
  CASE MOD(n.n, 7)
    WHEN 1 THEN 'Rizqi Nurus Saadah'
    WHEN 2 THEN 'NADEA MURPRATAMI'
    WHEN 3 THEN 'PUTRI AZARIA FEBRIANI'
    WHEN 4 THEN 'SINTA AULIYA'
    WHEN 5 THEN 'RATNA HILMI TRIYANI'
    WHEN 6 THEN 'DWI PUJI LESTARI'
    ELSE 'Rizki nur fadilah'
  END,
  @user_primary,
  @now_ts,
  @now_ts
FROM tmp_num n
WHERE n.n <= 15;

-- ------------------------------------------------------------------
-- 5c) BOOST TRANSAKSI + TARGET LABA BERSIH 10 JUTA (30 HARI)
-- ------------------------------------------------------------------
INSERT INTO transaksi
(
  kode_transaksi, obat_id, batch_id, user_id, resep_id, jenis_transaksi,
  jumlah, harga_satuan, total_harga, tanggal_transaksi, waktu_transaksi,
  keterangan, nomor_referensi, supplier_id, supplier_nama,
  pelanggan_nama, dokter_nama, sales_nama, operator_nama, kasir_nama,
  metode_pembayaran, bank_code, bank_nama, tipe_penjualan,
  kategori_keuangan, status_pelunasan, approval_status, approval_processed_at,
  jatuh_tempo, is_taxed, created_at, updated_at
)
SELECT
  CONCAT('DMY26-BOOST-', LPAD(n.n, 4, '0')),
  m.obat_id,
  m.batch_id,
  @user_primary,
  NULL,
  'penjualan',
  24 + MOD(n.n, 17),
  ROUND(GREATEST(m.harga_jual * 1.08, m.harga_beli * 1.18), 2),
  ROUND((24 + MOD(n.n, 17)) * ROUND(GREATEST(m.harga_jual * 1.08, m.harga_beli * 1.18), 2) * 1.11, 2),
  CASE
    WHEN n.n <= 12 THEN @today
    WHEN n.n <= 24 THEN DATE_SUB(@today, INTERVAL 1 DAY)
    ELSE DATE_SUB(@today, INTERVAL (MOD(n.n, 7) + 2) DAY)
  END,
  '15:30:00',
  'DMY26-boost-profit-realistis | Penjualan volume puluhan item | PPN: 11% | Diskon: 0%',
  CONCAT('BOOST-DMY26-', LPAD(n.n, 4, '0')),
  NULL,
  NULL,
  ELT(
    MOD(n.n - 1, 12) + 1,
    'Yuni Astuti',
    'Farhan Hidayat',
    'Nina Damayanti',
    'Rangga Saputra',
    'Aulia Rahman',
    'Vina Maharani',
    'Ferry Kurniawan',
    'Rista Ayuningtyas',
    'Dedi Hermawan',
    'Ayu Melati',
    'Ilham Pranata',
    'Salsa Oktarina'
  ),
  NULL,
  NULL,
  NULL,
  CASE MOD(n.n, 7)
    WHEN 1 THEN 'Rizqi Nurus Saadah'
    WHEN 2 THEN 'NADEA MURPRATAMI'
    WHEN 3 THEN 'PUTRI AZARIA FEBRIANI'
    WHEN 4 THEN 'SINTA AULIYA'
    WHEN 5 THEN 'RATNA HILMI TRIYANI'
    WHEN 6 THEN 'DWI PUJI LESTARI'
    ELSE 'Rizki nur fadilah'
  END,
  CASE MOD(n.n, 3)
    WHEN 1 THEN 'transfer'
    WHEN 2 THEN 'cash'
    ELSE 'qris'
  END,
  CASE
    WHEN MOD(n.n, 3) = 1 THEN
      CASE MOD(n.n, 7)
        WHEN 1 THEN 'BCA'
        WHEN 2 THEN 'BRI'
        WHEN 3 THEN 'BNI'
        WHEN 4 THEN 'MANDIRI'
        WHEN 5 THEN 'CIMB'
        WHEN 6 THEN 'PERMATA'
        ELSE 'BTN'
      END
    ELSE NULL
  END,
  CASE
    WHEN MOD(n.n, 3) = 1 THEN
      CASE MOD(n.n, 7)
        WHEN 1 THEN 'Bank Central Asia'
        WHEN 2 THEN 'Bank Rakyat Indonesia'
        WHEN 3 THEN 'Bank Negara Indonesia'
        WHEN 4 THEN 'Bank Mandiri'
        WHEN 5 THEN 'Bank CIMB Niaga'
        WHEN 6 THEN 'Bank Permata'
        ELSE 'Bank Tabungan Negara'
      END
    ELSE NULL
  END,
  'resep',
  'none',
  'lunas',
  'approved',
  @now_ts,
  NULL,
  1,
  @now_ts,
  @now_ts
FROM tmp_num n
JOIN tmp_seed_map m ON m.rn = (MOD(n.n - 1, @seed_count) + 1)
WHERE n.n <= 30;

SET @target_net_30d = 10000000.00;

SET @dummy_revenue_30d = (
  SELECT COALESCE(SUM(t.total_harga), 0)
  FROM transaksi t
  WHERE t.kode_transaksi LIKE 'DMY26-%'
    AND t.jenis_transaksi = 'penjualan'
    AND t.tanggal_transaksi BETWEEN DATE_SUB(@today, INTERVAL 30 DAY) AND @today
);

SET @dummy_hpp_30d = (
  SELECT COALESCE(SUM(COALESCE(b.harga_beli, o.harga_beli, 0) * t.jumlah), 0)
  FROM transaksi t
  LEFT JOIN batch_obat b ON b.id = t.batch_id
  LEFT JOIN obat o ON o.id = t.obat_id
  WHERE t.kode_transaksi LIKE 'DMY26-%'
    AND t.jenis_transaksi = 'penjualan'
    AND t.tanggal_transaksi BETWEEN DATE_SUB(@today, INTERVAL 30 DAY) AND @today
);

SET @dummy_biaya_30d = (
  SELECT COALESCE(SUM(bo.nominal), 0)
  FROM biaya_operasional bo
  WHERE bo.keterangan LIKE 'DMY26-%'
    AND bo.tanggal_biaya BETWEEN DATE_SUB(@today, INTERVAL 30 DAY) AND @today
);

SET @dummy_net_30d = ROUND(@dummy_revenue_30d - @dummy_hpp_30d - @dummy_biaya_30d, 2);
SET @dummy_gap_30d = ROUND(@target_net_30d - @dummy_net_30d, 2);

SET @adj_batch_id = COALESCE(
  (
    SELECT b.id
    FROM batch_obat b
    JOIN obat o ON o.id = b.obat_id
    WHERE b.deleted_at IS NULL
      AND o.deleted_at IS NULL
    ORDER BY COALESCE(o.harga_jual, 0) DESC, COALESCE(b.harga_beli, 0) DESC, b.id DESC
    LIMIT 1
  ),
  (SELECT m.batch_id FROM tmp_seed_map m WHERE m.rn = 1 LIMIT 1)
);

SET @adj_obat_id = (
  SELECT b.obat_id
  FROM batch_obat b
  WHERE b.id = @adj_batch_id
  LIMIT 1
);

SET @adj_hpp_unit = (
  SELECT COALESCE(b.harga_beli, o.harga_beli, 1000)
  FROM batch_obat b
  JOIN obat o ON o.id = b.obat_id
  WHERE b.id = @adj_batch_id
  LIMIT 1
);

SET @adj_harga_satuan = (
  SELECT ROUND(
    LEAST(
      GREATEST(COALESCE(o.harga_jual, @adj_hpp_unit * 1.18), @adj_hpp_unit * 1.18),
      @adj_hpp_unit * 1.35
    ),
    2
  )
  FROM obat o
  WHERE o.id = @adj_obat_id
  LIMIT 1
);

SET @adj_profit_unit = GREATEST(ROUND((@adj_harga_satuan * 1.11) - @adj_hpp_unit, 2), 1000.00);
SET @adj_qty_needed = CEIL(GREATEST(@dummy_gap_30d, 0) / @adj_profit_unit);

-- Jika laba bersih masih di bawah target, tambahkan transaksi penjualan realistis
-- dengan kuantitas puluhan item per transaksi (bukan menaikkan harga per item secara ekstrem).
INSERT INTO transaksi
(
  kode_transaksi, obat_id, batch_id, user_id, resep_id, jenis_transaksi,
  jumlah, harga_satuan, total_harga, tanggal_transaksi, waktu_transaksi,
  keterangan, nomor_referensi, supplier_id, supplier_nama,
  pelanggan_nama, dokter_nama, sales_nama, operator_nama, kasir_nama,
  metode_pembayaran, bank_code, bank_nama, tipe_penjualan,
  kategori_keuangan, status_pelunasan, approval_status, approval_processed_at,
  jatuh_tempo, is_taxed, created_at, updated_at
)
SELECT
  CONCAT('DMY26-NET-ADJ-', LPAD(n.n, 4, '0')),
  @adj_obat_id,
  @adj_batch_id,
  @user_primary,
  NULL,
  'penjualan',
  CAST(LEAST(75, GREATEST(@adj_qty_needed - ((n.n - 1) * 75), 0)) AS UNSIGNED),
  @adj_harga_satuan,
  ROUND(CAST(LEAST(75, GREATEST(@adj_qty_needed - ((n.n - 1) * 75), 0)) AS UNSIGNED) * @adj_harga_satuan * 1.11, 2),
  DATE_SUB(@today, INTERVAL MOD(n.n, 7) DAY),
  '16:10:00',
  'DMY26-target-net-up-realistis | Transaksi volume puluhan item | PPN: 11%',
  CONCAT('NET-ADJ-UP-DMY26-', LPAD(n.n, 4, '0')),
  NULL,
  NULL,
  'Klinik Mitra Retail',
  NULL,
  NULL,
  NULL,
  CASE MOD(n.n, 7)
    WHEN 1 THEN 'Rizqi Nurus Saadah'
    WHEN 2 THEN 'NADEA MURPRATAMI'
    WHEN 3 THEN 'PUTRI AZARIA FEBRIANI'
    WHEN 4 THEN 'SINTA AULIYA'
    WHEN 5 THEN 'RATNA HILMI TRIYANI'
    WHEN 6 THEN 'DWI PUJI LESTARI'
    ELSE 'Rizki nur fadilah'
  END,
  CASE MOD(n.n, 3)
    WHEN 1 THEN 'transfer'
    WHEN 2 THEN 'cash'
    ELSE 'qris'
  END,
  CASE
    WHEN MOD(n.n, 3) = 1 THEN
      CASE MOD(n.n, 7)
        WHEN 1 THEN 'BCA'
        WHEN 2 THEN 'BRI'
        WHEN 3 THEN 'BNI'
        WHEN 4 THEN 'MANDIRI'
        WHEN 5 THEN 'CIMB'
        WHEN 6 THEN 'PERMATA'
        ELSE 'BTN'
      END
    ELSE NULL
  END,
  CASE
    WHEN MOD(n.n, 3) = 1 THEN
      CASE MOD(n.n, 7)
        WHEN 1 THEN 'Bank Central Asia'
        WHEN 2 THEN 'Bank Rakyat Indonesia'
        WHEN 3 THEN 'Bank Negara Indonesia'
        WHEN 4 THEN 'Bank Mandiri'
        WHEN 5 THEN 'Bank CIMB Niaga'
        WHEN 6 THEN 'Bank Permata'
        ELSE 'Bank Tabungan Negara'
      END
    ELSE NULL
  END,
  'resep',
  'none',
  'lunas',
  'approved',
  @now_ts,
  NULL,
  1,
  @now_ts,
  @now_ts
FROM tmp_num n
WHERE @dummy_gap_30d > 0
  AND LEAST(75, GREATEST(@adj_qty_needed - ((n.n - 1) * 75), 0)) > 0;

SET @dummy_net_after_adj_30d = ROUND(
  (
    SELECT COALESCE(SUM(t.total_harga), 0)
    FROM transaksi t
    WHERE t.kode_transaksi LIKE 'DMY26-%'
      AND t.jenis_transaksi = 'penjualan'
      AND t.tanggal_transaksi BETWEEN DATE_SUB(@today, INTERVAL 30 DAY) AND @today
  )
  -
  (
    SELECT COALESCE(SUM(COALESCE(b.harga_beli, o.harga_beli, 0) * t.jumlah), 0)
    FROM transaksi t
    LEFT JOIN batch_obat b ON b.id = t.batch_id
    LEFT JOIN obat o ON o.id = t.obat_id
    WHERE t.kode_transaksi LIKE 'DMY26-%'
      AND t.jenis_transaksi = 'penjualan'
      AND t.tanggal_transaksi BETWEEN DATE_SUB(@today, INTERVAL 30 DAY) AND @today
  )
  -
  (
    SELECT COALESCE(SUM(bo.nominal), 0)
    FROM biaya_operasional bo
    WHERE bo.keterangan LIKE 'DMY26-%'
      AND bo.tanggal_biaya BETWEEN DATE_SUB(@today, INTERVAL 30 DAY) AND @today
  ),
  2
);

SET @dummy_gap_after_adj_30d = ROUND(@target_net_30d - @dummy_net_after_adj_30d, 2);

-- Jika laba bersih setelah penyesuaian melebihi target, turunkan dengan biaya operasional agar tepat sasaran.
INSERT INTO biaya_operasional
(
  tanggal_biaya, kategori, nominal, keterangan, metode_pembayaran,
  bank_code, bank_nama, kasir_nama, user_id, created_at, updated_at
)
SELECT
  DATE_SUB(@today, INTERVAL 1 DAY),
  'lainnya',
  ABS(@dummy_gap_after_adj_30d),
  'DMY26-target-net-down | Penyesuaian laba bersih otomatis',
  'transfer',
  'BCA',
  'Bank Central Asia',
  'Rizqi Nurus Saadah',
  @user_primary,
  @now_ts,
  @now_ts
WHERE @dummy_gap_after_adj_30d < 0;

SET @dummy_final_net_30d = ROUND(
  (
    SELECT COALESCE(SUM(t.total_harga), 0)
    FROM transaksi t
    WHERE t.kode_transaksi LIKE 'DMY26-%'
      AND t.jenis_transaksi = 'penjualan'
      AND t.tanggal_transaksi BETWEEN DATE_SUB(@today, INTERVAL 30 DAY) AND @today
  )
  -
  (
    SELECT COALESCE(SUM(COALESCE(b.harga_beli, o.harga_beli, 0) * t.jumlah), 0)
    FROM transaksi t
    LEFT JOIN batch_obat b ON b.id = t.batch_id
    LEFT JOIN obat o ON o.id = t.obat_id
    WHERE t.kode_transaksi LIKE 'DMY26-%'
      AND t.jenis_transaksi = 'penjualan'
      AND t.tanggal_transaksi BETWEEN DATE_SUB(@today, INTERVAL 30 DAY) AND @today
  )
  -
  (
    SELECT COALESCE(SUM(bo.nominal), 0)
    FROM biaya_operasional bo
    WHERE bo.keterangan LIKE 'DMY26-%'
      AND bo.tanggal_biaya BETWEEN DATE_SUB(@today, INTERVAL 30 DAY) AND @today
  ),
  2
);

-- ------------------------------------------------------------------
-- 3b) DATA UNTUK LAPORAN OPERASIONAL CERDAS
-- ------------------------------------------------------------------
INSERT INTO reorder_suggestions
(
  obat_id, avg_daily_usage, lead_time_days, safety_stock, reorder_point,
  suggested_order_qty, period_start, period_end, calculated_at,
  is_applied, created_at, updated_at
)
SELECT
  m.obat_id,
  2 + MOD(n.n, 5),
  5 + MOD(n.n, 4),
  8 + MOD(n.n, 6),
  (2 + MOD(n.n, 5)) * (5 + MOD(n.n, 4)) + (8 + MOD(n.n, 6)),
  CASE
    WHEN MOD(n.n, 3) = 0 THEN 0
    ELSE 10 + MOD(n.n, 20)
  END,
  @dummy_reorder_start,
  @dummy_reorder_end,
  @now_ts,
  0,
  @now_ts,
  @now_ts
FROM tmp_num n
JOIN tmp_seed_map m ON m.rn = (MOD(n.n - 1, @seed_count) + 1)
WHERE n.n <= 20;

INSERT INTO demand_forecasts
(
  obat_id, period_type, lookback_days, avg_daily_usage, seasonality_factor,
  forecast_quantity, confidence_percentage, forecast_start_date,
  forecast_end_date, created_at, updated_at
)
SELECT
  m.obat_id,
  CASE WHEN MOD(n.n, 2) = 0 THEN 'weekly' ELSE 'monthly' END,
  CASE WHEN MOD(n.n, 2) = 0 THEN 30 ELSE 90 END,
  2 + MOD(n.n, 6),
  CASE WHEN MOD(n.n, 2) = 0 THEN 1.05 ELSE 1.10 END,
  CASE
    WHEN MOD(n.n, 2) = 0 THEN (2 + MOD(n.n, 6)) * 7
    ELSE (2 + MOD(n.n, 6)) * 30
  END,
  70 + MOD(n.n, 20),
  @dummy_forecast_start,
  @dummy_forecast_end,
  @now_ts,
  @now_ts
FROM tmp_num n
JOIN tmp_seed_map m ON m.rn = (MOD(n.n - 1, @seed_count) + 1)
WHERE n.n <= 20;

INSERT INTO approval_requests
(
  request_type, obat_id, transaksi_id, requested_by, approved_by,
  approval_level_required, status, requested_quantity, reason,
  decision_note, approved_at, created_at, updated_at
)
SELECT
  'high_risk_sale',
  m.obat_id,
  t.id,
  @user_primary,
  NULL,
  CASE WHEN MOD(n.n, 2) = 0 THEN 2 ELSE 3 END,
  'pending',
  1 + MOD(n.n, 4),
  CONCAT('DMY26-Permintaan approval high risk #', LPAD(n.n, 2, '0')),
  NULL,
  NULL,
  @now_ts,
  @now_ts
FROM tmp_num n
JOIN tmp_seed_map m ON m.rn = (MOD(n.n - 1, @seed_count) + 1)
JOIN transaksi t ON t.kode_transaksi = CONCAT('DMY26-HTG-', LPAD(n.n, 4, '0'));

-- ------------------------------------------------------------------
-- 2) PEMUSNAHAN (20)
-- ------------------------------------------------------------------
INSERT INTO pemusnahan_obat
(
  nomor_berita_acara, tanggal_pemusnahan, penanggung_jawab, lokasi_pemusnahan,
  metode_pemusnahan, saksi, alasan, keterangan, file_berita_acara,
  status, approved_by, approved_at, created_at, updated_at
)
SELECT
  CONCAT('BA-DMY26-', LPAD(n.n, 4, '0')),
  CASE
    WHEN n.n <= 2 THEN @today
    WHEN n.n <= 4 THEN DATE_SUB(@today, INTERVAL 1 DAY)
    ELSE DATE_SUB(@today, INTERVAL (MOD(n.n, 10) + 2) DAY)
  END,
  @user_primary,
  'Area Insinerator Apotek',
  'Insinerasi sesuai SOP',
  CONCAT('[{"nama":"Saksi ', LPAD(n.n, 2, '0'), '","jabatan":"Petugas"}]'),
  CASE MOD(n.n, 4)
    WHEN 1 THEN 'expired'
    WHEN 2 THEN 'rusak'
    WHEN 3 THEN 'recall'
    ELSE 'lainnya'
  END,
  'Dummy data pemusnahan',
  NULL,
  CASE MOD(n.n, 3)
    WHEN 1 THEN 'draft'
    WHEN 2 THEN 'completed'
    ELSE 'approved'
  END,
  CASE WHEN MOD(n.n, 3) = 0 THEN @user_secondary ELSE NULL END,
  CASE WHEN MOD(n.n, 3) = 0 THEN DATE_SUB(@now_ts, INTERVAL n.n HOUR) ELSE NULL END,
  @now_ts,
  @now_ts
FROM tmp_num n
WHERE n.n <= 12;

INSERT INTO pemusnahan_obat_detail
(
  pemusnahan_id, batch_id, jumlah, nilai_perolehan, kondisi, created_at, updated_at
)
SELECT
  p.id,
  m.batch_id,
  1 + MOD(n.n, 3),
  (1 + MOD(n.n, 3)) * m.harga_beli,
  CASE MOD(n.n, 3)
    WHEN 0 THEN 'Kadaluarsa'
    WHEN 1 THEN 'Kemasan rusak'
    ELSE 'Recall pabrik'
  END,
  @now_ts,
  @now_ts
FROM tmp_num n
JOIN tmp_seed_map m ON m.rn = (MOD(n.n - 1, @seed_count) + 1)
JOIN pemusnahan_obat p ON p.nomor_berita_acara = CONCAT('BA-DMY26-', LPAD(n.n, 4, '0'));

-- ------------------------------------------------------------------
-- 6) STOK OPNAME (20)
-- ------------------------------------------------------------------
INSERT INTO stok_opname
(
  nomor_opname, tanggal_opname, penanggung_jawab,
  status, approved_by, approved_at, catatan, berita_acara,
  created_at, updated_at
)
SELECT
  CONCAT('SO-DMY26-', LPAD(n.n, 4, '0')),
  CASE
    WHEN n.n <= 2 THEN @today
    WHEN n.n <= 4 THEN DATE_SUB(@today, INTERVAL 1 DAY)
    ELSE DATE_SUB(@today, INTERVAL (MOD(n.n, 20) + 2) DAY)
  END,
  @user_primary,
  CASE MOD(n.n, 4)
    WHEN 1 THEN 'draft'
    WHEN 2 THEN 'in_progress'
    WHEN 3 THEN 'completed'
    ELSE 'approved'
  END,
  CASE WHEN MOD(n.n, 4) = 0 THEN @user_secondary ELSE NULL END,
  CASE WHEN MOD(n.n, 4) = 0 THEN DATE_SUB(@now_ts, INTERVAL n.n HOUR) ELSE NULL END,
  'Dummy stok opname periodik',
  CASE WHEN MOD(n.n, 4) IN (3,0) THEN 'Berita acara dummy stok opname' ELSE NULL END,
  @now_ts,
  @now_ts
FROM tmp_num n
WHERE n.n <= 12;

INSERT INTO stok_opname_detail
(
  stok_opname_id, batch_id, stok_sistem, stok_fisik, selisih, keterangan_selisih, created_at, updated_at
)
SELECT
  so.id,
  m.batch_id,
  m.stok_tersedia,
  m.stok_tersedia +
  CASE MOD(n.n, 5)
    WHEN 0 THEN -2
    WHEN 1 THEN -1
    WHEN 2 THEN 0
    WHEN 3 THEN 1
    ELSE 2
  END,
  CASE MOD(n.n, 5)
    WHEN 0 THEN -2
    WHEN 1 THEN -1
    WHEN 2 THEN 0
    WHEN 3 THEN 1
    ELSE 2
  END,
  'Dummy selisih stok opname',
  @now_ts,
  @now_ts
FROM tmp_num n
JOIN tmp_seed_map m ON m.rn = (MOD(n.n - 1, @seed_count) + 1)
JOIN stok_opname so ON so.nomor_opname = CONCAT('SO-DMY26-', LPAD(n.n, 4, '0'));

-- ------------------------------------------------------------------
-- 7) LOG AKTIVITAS DUMMY
-- ------------------------------------------------------------------
INSERT INTO log_aktivitas
(
  user_id, aktivitas, modul, aksi, loggable_type, loggable_id,
  ip_address, user_agent, waktu, created_at, updated_at
)
VALUES
( @user_primary, 'DMY26-User admin login sukses', 'auth', 'login', 'App\\Models\\User', @user_primary, '127.0.0.9', 'Mozilla/5.0', DATE_SUB(@now_ts, INTERVAL 8 HOUR), @now_ts, @now_ts ),
( @user_primary, 'DMY26-Melihat detail obat Paracetamol 500mg', 'obat', 'view', 'App\\Models\\Obat', 1, '127.0.0.9', 'Mozilla/5.0', DATE_SUB(@now_ts, INTERVAL 7 HOUR), @now_ts, @now_ts ),
( @user_primary, 'DMY26-Melakukan scanning QR Code batch B-AUTO-0001', 'qr', 'scan', 'App\\Models\\BatchObat', 1, '127.0.0.9', 'Mozilla/5.0', DATE_SUB(@now_ts, INTERVAL 6 HOUR), @now_ts, @now_ts ),
( @user_primary, 'DMY26-Menambahkan transaksi penjualan kasir KSR-DMY26-0001', 'transaksi', 'create', 'App\\Models\\Transaksi', 1, '127.0.0.9', 'Mozilla/5.0', DATE_SUB(@now_ts, INTERVAL 5 HOUR), @now_ts, @now_ts ),
( @user_secondary, 'DMY26-User apoteker login sukses', 'auth', 'login', 'App\\Models\\User', @user_secondary, '127.0.0.9', 'Mozilla/5.0', DATE_SUB(@now_ts, INTERVAL 4 HOUR), @now_ts, @now_ts ),
( @user_secondary, 'DMY26-Melakukan stok opname untuk batch B-AUTO-0002', 'stok-opname', 'update', 'App\\Models\\StokOpname', 1, '127.0.0.9', 'Mozilla/5.0', DATE_SUB(@now_ts, INTERVAL 3 HOUR), @now_ts, @now_ts ),
( @user_primary, 'DMY26-Menyetujui permintaan approval penjualan risiko tinggi', 'approval', 'update', 'App\\Models\\ApprovalRequest', 1, '127.0.0.9', 'Mozilla/5.0', DATE_SUB(@now_ts, INTERVAL 2 HOUR), @now_ts, @now_ts ),
( @user_primary, 'DMY26-Mengekspor laporan keuangan laba rugi', 'laporan', 'view', 'App\\Models\\Transaksi', 1, '127.0.0.9', 'Mozilla/5.0', DATE_SUB(@now_ts, INTERVAL 1 HOUR), @now_ts, @now_ts ),
( @user_secondary, 'DMY26-Mengubah detail data obat Amoxicillin 500mg', 'obat', 'update', 'App\\Models\\Obat', 2, '127.0.0.9', 'Mozilla/5.0', DATE_SUB(@now_ts, INTERVAL 30 MINUTE), @now_ts, @now_ts ),
( @user_primary, 'DMY26-Melakukan scan log QR masuk unit', 'qr', 'scan', 'App\\Models\\BatchObat', 2, '127.0.0.9', 'Mozilla/5.0', DATE_SUB(@now_ts, INTERVAL 10 MINUTE), @now_ts, @now_ts );

-- ------------------------------------------------------------------
-- Summary checks
-- ------------------------------------------------------------------
SELECT 'resep' AS entity, COUNT(*) AS total FROM resep WHERE nomor_resep LIKE 'RSP-DMY26-%'
UNION ALL
SELECT 'resep_detail', COUNT(*) FROM resep_detail rd JOIN resep r ON r.id = rd.resep_id WHERE r.nomor_resep LIKE 'RSP-DMY26-%'
UNION ALL
SELECT 'pemusnahan_obat', COUNT(*) FROM pemusnahan_obat WHERE nomor_berita_acara LIKE 'BA-DMY26-%'
UNION ALL
SELECT 'pemusnahan_obat_detail', COUNT(*) FROM pemusnahan_obat_detail d JOIN pemusnahan_obat p ON p.id = d.pemusnahan_id WHERE p.nomor_berita_acara LIKE 'BA-DMY26-%'
UNION ALL
SELECT 'transaksi_masuk', COUNT(*) FROM transaksi WHERE kode_transaksi LIKE 'DMY26-IN-%'
UNION ALL
SELECT 'transaksi_keluar', COUNT(*) FROM transaksi WHERE kode_transaksi LIKE 'DMY26-OUT-%'
UNION ALL
SELECT 'hutang_suite_transaksi', COUNT(*) FROM transaksi WHERE kode_transaksi LIKE 'DMY26-HTG-%'
UNION ALL
SELECT 'kasir_penjualan', COUNT(*) FROM transaksi WHERE kode_transaksi LIKE 'DMY26-SALE-%'
UNION ALL
SELECT 'boost_penjualan', COUNT(*) FROM transaksi WHERE kode_transaksi LIKE 'DMY26-BOOST-%'
UNION ALL
SELECT 'penyesuaian_laba_transaksi', COUNT(*) FROM transaksi WHERE kode_transaksi LIKE 'DMY26-NET-ADJ-%'
UNION ALL
SELECT 'hutang', COUNT(*) FROM hutang h JOIN transaksi t ON t.id = h.transaksi_id WHERE t.kode_transaksi LIKE 'DMY26-HTG-%'
UNION ALL
SELECT 'hutang_payments', COUNT(*) FROM hutang_payments hp JOIN hutang h ON h.id = hp.hutang_id JOIN transaksi t ON t.id = h.transaksi_id WHERE t.kode_transaksi LIKE 'DMY26-HTG-%'
UNION ALL
SELECT 'stok_opname', COUNT(*) FROM stok_opname WHERE nomor_opname LIKE 'SO-DMY26-%'
UNION ALL
SELECT 'stok_opname_detail', COUNT(*) FROM stok_opname_detail d JOIN stok_opname s ON s.id = d.stok_opname_id WHERE s.nomor_opname LIKE 'SO-DMY26-%'
UNION ALL
SELECT 'biaya_operasional', COUNT(*) FROM biaya_operasional WHERE keterangan LIKE 'DMY26-%'
UNION ALL
SELECT 'near_expiry_batches', COUNT(*) FROM batch_obat WHERE nomor_batch LIKE 'B-EXP-DMY26-%' AND catatan = 'DMY26-near-expiry'
UNION ALL
SELECT 'reorder_suggestions', COUNT(*) FROM reorder_suggestions WHERE period_start = @dummy_reorder_start AND period_end = @dummy_reorder_end
UNION ALL
SELECT 'demand_forecasts', COUNT(*) FROM demand_forecasts WHERE forecast_start_date = @dummy_forecast_start AND forecast_end_date = @dummy_forecast_end
UNION ALL
SELECT 'approval_requests_pending', COUNT(*) FROM approval_requests WHERE reason LIKE 'DMY26-%' AND status = 'pending'
UNION ALL
SELECT 'laba_bersih_dummy_30hari', @dummy_final_net_30d;

COMMIT;
