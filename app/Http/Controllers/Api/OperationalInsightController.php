<?php

namespace App\Http\Controllers\Api;

use App\Actions\BuildOperationalInsights;
use App\Http\Controllers\Controller;
use App\Models\ApprovalRequest;
use App\Models\BatchObat;
use App\Models\DemandForecast;
use App\Models\Obat;
use App\Models\ReorderSuggestion;
use App\Models\StockScanSession;
use App\Models\StockScanSessionItem;
use App\Services\HighRiskApprovalService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class OperationalInsightController extends Controller
{
    public function __construct(
        private BuildOperationalInsights $insights,
        private HighRiskApprovalService $highRiskApprovalService
    ) {}

    public function reorderSuggestions(Request $request)
    {
        $lookbackDays = (int) $request->get('lookback_days', 30);

        $created = DB::transaction(function () use ($lookbackDays) {
            return Obat::query()
                ->where('is_active', true)
                ->get()
                ->map(function (Obat $obat) use ($lookbackDays) {
                    $payload = $this->insights->buildReorderSuggestionForObat($obat, $lookbackDays);

                    return ReorderSuggestion::query()->create($payload);
                });
        });

        return response()->json([
            'summary' => [
                'generated' => $created->count(),
                'needs_reorder' => $created->where('suggested_order_qty', '>', 0)->count(),
            ],
            'data' => $created,
        ]);
    }

    public function forecasts(Request $request)
    {
        $periodType = (string) $request->get('period_type', 'weekly');

        $created = DB::transaction(function () use ($periodType) {
            return Obat::query()
                ->where('is_active', true)
                ->get()
                ->map(function (Obat $obat) use ($periodType) {
                    $payload = $this->insights->buildForecastForObat($obat, $periodType);

                    return DemandForecast::query()->create($payload);
                });
        });

        return response()->json([
            'summary' => [
                'generated' => $created->count(),
                'period_type' => $periodType,
            ],
            'data' => $created,
        ]);
    }

    public function checkInteractions(Request $request)
    {
        $validated = $request->validate([
            'obat_ids' => 'required|array|min:2',
            'obat_ids.*' => 'required|integer|exists:obat,id',
        ]);

        $interactions = $this->insights->checkDrugInteractions($validated['obat_ids']);

        return response()->json([
            'has_blocking' => $interactions->contains(fn ($item) => $item->isBlockingSeverity()),
            'data' => $interactions,
        ]);
    }

    public function approvalQueue()
    {
        $pending = ApprovalRequest::query()
            ->with(['obat:id,nama_obat,kode_obat', 'requestedBy:id,name'])
            ->where('status', 'pending')
            ->latest()
            ->paginate(20);

        return response()->json($pending);
    }

    public function approve(Request $request, ApprovalRequest $approval)
    {
        $validated = $request->validate([
            'status' => 'required|in:approved,rejected',
            'decision_note' => 'nullable|string',
        ]);

        $approval->update([
            'status' => $validated['status'],
            'decision_note' => $validated['decision_note'] ?? null,
            'approved_by' => auth()->id(),
            'approved_at' => now(),
        ]);

        if ($validated['status'] === 'approved') {
            $this->highRiskApprovalService->finalizeApprovedRequest($approval->fresh(), (int) auth()->id());
        } elseif ($validated['status'] === 'rejected' && $approval->transaksi_id) {
            $this->highRiskApprovalService->finalizeApprovedRequest($approval->fresh(), (int) auth()->id());
        }

        return response()->json([
            'message' => 'Approval request berhasil diproses.',
            'data' => $approval->fresh(),
        ]);
    }

    public function transactionAudit(int $transaksiId)
    {
        return response()->json([
            'data' => $this->insights->formatTransactionAudit($transaksiId),
        ]);
    }

    public function startStockScanSession()
    {
        $session = StockScanSession::query()->create([
            'user_id' => auth()->id(),
        ]);

        return response()->json([
            'message' => 'Sesi scan stok dimulai.',
            'data' => $session,
        ]);
    }

    public function scanStockSession(Request $request, StockScanSession $session)
    {
        if ($session->status !== 'in_progress') {
            throw ValidationException::withMessages([
                'session' => 'Sesi scan sudah selesai.',
            ]);
        }

        $validated = $request->validate([
            'codes' => 'required|array|min:1',
            'codes.*' => 'required|string',
        ]);

        $items = DB::transaction(function () use ($validated, $session) {
            $created = collect($validated['codes'])->map(function (string $code) use ($session) {
                $batch = BatchObat::query()->where('kode_qr', trim($code))->first();

                return StockScanSessionItem::query()->create([
                    'stock_scan_session_id' => $session->id,
                    'kode_qr' => trim($code),
                    'batch_id' => $batch?->id,
                    'is_match' => $batch !== null,
                    'scanned_at' => now(),
                ]);
            });

            $session->update([
                'total_scans' => (int) $session->items()->count(),
                'matched_scans' => (int) $session->items()->where('is_match', true)->count(),
                'unmatched_scans' => (int) $session->items()->where('is_match', false)->count(),
            ]);

            return $created;
        });

        return response()->json([
            'message' => 'Scan batch tersimpan.',
            'summary' => $session->fresh(),
            'data' => $items,
        ]);
    }

    public function completeStockScanSession(StockScanSession $session)
    {
        $session->update([
            'status' => 'completed',
            'completed_at' => now(),
            'total_scans' => (int) $session->items()->count(),
            'matched_scans' => (int) $session->items()->where('is_match', true)->count(),
            'unmatched_scans' => (int) $session->items()->where('is_match', false)->count(),
        ]);

        return response()->json([
            'message' => 'Sesi scan stok selesai.',
            'data' => $session->fresh(),
        ]);
    }

    public function margins()
    {
        return response()->json($this->insights->buildMarginSummary());
    }
}
