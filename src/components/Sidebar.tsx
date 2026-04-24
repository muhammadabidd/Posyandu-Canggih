import { Home, UserCheck, Baby, Settings } from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  currentView: string;
  setView: (view: string) => void;
}

export default function Sidebar({ currentView, setView }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'absensi', label: 'Absensi', icon: UserCheck },
    { id: 'daftar', label: 'Daftar Ibu', icon: Baby },
    { id: 'pengaturan', label: 'Pengaturan', icon: Settings },
  ];

  return (
    <nav className="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant bg-white flex flex-col py-6 z-20">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
            <Baby className="text-on-primary-container w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-xl text-primary leading-tight">Posyandu</h1>
            <p className="text-xs text-on-surface-variant font-medium">Sistem Kader</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`flex items-center gap-3 px-6 py-3 transition-colors relative w-full text-left ${
                isActive 
                  ? 'bg-secondary-container/30 text-primary border-r-4 border-primary font-bold' 
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'fill-primary' : ''}`} />
              <span className="text-sm tracking-wide">{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="px-6 pt-4 border-t border-outline-variant">
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100&h=100" 
            alt="Kader Profil" 
            className="w-10 h-10 rounded-full object-cover border-2 border-outline-variant"
          />
          <div>
            <p className="text-sm font-bold text-on-surface">Kader Bidan</p>
            <p className="text-xs text-on-surface-variant">Desa Sukamaju</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
