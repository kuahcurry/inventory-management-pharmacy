# API Endpoints Reference (Audited)

Generated from current route/controller implementation in:
- routes/api.php
- app/Http/Controllers/Api/*

All endpoints below are under auth:web middleware.

## 1) Response Patterns (Important for analysis)

This codebase currently uses multiple return styles:

1. Plain pagination object
- Example: GET /api/obat, GET /api/transaksi, GET /api/hutang
- Returns Laravel paginator JSON directly (data, links, meta)

2. Wrapper object
- Example: GET /api/medicines/search, GET /api/suppliers/search
- Returns { "data": [...] }

3. Message + payload object
- Example: POST /api/inventory/create-with-batch
- Returns { "message": "...", "data": { ... } }

4. Report summary + detail object
- Example: GET /api/reports/stock
- Returns { "summary": {...}, "data": [...] }

Use endpoint-specific parsing. Do not assume one global schema.

## 2) High-impact audited endpoints + return values

### 2.1 Inventory unified create
- POST /api/inventory/create-with-batch
- Success 201:

```json
{
	"message": "Obat dan batch berhasil dibuat.",
	"data": {
		"obat": { "id": 123, "nama_obat": "...", "kategori": {}, "jenis": {}, "satuan": {} },
		"batch": { "id": 456, "obat_id": 123, "supplier": {} }
	}
}
```

- Notes:
	- existing_obat_id mode supports adding batch to existing medicine
	- Duplicate medicine+supplier and duplicate nomor_batch (per obat) return 422

### 2.2 Procurement autocomplete
- GET /api/medicines/search?q=...&supplier_id=&category_id=&limit=
- Return:

```json
{
	"data": [
		{
			"id": 1,
			"kode_obat": "OBT-001",
			"nama_obat": "...",
			"stok_total": 100,
			"last_buy_price": 12500,
			"kategori": { "id": 1, "nama_kategori": "..." },
			"satuan": { "id": 1, "nama_satuan": "..." },
			"default_supplier": { "id": 2, "nama_supplier": "..." }
		}
	]
}
```

- GET /api/suppliers/search?q=...&limit=
- Return: { "data": [ { "id", "kode_supplier", "nama_supplier", "no_telepon", "status" } ] }

### 2.3 Hutang
- GET /api/hutang?status=unpaid|partially_paid|paid&supplier_id=&per_page=
- Return: paginator JSON with relationships transaksi.obat, supplier, payments

- POST /api/hutang/{hutang}/pay
- POST /api/hutang/{hutang}/partial-pay
- Return:

```json
{
	"message": "...",
	"hutang": { "id": 1, "payment_status": "...", "remaining_amount": 0, "payments": [] }
}
```

### 2.4 Reports API

- GET /api/reports/stock

```json
{
	"summary": {
		"total_items": 100,
		"low_stock_items": 8,
		"total_value": 1234567.89
	},
	"data": []
}
```

- GET /api/reports/transactions

```json
{
	"summary": {
		"total_transactions": 1000,
		"by_type": { "masuk": 100, "keluar": 700, "penjualan": 200 },
		"total_value": { "masuk": 1, "keluar": 2, "penjualan": 3 }
	},
	"data": []
}
```

- GET /api/reports/expiry

```json
{
	"summary": {
		"expiring_soon_count": 10,
		"expiring_soon_value": 100000,
		"expired_count": 3,
		"expired_value": 45000
	},
	"expiring_soon": [],
	"expired": []
}
```

- GET /api/reports/export/{type}
	- type: stock | transactions | expiry
	- Default format: CSV stream download
	- If format != csv, returns JSON payload like above

### 2.5 Operational insights
- GET /api/insights/margins
- Return:

```json
{
	"summary": {
		"revenue_30d": 0,
		"cost_30d": 0,
		"margin_value_30d": 0,
		"avg_margin_percentage_30d": 0
	},
	"per_item": [],
	"per_batch": []
}
```

- GET /api/insights/reorder-suggestions
- GET /api/insights/forecasts
- Return: { "summary": { ... }, "data": [...] }

- POST /api/insights/check-interactions
- Return: { "has_blocking": true|false, "data": [...] }

## 3) Core endpoint map from routes/api.php

### Onboarding
- GET /api/onboarding/status
- POST /api/onboarding/tutorial
- PATCH /api/onboarding/preferences

### Dashboard
- GET /api/dashboard/stats
- GET /api/dashboard/stock-levels
- GET /api/dashboard/transaction-trends
- GET /api/dashboard/expiring-soon
- GET /api/dashboard/low-stock
- GET /api/dashboard/top-medicines
- GET /api/dashboard/recent-transactions

### Obat, Batch, Transaksi
- /api/obat (resource)
- GET /api/obat/low-stock
- GET /api/obat/search
- GET /api/obat/{obat}/batches
- POST /api/obat/{obat}/recalculate-stock
- GET /api/medicines/search

- /api/batch (resource)
- GET /api/batch/expiring-soon
- GET /api/batch/expired
- POST /api/batch/{batch}/update-status

- /api/transaksi (index, store, show)
- GET /api/transaksi/today
- GET /api/transaksi/by-type/{type}
- POST /api/transaksi/masuk
- POST /api/transaksi/keluar
- POST /api/transaksi/penjualan
- POST /api/transactions (alias to storePenjualan)

### Procurement & debt
- POST /api/inventory/create-with-batch
- GET /api/hutang
- POST /api/hutang/{hutang}/pay
- POST /api/hutang/{hutang}/partial-pay

### QR, notification, resep, stock opname, destruction
- /api/qr/*
- /api/notifikasi/*
- /api/resep/*
- /api/stok-opname/*
- /api/pemusnahan/*

### Reports & insights
- /api/reports/*
- /api/insights/*

### Master data
- /api/kategori-obat, /api/jenis-obat, /api/satuan-obat, /api/unit-rumah-sakit (resource)
- /api/kategori, /api/jenis, /api/satuan, /api/unit, /api/supplier (resource + active/toggle helpers)
- GET /api/suppliers/search (alias search)

### Admin only
- /api/users (resource) + POST /api/users/{user}/toggle-active
- /api/log-aktivitas, /api/log-aktivitas/{log}, /api/log-aktivitas/user/{user}

## 4) Financial equations used by report payloads

- Margin value = revenue - cost
- Margin percentage = (margin value / revenue) * 100, when revenue > 0
- Stock value = stok * harga_beli
- Expiry value at risk = stok_tersedia * harga_beli
- Transaction total value (report API) = jumlah * harga_satuan

## 5) Accuracy notes

1. Some endpoints return direct model/paginator payloads, others return wrapped objects.
2. For analytics pipelines, normalize to one internal schema before aggregation.
3. For procurement autocomplete, minimum query length is 2 characters.
4. Report export endpoint returns CSV stream by default.
