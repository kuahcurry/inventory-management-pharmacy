<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class GolonganObat extends Model
{
    protected $table = 'golongan_obat';

    protected $fillable = [
        'nama_golongan',
        'kode',
        'deskripsi',
        'butuh_resep',
    ];

    protected $casts = [
        'butuh_resep' => 'boolean',
    ];

    /**
     * Get all drugs in this golongan
     */
    public function obat(): HasMany
    {
        return $this->hasMany(Obat::class, 'golongan_id');
    }

    /**
     * Scope for prescription-required golongan
     */
    public function scopeButuhResep($query)
    {
        return $query->where('butuh_resep', true);
    }
}
