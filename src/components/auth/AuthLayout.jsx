import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";

const defaultCarousel = [img1, img2, img3];

export function AuthLayout({ children }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % defaultCarousel.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex bg-white font-sans text-slate-800">
      <div className="w-full flex flex-col md:flex-row overflow-hidden min-h-screen">
        
        {/* Left Side: Carousel + Overlay */}
       {/* Left Side: Carousel + Precise Gradient Background */}
<div className="hidden md:flex md:w-[55%] relative flex-col overflow-hidden bg-gradient-to-b from-[#D0DBE8] to-[#99AFCC]">
  
  {/* Images - Upside down per your request */}
  {defaultCarousel.map((img, idx) => (
    <div
      key={idx}
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
        idx === currentIdx ? "opacity-100 z-0" : "opacity-0 -z-10"
      }`}
    >
      <img
        src={img}
        alt="Background Render"
        className="w-full h-full object-cover object-center rotate-180"
      />
    </div>
  ))}

  {/* Subtle Overlay to blend the image into the background gradient */}
  <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#99AFCC]/60 via-transparent to-transparent z-10 pointer-events-none"></div>

  {/* Text Content */}
  <div className="relative z-20 flex flex-col justify-end h-full px-14 pb-24">
    <h1 className="text-[40px] leading-tight tracking-tight mb-4 font-['Open_Sans']">
      <span className="font-bold text-slate-800">Accounting </span>
      <span className="font-light text-white">
        Excellence Guaranteed
      </span>
    </h1>

    <p className="text-[14px] text-slate-700/80 max-w-[420px] leading-relaxed mb-12 font-['Open_Sans']">
      Our CA services ensure meticulous finance management, compliance,
      and growth strategies, empowering your business success
    </p>

    {/* Dash Indicators */}
    <div className="flex gap-2 items-center">
      {defaultCarousel.map((_, idx) => (
        <div
          key={idx}
          className={`h-[3px] w-8 transition-all duration-500 ${
            idx === currentIdx ? "bg-[#E24C3D]" : "bg-white/60"
          }`}
        ></div>
      ))}
    </div>
  </div>
</div>

        {/* Right Side: Form Content */}
        <div className="w-full md:w-[45%] flex flex-col px-6 lg:px-16 bg-white min-h-screen">
          <div className="flex-1 flex flex-col justify-center items-center w-full max-w-[420px] mx-auto py-12">
            <div className="w-full">{children}</div>
          </div>

          {/* Footer Socials - Matches your screenshot style */}
          <div className="w-full pb-10 mt-auto">
            <div className="flex justify-center gap-8 text-[13px] text-slate-400 mb-6 font-medium">
              <a href="#" className="hover:text-slate-900 transition-colors">About Us</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Blog</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            </div>
            
            <div className="flex justify-center gap-6 text-slate-400 items-center">
              <a href="#" className="hover:text-slate-600 transition-colors">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="hover:text-slate-600 transition-colors">
                <RiTwitterXLine size={20} />
              </a>
              <a href="#" className="hover:text-slate-600 transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="#" className="hover:text-slate-600 transition-colors">
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}