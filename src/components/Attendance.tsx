import { Search, ChevronDown, Check, Save, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { MOCK_RESIDENTS, VILLAGES } from '../constants';

export default function Attendance() {
  const [attendance, setAttendance] = useState<Record<string, boolean>>({
    'KIA-082': true,
    'KIA-085': true,
  });

  const toggleAttendance = (id: string) => {
    setAttendance(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-on-surface">Input Kehadiran - Oktober 2023</h1>
        <p className="text-on-surface-variant mt-2 font-medium">Tandai kehadiran ibu hamil dan balita untuk jadwal Posyandu bulan ini.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
          <input 
            type="text" 
            className="w-full h-12 pl-12 pr-4 bg-white border border-outline-variant rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-outline"
            placeholder="Cari nama ibu atau ID..."
          />
        </div>
        <div className="relative w-full md:w-64">
          <select className="w-full h-12 pl-4 pr-10 bg-white border border-outline-variant rounded-lg appearance-none cursor-pointer focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all font-medium">
            <option value="">Semua Dusun</option>
            {VILLAGES.map(v => <option key={v} value={v}>{v}</option>)}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none w-5 h-5" />
        </div>
      </div>

      <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-on-surface-variant w-24">ID</th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Nama Lengkap</th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Dusun</th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-on-surface-variant text-center w-32">Kehadiran</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {MOCK_RESIDENTS.map((res) => (
                <tr key={res.id} className="hover:bg-surface-container-low transition-colors">
                  <td className="py-3 px-6 text-sm font-medium text-on-surface-variant">{res.id}</td>
                  <td className="py-3 px-6 text-sm font-bold text-on-surface">{res.name}</td>
                  <td className="py-3 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                      res.village.includes('Mawar') ? 'bg-secondary-container text-on-secondary-container' : 
                      res.village.includes('Melati') ? 'bg-tertiary-container text-on-tertiary-container' : 
                      'bg-primary-container text-on-primary-container'
                    }`}>
                      {res.village}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <button 
                      onClick={() => toggleAttendance(res.id)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center border-2 transition-all mx-auto ${
                        attendance[res.id] 
                          ? 'bg-primary border-primary text-on-primary' 
                          : 'border-outline-variant text-transparent hover:border-primary'
                      }`}
                    >
                      <Check className="w-5 h-5 font-bold" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-surface-container-low py-4 px-6 border-t border-outline-variant flex justify-between items-center text-xs text-on-surface-variant font-bold">
          <span>Menampilkan {MOCK_RESIDENTS.length} dari 42 data</span>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-outline-variant hover:bg-white transition-colors disabled:opacity-30" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-outline-variant hover:bg-white transition-colors shadow-sm bg-white">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-12 flex justify-end border-t border-outline-variant pt-6">
        <button className="bg-primary text-on-primary h-12 px-8 rounded-full font-bold text-sm uppercase tracking-wide hover:shadow-lg transition-all active:scale-[0.98] flex items-center gap-2 shadow-sm">
          <Save className="w-5 h-5" />
          Simpan Data Kehadiran
        </button>
      </div>
    </div>
  );
}
