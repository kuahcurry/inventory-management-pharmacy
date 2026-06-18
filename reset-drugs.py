#!/usr/bin/env python3
"""
Script untuk menghapus dan menginsert obat dengan benar
"""

import sqlite3
import os

# Database path
project_path = "C:\\Users\\aqefh\\Documents\\Projects\\sim-apotek-skripshit"
database_path = os.path.join(project_path, "database", "database.sqlite")

print("=== Pharmacy Inventory Management System Drug Reset ===")

# Check if database exists
if os.path.exists(database_path):
    print(f"Database ditemukan: {database_path}")
    
    # Connect to database
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()
    
    # Clear existing drugs
    print("Menghapus semua obat yang ada...")
    cursor.execute("DELETE FROM obat")
    conn.commit()
    deleted_count = cursor.rowcount
    print(f"✅ Berhasil menghapus {deleted_count} baris dari tabel obat")
    
    # Define the 37 drugs
    drugs = [
        # Fever & Pain Relievers
        ('OBT-001', 'Paracetamol 500mg Tablet', 'Paracetamol', 'Panadol', 2, 1, 1, 1, 50, 8000, 12000, 'Rak A-1', 'Obat penurun demam dan pereda nyeri ringan hingga sedang', 'Demam, sakit kepala, nyeri otot, sakit gigi', 'Umum, jarang menyebabkan efek samping pada dosis normal', 'Hipersensitif terhadap paracetamol, gangguan hati berat'),
        ('OBT-002', 'Ibuprofen 400mg Tablet', 'Ibuprofen', 'Motrin', 2, 1, 1, 1, 40, 12000, 18000, 'Rak A-2', 'Obat antiinflamasi non-steroid untuk nyeri ringan hingga sedang', 'Nyeri, demam, peradangan, sakit gigi', 'Gangguan pencernaan, sakit maag, pusing', 'Hipersensitif terhadap ibuprofen, gangguan tukak lambung'),
        ('OBT-003', 'Mefenamic Acid 500mg Tablet', 'Mefenamic Acid', 'Ponstan', 2, 1, 1, 1, 30, 15000, 23000, 'Rak A-3', 'Obat antiinflamasi non-steroid untuk nyeri menstruasi dan nyeri lainnya', 'Nyeri haid, nyeri otot, sakit kepala', 'Gangguan pencernaan, sakit maag, risiko perdarahan', 'Hipersensitif terhadap NSAIDs, gangguan tukak lambung'),
        ('OBT-004', 'Acetaminophen 650mg Tablet', 'Acetaminophen', 'Tylenol', 2, 1, 1, 1, 60, 10000, 15000, 'Rak A-4', 'Obat pereda demam dan nyeri yang lebih aman untuk lambung', 'Demam, sakit kepala, nyeri ringan', 'Biasanya aman, sesekali gangguan hati pada dosis sangat tinggi', 'Hipersensitif terhadap acetaminophen'),

        # Cough & Cold Remedies
        ('OBT-005', 'Dextromethorphan Syrup 100mg/5mL', 'Dextromethorphan', 'Siladex', 2, 1, 2, 2, 25, 15000, 25000, 'Rak B-1', 'Obat batuk berdahak untuk meredakan batuk kering', 'Batuk kering, iritasi tenggorokan', 'Biasanya aman, dapat menyebabkan kantuk', 'Hipersensitif terhadap dekstrometorfan, anak-anak di bawah 6 tahun'),
        ('OBT-006', 'Guaifenesin Syrup 100mg/5mL', 'Guaifenesin', 'Bisolvom', 2, 1, 2, 2, 30, 18000, 30000, 'Rak B-2', 'Obat batuk berdahak untuk mengencerkan dahak', 'Batuk berdahak, sesak napas', 'Biasanya aman, dapat menyebabkan gangguan pencernaan', 'Hipersensitif terhadap guaifenesin'),
        ('OBT-007', 'Chlorpheniramine Maleate Tablet 4mg', 'Chlorpheniramine', 'CTM', 2, 1, 1, 1, 20, 8000, 14000, 'Rak B-3', 'Antihistamin untuk alergi dan batuk pilek', 'Alergi, pilek, bersin', 'Dapat menyebabkan kantuk, mulut kering', 'Hipersensitif terhadap chlorpheniramine, anak-anak di bawah 12 tahun'),
        ('OBT-008', 'Triaminic Tablet', 'Triaminic', 'Triaminic', 2, 1, 1, 1, 15, 12000, 20000, 'Rak B-4', 'Obat batuk pilek dan demam kombinasi', 'Batuk pilek, demam, bersin', 'Dapat menyebabkan kantuk, mulut kering', 'Hipersensitif terhadap komponen kombinasi'),

        # Digestive System Drugs
        ('OBT-009', 'Omeprazole 20mg Tablet', 'Omeprazole', 'Prilosec', 2, 1, 1, 1, 15, 25000, 45000, 'Rak C-1', 'Obat penghambat pompa proton untuk masalah asam lambung', 'Maag, GERD, tukak lambung', 'Dapat menyebabkan sakit kepala, diare', 'Hipersensitif terhadap omeprazole, gangguan hati berat'),
        ('OBT-010', 'Ranitidine 150mg Tablet', 'Ranitidine', 'Zantac', 2, 1, 1, 1, 20, 20000, 38000, 'Rak C-2', 'Obat antagonis H2 untuk masalah asam lambung', 'Maag, tukak lambung', 'Dapat menyebabkan sakit kepala, diare', 'Hipersensitif terhadap ranitidine, gangguan hati berat'),
        ('OBT-011', 'Loperamide 2mg Tablet', 'Loperamide', 'Imodium', 2, 1, 1, 1, 25, 10000, 18000, 'Rak C-3', 'Obat antidiare untuk diare akut', 'Diare akut, diare kronis', 'Dapat menyebabkan sembelit, perut tidak nyaman', 'Hipersensitif terhadap loperamide, diare berdarah'),

        # Common Oral Antibiotics (Prescription Drugs)
        ('OBT-012', 'Amoxicillin 500mg Capsule', 'Amoxicillin', 'Amoxsan', 2, 2, 1, 1, 10, 50000, 90000, 'Rak D-1', 'Antibiotik penisilin broad-spectrum', 'Infeksi bakteri pernapasan, infeksi kulit, infeksi saluran kemih', 'Diare, mual, reaksi alergi', 'Hipersensitif terhadap penisilin, gangguan fungsi ginjal'),
        ('OBT-013', 'Ciprofloxacin 500mg Tablet', 'Ciprofloxacin', 'Cytotec', 2, 2, 1, 1, 8, 120000, 180000, 'Rak D-2', 'Antibiotik fluoroquinolone broad-spectrum', 'Infeksi saluran kemih, pneumonia, infeksi kulit', 'Gangguan tendon, gangguan CNS, tendinitis', 'Hipersensitif terhadap fluoroquinolon, gangguan fungsi ginjal'),
        ('OBT-014', 'Cefalexin 500mg Capsule', 'Cefalexin', 'Ceporex', 2, 2, 1, 1, 12, 80000, 140000, 'Rak D-3', 'Antibiotik penisilin untuk infeksi ringan', 'Infeksi kulit, saluran kemih', 'Diare, reaksi alergi', 'Hipersensitif terhadap penisilin'),
        ('OBT-015', 'Azithromycin 500mg Tablet', 'Azithromycin', 'Zithromax', 2, 2, 1, 1, 10, 100000, 180000, 'Rak D-4', 'Antibiotik makrolida broad-spectrum', 'Infeksi pernapasan, infeksi kulit, ISK', 'Gangguan pencernaan, reaksi alergi', 'Hipersensitif terhadap makrolida, gangguan fungsi hati'),

        # Cardiovascular Drugs
        ('OBT-016', 'Amlodipine 5mg Tablet', 'Amlodipine', 'Norvasc', 2, 1, 1, 1, 12, 35000, 65000, 'Rak E-1', 'Kalsium kanal blocker untuk hipertensi', 'Hipertensi, angina', 'Sakit kepala, pusing, edema perifer', 'Hipersensitif terhadap amlodipine, obstruksi outflow aorta'),
        ('OBT-017', 'Captopril 25mg Tablet', 'Captopril', 'Tenalapril', 2, 1, 1, 1, 15, 40000, 75000, 'Rak E-2', 'Inhibitor ACE untuk hipertensi dan gagal jantung', 'Hipertensi, gagal jantung kongestif', 'Batuk kering, hipotensi, hiperkalemia', 'Hipersensitif terhadap ACE inhibitor, kehamilan'),

        # Antidiabetic Drugs
        ('OBT-018', 'Metformin 500mg Tablet', 'Metformin', 'Glucophage', 2, 1, 1, 1, 20, 60000, 110000, 'Rak F-1', 'Biguanide oral untuk diabetes mellitus tipe 2', 'Diabetes mellitus tipe 2, resistensi insulin', 'Gangguan pencernaan, diare, gangguan hati', 'Hipersensitif terhadap metformin, gangguan fungsi ginjal'),
        ('OBT-019', 'Glimepiride 2mg Tablet', 'Glimepiride', 'Amaryl', 2, 1, 1, 1, 10, 70000, 130000, 'Rak F-2', 'Sulfonilurea oral untuk diabetes mellitus tipe 2', 'Diabetes mellitus tipe 2', 'Hipoglikemia, gangguan pencernaan, alergi kulit', 'Hipersensitif terhadap sulfonilurea, gangguan fungsi ginjal'),

        # Vitamins and Supplements
        ('OBT-020', 'Vitamin C 500mg Tablet', 'Vitamin C', 'Cevit', 2, 1, 1, 1, 60, 20000, 35000, 'Rak G-1', 'Vitamin C untuk daya tahan tubuh dan antioksidan', 'Kekurangan vitamin C, daya tahan tubuh lemah', 'Biasanya aman, dapat menyebabkan diare pada dosis tinggi', 'Hipersensitif terhadap vitamin C, gangguan ginjal'),
        ('OBT-021', 'Vitamin B Complex Tablet', 'Vitamin B Complex', 'Bionorm', 2, 1, 1, 1, 50, 25000, 45000, 'Rak G-2', 'Kompleks vitamin B untuk metabolisme energi', 'Kelelahan, kekurangan vitamin B', 'Biasanya aman, urin berwarna kuning', 'Hipersensitif terhadap vitamin B'),

        # Topical Medications
        ('OBT-022', 'Betamethasone Dipropionate 0.05% Cream', 'Betamethasone', 'Dermofen', 2, 1, 3, 3, 8, 40000, 80000, 'Rak H-1', 'Kortikosteroid topikal untuk peradangan kulit', 'Ruam kulit, dermatitis, eksem', 'Atrofi kulit, hiperpigmentasi', 'Hipersensitif terhadap kortikosteroid, infeksi kulit bakteri/virus'),
        ('OBT-023', 'Clotrimazole 1% Cream', 'Clotrimazole', 'Canesten', 2, 1, 3, 3, 10, 30000, 60000, 'Rak H-2', 'Antijamur topikal untuk infeksi jamur kulit', 'Infeksi jamur kaki, kurap, panu', 'Iritasi kulit, reaksi alergi', 'Hipersensitif terhadap clotrimazole'),

        # Additional Essential Drugs
        ('OBT-024', 'Cetirizine 10mg Tablet', 'Cetirizine', 'Reactine', 2, 1, 1, 1, 15, 35000, 60000, 'Rak I-1', 'Antihistamin H1 non-sedating untuk alergi', 'Alergi, urtikaria, angioedema', 'Dapat menyebabkan kantuk, mulut kering', 'Hipersensitif terhadap cetirizine, anak-anak di bawah 6 tahun'),
        ('OBT-025', 'Loratadine 10mg Tablet', 'Loratadine', 'Claritin', 2, 1, 1, 1, 20, 40000, 70000, 'Rak I-2', 'Antihistamin H1 non-sedating untuk alergi', 'Alergi, urtikaria', 'Biasanya aman, dapat menyebabkan sakit kepala', 'Hipersensitif terhadap loratadine'),
        ('OBT-026', 'Salbutamol Inhaler 100mcg', 'Salbutamol', 'Ventolin', 2, 1, 4, 4, 5, 150000, 250000, 'Rak J-1', 'Bronkodilator beta-2 agonis untuk asma', 'Asma, bronkitis kronis', 'Tremor, sakit kepala', 'Hipersensitif terhadap salbutamol'),
        ('OBT-027', 'Salbutamol Inhaler 200mcg', 'Salbutamol', 'Ventolin', 2, 1, 4, 4, 3, 200000, 350000, 'Rak J-2', 'Bronkodilator beta-2 agonis untuk asma', 'Asma, bronkitis kronis', 'Tremor, sakit kepala', 'Hipersensitif terhadap salbutamol'),
        ('OBT-028', 'Alprazolam 0.5mg Tablet', 'Alprazolam', 'Xanax', 2, 2, 1, 1, 5, 80000, 150000, 'Rak K-1', 'Benzodiazepin untuk kecemasan dan insomnia', 'Gangguan cemas, insomnia', 'Kantuk, pusing, ketergantungan', 'Hipersensitif terhadap alprazolam, gangguan fungsi hati'),
        ('OBT-029', 'Diazepam 5mg Tablet', 'Diazepam', 'Valium', 2, 2, 1, 1, 3, 100000, 180000, 'Rak K-2', 'Benzodiazepin untuk kecemasan, relaksan otot', 'Gangguan cemas, kejang otot', 'Kantuk, pusing, ketergantungan', 'Hipersensitif terhadap diazepam, gangguan fungsi hati'),
        ('OBT-030', 'Simvastatin 20mg Tablet', 'Simvastatin', 'Zocor', 2, 1, 1, 1, 8, 120000, 220000, 'Rak L-1', 'Statin untuk menurunkan kolesterol', 'Hipertensi, hiperlipidemia', 'Nyeri otot, gangguan hati', 'Hipersensitif terhadap statin, gangguan fungsi hati'),
        ('OBT-031', 'Atorvastatin 10mg Tablet', 'Atorvastatin', 'Lipitor', 2, 1, 1, 1, 6, 140000, 260000, 'Rak L-2', 'Statin untuk menurunkan kolesterol', 'Hipertensi, hiperlipidemia', 'Nyeri otot, gangguan hati', 'Hipersensitif terhadap statin, gangguan fungsi hati'),
        ('OBT-032', 'Montelukast 10mg Tablet', 'Montelukast', 'Singulair', 2, 1, 1, 1, 8, 90000, 160000, 'Rak M-1', 'Antagonis leukotriena untuk asma', 'Asma, alergi pernapasan', 'Sakit perut, diare', 'Hipersensitif terhadap montelukast'),
        ('OBT-033', 'Prednisone 5mg Tablet', 'Prednisone', 'Deltasone', 2, 2, 1, 1, 5, 60000, 110000, 'Rak N-1', 'Kortikosteroid sistemik untuk peradangan', 'Peradangan, alergi, asma', 'Kenaikan berat badan, gangguan tidur', 'Hipersensitif terhadap kortikosteroid, infeksi sistemik'),
        ('OBT-034', 'Metronidazole 500mg Tablet', 'Metronidazole', 'Flagyl', 2, 2, 1, 1, 10, 40000, 75000, 'Rak N-2', 'Antibiotik nitroimidazole untuk infeksi', 'Infeksi bakteri anaerob, trikomoniasis', 'Gangguan pencernaan, metalik dalam mulut', 'Hipersensitif terhadap metronidazol'),
        ('OBT-035', 'Furosemide 40mg Tablet', 'Furosemide', 'Lasix', 2, 1, 1, 1, 6, 80000, 140000, 'Rak O-1', 'Diuret loop untuk hipertensi dan edema', 'Hipertensi, edema, gagal jantung', 'Dehidrasi, pusing, hipokalemia', 'Hipersensitif terhadap furosemide, gangguan fungsi ginjal'),
        ('OBT-036', 'Ranitidine 150mg Tablet', 'Ranitidine', 'Zantac', 2, 1, 1, 1, 20, 25000, 45000, 'Rak P-1', 'Antagonis H2 untuk masalah asam lambung', 'Maag, tukak lambung', 'Sakit kepala, diare', 'Hipersensitif terhadap ranitidine, gangguan hati berat'),
        ('OBT-037', 'Famotidine 20mg Tablet', 'Famotidine', 'Pepcid', 2, 1, 1, 1, 15, 30000, 55000, 'Rak P-2', 'Antagonis H2 untuk masalah asam lambung', 'Maag, GERD', 'Sakit kepala, diare', 'Hipersensitif terhadap famotidine, gangguan hati berat'),
    ]

    # Hapus data yang ada terlebih dahulu
    cursor.execute("DELETE FROM obat")
    conn.commit()
    deleted_count = cursor.rowcount
    print(f"✅ Berhasil menghapus {deleted_count} baris dari tabel obat")

    # Insert data baru
    print("Menginsert 37 obat baru...")
    
    # Buat query INSERT
    values_list = []
    for drug in drugs:
        values = (
            f"'{drug[0]}'", f"'{drug[1]}'", f"'{drug[2]}'", f"'{drug[3]}'", 
            f"{drug[4]}", f"{drug[5]}", f"{drug[6]}", f"{drug[7]}", 
            f"{drug[8]}", f"{drug[9]}", f"{drug[10]}", f"'{drug[11]}'", 
            f"'{drug[12]}'", f"'{drug[13]}'", f"'{drug[14]}'", f"'{drug[15]}'"
        )
        values_list.append(f"({', '.join(values)})")
    
    sql = "INSERT INTO `obat` (`kode_obat`, `nama_obat`, `nama_generik`, `nama_brand`, `kategori_id`, `golongan_id`, `jenis_id`, `satuan_id`, `stok_minimum`, `harga_beli`, `harga_jual`, `lokasi_penyimpanan`, `deskripsi`, `indikasi`, `efek_samping`, `kontraindikasi`) VALUES "
    sql += ", ".join(values_list)
    
    cursor.execute(sql)
    conn.commit()
    
    inserted_count = len(drugs)
    print(f"✅ Berhasil menginsert {inserted_count} obat baru ke tabel obat")
    
    # Verifikasi data
    cursor.execute("SELECT COUNT(*) FROM obat")
    total_count = cursor.fetchone()[0]
    print(f"✅ Total obat di database: {total_count}")
    
    if $total_count == 37:
        print("✅ Sukses! Semua 37 obat telah diinsert dengan benar.")
    else
        print(f"❌ Error: Expected 37 obat, tapi ditemukan {total_count}")
    
    cursor.close()
    conn.close()

except Exception as e:
    print(f"❌ Error: {e}")
    if 'conn' in locals():
        conn.close()