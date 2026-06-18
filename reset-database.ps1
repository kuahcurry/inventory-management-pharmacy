# Reset Database Script for Pharmacy Inventory Management System
# This script will wipe all existing data and restore with fresh data

$ProjectPath = "C:\Users\aqefh\Documents\Projects\sim-apotek-skripshit"
$DatabasePath = "$ProjectPath\database\database.sqlite"
$BackupPath = "$ProjectPath\database\database.sqlite.backup"

Write-Host "=== Pharmacy Inventory Management System Database Reset ===" -ForegroundColor Yellow

# Step 1: Backup current database (optional)
if (Test-Path $DatabasePath) {
    Write-Host "Backing up current database..." -ForegroundColor Cyan
    Copy-Item $DatabasePath $BackupPath -Force
    Write-Host "Database backed up to: $BackupPath" -ForegroundColor Green
} else {
    Write-Host "No existing database found. Creating new database..." -ForegroundColor Yellow
}

# Step 2: Delete current database
if (Test-Path $DatabasePath) {
    Write-Host "Deleting current database..." -ForegroundColor Cyan
    Remove-Item $DatabasePath -Force
    Write-Host "Database deleted successfully." -ForegroundColor Green
}

# Step 3: Run migrations to recreate database structure
Write-Host "Running database migrations..." -ForegroundColor Cyan
try {
    Push-Location $ProjectPath
    php artisan migrate --force
    Write-Host "Migrations completed successfully." -ForegroundColor Green
    Pop-Location
} catch {
    Write-Host "Error running migrations: $_" -ForegroundColor Red
    exit 1
}

# Step 4: Run seeders to populate with fresh data
Write-Host "Running database seeders..." -ForegroundColor Cyan
try {
    Push-Location $ProjectPath
    
    # Run main database seeder
    php artisan db:seed --class=DatabaseSeeder --force
    Write-Host "DatabaseSeeder completed successfully." -ForegroundColor Green
    
    # Run master data seeder (includes obat, batch, etc.)
    php artisan db:seed --class=PharmacyMasterDataSeeder --force
    Write-Host "PharmacyMasterDataSeeder completed successfully." -ForegroundColor Green
    
    # Run other important seeders
    php artisan db:seed --class=ObatSeeder --force
    Write-Host "ObatSeeder completed successfully." -ForegroundColor Green
    
    php artisan db:seed --class=IndonesiaDrugWithBatchSeeder --force
    Write-Host "IndonesiaDrugWithBatchSeeder completed successfully." -ForegroundColor Green
    
    Pop-Location
} catch {
    Write-Host "Error running seeders: $_" -ForegroundError
    exit 1
}

# Step 5: Verify database was created and populated
if (Test-Path $DatabasePath) {
    $dbSize = (Get-Item $DatabasePath).Length
    Write-Host "Database created successfully. Size: $dbSize bytes" -ForegroundColor Green
    
    # Check if tables were created
    Push-Location $ProjectPath
    try {
        $tables = php artisan tinker --execute="\$tables = DB::select('SELECT name FROM sqlite_master WHERE type=\\'table\\' AND name NOT LIKE \\\"sqlite_%\\\" ORDER BY name'); echo collect($tables)->pluck('name')->implode(', ');"
        Write-Host "Tables created: $tables" -ForegroundColor Green
    } catch {
        Write-Host "Warning: Could not verify tables: $_" -ForegroundColor Yellow
    }
    Pop-Location
} else {
    Write-Host "ERROR: Database file was not created!" -ForegroundColor Red
    exit 1
}

Write-Host "" -ForegroundColor White
Write-Host "=== Database Reset Completed Successfully ===" -ForegroundColor Green
Write-Host "The pharmacy inventory management system has been reset with fresh data." -ForegroundColor White
Write-Host "You can now start working with a clean database." -ForegroundColor White
Write-Host "" -ForegroundColor White
Write-Host "Backup file location: $BackupPath" -ForegroundColor Cyan
Write-Host "If needed, you can restore the backup using: Copy-Item '$BackupPath' '$DatabasePath'" -ForegroundColor Gray