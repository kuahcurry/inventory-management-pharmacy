<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ReorderSuggestion extends Model
{
    protected $fillable = [
        'obat_id',
        'avg_daily_usage',
        'lead_time_days',
        'safety_stock',
        'reorder_point',
        'suggested_order_qty',
        'period_start',
        'period_end',
        'calculated_at',
        'is_applied',
    ];

    protected $casts = [
        'period_start' => 'date',
        'period_end' => 'date',
        'calculated_at' => 'datetime',
        'is_applied' => 'boolean',
    ];

    public function obat(): BelongsTo
    {
        return $this->belongsTo(Obat::class, 'obat_id');
    }
}
