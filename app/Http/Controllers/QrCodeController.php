<?php

namespace App\Http\Controllers;

use App\Models\BatchObat;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class QrCodeController extends Controller
{
    public function index(): Response
    {
        $batches = BatchObat::with(['obat:id,nama_obat,kode_obat'])
            ->where('status', 'active')
            ->where('stok_tersedia', '>', 0)
            ->orderBy('tanggal_expired')
            ->paginate(100);

        return Inertia::render('obat/qr/index', [
            'initialBatches' => $batches,
        ]);
    }

    public function analytics(): Response
    {
        return Inertia::render('obat/qr/analytics');
    }
}
