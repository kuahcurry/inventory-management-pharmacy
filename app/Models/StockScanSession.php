<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class StockScanSession extends Model
{
    protected $fillable = [
        'user_id',
        'session_code',
        'status',
        'started_at',
        'completed_at',
        'total_scans',
        'matched_scans',
        'unmatched_scans',
    ];

    protected $casts = [
        'started_at' => 'datetime',
        'completed_at' => 'datetime',
    ];

    protected static function booted(): void
    {
        static::creating(function (StockScanSession $session): void {
            if (empty($session->session_code)) {
                $session->session_code = 'SCAN-'.now()->format('Ymd-His').'-'.Str::upper(Str::random(4));
            }
            if (! $session->started_at) {
                $session->started_at = now();
            }
        });
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function items(): HasMany
    {
        return $this->hasMany(StockScanSessionItem::class, 'stock_scan_session_id');
    }
}
