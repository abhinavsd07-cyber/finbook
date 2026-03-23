import { Bell, Plus, ChevronDown, LogOut, KeyRound } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="h-16 bg-white/50 backdrop-blur-md flex items-center px-4 md:px-8 justify-between sticky top-0 z-30 flex-shrink-0">
      
      {/* Left side empty or breadcrumbs if needed, currently right aligned content */}
      <div className="flex-1"></div>

      {/* Right side controls */}
      <div className="flex items-center gap-4">
        
        {/* Dropdowns container */}
        <div className="hidden md:flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-1 py-1 shadow-sm">
          {/* Company Selector */}
          <button className="flex items-center justify-between gap-6 px-3 py-1.5 hover:bg-slate-50 rounded-md transition-colors text-slate-600 text-sm">
            <span>Aabasoft soft</span>
            <ChevronDown size={14} className="text-slate-400" />
          </button>
          
          <div className="w-px h-6 bg-slate-200"></div>
          
          {/* Year Selector */}
          <button className="flex items-center justify-between gap-6 px-3 py-1.5 hover:bg-slate-50 rounded-md transition-colors text-slate-600 text-sm">
            <span>2024-2025</span>
            <ChevronDown size={14} className="text-slate-400" />
          </button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2 lg:ml-4">
          <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
            <Plus size={20} strokeWidth={1.5} />
          </button>
          <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
            <Bell size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* User Profile */}
        <div className="relative ml-2">
          <button 
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-100 border-2 border-white shadow-sm hover:shadow transition-shadow"
          >
            <img
              src="https://ui-avatars.com/api/?name=Finbook+User&background=cbd5e1&color=ffffff&bold=true"
              alt="UserAvatar"
              className="h-full w-full rounded-full object-cover"
            />
          </button>

          {/* Profile Popover */}
          {profileOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-lg border border-slate-100 py-6 px-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col items-center text-center">
                 <div className="h-20 w-20 rounded-full bg-slate-200 mb-3 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://ui-avatars.com/api/?name=Finbook+User&background=cbd5e1&color=ffffff&bold=true&size=128"
                      alt="Avatar Large"
                      className="h-full w-full object-cover"
                    />
                 </div>
                 <h4 className="font-semibold text-slate-900 text-base">Finbook User0100</h4>
                 <p className="text-sm text-slate-500 mb-6">finbookuser@yopmail.com</p>
                 
                 <div className="flex gap-3 w-full">
                    <button className="flex-1 py-2 px-3 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors h-10 flex items-center justify-center">
                      Change password
                    </button>
                    <button 
                      onClick={() => navigate('/')}
                      className="flex-shrink-0 flex items-center gap-2 py-2 px-4 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-sm font-medium transition-colors h-10"
                    >
                      <LogOut size={16} />
                      Log out
                    </button>
                 </div>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </header>
  );
}
