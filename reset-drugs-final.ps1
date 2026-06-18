# Final Drug Reset Script for Pharmacy Inventory Management System

$ProjectPath = "C:\Users\aqefh\Documents\Projects\sim-apotek-skripshit"
$DatabasePath = "$ProjectPath\database\database.sqlite"

Write-Host "=== Pharmacy Inventory Management System Drug Reset ===" -ForegroundColor Yellow

# Check if database exists
if (-not (Test-Path $DatabasePath)) {
    Write-Host "Database tidak ditemukan. Membuat database baru..." -ForegroundColor Yellow
    # Run migrations to create database
    Push-Location $ProjectPath
    try {
        php artisan migrate --force
        Write-Host "Migrations completed successfully." -ForegroundColor Green
    } catch {
        Write-Host "Error running migrations: $_" -ForegroundColor Red
        exit 1
    }
    Pop-Location
}

# Clear existing drugs
Write-Host "Menghapus semua obat yang ada..." -ForegroundColor Cyan
Push-Location $ProjectPath
try {
    $result = php artisan tinker --execute="
        DB::table('obat')->delete();
        echo 'Berhasil menghapus ' + DB::table('obat')->count() + ' baris dari tabel obat';
    "
    Write-Host $result -ForegroundColor Green
} catch {
    Write-Host "Error deleting drugs: $_" -ForegroundColor Red
    Pop-Location
    exit 1
}
Pop-Location

# Insert new drugs using Laravel seeders
Write-Host "Menginsert 37 obat baru menggunakan seeder..." -ForegroundColor Cyan
Push-Location $ProjectPath
try {
    # Run the ObatSeeder to insert drugs
    php artisan db:seed --class=ObatSeeder --force
    Write-Host "✅ ObatSeeder completed successfully." -ForegroundColor Green
    
    # Run IndonesiaDrugWithBatchSeeder for additional drugs
    php artisan db:seed --class=IndonesiaDrugWithBatchSeeder --force
    Write-Host "✅ IndonesiaDrugWithBatchSeeder completed successfully." -ForegroundColor Green
    
    Pop-Location
} catch {
    Write-Host "Error running seeders: $_" -ForegroundColor Red
    Pop-Location
    exit 1
}

# Verify drugs were inserted
Write-Host "Memverifikasi obat yang diinsert..." -ForegroundColor Cyan
Push-Location $ProjectPath
try {
    $result = php artisan tinker --execute="
        \$count = DB::table('obat')->count();
        echo 'Total obat: ' + \$count;
        if (\$count > 0) {
            echo 'Daftar 5 obat pertama:';
            DB::table('obat')->limit(5)->get(['kode_obat', 'nama_obat', 'nama_generik'])->each(function(\$drug) {
                echo '  - ' + \$drug->kode_obat + ': ' + \$drug->nama_obat + ' (' + \$drug->nama_generik + ')';
            });
        }
    "
    Write-Host $result -ForegroundColor Green
} catch {
    Write-Host "Error verifying drugs: $_" -ForegroundColor Red
    Pop-Location
    exit 1
}
Pop-Location

Write-Host "" -ForegroundColor White
Write-Host "=== Drug Reset Completed Successfully ===" -ForegroundColor Green
Write-Host "The pharmacy inventory management system has been reset with fresh drug data." -ForegroundColor White
Write-Host "You can now start working with a clean database." -ForegroundColor White
Write-Host "" -ForegroundColor White
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Run 'php artisan serve' to start the development server" -ForegroundColor White
Write-Host "2. Access the application at: http://localhost:8000" -ForegroundColor White
Write-Host "3. Use the login credentials: admin@pharmacy.local / password" -ForegroundColor White