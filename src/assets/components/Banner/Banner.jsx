// import React from 'react'
// import SphereX from '../../../assets/spherex-img.jpg';
// const Banner = () => {
//   return (
//     <div className='bg-black text-white pb-12 relative z-20'><br></br>
//       <div className="container">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
//           <div>
//             <img src={SphereX} alt='' className='w-3/4'/>
//           </div>
//           <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-l-rose-300 border-b-red-600'>
//             <p className='text-rose-800 text-xl items-center uppercase bg-slate-300 italic text-center'>our mission</p>
//             <h1 className='uppercase text-5xl'>SPherex</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum, cupiditate culpa pariatur ratione quasi quae vel nostrum ab harum.</p>
//             <button className='text-white border-2 border-white px-3 py-1 rounded-md'> LEARN MORE</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Banner
import React, { useState } from 'react';
import SphereX from '../../../assets/spherex-img.jpg';

const Banner = () => {
  // Interactive console state tracking deep space coordination matrices
  const [activeConsoleTab, setActiveConsoleTab] = useState('data');

  const telemetryConsole = {
    data: {
      subtitle: "// CONSOLE_MODE: IMAGING_STREAM",
      headline: "Spectral Mapping Grid",
      description: "Capturing deep-field coordinates across 102 near-infrared bands. Filtering background noise signatures to isolate early cosmic structural fields.",
      stat: "102 bands",
      metric: "Active Feeds"
    },
    status: {
      subtitle: "// CONSOLE_MODE: THERMAL_CRYO",
      headline: "Cryogenic Telemetry",
      description: "Monitoring the structural V-groove radiant shield architecture. Isolating sensor arrays at 55 Kelvin to guarantee zero dark-current degradation.",
      stat: "55 Kelvin",
      metric: "Array Temperature"
    }
  };

  const activeData = telemetryConsole[activeConsoleTab];

  return (
    <div className="bg-[#02000a] text-white py-20 relative z-20 font-sans">
      {/* Background Micro-Tech Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          
          {/* Kept EXACTLY from your original code: The picture layout portion */}
          <div>
            <img src={SphereX} alt="" className="w-3/4" />
          </div>

          {/* Completely Redesigned Multi-Font Interactive Telemetry Console */}
          <div className="space-y-6 p-8 bg-white/[0.01] border border-white/5 backdrop-blur-md rounded-2xl relative overflow-hidden group">
            
            {/* Tech HUD Line Border Effects */}
            <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-r from-transparent to-cyan-500" />
            <div className="absolute bottom-0 left-0 w-24 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
            
            {/* 1. Monospace Technical Tagline */}
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="font-tech text-xs tracking-widest text-cyan-400 font-medium">
                {activeData.subtitle}
              </span>
              
            </div>

            {/* 2. Bold Geometric Display Title */}
            <div className="space-y-1">
              <span className="font-tech text-[11px] text-purple-400 uppercase tracking-[0.2em] block">
                NASA SPHEREx Survey
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-wider text-white">
                SPHEREx
              </h1>
            </div>

            {/* Interactive Console Module Tabs */}
            <div className="flex gap-2 p-1 bg-white/5 rounded-lg max-w-xs">
              <button 
                onClick={() => setActiveConsoleTab('data')}
                className={`flex-1 text-center py-1.5 font-tech text-xs tracking-wider rounded transition-all duration-200 ${
                  activeConsoleTab === 'data' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                SPECTRUM
              </button>
              <button 
                onClick={() => setActiveConsoleTab('status')}
                className={`flex-1 text-center py-1.5 font-tech text-xs tracking-wider rounded transition-all duration-200 ${
                  activeConsoleTab === 'status' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                THERMAL
              </button>
            </div>

            {/* Dynamic Console Readout Screen */}
            <div className="space-y-4 min-h-[140px] flex flex-col justify-center">
              <h3 className="font-display text-sm tracking-wide text-slate-200 uppercase">
                {activeData.headline}
              </h3>
              {/* 3. Highly Legible sans-serif Body Copy */}
              <p className="font-sans text-sm text-slate-400 leading-relaxed font-normal">
                {activeData.description}
              </p>
            </div>

            {/* Live Data Stat Footprint */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
              <div>
                <p className="font-tech text-2xl font-bold text-white tracking-tight drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                  {activeData.stat}
                </p>
                <p className="font-sans text-[11px] text-slate-500">{activeData.metric}</p>
              </div>
              <div className="flex items-end justify-end">
                {/* Clean Interactive Action Trigger */}
                <button className="font-tech text-xs tracking-widest border border-white/20 bg-white/5 hover:bg-white hover:text-black px-4 py-2 rounded-lg transition-all duration-300 transform active:scale-95">
                  LEARN MORE
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
