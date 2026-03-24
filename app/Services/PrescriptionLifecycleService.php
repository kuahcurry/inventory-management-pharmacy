<?php

namespace App\Services;

use App\Models\Resep;

class PrescriptionLifecycleService
{
    /**
     * Mark prescription as processed and mark selected medicine details as dispensed.
     * If all details are dispensed, prescription is promoted to completed.
     *
     * @param  array<int>  $dispensedObatIds
     */
    public function markProcessedFromCheckout(?Resep $resep, array $dispensedObatIds, ?int $processedBy): void
    {
        if (! $resep) {
            return;
        }

        $userId = $processedBy;

        if ($resep->status === Resep::STATUS_PENDING) {
            $resep->update([
                'status' => Resep::STATUS_PROCESSED,
                'processed_by' => $userId,
                'processed_at' => now(),
            ]);
        } elseif (! $resep->processed_at && $userId) {
            $resep->update([
                'processed_by' => $userId,
                'processed_at' => now(),
            ]);
        }

        $ids = collect($dispensedObatIds)
            ->map(fn ($id) => (int) $id)
            ->filter()
            ->unique()
            ->values()
            ->all();

        if ($ids !== []) {
            $resep->details()
                ->whereIn('obat_id', $ids)
                ->update(['is_dispensed' => true]);
        }

        $this->completeIfFullyDispensed($resep, $userId);
    }

    public function markAsProcessed(Resep $resep, ?int $processedBy): void
    {
        if ($resep->status !== Resep::STATUS_PENDING && $resep->processed_at) {
            return;
        }

        $resep->update([
            'status' => $resep->status === Resep::STATUS_PENDING ? Resep::STATUS_PROCESSED : $resep->status,
            'processed_by' => $processedBy,
            'processed_at' => now(),
        ]);
    }

    public function completeIfFullyDispensed(Resep $resep, ?int $processedBy): void
    {
        $resep->refresh();

        if (! $resep->isFullyDispensed()) {
            return;
        }

        if ($resep->status === Resep::STATUS_COMPLETED) {
            return;
        }

        $resep->update([
            'status' => Resep::STATUS_COMPLETED,
            'processed_by' => $resep->processed_by ?? $processedBy,
            'processed_at' => $resep->processed_at ?? now(),
        ]);
    }
}
