import { Search, Plus, Eye, Edit2, ChevronLeft, ChevronRight } from 'lucide-react';
import { MOCK_RESIDENTS } from '../constants';

interface DirectoryProps {
  onAdd: () => void;
}

export default function Directory({ onAdd }: DirectoryProps) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-on-surface">Direktori Ibu Hamil</h1>
          <p className="text-on-surface-variant mt-1 font-medium">Kelola data pendaftaran dan pemantauan kesehatan ibu.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
            <input 
              type="text" 
              className="w-full h-12 pl-12 pr-4 rounded-lg bg-white border border-outline-variant text-on-surface focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-outline"
              placeholder="Cari nama atau ID..."
            />
          </div>
          <button 
            onClick={onAdd}
            className="w-full sm:w-auto h-12 px-6 rounded-full bg-primary text-on-primary font-bold text-sm uppercase flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-sm active:scale-[0.98]"
          >
            <Plus className="w-5 h-5" />
            Tambah Ibu Baru
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-on-surface-variant w-32">ID KIA</th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Nama Lengkap</th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Desa / Dusun</th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-on-surface-variant w-32">Status</th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-on-surface-variant text-right w-32">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {MOCK_RESIDENTS.filter(r => r.type === 'pregnant').map((res) => (
                <tr key={res.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="py-5 px-6 text-sm font-medium text-on-surface-variant">{res.id}</td>
                  <td className="py-5 px-6">
                    <div className="font-bold text-on-surface">{res.name}</div>
                    <div className="text-xs text-on-surface-variant mt-0.5 font-medium">Umur Kehamilan: {res.gestationAge}</div>
                  </td>
                  <td className="py-5 px-6 text-sm text-on-surface font-medium">{res.village} / RT {res.rt}</td>
                  <td className="py-5 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                      res.absentMonths && res.absentMonths > 1 
                        ? 'bg-error-container text-on-error-container' 
                        : 'bg-secondary-container text-on-secondary-container'
                    }`}>
                      {res.absentMonths && res.absentMonths > 1 ? 'Beresiko' : 'Aktif'}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:text-primary hover:bg-primary-container/20 transition-all font-bold">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:text-secondary hover:bg-secondary-container/20 transition-all font-bold">
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-surface-container-low border-t border-outline-variant py-4 px-6 flex items-center justify-between font-bold text-xs">
          <span className="text-on-surface-variant">Menampilkan 1-{MOCK_RESIDENTS.length} dari 42 data</span>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:bg-white transition-all disabled:opacity-30 border border-outline-variant" disabled>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-white transition-all border border-outline-variant shadow-sm bg-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
