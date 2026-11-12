import React, { useState } from 'react';

const About = () => {
  // Active state indicator tracking chosen squad members for specialized telemetry data readouts
  const [activeMember, setActiveMember] = useState(0);

  // Hardcoded roster matrix representing the 6 EXPLORANGERS developers and engineers
  const members = [
    {
      id: 0,
      name: "Commander Alpha",
      role: "Lead Systems Architect",
      contrib: "Engineered core map coordinate projection matrix pipelines and layout geometry boundaries mapping.",
      avatar: "📡"
    },
    {
      id: 1,
      name: "Nova Engineer",
      role: "Frontend UI/UX Specialist",
      contrib: "Constructed dark space glassmorphic layouts, component structures, and responsive tailwind modules.",
      avatar: "🚀"
    },
    {
      id: 2,
      name: "Matrix Analyst",
      role: "Telemetry Data Parser",
      contrib: "Refined mathematical calculations converting global degrees to target percentage placement values.",
      avatar: "📊"
    },
    {
      id: 3,
      name: "Nebula Designer",
      role: "Creative Concept Lead",
      contrib: "Drafted user interfaces wireframes, keyframe starfield parameters, and high-fidelity mockups.",
      avatar: "🎨"
    },
    {
      id: 4,
      name: "Quantum Dev",
      role: "State Logic Specialist",
      contrib: "Bound complex interface variables using robust reactivity arrays preventing syntax execution loops.",
      avatar: "💻"
    },
    {
      id: 5,
      name: "Orbit Tester",
      role: "QA Boundary Engineer",
      contrib: "Audited strict numerical boundaries checks for validation algorithms across all coordinate indices.",
      avatar: "🛡️"
    }
  ];

  return (
    <div id="about" className='relative w-full bg-black text-white py-20 px-4 md:px-12 overflow-hidden z-20'>
      
      {/* Structural Neon Backlighting Fields */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className='max-w-[1200px] mx-auto space-y-24 relative z-10'>
        
        {/* SECTION 1: MISSION BRIEFING & CHALLENGE ANALYSIS */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
          <div className='lg:col-span-5 space-y-3 sticky top-6'>
            <span className="text-xs font-mono font-bold tracking-widest text-rose-400 uppercase bg-rose-950/40 px-3 py-1 rounded-md border border-rose-900/50">
              NASA Space Apps Challenge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              The SPHEREx Telemetry Problem
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              NASA's upcoming SPHEREx mission will map the entire sky in infrared light, creating a massive cosmic database. The core challenge lies in building data visualization pipelines that allow everyday researchers to easily parse, locate, and explore specific celestial coordinates within this massive dataset.
            </p>
          </div>

          {/* 3D Isometric Projection Visualizing Our Methodology */}
          <div className='lg:col-span-7 perspective-1000 w-full pt-6 lg:pt-0'>
            <div className='w-full bg-slate-900/30 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl transform-style-3d transition-transform duration-500 hover:rotate-x-6 hover:-rotate-y-6 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] group'>
              <h3 className="text-lg font-mono text-indigo-400 mb-4 translate-z-10">// Strategic Approach</h3>
              
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="flex gap-4 p-3 bg-black/40 rounded-xl border border-slate-800/80 translate-z-10 group-hover:translate-z-20 transition-transform duration-500">
                  <span className="text-indigo-400 font-bold">01/</span>
                  <p className="text-slate-300"><strong className="text-white">Coordinate Translation:</strong> Built custom equations to perfectly scale raw coordinates onto a flat, responsive user-facing map grid.</p>
                </div>
                <div className="flex gap-4 p-3 bg-black/40 rounded-xl border border-slate-800/80 translate-z-10 group-hover:translate-z-20 transition-transform duration-500 delay-75">
                  <span className="text-rose-400 font-bold">02/</span>
                  <p className="text-slate-300"><strong className="text-white">Interactive Telemetry:</strong> Implemented real-time boundary error handlers to instantly validate and lock onto target markers.</p>
                </div>
                <div className="flex gap-4 p-3 bg-black/40 rounded-xl border border-slate-800/80 translate-z-10 group-hover:translate-z-20 transition-transform duration-500 delay-150">
                  <span className="text-blue-400 font-bold">03/</span>
                  <p className="text-slate-300"><strong className="text-white">Immersive Frontend:</strong> Styled an accessible, highly professional interface with subtle sci-fi micro-interactions for an engaging UX.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: THE EXPLORANGERS SQUAD MATRIX */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-indigo-950/40 px-3 py-1 rounded-md border border-indigo-900/50">
              Crew Manifest
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight pt-2">
              Team EXPLORANGERS
            </h2>
            <p className="text-slate-400 text-sm">
              Meet the 6 specialized operators driving the design, calculation, and deployment of this telemetry network.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-center">
            
            {/* Left Side: Interactive Roster Selector Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
              {members.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMember(m.id)}
                  className={`p-4 rounded-xl border text-left font-mono transition-all duration-300 relative group flex flex-col justify-between h-28 ${
                    activeMember === m.id
                      ? 'bg-gradient-to-br from-slate-900 to-indigo-950 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.2)] text-white'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300 inline-block">
                    {m.avatar}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold tracking-tight truncate w-full">{m.name}</h4>
                    <p className="text-[10px] opacity-60 truncate">{m.role}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Side: 3D Holographic Contribution Card Viewport */}
            <div className="lg:col-span-7 perspective-1000 min-h-[260px] flex items-center justify-center">
              <div 
                key={activeMember} 
                className="w-full bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-8 rounded-2xl transform-style-3d animate-[fadeIn_0.4s_ease-out] relative overflow-hidden shadow-2xl group/holo"
                style={{ transform: 'rotateY(-5deg) rotateX(5deg)' }}
              >
                {/* Tech scanline aesthetic flare */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent h-20 w-full animate-[pulse_2s_infinite] pointer-events-none"></div>
                
                <div className="space-y-4 translate-z-10 group-hover/holo:translate-z-20 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      {members[activeMember].avatar}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white">
                        {members[activeMember].name}
                      </h3>
                      <p className="text-xs font-mono text-indigo-400">
                        // {members[activeMember].role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-1 bg-black/40 p-4 rounded-xl border border-slate-900">
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
                      Core Telemetry Contributions:
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed font-sans pt-1">
                      {members[activeMember].contrib}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
