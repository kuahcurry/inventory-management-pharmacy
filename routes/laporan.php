<?php

use Illuminate\Support\Facades\Route;

/**
 * Laporan (Reports) Routes
 * Stock, transaction, and expiry reports
 */
Route::middleware(['auth', 'verified'])->group(function () {
    // Report Center (Merged)
    Route::get('reports', [\App\Http\Controllers\ReportController::class, 'index'])->name('reports.index');
    Route::get('laporan', [\App\Http\Controllers\ReportController::class, 'index'])->name('laporan.index');

    // Dedicated Suite Pages (separate menu/submenu destinations)
    Route::get('reports/pembelian', [\App\Http\Controllers\ReportController::class, 'pembelian'])->name('reports.pembelian');
    Route::get('reports/pembelian/export', [\App\Http\Controllers\ReportController::class, 'pembelianExport'])->name('reports.pembelian.export');
    Route::get('reports/penjualan', [\App\Http\Controllers\ReportController::class, 'penjualan'])->name('reports.penjualan');
    Route::get('reports/penjualan/export', [\App\Http\Controllers\ReportController::class, 'penjualanExport'])->name('reports.penjualan.export');
    Route::get('reports/hutang-piutang', [\App\Http\Controllers\ReportController::class, 'hutangPiutang'])->name('reports.hutang_piutang');
    Route::get('reports/hutang-piutang/export', [\App\Http\Controllers\ReportController::class, 'hutangPiutangExport'])->name('reports.hutang_piutang.export');
    Route::get('reports/cashflow', [\App\Http\Controllers\ReportController::class, 'cashflow'])->name('reports.cashflow');
    Route::get('reports/cashflow/export', [\App\Http\Controllers\ReportController::class, 'cashflowExport'])->name('reports.cashflow.export');
    Route::get('reports/obat', [\App\Http\Controllers\ReportController::class, 'obat'])->name('reports.obat');
    Route::get('reports/obat/export', [\App\Http\Controllers\ReportController::class, 'obatExport'])->name('reports.obat.export');
    Route::get('reports/keuangan', [\App\Http\Controllers\ReportController::class, 'keuangan'])->name('reports.keuangan');
    Route::get('reports/keuangan/export', [\App\Http\Controllers\ReportController::class, 'keuanganExport'])->name('reports.keuangan.export');

    Route::get('reports/suite/{suite}', [\App\Http\Controllers\ReportController::class, 'suite'])->name('reports.suite');
    Route::get('reports/suite/{suite}/export', [\App\Http\Controllers\ReportController::class, 'suiteExport'])->name('reports.suite.export');

    // Laporan Stok (Stock Reports)
    Route::get('reports/stock', [\App\Http\Controllers\ReportController::class, 'stock'])->name('reports.stock');
    Route::get('reports/stock/export', [\App\Http\Controllers\ReportController::class, 'stockExport'])->name('reports.stock.export');

    // Laporan Transaksi (Transaction Reports)
    Route::get('reports/transactions', [\App\Http\Controllers\ReportController::class, 'transactions'])->name('reports.transactions');
    Route::get('reports/transactions/export', [\App\Http\Controllers\ReportController::class, 'transactionsExport'])->name('reports.transactions.export');

    // Laporan Kadaluarsa (Expiry Reports)
    Route::get('reports/expiry', [\App\Http\Controllers\ReportController::class, 'expiry'])->name('reports.expiry');
    Route::get('reports/expiry/export', [\App\Http\Controllers\ReportController::class, 'expiryExport'])->name('reports.expiry.export');

    // Laporan Operasional Cerdas
    Route::get('reports/operational', [\App\Http\Controllers\ReportController::class, 'operational'])->name('reports.operational');
});
