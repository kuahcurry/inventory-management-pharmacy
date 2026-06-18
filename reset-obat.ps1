# Reset Obat Script for Pharmacy Inventory Management System
# This script will clear all existing drugs and insert 37 new drugs

$ProjectPath = "C:\Users\aqefh\Documents\Projects\sim-apotek-skripshit"
$DatabasePath = "$ProjectPath\database\database.sqlite"

Write-Host "=== Pharmacy Inventory Management System Obat Reset ===" -ForegroundColor Yellow

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

# Insert new drugs
Write-Host "Menginsert 37 obat baru..." -ForegroundColor Cyan
Push-Location $ProjectPath
try {
    # Define the 37 drugs
    $drugs = @(
        # Fever & Pain Relievers
        @{kode='OBT-001'; nama='Paracetamol 500mg Tablet'; generik='Paracetamol'; brand='Panadol'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=50; harga_beli=8000; harga_jual=12000; lokasi='Rak A-1'; deskripsi='Obat penurun demam dan pereda nyeri ringan hingga sedang'; indikasi='Demam, sakit kepala, nyeri otot, sakit gigi'; efek_samping='Umum, jarang menyebabkan efek samping pada dosis normal'; kontra='Hipersensitif terhadap paracetamol, gangguan hati berat'},
        @{kode='OBT-002'; nama='Ibuprofen 400mg Tablet'; generik='Ibuprofen'; brand='Motrin'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=40; harga_beli=12000; harga_jual=18000; lokasi='Rak A-2'; deskripsi='Obat antiinflamasi non-steroid untuk nyeri ringan hingga sedang'; indikasi='Nyeri, demam, peradangan, sakit gigi'; efek_samping='Gangguan pencernaan, sakit maag, pusing'; kontra='Hipersensitif terhadap ibuprofen, gangguan tukak lambung'},
        @{kode='OBT-003'; nama='Mefenamic Acid 500mg Tablet'; generik='Mefenamic Acid'; brand='Ponstan'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=30; harga_beli=15000; harga_jual=23000; lokasi='Rak A-3'; deskripsi='Obat antiinflamasi non-steroid untuk nyeri menstruasi dan nyeri lainnya'; indikasi='Nyeri haid, nyeri otot, sakit kepala'; efek_samping='Gangguan pencernaan, sakit maag, risiko perdarahan'; kontra='Hipersensitif terhadap NSAIDs, gangguan tukak lambung'},
        @{kode='OBT-004'; nama='Acetaminophen 650mg Tablet'; generik='Acetaminophen'; brand='Tylenol'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=60; harga_beli=10000; harga_jual=15000; lokasi='Rak A-4'; deskripsi='Obat pereda demam dan nyeri yang lebih aman untuk lambung'; indikasi='Demam, sakit kepala, nyeri ringan'; efek_samping='Biasanya aman, sesekali gangguan hati pada dosis sangat tinggi'; kontra='Hipersensitif terhadap acetaminophen'},

        # Cough & Cold Remedies
        @{kode='OBT-005'; nama='Dextromethorphan Syrup 100mg/5mL'; generik='Dextromethorphan'; brand='Siladex'; kategori=2; golongan=1; jenis=2; satuan=2; stok_min=25; harga_beli=15000; harga_jual=25000; lokasi='Rak B-1'; deskripsi='Obat batuk berdahak untuk meredakan batuk kering'; indikasi='Batuk kering, iritasi tenggorokan'; efek_samping='Biasanya aman, dapat menyebabkan kantuk'; kontra='Hipersensitif terhadap dekstrometorfan, anak-anak di bawah 6 tahun'},
        @{kode='OBT-006'; nama='Guaifenesin Syrup 100mg/5mL'; generik='Guaifenesin'; brand='Bisolvom'; kategori=2; golongan=1; jenis=2; satuan=2; stok_min=30; harga_beli=18000; harga_jual=30000; lokasi='Rak B-2'; deskripsi='Obat batuk berdahak untuk mengencerkan dahak'; indikasi='Batuk berdahak, sesak napas'; efek_samping='Biasanya aman, dapat menyebabkan gangguan pencernaan'; kontra='Hipersensitif terhadap guaifenesin'},
        @{kode='OBT-007'; nama='Chlorpheniramine Maleate Tablet 4mg'; generik='Chlorpheniramine'; brand='CTM'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=20; harga_beli=8000; harga_jual=14000; lokasi='Rak B-3'; deskripsi='Antihistamin untuk alergi dan batuk pilek'; indikasi='Alergi, pilek, bersin'; efek_samping='Dapat menyebabkan kantuk, mulut kering'; kontra='Hipersensitif terhadap chlorpheniramine, anak-anak di bawah 12 tahun'},
        @{kode='OBT-008'; nama='Triaminic Tablet'; generik='Triaminic'; brand='Triaminic'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=15; harga_beli=12000; harga_jual=20000; lokasi='Rak B-4'; deskripsi='Obat batuk pilek dan demam kombinasi'; indikasi='Batuk pilek, demam, bersin'; efek_samping='Dapat menyebabkan kantuk, mulut kering'; kontra='Hipersensitif terhadap komponen kombinasi'},

        # Digestive System Drugs
        @{kode='OBT-009'; nama='Omeprazole 20mg Tablet'; generik='Omeprazole'; brand='Prilosec'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=15; harga_beli=25000; harga_jual=45000; lokasi='Rak C-1'; deskripsi='Obat penghambat pompa proton untuk masalah asam lambung'; indikasi='Maag, GERD, tukak lambung'; efek_samping='Dapat menyebabkan sakit kepala, diare'; kontra='Hipersensitif terhadap omeprazole, gangguan hati berat'},
        @{kode='OBT-010'; nama='Ranitidine 150mg Tablet'; generik='Ranitidine'; brand='Zantac'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=20; harga_beli=20000; harga_jual=38000; lokasi='Rak C-2'; deskripsi='Obat antagonis H2 untuk masalah asam lambung'; indikasi='Maag, tukak lambung'; efek_samping='Dapat menyebabkan sakit kepala, diare'; kontra='Hipersensitif terhadap ranitidine, gangguan hati berat'},
        @{kode='OBT-011'; nama='Loperamide 2mg Tablet'; generik='Loperamide'; brand='Imodium'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=25; harga_beli=10000; harga_jual=18000; lokasi='Rak C-3'; deskripsi='Obat antidiare untuk diare akut'; indikasi='Diare akut, diare kronis'; efek_samping='Dapat menyebabkan sembelit, perut tidak nyaman'; kontra='Hipersensitif terhadap loperamide, diare berdarah'},

        # Common Oral Antibiotics (Prescription Drugs)
        @{kode='OBT-012'; nama='Amoxicillin 500mg Capsule'; generik='Amoxicillin'; brand='Amoxsan'; kategori=2; golongan=2; jenis=1; satuan=1; stok_min=10; harga_beli=50000; harga_jual=90000; lokasi='Rak D-1'; deskripsi='Antibiotik penisilin broad-spectrum'; indikasi='Infeksi bakteri pernapasan, infeksi kulit, infeksi saluran kemih'; efek_samping='Diare, mual, reaksi alergi'; kontra='Hipersensitif terhadap penisilin, gangguan fungsi ginjal'},
        @{kode='OBT-013'; nama='Ciprofloxacin 500mg Tablet'; generik='Ciprofloxacin'; brand='Cytotec'; kategori=2; golongan=2; jenis=1; satuan=1; stok_min=8; harga_beli=120000; harga_jual=180000; lokasi='Rak D-2'; deskripsi='Antibiotik fluoroquinolone broad-spectrum'; indikasi='Infeksi saluran kemih, pneumonia, infeksi kulit'; efek_samping='Gangguan tendon, gangguan CNS, tendinitis'; kontra='Hipersensitif terhadap fluoroquinolon, gangguan fungsi ginjal'},
        @{kode='OBT-014'; nama='Cefalexin 500mg Capsule'; generik='Cefalexin'; brand='Ceporex'; kategori=2; golongan=2; jenis=1; satuan=1; stok_min=12; harga_beli=80000; harga_jual=140000; lokasi='Rak D-3'; deskripsi='Antibiotik penisilin untuk infeksi ringan'; indikasi='Infeksi kulit, saluran kemih'; efek_samping='Diare, reaksi alergi'; kontra='Hipersensitif terhadap penisilin'},
        @{kode='OBT-015'; nama='Azithromycin 500mg Tablet'; generik='Azithromycin'; brand='Zithromax'; kategori=2; golongan=2; jenis=1; satuan=1; stok_min=10; harga_beli=100000; harga_jual=180000; lokasi='Rak D-4'; deskripsi='Antibiotik makrolida broad-spectrum'; indikasi='Infeksi pernapasan, infeksi kulit, ISK'; efek_samping='Gangguan pencernaan, reaksi alergi'; kontra='Hipersensitif terhadap makrolida, gangguan fungsi hati'},

        # Cardiovascular Drugs
        @{kode='OBT-016'; nama='Amlodipine 5mg Tablet'; generik='Amlodipine'; brand='Norvasc'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=12; harga_beli=35000; harga_jual=65000; lokasi='Rak E-1'; deskripsi='Kalsium kanal blocker untuk hipertensi'; indikasi='Hipertensi, angina'; efek_samping='Sakit kepala, pusing, edema perifer'; kontra='Hipersensitif terhadap amlodipine, obstruksi outflow aorta'},
        @{kode='OBT-017'; nama='Captopril 25mg Tablet'; generik='Captopril'; brand='Tenalapril'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=15; harga_beli=40000; harga_jual=75000; lokasi='Rak E-2'; deskripsi='Inhibitor ACE untuk hipertensi dan gagal jantung'; indikasi='Hipertensi, gagal jantung kongestif'; efek_samping='Batuk kering, hipotensi, hiperkalemia'; kontra='Hipersensitif terhadap ACE inhibitor, kehamilan'},

        # Antidiabetic Drugs
        @{kode='OBT-018'; nama='Metformin 500mg Tablet'; generik='Metformin'; brand='Glucophage'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=20; harga_beli=60000; harga_jual=110000; lokasi='Rak F-1'; deskripsi='Biguanide oral untuk diabetes mellitus tipe 2'; indikasi='Diabetes mellitus tipe 2, resistensi insulin'; efek_samping='Gangguan pencernaan, diare, gangguan hati'; kontra='Hipersensitif terhadap metformin, gangguan fungsi ginjal'},
        @{kode='OBT-019'; nama='Glimepiride 2mg Tablet'; generik='Glimepiride'; brand='Amaryl'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=10; harga_beli=70000; harga_jual=130000; lokasi='Rak F-2'; deskripsi='Sulfonilurea oral untuk diabetes mellitus tipe 2'; indikasi='Diabetes mellitus tipe 2'; efek_samping='Hipoglikemia, gangguan pencernaan, alergi kulit'; kontra='Hipersensitif terhadap sulfonilurea, gangguan fungsi ginjal'},

        # Vitamins and Supplements
        @{kode='OBT-020'; nama='Vitamin C 500mg Tablet'; generik='Vitamin C'; brand='Cevit'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=60; harga_beli=20000; harga_jual=35000; lokasi='Rak G-1'; deskripsi='Vitamin C untuk daya tahan tubuh dan antioksidan'; indikasi='Kekurangan vitamin C, daya tahan tubuh lemah'; efek_samping='Biasanya aman, dapat menyebabkan diare pada dosis tinggi'; kontra='Hipersensitif terhadap vitamin C, gangguan ginjal'},
        @{kode='OBT-021'; nama='Vitamin B Complex Tablet'; generik='Vitamin B Complex'; brand='Bionorm'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=50; harga_beli=25000; harga_jual=45000; lokasi='Rak G-2'; deskripsi='Kompleks vitamin B untuk metabolisme energi'; indikasi='Kelelahan, kekurangan vitamin B'; efek_samping='Biasanya aman, urin berwarna kuning'; kontra='Hipersensitif terhadap vitamin B'},

        # Topical Medications
        @{kode='OBT-022'; nama='Betamethasone Dipropionate 0.05% Cream'; generik='Betamethasone'; brand='Dermofen'; kategori=2; golongan=1; jenis=3; satuan=3; stok_min=8; harga_beli=40000; harga_jual=80000; lokasi='Rak H-1'; deskripsi='Kortikosteroid topikal untuk peradangan kulit'; indikasi='Ruam kulit, dermatitis, eksem'; efek_samping='Atrofi kulit, hiperpigmentasi'; kontra='Hipersensitif terhadap kortikosteroid, infeksi kulit bakteri/virus'},
        @{kode='OBT-023'; nama='Clotrimazole 1% Cream'; generik='Clotrimazole'; brand='Canesten'; kategori=2; golongan=1; jenis=3; satuan=3; stok_min=10; harga_beli=30000; harga_jual=60000; lokasi='Rak H-2'; deskripsi='Antijamur topikal untuk infeksi jamur kulit'; indikasi='Infeksi jamur kaki, kurap, panu'; efek_samping='Iritasi kulit, reaksi alergi'; kontra='Hipersensitif terhadap clotrimazole'},

        # Additional Essential Drugs
        @{kode='OBT-024'; nama='Cetirizine 10mg Tablet'; generik='Cetirizine'; brand='Reactine'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=15; harga_beli=35000; harga_jual=60000; lokasi='Rak I-1'; deskripsi='Antihistamin H1 non-sedating untuk alergi'; indikasi='Alergi, urtikaria, angioedema'; efek_samping='Dapat menyebabkan kantuk, mulut kering'; kontra='Hipersensitif terhadap cetirizine, anak-anak di bawah 6 tahun'},
        @{kode='OBT-025'; nama='Loratadine 10mg Tablet'; generik='Loratadine'; brand='Claritin'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=20; harga_beli=40000; harga_jual=70000; lokasi='Rak I-2'; deskripsi='Antihistamin H1 non-sedating untuk alergi'; indikasi='Alergi, urtikaria'; efek_samping='Biasanya aman, dapat menyebabkan sakit kepala'; kontra='Hipersensitif terhadap loratadine'},
        @{kode='OBT-026'; nama='Salbutamol Inhaler 100mcg'; generik='Salbutamol'; brand='Ventolin'; kategori=2; golongan=1; jenis=4; satuan=4; stok_min=5; harga_beli=150000; harga_jual=250000; lokasi='Rak J-1'; deskripsi='Bronkodilator beta-2 agonis untuk asma'; indikasi='Asma, bronkitis kronis'; efek_samping='Tremor, sakit kepala'; kontra='Hipersensitif terhadap salbutamol'},
        @{kode='OBT-027'; nama='Salbutamol Inhaler 200mcg'; generik='Salbutamol'; brand='Ventolin'; kategori=2; golongan=1; jenis=4; satuan=4; stok_min=3; harga_beli=200000; harga_jual=350000; lokasi='Rak J-2'; deskripsi='Bronkodilator beta-2 agonis untuk asma'; indikasi='Asma, bronkitis kronis'; efek_samping='Tremor, sakit kepala'; kontra='Hipersensitif terhadap salbutamol'},
        @{kode='OBT-028'; nama='Alprazolam 0.5mg Tablet'; generik='Alprazolam'; brand='Xanax'; kategori=2; golongan=2; jenis=1; satuan=1; stok_min=5; harga_beli=80000; harga_jual=150000; lokasi='Rak K-1'; deskripsi='Benzodiazepin untuk kecemasan dan insomnia'; indikasi='Gangguan cemas, insomnia'; efek_samping='Kantuk, pusing, ketergantungan'; kontra='Hipersensitif terhadap alprazolam, gangguan fungsi hati'},
        @{kode='OBT-029'; nama='Diazepam 5mg Tablet'; generik='Diazepam'; brand='Valium'; kategori=2; golongan=2; jenis=1; satuan=1; stok_min=3; harga_beli=100000; harga_jual=180000; lokasi='Rak K-2'; deskripsi='Benzodiazepin untuk kecemasan, relaksan otot'; indikasi='Gangguan cemas, kejang otot'; efek_samping='Kantuk, pusing, ketergantungan'; kontra='Hipersensitif terhadap diazepam, gangguan fungsi hati'},
        @{kode='OBT-030'; nama='Simvastatin 20mg Tablet'; generik='Simvastatin'; brand='Zocor'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=8; harga_beli=120000; harga_jual=220000; lokasi='Rak L-1'; deskripsi='Statin untuk menurunkan kolesterol'; indikasi='Hipertensi, hiperlipidemia'; efek_samping='Nyeri otot, gangguan hati'; kontra='Hipersensitif terhadap statin, gangguan fungsi hati'},
        @{kode='OBT-031'; nama='Atorvastatin 10mg Tablet'; generik='Atorvastatin'; brand='Lipitor'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=6; harga_beli=140000; harga_jual=260000; lokasi='Rak L-2'; deskripsi='Statin untuk menurunkan kolesterol'; indikasi='Hipertensi, hiperlipidemia'; efek_samping='Nyeri otot, gangguan hati'; kontra='Hipersensitif terhadap statin, gangguan fungsi hati'},
        @{kode='OBT-032'; nama='Montelukast 10mg Tablet'; generik='Montelukast'; brand='Singulair'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=8; harga_beli=90000; harga_jual=160000; lokasi='Rak M-1'; deskripsi='Antagonis leukotriena untuk asma'; indikasi='Asma, alergi pernapasan'; efek_samping='Sakit perut, diare'; kontra='Hipersensitif terhadap montelukast'},
        @{kode='OBT-033'; nama='Prednisone 5mg Tablet'; generik='Prednisone'; brand='Deltasone'; kategori=2; golongan=2; jenis=1; satuan=1; stok_min=5; harga_beli=60000; harga_jual=110000; lokasi='Rak N-1'; deskripsi='Kortikosteroid sistemik untuk peradangan'; indikasi='Peradangan, alergi, asma'; efek_samping='Kenaikan berat badan, gangguan tidur'; kontra='Hipersensitif terhadap kortikosteroid, infeksi sistemik'},
        @{kode='OBT-034'; nama='Metronidazole 500mg Tablet'; generik='Metronidazole'; brand='Flagyl'; kategori=2; golongan=2; jenis=1; satuan=1; stok_min=10; harga_beli=40000; harga_jual=75000; lokasi='Rak N-2'; deskripsi='Antibiotik nitroimidazole untuk infeksi'; indikasi='Infeksi bakteri anaerob, trikomoniasis'; efek_samping='Gangguan pencernaan, metalik dalam mulut'; kontra='Hipersensitif terhadap metronidazol'},
        @{kode='OBT-035'; nama='Furosemide 40mg Tablet'; generik='Furosemide'; brand='Lasix'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=6; harga_beli=80000; harga_jual=140000; lokasi='Rak O-1'; deskripsi='Diuret loop untuk hipertensi dan edema'; indikasi='Hipertensi, edema, gagal jantung'; efek_samping='Dehidrasi, pusing, hipokalemia'; kontra='Hipersensitif terhadap furosemide, gangguan fungsi ginjal'},
        @{kode='OBT-036'; nama='Ranitidine 150mg Tablet'; generik='Ranitidine'; brand='Zantac'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=20; harga_beli=25000; harga_jual=45000; lokasi='Rak P-1'; deskripsi='Antagonis H2 untuk masalah asam lambung'; indikasi='Maag, tukak lambung'; efek_samping='Sakit kepala, diare'; kontra='Hipersensitif terhadap ranitidine, gangguan hati berat'},
        @{kode='OBT-037'; nama='Famotidine 20mg Tablet'; generik='Famotidine'; brand='Pepcid'; kategori=2; golongan=1; jenis=1; satuan=1; stok_min=15; harga_beli=30000; harga_jual=55000; lokasi='Rak P-2'; deskripsi='Antagonis H2 untuk masalah asam lambung'; indikasi='Maag, GERD'; efek_samping='Sakit kepala, diare'; kontra='Hipersensitif terhadap famotidine, gangguan hati berat'},
    )

    # Hapus data yang ada terlebih dahulu
    $result = php artisan tinker --execute="
        DB::table('obat')->delete();
        echo 'Berhasil menghapus ' + DB::table('obat')->count() + ' baris dari tabel obat';
    "
    Write-Host $result -ForegroundColor Green

    # Insert data baru
    $sql = "INSERT INTO `obat` (`kode_obat`, `nama_obat`, `nama_generik`, `nama_brand`, `kategori_id`, `golongan_id`, `jenis_id`, `satuan_id`, `stok_minimum`, `harga_beli`, `harga_jual`, `lokasi_penyimpanan`, `deskripsi`, `indikasi`, `efek_samping`, `kontraindikasi`) VALUES "
    
    $valuesList = @()
    foreach ($drug in $drugs) {
        $values = "'$($drug.kode)', '$($drug.nama)', '$($drug.generik)', '$($drug.brand)', " +
                  "$($drug.kategori), $($drug.golongan), $($drug.jenis), $($drug.satuan), " +
                  "$($drug.stok_min), $($drug.harga_beli), $($drug.harga_jual), '$($drug.lokasi)', " +
                  "'$($drug.deskripsi)', '$($drug.indikasi)', '$($drug.efek_samping)', '$($drug.kontra)'"
        $valuesList += "($values)"
    }
    
    $sql += $valuesList -join ", "
    
    try {
        $result = php artisan tinker --execute="$sql"
        Write-Host "✅ Berhasil menginsert $($drugs.Count) obat baru ke tabel obat" -ForegroundColor Green
    } catch {
        Write-Host "Error inserting drugs: $_" -ForegroundColor Red
        exit 1
    }
}

Pop-Location

Write-Host "" -ForegroundColor White
Write-Host "=== Obat Reset Completed Successfully ===" -ForegroundRole Green
Write-Host "The pharmacy inventory management system has been reset with fresh data." -ForegroundColor White
Write-Host "You can now start working with a clean database." -ForegroundColor White
Write-Host "" -ForegroundColor White
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Run 'php artisan serve' to start the development server" -ForegroundColor White
Write-Host "2. Access the application at: http://localhost:8000" -ForegroundColor White
Write-Host "3. Use the login credentials: admin@pharmacy.local / password" -ForegroundColor White