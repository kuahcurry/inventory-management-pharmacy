import onboarding from './onboarding'
import kategoriObat from './kategori-obat'
import jenisObat from './jenis-obat'
import satuanObat from './satuan-obat'
import unitRumahSakit from './unit-rumah-sakit'
import obat from './obat'
import medicines from './medicines'
import batch from './batch'
import transaksi from './transaksi'
import inventory from './inventory'
import transactions from './transactions'
import hutang from './hutang'
import qr from './qr'
import notifikasi from './notifikasi'
import resep from './resep'
import stokOpname from './stok-opname'
import pemusnahan from './pemusnahan'
import reports from './reports'
import insights from './insights'
import kategori from './kategori'
import jenis from './jenis'
import satuan from './satuan'
import unit from './unit'
import supplier from './supplier'
import suppliers from './suppliers'
import users from './users'
import logAktivitas from './log-aktivitas'
const api = {
    onboarding: Object.assign(onboarding, onboarding),
kategoriObat: Object.assign(kategoriObat, kategoriObat),
jenisObat: Object.assign(jenisObat, jenisObat),
satuanObat: Object.assign(satuanObat, satuanObat),
unitRumahSakit: Object.assign(unitRumahSakit, unitRumahSakit),
obat: Object.assign(obat, obat),
medicines: Object.assign(medicines, medicines),
batch: Object.assign(batch, batch),
transaksi: Object.assign(transaksi, transaksi),
inventory: Object.assign(inventory, inventory),
transactions: Object.assign(transactions, transactions),
hutang: Object.assign(hutang, hutang),
qr: Object.assign(qr, qr),
notifikasi: Object.assign(notifikasi, notifikasi),
resep: Object.assign(resep, resep),
stokOpname: Object.assign(stokOpname, stokOpname),
pemusnahan: Object.assign(pemusnahan, pemusnahan),
reports: Object.assign(reports, reports),
insights: Object.assign(insights, insights),
kategori: Object.assign(kategori, kategori),
jenis: Object.assign(jenis, jenis),
satuan: Object.assign(satuan, satuan),
unit: Object.assign(unit, unit),
supplier: Object.assign(supplier, supplier),
suppliers: Object.assign(suppliers, suppliers),
users: Object.assign(users, users),
logAktivitas: Object.assign(logAktivitas, logAktivitas),
}

export default api