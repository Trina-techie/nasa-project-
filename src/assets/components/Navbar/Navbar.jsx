// import React from 'react'
// import spherex from "../../../assets/spherex.jpg";
// const Navbar = () => {
//   return (
//     <div className='fixed t right-0 w-full z-50 bg-black-50/10 backdrop-blur-sm py-4 sm:py-4' >
//         <div className="container">
//             <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-4 text-white font-medium text-2xl sm:py-0 px-10">
//                     {/* <img src={spherex} alt="SphereX"/> */}
//                     <span>ASTRO-SHIFT</span>
//                 </div>
//                 <div className='text-white'>
//                     <ul className='flex items-center gap-7 text-l py-4'>
//                         <li><a href='#'>ABOUT</a></li>
//                         <li><a href='#'>Lorem, ipsum.</a></li>
//                         <li><a href='#'>Lorem</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <button className='text-white border-2 border-white px-3 py-1 rounded-md'>LOGIN</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import spherex from "../../../assets/spherex.jpg";

const Navbar = () => {
  // Mobile drawer panel toggle tracking variable
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#02000a]/70 backdrop-blur-lg border-b border-white/10 transition-all duration-300">
      <div className="relative container mx-auto max-w-6xl px-6 sm:px-12 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo Brand Section */}
          <div className="flex items-center gap-4 text-white font-extrabold text-2xl tracking-wider group cursor-pointer">
            <div className="w-12 h-12 rounded border border-blue-500/30 overflow-hidden bg-slate-950 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[0]">
              <img src={spherex} alt="SphereX Logo" className="w-full h-full object-cover" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-blue-400 group-hover:from-blue-400 group-hover:to-rose-600 transition-all duration-500 font-light tracking-widest">
              ASTRO-SHIFT
            </span>
          </div>

          {/* Desktop Navigation Links Menu */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-10 text-sm font-semibold tracking-widest text-yellow-500">
              <li>
                {/* Linked directly to the #about element ID */}
                <a href="#about" className="hover:text-red-800 transition-colors duration-300 uppercase relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300 pb-1">
                  About
                </a>
              </li>
              <li>
                <a href="#search" className="hover:text-green-600 transition-colors duration-300 uppercase relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300 pb-1">
                  Telemetry
                </a>
              </li>
              <li>
                <a href="#missions" className="hover:text-pink-800 transition-colors duration-300 uppercase relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300 pb-1">
                  Missions
                </a>
              </li>
            </ul>
          </div>

          {/* Action Button Zone & Mobile Toggle Button */}
          <div className="flex items-center gap-6">
            <button className="hidden sm:inline-flex text-s font-mono tracking-wider text-white border border-orange-600/60 bg-[#bd2102]/20 hover:bg-blue-600 px-5 py-2 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.05)] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:border-transparent transform active:scale-95">
              🤖 CHATBOT
            </button>

            {/* Mobile Hamburger Drawer Trigger Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50 text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Panel Overlay Mask */}
      <div className={`fixed inset-0 bg-[#02000a]/95 backdrop-blur-xl z-40 transition-all duration-500 md:hidden flex flex-col items-center justify-center ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-center gap-8 text-lg font-mono tracking-widest text-slate-400">
          <li>
            {/* Closes mobile drawer panel overlay before initiating smooth coordinate scroll */}
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 transition-colors duration-300 uppercase"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#search" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 transition-colors duration-300 uppercase"
            >
              Telemetry
            </a>
          </li>
          <li>
            <a 
              href="#missions" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 transition-colors duration-300 uppercase"
            >
              Missions
            </a>
          </li>
          <li className="pt-4 sm:hidden">
            <button className="text-xs font-mono tracking-wider text-white border border-blue-500/30 bg-blue-950/20 px-6 py-3 rounded-lg">
              🤖 CHATBOT
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
