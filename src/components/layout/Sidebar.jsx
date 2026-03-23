import { LayoutDashboard, User, FileText, Video, FileSearch, HelpCircle, LogOut, Settings, Menu, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useState } from 'react';

const navItems = [
  { name: 'Finsights', icon: LayoutDashboard, href: '#' },
  { name: 'Vendor', icon: User, href: '#', hasDropdown: true },
  { name: 'Task Uploads', icon: FileText, href: '#' },
  { name: 'Request Document', icon: FileSearch, href: '#' },
  { name: 'Meetings', icon: Video, href: '#' },
];

export function Sidebar({ collapsed, setCollapsed }) {
  const [activeItem, setActiveItem] = useState('Finsights');

  return (
    <aside
      className={cn(
        "fixed lg:static inset-y-0 left-0 z-40 bg-white border-r border-slate-200 transition-all duration-300 ease-in-out flex flex-col items-stretch",
        collapsed ? "w-20 translate-x-0" : "w-64 translate-x-0"
      )}
    >
      <div className="flex h-16 items-center flex-shrink-0 px-4 justify-between pt-4 pb-2">
        <div className="flex items-center gap-2 overflow-hidden">
          {!collapsed && (
            <div className="flex items-center">
              {/* Logo graphic approximation */}
              <div className="flex items-end gap-0.5 mr-2">
                <div className="w-1.5 h-4 bg-slate-800"></div>
                <div className="w-1.5 h-6 bg-slate-800"></div>
                <div className="w-1.5 h-8 bg-slate-800"></div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-sans font-semibold text-lg text-slate-800 tracking-tight">finbook</span>
                <span className="font-sans text-sm text-slate-500 tracking-tight">globa<span className="text-red-500">l</span></span>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="flex items-end gap-0.5 mx-auto">
              <div className="w-1.5 h-4 bg-slate-800"></div>
              <div className="w-1.5 h-6 bg-slate-800"></div>
              <div className="w-1.5 h-8 bg-slate-800"></div>
            </div>
          )}
        </div>
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 text-slate-600 hover:bg-slate-100 rounded transition-colors hidden lg:block"
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-2 scrollbar-hide mt-4">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
              activeItem === item.name 
                ? "bg-[#514d9b] text-white font-medium" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
            title={collapsed ? item.name : undefined}
          >
            <item.icon 
              size={20} 
              strokeWidth={1.5}
              className={cn(
                "flex-shrink-0 transition-colors duration-200",
                activeItem === item.name ? "text-white" : "text-slate-500 group-hover:text-slate-800"
              )} 
            />
            {!collapsed && (
              <span className="flex-1 text-left whitespace-nowrap text-sm">{item.name}</span>
            )}
            {!collapsed && item.hasDropdown && (
              <ChevronDown size={16} className="text-slate-400" />
            )}
          </button>
        ))}
      </nav>

      <div className="relative mt-auto overflow-hidden">
        {/* Abstract blue shapes at bottom */}
        <div className="absolute inset-0 z-0 bg-blue-50/50">
          <svg className="absolute bottom-0 left-0 w-full text-blue-100/50" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ height: '150%' }}>
            <path d="M0,100 C30,80 50,60 100,70 L100,100 Z" fill="currentColor" />
            <path d="M0,80 C40,90 60,50 100,60 L100,100 L0,100 Z" fill="currentColor" opacity="0.5" />
          </svg>
        </div>
        
        <div className="relative z-10 p-4 space-y-2">
          <button className={cn(
            "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm text-slate-700 hover:bg-white transition-colors border border-white/40",
            collapsed && "justify-center px-0"
          )}>
            <HelpCircle size={18} className="text-slate-800" />
            {!collapsed && <span className="text-sm font-medium">Help</span>}
          </button>
          
          <button className={cn(
            "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm text-slate-700 hover:bg-white transition-colors border border-white/40",
            collapsed && "justify-center px-0"
          )}>
            <Settings size={18} className="text-slate-800" />
            {!collapsed && <span className="text-sm font-medium">Settings</span>}
          </button>
          
          <button 
            onClick={() => {
              if(window.confirm('Are you sure you want to log out?')) {
                window.location.href = "/";
              }
            }}
            className={cn(
            "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm text-slate-700 hover:bg-white transition-colors border border-white/40",
            collapsed && "justify-center px-0"
          )}>
            <LogOut size={18} className="text-slate-800" />
            {!collapsed && <span className="text-sm font-medium">Log Out</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
