import { Bell, HelpCircle } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="h-16 border-b border-outline-variant bg-white flex justify-between items-center px-8 sticky top-0 z-10 box-border">
      <div className="flex items-center">
        <h2 className="text-lg font-bold text-on-surface">Juli 2024</h2>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full hover:bg-surface-container-low text-on-surface-variant transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-surface-container-low text-on-surface-variant transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant ml-2">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100&h=100" 
            alt="Profil" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </header>
  );
}
