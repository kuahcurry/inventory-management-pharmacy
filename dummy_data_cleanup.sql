-- Cleanup script for dummy_data_min20.sql
-- Removes all dummy records created by prefixes DMY26 / RSP-DMY26 / BA-DMY26 / SO-DMY26
-- and optional retail support inserts (auto batch + dummy units).

START TRANSACTION;

-- 1) Child records first (FK-safe order)
DELETE hp
FROM hutang_payments hp
JOIN hutang h ON h.id = hp.hutang_id
JOIN transaksi t ON t.id = h.transaksi_id
WHERE t.kode_transaksi LIKE 'DMY26-%';

DELETE h
FROM hutang h
JOIN transaksi t ON t.id = h.transaksi_id
WHERE t.kode_transaksi LIKE 'DMY26-%';

DELETE rd
FROM resep_detail rd
JOIN resep r ON r.id = rd.resep_id
WHERE r.nomor_resep LIKE 'RSP-DMY26-%';

DELETE pod
FROM pemusnahan_obat_detail pod
JOIN pemusnahan_obat po ON po.id = pod.pemusnahan_id
WHERE po.nomor_berita_acara LIKE 'BA-DMY26-%';

DELETE sod
FROM stok_opname_detail sod
JOIN stok_opname so ON so.id = sod.stok_opname_id
WHERE so.nomor_opname LIKE 'SO-DMY26-%';

-- 2) Parent records
DELETE FROM transaksi
WHERE kode_transaksi LIKE 'DMY26-%';

DELETE FROM resep
WHERE nomor_resep LIKE 'RSP-DMY26-%';

DELETE FROM pemusnahan_obat
WHERE nomor_berita_acara LIKE 'BA-DMY26-%';

DELETE FROM stok_opname
WHERE nomor_opname LIKE 'SO-DMY26-%';

DELETE FROM biaya_operasional
WHERE keterangan LIKE 'DMY26-%';

DELETE FROM approval_requests
WHERE reason LIKE 'DMY26-%';

DELETE FROM demand_forecasts
WHERE forecast_start_date = '2099-02-01'
  AND forecast_end_date = '2099-02-28';

DELETE FROM reorder_suggestions
WHERE period_start = '2099-01-01'
  AND period_end = '2099-01-30';

-- 3) Optional cleanup for helper records created by dummy script
DELETE FROM batch_obat
WHERE nomor_batch LIKE 'B-AUTO-%'
  AND catatan = 'Batch otomatis untuk obat tanpa batch';

DELETE FROM batch_obat
WHERE nomor_batch LIKE 'B-EXP-DMY26-%'
  AND catatan = 'DMY26-near-expiry';

DELETE FROM unit_rumah_sakit
WHERE kode_unit IN ('FAR-UTM-01', 'FAR-UTM-02', 'FAR-UTM-03');

-- 4) Check remaining dummy rows (should all be 0)
SELECT 'transaksi' AS entity, COUNT(*) AS total FROM transaksi WHERE kode_transaksi LIKE 'DMY26-%'
UNION ALL
SELECT 'resep', COUNT(*) FROM resep WHERE nomor_resep LIKE 'RSP-DMY26-%'
UNION ALL
SELECT 'resep_detail', COUNT(*) FROM resep_detail rd JOIN resep r ON r.id = rd.resep_id WHERE r.nomor_resep LIKE 'RSP-DMY26-%'
UNION ALL
SELECT 'pemusnahan_obat', COUNT(*) FROM pemusnahan_obat WHERE nomor_berita_acara LIKE 'BA-DMY26-%'
UNION ALL
SELECT 'pemusnahan_obat_detail', COUNT(*) FROM pemusnahan_obat_detail d JOIN pemusnahan_obat p ON p.id = d.pemusnahan_id WHERE p.nomor_berita_acara LIKE 'BA-DMY26-%'
UNION ALL
SELECT 'stok_opname', COUNT(*) FROM stok_opname WHERE nomor_opname LIKE 'SO-DMY26-%'
UNION ALL
SELECT 'stok_opname_detail', COUNT(*) FROM stok_opname_detail d JOIN stok_opname s ON s.id = d.stok_opname_id WHERE s.nomor_opname LIKE 'SO-DMY26-%'
UNION ALL
SELECT 'hutang', COUNT(*) FROM hutang h JOIN transaksi t ON t.id = h.transaksi_id WHERE t.kode_transaksi LIKE 'DMY26-%'
UNION ALL
SELECT 'hutang_payments', COUNT(*) FROM hutang_payments hp JOIN hutang h ON h.id = hp.hutang_id JOIN transaksi t ON t.id = h.transaksi_id WHERE t.kode_transaksi LIKE 'DMY26-%'
UNION ALL
SELECT 'biaya_operasional', COUNT(*) FROM biaya_operasional WHERE keterangan LIKE 'DMY26-%'
UNION ALL
SELECT 'near_expiry_batches', COUNT(*) FROM batch_obat WHERE nomor_batch LIKE 'B-EXP-DMY26-%' AND catatan = 'DMY26-near-expiry'
UNION ALL
SELECT 'reorder_suggestions', COUNT(*) FROM reorder_suggestions WHERE period_start = '2099-01-01' AND period_end = '2099-01-30'
UNION ALL
SELECT 'demand_forecasts', COUNT(*) FROM demand_forecasts WHERE forecast_start_date = '2099-02-01' AND forecast_end_date = '2099-02-28'
UNION ALL
SELECT 'approval_requests', COUNT(*) FROM approval_requests WHERE reason LIKE 'DMY26-%';

COMMIT;
