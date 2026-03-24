<?php

namespace App\Http\Controllers;

use App\Models\Hutang;
use App\Models\HutangPayment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class HutangController extends Controller
{
    public function index(Request $request): Response
    {
        $status = $request->string('status')->toString() ?: 'active';

        $query = Hutang::query()
            ->with(['transaksi.obat', 'payments'])
            ->latest('created_at');

        if ($status === 'active') {
            $query->whereIn('payment_status', ['unpaid', 'partially_paid']);
        } elseif (in_array($status, ['unpaid', 'partially_paid', 'paid'], true)) {
            $query->where('payment_status', $status);
        }

        $hutang = $query->paginate(20)->withQueryString();

        return Inertia::render('hutang/index', [
            'hutang' => $hutang,
            'filters' => [
                'status' => $status,
            ],
        ]);
    }

    public function pay(Request $request, Hutang $hutang): RedirectResponse
    {
        $validated = $request->validate([
            'confirmed' => 'required|accepted',
            'metode_pembayaran' => 'nullable|string|max:30',
            'keterangan' => 'nullable|string|max:1000',
        ]);

        DB::transaction(function () use ($hutang, $validated): void {
            $amount = (float) $hutang->remaining_amount;
            if ($amount <= 0) {
                return;
            }

            HutangPayment::query()->create([
                'hutang_id' => $hutang->id,
                'amount' => $amount,
                'paid_at' => now(),
                'metode_pembayaran' => $validated['metode_pembayaran'] ?? 'cash',
                'keterangan' => $validated['keterangan'] ?? 'Pelunasan penuh hutang.',
                'user_id' => auth()->id(),
            ]);

            $hutang->applyPayment($amount);

            $transaksi = $hutang->transaksi;
            if ($transaksi) {
                $transaksi->status_pelunasan = 'lunas';
                $transaksi->save();
            }
        });

        return back()->with('success', 'Hutang berhasil dilunasi.');
    }

    public function partialPay(Request $request, Hutang $hutang): RedirectResponse
    {
        $validated = $request->validate([
            'confirmed' => 'required|accepted',
            'amount' => 'required|numeric|min:1',
            'metode_pembayaran' => 'nullable|string|max:30',
            'keterangan' => 'nullable|string|max:1000',
        ]);

        DB::transaction(function () use ($hutang, $validated): void {
            $amount = (float) $validated['amount'];

            HutangPayment::query()->create([
                'hutang_id' => $hutang->id,
                'amount' => $amount,
                'paid_at' => now(),
                'metode_pembayaran' => $validated['metode_pembayaran'] ?? 'cash',
                'keterangan' => $validated['keterangan'] ?? 'Pembayaran parsial hutang.',
                'user_id' => auth()->id(),
            ]);

            $hutang->applyPayment($amount);

            $transaksi = $hutang->transaksi;
            if ($transaksi) {
                $transaksi->status_pelunasan = $hutang->payment_status === 'paid' ? 'lunas' : 'belum_lunas';
                $transaksi->save();
            }
        });

        return back()->with('success', 'Pembayaran hutang berhasil diproses.');
    }
}
