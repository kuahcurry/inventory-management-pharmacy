-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 19, 2026 at 06:22 AM
-- Server version: 9.2.0
-- PHP Version: 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sim_apotek`
--

-- --------------------------------------------------------

--
-- Table structure for table `approval_requests`
--

DROP TABLE IF EXISTS `approval_requests`;
CREATE TABLE IF NOT EXISTS `approval_requests` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `request_type` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'high_risk_sale',
  `obat_id` bigint UNSIGNED NOT NULL,
  `transaksi_id` bigint UNSIGNED DEFAULT NULL,
  `requested_by` bigint UNSIGNED NOT NULL,
  `approved_by` bigint UNSIGNED DEFAULT NULL,
  `approval_level_required` tinyint UNSIGNED NOT NULL DEFAULT '2',
  `status` enum('pending','approved','rejected') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `requested_quantity` int UNSIGNED NOT NULL DEFAULT '0',
  `reason` text COLLATE utf8mb4_unicode_ci,
  `decision_note` text COLLATE utf8mb4_unicode_ci,
  `approved_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `approval_requests_obat_id_foreign` (`obat_id`),
  KEY `approval_requests_transaksi_id_foreign` (`transaksi_id`),
  KEY `approval_requests_requested_by_foreign` (`requested_by`),
  KEY `approval_requests_approved_by_foreign` (`approved_by`),
  KEY `approval_requests_status_approval_level_required_index` (`status`,`approval_level_required`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `batch_obat`
--

DROP TABLE IF EXISTS `batch_obat`;
CREATE TABLE IF NOT EXISTS `batch_obat` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `obat_id` bigint UNSIGNED NOT NULL,
  `supplier_id` bigint UNSIGNED DEFAULT NULL,
  `nomor_batch` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggal_produksi` date DEFAULT NULL,
  `tanggal_expired` date NOT NULL,
  `tanggal_masuk` date NOT NULL COMMENT 'Tanggal batch masuk ke apotek',
  `stok_awal` int NOT NULL DEFAULT '0',
  `stok_tersedia` int NOT NULL DEFAULT '0' COMMENT 'Stok yang masih tersedia',
  `harga_beli` decimal(15,2) NOT NULL DEFAULT '0.00',
  `kode_qr` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'QR Code untuk batch ini',
  `qr_data` text COLLATE utf8mb4_unicode_ci COMMENT 'JSON data untuk QR Code',
  `status` enum('active','expired','empty','recalled') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `catatan` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `batch_obat_obat_id_nomor_batch_unique` (`obat_id`,`nomor_batch`),
  UNIQUE KEY `batch_obat_kode_qr_unique` (`kode_qr`),
  KEY `batch_obat_tanggal_expired_index` (`tanggal_expired`),
  KEY `batch_obat_status_index` (`status`),
  KEY `batch_obat_supplier_id_foreign` (`supplier_id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `batch_obat`
--

INSERT INTO `batch_obat` (`id`, `obat_id`, `supplier_id`, `nomor_batch`, `tanggal_produksi`, `tanggal_expired`, `tanggal_masuk`, `stok_awal`, `stok_tersedia`, `harga_beli`, `kode_qr`, `qr_data`, `status`, `catatan`, `created_at`, `updated_at`, `deleted_at`) VALUES
(3, 103, 1, 'B-IND-001', '2026-01-21', '2028-03-21', '2026-03-21', 320, 320, 450.00, 'BATCH-20260405080545-JJRYZC', '{\"kode_qr\":\"BATCH-20260405080545-JJRYZC\",\"obat\":{\"id\":103,\"kode\":\"OBT-IND-001\",\"nama\":\"Paracetamol 500mg Tablet\",\"nama_generik\":\"Paracetamol\",\"kategori\":\"Antipiretik\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-001\",\"expired\":\"2028-03-21\",\"stok\":320},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/103\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(4, 104, 2, 'B-IND-002', '2026-01-20', '2028-04-20', '2026-03-20', 210, 210, 12000.00, 'BATCH-20260405080545-TRVUQV', '{\"kode_qr\":\"BATCH-20260405080545-TRVUQV\",\"obat\":{\"id\":104,\"kode\":\"OBT-IND-002\",\"nama\":\"Paracetamol Sirup 120mg-5mL\",\"nama_generik\":\"Paracetamol\",\"kategori\":\"Antipiretik\",\"jenis\":\"Sirup\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-002\",\"expired\":\"2028-04-20\",\"stok\":210},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/104\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(5, 105, 3, 'B-IND-003', '2026-01-19', '2028-05-19', '2026-03-19', 280, 280, 700.00, 'BATCH-20260405080545-ISTPAX', '{\"kode_qr\":\"BATCH-20260405080545-ISTPAX\",\"obat\":{\"id\":105,\"kode\":\"OBT-IND-003\",\"nama\":\"Ibuprofen 400mg Tablet\",\"nama_generik\":\"Ibuprofen\",\"kategori\":\"Antiinflamasi\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-003\",\"expired\":\"2028-05-19\",\"stok\":280},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/105\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(6, 106, 4, 'B-IND-004', '2026-01-18', '2028-06-18', '2026-03-18', 260, 260, 850.00, 'BATCH-20260405080545-NPLJJK', '{\"kode_qr\":\"BATCH-20260405080545-NPLJJK\",\"obat\":{\"id\":106,\"kode\":\"OBT-IND-004\",\"nama\":\"Asam Mefenamat 500mg Tablet\",\"nama_generik\":\"Asam Mefenamat\",\"kategori\":\"Antiinflamasi\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-004\",\"expired\":\"2028-06-18\",\"stok\":260},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/106\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(7, 107, 5, 'B-IND-005', '2026-01-17', '2028-07-17', '2026-03-17', 240, 240, 900.00, 'BATCH-20260405080545-6NZBHO', '{\"kode_qr\":\"BATCH-20260405080545-6NZBHO\",\"obat\":{\"id\":107,\"kode\":\"OBT-IND-005\",\"nama\":\"Diklofenak Natrium 50mg Tablet\",\"nama_generik\":\"Diklofenak Natrium\",\"kategori\":\"Antiinflamasi\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-005\",\"expired\":\"2028-07-17\",\"stok\":240},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/107\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(8, 108, 6, 'B-IND-006', '2026-01-16', '2028-08-16', '2026-03-16', 140, 140, 3500.00, 'BATCH-20260405080545-U0P0IC', '{\"kode_qr\":\"BATCH-20260405080545-U0P0IC\",\"obat\":{\"id\":108,\"kode\":\"OBT-IND-006\",\"nama\":\"Ketorolak Injeksi 30mg-mL\",\"nama_generik\":\"Ketorolak\",\"kategori\":\"Antiinflamasi\",\"jenis\":\"Injeksi\",\"satuan\":\"Ampul\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-006\",\"expired\":\"2028-08-16\",\"stok\":140},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/108\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(9, 109, 7, 'B-IND-007', '2026-01-15', '2028-03-15', '2026-03-15', 180, 180, 1800.00, 'BATCH-20260405080545-WX88GF', '{\"kode_qr\":\"BATCH-20260405080545-WX88GF\",\"obat\":{\"id\":109,\"kode\":\"OBT-IND-007\",\"nama\":\"Tramadol 50mg Kapsul\",\"nama_generik\":\"Tramadol\",\"kategori\":\"Analgesik\",\"jenis\":\"Kapsul\",\"satuan\":\"Kapsul\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-007\",\"expired\":\"2028-03-15\",\"stok\":180},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/109\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(10, 110, 8, 'B-IND-008', '2026-01-14', '2028-04-14', '2026-03-14', 200, 200, 1200.00, 'BATCH-20260405080545-FSATTM', '{\"kode_qr\":\"BATCH-20260405080545-FSATTM\",\"obat\":{\"id\":110,\"kode\":\"OBT-IND-008\",\"nama\":\"Naproxen 500mg Tablet\",\"nama_generik\":\"Naproxen\",\"kategori\":\"Antiinflamasi\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-008\",\"expired\":\"2028-04-14\",\"stok\":200},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/110\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(11, 111, 9, 'B-IND-009', '2026-01-13', '2028-05-13', '2026-03-13', 190, 190, 1300.00, 'BATCH-20260405080545-5U28S0', '{\"kode_qr\":\"BATCH-20260405080545-5U28S0\",\"obat\":{\"id\":111,\"kode\":\"OBT-IND-009\",\"nama\":\"Meloxicam 7.5mg Tablet\",\"nama_generik\":\"Meloxicam\",\"kategori\":\"Antiinflamasi\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-009\",\"expired\":\"2028-05-13\",\"stok\":190},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/111\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(12, 112, 10, 'B-IND-010', '2026-01-12', '2028-06-12', '2026-03-12', 170, 170, 2500.00, 'BATCH-20260405080545-IQJUMP', '{\"kode_qr\":\"BATCH-20260405080545-IQJUMP\",\"obat\":{\"id\":112,\"kode\":\"OBT-IND-010\",\"nama\":\"Celecoxib 200mg Kapsul\",\"nama_generik\":\"Celecoxib\",\"kategori\":\"Antiinflamasi\",\"jenis\":\"Kapsul\",\"satuan\":\"Kapsul\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-010\",\"expired\":\"2028-06-12\",\"stok\":170},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/112\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(13, 113, 1, 'B-IND-011', '2026-01-11', '2028-07-11', '2026-03-11', 360, 360, 950.00, 'BATCH-20260405080545-C45NEJ', '{\"kode_qr\":\"BATCH-20260405080545-C45NEJ\",\"obat\":{\"id\":113,\"kode\":\"OBT-IND-011\",\"nama\":\"Amoxicillin 500mg Kapsul\",\"nama_generik\":\"Amoxicillin\",\"kategori\":\"Antibiotik\",\"jenis\":\"Kapsul\",\"satuan\":\"Kapsul\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-011\",\"expired\":\"2028-07-11\",\"stok\":360},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/113\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(14, 114, 2, 'B-IND-012', '2026-01-10', '2028-08-10', '2026-03-10', 220, 220, 14000.00, 'BATCH-20260405080545-XBBDUX', '{\"kode_qr\":\"BATCH-20260405080545-XBBDUX\",\"obat\":{\"id\":114,\"kode\":\"OBT-IND-012\",\"nama\":\"Amoxicillin Sirup Kering 125mg-5mL\",\"nama_generik\":\"Amoxicillin\",\"kategori\":\"Antibiotik\",\"jenis\":\"Suspensi\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-012\",\"expired\":\"2028-08-10\",\"stok\":220},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/114\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(15, 115, 3, 'B-IND-013', '2026-01-09', '2028-03-09', '2026-03-09', 200, 200, 2400.00, 'BATCH-20260405080545-HHUYZ5', '{\"kode_qr\":\"BATCH-20260405080545-HHUYZ5\",\"obat\":{\"id\":115,\"kode\":\"OBT-IND-013\",\"nama\":\"Cefixime 100mg Kapsul\",\"nama_generik\":\"Cefixime\",\"kategori\":\"Antibiotik\",\"jenis\":\"Kapsul\",\"satuan\":\"Kapsul\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-013\",\"expired\":\"2028-03-09\",\"stok\":200},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/115\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(16, 116, 4, 'B-IND-014', '2026-01-08', '2028-04-08', '2026-03-08', 210, 210, 2200.00, 'BATCH-20260405080545-2TA5RW', '{\"kode_qr\":\"BATCH-20260405080545-2TA5RW\",\"obat\":{\"id\":116,\"kode\":\"OBT-IND-014\",\"nama\":\"Cefadroxil 500mg Kapsul\",\"nama_generik\":\"Cefadroxil\",\"kategori\":\"Antibiotik\",\"jenis\":\"Kapsul\",\"satuan\":\"Kapsul\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-014\",\"expired\":\"2028-04-08\",\"stok\":210},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/116\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(17, 117, 5, 'B-IND-015', '2026-01-07', '2028-05-07', '2026-03-07', 160, 160, 12000.00, 'BATCH-20260405080545-7BZKQH', '{\"kode_qr\":\"BATCH-20260405080545-7BZKQH\",\"obat\":{\"id\":117,\"kode\":\"OBT-IND-015\",\"nama\":\"Ceftriaxone Injeksi 1g\",\"nama_generik\":\"Ceftriaxone\",\"kategori\":\"Antibiotik\",\"jenis\":\"Injeksi\",\"satuan\":\"Vial\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-015\",\"expired\":\"2028-05-07\",\"stok\":160},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/117\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(18, 118, 6, 'B-IND-016', '2026-01-06', '2028-06-06', '2026-03-06', 190, 190, 1800.00, 'BATCH-20260405080545-UI9X5Q', '{\"kode_qr\":\"BATCH-20260405080545-UI9X5Q\",\"obat\":{\"id\":118,\"kode\":\"OBT-IND-016\",\"nama\":\"Ciprofloxacin 500mg Tablet\",\"nama_generik\":\"Ciprofloxacin\",\"kategori\":\"Antibiotik\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-016\",\"expired\":\"2028-06-06\",\"stok\":190},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/118\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(19, 119, 7, 'B-IND-017', '2026-01-05', '2028-07-05', '2026-03-05', 180, 180, 3200.00, 'BATCH-20260405080545-ONFU6X', '{\"kode_qr\":\"BATCH-20260405080545-ONFU6X\",\"obat\":{\"id\":119,\"kode\":\"OBT-IND-017\",\"nama\":\"Levofloxacin 500mg Tablet\",\"nama_generik\":\"Levofloxacin\",\"kategori\":\"Antibiotik\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-017\",\"expired\":\"2028-07-05\",\"stok\":180},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/119\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(20, 120, 8, 'B-IND-018', '2026-01-04', '2028-08-04', '2026-03-04', 175, 175, 3000.00, 'BATCH-20260405080545-XHFAXJ', '{\"kode_qr\":\"BATCH-20260405080545-XHFAXJ\",\"obat\":{\"id\":120,\"kode\":\"OBT-IND-018\",\"nama\":\"Azithromycin 500mg Tablet\",\"nama_generik\":\"Azithromycin\",\"kategori\":\"Antibiotik\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-018\",\"expired\":\"2028-08-04\",\"stok\":175},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/120\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(21, 121, 9, 'B-IND-019', '2026-01-03', '2028-03-03', '2026-03-03', 165, 165, 2800.00, 'BATCH-20260405080545-LJQUE8', '{\"kode_qr\":\"BATCH-20260405080545-LJQUE8\",\"obat\":{\"id\":121,\"kode\":\"OBT-IND-019\",\"nama\":\"Clindamycin 300mg Kapsul\",\"nama_generik\":\"Clindamycin\",\"kategori\":\"Antibiotik\",\"jenis\":\"Kapsul\",\"satuan\":\"Kapsul\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-019\",\"expired\":\"2028-03-03\",\"stok\":165},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/121\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(22, 122, 10, 'B-IND-020', '2026-01-02', '2028-04-02', '2026-03-02', 230, 230, 900.00, 'BATCH-20260405080545-OLOVUK', '{\"kode_qr\":\"BATCH-20260405080545-OLOVUK\",\"obat\":{\"id\":122,\"kode\":\"OBT-IND-020\",\"nama\":\"Metronidazole 500mg Tablet\",\"nama_generik\":\"Metronidazole\",\"kategori\":\"Antibiotik\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-020\",\"expired\":\"2028-04-02\",\"stok\":230},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/122\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(23, 123, 1, 'B-IND-021', '2026-01-01', '2028-05-01', '2026-03-01', 210, 210, 850.00, 'BATCH-20260405080545-FLUSP2', '{\"kode_qr\":\"BATCH-20260405080545-FLUSP2\",\"obat\":{\"id\":123,\"kode\":\"OBT-IND-021\",\"nama\":\"Cotrimoxazole 480mg Tablet\",\"nama_generik\":\"Sulfamethoxazole Trimethoprim\",\"kategori\":\"Antibiotik\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-021\",\"expired\":\"2028-05-01\",\"stok\":210},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/123\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(24, 124, 2, 'B-IND-022', '2025-12-28', '2028-05-28', '2026-02-28', 170, 170, 1500.00, 'BATCH-20260405080545-MGTJLU', '{\"kode_qr\":\"BATCH-20260405080545-MGTJLU\",\"obat\":{\"id\":124,\"kode\":\"OBT-IND-022\",\"nama\":\"Doxycycline 100mg Kapsul\",\"nama_generik\":\"Doxycycline\",\"kategori\":\"Antibiotik\",\"jenis\":\"Kapsul\",\"satuan\":\"Kapsul\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-022\",\"expired\":\"2028-05-28\",\"stok\":170},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/124\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(25, 125, 3, 'B-IND-023', '2025-12-27', '2028-06-27', '2026-02-27', 165, 165, 1300.00, 'BATCH-20260405080545-QHYJQJ', '{\"kode_qr\":\"BATCH-20260405080545-QHYJQJ\",\"obat\":{\"id\":125,\"kode\":\"OBT-IND-023\",\"nama\":\"Erythromycin 500mg Tablet\",\"nama_generik\":\"Erythromycin\",\"kategori\":\"Antibiotik\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-023\",\"expired\":\"2028-06-27\",\"stok\":165},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/125\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(26, 126, 4, 'B-IND-024', '2025-12-26', '2028-07-26', '2026-02-26', 130, 130, 4500.00, 'BATCH-20260405080545-GHSBPF', '{\"kode_qr\":\"BATCH-20260405080545-GHSBPF\",\"obat\":{\"id\":126,\"kode\":\"OBT-IND-024\",\"nama\":\"Gentamicin Injeksi 80mg-2mL\",\"nama_generik\":\"Gentamicin\",\"kategori\":\"Antibiotik\",\"jenis\":\"Injeksi\",\"satuan\":\"Ampul\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-024\",\"expired\":\"2028-07-26\",\"stok\":130},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/126\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(27, 127, 5, 'B-IND-025', '2025-12-25', '2028-02-25', '2026-02-25', 120, 120, 65000.00, 'BATCH-20260405080545-QS71SQ', '{\"kode_qr\":\"BATCH-20260405080545-QS71SQ\",\"obat\":{\"id\":127,\"kode\":\"OBT-IND-025\",\"nama\":\"Meropenem Injeksi 1g\",\"nama_generik\":\"Meropenem\",\"kategori\":\"Antibiotik\",\"jenis\":\"Injeksi\",\"satuan\":\"Vial\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-025\",\"expired\":\"2028-02-25\",\"stok\":120},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/127\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(28, 128, 6, 'B-IND-026', '2025-12-24', '2028-03-24', '2026-02-24', 260, 260, 1800.00, 'BATCH-20260405080545-LFRIMR', '{\"kode_qr\":\"BATCH-20260405080545-LFRIMR\",\"obat\":{\"id\":128,\"kode\":\"OBT-IND-026\",\"nama\":\"Omeprazole 20mg Kapsul\",\"nama_generik\":\"Omeprazole\",\"kategori\":\"Antasida\",\"jenis\":\"Kapsul\",\"satuan\":\"Kapsul\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-026\",\"expired\":\"2028-03-24\",\"stok\":260},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/128\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(29, 129, 7, 'B-IND-027', '2025-12-23', '2028-04-23', '2026-02-23', 180, 180, 2500.00, 'BATCH-20260405080545-XWAKC4', '{\"kode_qr\":\"BATCH-20260405080545-XWAKC4\",\"obat\":{\"id\":129,\"kode\":\"OBT-IND-027\",\"nama\":\"Lansoprazole 30mg Kapsul\",\"nama_generik\":\"Lansoprazole\",\"kategori\":\"Antasida\",\"jenis\":\"Kapsul\",\"satuan\":\"Kapsul\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-027\",\"expired\":\"2028-04-23\",\"stok\":180},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/129\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(30, 130, 8, 'B-IND-028', '2025-12-22', '2028-05-22', '2026-02-22', 170, 170, 2700.00, 'BATCH-20260405080545-OW7HA4', '{\"kode_qr\":\"BATCH-20260405080545-OW7HA4\",\"obat\":{\"id\":130,\"kode\":\"OBT-IND-028\",\"nama\":\"Pantoprazole 40mg Tablet\",\"nama_generik\":\"Pantoprazole\",\"kategori\":\"Antasida\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-028\",\"expired\":\"2028-05-22\",\"stok\":170},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/130\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(31, 131, 9, 'B-IND-029', '2025-12-21', '2028-06-21', '2026-02-21', 190, 190, 1200.00, 'BATCH-20260405080545-RZP8PP', '{\"kode_qr\":\"BATCH-20260405080545-RZP8PP\",\"obat\":{\"id\":131,\"kode\":\"OBT-IND-029\",\"nama\":\"Famotidine 20mg Tablet\",\"nama_generik\":\"Famotidine\",\"kategori\":\"Antasida\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-029\",\"expired\":\"2028-06-21\",\"stok\":190},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/131\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(32, 132, 10, 'B-IND-030', '2025-12-20', '2028-07-20', '2026-02-20', 150, 150, 18000.00, 'BATCH-20260405080545-AV2PKK', '{\"kode_qr\":\"BATCH-20260405080545-AV2PKK\",\"obat\":{\"id\":132,\"kode\":\"OBT-IND-030\",\"nama\":\"Sukralfat Sirup 500mg-5mL\",\"nama_generik\":\"Sukralfat\",\"kategori\":\"Antasida\",\"jenis\":\"Sirup\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-030\",\"expired\":\"2028-07-20\",\"stok\":150},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/132\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(33, 133, 1, 'B-IND-031', '2025-12-19', '2028-02-19', '2026-02-19', 220, 220, 9000.00, 'BATCH-20260405080545-N8PYZK', '{\"kode_qr\":\"BATCH-20260405080545-N8PYZK\",\"obat\":{\"id\":133,\"kode\":\"OBT-IND-031\",\"nama\":\"Antasida Suspensi\",\"nama_generik\":\"Aluminium Hydroxide Magnesium Hydroxide\",\"kategori\":\"Antasida\",\"jenis\":\"Suspensi\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-031\",\"expired\":\"2028-02-19\",\"stok\":220},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/133\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(34, 134, 2, 'B-IND-032', '2025-12-18', '2028-03-18', '2026-02-18', 210, 210, 700.00, 'BATCH-20260405080545-XNMAUE', '{\"kode_qr\":\"BATCH-20260405080545-XNMAUE\",\"obat\":{\"id\":134,\"kode\":\"OBT-IND-032\",\"nama\":\"Domperidone 10mg Tablet\",\"nama_generik\":\"Domperidone\",\"kategori\":\"Antiemetik\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-032\",\"expired\":\"2028-03-18\",\"stok\":210},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/134\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(35, 135, 3, 'B-IND-033', '2025-12-17', '2028-04-17', '2026-02-17', 160, 160, 2200.00, 'BATCH-20260405080545-B705AX', '{\"kode_qr\":\"BATCH-20260405080545-B705AX\",\"obat\":{\"id\":135,\"kode\":\"OBT-IND-033\",\"nama\":\"Ondansetron 4mg Tablet\",\"nama_generik\":\"Ondansetron\",\"kategori\":\"Antiemetik\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-033\",\"expired\":\"2028-04-17\",\"stok\":160},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/135\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(36, 136, 4, 'B-IND-034', '2025-12-16', '2028-05-16', '2026-02-16', 120, 120, 6000.00, 'BATCH-20260405080545-FA58OT', '{\"kode_qr\":\"BATCH-20260405080545-FA58OT\",\"obat\":{\"id\":136,\"kode\":\"OBT-IND-034\",\"nama\":\"Ondansetron Injeksi 4mg-2mL\",\"nama_generik\":\"Ondansetron\",\"kategori\":\"Antiemetik\",\"jenis\":\"Injeksi\",\"satuan\":\"Ampul\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-034\",\"expired\":\"2028-05-16\",\"stok\":120},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/136\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(37, 137, 5, 'B-IND-035', '2025-12-15', '2028-06-15', '2026-02-15', 175, 175, 800.00, 'BATCH-20260405080545-UEJ5NK', '{\"kode_qr\":\"BATCH-20260405080545-UEJ5NK\",\"obat\":{\"id\":137,\"kode\":\"OBT-IND-035\",\"nama\":\"Metoclopramide 10mg Tablet\",\"nama_generik\":\"Metoclopramide\",\"kategori\":\"Antiemetik\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-035\",\"expired\":\"2028-06-15\",\"stok\":175},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/137\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(38, 138, 6, 'B-IND-036', '2025-12-14', '2028-07-14', '2026-02-14', 180, 180, 900.00, 'BATCH-20260405080545-APPRIA', '{\"kode_qr\":\"BATCH-20260405080545-APPRIA\",\"obat\":{\"id\":138,\"kode\":\"OBT-IND-036\",\"nama\":\"Loperamide 2mg Kapsul\",\"nama_generik\":\"Loperamide\",\"kategori\":\"Antidiare\",\"jenis\":\"Kapsul\",\"satuan\":\"Kapsul\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-036\",\"expired\":\"2028-07-14\",\"stok\":180},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/138\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(39, 139, 7, 'B-IND-037', '2025-12-13', '2028-02-13', '2026-02-13', 300, 300, 1200.00, 'BATCH-20260405080545-CW8ZQJ', '{\"kode_qr\":\"BATCH-20260405080545-CW8ZQJ\",\"obat\":{\"id\":139,\"kode\":\"OBT-IND-037\",\"nama\":\"Oralit Serbuk\",\"nama_generik\":\"Oral Rehydration Salt\",\"kategori\":\"Antidiare\",\"jenis\":\"Serbuk\",\"satuan\":\"Sachet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-037\",\"expired\":\"2028-02-13\",\"stok\":300},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/139\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(40, 140, 8, 'B-IND-038', '2025-12-12', '2028-03-12', '2026-02-12', 190, 190, 700.00, 'BATCH-20260405080545-A2NOI3', '{\"kode_qr\":\"BATCH-20260405080545-A2NOI3\",\"obat\":{\"id\":140,\"kode\":\"OBT-IND-038\",\"nama\":\"Attapulgite Tablet\",\"nama_generik\":\"Attapulgite\",\"kategori\":\"Antidiare\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-038\",\"expired\":\"2028-03-12\",\"stok\":190},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/140\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(41, 141, 9, 'B-IND-039', '2025-12-11', '2028-04-11', '2026-02-11', 170, 170, 800.00, 'BATCH-20260405080545-T6LZZN', '{\"kode_qr\":\"BATCH-20260405080545-T6LZZN\",\"obat\":{\"id\":141,\"kode\":\"OBT-IND-039\",\"nama\":\"Bisacodyl 5mg Tablet\",\"nama_generik\":\"Bisacodyl\",\"kategori\":\"Laksatif\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-039\",\"expired\":\"2028-04-11\",\"stok\":170},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/141\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(42, 142, 10, 'B-IND-040', '2025-12-10', '2028-05-10', '2026-02-10', 150, 150, 16000.00, 'BATCH-20260405080545-RBIYC7', '{\"kode_qr\":\"BATCH-20260405080545-RBIYC7\",\"obat\":{\"id\":142,\"kode\":\"OBT-IND-040\",\"nama\":\"Lactulose Sirup 60mL\",\"nama_generik\":\"Lactulose\",\"kategori\":\"Laksatif\",\"jenis\":\"Sirup\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-040\",\"expired\":\"2028-05-10\",\"stok\":150},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/142\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(43, 143, 1, 'B-IND-041', '2025-12-09', '2028-06-09', '2026-02-09', 320, 320, 800.00, 'BATCH-20260405080545-FXQY0Y', '{\"kode_qr\":\"BATCH-20260405080545-FXQY0Y\",\"obat\":{\"id\":143,\"kode\":\"OBT-IND-041\",\"nama\":\"Amlodipine 5mg Tablet\",\"nama_generik\":\"Amlodipine\",\"kategori\":\"Antihipertensi\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-041\",\"expired\":\"2028-06-09\",\"stok\":320},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/143\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(44, 144, 2, 'B-IND-042', '2025-12-08', '2028-07-08', '2026-02-08', 310, 310, 500.00, 'BATCH-20260405080545-DP1MTX', '{\"kode_qr\":\"BATCH-20260405080545-DP1MTX\",\"obat\":{\"id\":144,\"kode\":\"OBT-IND-042\",\"nama\":\"Captopril 25mg Tablet\",\"nama_generik\":\"Captopril\",\"kategori\":\"Antihipertensi\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-042\",\"expired\":\"2028-07-08\",\"stok\":310},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/144\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(45, 145, 3, 'B-IND-043', '2025-12-07', '2028-02-07', '2026-02-07', 200, 200, 1300.00, 'BATCH-20260405080545-HNZIAB', '{\"kode_qr\":\"BATCH-20260405080545-HNZIAB\",\"obat\":{\"id\":145,\"kode\":\"OBT-IND-043\",\"nama\":\"Lisinopril 10mg Tablet\",\"nama_generik\":\"Lisinopril\",\"kategori\":\"Antihipertensi\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-043\",\"expired\":\"2028-02-07\",\"stok\":200},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/145\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(46, 146, 4, 'B-IND-044', '2025-12-06', '2028-03-06', '2026-02-06', 190, 190, 2200.00, 'BATCH-20260405080545-XWMK94', '{\"kode_qr\":\"BATCH-20260405080545-XWMK94\",\"obat\":{\"id\":146,\"kode\":\"OBT-IND-044\",\"nama\":\"Valsartan 80mg Tablet\",\"nama_generik\":\"Valsartan\",\"kategori\":\"Antihipertensi\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-044\",\"expired\":\"2028-03-06\",\"stok\":190},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/146\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(47, 147, 5, 'B-IND-045', '2025-12-05', '2028-04-05', '2026-02-05', 240, 240, 1200.00, 'BATCH-20260405080545-1XJUUZ', '{\"kode_qr\":\"BATCH-20260405080545-1XJUUZ\",\"obat\":{\"id\":147,\"kode\":\"OBT-IND-045\",\"nama\":\"Losartan 50mg Tablet\",\"nama_generik\":\"Losartan\",\"kategori\":\"Antihipertensi\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-045\",\"expired\":\"2028-04-05\",\"stok\":240},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/147\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(48, 148, 6, 'B-IND-046', '2025-12-04', '2028-05-04', '2026-02-04', 170, 170, 2500.00, 'BATCH-20260405080545-ZP37DM', '{\"kode_qr\":\"BATCH-20260405080545-ZP37DM\",\"obat\":{\"id\":148,\"kode\":\"OBT-IND-046\",\"nama\":\"Nifedipine OROS 30mg Tablet\",\"nama_generik\":\"Nifedipine\",\"kategori\":\"Antihipertensi\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-046\",\"expired\":\"2028-05-04\",\"stok\":170},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/148\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(49, 149, 7, 'B-IND-047', '2025-12-03', '2028-06-03', '2026-02-03', 210, 210, 1700.00, 'BATCH-20260405080545-1DLH81', '{\"kode_qr\":\"BATCH-20260405080545-1DLH81\",\"obat\":{\"id\":149,\"kode\":\"OBT-IND-047\",\"nama\":\"Bisoprolol 5mg Tablet\",\"nama_generik\":\"Bisoprolol\",\"kategori\":\"Kardiovaskular\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-047\",\"expired\":\"2028-06-03\",\"stok\":210},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/149\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(50, 150, 8, 'B-IND-048', '2025-12-02', '2028-07-02', '2026-02-02', 230, 230, 600.00, 'BATCH-20260405080545-RIZJUG', '{\"kode_qr\":\"BATCH-20260405080545-RIZJUG\",\"obat\":{\"id\":150,\"kode\":\"OBT-IND-048\",\"nama\":\"Furosemide 40mg Tablet\",\"nama_generik\":\"Furosemide\",\"kategori\":\"Kardiovaskular\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-048\",\"expired\":\"2028-07-02\",\"stok\":230},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/150\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(51, 151, 9, 'B-IND-049', '2025-12-01', '2028-02-01', '2026-02-01', 180, 180, 900.00, 'BATCH-20260405080545-MYJOTN', '{\"kode_qr\":\"BATCH-20260405080545-MYJOTN\",\"obat\":{\"id\":151,\"kode\":\"OBT-IND-049\",\"nama\":\"Spironolactone 25mg Tablet\",\"nama_generik\":\"Spironolactone\",\"kategori\":\"Kardiovaskular\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-049\",\"expired\":\"2028-02-01\",\"stok\":180},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/151\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(52, 152, 10, 'B-IND-050', '2025-12-01', '2028-03-02', '2026-01-31', 260, 260, 700.00, 'BATCH-20260405080545-UGNBMQ', '{\"kode_qr\":\"BATCH-20260405080545-UGNBMQ\",\"obat\":{\"id\":152,\"kode\":\"OBT-IND-050\",\"nama\":\"Simvastatin 20mg Tablet\",\"nama_generik\":\"Simvastatin\",\"kategori\":\"Kardiovaskular\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-050\",\"expired\":\"2028-03-02\",\"stok\":260},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/152\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(53, 153, 1, 'B-IND-051', '2025-11-30', '2028-03-30', '2026-01-30', 220, 220, 1800.00, 'BATCH-20260405080545-WIGHNX', '{\"kode_qr\":\"BATCH-20260405080545-WIGHNX\",\"obat\":{\"id\":153,\"kode\":\"OBT-IND-051\",\"nama\":\"Atorvastatin 20mg Tablet\",\"nama_generik\":\"Atorvastatin\",\"kategori\":\"Kardiovaskular\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-051\",\"expired\":\"2028-03-30\",\"stok\":220},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/153\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(54, 154, 2, 'B-IND-052', '2025-11-29', '2028-04-29', '2026-01-29', 170, 170, 2500.00, 'BATCH-20260405080545-MIMVD7', '{\"kode_qr\":\"BATCH-20260405080545-MIMVD7\",\"obat\":{\"id\":154,\"kode\":\"OBT-IND-052\",\"nama\":\"Clopidogrel 75mg Tablet\",\"nama_generik\":\"Clopidogrel\",\"kategori\":\"Kardiovaskular\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-052\",\"expired\":\"2028-04-29\",\"stok\":170},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/154\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(55, 155, 3, 'B-IND-053', '2025-11-28', '2028-05-28', '2026-01-28', 260, 260, 500.00, 'BATCH-20260405080545-XFJXPQ', '{\"kode_qr\":\"BATCH-20260405080545-XFJXPQ\",\"obat\":{\"id\":155,\"kode\":\"OBT-IND-053\",\"nama\":\"Aspirin 80mg Tablet\",\"nama_generik\":\"Acetylsalicylic Acid\",\"kategori\":\"Kardiovaskular\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-053\",\"expired\":\"2028-05-28\",\"stok\":260},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/155\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(56, 156, 4, 'B-IND-054', '2025-11-27', '2028-06-27', '2026-01-27', 150, 150, 1200.00, 'BATCH-20260405080545-XFQPGJ', '{\"kode_qr\":\"BATCH-20260405080545-XFQPGJ\",\"obat\":{\"id\":156,\"kode\":\"OBT-IND-054\",\"nama\":\"Isosorbide Dinitrate 5mg Tablet\",\"nama_generik\":\"Isosorbide Dinitrate\",\"kategori\":\"Kardiovaskular\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-054\",\"expired\":\"2028-06-27\",\"stok\":150},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/156\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(57, 157, 5, 'B-IND-055', '2025-11-26', '2028-01-26', '2026-01-26', 130, 130, 1600.00, 'BATCH-20260405080545-PWPRWM', '{\"kode_qr\":\"BATCH-20260405080545-PWPRWM\",\"obat\":{\"id\":157,\"kode\":\"OBT-IND-055\",\"nama\":\"Digoxin 0.25mg Tablet\",\"nama_generik\":\"Digoxin\",\"kategori\":\"Kardiovaskular\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-055\",\"expired\":\"2028-01-26\",\"stok\":130},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/157\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(58, 158, 6, 'B-IND-056', '2025-11-25', '2028-02-25', '2026-01-25', 340, 340, 450.00, 'BATCH-20260405080545-5EYRZF', '{\"kode_qr\":\"BATCH-20260405080545-5EYRZF\",\"obat\":{\"id\":158,\"kode\":\"OBT-IND-056\",\"nama\":\"Metformin 500mg Tablet\",\"nama_generik\":\"Metformin\",\"kategori\":\"Antidiabetes\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-056\",\"expired\":\"2028-02-25\",\"stok\":340},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/158\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(59, 159, 7, 'B-IND-057', '2025-11-24', '2028-03-24', '2026-01-24', 210, 210, 500.00, 'BATCH-20260405080545-JOCW9O', '{\"kode_qr\":\"BATCH-20260405080545-JOCW9O\",\"obat\":{\"id\":159,\"kode\":\"OBT-IND-057\",\"nama\":\"Glibenclamide 5mg Tablet\",\"nama_generik\":\"Glibenclamide\",\"kategori\":\"Antidiabetes\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-057\",\"expired\":\"2028-03-24\",\"stok\":210},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/159\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(60, 160, 8, 'B-IND-058', '2025-11-23', '2028-04-23', '2026-01-23', 180, 180, 1600.00, 'BATCH-20260405080545-JZY2XH', '{\"kode_qr\":\"BATCH-20260405080545-JZY2XH\",\"obat\":{\"id\":160,\"kode\":\"OBT-IND-058\",\"nama\":\"Gliclazide MR 30mg Tablet\",\"nama_generik\":\"Gliclazide\",\"kategori\":\"Antidiabetes\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-058\",\"expired\":\"2028-04-23\",\"stok\":180},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/160\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(61, 161, 9, 'B-IND-059', '2025-11-22', '2028-05-22', '2026-01-22', 190, 190, 900.00, 'BATCH-20260405080545-9YPHWK', '{\"kode_qr\":\"BATCH-20260405080545-9YPHWK\",\"obat\":{\"id\":161,\"kode\":\"OBT-IND-059\",\"nama\":\"Glimepiride 2mg Tablet\",\"nama_generik\":\"Glimepiride\",\"kategori\":\"Antidiabetes\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-059\",\"expired\":\"2028-05-22\",\"stok\":190},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/161\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(62, 162, 10, 'B-IND-060', '2025-11-21', '2028-06-21', '2026-01-21', 150, 150, 1400.00, 'BATCH-20260405080545-0WASUN', '{\"kode_qr\":\"BATCH-20260405080545-0WASUN\",\"obat\":{\"id\":162,\"kode\":\"OBT-IND-060\",\"nama\":\"Acarbose 50mg Tablet\",\"nama_generik\":\"Acarbose\",\"kategori\":\"Antidiabetes\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-060\",\"expired\":\"2028-06-21\",\"stok\":150},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/162\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(63, 163, 1, 'B-IND-061', '2025-11-20', '2028-01-20', '2026-01-20', 140, 140, 1800.00, 'BATCH-20260405080545-U9UFFO', '{\"kode_qr\":\"BATCH-20260405080545-U9UFFO\",\"obat\":{\"id\":163,\"kode\":\"OBT-IND-061\",\"nama\":\"Pioglitazone 15mg Tablet\",\"nama_generik\":\"Pioglitazone\",\"kategori\":\"Antidiabetes\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-061\",\"expired\":\"2028-01-20\",\"stok\":140},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/163\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(64, 164, 2, 'B-IND-062', '2025-11-19', '2028-02-19', '2026-01-19', 90, 90, 85000.00, 'BATCH-20260405080545-EKTXRW', '{\"kode_qr\":\"BATCH-20260405080545-EKTXRW\",\"obat\":{\"id\":164,\"kode\":\"OBT-IND-062\",\"nama\":\"Insulin Aspart Penfill\",\"nama_generik\":\"Insulin Aspart\",\"kategori\":\"Antidiabetes\",\"jenis\":\"Injeksi\",\"satuan\":\"Buah\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-062\",\"expired\":\"2028-02-19\",\"stok\":90},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/164\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(65, 165, 3, 'B-IND-063', '2025-11-18', '2028-03-18', '2026-01-18', 80, 80, 125000.00, 'BATCH-20260405080545-HORUQT', '{\"kode_qr\":\"BATCH-20260405080545-HORUQT\",\"obat\":{\"id\":165,\"kode\":\"OBT-IND-063\",\"nama\":\"Insulin Glargine Pen\",\"nama_generik\":\"Insulin Glargine\",\"kategori\":\"Antidiabetes\",\"jenis\":\"Injeksi\",\"satuan\":\"Buah\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-063\",\"expired\":\"2028-03-18\",\"stok\":80},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/165\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(66, 166, 4, 'B-IND-064', '2025-11-17', '2028-04-17', '2026-01-17', 85, 85, 75000.00, 'BATCH-20260405080545-OQ7JMS', '{\"kode_qr\":\"BATCH-20260405080545-OQ7JMS\",\"obat\":{\"id\":166,\"kode\":\"OBT-IND-064\",\"nama\":\"Insulin Regular Vial\",\"nama_generik\":\"Insulin Human Regular\",\"kategori\":\"Antidiabetes\",\"jenis\":\"Injeksi\",\"satuan\":\"Vial\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-064\",\"expired\":\"2028-04-17\",\"stok\":85},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/166\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(67, 167, 5, 'B-IND-065', '2025-11-16', '2028-05-16', '2026-01-16', 80, 80, 78000.00, 'BATCH-20260405080545-K7RYHR', '{\"kode_qr\":\"BATCH-20260405080545-K7RYHR\",\"obat\":{\"id\":167,\"kode\":\"OBT-IND-065\",\"nama\":\"Insulin NPH Vial\",\"nama_generik\":\"Insulin Isophane\",\"kategori\":\"Antidiabetes\",\"jenis\":\"Injeksi\",\"satuan\":\"Vial\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-065\",\"expired\":\"2028-05-16\",\"stok\":80},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/167\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(68, 168, 6, 'B-IND-066', '2025-11-15', '2028-06-15', '2026-01-15', 260, 260, 500.00, 'BATCH-20260405080545-1NSMA1', '{\"kode_qr\":\"BATCH-20260405080545-1NSMA1\",\"obat\":{\"id\":168,\"kode\":\"OBT-IND-066\",\"nama\":\"Cetirizine 10mg Tablet\",\"nama_generik\":\"Cetirizine\",\"kategori\":\"Antihistamin\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-066\",\"expired\":\"2028-06-15\",\"stok\":260},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/168\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(69, 169, 7, 'B-IND-067', '2025-11-14', '2028-01-14', '2026-01-14', 240, 240, 700.00, 'BATCH-20260405080545-JL7FN1', '{\"kode_qr\":\"BATCH-20260405080545-JL7FN1\",\"obat\":{\"id\":169,\"kode\":\"OBT-IND-067\",\"nama\":\"Loratadine 10mg Tablet\",\"nama_generik\":\"Loratadine\",\"kategori\":\"Antihistamin\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-067\",\"expired\":\"2028-01-14\",\"stok\":240},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/169\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(70, 170, 8, 'B-IND-068', '2025-11-13', '2028-02-13', '2026-01-13', 280, 280, 300.00, 'BATCH-20260405080545-5UPYRT', '{\"kode_qr\":\"BATCH-20260405080545-5UPYRT\",\"obat\":{\"id\":170,\"kode\":\"OBT-IND-068\",\"nama\":\"Chlorpheniramine Maleate 4mg Tablet\",\"nama_generik\":\"Chlorpheniramine\",\"kategori\":\"Antihistamin\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-068\",\"expired\":\"2028-02-13\",\"stok\":280},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/170\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(71, 171, 9, 'B-IND-069', '2025-11-12', '2028-03-12', '2026-01-12', 160, 160, 2200.00, 'BATCH-20260405080545-QEFGXI', '{\"kode_qr\":\"BATCH-20260405080545-QEFGXI\",\"obat\":{\"id\":171,\"kode\":\"OBT-IND-069\",\"nama\":\"Fexofenadine 180mg Tablet\",\"nama_generik\":\"Fexofenadine\",\"kategori\":\"Antihistamin\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-069\",\"expired\":\"2028-03-12\",\"stok\":160},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/171\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(72, 172, 10, 'B-IND-070', '2025-11-11', '2028-04-11', '2026-01-11', 150, 150, 2500.00, 'BATCH-20260405080545-DHHXBG', '{\"kode_qr\":\"BATCH-20260405080545-DHHXBG\",\"obat\":{\"id\":172,\"kode\":\"OBT-IND-070\",\"nama\":\"Desloratadine 5mg Tablet\",\"nama_generik\":\"Desloratadine\",\"kategori\":\"Antihistamin\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-070\",\"expired\":\"2028-04-11\",\"stok\":150},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/172\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(73, 173, 1, 'B-IND-071', '2025-11-10', '2028-05-10', '2026-01-10', 140, 140, 12000.00, 'BATCH-20260405080545-BXV8ZX', '{\"kode_qr\":\"BATCH-20260405080545-BXV8ZX\",\"obat\":{\"id\":173,\"kode\":\"OBT-IND-071\",\"nama\":\"Diphenhydramine Sirup\",\"nama_generik\":\"Diphenhydramine\",\"kategori\":\"Antihistamin\",\"jenis\":\"Sirup\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-071\",\"expired\":\"2028-05-10\",\"stok\":140},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/173\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(74, 174, 2, 'B-IND-072', '2025-11-09', '2028-06-09', '2026-01-09', 190, 190, 500.00, 'BATCH-20260405080545-MOB1NU', '{\"kode_qr\":\"BATCH-20260405080545-MOB1NU\",\"obat\":{\"id\":174,\"kode\":\"OBT-IND-072\",\"nama\":\"Salbutamol 2mg Tablet\",\"nama_generik\":\"Salbutamol\",\"kategori\":\"Bronkodilator\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-072\",\"expired\":\"2028-06-09\",\"stok\":190},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/174\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(75, 175, 3, 'B-IND-073', '2025-11-08', '2028-01-08', '2026-01-08', 150, 150, 32000.00, 'BATCH-20260405080545-MVUFQ9', '{\"kode_qr\":\"BATCH-20260405080545-MVUFQ9\",\"obat\":{\"id\":175,\"kode\":\"OBT-IND-073\",\"nama\":\"Salbutamol Inhaler 100mcg\",\"nama_generik\":\"Salbutamol\",\"kategori\":\"Bronkodilator\",\"jenis\":\"Inhaler\",\"satuan\":\"Buah\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-073\",\"expired\":\"2028-01-08\",\"stok\":150},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/175\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(76, 176, 4, 'B-IND-074', '2025-11-07', '2028-02-07', '2026-01-07', 130, 130, 38000.00, 'BATCH-20260405080545-NQDQEY', '{\"kode_qr\":\"BATCH-20260405080545-NQDQEY\",\"obat\":{\"id\":176,\"kode\":\"OBT-IND-074\",\"nama\":\"Ipratropium Bromide Inhaler\",\"nama_generik\":\"Ipratropium Bromide\",\"kategori\":\"Bronkodilator\",\"jenis\":\"Inhaler\",\"satuan\":\"Buah\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-074\",\"expired\":\"2028-02-07\",\"stok\":130},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/176\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(77, 177, 5, 'B-IND-075', '2025-11-06', '2028-03-06', '2026-01-06', 120, 120, 42000.00, 'BATCH-20260405080545-W29NQT', '{\"kode_qr\":\"BATCH-20260405080545-W29NQT\",\"obat\":{\"id\":177,\"kode\":\"OBT-IND-075\",\"nama\":\"Budesonide Nebulizer 0.5mg-2mL\",\"nama_generik\":\"Budesonide\",\"kategori\":\"Kortikosteroid\",\"jenis\":\"Nebulizer\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-075\",\"expired\":\"2028-03-06\",\"stok\":120},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/177\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL);
INSERT INTO `batch_obat` (`id`, `obat_id`, `supplier_id`, `nomor_batch`, `tanggal_produksi`, `tanggal_expired`, `tanggal_masuk`, `stok_awal`, `stok_tersedia`, `harga_beli`, `kode_qr`, `qr_data`, `status`, `catatan`, `created_at`, `updated_at`, `deleted_at`) VALUES
(78, 178, 6, 'B-IND-076', '2026-01-21', '2028-06-21', '2026-03-21', 150, 150, 900.00, 'BATCH-20260405080545-WGODX2', '{\"kode_qr\":\"BATCH-20260405080545-WGODX2\",\"obat\":{\"id\":178,\"kode\":\"OBT-IND-076\",\"nama\":\"Theophylline 200mg Tablet\",\"nama_generik\":\"Theophylline\",\"kategori\":\"Bronkodilator\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-076\",\"expired\":\"2028-06-21\",\"stok\":150},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/178\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(79, 179, 7, 'B-IND-077', '2026-01-20', '2028-07-20', '2026-03-20', 200, 200, 700.00, 'BATCH-20260405080545-JTEOPL', '{\"kode_qr\":\"BATCH-20260405080545-JTEOPL\",\"obat\":{\"id\":179,\"kode\":\"OBT-IND-077\",\"nama\":\"Ambroxol 30mg Tablet\",\"nama_generik\":\"Ambroxol\",\"kategori\":\"Bronkodilator\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-077\",\"expired\":\"2028-07-20\",\"stok\":200},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/179\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(80, 180, 8, 'B-IND-078', '2026-01-19', '2028-08-19', '2026-03-19', 170, 170, 2200.00, 'BATCH-20260405080545-3S0AAR', '{\"kode_qr\":\"BATCH-20260405080545-3S0AAR\",\"obat\":{\"id\":180,\"kode\":\"OBT-IND-078\",\"nama\":\"Acetylcysteine 200mg Sachet\",\"nama_generik\":\"Acetylcysteine\",\"kategori\":\"Bronkodilator\",\"jenis\":\"Serbuk\",\"satuan\":\"Sachet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-078\",\"expired\":\"2028-08-19\",\"stok\":170},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/180\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(81, 181, 9, 'B-IND-079', '2026-01-18', '2028-03-18', '2026-03-18', 160, 160, 11000.00, 'BATCH-20260405080545-OADBRM', '{\"kode_qr\":\"BATCH-20260405080545-OADBRM\",\"obat\":{\"id\":181,\"kode\":\"OBT-IND-079\",\"nama\":\"Guaifenesin Sirup\",\"nama_generik\":\"Guaifenesin\",\"kategori\":\"Bronkodilator\",\"jenis\":\"Sirup\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-079\",\"expired\":\"2028-03-18\",\"stok\":160},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/181\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(82, 182, 10, 'B-IND-080', '2026-01-17', '2028-04-17', '2026-03-17', 155, 155, 10000.00, 'BATCH-20260405080545-6T18M2', '{\"kode_qr\":\"BATCH-20260405080545-6T18M2\",\"obat\":{\"id\":182,\"kode\":\"OBT-IND-080\",\"nama\":\"Dextromethorphan Sirup\",\"nama_generik\":\"Dextromethorphan\",\"kategori\":\"Bronkodilator\",\"jenis\":\"Sirup\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-080\",\"expired\":\"2028-04-17\",\"stok\":155},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/182\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(83, 183, 1, 'B-IND-081', '2026-01-16', '2028-05-16', '2026-03-16', 210, 210, 350.00, 'BATCH-20260405080545-BVVJ1X', '{\"kode_qr\":\"BATCH-20260405080545-BVVJ1X\",\"obat\":{\"id\":183,\"kode\":\"OBT-IND-081\",\"nama\":\"Dexamethasone 0.5mg Tablet\",\"nama_generik\":\"Dexamethasone\",\"kategori\":\"Kortikosteroid\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-081\",\"expired\":\"2028-05-16\",\"stok\":210},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/183\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(84, 184, 2, 'B-IND-082', '2026-01-15', '2028-06-15', '2026-03-15', 190, 190, 900.00, 'BATCH-20260405080545-BBG7GT', '{\"kode_qr\":\"BATCH-20260405080545-BBG7GT\",\"obat\":{\"id\":184,\"kode\":\"OBT-IND-082\",\"nama\":\"Methylprednisolone 4mg Tablet\",\"nama_generik\":\"Methylprednisolone\",\"kategori\":\"Kortikosteroid\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-082\",\"expired\":\"2028-06-15\",\"stok\":190},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/184\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(85, 185, 3, 'B-IND-083', '2026-01-14', '2028-07-14', '2026-03-14', 170, 170, 700.00, 'BATCH-20260405080545-SO7NVN', '{\"kode_qr\":\"BATCH-20260405080545-SO7NVN\",\"obat\":{\"id\":185,\"kode\":\"OBT-IND-083\",\"nama\":\"Prednisone 5mg Tablet\",\"nama_generik\":\"Prednisone\",\"kategori\":\"Kortikosteroid\",\"jenis\":\"Tablet\",\"satuan\":\"Tablet\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-083\",\"expired\":\"2028-07-14\",\"stok\":170},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/185\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(86, 186, 4, 'B-IND-084', '2026-01-13', '2028-08-13', '2026-03-13', 150, 150, 9000.00, 'BATCH-20260405080545-RBTVBR', '{\"kode_qr\":\"BATCH-20260405080545-RBTVBR\",\"obat\":{\"id\":186,\"kode\":\"OBT-IND-084\",\"nama\":\"Hydrocortisone Krim 2.5 persen\",\"nama_generik\":\"Hydrocortisone\",\"kategori\":\"Obat Kulit\",\"jenis\":\"Krim\",\"satuan\":\"Tube\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-084\",\"expired\":\"2028-08-13\",\"stok\":150},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/186\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(87, 187, 5, 'B-IND-085', '2026-01-12', '2028-03-12', '2026-03-12', 145, 145, 11000.00, 'BATCH-20260405080545-3EFTWZ', '{\"kode_qr\":\"BATCH-20260405080545-3EFTWZ\",\"obat\":{\"id\":187,\"kode\":\"OBT-IND-085\",\"nama\":\"Betamethasone Salep 0.1 persen\",\"nama_generik\":\"Betamethasone\",\"kategori\":\"Obat Kulit\",\"jenis\":\"Salep\",\"satuan\":\"Tube\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-085\",\"expired\":\"2028-03-12\",\"stok\":145},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/187\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(88, 188, 6, 'B-IND-086', '2026-01-11', '2028-04-11', '2026-03-11', 130, 130, 13000.00, 'BATCH-20260405080545-QKOBCS', '{\"kode_qr\":\"BATCH-20260405080545-QKOBCS\",\"obat\":{\"id\":188,\"kode\":\"OBT-IND-086\",\"nama\":\"Clobetasol Krim 0.05 persen\",\"nama_generik\":\"Clobetasol\",\"kategori\":\"Obat Kulit\",\"jenis\":\"Krim\",\"satuan\":\"Tube\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-086\",\"expired\":\"2028-04-11\",\"stok\":130},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/188\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(89, 189, 7, 'B-IND-087', '2026-01-10', '2028-05-10', '2026-03-10', 180, 180, 9000.00, 'BATCH-20260405080545-DPWP4G', '{\"kode_qr\":\"BATCH-20260405080545-DPWP4G\",\"obat\":{\"id\":189,\"kode\":\"OBT-IND-087\",\"nama\":\"Ketoconazole Krim 2 persen\",\"nama_generik\":\"Ketoconazole\",\"kategori\":\"Obat Kulit\",\"jenis\":\"Krim\",\"satuan\":\"Tube\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-087\",\"expired\":\"2028-05-10\",\"stok\":180},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/189\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(90, 190, 8, 'B-IND-088', '2026-01-09', '2028-06-09', '2026-03-09', 170, 170, 8500.00, 'BATCH-20260405080545-L5TCJA', '{\"kode_qr\":\"BATCH-20260405080545-L5TCJA\",\"obat\":{\"id\":190,\"kode\":\"OBT-IND-088\",\"nama\":\"Miconazole Salep 2 persen\",\"nama_generik\":\"Miconazole\",\"kategori\":\"Obat Kulit\",\"jenis\":\"Salep\",\"satuan\":\"Tube\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-088\",\"expired\":\"2028-06-09\",\"stok\":170},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/190\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(91, 191, 9, 'B-IND-089', '2026-01-08', '2028-07-08', '2026-03-08', 140, 140, 10000.00, 'BATCH-20260405080545-KEEL7L', '{\"kode_qr\":\"BATCH-20260405080545-KEEL7L\",\"obat\":{\"id\":191,\"kode\":\"OBT-IND-089\",\"nama\":\"Gentamicin Krim 0.1 persen\",\"nama_generik\":\"Gentamicin\",\"kategori\":\"Obat Kulit\",\"jenis\":\"Krim\",\"satuan\":\"Tube\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-089\",\"expired\":\"2028-07-08\",\"stok\":140},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/191\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(92, 192, 10, 'B-IND-090', '2026-01-07', '2028-08-07', '2026-03-07', 120, 120, 16000.00, 'BATCH-20260405080545-2FVEZE', '{\"kode_qr\":\"BATCH-20260405080545-2FVEZE\",\"obat\":{\"id\":192,\"kode\":\"OBT-IND-090\",\"nama\":\"Silver Sulfadiazine Krim 1 persen\",\"nama_generik\":\"Silver Sulfadiazine\",\"kategori\":\"Obat Kulit\",\"jenis\":\"Krim\",\"satuan\":\"Tube\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-090\",\"expired\":\"2028-08-07\",\"stok\":120},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/192\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(93, 193, 1, 'B-IND-091', '2026-01-06', '2028-03-06', '2026-03-06', 140, 140, 12000.00, 'BATCH-20260405080545-DGFTXL', '{\"kode_qr\":\"BATCH-20260405080545-DGFTXL\",\"obat\":{\"id\":193,\"kode\":\"OBT-IND-091\",\"nama\":\"Ciprofloxacin Tetes Mata 0.3 persen\",\"nama_generik\":\"Ciprofloxacin\",\"kategori\":\"Obat Mata\",\"jenis\":\"Tetes Mata\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-091\",\"expired\":\"2028-03-06\",\"stok\":140},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/193\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(94, 194, 2, 'B-IND-092', '2026-01-05', '2028-04-05', '2026-03-05', 180, 180, 10000.00, 'BATCH-20260405080545-90XLFE', '{\"kode_qr\":\"BATCH-20260405080545-90XLFE\",\"obat\":{\"id\":194,\"kode\":\"OBT-IND-092\",\"nama\":\"Air Mata Buatan Tetes Mata\",\"nama_generik\":\"Hydroxypropyl Methylcellulose\",\"kategori\":\"Obat Mata\",\"jenis\":\"Tetes Mata\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-092\",\"expired\":\"2028-04-05\",\"stok\":180},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/194\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(95, 195, 3, 'B-IND-093', '2026-01-04', '2028-05-04', '2026-03-04', 110, 110, 18000.00, 'BATCH-20260405080545-CSNAX1', '{\"kode_qr\":\"BATCH-20260405080545-CSNAX1\",\"obat\":{\"id\":195,\"kode\":\"OBT-IND-093\",\"nama\":\"Timolol Tetes Mata 0.5 persen\",\"nama_generik\":\"Timolol Maleate\",\"kategori\":\"Obat Mata\",\"jenis\":\"Tetes Mata\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-093\",\"expired\":\"2028-05-04\",\"stok\":110},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/195\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(96, 196, 4, 'B-IND-094', '2026-01-03', '2028-06-03', '2026-03-03', 150, 150, 9000.00, 'BATCH-20260405080545-PLX60S', '{\"kode_qr\":\"BATCH-20260405080545-PLX60S\",\"obat\":{\"id\":196,\"kode\":\"OBT-IND-094\",\"nama\":\"Chloramphenicol Tetes Mata 0.5 persen\",\"nama_generik\":\"Chloramphenicol\",\"kategori\":\"Obat Mata\",\"jenis\":\"Tetes Mata\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-094\",\"expired\":\"2028-06-03\",\"stok\":150},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/196\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(97, 197, 5, 'B-IND-095', '2026-01-02', '2028-07-02', '2026-03-02', 160, 160, 9000.00, 'BATCH-20260405080545-E8ESVQ', '{\"kode_qr\":\"BATCH-20260405080545-E8ESVQ\",\"obat\":{\"id\":197,\"kode\":\"OBT-IND-095\",\"nama\":\"Oxymetazoline Tetes Hidung 0.05 persen\",\"nama_generik\":\"Oxymetazoline Ili\",\"kategori\":\"Obat THT\",\"jenis\":\"Tetes Hidung\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-095\",\"expired\":\"2028-07-02\",\"stok\":160},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/197\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(98, 198, 6, 'B-IND-096', '2026-01-01', '2028-08-01', '2026-03-01', 150, 150, 12000.00, 'BATCH-20260405080545-DO1AON', '{\"kode_qr\":\"BATCH-20260405080545-DO1AON\",\"obat\":{\"id\":198,\"kode\":\"OBT-IND-096\",\"nama\":\"Xylometazoline Spray Hidung\",\"nama_generik\":\"Xylometazoline Otr\",\"kategori\":\"Obat THT\",\"jenis\":\"Spray\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-096\",\"expired\":\"2028-08-01\",\"stok\":150},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/198\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(99, 199, 7, 'B-IND-097', '2025-12-28', '2028-02-28', '2026-02-28', 120, 120, 14000.00, 'BATCH-20260405080545-IMZIUI', '{\"kode_qr\":\"BATCH-20260405080545-IMZIUI\",\"obat\":{\"id\":199,\"kode\":\"OBT-IND-097\",\"nama\":\"Ofloxacin Tetes Telinga 0.3 persen\",\"nama_generik\":\"Ofloxacin\",\"kategori\":\"Obat THT\",\"jenis\":\"Tetes Telinga\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-097\",\"expired\":\"2028-02-28\",\"stok\":120},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/199\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(100, 200, 8, 'B-IND-098', '2025-12-27', '2028-03-27', '2026-02-27', 220, 220, 9000.00, 'BATCH-20260405080545-DLHCFO', '{\"kode_qr\":\"BATCH-20260405080545-DLHCFO\",\"obat\":{\"id\":200,\"kode\":\"OBT-IND-098\",\"nama\":\"Povidone Iodine 10 persen Larutan\",\"nama_generik\":\"Povidone Iodine\",\"kategori\":\"Antiseptik\",\"jenis\":\"Lotion\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-098\",\"expired\":\"2028-03-27\",\"stok\":220},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/200\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(101, 201, 9, 'B-IND-099', '2025-12-26', '2028-04-26', '2026-02-26', 260, 260, 11000.00, 'BATCH-20260405080545-BNHQTC', '{\"kode_qr\":\"BATCH-20260405080545-BNHQTC\",\"obat\":{\"id\":201,\"kode\":\"OBT-IND-099\",\"nama\":\"NaCl 0.9 persen Infus 500mL\",\"nama_generik\":\"Sodium Chloride\",\"kategori\":\"Cairan Infus\",\"jenis\":\"Infus\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-099\",\"expired\":\"2028-04-26\",\"stok\":260},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/201\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(102, 202, 10, 'B-IND-100', '2025-12-25', '2028-05-25', '2026-02-25', 240, 240, 12000.00, 'BATCH-20260405080545-GRJNJD', '{\"kode_qr\":\"BATCH-20260405080545-GRJNJD\",\"obat\":{\"id\":202,\"kode\":\"OBT-IND-100\",\"nama\":\"Ringer Lactate Infus 500mL\",\"nama_generik\":\"Ringer Lactate\",\"kategori\":\"Cairan Infus\",\"jenis\":\"Infus\",\"satuan\":\"Botol\"},\"batch\":{\"id\":null,\"nomor\":\"B-IND-100\",\"expired\":\"2028-05-25\",\"stok\":240},\"generated_at\":\"2026-04-05T08:05:45+00:00\",\"link\":\"http:\\/\\/localhost:8000\\/obat\\/202\\/batch\"}', 'active', 'Batch awal hasil seed 100 drug list Indonesia', '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(103, 203, 2, 'B-OBT260-260405-LIE', '2026-03-30', '2026-04-21', '2026-04-05', 100, 100, 5000.00, 'BATCH-20260405082647-PBALAB', '{\"kode_qr\":\"BATCH-20260405082647-PBALAB\",\"obat\":{\"id\":203,\"kode\":\"OBT-260405-SPZO\",\"nama\":\"Analgesik\",\"nama_generik\":\"K1\",\"kategori\":\"Analgesik\",\"jenis\":\"Kaplet\",\"satuan\":\"Vial\"},\"batch\":{\"id\":null,\"nomor\":\"B-OBT260-260405-LIE\",\"expired\":\"2026-04-21\",\"stok\":100},\"generated_at\":\"2026-04-05T08:26:47+00:00\",\"link\":\"https:\\/\\/discreetly-nonfermentative-lamar.ngrok-free.dev\\/obat\\/203\\/batch\"}', 'active', NULL, '2026-04-05 01:26:47', '2026-04-05 01:26:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `biaya_operasional`
--

DROP TABLE IF EXISTS `biaya_operasional`;
CREATE TABLE IF NOT EXISTS `biaya_operasional` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tanggal_biaya` date NOT NULL,
  `kategori` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominal` decimal(15,2) NOT NULL,
  `keterangan` text COLLATE utf8mb4_unicode_ci,
  `metode_pembayaran` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_code` varchar(16) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_nama` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kasir_nama` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `biaya_operasional_user_id_foreign` (`user_id`),
  KEY `biaya_operasional_tanggal_biaya_index` (`tanggal_biaya`),
  KEY `biaya_operasional_kategori_index` (`kategori`),
  KEY `biaya_operasional_kasir_nama_index` (`kasir_nama`),
  KEY `biaya_operasional_bank_code_index` (`bank_code`),
  KEY `biaya_operasional_bank_nama_index` (`bank_nama`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('08a73112d0616dac254a49493615839f', 'i:1;', 1775374884),
('08a73112d0616dac254a49493615839f:timer', 'i:1775374884;', 1775374884),
('5d542d6fae433905ff8c321ce648f2db', 'i:1;', 1775378564),
('5d542d6fae433905ff8c321ce648f2db:timer', 'i:1775378564;', 1775378564),
('5eb443d0e623ac859cc2070f549a0b8f', 'i:5;', 1775373934),
('5eb443d0e623ac859cc2070f549a0b8f:timer', 'i:1775373934;', 1775373934),
('5fde8e5544aa76a7f1e060081eb41ca3', 'i:1;', 1775373984),
('5fde8e5544aa76a7f1e060081eb41ca3:timer', 'i:1775373984;', 1775373984),
('a8208667a7dacc3ba706ca11b936f717', 'i:3;', 1775373292),
('a8208667a7dacc3ba706ca11b936f717:timer', 'i:1775373292;', 1775373292),
('aqefhakimi32@gmail.com|202.145.6.46', 'i:3;', 1775373960),
('aqefhakimi32@gmail.com|202.145.6.46:timer', 'i:1775373960;', 1775373960),
('hakimiss@company.com|202.145.6.46', 'i:1;', 1775374884),
('hakimiss@company.com|202.145.6.46:timer', 'i:1775374884;', 1775374884),
('onboarding:tutorial:user:1', 'a:5:{s:7:\"version\";s:2:\"v1\";s:12:\"completed_at\";N;s:10:\"skipped_at\";N;s:12:\"last_seen_ip\";s:12:\"202.145.6.46\";s:12:\"last_seen_at\";s:19:\"2026-04-05 07:24:48\";}', 2090733888),
('onboarding:tutorial:user:2', 'a:5:{s:7:\"version\";s:2:\"v1\";s:12:\"completed_at\";N;s:10:\"skipped_at\";N;s:12:\"last_seen_ip\";s:12:\"202.145.6.46\";s:12:\"last_seen_at\";s:19:\"2026-04-05 07:26:26\";}', 2090733986),
('respondenpenelitian@gmail.com|202.145.6.46', 'i:1;', 1775373984),
('respondenpenelitian@gmail.com|202.145.6.46:timer', 'i:1775373984;', 1775373984);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
CREATE TABLE IF NOT EXISTS `cache_locks` (
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `demand_forecasts`
--

DROP TABLE IF EXISTS `demand_forecasts`;
CREATE TABLE IF NOT EXISTS `demand_forecasts` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `obat_id` bigint UNSIGNED NOT NULL,
  `period_type` enum('weekly','monthly') COLLATE utf8mb4_unicode_ci NOT NULL,
  `lookback_days` int UNSIGNED NOT NULL DEFAULT '30',
  `avg_daily_usage` int UNSIGNED NOT NULL DEFAULT '0',
  `seasonality_factor` decimal(6,2) NOT NULL DEFAULT '1.00',
  `forecast_quantity` int UNSIGNED NOT NULL DEFAULT '0',
  `confidence_percentage` tinyint UNSIGNED NOT NULL DEFAULT '70',
  `forecast_start_date` date NOT NULL,
  `forecast_end_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `demand_forecasts_obat_id_period_type_forecast_start_date_index` (`obat_id`,`period_type`,`forecast_start_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `drug_interactions`
--

DROP TABLE IF EXISTS `drug_interactions`;
CREATE TABLE IF NOT EXISTS `drug_interactions` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `obat_id` bigint UNSIGNED NOT NULL,
  `interacts_with_obat_id` bigint UNSIGNED NOT NULL,
  `severity` enum('low','moderate','high','critical') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'moderate',
  `effect_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `recommendation` text COLLATE utf8mb4_unicode_ci,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `drug_interactions_obat_id_interacts_with_obat_id_unique` (`obat_id`,`interacts_with_obat_id`),
  KEY `drug_interactions_interacts_with_obat_id_foreign` (`interacts_with_obat_id`),
  KEY `drug_interactions_severity_is_active_index` (`severity`,`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hutang`
--

DROP TABLE IF EXISTS `hutang`;
CREATE TABLE IF NOT EXISTS `hutang` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `transaksi_id` bigint UNSIGNED NOT NULL,
  `supplier_id` bigint UNSIGNED DEFAULT NULL,
  `customer_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_amount` decimal(15,2) NOT NULL,
  `remaining_amount` decimal(15,2) NOT NULL,
  `payment_status` enum('unpaid','partially_paid','paid') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unpaid',
  `settled_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `hutang_transaksi_id_unique` (`transaksi_id`),
  KEY `hutang_user_id_foreign` (`user_id`),
  KEY `hutang_payment_status_index` (`payment_status`),
  KEY `hutang_supplier_id_index` (`supplier_id`),
  KEY `hutang_supplier_payment_status_index` (`supplier_id`,`payment_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hutang_payments`
--

DROP TABLE IF EXISTS `hutang_payments`;
CREATE TABLE IF NOT EXISTS `hutang_payments` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `hutang_id` bigint UNSIGNED NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `paid_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `metode_pembayaran` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keterangan` text COLLATE utf8mb4_unicode_ci,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hutang_payments_hutang_id_foreign` (`hutang_id`),
  KEY `hutang_payments_user_id_foreign` (`user_id`),
  KEY `hutang_payments_paid_at_index` (`paid_at`),
  KEY `hutang_payments_metode_pembayaran_index` (`metode_pembayaran`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jenis_obat`
--

DROP TABLE IF EXISTS `jenis_obat`;
CREATE TABLE IF NOT EXISTS `jenis_obat` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nama_jenis` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Tablet, Kapsul, Sirup, Injeksi, Salep, dll',
  `deskripsi` text COLLATE utf8mb4_unicode_ci,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jenis_obat`
--

INSERT INTO `jenis_obat` (`id`, `nama_jenis`, `deskripsi`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Tablet', 'Obat bentuk tablet padat', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(2, 'Kapsul', 'Obat dalam cangkang kapsul', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(3, 'Kaplet', 'Tablet berbentuk kapsul', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(4, 'Sirup', 'Obat cair manis', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(5, 'Suspensi', 'Obat cair dengan partikel tersuspensi', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(6, 'Emulsi', 'Campuran dua cairan tidak larut', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(7, 'Injeksi', 'Obat suntik', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(8, 'Infus', 'Cairan infus intravena', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(9, 'Salep', 'Obat oles setengah padat', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(10, 'Krim', 'Obat oles berbentuk krim', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(11, 'Gel', 'Obat oles berbentuk gel', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(12, 'Lotion', 'Cairan untuk kulit', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(13, 'Tetes Mata', 'Obat tetes untuk mata', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(14, 'Tetes Telinga', 'Obat tetes untuk telinga', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(15, 'Tetes Hidung', 'Obat tetes untuk hidung', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(16, 'Suppositoria', 'Obat yang dimasukkan melalui rektum', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(17, 'Ovula', 'Obat yang dimasukkan melalui vagina', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(18, 'Inhaler', 'Obat hirup untuk pernapasan', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(19, 'Nebulizer', 'Obat uap untuk pernapasan', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(20, 'Patch', 'Obat tempel transdermal', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(21, 'Serbuk', 'Obat dalam bentuk serbuk', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(22, 'Granul', 'Obat dalam bentuk butiran', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(23, 'Plester', 'Plester obat', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(24, 'Spray', 'Obat semprot', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(25, 'Lainnya', 'Bentuk sediaan lainnya', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `queue` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
CREATE TABLE IF NOT EXISTS `job_batches` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kategori_obat`
--

DROP TABLE IF EXISTS `kategori_obat`;
CREATE TABLE IF NOT EXISTS `kategori_obat` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nama_kategori` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kategori_obat`
--

INSERT INTO `kategori_obat` (`id`, `nama_kategori`, `deskripsi`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Antibiotik', 'Obat untuk melawan infeksi bakteri', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(2, 'Analgesik', 'Obat penghilang rasa sakit', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(3, 'Antipiretik', 'Obat penurun demam', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(4, 'Antiinflamasi', 'Obat antiradang', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(5, 'Antihipertensi', 'Obat tekanan darah tinggi', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(6, 'Antidiabetes', 'Obat untuk diabetes mellitus', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(7, 'Antihistamin', 'Obat alergi', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(8, 'Antasida', 'Obat maag dan asam lambung', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(9, 'Bronkodilator', 'Obat untuk saluran pernapasan', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(10, 'Kardiovaskular', 'Obat untuk jantung dan pembuluh darah', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(11, 'Vitamin & Suplemen', 'Vitamin dan suplemen kesehatan', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(12, 'Antiemetik', 'Obat antimual dan muntah', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(13, 'Laksatif', 'Obat pencahar', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(14, 'Antidiare', 'Obat untuk diare', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(15, 'Sedatif & Hipnotik', 'Obat penenang dan tidur', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(16, 'Antiseptik', 'Obat antiseptik dan desinfektan', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(17, 'Kortikosteroid', 'Obat hormon steroid', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(18, 'Cairan Infus', 'Cairan infus dan elektrolit', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(19, 'Obat Mata', 'Obat tetes mata dan salep mata', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(20, 'Obat Kulit', 'Obat topikal untuk kulit', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(21, 'Obat THT', 'Obat telinga, hidung, tenggorokan', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(22, 'Narkotika', 'Obat golongan narkotika (terbatas)', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(23, 'Psikotropika', 'Obat golongan psikotropika (terbatas)', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(24, 'Vaksin', 'Vaksin dan imunisasi', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(25, 'Lainnya', 'Kategori obat lainnya', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56');

-- --------------------------------------------------------

--
-- Table structure for table `log_aktivitas`
--

DROP TABLE IF EXISTS `log_aktivitas`;
CREATE TABLE IF NOT EXISTS `log_aktivitas` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `aktivitas` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modul` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Modul yang diakses: obat, transaksi, user, dll',
  `aksi` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'create, update, delete, view, login, logout',
  `loggable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `loggable_id` bigint UNSIGNED NOT NULL,
  `data_lama` json DEFAULT NULL COMMENT 'Data sebelum perubahan',
  `data_baru` json DEFAULT NULL COMMENT 'Data setelah perubahan',
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `waktu` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `log_aktivitas_loggable_type_loggable_id_index` (`loggable_type`,`loggable_id`),
  KEY `log_aktivitas_user_id_waktu_index` (`user_id`,`waktu`),
  KEY `log_aktivitas_modul_index` (`modul`),
  KEY `log_aktivitas_aksi_index` (`aksi`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `log_aktivitas`
--

INSERT INTO `log_aktivitas` (`id`, `user_id`, `aktivitas`, `modul`, `aksi`, `loggable_type`, `loggable_id`, `data_lama`, `data_baru`, `ip_address`, `user_agent`, `waktu`, `created_at`, `updated_at`) VALUES
(1, 2, 'Generate QR Code untuk batch: B-IND-067', 'qr_code', 'generate', 'App\\Models\\BatchObat', 69, NULL, NULL, '202.145.6.46', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:149.0) Gecko/20100101 Firefox/149.0', '2026-04-05 01:36:10', '2026-04-05 01:36:10', '2026-04-05 01:36:10'),
(2, 2, 'Scan QR Code batch: B-IND-067', 'qr_code', 'scan', 'App\\Models\\BatchObat', 69, NULL, NULL, '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:37:56', '2026-04-05 01:37:56', '2026-04-05 01:37:56'),
(3, 2, 'Scan QR Code batch: B-IND-067', 'qr_code', 'scan', 'App\\Models\\BatchObat', 69, NULL, NULL, '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:38:13', '2026-04-05 01:38:13', '2026-04-05 01:38:13'),
(4, 2, 'Scan QR Code batch: B-IND-067', 'qr_code', 'scan', 'App\\Models\\BatchObat', 69, NULL, NULL, '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:40:10', '2026-04-05 01:40:10', '2026-04-05 01:40:10'),
(5, 2, 'Scan QR Code batch: B-IND-067', 'qr_code', 'scan', 'App\\Models\\BatchObat', 69, NULL, NULL, '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:48:03', '2026-04-05 01:48:03', '2026-04-05 01:48:03'),
(6, 2, 'Scan QR Code batch: B-IND-067', 'qr_code', 'scan', 'App\\Models\\BatchObat', 69, NULL, NULL, '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:48:03', '2026-04-05 01:48:03', '2026-04-05 01:48:03'),
(7, 2, 'Scan QR Code batch: B-IND-067', 'qr_code', 'scan', 'App\\Models\\BatchObat', 69, NULL, NULL, '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:48:52', '2026-04-05 01:48:52', '2026-04-05 01:48:52'),
(8, 2, 'Scan QR Code batch: B-IND-067', 'qr_code', 'scan', 'App\\Models\\BatchObat', 69, NULL, NULL, '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:48:52', '2026-04-05 01:48:52', '2026-04-05 01:48:52'),
(9, 2, 'Scan QR Code batch: B-IND-067', 'qr_code', 'scan', 'App\\Models\\BatchObat', 69, NULL, NULL, '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:54:51', '2026-04-05 01:54:51', '2026-04-05 01:54:51'),
(10, 2, 'Scan QR Code batch: B-IND-067', 'qr_code', 'scan', 'App\\Models\\BatchObat', 69, NULL, NULL, '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:54:51', '2026-04-05 01:54:51', '2026-04-05 01:54:51');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_08_26_100418_add_two_factor_columns_to_users_table', 1),
(5, '2025_12_17_000001_add_pharmacy_columns_to_users_table', 1),
(6, '2025_12_17_000002_create_kategori_obat_table', 1),
(7, '2025_12_17_000003_create_jenis_obat_table', 1),
(8, '2025_12_17_000004_create_satuan_obat_table', 1),
(9, '2025_12_17_000005_create_unit_rumah_sakit_table', 1),
(10, '2025_12_17_000006_create_obat_table', 1),
(11, '2025_12_17_000007_create_batch_obat_table', 1),
(12, '2025_12_17_000008_create_transaksi_table', 1),
(13, '2025_12_17_000009_create_permintaan_unit_table', 1),
(14, '2025_12_17_000010_create_log_aktivitas_table', 1),
(15, '2025_12_17_000011_create_qr_scan_log_table', 1),
(16, '2025_12_17_000012_create_notifikasi_table', 1),
(17, '2025_12_17_000013_create_supplier_table', 1),
(18, '2025_12_17_000014_create_resep_table', 1),
(19, '2025_12_17_000015_create_stok_opname_table', 1),
(20, '2025_12_17_000016_create_pemusnahan_obat_table', 1),
(21, '2025_12_17_000017_add_integration_fields', 1),
(22, '2026_03_23_000001_add_reporting_dimensions_to_transaksi_table', 1),
(23, '2026_03_23_000002_normalize_metode_pembayaran_on_transaksi_table', 1),
(24, '2026_03_23_085738_add_operational_intelligence_columns_to_obat_and_supplier_tables', 1),
(25, '2026_03_23_085738_create_demand_forecasts_table', 1),
(26, '2026_03_23_085738_create_reorder_suggestions_table', 1),
(27, '2026_03_23_085739_create_approval_requests_table', 1),
(28, '2026_03_23_085739_create_drug_interactions_table', 1),
(29, '2026_03_23_085739_create_stock_scan_sessions_table', 1),
(30, '2026_03_24_000003_create_biaya_operasional_table', 1),
(31, '2026_03_24_000004_add_bank_fields_to_transaksi_and_biaya_operasional_tables', 1),
(32, '2026_03_24_000005_create_hutang_tables', 1),
(33, '2026_03_24_000006_add_approval_status_to_transaksi_table', 1),
(34, '2026_03_24_000007_add_supplier_links_to_transaksi_and_hutang', 1),
(35, '2026_03_24_000008_add_search_indexes_for_procurement_autocomplete', 1),
(36, '2026_04_05_000009_retailize_resep_fields', 2);

-- --------------------------------------------------------

--
-- Table structure for table `notifikasi`
--

DROP TABLE IF EXISTS `notifikasi`;
CREATE TABLE IF NOT EXISTS `notifikasi` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `judul` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pesan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipe` enum('info','warning','danger','success') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'info',
  `kategori` enum('stok_rendah','expired_soon','expired','permintaan_baru','sistem','lainnya') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'lainnya',
  `notifiable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint UNSIGNED NOT NULL,
  `link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Link untuk aksi',
  `is_read` tinyint(1) NOT NULL DEFAULT '0',
  `read_at` timestamp NULL DEFAULT NULL,
  `is_email_sent` tinyint(1) NOT NULL DEFAULT '0',
  `email_sent_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notifikasi_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`),
  KEY `notifikasi_user_id_is_read_index` (`user_id`,`is_read`),
  KEY `notifikasi_kategori_index` (`kategori`),
  KEY `notifikasi_created_at_index` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `obat`
--

DROP TABLE IF EXISTS `obat`;
CREATE TABLE IF NOT EXISTS `obat` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `kode_obat` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Kode unik obat',
  `kode_formularium` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Kode formularium RS',
  `kode_bpjs` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Kode untuk klaim BPJS',
  `nama_obat` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_generik` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nama_brand` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kategori_id` bigint UNSIGNED NOT NULL,
  `jenis_id` bigint UNSIGNED NOT NULL,
  `satuan_id` bigint UNSIGNED NOT NULL,
  `stok_total` int NOT NULL DEFAULT '0' COMMENT 'Total stok dari semua batch',
  `stok_minimum` int NOT NULL DEFAULT '10' COMMENT 'Threshold untuk alert stok rendah',
  `harga_beli` decimal(15,2) NOT NULL DEFAULT '0.00' COMMENT 'Harga beli per satuan',
  `harga_jual` decimal(15,2) NOT NULL DEFAULT '0.00' COMMENT 'Harga jual per satuan',
  `lokasi_penyimpanan` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Rak/lokasi di apotek',
  `deskripsi` text COLLATE utf8mb4_unicode_ci,
  `efek_samping` text COLLATE utf8mb4_unicode_ci,
  `indikasi` text COLLATE utf8mb4_unicode_ci,
  `kontraindikasi` text COLLATE utf8mb4_unicode_ci,
  `gambar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `is_high_risk_drug` tinyint(1) NOT NULL DEFAULT '0',
  `supplier_lead_time_days` int UNSIGNED NOT NULL DEFAULT '7',
  `review_period_days` int UNSIGNED NOT NULL DEFAULT '30',
  `target_margin_percentage` decimal(5,2) NOT NULL DEFAULT '20.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `obat_kode_obat_unique` (`kode_obat`),
  KEY `obat_kategori_id_foreign` (`kategori_id`),
  KEY `obat_jenis_id_foreign` (`jenis_id`),
  KEY `obat_satuan_id_foreign` (`satuan_id`),
  KEY `obat_nama_obat_nama_generik_index` (`nama_obat`,`nama_generik`),
  KEY `obat_stok_total_index` (`stok_total`),
  KEY `obat_nama_obat_index` (`nama_obat`),
  KEY `obat_kode_obat_index` (`kode_obat`)
) ENGINE=InnoDB AUTO_INCREMENT=204 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `obat`
--

INSERT INTO `obat` (`id`, `kode_obat`, `kode_formularium`, `kode_bpjs`, `nama_obat`, `nama_generik`, `nama_brand`, `kategori_id`, `jenis_id`, `satuan_id`, `stok_total`, `stok_minimum`, `harga_beli`, `harga_jual`, `lokasi_penyimpanan`, `deskripsi`, `efek_samping`, `indikasi`, `kontraindikasi`, `gambar`, `is_active`, `is_high_risk_drug`, `supplier_lead_time_days`, `review_period_days`, `target_margin_percentage`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'OBT-260405-S9IB', NULL, NULL, 'Myclegecid Acid 50g', 'K3', 'Sanbe', 17, 7, 1, 0, 50, 900.00, 1500.00, 'Rak A-1', 'Tidak ada', 'Tidak ada', 'Tidak ada', 'Tidak ada', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 00:49:22', '2026-04-05 01:22:48', NULL),
(2, 'OBT-260405-BUHG', NULL, NULL, 'Myclegecid Acid 50g', 'K3', 'Sanbe', 4, 10, 8, 0, 10, 2344.00, 5000.00, 'rasdfa', NULL, NULL, NULL, NULL, NULL, 1, 0, 7, 30, 20.00, '2026-04-05 00:50:32', '2026-04-05 01:17:34', NULL),
(103, 'OBT-IND-001', NULL, NULL, 'Paracetamol 500mg Tablet', 'Paracetamol', 'Sanmol', 3, 1, 1, 320, 80, 450.00, 900.00, 'Rak A1', 'Antipiretik analgesik oral', 'Mual ringan', 'Demam dan nyeri ringan', 'Gangguan hati berat', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(104, 'OBT-IND-002', NULL, NULL, 'Paracetamol Sirup 120mg-5mL', 'Paracetamol', 'Tempra', 3, 4, 4, 210, 60, 12000.00, 18000.00, 'Rak A2', 'Antipiretik anak sirup', 'Ruam ringan', 'Demam pada anak', 'Gangguan hati berat', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(105, 'OBT-IND-003', NULL, NULL, 'Ibuprofen 400mg Tablet', 'Ibuprofen', 'Proris', 4, 1, 1, 280, 70, 700.00, 1400.00, 'Rak A3', 'NSAID antiinflamasi oral', 'Nyeri lambung', 'Nyeri inflamasi dan demam', 'Ulkus peptikum aktif', NULL, 1, 0, 6, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(106, 'OBT-IND-004', NULL, NULL, 'Asam Mefenamat 500mg Tablet', 'Asam Mefenamat', 'Ponstan', 4, 1, 1, 260, 70, 850.00, 1600.00, 'Rak A4', 'NSAID pereda nyeri', 'Dispepsia', 'Nyeri akut', 'Gagal ginjal berat', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(107, 'OBT-IND-005', NULL, NULL, 'Diklofenak Natrium 50mg Tablet', 'Diklofenak Natrium', 'Voltaren', 4, 1, 1, 240, 60, 900.00, 1800.00, 'Rak A5', 'NSAID antiinflamasi', 'Nyeri lambung', 'Nyeri muskuloskeletal', 'Ulkus peptikum aktif', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(108, 'OBT-IND-006', NULL, NULL, 'Ketorolak Injeksi 30mg-mL', 'Ketorolak', 'Toradol', 4, 7, 5, 140, 40, 3500.00, 5500.00, 'Rak A6', 'NSAID injeksi nyeri akut', 'Mual pusing', 'Nyeri pasca operasi', 'Gangguan ginjal berat', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(109, 'OBT-IND-007', NULL, NULL, 'Tramadol 50mg Kapsul', 'Tramadol', 'Tramal', 2, 2, 2, 180, 50, 1800.00, 3200.00, 'Rak A7', 'Analgesik opioid lemah', 'Mengantuk mual', 'Nyeri sedang berat', 'Depresi napas', NULL, 1, 1, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(110, 'OBT-IND-008', NULL, NULL, 'Naproxen 500mg Tablet', 'Naproxen', 'Naprosyn', 4, 1, 1, 200, 50, 1200.00, 2200.00, 'Rak A8', 'NSAID antiinflamasi oral', 'Dispepsia', 'Nyeri dan inflamasi', 'Ulkus peptikum aktif', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(111, 'OBT-IND-009', NULL, NULL, 'Meloxicam 7.5mg Tablet', 'Meloxicam', 'Mobic', 4, 1, 1, 190, 45, 1300.00, 2400.00, 'Rak A9', 'NSAID selektif oral', 'Dispepsia', 'Artritis dan nyeri', 'Ulkus peptikum aktif', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(112, 'OBT-IND-010', NULL, NULL, 'Celecoxib 200mg Kapsul', 'Celecoxib', 'Celebrex', 4, 2, 2, 170, 40, 2500.00, 4200.00, 'Rak A10', 'NSAID selektif COX2', 'Dispepsia', 'Nyeri artritis', 'Penyakit jantung koroner berat', NULL, 1, 0, 10, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(113, 'OBT-IND-011', NULL, NULL, 'Amoxicillin 500mg Kapsul', 'Amoxicillin', 'Amoxsan', 1, 2, 2, 360, 90, 950.00, 1800.00, 'Rak B1', 'Antibiotik penisilin oral', 'Diare ringan', 'Infeksi bakteri sensitif', 'Alergi penisilin', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(114, 'OBT-IND-012', NULL, NULL, 'Amoxicillin Sirup Kering 125mg-5mL', 'Amoxicillin', 'Hufanoxil', 1, 5, 4, 220, 60, 14000.00, 22000.00, 'Rak B2', 'Antibiotik anak suspensi', 'Diare ringan', 'Infeksi bakteri anak', 'Alergi penisilin', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(115, 'OBT-IND-013', NULL, NULL, 'Cefixime 100mg Kapsul', 'Cefixime', 'Cefspan', 1, 1, 2, 200, 45, 2400.00, 4200.00, 'Rak B3', 'Sefalosporin oral', 'Diare mual', 'Infeksi saluran napas', 'Alergi sefalosporin', NULL, 1, 0, 6, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:13:49', NULL),
(116, 'OBT-IND-014', NULL, NULL, 'Cefadroxil 500mg Kapsul', 'Cefadroxil', 'Biodroxil', 1, 2, 2, 210, 55, 2200.00, 3900.00, 'Rak B4', 'Sefalosporin oral', 'Diare', 'Infeksi kulit dan THT', 'Alergi sefalosporin', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(117, 'OBT-IND-015', NULL, NULL, 'Ceftriaxone Injeksi 1g', 'Ceftriaxone', 'Rocephin', 1, 7, 6, 160, 45, 12000.00, 18000.00, 'Rak B5', 'Sefalosporin injeksi', 'Ruam diare', 'Infeksi sedang berat', 'Alergi sefalosporin', NULL, 1, 1, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(118, 'OBT-IND-016', NULL, NULL, 'Ciprofloxacin 500mg Tablet', 'Ciprofloxacin', 'Ciproxin', 1, 1, 1, 190, 50, 1800.00, 3400.00, 'Rak B6', 'Fluorokuinolon oral', 'Mual pusing', 'Infeksi bakteri gram negatif', 'Kehamilan', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(119, 'OBT-IND-017', NULL, NULL, 'Levofloxacin 500mg Tablet', 'Levofloxacin', 'Cravit', 1, 1, 1, 180, 45, 3200.00, 5200.00, 'Rak B7', 'Fluorokuinolon oral', 'Mual insomnia', 'Infeksi saluran napas', 'Kehamilan', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(120, 'OBT-IND-018', NULL, NULL, 'Azithromycin 500mg Tablet', 'Azithromycin', 'Zithromax', 1, 1, 1, 175, 45, 3000.00, 5000.00, 'Rak B8', 'Antibiotik makrolida', 'Diare mual', 'Infeksi saluran napas', 'Alergi makrolida', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(121, 'OBT-IND-019', NULL, NULL, 'Clindamycin 300mg Kapsul', 'Clindamycin', 'Dalacin C', 1, 2, 2, 165, 40, 2800.00, 4700.00, 'Rak B9', 'Antibiotik lincosamide', 'Diare', 'Infeksi kulit dan gigi', 'Kolitis aktif', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(122, 'OBT-IND-020', NULL, NULL, 'Metronidazole 500mg Tablet', 'Metronidazole', 'Flagyl', 1, 1, 1, 230, 60, 900.00, 1700.00, 'Rak B10', 'Antibiotik antiprotozoa', 'Mual rasa logam', 'Infeksi anaerob', 'Trimester awal kehamilan', NULL, 1, 0, 10, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(123, 'OBT-IND-021', NULL, NULL, 'Cotrimoxazole 480mg Tablet', 'Sulfamethoxazole Trimethoprim', 'Bactrim', 1, 1, 1, 210, 55, 850.00, 1650.00, 'Rak B11', 'Kombinasi sulfonamid', 'Ruam mual', 'Infeksi saluran kemih', 'Alergi sulfonamid', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(124, 'OBT-IND-022', NULL, NULL, 'Doxycycline 100mg Kapsul', 'Doxycycline', 'Dohixat', 1, 2, 2, 170, 45, 1500.00, 2800.00, 'Rak B12', 'Antibiotik tetrasiklin', 'Mual fotosensitif', 'Infeksi bakteri tertentu', 'Anak di bawah 8 tahun', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(125, 'OBT-IND-023', NULL, NULL, 'Erythromycin 500mg Tablet', 'Erythromycin', 'Erysanbe', 1, 1, 1, 165, 40, 1300.00, 2500.00, 'Rak B13', 'Antibiotik makrolida', 'Mual diare', 'Infeksi bakteri sensitif', 'Alergi makrolida', NULL, 1, 0, 6, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(126, 'OBT-IND-024', NULL, NULL, 'Gentamicin Injeksi 80mg-2mL', 'Gentamicin', 'Garamycin', 1, 7, 5, 130, 35, 4500.00, 7000.00, 'Rak B14', 'Aminoglikosida injeksi', 'Nefrotoksik ototoksik', 'Infeksi gram negatif', 'Gangguan ginjal berat', NULL, 1, 1, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(127, 'OBT-IND-025', NULL, NULL, 'Meropenem Injeksi 1g', 'Meropenem', 'Meronem', 1, 7, 6, 120, 30, 65000.00, 85000.00, 'Rak B15', 'Karbapenem spektrum luas', 'Diare ruam', 'Infeksi berat nosokomial', 'Alergi beta laktam', NULL, 1, 1, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(128, 'OBT-IND-026', NULL, NULL, 'Omeprazole 20mg Kapsul', 'Omeprazole', 'Losec', 8, 2, 2, 260, 70, 1800.00, 3200.00, 'Rak C1', 'Penghambat pompa proton', 'Sakit kepala mual', 'GERD dan tukak', 'Alergi omeprazole', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(129, 'OBT-IND-027', NULL, NULL, 'Lansoprazole 30mg Kapsul', 'Lansoprazole', 'Lanzor', 8, 2, 2, 180, 45, 2500.00, 4200.00, 'Rak C2', 'PPI oral', 'Sakit kepala', 'GERD dan dispepsia', 'Alergi lansoprazole', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(130, 'OBT-IND-028', NULL, NULL, 'Pantoprazole 40mg Tablet', 'Pantoprazole', 'Pantozol', 8, 1, 1, 170, 45, 2700.00, 4400.00, 'Rak C3', 'PPI oral', 'Diare ringan', 'GERD dan esofagitis', 'Alergi pantoprazole', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(131, 'OBT-IND-029', NULL, NULL, 'Famotidine 20mg Tablet', 'Famotidine', 'Gaster', 8, 1, 1, 190, 50, 1200.00, 2200.00, 'Rak C4', 'Antagonis H2', 'Mual pusing', 'Dispepsia dan gastritis', 'Alergi famotidine', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(132, 'OBT-IND-030', NULL, NULL, 'Sukralfat Sirup 500mg-5mL', 'Sukralfat', 'Ulsidex', 8, 4, 4, 150, 40, 18000.00, 26000.00, 'Rak C5', 'Protektor mukosa lambung', 'Konstipasi ringan', 'Tukak lambung', 'Gagal ginjal berat', NULL, 1, 0, 10, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(133, 'OBT-IND-031', NULL, NULL, 'Antasida Suspensi', 'Aluminium Hydroxide Magnesium Hydroxide', 'Mylanta', 8, 5, 4, 220, 60, 9000.00, 15000.00, 'Rak C6', 'Antasida suspensi', 'Konstipasi diare', 'Maag dan nyeri ulu hati', 'Gangguan ginjal berat', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(134, 'OBT-IND-032', NULL, NULL, 'Domperidone 10mg Tablet', 'Domperidone', 'Domperidone OGB', 12, 1, 1, 210, 55, 700.00, 1300.00, 'Rak C7', 'Antiemetik prokinetik', 'Mulut kering', ' mual muntah', 'Perdarahan saluran cerna', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(135, 'OBT-IND-033', NULL, NULL, 'Ondansetron 4mg Tablet', 'Ondansetron', 'Zofran', 12, 1, 1, 160, 40, 2200.00, 3800.00, 'Rak C8', 'Antiemetik 5HT3', 'Sakit kepala', ' mual muntah berat', 'QT memanjang', NULL, 1, 0, 6, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(136, 'OBT-IND-034', NULL, NULL, 'Ondansetron Injeksi 4mg-2mL', 'Ondansetron', 'Zofran Inj', 12, 7, 5, 120, 30, 6000.00, 9000.00, 'Rak C9', 'Antiemetik injeksi', 'Sakit kepala konstipasi', 'Mual muntah pasca operasi', 'QT memanjang', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(137, 'OBT-IND-035', NULL, NULL, 'Metoclopramide 10mg Tablet', 'Metoclopramide', 'Primperan', 12, 1, 1, 175, 45, 800.00, 1500.00, 'Rak C10', 'Antiemetik prokinetik', 'Mengantuk', ' mual muntah', 'Gangguan ekstrapiramidal', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(138, 'OBT-IND-036', NULL, NULL, 'Loperamide 2mg Kapsul', 'Loperamide', 'Imodium', 14, 2, 2, 180, 45, 900.00, 1800.00, 'Rak C11', 'Antidiare oral', 'Konstipasi', 'Diare akut non infeksi', 'Diare berdarah', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(139, 'OBT-IND-037', NULL, NULL, 'Oralit Serbuk', 'Oral Rehydration Salt', 'Oralit', 14, 21, 9, 300, 80, 1200.00, 2200.00, 'Rak C12', 'Rehidrasi oral', 'Distensi ringan', 'Diare dengan dehidrasi', 'Ileus paralitik', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(140, 'OBT-IND-038', NULL, NULL, 'Attapulgite Tablet', 'Attapulgite', 'New Diatabs', 14, 1, 1, 190, 50, 700.00, 1400.00, 'Rak C13', 'Antidiare adsorben', 'Konstipasi', 'Diare akut', 'Obstruksi usus', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(141, 'OBT-IND-039', NULL, NULL, 'Bisacodyl 5mg Tablet', 'Bisacodyl', 'Dulcolax', 13, 1, 1, 170, 40, 800.00, 1600.00, 'Rak C14', 'Laksatif stimulan', 'Kram perut', 'Konstipasi', 'Obstruksi usus', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(142, 'OBT-IND-040', NULL, NULL, 'Lactulose Sirup 60mL', 'Lactulose', 'Duphalac', 13, 4, 4, 150, 40, 16000.00, 24000.00, 'Rak C15', 'Laksatif osmotik', 'Kembung', 'Konstipasi kronis', 'Galaktosemia', NULL, 1, 0, 10, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(143, 'OBT-IND-041', NULL, NULL, 'Amlodipine 5mg Tablet', 'Amlodipine', 'Norvasc', 5, 1, 1, 320, 80, 800.00, 1600.00, 'Rak D1', 'Antihipertensi CCB', 'Edema perifer', 'Hipertensi dan angina', 'Hipotensi berat', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(144, 'OBT-IND-042', NULL, NULL, 'Captopril 25mg Tablet', 'Captopril', 'Captopril OGB', 5, 1, 1, 310, 80, 500.00, 1100.00, 'Rak D2', 'Antihipertensi ACE inhibitor', 'Batuk kering', 'Hipertensi', 'Gagal ginjal bilateral', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(145, 'OBT-IND-043', NULL, NULL, 'Lisinopril 10mg Tablet', 'Lisinopril', 'Zestril', 5, 1, 1, 200, 50, 1300.00, 2400.00, 'Rak D3', 'Antihipertensi ACE inhibitor', 'Batuk pusing', 'Hipertensi', 'Gangguan ginjal berat', NULL, 1, 0, 6, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(146, 'OBT-IND-044', NULL, NULL, 'Valsartan 80mg Tablet', 'Valsartan', 'Diovan', 5, 1, 1, 190, 50, 2200.00, 3900.00, 'Rak D4', 'Antihipertensi ARB', 'Pusing', 'Hipertensi', 'Gagal hati berat', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(147, 'OBT-IND-045', NULL, NULL, 'Losartan 50mg Tablet', 'Losartan', 'Cozaar', 5, 1, 1, 240, 60, 1200.00, 2300.00, 'Rak D5', 'Antihipertensi ARB', 'Pusing', 'Hipertensi', 'Nefropati berat', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(148, 'OBT-IND-046', NULL, NULL, 'Nifedipine OROS 30mg Tablet', 'Nifedipine', 'Adalat Oros', 5, 1, 1, 170, 45, 2500.00, 4200.00, 'Rak D6', 'Antihipertensi CCB', 'Sakit kepala', 'Hipertensi', 'Hipotensi berat', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(149, 'OBT-IND-047', NULL, NULL, 'Bisoprolol 5mg Tablet', 'Bisoprolol', 'Concor', 10, 1, 1, 210, 55, 1700.00, 3000.00, 'Rak D7', 'Beta blocker kardioselektif', 'Bradikardia', 'Hipertensi dan gagal jantung', 'Asma berat', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(150, 'OBT-IND-048', NULL, NULL, 'Furosemide 40mg Tablet', 'Furosemide', 'Lasix', 10, 1, 1, 230, 60, 600.00, 1300.00, 'Rak D8', 'Diuretik loop', 'Hipokalemia', 'Edema dan hipertensi', 'Anuria', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(151, 'OBT-IND-049', NULL, NULL, 'Spironolactone 25mg Tablet', 'Spironolactone', 'Aldactone', 10, 1, 1, 180, 45, 900.00, 1800.00, 'Rak D9', 'Diuretik hemat kalium', 'Hiperkalemia', 'Edema asites', 'Hiperkalemia', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(152, 'OBT-IND-050', NULL, NULL, 'Simvastatin 20mg Tablet', 'Simvastatin', 'Zocor', 10, 1, 1, 260, 70, 700.00, 1500.00, 'Rak D10', 'Penurun lipid statin', 'Nyeri otot', 'Dislipidemia', 'Penyakit hati aktif', NULL, 1, 0, 10, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(153, 'OBT-IND-051', NULL, NULL, 'Atorvastatin 20mg Tablet', 'Atorvastatin', 'Lipitor', 10, 1, 1, 220, 60, 1800.00, 3200.00, 'Rak D11', 'Penurun lipid statin', 'Nyeri otot', 'Dislipidemia', 'Penyakit hati aktif', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(154, 'OBT-IND-052', NULL, NULL, 'Clopidogrel 75mg Tablet', 'Clopidogrel', 'Plavix', 10, 1, 1, 170, 45, 2500.00, 4300.00, 'Rak D12', 'Antiplatelet oral', 'Perdarahan ringan', 'Pencegahan trombosis', 'Perdarahan aktif', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(155, 'OBT-IND-053', NULL, NULL, 'Aspirin 80mg Tablet', 'Acetylsalicylic Acid', 'Aspilet', 10, 1, 1, 260, 70, 500.00, 1100.00, 'Rak D13', 'Antiplatelet dosis rendah', 'Iritasi lambung', 'Pencegahan kardiovaskular', 'Ulkus aktif', NULL, 1, 0, 6, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(156, 'OBT-IND-054', NULL, NULL, 'Isosorbide Dinitrate 5mg Tablet', 'Isosorbide Dinitrate', 'Isordil', 10, 1, 1, 150, 40, 1200.00, 2200.00, 'Rak D14', 'Vasodilator nitrat', 'Sakit kepala', 'Angina pektoris', 'Hipotensi berat', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(157, 'OBT-IND-055', NULL, NULL, 'Digoxin 0.25mg Tablet', 'Digoxin', 'Lanoxin', 10, 1, 1, 130, 35, 1600.00, 2800.00, 'Rak D15', 'Glikosida jantung', 'Mual aritmia', 'Gagal jantung tertentu', 'Blok AV berat', NULL, 1, 1, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(158, 'OBT-IND-056', NULL, NULL, 'Metformin 500mg Tablet', 'Metformin', 'Glucophage', 6, 1, 1, 340, 90, 450.00, 950.00, 'Rak E1', 'Antidiabetes biguanid', 'Mual diare', 'Diabetes tipe 2', 'Gagal ginjal berat', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(159, 'OBT-IND-057', NULL, NULL, 'Glibenclamide 5mg Tablet', 'Glibenclamide', 'Daonil', 6, 1, 1, 210, 55, 500.00, 1100.00, 'Rak E2', 'Sulfonilurea oral', 'Hipoglikemia', 'Diabetes tipe 2', 'Diabetes tipe 1', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(160, 'OBT-IND-058', NULL, NULL, 'Gliclazide MR 30mg Tablet', 'Gliclazide', 'Diamicron MR', 6, 1, 1, 180, 45, 1600.00, 2800.00, 'Rak E3', 'Sulfonilurea lepas lambat', 'Hipoglikemia', 'Diabetes tipe 2', 'Diabetes tipe 1', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(161, 'OBT-IND-059', NULL, NULL, 'Glimepiride 2mg Tablet', 'Glimepiride', 'Amaryl', 6, 1, 1, 190, 50, 900.00, 1700.00, 'Rak E4', 'Sulfonilurea oral', 'Hipoglikemia', 'Diabetes tipe 2', 'Diabetes tipe 1', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(162, 'OBT-IND-060', NULL, NULL, 'Acarbose 50mg Tablet', 'Acarbose', 'Glucobay', 6, 1, 1, 150, 40, 1400.00, 2500.00, 'Rak E5', 'Inhibitor alfa glukosidase', 'Kembung', 'Dabetes tipe 2 dengan diet', 'Ketoasidosis diabetik', NULL, 1, 0, 10, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(163, 'OBT-IND-061', NULL, NULL, 'Pioglitazone 15mg Tablet', 'Pioglitazone', 'Actos', 6, 1, 1, 140, 35, 1800.00, 3200.00, 'Rak E6', 'Thiazolidinedione oral', 'Edema', 'Diabetes tipe 2', 'Gagal jantung kelas tinggi', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(164, 'OBT-IND-062', NULL, NULL, 'Insulin Aspart Penfill', 'Insulin Aspart', 'NovoRapid', 6, 7, 15, 90, 20, 85000.00, 110000.00, 'Rak E7', 'Insulin kerja cepat', 'Hipoglikemia', 'Diabetes mellitus', 'Hipoglikemia berat', NULL, 1, 1, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(165, 'OBT-IND-063', NULL, NULL, 'Insulin Glargine Pen', 'Insulin Glargine', 'Lantus', 6, 7, 15, 80, 20, 125000.00, 155000.00, 'Rak E8', 'Insulin kerja panjang', 'Hipoglikemia', 'Diabetes mellitus', 'Hipoglikemia berat', NULL, 1, 1, 6, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(166, 'OBT-IND-064', NULL, NULL, 'Insulin Regular Vial', 'Insulin Human Regular', 'Actrapid', 6, 7, 6, 85, 20, 75000.00, 98000.00, 'Rak E9', 'Insulin kerja singkat', 'Hipoglikemia', 'Diabetes mellitus', 'Hipoglikemia berat', NULL, 1, 1, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(167, 'OBT-IND-065', NULL, NULL, 'Insulin NPH Vial', 'Insulin Isophane', 'Insulatard', 6, 7, 6, 80, 20, 78000.00, 102000.00, 'Rak E10', 'Insulin kerja menengah', 'Hipoglikemia', 'Diabetes mellitus', 'Hipoglikemia berat', NULL, 1, 1, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(168, 'OBT-IND-066', NULL, NULL, 'Cetirizine 10mg Tablet', 'Cetirizine', 'Incidal', 7, 1, 1, 260, 70, 500.00, 1000.00, 'Rak F1', 'Antihistamin generasi kedua', 'Mengantuk ringan', 'Rinitis alergi', 'Urtikaria berat', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(169, 'OBT-IND-067', NULL, NULL, 'Loratadine 10mg Tablet', 'Loratadine', 'Clarityne', 7, 1, 1, 240, 60, 700.00, 1400.00, 'Rak F2', 'Antihistamin non sedatif', 'Sakit kepala', 'Rinitis alergi', 'Hipersensitivitas', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(170, 'OBT-IND-068', NULL, NULL, 'Chlorpheniramine Maleate 4mg Tablet', 'Chlorpheniramine', 'CTM OGB', 7, 1, 1, 280, 80, 300.00, 700.00, 'Rak F3', 'Antihistamin sedatif', 'Mengantuk', 'Alergi kulit dan hidung', 'Glaukoma sudut sempit', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(171, 'OBT-IND-069', NULL, NULL, 'Fexofenadine 180mg Tablet', 'Fexofenadine', 'Telfast', 7, 1, 1, 160, 40, 2200.00, 3800.00, 'Rak F4', 'Antihistamin non sedatif', 'Sakit kepala', 'Alergi musiman', 'Hipersensitivitas', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(172, 'OBT-IND-070', NULL, NULL, 'Desloratadine 5mg Tablet', 'Desloratadine', 'Aerius', 7, 1, 1, 150, 40, 2500.00, 4200.00, 'Rak F5', 'Antihistamin non sedatif', 'Mulut kering', 'Rinitis alergi', 'Hipersensitivitas', NULL, 1, 0, 10, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(173, 'OBT-IND-071', NULL, NULL, 'Diphenhydramine Sirup', 'Diphenhydramine', 'Uniben', 7, 4, 4, 140, 35, 12000.00, 18000.00, 'Rak F6', 'Antihistamin sirup', 'Mengantuk', 'Alergi dan batuk alergik', 'Glaukoma', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(174, 'OBT-IND-072', NULL, NULL, 'Salbutamol 2mg Tablet', 'Salbutamol', 'Salbutamol OGB', 9, 1, 1, 190, 50, 500.00, 1100.00, 'Rak F7', 'Bronkodilator oral', 'Tremor palpitasi', 'Bronkospasme', 'Takikardia berat', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(175, 'OBT-IND-073', NULL, NULL, 'Salbutamol Inhaler 100mcg', 'Salbutamol', 'Ventolin', 9, 18, 15, 150, 40, 32000.00, 50000.00, 'Rak F8', 'Bronkodilator inhalasi', 'Tremor', 'Asma bronkial', 'Takikardia berat', NULL, 1, 0, 6, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(176, 'OBT-IND-074', NULL, NULL, 'Ipratropium Bromide Inhaler', 'Ipratropium Bromide', 'Atrovent', 9, 18, 15, 130, 35, 38000.00, 58000.00, 'Rak F9', 'Antikolinergik inhalasi', 'Mulut kering', 'COPD dan asma', 'Glaukoma sudut sempit', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(177, 'OBT-IND-075', NULL, NULL, 'Budesonide Nebulizer 0.5mg-2mL', 'Budesonide', 'Pulmicort', 17, 19, 4, 120, 30, 42000.00, 62000.00, 'Rak F10', 'Kortikosteroid inhalasi', 'Serak mulut kering', 'Asma persisten', 'Infeksi jamur mulut aktif', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(178, 'OBT-IND-076', NULL, NULL, 'Theophylline 200mg Tablet', 'Theophylline', 'Theobron', 9, 1, 1, 150, 40, 900.00, 1700.00, 'Rak F11', 'Bronkodilator metilxantin', 'Mual palpitasi', 'Asma dan COPD', 'Aritmia berat', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(179, 'OBT-IND-077', NULL, NULL, 'Ambroxol 30mg Tablet', 'Ambroxol', 'Mucosolvan', 9, 1, 1, 200, 55, 700.00, 1400.00, 'Rak F12', 'Mukolitik oral', 'Mual ringan', 'Batuk berdahak', 'Ulkus peptikum aktif', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(180, 'OBT-IND-078', NULL, NULL, 'Acetylcysteine 200mg Sachet', 'Acetylcysteine', 'Fluimucil', 9, 21, 9, 170, 45, 2200.00, 3600.00, 'Rak F13', 'Mukolitik serbuk', 'Mual', 'Dahak kental', 'Asma tidak terkontrol', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(181, 'OBT-IND-079', NULL, NULL, 'Guaifenesin Sirup', 'Guaifenesin', 'Woods Expectorant', 9, 4, 4, 160, 40, 11000.00, 17000.00, 'Rak F14', 'Ekspektoran sirup', 'Mual ringan', 'Batuk berdahak', 'Hipersensitivitas', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(182, 'OBT-IND-080', NULL, NULL, 'Dextromethorphan Sirup', 'Dextromethorphan', 'Siladex', 9, 4, 4, 155, 40, 10000.00, 16000.00, 'Rak F15', 'Antitusif sirup', 'Mengantuk', 'Batuk kering', 'Penggunaan MAOI', NULL, 1, 0, 10, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(183, 'OBT-IND-081', NULL, NULL, 'Dexamethasone 0.5mg Tablet', 'Dexamethasone', 'Dexamethasone OGB', 17, 1, 1, 210, 55, 350.00, 800.00, 'Rak G1', 'Kortikosteroid sistemik', 'Hiperglikemia', 'Inflamasi dan alergi', 'Infeksi jamur sistemik', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(184, 'OBT-IND-082', NULL, NULL, 'Methylprednisolone 4mg Tablet', 'Methylprednisolone', 'Medrol', 17, 1, 1, 190, 50, 900.00, 1700.00, 'Rak G2', 'Kortikosteroid sistemik', 'Dispepsia', 'Inflamasi dan alergi', 'Infeksi jamur sistemik', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(185, 'OBT-IND-083', NULL, NULL, 'Prednisone 5mg Tablet', 'Prednisone', 'Prednisone OGB', 17, 1, 1, 170, 45, 700.00, 1300.00, 'Rak G3', 'Kortikosteroid sistemik', 'Hiperglikemia', 'Inflamasi autoimun', 'Infeksi jamur sistemik', NULL, 1, 0, 6, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(186, 'OBT-IND-084', NULL, NULL, 'Hydrocortisone Krim 2.5 persen', 'Hydrocortisone', 'Cortiderm', 20, 10, 7, 150, 40, 9000.00, 15000.00, 'Rak G4', 'Kortikosteroid topikal', 'Iritasi lokal', 'Dermatitis inflamasi', 'Infeksi kulit virus', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(187, 'OBT-IND-085', NULL, NULL, 'Betamethasone Salep 0.1 persen', 'Betamethasone', 'Diprosone', 20, 9, 7, 145, 35, 11000.00, 17000.00, 'Rak G5', 'Kortikosteroid topikal kuat', 'Iritasi lokal', 'Dermatitis alergi', 'Infeksi kulit jamur', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(188, 'OBT-IND-086', NULL, NULL, 'Clobetasol Krim 0.05 persen', 'Clobetasol', 'Clobetasol OGB', 20, 10, 7, 130, 30, 13000.00, 20000.00, 'Rak G6', 'Kortikosteroid topikal sangat kuat', 'Iritasi lokal', 'Psoriasis terbatas', 'Infeksi kulit aktif', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(189, 'OBT-IND-087', NULL, NULL, 'Ketoconazole Krim 2 persen', 'Ketoconazole', 'Nizoral', 20, 10, 7, 180, 45, 9000.00, 15000.00, 'Rak G7', 'Antijamur topikal', 'Rasa terbakar ringan', 'Infeksi jamur kulit', 'Hipersensitivitas', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(190, 'OBT-IND-088', NULL, NULL, 'Miconazole Salep 2 persen', 'Miconazole', 'Daktarin', 20, 9, 7, 170, 45, 8500.00, 14000.00, 'Rak G8', 'Antijamur topikal', 'Iritasi lokal', 'Kandidiasis kulit', 'Hipersensitivitas', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(191, 'OBT-IND-089', NULL, NULL, 'Gentamicin Krim 0.1 persen', 'Gentamicin', 'Garamycin Cream', 20, 10, 7, 140, 35, 10000.00, 16500.00, 'Rak G9', 'Antibiotik topikal', 'Iritasi lokal', 'Infeksi kulit bakteri', 'Hipersensitivitas aminoglikosida', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(192, 'OBT-IND-090', NULL, NULL, 'Silver Sulfadiazine Krim 1 persen', 'Silver Sulfadiazine', 'Silvadene', 20, 10, 7, 120, 30, 16000.00, 25000.00, 'Rak G10', 'Antimikroba luka bakar', 'Ruam lokal', 'Pencegahan infeksi luka bakar', 'Alergi sulfonamid', NULL, 1, 0, 10, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(193, 'OBT-IND-091', NULL, NULL, 'Ciprofloxacin Tetes Mata 0.3 persen', 'Ciprofloxacin', 'Cendo Xitrol', 19, 13, 4, 140, 35, 12000.00, 19000.00, 'Rak H1', 'Antibiotik oftalmik', 'Rasa perih', 'Konjungtivitis bakteri', 'Hipersensitivitas', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(194, 'OBT-IND-092', NULL, NULL, 'Air Mata Buatan Tetes Mata', 'Hydroxypropyl Methylcellulose', 'Cendo Tears', 19, 13, 4, 180, 45, 10000.00, 16000.00, 'Rak H2', 'Pelumas mata', 'Rasa kabur sementara', 'Mata kering', 'Infeksi mata aktif', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(195, 'OBT-IND-093', NULL, NULL, 'Timolol Tetes Mata 0.5 persen', 'Timolol Maleate', 'Timol', 19, 13, 4, 110, 30, 18000.00, 27000.00, 'Rak H3', 'Beta blocker oftalmik', 'Iritasi mata', 'Glaukoma', 'Hipertensi bronkial berat', NULL, 1, 0, 6, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(196, 'OBT-IND-094', NULL, NULL, 'Chloramphenicol Tetes Mata 0.5 persen', 'Chloramphenicol', 'Cendo Fenicol', 19, 13, 4, 150, 40, 9000.00, 15000.00, 'Rak H4', 'Antibiotik oftalmik', 'Rasa perih', 'Infeksi mata bakteri', 'Hipersensitivitas', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(197, 'OBT-IND-095', NULL, NULL, 'Oxymetazoline Tetes Hidung 0.05 persen', 'Oxymetazoline Ili', 'Iliadin', 21, 15, 4, 160, 40, 9000.00, 15000.00, 'Rak H5', 'Dekongestan hidung', 'Iritasi lokal', 'Rinitis kongesti', 'Glaukoma sudut sempit', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(198, 'OBT-IND-096', NULL, NULL, 'Xylometazoline Spray Hidung', 'Xylometazoline Otr', 'Otrivin', 21, 24, 4, 150, 40, 12000.00, 18000.00, 'Rak H6', 'Dekongestan hidung semprot', 'Iritasi lokal', 'Hidung tersumbat', 'Rhinitis atrofi', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(199, 'OBT-IND-097', NULL, NULL, 'Ofloxacin Tetes Telinga 0.3 persen', 'Ofloxacin', 'Oflox Ear Drop', 21, 14, 4, 120, 30, 14000.00, 22000.00, 'Rak H7', 'Antibiotik otik', 'Iritasi lokal', 'Otitis eksterna', 'Hipersensitivitas', NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(200, 'OBT-IND-098', NULL, NULL, 'Povidone Iodine 10 persen Larutan', 'Povidone Iodine', 'Betadine', 16, 12, 4, 220, 60, 9000.00, 15000.00, 'Rak H8', 'Antiseptik topikal', 'Iritasi lokal', 'Disinfeksi luka ringan', 'Alergi iodin', NULL, 1, 0, 8, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(201, 'OBT-IND-099', NULL, NULL, 'NaCl 0.9 persen Infus 500mL', 'Sodium Chloride', 'Otsu NS', 18, 8, 4, 260, 70, 11000.00, 17000.00, 'Rak H9', 'Cairan infus isotonik', 'Overload cairan', 'Rehidrasi dan elektrolit', 'Gagal jantung dekompensasi', NULL, 1, 0, 9, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(202, 'OBT-IND-100', NULL, NULL, 'Ringer Lactate Infus 500mL', 'Ringer Lactate', 'Otsu RL', 18, 8, 4, 240, 65, 12000.00, 18000.00, 'Rak H10', 'Cairan infus elektrolit', 'Overload cairan', 'Resusitasi cairan', 'Hiperkalemia berat', NULL, 1, 0, 10, 30, 20.00, '2026-04-05 01:05:45', '2026-04-05 01:05:45', NULL),
(203, 'OBT-260405-SPZO', NULL, NULL, 'Analgesik', 'K1', 'Sanbe', 2, 3, 6, 100, 10, 4100.00, 5600.00, 'Rak B-2', NULL, NULL, NULL, NULL, NULL, 1, 0, 7, 30, 20.00, '2026-04-05 01:26:47', '2026-04-05 01:26:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pemusnahan_obat`
--

DROP TABLE IF EXISTS `pemusnahan_obat`;
CREATE TABLE IF NOT EXISTS `pemusnahan_obat` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nomor_berita_acara` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggal_pemusnahan` date NOT NULL,
  `penanggung_jawab` bigint UNSIGNED NOT NULL,
  `lokasi_pemusnahan` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `metode_pemusnahan` text COLLATE utf8mb4_unicode_ci COMMENT 'Cara pemusnahan sesuai regulasi',
  `saksi` json DEFAULT NULL COMMENT 'Daftar saksi pemusnahan',
  `alasan` enum('expired','rusak','recall','lainnya') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'expired',
  `keterangan` text COLLATE utf8mb4_unicode_ci,
  `file_berita_acara` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Upload dokumen BA',
  `status` enum('draft','completed','approved') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'draft',
  `approved_by` bigint UNSIGNED DEFAULT NULL,
  `approved_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pemusnahan_obat_nomor_berita_acara_unique` (`nomor_berita_acara`),
  KEY `pemusnahan_obat_penanggung_jawab_foreign` (`penanggung_jawab`),
  KEY `pemusnahan_obat_approved_by_foreign` (`approved_by`),
  KEY `pemusnahan_obat_status_index` (`status`),
  KEY `pemusnahan_obat_tanggal_pemusnahan_index` (`tanggal_pemusnahan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pemusnahan_obat_detail`
--

DROP TABLE IF EXISTS `pemusnahan_obat_detail`;
CREATE TABLE IF NOT EXISTS `pemusnahan_obat_detail` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `pemusnahan_id` bigint UNSIGNED NOT NULL,
  `batch_id` bigint UNSIGNED NOT NULL,
  `jumlah` int NOT NULL,
  `nilai_perolehan` decimal(15,2) NOT NULL COMMENT 'Nilai pembelian yang dimusnahkan',
  `kondisi` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pemusnahan_obat_detail_pemusnahan_id_foreign` (`pemusnahan_id`),
  KEY `pemusnahan_obat_detail_batch_id_foreign` (`batch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permintaan_unit`
--

DROP TABLE IF EXISTS `permintaan_unit`;
CREATE TABLE IF NOT EXISTS `permintaan_unit` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `kode_permintaan` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_id` bigint UNSIGNED NOT NULL,
  `obat_id` bigint UNSIGNED NOT NULL,
  `jumlah_diminta` int NOT NULL,
  `jumlah_disetujui` int DEFAULT NULL COMMENT 'Jumlah yang diberikan',
  `tanggal_permintaan` date NOT NULL,
  `status` enum('pending','processed','completed','cancelled') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `prioritas` enum('normal','urgent','emergency') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'normal',
  `catatan` text COLLATE utf8mb4_unicode_ci,
  `catatan_farmasi` text COLLATE utf8mb4_unicode_ci COMMENT 'Catatan dari farmasi',
  `processed_by` bigint UNSIGNED DEFAULT NULL,
  `processed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permintaan_unit_kode_permintaan_unique` (`kode_permintaan`),
  KEY `permintaan_unit_obat_id_foreign` (`obat_id`),
  KEY `permintaan_unit_processed_by_foreign` (`processed_by`),
  KEY `permintaan_unit_status_index` (`status`),
  KEY `permintaan_unit_tanggal_permintaan_index` (`tanggal_permintaan`),
  KEY `permintaan_unit_unit_id_status_index` (`unit_id`,`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `qr_scan_log`
--

DROP TABLE IF EXISTS `qr_scan_log`;
CREATE TABLE IF NOT EXISTS `qr_scan_log` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `batch_id` bigint UNSIGNED DEFAULT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `kode_qr_scanned` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `metode_scan` enum('camera','scanner') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'camera',
  `hasil_scan` enum('success','not_found','expired','error') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'success',
  `pesan_error` text COLLATE utf8mb4_unicode_ci,
  `data_hasil` json DEFAULT NULL COMMENT 'JSON data hasil scan',
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `waktu_scan` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `qr_scan_log_user_id_foreign` (`user_id`),
  KEY `qr_scan_log_hasil_scan_index` (`hasil_scan`),
  KEY `qr_scan_log_waktu_scan_index` (`waktu_scan`),
  KEY `qr_scan_log_batch_id_waktu_scan_index` (`batch_id`,`waktu_scan`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `qr_scan_log`
--

INSERT INTO `qr_scan_log` (`id`, `batch_id`, `user_id`, `kode_qr_scanned`, `metode_scan`, `hasil_scan`, `pesan_error`, `data_hasil`, `ip_address`, `user_agent`, `waktu_scan`, `created_at`, `updated_at`) VALUES
(1, 69, 2, 'BATCH-20260405080545-JL7FN1', 'camera', 'success', NULL, '{\"link\": \"http://localhost:8000/obat/169/batch\", \"obat\": {\"id\": 169, \"kode\": \"OBT-IND-067\", \"nama\": \"Loratadine 10mg Tablet\", \"jenis\": \"Tablet\", \"satuan\": \"Tablet\", \"kategori\": \"Antihistamin\", \"nama_generik\": \"Loratadine\"}, \"batch\": {\"id\": null, \"stok\": 240, \"nomor\": \"B-IND-067\", \"expired\": \"2028-01-14\"}, \"kode_qr\": \"BATCH-20260405080545-JL7FN1\", \"generated_at\": \"2026-04-05T08:05:45+00:00\"}', '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:37:56', '2026-04-05 01:37:56', '2026-04-05 01:37:56'),
(2, 69, 2, 'BATCH-20260405080545-JL7FN1', 'camera', 'success', NULL, '{\"link\": \"http://localhost:8000/obat/169/batch\", \"obat\": {\"id\": 169, \"kode\": \"OBT-IND-067\", \"nama\": \"Loratadine 10mg Tablet\", \"jenis\": \"Tablet\", \"satuan\": \"Tablet\", \"kategori\": \"Antihistamin\", \"nama_generik\": \"Loratadine\"}, \"batch\": {\"id\": null, \"stok\": 240, \"nomor\": \"B-IND-067\", \"expired\": \"2028-01-14\"}, \"kode_qr\": \"BATCH-20260405080545-JL7FN1\", \"generated_at\": \"2026-04-05T08:05:45+00:00\"}', '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:38:13', '2026-04-05 01:38:13', '2026-04-05 01:38:13'),
(3, 69, 2, 'BATCH-20260405080545-JL7FN1', 'scanner', 'success', NULL, '{\"link\": \"http://localhost:8000/obat/169/batch\", \"obat\": {\"id\": 169, \"kode\": \"OBT-IND-067\", \"nama\": \"Loratadine 10mg Tablet\", \"jenis\": \"Tablet\", \"satuan\": \"Tablet\", \"kategori\": \"Antihistamin\", \"nama_generik\": \"Loratadine\"}, \"batch\": {\"id\": null, \"stok\": 240, \"nomor\": \"B-IND-067\", \"expired\": \"2028-01-14\"}, \"kode_qr\": \"BATCH-20260405080545-JL7FN1\", \"generated_at\": \"2026-04-05T08:05:45+00:00\"}', '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:40:10', '2026-04-05 01:40:10', '2026-04-05 01:40:10'),
(4, 69, 2, 'BATCH-20260405080545-JL7FN1', 'camera', 'success', NULL, '{\"link\": \"http://localhost:8000/obat/169/batch\", \"obat\": {\"id\": 169, \"kode\": \"OBT-IND-067\", \"nama\": \"Loratadine 10mg Tablet\", \"jenis\": \"Tablet\", \"satuan\": \"Tablet\", \"kategori\": \"Antihistamin\", \"nama_generik\": \"Loratadine\"}, \"batch\": {\"id\": null, \"stok\": 240, \"nomor\": \"B-IND-067\", \"expired\": \"2028-01-14\"}, \"kode_qr\": \"BATCH-20260405080545-JL7FN1\", \"generated_at\": \"2026-04-05T08:05:45+00:00\"}', '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:48:03', '2026-04-05 01:48:03', '2026-04-05 01:48:03'),
(5, 69, 2, 'BATCH-20260405080545-JL7FN1', 'camera', 'success', NULL, '{\"link\": \"http://localhost:8000/obat/169/batch\", \"obat\": {\"id\": 169, \"kode\": \"OBT-IND-067\", \"nama\": \"Loratadine 10mg Tablet\", \"jenis\": \"Tablet\", \"satuan\": \"Tablet\", \"kategori\": \"Antihistamin\", \"nama_generik\": \"Loratadine\"}, \"batch\": {\"id\": null, \"stok\": 240, \"nomor\": \"B-IND-067\", \"expired\": \"2028-01-14\"}, \"kode_qr\": \"BATCH-20260405080545-JL7FN1\", \"generated_at\": \"2026-04-05T08:05:45+00:00\"}', '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:48:03', '2026-04-05 01:48:03', '2026-04-05 01:48:03'),
(6, 69, 2, 'BATCH-20260405080545-JL7FN1', 'camera', 'success', NULL, '{\"link\": \"http://localhost:8000/obat/169/batch\", \"obat\": {\"id\": 169, \"kode\": \"OBT-IND-067\", \"nama\": \"Loratadine 10mg Tablet\", \"jenis\": \"Tablet\", \"satuan\": \"Tablet\", \"kategori\": \"Antihistamin\", \"nama_generik\": \"Loratadine\"}, \"batch\": {\"id\": null, \"stok\": 240, \"nomor\": \"B-IND-067\", \"expired\": \"2028-01-14\"}, \"kode_qr\": \"BATCH-20260405080545-JL7FN1\", \"generated_at\": \"2026-04-05T08:05:45+00:00\"}', '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:48:52', '2026-04-05 01:48:52', '2026-04-05 01:48:52'),
(7, 69, 2, 'BATCH-20260405080545-JL7FN1', 'camera', 'success', NULL, '{\"link\": \"http://localhost:8000/obat/169/batch\", \"obat\": {\"id\": 169, \"kode\": \"OBT-IND-067\", \"nama\": \"Loratadine 10mg Tablet\", \"jenis\": \"Tablet\", \"satuan\": \"Tablet\", \"kategori\": \"Antihistamin\", \"nama_generik\": \"Loratadine\"}, \"batch\": {\"id\": null, \"stok\": 240, \"nomor\": \"B-IND-067\", \"expired\": \"2028-01-14\"}, \"kode_qr\": \"BATCH-20260405080545-JL7FN1\", \"generated_at\": \"2026-04-05T08:05:45+00:00\"}', '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:48:52', '2026-04-05 01:48:52', '2026-04-05 01:48:52'),
(8, 69, 2, 'BATCH-20260405080545-JL7FN1', 'camera', 'success', NULL, '{\"link\": \"http://localhost:8000/obat/169/batch\", \"obat\": {\"id\": 169, \"kode\": \"OBT-IND-067\", \"nama\": \"Loratadine 10mg Tablet\", \"jenis\": \"Tablet\", \"satuan\": \"Tablet\", \"kategori\": \"Antihistamin\", \"nama_generik\": \"Loratadine\"}, \"batch\": {\"id\": null, \"stok\": 240, \"nomor\": \"B-IND-067\", \"expired\": \"2028-01-14\"}, \"kode_qr\": \"BATCH-20260405080545-JL7FN1\", \"generated_at\": \"2026-04-05T08:05:45+00:00\"}', '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:54:51', '2026-04-05 01:54:51', '2026-04-05 01:54:51'),
(9, 69, 2, 'BATCH-20260405080545-JL7FN1', 'camera', 'success', NULL, '{\"link\": \"http://localhost:8000/obat/169/batch\", \"obat\": {\"id\": 169, \"kode\": \"OBT-IND-067\", \"nama\": \"Loratadine 10mg Tablet\", \"jenis\": \"Tablet\", \"satuan\": \"Tablet\", \"kategori\": \"Antihistamin\", \"nama_generik\": \"Loratadine\"}, \"batch\": {\"id\": null, \"stok\": 240, \"nomor\": \"B-IND-067\", \"expired\": \"2028-01-14\"}, \"kode_qr\": \"BATCH-20260405080545-JL7FN1\", \"generated_at\": \"2026-04-05T08:05:45+00:00\"}', '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-04-05 01:54:51', '2026-04-05 01:54:51', '2026-04-05 01:54:51');

-- --------------------------------------------------------

--
-- Table structure for table `reorder_suggestions`
--

DROP TABLE IF EXISTS `reorder_suggestions`;
CREATE TABLE IF NOT EXISTS `reorder_suggestions` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `obat_id` bigint UNSIGNED NOT NULL,
  `avg_daily_usage` int UNSIGNED NOT NULL DEFAULT '0',
  `lead_time_days` int UNSIGNED NOT NULL DEFAULT '7',
  `safety_stock` int UNSIGNED NOT NULL DEFAULT '0',
  `reorder_point` int UNSIGNED NOT NULL DEFAULT '0',
  `suggested_order_qty` int UNSIGNED NOT NULL DEFAULT '0',
  `period_start` date NOT NULL,
  `period_end` date NOT NULL,
  `calculated_at` timestamp NULL DEFAULT NULL,
  `is_applied` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reorder_suggestions_obat_id_period_start_period_end_index` (`obat_id`,`period_start`,`period_end`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `resep`
--

DROP TABLE IF EXISTS `resep`;
CREATE TABLE IF NOT EXISTS `resep` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nomor_resep` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nomor_referensi` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nama_pelanggan` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nama_dokter` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_id` bigint UNSIGNED DEFAULT NULL,
  `tanggal_resep` date NOT NULL,
  `kategori_pelanggan` enum('reguler','pelanggan_rutin','rujukan_dokter') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `metode_pembayaran` enum('tunai_umum','non_tunai','asuransi_rekanan') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('pending','processed','completed','cancelled') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `processed_by` bigint UNSIGNED DEFAULT NULL,
  `processed_at` timestamp NULL DEFAULT NULL,
  `catatan` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resep_nomor_resep_unique` (`nomor_resep`),
  KEY `resep_unit_id_foreign` (`unit_id`),
  KEY `resep_processed_by_foreign` (`processed_by`),
  KEY `resep_nomor_rm_tanggal_resep_index` (`tanggal_resep`),
  KEY `resep_status_index` (`status`),
  KEY `resep_nomor_referensi_tanggal_resep_index` (`nomor_referensi`,`tanggal_resep`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `resep_detail`
--

DROP TABLE IF EXISTS `resep_detail`;
CREATE TABLE IF NOT EXISTS `resep_detail` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `resep_id` bigint UNSIGNED NOT NULL,
  `obat_id` bigint UNSIGNED NOT NULL,
  `jumlah` int NOT NULL,
  `dosis` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `aturan_pakai` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `catatan` text COLLATE utf8mb4_unicode_ci,
  `is_dispensed` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `resep_detail_resep_id_foreign` (`resep_id`),
  KEY `resep_detail_obat_id_foreign` (`obat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `satuan_obat`
--

DROP TABLE IF EXISTS `satuan_obat`;
CREATE TABLE IF NOT EXISTS `satuan_obat` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nama_satuan` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Tablet, Botol, Ampul, Tube, Box, Strip, Sachet, dll',
  `singkatan` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `satuan_obat`
--

INSERT INTO `satuan_obat` (`id`, `nama_satuan`, `singkatan`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Tablet', 'tab', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(2, 'Kapsul', 'kaps', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(3, 'Kaplet', 'kapl', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(4, 'Botol', 'btl', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(5, 'Ampul', 'amp', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(6, 'Vial', 'vial', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(7, 'Tube', 'tube', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(8, 'Pot', 'pot', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(9, 'Sachet', 'sach', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(10, 'Strip', 'str', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(11, 'Blister', 'bls', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(12, 'Box', 'box', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(13, 'Dus', 'dus', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(14, 'Pack', 'pack', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(15, 'Buah', 'bh', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(16, 'Pcs', 'pcs', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(17, 'Set', 'set', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(18, 'Liter', 'L', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(19, 'Mililiter', 'mL', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(20, 'Gram', 'g', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(21, 'Miligram', 'mg', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(22, 'Kilogram', 'kg', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(23, 'Suppositoria', 'supp', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(24, 'Ovula', 'ovl', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56'),
(25, 'Flakon', 'flk', 1, '2026-04-05 00:45:56', '2026-04-05 00:45:56');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('9ZdonTLghArpsXYJ6eM0bIjan22qtKbFP8SK6FLn', 2, '202.145.6.46', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:149.0) Gecko/20100101 Firefox/149.0', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiYVBwUXE5cERLYk8wak91MDlTNTl3b3ZjN0xUTG8yNWhuOE5waGs2UyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NjU6Imh0dHBzOi8vZGlzY3JlZXRseS1ub25mZXJtZW50YXRpdmUtbGFtYXIubmdyb2stZnJlZS5kZXYvZGFzaGJvYXJkIjtzOjU6InJvdXRlIjtzOjk6ImRhc2hib2FyZCI7fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjI7fQ==', 1775374428),
('CofeyM8HIgaF4pL6tJ1bNp0x4sG8bZ5WDFLpcyCV', 2, '202.145.6.46', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:149.0) Gecko/20100101 Firefox/149.0', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiem04Uks3aXExb0VXU1E0dThUM3M2WlpOSEpqWlI5bEhqNHg2bzJtYyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NzA6Imh0dHBzOi8vZGlzY3JlZXRseS1ub25mZXJtZW50YXRpdmUtbGFtYXIubmdyb2stZnJlZS5kZXYvb2JhdD9zZWFyY2g9bXkiO3M6NToicm91dGUiO3M6MTA6Im9iYXQuaW5kZXgiO31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToyO30=', 1775377371),
('dBREyDaOw4sXaQxTSIhQngOgXXpUq5QGT28Em70I', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.7920', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZGp2R0t5N3ZoVVZKenR2dDV1QXFZU29GbDQ3SkhJQVp5VjFxWlN2VyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NDI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvYmF0Y2g/cGVyX3BhZ2U9NSI7czo1OiJyb3V0ZSI7czoxNToiYXBpLmJhdGNoLmluZGV4Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1775377941),
('fkvcMy68ZRR9pqXOQomcTahAYbg9ofYv3KgQnzeh', 2, '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoicVRQVW5sUWt3OHVqUmI4SWF1OWxXYUNOczR0Z1FmQUVkc1dwVnkxdCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Nzc6Imh0dHBzOi8vZGlzY3JlZXRseS1ub25mZXJtZW50YXRpdmUtbGFtYXIubmdyb2stZnJlZS5kZXYvb2JhdC9iYXRjaC82OT9mcm9tPXFyIjtzOjU6InJvdXRlIjtzOjEwOiJiYXRjaC5zaG93Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6Mjt9', 1775379400),
('KEqwgHNaJtGmVTxhZm06uaorVJcPAT6pURKm6W9w', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:149.0) Gecko/20100101 Firefox/149.0', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiT3Jpd3E0RHZDQkJSS1Vjd2d4UWdiR2s2OVJROUExUE5STkpuZEM0MCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXNoYm9hcmQiO3M6NToicm91dGUiO3M6OToiZGFzaGJvYXJkIjt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTt9', 1775373294),
('KPChKO6Qjej3BhzQEbuEzYDQBa6jg0Y20dZBDXdz', 2, '202.145.6.46', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:149.0) Gecko/20100101 Firefox/149.0', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiU0lwNXhuRnJSb093R0hBNnJGTllRTWUyUWJ4eXBIWUlPclNINmVFUCI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czo1ODoiaHR0cHM6Ly9kaXNjcmVldGx5LW5vbmZlcm1lbnRhdGl2ZS1sYW1hci5uZ3Jvay1mcmVlLmRldi9xciI7fXM6OToiX3ByZXZpb3VzIjthOjI6e3M6MzoidXJsIjtzOjY2OiJodHRwczovL2Rpc2NyZWV0bHktbm9uZmVybWVudGF0aXZlLWxhbWFyLm5ncm9rLWZyZWUuZGV2L21hc3RlcmRhdGEiO3M6NToicm91dGUiO3M6MTY6Im1hc3RlcmRhdGEuaW5kZXgiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToyO30=', 1775380651),
('mXD9BCoZ0GoaWMh7eIPD4GHvBHAGO3qFKl9j5Dnb', 2, '202.145.6.46', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:149.0) Gecko/20100101 Firefox/149.0', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoic0tieVFEbG9uV3dYVEQ4VzRwUjByTUw3VElvZW9MOWxsdEw0bWd0NSI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czo3MDoiaHR0cHM6Ly9kaXNjcmVldGx5LW5vbmZlcm1lbnRhdGl2ZS1sYW1hci5uZ3Jvay1mcmVlLmRldi9vYmF0P3NlYXJjaD1teSI7fXM6OToiX3ByZXZpb3VzIjthOjI6e3M6MzoidXJsIjtzOjU4OiJodHRwczovL2Rpc2NyZWV0bHktbm9uZmVybWVudGF0aXZlLWxhbWFyLm5ncm9rLWZyZWUuZGV2L3FyIjtzOjU6InJvdXRlIjtzOjg6InFyLmluZGV4Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6Mjt9', 1775377862),
('O24U71MhD7VhXF3ES6cggZtqz0LjK5UXQevwwMZm', NULL, '202.145.6.46', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:149.0) Gecko/20100101 Firefox/149.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZVB5SFg2SUN4YkhrQVk0M3NpOXoxV2p5OUdEc0xhcWtBcDZvQkZNWiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NjE6Imh0dHBzOi8vZGlzY3JlZXRseS1ub25mZXJtZW50YXRpdmUtbGFtYXIubmdyb2stZnJlZS5kZXYvbG9naW4iO3M6NToicm91dGUiO3M6NToibG9naW4iO319', 1775374794),
('upIyoTsi6WFhTqwfa4031scEFrSTj2gIwhAcRJZp', NULL, '202.145.6.46', 'WhatsApp/2.2607.106 W', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMzM4c2F1RUkxSklZTk54dDlycmVIc253ckx3VlNwUkxWYXBNWXU1RSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NjE6Imh0dHBzOi8vZGlzY3JlZXRseS1ub25mZXJtZW50YXRpdmUtbGFtYXIubmdyb2stZnJlZS5kZXYvbG9naW4iO3M6NToicm91dGUiO3M6NToibG9naW4iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1775378236),
('ZkQSTM8gjoF1gk23CiFZI6iEbObxuNQDwBvOWAsg', 2, '202.145.6.46', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiUFZEcEhqYWNCelVXWWFKc09EUTFycEVETVIyWkp0Y3ZGSGVDa0JKVyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTg6Imh0dHBzOi8vZGlzY3JlZXRseS1ub25mZXJtZW50YXRpdmUtbGFtYXIubmdyb2stZnJlZS5kZXYvcXIiO3M6NToicm91dGUiO3M6ODoicXIuaW5kZXgiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToyO30=', 1775378488);

-- --------------------------------------------------------

--
-- Table structure for table `stock_scan_sessions`
--

DROP TABLE IF EXISTS `stock_scan_sessions`;
CREATE TABLE IF NOT EXISTS `stock_scan_sessions` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `session_code` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('in_progress','completed') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'in_progress',
  `started_at` timestamp NULL DEFAULT NULL,
  `completed_at` timestamp NULL DEFAULT NULL,
  `total_scans` int UNSIGNED NOT NULL DEFAULT '0',
  `matched_scans` int UNSIGNED NOT NULL DEFAULT '0',
  `unmatched_scans` int UNSIGNED NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stock_scan_sessions_session_code_unique` (`session_code`),
  KEY `stock_scan_sessions_user_id_status_index` (`user_id`,`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stock_scan_session_items`
--

DROP TABLE IF EXISTS `stock_scan_session_items`;
CREATE TABLE IF NOT EXISTS `stock_scan_session_items` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `stock_scan_session_id` bigint UNSIGNED NOT NULL,
  `kode_qr` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch_id` bigint UNSIGNED DEFAULT NULL,
  `is_match` tinyint(1) NOT NULL DEFAULT '0',
  `scanned_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stock_scan_session_items_batch_id_foreign` (`batch_id`),
  KEY `stock_scan_session_items_stock_scan_session_id_is_match_index` (`stock_scan_session_id`,`is_match`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stok_opname`
--

DROP TABLE IF EXISTS `stok_opname`;
CREATE TABLE IF NOT EXISTS `stok_opname` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nomor_opname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggal_opname` date NOT NULL,
  `penanggung_jawab` bigint UNSIGNED NOT NULL,
  `unit_id` bigint UNSIGNED DEFAULT NULL,
  `status` enum('draft','in_progress','completed','approved') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'draft',
  `approved_by` bigint UNSIGNED DEFAULT NULL,
  `approved_at` timestamp NULL DEFAULT NULL,
  `catatan` text COLLATE utf8mb4_unicode_ci,
  `berita_acara` text COLLATE utf8mb4_unicode_ci COMMENT 'Berita acara selisih stok',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stok_opname_nomor_opname_unique` (`nomor_opname`),
  KEY `stok_opname_penanggung_jawab_foreign` (`penanggung_jawab`),
  KEY `stok_opname_unit_id_foreign` (`unit_id`),
  KEY `stok_opname_approved_by_foreign` (`approved_by`),
  KEY `stok_opname_status_index` (`status`),
  KEY `stok_opname_tanggal_opname_index` (`tanggal_opname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stok_opname_detail`
--

DROP TABLE IF EXISTS `stok_opname_detail`;
CREATE TABLE IF NOT EXISTS `stok_opname_detail` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `stok_opname_id` bigint UNSIGNED NOT NULL,
  `batch_id` bigint UNSIGNED NOT NULL,
  `stok_sistem` int NOT NULL COMMENT 'Stok di sistem sebelum opname',
  `stok_fisik` int NOT NULL COMMENT 'Stok hasil penghitungan fisik',
  `selisih` int NOT NULL COMMENT 'Selisih = stok_fisik - stok_sistem',
  `keterangan_selisih` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stok_opname_detail_stok_opname_id_foreign` (`stok_opname_id`),
  KEY `stok_opname_detail_batch_id_index` (`batch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
CREATE TABLE IF NOT EXISTS `supplier` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `kode_supplier` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_supplier` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat` text COLLATE utf8mb4_unicode_ci,
  `no_telepon` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kontak_person` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `no_hp_kontak` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `npwp` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('active','inactive') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `lead_time_days` int UNSIGNED NOT NULL DEFAULT '7',
  `catatan` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `supplier_kode_supplier_unique` (`kode_supplier`),
  KEY `supplier_nama_supplier_index` (`nama_supplier`),
  KEY `supplier_kode_supplier_index` (`kode_supplier`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`id`, `kode_supplier`, `nama_supplier`, `alamat`, `no_telepon`, `email`, `kontak_person`, `no_hp_kontak`, `npwp`, `status`, `lead_time_days`, `catatan`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'SUP-001', 'PT Kimia Farma Trading & Distribution', 'Jakarta, Indonesia', '021-0001001', 'sales@kimiafarma.co.id', 'Tim Sales KFTD', '08120001001', NULL, 'active', 7, 'Distributor nasional obat dan alat kesehatan', '2026-04-05 00:45:56', '2026-04-05 00:45:56', NULL),
(2, 'SUP-002', 'PT Indofarma Global Medika', 'Bekasi, Indonesia', '021-0001002', 'sales@indofarma.id', 'Tim Penjualan IGM', '08120001002', NULL, 'active', 8, 'Penyedia produk generik dan OTC', '2026-04-05 00:45:56', '2026-04-05 00:45:56', NULL),
(3, 'SUP-003', 'PT Dexa Medica Distribution', 'Tangerang, Indonesia', '021-0001003', 'order@dexa.co.id', 'Sales Dexa', '08120001003', NULL, 'active', 6, 'Fokus pada obat etikal dan hospital care', '2026-04-05 00:45:56', '2026-04-05 00:45:56', NULL),
(4, 'SUP-004', 'PT Kalbe Farma Distribution', 'Jakarta Timur, Indonesia', '021-0001004', 'hospital@kalbe.co.id', 'Key Account Kalbe', '08120001004', NULL, 'active', 7, 'Produk farmasi, nutrisi, dan consumer health', '2026-04-05 00:45:56', '2026-04-05 00:45:56', NULL),
(5, 'SUP-005', 'PT Sanbe Farma Distribution', 'Bandung, Indonesia', '022-0001005', 'sales@sanbe-farma.com', 'Sales Sanbe', '08120001005', NULL, 'active', 9, 'Penyedia antibiotik, injeksi, dan suplemen', '2026-04-05 00:45:56', '2026-04-05 00:45:56', NULL),
(6, 'SUP-006', 'PT Pharos Indonesia', 'Jakarta Selatan, Indonesia', '021-0001006', 'order@pharos.co.id', 'CS Pharos', '08120001006', NULL, 'active', 8, 'Produk etikal dan OTC', '2026-04-05 00:45:56', '2026-04-05 00:45:56', NULL),
(7, 'SUP-007', 'PT Soho Global Health', 'Jakarta, Indonesia', '021-0001007', 'sales@soho.co.id', 'SOHO Hospital Team', '08120001007', NULL, 'active', 7, 'Produk herbal modern dan farmasi', '2026-04-05 00:45:56', '2026-04-05 00:45:56', NULL),
(8, 'SUP-008', 'PT Tempo Scan Pacific Tbk', 'Jakarta Barat, Indonesia', '021-0001008', 'b2b@temposcangroup.com', 'Key Account Tempo', '08120001008', NULL, 'active', 8, 'Produk consumer health dan ethical', '2026-04-05 00:45:56', '2026-04-05 00:45:56', NULL),
(9, 'SUP-009', 'PT Bernofarm', 'Sidoarjo, Indonesia', '031-0001009', 'order@bernofarm.com', 'Tim Sales Bernofarm', '08120001009', NULL, 'active', 9, 'Produk injeksi dan antibiotik', '2026-04-05 00:45:56', '2026-04-05 00:45:56', NULL),
(10, 'SUP-010', 'PT Novell Pharmaceutical Labs', 'Bogor, Indonesia', '0251-0001010', 'hospital@novellpharm.com', 'Tim KAM Novell', '08120001010', NULL, 'active', 10, 'Produk generik bermerek dan biologis', '2026-04-05 00:45:56', '2026-04-05 00:45:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sync_queue`
--

DROP TABLE IF EXISTS `sync_queue`;
CREATE TABLE IF NOT EXISTS `sync_queue` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `model_type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Nama model yang di-sync',
  `model_id` bigint UNSIGNED NOT NULL COMMENT 'ID record',
  `action` enum('create','update','delete') COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Jenis aksi',
  `data` json NOT NULL COMMENT 'Data untuk sync',
  `status` enum('pending','synced','failed') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `retry_count` int NOT NULL DEFAULT '0',
  `error_message` text COLLATE utf8mb4_unicode_ci,
  `synced_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sync_queue_status_created_at_index` (`status`,`created_at`),
  KEY `sync_queue_model_type_index` (`model_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

DROP TABLE IF EXISTS `transaksi`;
CREATE TABLE IF NOT EXISTS `transaksi` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `kode_transaksi` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `obat_id` bigint UNSIGNED NOT NULL,
  `batch_id` bigint UNSIGNED DEFAULT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `unit_id` bigint UNSIGNED DEFAULT NULL,
  `resep_id` bigint UNSIGNED DEFAULT NULL,
  `jenis_transaksi` enum('masuk','keluar','penjualan') COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'masuk: restocking, keluar: dispensing ke unit, penjualan: penjualan langsung',
  `jumlah` int NOT NULL,
  `harga_satuan` decimal(15,2) NOT NULL DEFAULT '0.00',
  `total_harga` decimal(15,2) NOT NULL DEFAULT '0.00',
  `tanggal_transaksi` date NOT NULL,
  `waktu_transaksi` time NOT NULL,
  `keterangan` text COLLATE utf8mb4_unicode_ci,
  `nomor_referensi` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Nomor faktur/referensi eksternal',
  `supplier_id` bigint UNSIGNED DEFAULT NULL,
  `supplier_nama` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `pelanggan_nama` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dokter_nama` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sales_nama` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `operator_nama` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kasir_nama` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `metode_pembayaran` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_code` varchar(16) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_nama` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipe_penjualan` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kategori_keuangan` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'none',
  `status_pelunasan` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'lunas',
  `approval_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'none',
  `approval_processed_at` timestamp NULL DEFAULT NULL,
  `jatuh_tempo` date DEFAULT NULL,
  `is_taxed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `transaksi_kode_transaksi_unique` (`kode_transaksi`),
  KEY `transaksi_batch_id_foreign` (`batch_id`),
  KEY `transaksi_user_id_foreign` (`user_id`),
  KEY `transaksi_unit_id_foreign` (`unit_id`),
  KEY `transaksi_jenis_transaksi_index` (`jenis_transaksi`),
  KEY `transaksi_tanggal_transaksi_index` (`tanggal_transaksi`),
  KEY `transaksi_obat_id_tanggal_transaksi_index` (`obat_id`,`tanggal_transaksi`),
  KEY `transaksi_resep_id_foreign` (`resep_id`),
  KEY `transaksi_supplier_nama_index` (`supplier_nama`),
  KEY `transaksi_pelanggan_nama_index` (`pelanggan_nama`),
  KEY `transaksi_dokter_nama_index` (`dokter_nama`),
  KEY `transaksi_sales_nama_index` (`sales_nama`),
  KEY `transaksi_operator_nama_index` (`operator_nama`),
  KEY `transaksi_kasir_nama_index` (`kasir_nama`),
  KEY `transaksi_metode_pembayaran_index` (`metode_pembayaran`),
  KEY `transaksi_tipe_penjualan_index` (`tipe_penjualan`),
  KEY `transaksi_kategori_keuangan_index` (`kategori_keuangan`),
  KEY `transaksi_status_pelunasan_index` (`status_pelunasan`),
  KEY `transaksi_jatuh_tempo_index` (`jatuh_tempo`),
  KEY `transaksi_is_taxed_index` (`is_taxed`),
  KEY `transaksi_bank_code_index` (`bank_code`),
  KEY `transaksi_bank_nama_index` (`bank_nama`),
  KEY `transaksi_approval_status_index` (`approval_status`),
  KEY `transaksi_supplier_id_index` (`supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `unit_rumah_sakit`
--

DROP TABLE IF EXISTS `unit_rumah_sakit`;
CREATE TABLE IF NOT EXISTS `unit_rumah_sakit` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nama_unit` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'ICU, IGD, Rawat Inap, Poli Umum, dll',
  `kode_unit` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `penanggung_jawab` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `no_telepon` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lokasi` text COLLATE utf8mb4_unicode_ci,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unit_rumah_sakit_kode_unit_unique` (`kode_unit`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nomor_str` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Surat Tanda Registrasi - only for pharmacist',
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_hp` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alamat` text COLLATE utf8mb4_unicode_ci,
  `role` enum('admin','pharmacist','manager') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pharmacist',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `nomor_str`, `email`, `no_hp`, `alamat`, `role`, `is_active`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `two_factor_confirmed_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Aqief Hakimi', NULL, 'aqefhakimi32@gmail.com', NULL, NULL, 'pharmacist', 1, NULL, '$2y$12$0en99/HUHbIyu8UkGm/S6.lsda6wTjWNnv9QepNXxyY9NJUzftd8m', NULL, NULL, NULL, 'V83Ve5lJ4OtgJvWQ3TMEWylbKe3r07cmcNIMKvlHCKllP2g7aodIvIWshV0Z', '2026-04-03 02:43:58', '2026-04-03 02:43:58'),
(2, 'Hakimis Company', NULL, 'hakimis@company.com', NULL, NULL, 'pharmacist', 1, NULL, '$2y$12$HsoxWa4e/eNH6y88DDQqmOtyOJvvSORnjXpQdoKB6BpJPKJ67vF6G', NULL, NULL, NULL, '43G8gu5qBk4RsIyH3j2ebQdLSVc78dU09qdG0qNdZ8mKUzGkMUeWjrCav6d3', '2026-04-05 00:26:22', '2026-04-05 00:26:22');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `approval_requests`
--
ALTER TABLE `approval_requests`
  ADD CONSTRAINT `approval_requests_approved_by_foreign` FOREIGN KEY (`approved_by`) REFERENCES `users` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `approval_requests_obat_id_foreign` FOREIGN KEY (`obat_id`) REFERENCES `obat` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `approval_requests_requested_by_foreign` FOREIGN KEY (`requested_by`) REFERENCES `users` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `approval_requests_transaksi_id_foreign` FOREIGN KEY (`transaksi_id`) REFERENCES `transaksi` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `batch_obat`
--
ALTER TABLE `batch_obat`
  ADD CONSTRAINT `batch_obat_obat_id_foreign` FOREIGN KEY (`obat_id`) REFERENCES `obat` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `batch_obat_supplier_id_foreign` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`) ON DELETE RESTRICT;

--
-- Constraints for table `biaya_operasional`
--
ALTER TABLE `biaya_operasional`
  ADD CONSTRAINT `biaya_operasional_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `demand_forecasts`
--
ALTER TABLE `demand_forecasts`
  ADD CONSTRAINT `demand_forecasts_obat_id_foreign` FOREIGN KEY (`obat_id`) REFERENCES `obat` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `drug_interactions`
--
ALTER TABLE `drug_interactions`
  ADD CONSTRAINT `drug_interactions_interacts_with_obat_id_foreign` FOREIGN KEY (`interacts_with_obat_id`) REFERENCES `obat` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `drug_interactions_obat_id_foreign` FOREIGN KEY (`obat_id`) REFERENCES `obat` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `hutang`
--
ALTER TABLE `hutang`
  ADD CONSTRAINT `hutang_supplier_id_foreign` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `hutang_transaksi_id_foreign` FOREIGN KEY (`transaksi_id`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `hutang_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `hutang_payments`
--
ALTER TABLE `hutang_payments`
  ADD CONSTRAINT `hutang_payments_hutang_id_foreign` FOREIGN KEY (`hutang_id`) REFERENCES `hutang` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `hutang_payments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `log_aktivitas`
--
ALTER TABLE `log_aktivitas`
  ADD CONSTRAINT `log_aktivitas_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `notifikasi`
--
ALTER TABLE `notifikasi`
  ADD CONSTRAINT `notifikasi_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `obat`
--
ALTER TABLE `obat`
  ADD CONSTRAINT `obat_jenis_id_foreign` FOREIGN KEY (`jenis_id`) REFERENCES `jenis_obat` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `obat_kategori_id_foreign` FOREIGN KEY (`kategori_id`) REFERENCES `kategori_obat` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `obat_satuan_id_foreign` FOREIGN KEY (`satuan_id`) REFERENCES `satuan_obat` (`id`) ON DELETE RESTRICT;

--
-- Constraints for table `pemusnahan_obat`
--
ALTER TABLE `pemusnahan_obat`
  ADD CONSTRAINT `pemusnahan_obat_approved_by_foreign` FOREIGN KEY (`approved_by`) REFERENCES `users` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `pemusnahan_obat_penanggung_jawab_foreign` FOREIGN KEY (`penanggung_jawab`) REFERENCES `users` (`id`) ON DELETE RESTRICT;

--
-- Constraints for table `pemusnahan_obat_detail`
--
ALTER TABLE `pemusnahan_obat_detail`
  ADD CONSTRAINT `pemusnahan_obat_detail_batch_id_foreign` FOREIGN KEY (`batch_id`) REFERENCES `batch_obat` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `pemusnahan_obat_detail_pemusnahan_id_foreign` FOREIGN KEY (`pemusnahan_id`) REFERENCES `pemusnahan_obat` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `permintaan_unit`
--
ALTER TABLE `permintaan_unit`
  ADD CONSTRAINT `permintaan_unit_obat_id_foreign` FOREIGN KEY (`obat_id`) REFERENCES `obat` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `permintaan_unit_processed_by_foreign` FOREIGN KEY (`processed_by`) REFERENCES `users` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `permintaan_unit_unit_id_foreign` FOREIGN KEY (`unit_id`) REFERENCES `unit_rumah_sakit` (`id`) ON DELETE RESTRICT;

--
-- Constraints for table `qr_scan_log`
--
ALTER TABLE `qr_scan_log`
  ADD CONSTRAINT `qr_scan_log_batch_id_foreign` FOREIGN KEY (`batch_id`) REFERENCES `batch_obat` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `qr_scan_log_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `reorder_suggestions`
--
ALTER TABLE `reorder_suggestions`
  ADD CONSTRAINT `reorder_suggestions_obat_id_foreign` FOREIGN KEY (`obat_id`) REFERENCES `obat` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `resep`
--
ALTER TABLE `resep`
  ADD CONSTRAINT `resep_processed_by_foreign` FOREIGN KEY (`processed_by`) REFERENCES `users` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `resep_unit_id_foreign` FOREIGN KEY (`unit_id`) REFERENCES `unit_rumah_sakit` (`id`) ON DELETE RESTRICT;

--
-- Constraints for table `resep_detail`
--
ALTER TABLE `resep_detail`
  ADD CONSTRAINT `resep_detail_obat_id_foreign` FOREIGN KEY (`obat_id`) REFERENCES `obat` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `resep_detail_resep_id_foreign` FOREIGN KEY (`resep_id`) REFERENCES `resep` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `stock_scan_sessions`
--
ALTER TABLE `stock_scan_sessions`
  ADD CONSTRAINT `stock_scan_sessions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `stock_scan_session_items`
--
ALTER TABLE `stock_scan_session_items`
  ADD CONSTRAINT `stock_scan_session_items_batch_id_foreign` FOREIGN KEY (`batch_id`) REFERENCES `batch_obat` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `stock_scan_session_items_stock_scan_session_id_foreign` FOREIGN KEY (`stock_scan_session_id`) REFERENCES `stock_scan_sessions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `stok_opname`
--
ALTER TABLE `stok_opname`
  ADD CONSTRAINT `stok_opname_approved_by_foreign` FOREIGN KEY (`approved_by`) REFERENCES `users` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `stok_opname_penanggung_jawab_foreign` FOREIGN KEY (`penanggung_jawab`) REFERENCES `users` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `stok_opname_unit_id_foreign` FOREIGN KEY (`unit_id`) REFERENCES `unit_rumah_sakit` (`id`) ON DELETE RESTRICT;

--
-- Constraints for table `stok_opname_detail`
--
ALTER TABLE `stok_opname_detail`
  ADD CONSTRAINT `stok_opname_detail_batch_id_foreign` FOREIGN KEY (`batch_id`) REFERENCES `batch_obat` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `stok_opname_detail_stok_opname_id_foreign` FOREIGN KEY (`stok_opname_id`) REFERENCES `stok_opname` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `transaksi_batch_id_foreign` FOREIGN KEY (`batch_id`) REFERENCES `batch_obat` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `transaksi_obat_id_foreign` FOREIGN KEY (`obat_id`) REFERENCES `obat` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `transaksi_resep_id_foreign` FOREIGN KEY (`resep_id`) REFERENCES `resep` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `transaksi_supplier_id_foreign` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `transaksi_unit_id_foreign` FOREIGN KEY (`unit_id`) REFERENCES `unit_rumah_sakit` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `transaksi_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
