<?php

use Illuminate\Support\Facades\Route;

/**
 * Obat (Medicine) Routes
 * Handles medicine inventory, batches, prescriptions, destruction, and QR codes
 */

Route::middleware(['auth', 'verified'])->group(function () {
    // Batch Obat
    Route::get('obat/batch-trash', [\App\Http\Controllers\BatchObatController::class, 'trash'])->name('batch.trash')->middleware('role:admin,pharmacist');
    Route::post('obat/batch/{batch}/restore', [\App\Http\Controllers\BatchObatController::class, 'restore'])->name('batch.restore')->middleware('role:admin,pharmacist');
    Route::delete('obat/batch/{batch}/force', [\App\Http\Controllers\BatchObatController::class, 'forceDelete'])->name('batch.force-delete')->middleware('role:admin,pharmacist');
    Route::resource('obat/batch', \App\Http\Controllers\BatchObatController::class)->names([
        'create' => 'batch.create',
        'store' => 'batch.store',
        'edit' => 'batch.edit',
        'update' => 'batch.update',
        'destroy' => 'batch.destroy',
    ])->only(['create', 'store', 'edit', 'update', 'destroy'])->middleware('role:admin,pharmacist');
    Route::resource('obat/batch', \App\Http\Controllers\BatchObatController::class)->names([
        'index' => 'batch.index',
        'show' => 'batch.show',
    ])->only(['index', 'show']);

    // Data Obat (Main Medicine Inventory)
    Route::get('obat/download-template', [\App\Http\Controllers\ObatController::class, 'downloadTemplate'])->name('obat.download-template')->middleware('role:admin,pharmacist');
    Route::post('obat/import', [\App\Http\Controllers\ObatController::class, 'import'])->name('obat.import')->middleware('role:admin,pharmacist');
    Route::get('obat/trash', [\App\Http\Controllers\ObatController::class, 'trash'])->name('obat.trash')->middleware('role:admin,pharmacist');
    Route::post('obat/{obat}/restore', [\App\Http\Controllers\ObatController::class, 'restore'])->name('obat.restore')->middleware('role:admin,pharmacist');
    Route::delete('obat/{obat}/force', [\App\Http\Controllers\ObatController::class, 'forceDelete'])->name('obat.force-delete')->middleware('role:admin,pharmacist');
    Route::resource('obat', \App\Http\Controllers\ObatController::class)->only(['create', 'store', 'edit', 'update', 'destroy'])->middleware('role:admin,pharmacist');
    Route::resource('obat', \App\Http\Controllers\ObatController::class)->only(['index', 'show']);
    
    // Resep (Prescriptions)
    Route::resource('resep', \App\Http\Controllers\ResepController::class)->only(['create', 'store', 'edit', 'update', 'destroy'])->middleware('role:admin,pharmacist');
    Route::resource('resep', \App\Http\Controllers\ResepController::class)->only(['index', 'show']);
    
    // Pemusnahan (Medicine Destruction)
    // Approve: manager & admin only
    Route::post('pemusnahan/{pemusnahan}/approve', [\App\Http\Controllers\PemusnahanObatController::class, 'approve'])
        ->name('pemusnahan.approve')
        ->middleware('role:admin,manager');

    // Create / Edit / Delete: pharmacist & admin only (staff operations)
    Route::resource('pemusnahan', \App\Http\Controllers\PemusnahanObatController::class)
        ->only(['create', 'store', 'edit', 'update', 'destroy'])
        ->middleware('role:admin,pharmacist');

    // Index / Show: all authenticated users
    Route::resource('pemusnahan', \App\Http\Controllers\PemusnahanObatController::class)
        ->only(['index', 'show']);
    
    // QR Code
    Route::get('qr', [\App\Http\Controllers\QrCodeController::class, 'index'])->name('qr.index');
    Route::get('qr/analytics', [\App\Http\Controllers\QrCodeController::class, 'analytics'])->name('qr.analytics');
});
