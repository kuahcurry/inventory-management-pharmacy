<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Validation\ValidationException;

class Hutang extends Model
{
    use HasFactory;

    protected $table = 'hutang';

    protected $fillable = [
        'transaksi_id',
        'supplier_id',
        'customer_name',
        'total_amount',
        'remaining_amount',
        'payment_status',
        'settled_at',
        'user_id',
    ];

    protected $casts = [
        'total_amount' => 'decimal:2',
        'remaining_amount' => 'decimal:2',
        'settled_at' => 'datetime',
    ];

    public function transaksi(): BelongsTo
    {
        return $this->belongsTo(Transaksi::class, 'transaksi_id');
    }

    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class, 'supplier_id');
    }

    public function payments(): HasMany
    {
        return $this->hasMany(HutangPayment::class, 'hutang_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function applyPayment(float $amount): void
    {
        if ($amount <= 0) {
            throw ValidationException::withMessages([
                'amount' => 'Nominal pembayaran harus lebih dari 0.',
            ]);
        }

        if ($amount > (float) $this->remaining_amount) {
            throw ValidationException::withMessages([
                'amount' => 'Nominal pembayaran melebihi sisa hutang.',
            ]);
        }

        $newRemaining = max(((float) $this->remaining_amount) - $amount, 0);

        $this->remaining_amount = $newRemaining;
        $this->payment_status = match (true) {
            $newRemaining == 0.0 => 'paid',
            $newRemaining < (float) $this->total_amount => 'partially_paid',
            default => 'unpaid',
        };
        $this->settled_at = $newRemaining == 0.0 ? now() : null;
        $this->save();
    }
}
