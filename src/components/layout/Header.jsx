import { Search, Bell, Settings, Menu } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Header({ setMobileMenuOpen }) {
  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center px-4 md:px-6 justify-between sticky top-0 z-30 flex-shrink-0 transition-all duration-300">
      
      <div className="flex items-center gap-4 flex-1">
        <button 
          className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={20} />
        </button>
        
        <div className="max-w-md w-full relative hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-full leading-5 bg-slate-50/50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
            placeholder="Search transactions, users, or reports..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-4 pl-4">
        <button className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white shadow-sm" />
        </button>
        
        <div className="flex items-center gap-3 pl-3 border-l border-slate-200 cursor-pointer group">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">Sarah Connor</span>
            <span className="text-xs text-slate-500">Administrator</span>
          </div>
          <img
            className="h-9 w-9 rounded-full object-cover border-2 border-white shadow-sm group-hover:border-blue-100 transition-all duration-300"
            src="https://i.pravatar.cc/150?u=sarah"
            alt="User avatar"
          />
        </div>
      </div>
    </header>
  );
}
