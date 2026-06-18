import Api from './Api'
import StokOpnameController from './StokOpnameController'
import UserController from './UserController'
import BatchObatController from './BatchObatController'
import ObatController from './ObatController'
import ResepController from './ResepController'
import PemusnahanObatController from './PemusnahanObatController'
import QrCodeController from './QrCodeController'
import TransaksiController from './TransaksiController'
import HutangController from './HutangController'
import KategoriObatController from './KategoriObatController'
import JenisObatController from './JenisObatController'
import SatuanObatController from './SatuanObatController'
import SupplierController from './SupplierController'
import ReportController from './ReportController'
import Settings from './Settings'
const Controllers = {
    Api: Object.assign(Api, Api),
StokOpnameController: Object.assign(StokOpnameController, StokOpnameController),
UserController: Object.assign(UserController, UserController),
BatchObatController: Object.assign(BatchObatController, BatchObatController),
ObatController: Object.assign(ObatController, ObatController),
ResepController: Object.assign(ResepController, ResepController),
PemusnahanObatController: Object.assign(PemusnahanObatController, PemusnahanObatController),
QrCodeController: Object.assign(QrCodeController, QrCodeController),
TransaksiController: Object.assign(TransaksiController, TransaksiController),
HutangController: Object.assign(HutangController, HutangController),
KategoriObatController: Object.assign(KategoriObatController, KategoriObatController),
JenisObatController: Object.assign(JenisObatController, JenisObatController),
SatuanObatController: Object.assign(SatuanObatController, SatuanObatController),
SupplierController: Object.assign(SupplierController, SupplierController),
ReportController: Object.assign(ReportController, ReportController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers