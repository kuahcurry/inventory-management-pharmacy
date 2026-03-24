<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class HutangPayment extends Model
{
    use HasFactory;

    protected $table = 'hutang_payments';

    protected $fillable = [
        'hutang_id',
        'amount',
        'paid_at',
        'metode_pembayaran',
        'keterangan',
        'user_id',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'paid_at' => 'datetime',
    ];

    public function hutang(): BelongsTo
    {
        return $this->belongsTo(Hutang::class, 'hutang_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
