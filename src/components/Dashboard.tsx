import { Users, TrendingUp, AlertTriangle, MessageCircle, MapPin } from 'lucide-react';
import { MOCK_RESIDENTS } from '../constants';

export default function Dashboard() {
  const attentionList = MOCK_RESIDENTS.filter(r => (r.absentMonths || 0) >= 2);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-on-surface mb-2">Radar Absensi</h1>
        <p className="text-on-surface-variant">Pantau kehadiran ibu hamil dan balita untuk bulan ini.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Total Terdaftar */}
        <div className="bg-white border border-outline-variant rounded-xl p-6 relative overflow-hidden shadow-sm h-36 flex flex-col justify-between">
          <div className="absolute right-[-10%] top-[-10%] opacity-10">
            <Users className="w-32 h-32 text-primary" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Total Terdaftar</p>
            <h3 className="text-4xl font-extrabold text-on-surface mt-1">124</h3>
          </div>
          <p className="text-xs text-on-surface-variant font-medium">Ibu & Balita di wilayah Anda</p>
        </div>

        {/* Hadir Bulan Ini */}
        <div className="bg-secondary-container border border-outline-variant rounded-xl p-6 shadow-sm h-36 flex flex-col justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-on-secondary-container">Hadir Bulan Ini</p>
            <h3 className="text-4xl font-extrabold text-on-secondary-container mt-1">86</h3>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-bold">+12% dari bulan lalu</span>
          </div>
        </div>

        {/* Alpa 2+ Bulan */}
        <div className="bg-error-container border border-outline-variant rounded-xl p-6 shadow-sm h-36 flex flex-col justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-on-error-container">Alpa 2+ Bulan</p>
            <h3 className="text-4xl font-extrabold text-on-error-container mt-1">12</h3>
          </div>
          <div className="flex items-center gap-1 text-error">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-xs font-bold">Perlu Tindakan Segera</span>
          </div>
        </div>
      </div>

      <div className="mb-6 flex justify-between items-end border-b border-outline-variant pb-2">
        <h3 className="text-xl font-bold text-on-surface">Perlu Perhatian Khusus</h3>
        <span className="text-sm text-on-surface-variant">Menampilkan {attentionList.length} data</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {attentionList.map((res) => (
          <div key={res.id} className="bg-white border border-outline-variant rounded-xl overflow-hidden flex flex-col shadow-sm">
            <div className={`w-1.5 h-full absolute left-0 top-0 ${res.absentMonths === 3 ? 'bg-error' : 'bg-tertiary'}`}></div>
            <div className={`p-6 flex-1 relative border-l-4 ${res.absentMonths === 3 ? 'border-error' : 'border-tertiary'}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-bold text-on-surface">{res.name}</h4>
                  <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {res.village}, RT {res.rt}
                  </p>
                </div>
                <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide whitespace-nowrap ${
                  res.absentMonths === 3 
                    ? 'bg-error-container text-on-error-container' 
                    : 'bg-tertiary-container text-on-tertiary-container'
                }`}>
                  {res.absentMonths} Bulan Alpa
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-on-surface-variant">Status:</span>
                  <span className="text-on-surface font-semibold">{res.status} ({res.subStatus})</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-on-surface-variant">Hadir Terakhir:</span>
                  <span className="text-on-surface font-semibold">{res.lastVisit}</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-outline-variant bg-surface-container-low">
              <button className="w-full h-12 bg-primary text-on-primary rounded font-bold text-sm uppercase flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-sm active:scale-[0.98]">
                <MessageCircle className="w-4 h-4" />
                Hubungi via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
