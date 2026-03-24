<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Supplier;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SupplierController extends Controller
{
    /**
     * Display a listing of suppliers.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Supplier::withCount('batches');

        // Search
        if ($request->has('search')) {
                        $search = (string) $request->search;
            $query->where(function ($q) use ($search) {
                                $q->where('nama_supplier', 'like', "%{$search}%")
                                    ->orWhere('kode_supplier', 'like', "%{$search}%")
                  ->orWhere('alamat', 'like', "%{$search}%")
                  ->orWhere('kontak_person', 'like', "%{$search}%")
                  ->orWhere('no_telepon', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        // Filter by status
        if ($request->has('status')) {
            $status = $request->string('status')->toString();
            if (in_array($status, ['active', 'inactive'], true)) {
                $query->where('status', $status);
            }
        }

        // Sorting
        $sortBy = $request->get('sort_by', 'nama_supplier');
        $sortOrder = $request->get('sort_order', 'asc');
        $query->orderBy($sortBy, $sortOrder);

        // Pagination
        $perPage = $request->get('per_page', 15);
        $suppliers = $query->paginate($perPage);

        return response()->json($suppliers);
    }

    /**
     * Get all active suppliers for dropdown.
     */
    public function active(): JsonResponse
    {
        $suppliers = Supplier::where('status', 'active')
            ->orderBy('nama_supplier')
            ->get(['id', 'kode_supplier', 'nama_supplier', 'no_telepon']);

        return response()->json($suppliers);
    }

    public function search(Request $request): JsonResponse
    {
        $query = trim((string) $request->get('q', ''));
        $limit = max(1, min((int) $request->get('limit', 20), 50));

        if (mb_strlen($query) < 2) {
            return response()->json(['data' => []]);
        }

        $suppliers = Supplier::query()
            ->select(['id', 'kode_supplier', 'nama_supplier', 'no_telepon', 'status'])
            ->where(function ($q) use ($query) {
                $q->where('nama_supplier', 'like', "%{$query}%")
                    ->orWhere('kode_supplier', 'like', "%{$query}%");
            })
            ->orderByRaw('CASE WHEN nama_supplier LIKE ? THEN 0 ELSE 1 END', [$query.'%'])
            ->orderBy('nama_supplier')
            ->limit($limit)
            ->get();

        return response()->json(['data' => $suppliers]);
    }

    /**
     * Store a newly created supplier.
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'kode_supplier' => 'required|string|max:20|unique:supplier,kode_supplier',
            'nama_supplier' => 'required|string|max:200',
            'alamat' => 'required|string',
            'kontak_person' => 'required|string|max:100',
            'no_telepon' => 'required|string|max:20',
            'email' => 'nullable|email|max:100',
            'npwp' => 'nullable|string|max:30',
            'keterangan' => 'nullable|string',
            'status' => 'nullable|in:active,inactive',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $supplier = Supplier::create($validator->validated());

        return response()->json([
            'message' => 'Supplier berhasil ditambahkan',
            'data' => $supplier,
        ], 201);
    }

    /**
     * Display the specified supplier.
     */
    public function show(Supplier $supplier): JsonResponse
    {
        $supplier->loadCount('batches');
        $supplier->load([
            'batches' => function ($query) {
                $query->with('obat:id,nama_obat')
                    ->latest()
                    ->limit(10);
            },
        ]);

        return response()->json($supplier);
    }

    /**
     * Update the specified supplier.
     */
    public function update(Request $request, Supplier $supplier): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'kode_supplier' => 'required|string|max:20|unique:supplier,kode_supplier,' . $supplier->id,
            'nama_supplier' => 'required|string|max:200',
            'alamat' => 'required|string',
            'kontak_person' => 'required|string|max:100',
            'no_telepon' => 'required|string|max:20',
            'email' => 'nullable|email|max:100',
            'npwp' => 'nullable|string|max:30',
            'keterangan' => 'nullable|string',
            'status' => 'nullable|in:active,inactive',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $supplier->update($validator->validated());

        return response()->json([
            'message' => 'Supplier berhasil diperbarui',
            'data' => $supplier,
        ]);
    }

    /**
     * Remove the specified supplier.
     */
    public function destroy(Supplier $supplier): JsonResponse
    {
        // Check if supplier has batches
        if ($supplier->batches()->count() > 0) {
            return response()->json([
                'message' => 'Supplier tidak dapat dihapus karena memiliki riwayat pembelian',
            ], 422);
        }

        $supplier->delete();

        return response()->json([
            'message' => 'Supplier berhasil dihapus',
        ]);
    }

    /**
     * Toggle active status.
     */
    public function toggleStatus(Supplier $supplier): JsonResponse
    {
        $supplier->update([
            'status' => $supplier->status === 'active' ? 'inactive' : 'active',
        ]);

        return response()->json([
            'message' => 'Status supplier berhasil diubah',
            'data' => $supplier,
        ]);
    }

    /**
     * Get supplier statistics and purchase history.
     */
    public function statistics(Supplier $supplier): JsonResponse
    {
        $stats = [
            'total_batches' => $supplier->batches()->count(),
            'active_batches' => $supplier->batches()
                ->where('status', 'available')
                ->count(),
            'total_obat_types' => $supplier->batches()
                ->distinct('obat_id')
                ->count('obat_id'),
            'latest_purchase' => $supplier->batches()
                ->latest('tanggal_masuk')
                ->first(['tanggal_masuk', 'no_batch']),
        ];

        return response()->json($stats);
    }
}
