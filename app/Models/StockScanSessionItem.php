<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StockScanSessionItem extends Model
{
    protected $fillable = [
        'stock_scan_session_id',
        'kode_qr',
        'batch_id',
        'is_match',
        'scanned_at',
    ];

    protected $casts = [
        'is_match' => 'boolean',
        'scanned_at' => 'datetime',
    ];

    public function session(): BelongsTo
    {
        return $this->belongsTo(StockScanSession::class, 'stock_scan_session_id');
    }

    public function batch(): BelongsTo
    {
        return $this->belongsTo(BatchObat::class, 'batch_id');
    }
}
