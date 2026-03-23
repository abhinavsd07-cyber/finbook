export function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Custom Empty State Illustration */}
        <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
          
          {/* Document Base */}
          <div className="absolute top-4 left-10 w-24 h-32 bg-white border-2 border-[#1E3A8A] rounded-xl shadow-sm z-10 overflow-hidden flex flex-col">
             {/* Fold at top right */}
             <div className="absolute top-0 right-0 w-8 h-8 bg-blue-50 border-DEFAULT border-[#1E3A8A] border-t-0 border-r-0 rounded-bl-xl z-20"></div>
             
             {/* Content Lines */}
             <div className="mt-8 px-4 space-y-3">
               <div className="h-2 bg-[#EF4444] rounded-full w-full"></div>
               <div className="h-2 bg-[#EF4444] rounded-full w-3/4"></div>
               <div className="h-2 bg-[#EF4444] rounded-full w-5/6"></div>
             </div>
             
             {/* Bottom Block */}
             <div className="mt-auto px-4 pb-4">
               <div className="h-4 bg-[#FBBF24] rounded-sm w-full"></div>
             </div>
          </div>
          
          {/* Magnifying Glass */}
          <div className="absolute bottom-6 right-8 w-16 h-16 bg-[#22D3EE] border-4 border-[#1E3A8A] rounded-full z-30 flex items-center justify-center shadow-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            
            {/* Handle */}
            <div className="absolute top-[13px] left-[45px] w-10 h-4 bg-[#1E3A8A] rounded-full transform rotate-45 origin-left shadow-sm"></div>
          </div>
          
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-slate-800 tracking-tight">
          No Reports Found
        </h3>
        
      </div>
    </div>
  );
}
