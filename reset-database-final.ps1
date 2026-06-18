# Final Database Reset Script for Pharmacy Inventory Management System

$ProjectPath = "C:\Users\aqefh\Documents\Projects\sim-apotek-skripshit"
$DatabasePath = "$ProjectPath\database\database.sqlite"
$BackupPath = "$ProjectPath\database\database.sqlite.backup"

Write-Host "=== Pharmacy Inventory Management System Database Reset ===" -ForegroundColor Yellow

# Step 1: Update .env to use SQLite
Write-Host "Updating .env configuration to use SQLite..." -ForegroundColor Cyan
$envContent = Get-Content "$ProjectPath\.env"
$envContent = $envContent -replace "DB_CONNECTION=mysql", "DB_CONNECTION=sqlite"
$envContent = $envContent -replace "DB_HOST=127\.0\.0\.1", ""
$envContent = $envContent -replace "DB_PORT=3306", ""
$envContent = $envContent -replace "DB_DATABASE=skripsi", ""
$envContent = $envContent -replace "DB_USERNAME=root", ""
$envContent = $envContent -replace "DB_PASSWORD=", ""
$envContent | Set-Content "$ProjectPath\.env"
Write-Host ".env configuration updated successfully." -ForegroundColor Green

# Step 2: Backup current database (optional)
if (Test-Path $DatabasePath) {
    Write-Host "Backing up current database..." -ForegroundColor Cyan
    Copy-Item $DatabasePath $BackupPath -Force
    Write-Host "Database backed up to: $BackupPath" -ForegroundColor Green
} else {
    Write-Host "No existing database found. Creating new database..." -ForegroundColor Yellow
}

# Step 3: Delete current database
if (Test-Path $DatabasePath) {
    Write-Host "Deleting current database..." -ForegroundColor Cyan
    Remove-Item $DatabasePath -Force
    Write-Host "Database deleted successfully." -ForegroundColor Green
}

# Step 4: Run migrations to recreate database structure
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

# Step 5: Run seeders to populate with fresh data
Write-Host "Running database seeders..." -ForegroundColor Cyan
try {
    Push-Location $ProjectPath
    
    # Run essential seeders
    php artisan db:seed --class=GolonganObatSeeder --force
    Write-Host "GolonganObatSeeder completed successfully." -ForegroundColor Green
    
    php artisan db:seed --class=PharmacyMasterDataSeeder --force
    Write-Host "PharmacyMasterDataSeeder completed successfully." -ForegroundColor Green
    
    php artisan db:seed --class=ObatSeeder --force
    Write-Host "ObatSeeder completed successfully." -ForegroundColor Green
    
    Pop-Location
} catch {
    Write-Host "Error running seeders: $_" -ForegroundColor Red
    exit 1
}

# Step 6: Verify database was created and populated
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
Write-Host "" -ForegroundColor White
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Run 'php artisan serve' to start the development server" -ForegroundColor White
Write-Host "2. Access the application at: http://localhost:8000" -ForegroundColor White
Write-Host "3. Use the login credentials: admin@pharmacy.local / password" -ForegroundColor White