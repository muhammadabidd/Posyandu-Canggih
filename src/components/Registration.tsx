import { ArrowLeft, User, MapPin, Phone, ChevronDown, Save } from 'lucide-react';
import { VILLAGES } from '../constants';

interface RegistrationProps {
  onBack: () => void;
}

export default function Registration({ onBack }: RegistrationProps) {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-8 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant text-on-surface hover:bg-surface-container transition-all"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h2 className="text-3xl font-bold text-on-surface leading-tight">Pendaftaran Ibu Baru</h2>
          <p className="text-on-surface-variant mt-1 font-medium italic">Silakan isi formulir di bawah ini dengan data yang valid.</p>
        </div>
      </div>

      <div className="bg-white border border-outline-variant rounded-xl shadow-lg shadow-on-surface/5 overflow-hidden">
        <div className="h-2 w-full bg-primary"></div>
        <div className="p-8 md:p-10">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-bold text-on-surface" htmlFor="nama_lengkap">Nama Lengkap (Sesuai KTP)</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                <input 
                  type="text" 
                  id="nama_lengkap"
                  className="w-full h-12 pl-12 pr-4 bg-white border border-outline rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 transition-all placeholder:text-outline-variant font-medium"
                  placeholder="Contoh: Siti Aminah"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-bold text-on-surface" htmlFor="desa_dusun">Desa/Dusun</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                <select 
                  id="desa_dusun"
                  className="w-full h-12 pl-12 pr-10 appearance-none bg-white border border-outline rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 transition-all font-medium"
                >
                  <option value="" disabled selected>Pilih wilayah tugas...</option>
                  {VILLAGES.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-bold text-on-surface" htmlFor="nomor_telepon">Nomor Telepon (WhatsApp Aktif)</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                <input 
                  type="tel" 
                  id="nomor_telepon"
                  className="w-full h-12 pl-12 pr-4 bg-white border border-outline rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 transition-all placeholder:text-outline-variant font-medium"
                  placeholder="08xx xxxx xxxx"
                />
              </div>
              <p className="text-xs text-on-surface-variant mt-2 font-medium">Pastikan nomor aktif untuk menerima pengingat jadwal posyandu.</p>
            </div>

            <div className="pt-8 border-t border-outline-variant flex items-center justify-end gap-4">
              <button 
                type="button"
                onClick={onBack}
                className="h-12 min-w-[120px] px-6 rounded-lg border border-primary text-primary font-bold text-xs uppercase tracking-wide hover:bg-primary-container/10 transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Kembali
              </button>
              <button 
                type="submit"
                className="h-12 min-w-[160px] px-8 rounded-lg bg-primary text-on-primary font-bold text-xs uppercase tracking-wide shadow-md shadow-primary/20 hover:bg-opacity-90 transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Simpan Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
