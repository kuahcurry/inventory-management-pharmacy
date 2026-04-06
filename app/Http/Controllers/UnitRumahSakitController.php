<?php

namespace App\Http\Controllers;

use App\Models\UnitRumahSakit;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class UnitRumahSakitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $units = UnitRumahSakit::query()
            ->orderBy('nama_unit')
            ->paginate(20);

        return Inertia::render('unit-rumah-sakit/index', [
            'units' => $units,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): RedirectResponse
    {
        return redirect()->route('unit-rumah-sakit.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'kode_unit' => 'required|string|max:10|unique:unit_rumah_sakit,kode_unit',
            'nama_unit' => 'required|string|max:100',
            'lokasi' => 'nullable|string|max:200',
            'penanggung_jawab' => 'nullable|string|max:100',
            'no_telepon' => 'nullable|string|max:20',
            'is_active' => 'nullable|boolean',
        ]);

        UnitRumahSakit::create([
            ...$validated,
            'is_active' => (bool) ($validated['is_active'] ?? true),
        ]);

        return redirect()->route('unit-rumah-sakit.index')
            ->with('success', 'Unit berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): RedirectResponse
    {
        return redirect()->route('unit-rumah-sakit.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): RedirectResponse
    {
        return redirect()->route('unit-rumah-sakit.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        $unit = UnitRumahSakit::findOrFail($id);

        $validated = $request->validate([
            'kode_unit' => 'required|string|max:10|unique:unit_rumah_sakit,kode_unit,'.$unit->id,
            'nama_unit' => 'required|string|max:100',
            'lokasi' => 'nullable|string|max:200',
            'penanggung_jawab' => 'nullable|string|max:100',
            'no_telepon' => 'nullable|string|max:20',
            'is_active' => 'nullable|boolean',
        ]);

        $unit->update([
            ...$validated,
            'is_active' => (bool) ($validated['is_active'] ?? $unit->is_active),
        ]);

        return redirect()->route('unit-rumah-sakit.index')
            ->with('success', 'Unit berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): RedirectResponse
    {
        $unit = UnitRumahSakit::findOrFail($id);

        if ($unit->transaksi()->exists()) {
            return redirect()->route('unit-rumah-sakit.index')
                ->with('error', 'Unit tidak dapat dihapus karena memiliki riwayat transaksi.');
        }

        $unit->delete();

        return redirect()->route('unit-rumah-sakit.index')
            ->with('success', 'Unit berhasil dihapus.');
    }
}
