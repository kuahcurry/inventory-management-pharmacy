<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Hutang;
use App\Models\HutangPayment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HutangController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $status = $request->string('status')->toString();
        $supplierId = $request->integer('supplier_id');

        $query = Hutang::query()
            ->with(['transaksi.obat', 'supplier', 'payments'])
            ->latest('created_at');

        if (in_array($status, ['unpaid', 'partially_paid', 'paid'], true)) {
            $query->where('payment_status', $status);
        }

        if ($supplierId > 0) {
            $query->where('supplier_id', $supplierId);
        }

        return response()->json($query->paginate((int) $request->get('per_page', 20)));
    }

    public function pay(Request $request, Hutang $hutang): JsonResponse
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

        return response()->json([
            'message' => 'Hutang berhasil dilunasi.',
            'hutang' => $hutang->fresh(['transaksi', 'payments']),
        ]);
    }

    public function partialPay(Request $request, Hutang $hutang): JsonResponse
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

        return response()->json([
            'message' => 'Pembayaran parsial berhasil.',
            'hutang' => $hutang->fresh(['transaksi', 'payments']),
        ]);
    }
}
