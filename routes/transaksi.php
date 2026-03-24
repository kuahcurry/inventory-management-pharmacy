<?php

use Illuminate\Support\Facades\Route;

/**
 * Transaksi (Transaction) Routes
 * Handles all transactions including incoming and outgoing goods
 */
Route::middleware(['auth', 'verified'])->group(function () {
    // Kasir (POS)
    Route::get('kasir', [\App\Http\Controllers\TransaksiController::class, 'kasir'])->name('transaksi.kasir');
    Route::post('kasir/checkout', [\App\Http\Controllers\TransaksiController::class, 'kasirCheckout'])->name('transaksi.kasir.checkout');
    Route::post('kasir/checkout/resume/{approvalRequest}', [\App\Http\Controllers\TransaksiController::class, 'resumePendingApprovalCheckout'])
        ->name('transaksi.kasir.checkout.resume');

    // Hutang Suite
    Route::get('hutang', [\App\Http\Controllers\HutangController::class, 'index'])->name('hutang.index');
    Route::post('hutang/{hutang}/pay', [\App\Http\Controllers\HutangController::class, 'pay'])->name('hutang.pay');
    Route::post('hutang/{hutang}/partial-pay', [\App\Http\Controllers\HutangController::class, 'partialPay'])->name('hutang.partial-pay');

    // Semua Transaksi (All Transactions)
    Route::get('transaksi', [\App\Http\Controllers\TransaksiController::class, 'index'])->name('transaksi.index');

    // Barang Masuk (Incoming Goods)
    Route::get('transaksi/masuk', [\App\Http\Controllers\TransaksiController::class, 'masuk'])->name('transaksi.masuk');

    // Barang Keluar (Outgoing Goods)
    Route::get('transaksi/keluar', [\App\Http\Controllers\TransaksiController::class, 'keluar'])->name('transaksi.keluar');

    // Transaksi Resource Routes (create, store, show, edit, update, destroy)
    Route::resource('transaksi', \App\Http\Controllers\TransaksiController::class)->except(['index']);
});
