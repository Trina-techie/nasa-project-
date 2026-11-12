// import React from 'react'
// import World from "../../../assets/world.jpg";
// const Search = () => {
//   return (
//     <div className='container relative my-2 mx-0 bg-black'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4  mx-20 my-0 place-items-center text-white'>
//             <div>
//                 <h1>Search your grids</h1>
//                 <div className='flex items-center gap-6'>
//                     <input type='text' placeholder='Enter Latitude' className='input-style w-full lg:w-[250px]'/>
//                     <input type='text' placeholder='Enter Longitude' className='input-style w-full lg:w-[250px]'/>
//                 </div>
//             </div>
//             <div className='cols-span-2'>
//                 <img src={World} alt='' className='w-full sm:w-[600px] mx-auto'/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Search
import React, { useState } from 'react';
import World from "../../../assets/world.jpg";

const Search = () => {
  // State variables for tracking user input and the resolved crosshair marker
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [markerPosition, setMarkerPosition] = useState(null);
  const [error, setError] = useState('');

  // Handles coordinate submission, boundaries validation, and computing pixel coordinates
  const handleLocate = (e) => {
    e.preventDefault();
    setError('');

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);

    // Coordinate validation boundaries checks
    if (isNaN(latitude) || latitude < -90 || latitude > 90) {
      setError('Please enter a valid Latitude (-90 to 90)');
      return;
    }
    if (isNaN(longitude) || longitude < -180 || longitude > 180) {
      setError('Please enter a valid Longitude (-180 to 180)');
      return;
    }

    /**
     * Map Projection Translation Matrix
     * Maps global coordinates onto an equirectangular flat pixel canvas:
     * - Longitude (-180 to 180) translates directly to X percent (0% to 100%)
     * - Latitude (90 to -90) translates directly to Y percent (0% to 100%)
     */
    const xPercentage = ((longitude + 180) / 360) * 100;
    const yPercentage = ((90 - latitude) / 180) * 100;

    setMarkerPosition({ x: xPercentage, y: yPercentage });
  };

  // Resets state variables to clear out active crosshairs
  const handleClear = () => {
    setLat('');
    setLng('');
    setMarkerPosition(null);
    setError('');
  };

  return (
    <div className='relative w-full min-h-[500px] bg-black py-16 px-4 md:px-12 flex items-center overflow-hidden z-20'>
      
      {/* Animated Deep Space Nebula Background */}
      <div className="absolute inset-0 animate-space-bg opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className='container mx-auto relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          
          {/* Left Column: Interactive Telemetry Input Panels */}
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0 w-full">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-950/40 px-3 py-1 rounded-md border border-blue-900/50">
                🌐 Telemetry Grid Scanner
              </span>
              <h1 className="text-4xl font-extrabold text-white tracking-tight pt-2">
                Search Your Grids
              </h1>
              <p className="text-slate-400 text-sm md:text-base">
                Input global telemetry data points below. The mapping matrix will compute the target alignment matrices and project the radar crosshair.
              </p>
            </div>

            <form onSubmit={handleLocate} className="space-y-4 bg-slate-900/40 backdrop-blur-md p-6 rounded-xl border border-slate-800">
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400 uppercase">Latitude (-90 to 90)</label>
                  <input 
                    type='number' 
                    step="any"
                    placeholder='e.g., 22.5726' 
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    className='w-full bg-black/60 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-mono text-sm'
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400 uppercase">Longitude (-180 to 180)</label>
                  <input 
                    type='number' 
                    step="any"
                    placeholder='e.g., 88.3639' 
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                    className='w-full bg-black/60 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-mono text-sm'
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-xs font-mono flex items-center gap-1.5 bg-red-950/30 p-2.5 rounded border border-red-900/30">
                  ⚠️ {error}
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button 
                  type="submit"
                  className='flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-2.5 px-4 rounded-lg shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all text-sm font-mono tracking-wide uppercase'
                >
                  📡 Plot Target
                </button>
                {markerPosition && (
                  <button 
                    type="button"
                    onClick={handleClear}
                    className='bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-2.5 px-4 rounded-lg active:scale-[0.98] transition-all text-sm font-mono'
                  >
                    Clear
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Right Column: Live Target Projected Vector Map */}
          <div className='relative w-full max-w-[600px] mx-auto overflow-hidden rounded-xl border border-slate-800 shadow-2xl shadow-blue-500/5 group'>
            {/* World Map Container Box */}
            <div className="relative w-full h-full bg-slate-950">
              <img 
                src={World} 
                alt='Equirectangular reference world layout map grid projection' 
                className='w-full h-auto block select-none'
              />

              {/* Dynamic Coordinate Radar Crosshair Target Pin Overlay */}
              {markerPosition && (
                <div 
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
                  style={{ left: `${markerPosition.x}%`, top: `${markerPosition.y}%` }}
                >
                  {/* Outer Radar Rings */}
                  <span className="absolute inline-flex h-8 w-8 -left-4 -top-4 rounded-full bg-red-400 opacity-75 animate-ping"></span>
                  <span className="absolute inline-flex h-12 w-12 -left-6 -top-6 rounded-full bg-red-500 opacity-25 animate-pulse"></span>
                  
                  {/* Central Core Crosshair Intersection Dot */}
                  <div className="w-2 h-2 bg-red-500 rounded-full border border-white shadow-[0_0_10px_#ef4444]"></div>
                  
                  {/* Horizontal Crosshair Axis Vector */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-40px] w-[80px] h-[1px] bg-red-400/40 pointer-events-none"></div>
                  {/* Vertical Crosshair Axis Vector */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[-40px] h-[80px] w-[1px] bg-red-400/40 pointer-events-none"></div>
                </div>
              )}

              {/* Subtle Ambient Grid Layer Overlay lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Search;
