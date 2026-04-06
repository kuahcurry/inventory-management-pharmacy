<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\LogAktivitas;
use App\Models\Notifikasi;
use App\Models\Resep;
use App\Models\ResepDetail;
use App\Services\PrescriptionLifecycleService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ResepController extends Controller
{
    public function __construct(private PrescriptionLifecycleService $prescriptionLifecycleService) {}

    /**
     * Display a listing of prescriptions
     */
    public function index(Request $request): JsonResponse
    {
        $perPage = $request->get('per_page', 15);
        $status = $request->get('status');
        $search = $request->get('search');

        $query = Resep::with(['processedBy', 'details.obat'])
            ->latest('tanggal_resep');

        if ($status) {
            $query->where('status', $status);
        }

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('nomor_resep', 'like', "%{$search}%")
                    ->orWhere('nomor_referensi', 'like', "%{$search}%")
                    ->orWhere('nama_pelanggan', 'like', "%{$search}%");
            });
        }

        $resep = $query->paginate($perPage);

        return response()->json($resep);
    }

    /**
     * Store a newly created prescription
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'nomor_referensi' => 'required|string|max:50',
            'nama_pelanggan' => 'required|string|max:200',
            'nama_dokter' => 'nullable|string|max:200',
            'tanggal_resep' => 'required|date',
            'kategori_pelanggan' => 'required|in:reguler,pelanggan_rutin,rujukan_dokter',
            'metode_pembayaran' => 'required|in:tunai_umum,non_tunai,asuransi_rekanan',
            'catatan' => 'nullable|string',
            'details' => 'required|array|min:1',
            'details.*.obat_id' => 'required|exists:obat,id',
            'details.*.jumlah' => 'required|integer|min:1',
            'details.*.dosis' => 'nullable|string',
            'details.*.aturan_pakai' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        return DB::transaction(function () use ($request) {
            // Create prescription
            $resep = Resep::create([
                'nomor_referensi' => $request->nomor_referensi,
                'nama_pelanggan' => $request->nama_pelanggan,
                'nama_dokter' => $request->nama_dokter,
                'unit_id' => null,
                'tanggal_resep' => $request->tanggal_resep,
                'kategori_pelanggan' => $request->kategori_pelanggan,
                'metode_pembayaran' => $request->metode_pembayaran,
                'catatan' => $request->catatan,
                'status' => Resep::STATUS_PENDING,
            ]);

            // Create prescription details
            foreach ($request->details as $detailData) {
                ResepDetail::create([
                    'resep_id' => $resep->id,
                    'obat_id' => $detailData['obat_id'],
                    'jumlah' => $detailData['jumlah'],
                    'dosis' => $detailData['dosis'] ?? null,
                    'aturan_pakai' => $detailData['aturan_pakai'] ?? null,
                    'catatan' => $detailData['catatan'] ?? null,
                ]);
            }

            LogAktivitas::log(
                auth()->user(),
                "Membuat resep baru: {$resep->nomor_resep} untuk pelanggan {$resep->nama_pelanggan}",
                'resep',
                LogAktivitas::AKSI_CREATE,
                $resep
            );

            return response()->json($resep->load(['details.obat']), 201);
        });
    }

    /**
     * Display the specified prescription
     */
    public function show(Resep $resep): JsonResponse
    {
        $resep->load(['details.obat', 'processedBy', 'transaksi']);
        
        return response()->json($resep);
    }

    /**
     * Get pending prescriptions
     */
    public function pending(Request $request): JsonResponse
    {
        $resep = Resep::with(['details.obat'])
            ->pending()
            ->latest('tanggal_resep')
            ->get();

        return response()->json($resep);
    }

    /**
     * Process prescription (dispense medicines)
     */
    public function process(Request $request, Resep $resep): JsonResponse
    {
        if (!$resep->isPending()) {
            return response()->json(['message' => 'Resep sudah diproses'], 400);
        }

        // Check stock availability
        foreach ($resep->details as $detail) {
            if ($detail->obat->stok_total < $detail->jumlah) {
                return response()->json([
                    'message' => "Stok tidak mencukupi untuk {$detail->obat->nama_obat}",
                    'available' => $detail->obat->stok_total,
                    'required' => $detail->jumlah,
                ], 400);
            }
        }

        $this->prescriptionLifecycleService->markAsProcessed($resep, auth()->id());

        LogAktivitas::log(
            auth()->user(),
            "Memproses resep: {$resep->nomor_resep}",
            'resep',
            LogAktivitas::AKSI_UPDATE,
            $resep
        );

        return response()->json([
            'message' => 'Resep siap untuk dispensing',
            'resep' => $resep->load(['details.obat']),
        ]);
    }

    /**
     * Mark prescription as completed
     */
    public function complete(Request $request, Resep $resep): JsonResponse
    {
        // Mark all details as dispensed
        $resep->details()->update(['is_dispensed' => true]);

        $this->prescriptionLifecycleService->completeIfFullyDispensed($resep, auth()->id());

        LogAktivitas::log(
            auth()->user(),
            "Menyelesaikan resep: {$resep->nomor_resep}",
            'resep',
            LogAktivitas::AKSI_UPDATE,
            $resep
        );

        return response()->json([
            'message' => 'Resep selesai',
            'resep' => $resep,
        ]);
    }
}
