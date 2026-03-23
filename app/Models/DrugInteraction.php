<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DrugInteraction extends Model
{
    protected $fillable = [
        'obat_id',
        'interacts_with_obat_id',
        'severity',
        'effect_description',
        'recommendation',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function obat(): BelongsTo
    {
        return $this->belongsTo(Obat::class, 'obat_id');
    }

    public function interactsWith(): BelongsTo
    {
        return $this->belongsTo(Obat::class, 'interacts_with_obat_id');
    }

    public function isBlockingSeverity(): bool
    {
        return in_array($this->severity, ['high', 'critical'], true);
    }
}
