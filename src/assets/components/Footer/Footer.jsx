// import React from 'react';

// const Footer = () => {
//   return (
//     <div className='relative bg-yellow-300 text-teal-900'>
//         <section className='max-w-[1200px] mx-auto text-teal-900 '>
//             <div className='grid md:grid-cols-2 py-5'>
//                 <div>
//                     <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Contact Us</h1>
//                 </div>
//             </div>
//         </section>
//     </div>
//   )
// }

// export default Footer
import React from 'react';

const Footer = () => {
  return (
    <footer className='relative bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 overflow-hidden z-20'>
      {/* Background Soft Ambient Radials */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className='max-w-[1200px] mx-auto px-4 md:px-6 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-900'>
          
          {/* Column 1: Mission Brief / Brand */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-wider text-white uppercase font-mono">
              🪐 SPHEREx Mission
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Advancing human understanding of the cosmos by plotting spectral all-sky telemetry matrices. Exploring early universe inflation and the origins of interstellar water.
            </p>
          </div>

          {/* Column 2: Interactive Mission Control Contacts */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono font-bold tracking-widest text-slate-400 uppercase">
              // Mission Control
            </h2>
            <ul className="space-y-3 font-mono text-sm">
              {/* <li className="flex items-center gap-3 group">
                <span className="text-blue-400 group-hover:scale-110 transition-transform">📍</span>
                <span className="text-slate-300">Krishnanagar, WB, India</span>
              </li> */}
              <li className="flex items-center gap-3 group">
                <span className="text-blue-400 group-hover:scale-110 transition-transform">✉️</span>
                <a href="mailto:control@spherex-project.space" className="text-slate-300 hover:text-blue-400 transition-colors">
                  control@spherex.space
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="text-blue-400 group-hover:scale-110 transition-transform">📡</span>
                <span className="text-slate-300">Sublink Comms Active</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Secure Uplink Contact Form */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono font-bold tracking-widest text-slate-400 uppercase">
              📬 Secure Transmission Uplink
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter secure email address" 
                  className="w-full bg-slate-900/60 border border-slate-800 text-white placeholder-slate-500 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-mono"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold px-4 py-2 rounded-lg transition active:scale-95 shadow-md shadow-blue-500/10"
                >
                  SEND
                </button>
              </div>
              <p className="text-[10px] text-slate-600 font-mono">
                * All transmissions pass standard sub-orbital cryptography check matrices.
              </p>
            </form>
          </div>

        </div>

        {/* Footer Base Details */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 font-mono text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} SPHEREx Project Hub. All telemetry assets catalogued.
          </p>
          <div className="flex gap-6 text-slate-500">
            <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
            <a href="#grids" className="hover:text-slate-300 transition-colors">Grid Scanner</a>
            <a href="#privacy" className="hover:text-slate-300 transition-colors">System Protocol</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
