// import React from 'react';
// import bgDown from '../../../assets/bg-down.jpg'
// const Hero = () => {
//   return (
//     <div className='bg-black/20 h-full text-white relative x-0 z-40'>
//         <div className="h-full flex justify-center items-center py-60 px-10 ">
//             <div className="container rel grid grid-cols-1 sm:grid-cols-2 gap-4 ">
//                 <div className='relative space-y-6 lg:pr-40'>
//                     <h1 className='text-5xl font-bold uppercase'>Search your grids</h1>
//                     <p className='lg:pr-36'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi dolores excepturi nihil quo labore, voluptates eos vel ab deserunt consequuntur quaerat hic id suscipit nam officiis! Sit voluptate quo quod.</p>
//                     <button className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-2 rounded-md duration-200'>Learn More</button>
//                 </div>
//                 <div></div>
//             </div>
//         </div>
//         {/* <img src={bgDown} alt='' className='justify-center left-50 object-bottom mix-blend-screen bottom-50 h-20 w-20 z-60 ' /> */}
//         <div className='absolute bottom-0 w-full z-20 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]'></div>
//     </div>
//   );
// };

// export default Hero
import React, { useState } from 'react';
import spherexImg from '../../../assets/spherex-img.jpg';
import bgVideo from '../../../assets/projectbg.mp4'; 

const Hero = () => {
  const [activeTab, setActiveTab] = useState('survey');

  const missionData = {
    survey: {
      title: "All-Sky Survey",
      tagline: "Mapping the entire celestial sphere",
      stat1: "450M+", label1: "Galaxies Cataloged",
      stat2: "96%", label2: "Sky Coverage",
      glowColor: "rgba(147,51,234,0.15)" 
    },
    spectrum: {
      title: "Infrared Spectrum",
      tagline: "Peering through interstellar dust clouds",
      stat1: "102", label1: "Spectral Bands",
      stat2: "3.2µm", label2: "Max Wavelength",
      glowColor: "rgba(59,130,246,0.15)" 
    },
    origins: {
      title: "Cosmic Origins",
      tagline: "Probing the inflation era of the early universe",
      stat1: "13.8B", label1: "Years Lookback",
      stat2: "0.01%", label2: "Accuracy Margin",
      glowColor: "rgba(168,85,247,0.15)" 
    }
  };

  const current = missionData[activeTab];

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center z-10">
      
      {/* 1. Looping Video Background Layer */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Crisp Dark Left Gradient Mask for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02000a] via-[#02000a]/60 to-transparent z-10" />
      </div>

      {/* 2. Main Content Layout */}
      <div className="container mx-auto max-w-7xl px-6 sm:px-12 py-32 md:py-40 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="flex flex-col items-start text-left space-y-8 max-w-xl">
            
            {/* Mission Identifier Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_#3b82f6]" />
              NASA SPHEREx Mission
            </div>

            {/* Typography Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-blue-500">
              Search your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-800 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                grids
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              Mapping hundreds of millions of galaxies across the cosmic tapestry. Toggle telemetry modules on the dashboard to filter active cosmic coordinates.
            </p>

            {/* Interactive Mode Toggles (Tabs) */}
            <div className="flex p-1 bg-black/5 border border-white/20 backdrop-blur-md rounded-xl w-full max-w-md sm:flex-row flex-col gap-1">
              {Object.keys(missionData).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`flex-1 text-center py-4 text-xs font-sans rounded-lg uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tabKey
                      ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white shadow-lg shadow-purple-500/20 scale-[1.02]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {missionData[tabKey].title}
                </button>
              ))}
            </div>

            {/* Live Telemetry Display Block */}
            <div className="w-full bg-white/10 border border/5 backdrop-blur-md rounded-xl p-5 grid grid-cols-2 gap-4">
              <div className="col-span-2 border-b border-white/5 pb-2">
                <p className="text-xs text-blue-400 font-mono tracking-widest uppercase">System Telemetry</p>
                <h4 className="text-sm font-medium text-slate-200 mt-0.5">{current.tagline}</h4>
              </div>
              <div>
                <p className="text-2xl font-black text-white font-mono tracking-tight">{current.stat1}</p>
                <p className="text-xs text-slate-500 font-medium">{current.label1}</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white font-mono tracking-tight">{current.stat2}</p>
                <p className="text-xs text-slate-500 font-medium">{current.label2}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Satellite Core Card */}
          <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[520px] flex items-center justify-center rounded-2xl border border-/10 bg-black/5 backdrop-blur-md shadow-2xl group overflow-hidden">
            
            {/* Radial Context Glow Behind Satellite */}
            <div 
              style={{ backgroundColor: current.glowColor }}
              className="absolute w-64 h-64 rounded-full blur-[90px] pointer-events-none transition-all duration-700 ease-in-out z-0" 
            />

            {/* Hover Floating Transformation Layer */}
            <div className="relative w-full h-full flex items-center justify-center pointer-events-none z-10 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2">
              <img 
                src={spherexImg} 
                alt="NASA SPHEREx Spacecraft Observatory" 
                className="w-4/5 h-auto max-h-[85%] object-contain drop-shadow-[0_15px_35px_rgba(56,189,248,0.25)] group-hover:rotate-0 transition-transform duration-700" 
              />
            </div>
            
            {/* Tech UI Hud Frame */}
            <div className="absolute inset-4 border border-dashed border-white/5 rounded-xl pointer-events-none z-20 group-hover:border-white/10 transition-colors duration-500" />
          </div>

        </div>
      </div>

      {/* 3. Re-Engineered Bottom Transition Gradient */}
      <div className='absolute bottom-0 left-0 w-full z-30 pointer-events-none bg-gradient-to-b from-transparent from-10% to-black to-90% h-[60px] sm:h-[100px] md:h-[120px] transition-all duration-500 ease-in-out'></div>
    </section>
  );
};

export default Hero;
