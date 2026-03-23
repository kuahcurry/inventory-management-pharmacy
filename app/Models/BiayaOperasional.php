<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BiayaOperasional extends Model
{
    use HasFactory;

    protected $table = 'biaya_operasional';

    protected $fillable = [
        'tanggal_biaya',
        'kategori',
        'nominal',
        'keterangan',
        'metode_pembayaran',
        'kasir_nama',
        'user_id',
    ];

    protected $casts = [
        'tanggal_biaya' => 'date',
        'nominal' => 'decimal:2',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
