import { LayoutDashboard, Users, FolderKanban, Settings, Bell, Search, Menu, LogOut, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useState } from 'react';

const navItems = [
  { name: 'Overview', icon: LayoutDashboard, href: '#' },
  { name: 'Users', icon: Users, href: '#' },
  { name: 'Projects', icon: FolderKanban, href: '#' },
  { name: 'Settings', icon: Settings, href: '#' },
];

export function Sidebar({ collapsed, setCollapsed }) {
  const [activeItem, setActiveItem] = useState('Overview');

  return (
    <aside
      className={cn(
        "fixed lg:static inset-y-0 left-0 z-40 bg-white border-r border-slate-200 transition-all duration-300 ease-in-out flex flex-col items-stretch",
        collapsed ? "w-20 translate-x-0" : "w-64 translate-x-0",
        "max-lg:-translate-x-full lg:translate-x-0" // Mobile handling could be expanded
      )}
    >
      <div className="flex h-16 items-center flex-shrink-0 px-4 justify-between border-b border-slate-100">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg leading-none">N</span>
          </div>
          {!collapsed && (
            <span className="font-display font-semibold text-xl text-slate-900 tracking-tight whitespace-nowrap">
              Nexus<span className="text-blue-600">ERP</span>
            </span>
          )}
        </div>
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors hidden lg:block"
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-hide">
        <div className={cn("text-xs font-semibold text-slate-400 mb-4 px-3 uppercase tracking-wider", collapsed && "text-center px-0")}>
          {collapsed ? '...' : 'Main Menu'}
        </div>
        
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
              activeItem === item.name 
                ? "bg-blue-50 text-blue-700 font-medium" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
            title={collapsed ? item.name : undefined}
          >
            <item.icon 
              size={20} 
              className={cn(
                "flex-shrink-0 transition-colors duration-200",
                activeItem === item.name ? "text-blue-600" : "text-slate-400 group-hover:text-blue-600"
              )} 
            />
            {!collapsed && (
              <span className="flex-1 text-left whitespace-nowrap">{item.name}</span>
            )}
            {activeItem === item.name && !collapsed && (
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 ml-auto shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            )}
            {/* Active indicator bar for collapsed state */}
            {activeItem === item.name && collapsed && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-md" />
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100 mt-auto">
        <button 
          onClick={() => {
            if(window.confirm('Are you sure you want to log out?')) {
              window.location.href = "/";
            }
          }}
          className={cn(
          "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors group",
          collapsed && "justify-center px-0"
        )}>
          <LogOut size={20} className="text-slate-400 group-hover:text-red-500 transition-colors" />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
