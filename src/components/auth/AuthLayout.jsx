import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

const defaultCarousel = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&w=2080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop"
];

export function AuthLayout({ children }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % defaultCarousel.length);
    }, 4500); // 4.5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex bg-white font-sans text-slate-800">
      <div className="w-full mx-auto flex flex-col md:flex-row shadow-2xl overflow-hidden min-h-screen">
        
        {/* Left Side: Carousel + Overlay */}
        <div className="hidden md:flex md:w-[55%] relative flex-col overflow-hidden bg-slate-900 border-r border-slate-100">
          
          {/* Images */}
          {defaultCarousel.map((img, idx) => (
             <div 
               key={idx}
               className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === currentIdx ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`} 
             >
                <img 
                  src={img} 
                  alt="Background Render" 
                  className="w-full h-full object-cover object-center" 
                />
             </div>
          ))}

          {/* Subtle bottom gradient to ensure text readability */}
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#8EABC7]/80 via-[#8EABC7]/40 to-transparent z-10 pointer-events-none mix-blend-multiply"></div>
          
          <div className="relative z-20 flex flex-col justify-end h-full p-12 lg:p-20 text-white pb-20 mt-auto">
            <h1 className="text-[38px] lg:text-[46px] leading-tight font-sans tracking-tight mb-4 drop-shadow-md">
              Accounting <span className="font-semibold text-white">Excellence Guaranteed</span>
            </h1>
            <p className="text-[15px] text-slate-50 max-w-[440px] leading-relaxed mb-12 font-medium drop-shadow-sm">
              Our CA services ensure meticulous finance management, compliance, and growth strategies, empowering your business success
            </p>
            
            <div className="flex gap-2 items-center">
              {defaultCarousel.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIdx ? 'w-6 bg-red-500' : 'w-4 bg-white/40'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form Content Center */}
        <div className="w-full md:w-[45%] flex flex-col px-6 lg:px-16 overflow-y-auto bg-white min-h-screen">
          
          {/* Main central container for the form */}
          <div className="flex-1 flex flex-col justify-center items-center w-full max-w-[420px] mx-auto py-12">
             <div className="w-full mb-8">
               {children}
             </div>
          </div>
          
          {/* Links locked to the very bottom */}
          <div className="w-full flex-shrink-0 pb-8 mt-auto">
            <div className="flex justify-center gap-6 text-[13px] text-slate-500 mb-6 font-medium">
              <a href="#" className="hover:text-slate-900 transition-colors">About Us</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Blog</a>
            </div>
            <div className="flex justify-center gap-6 text-slate-400">
              <a href="#" className="hover:text-slate-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-slate-600 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="hover:text-slate-600 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-slate-600 transition-colors"><Instagram size={18} /></a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
