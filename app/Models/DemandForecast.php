<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DemandForecast extends Model
{
    protected $fillable = [
        'obat_id',
        'period_type',
        'lookback_days',
        'avg_daily_usage',
        'seasonality_factor',
        'forecast_quantity',
        'confidence_percentage',
        'forecast_start_date',
        'forecast_end_date',
    ];

    protected $casts = [
        'seasonality_factor' => 'decimal:2',
        'forecast_start_date' => 'date',
        'forecast_end_date' => 'date',
    ];

    public function obat(): BelongsTo
    {
        return $this->belongsTo(Obat::class, 'obat_id');
    }
}
