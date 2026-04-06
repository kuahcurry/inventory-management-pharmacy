<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UnitRumahSakit;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UnitRumahSakitController extends Controller
{
    /**
     * Display a listing of unit rumah sakit.
     */
    public function index(Request $request): JsonResponse
    {
        $query = UnitRumahSakit::query();

        // Search
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                                $q->where('nama_unit', 'like', "%{$search}%")
                                    ->orWhere('kode_unit', 'like', "%{$search}%")
                  ->orWhere('lokasi', 'like', "%{$search}%")
                  ->orWhere('penanggung_jawab', 'like', "%{$search}%");
            });
        }

        // Filter by status
        if ($request->has('is_active')) {
            $query->where('is_active', $request->boolean('is_active'));
        }

        // Sorting
        $sortBy = $request->get('sort_by', 'nama_unit');
        if (! in_array($sortBy, ['nama_unit', 'kode_unit', 'lokasi', 'is_active', 'created_at'], true)) {
            $sortBy = 'nama_unit';
        }
        $sortOrder = $request->get('sort_order', 'asc');
        $query->orderBy($sortBy, $sortOrder);

        // Pagination
        $perPage = $request->get('per_page', 15);
        $units = $query->paginate($perPage);

        return response()->json($units);
    }

    /**
     * Get all active units for dropdown.
     */
    public function active(): JsonResponse
    {
        $units = UnitRumahSakit::where('is_active', true)
            ->orderBy('nama_unit')
            ->get(['id', 'kode_unit', 'nama_unit', 'lokasi']);

        return response()->json($units);
    }

    /**
     * Store a newly created unit.
     */
    public function store(Request $request): JsonResponse
    {
        $payload = [
            'kode_unit' => $request->input('kode_unit', $request->input('kode')),
            'nama_unit' => $request->input('nama_unit', $request->input('nama')),
            'lokasi' => $request->input('lokasi'),
            'penanggung_jawab' => $request->input('penanggung_jawab'),
            'no_telepon' => $request->input('no_telepon'),
            'is_active' => $request->boolean('is_active', true),
        ];

        $validator = Validator::make($payload, [
            'kode_unit' => 'required|string|max:10|unique:unit_rumah_sakit,kode_unit',
            'nama_unit' => 'required|string|max:100',
            'lokasi' => 'nullable|string|max:200',
            'penanggung_jawab' => 'nullable|string|max:100',
            'no_telepon' => 'nullable|string|max:20',
            'is_active' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $unit = UnitRumahSakit::create($validator->validated());

        return response()->json([
            'message' => 'Unit rumah sakit berhasil ditambahkan',
            'data' => $unit,
        ], 201);
    }

    /**
     * Display the specified unit.
     */
    public function show(UnitRumahSakit $unitRumahSakit): JsonResponse
    {
        return response()->json($unitRumahSakit);
    }

    /**
     * Update the specified unit.
     */
    public function update(Request $request, UnitRumahSakit $unitRumahSakit): JsonResponse
    {
        $payload = [
            'kode_unit' => $request->input('kode_unit', $request->input('kode')),
            'nama_unit' => $request->input('nama_unit', $request->input('nama')),
            'lokasi' => $request->input('lokasi'),
            'penanggung_jawab' => $request->input('penanggung_jawab'),
            'no_telepon' => $request->input('no_telepon'),
            'is_active' => $request->boolean('is_active', $unitRumahSakit->is_active),
        ];

        $validator = Validator::make($payload, [
            'kode_unit' => 'required|string|max:10|unique:unit_rumah_sakit,kode_unit,' . $unitRumahSakit->id,
            'nama_unit' => 'required|string|max:100',
            'lokasi' => 'nullable|string|max:200',
            'penanggung_jawab' => 'nullable|string|max:100',
            'no_telepon' => 'nullable|string|max:20',
            'is_active' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $unitRumahSakit->update($validator->validated());

        return response()->json([
            'message' => 'Unit rumah sakit berhasil diperbarui',
            'data' => $unitRumahSakit,
        ]);
    }

    /**
     * Remove the specified unit.
     */
    public function destroy(UnitRumahSakit $unitRumahSakit): JsonResponse
    {
        // Do not delete units that are referenced by transaction history.
        if ($unitRumahSakit->transaksi()->count() > 0) {
            return response()->json([
                'message' => 'Unit tidak dapat dihapus karena memiliki riwayat transaksi',
            ], 422);
        }

        $unitRumahSakit->delete();

        return response()->json([
            'message' => 'Unit rumah sakit berhasil dihapus',
        ]);
    }

    /**
     * Toggle active status.
     */
    public function toggleStatus(UnitRumahSakit $unitRumahSakit): JsonResponse
    {
        $unitRumahSakit->update([
            'is_active' => !$unitRumahSakit->is_active,
        ]);

        return response()->json([
            'message' => 'Status unit berhasil diubah',
            'data' => $unitRumahSakit,
        ]);
    }

    /**
     * Get unit statistics.
     */
    public function statistics(UnitRumahSakit $unitRumahSakit): JsonResponse
    {
        $stats = [
            'total_transaksi' => $unitRumahSakit->transaksi()->count(),
            'transaksi_masuk' => $unitRumahSakit->transaksi()->where('jenis_transaksi', 'masuk')->count(),
            'transaksi_keluar' => $unitRumahSakit->transaksi()->where('jenis_transaksi', 'keluar')->count(),
            'transaksi_penjualan' => $unitRumahSakit->transaksi()->where('jenis_transaksi', 'penjualan')->count(),
        ];

        return response()->json($stats);
    }
}
