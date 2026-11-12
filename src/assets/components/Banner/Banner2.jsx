// import React from 'react';
// import SphereX from '../../../assets/spherex-img.jpg';
// const Banner2 = () => {
//   return (
//     <div className='bg-black text-white pb-12 relative z-20'>
//       <div className="container">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
//           <div className='space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-rose-300 border-b-red-600'>
//             <p className='text-rose-800 text-xl items-center uppercase bg-orange-200 italic text-center'>our mission</p>
//             <h1 className='uppercase text-5xl'>SPherex</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum, cupiditate culpa pariatur ratione quasi quae vel nostrum ab harum.</p>
//             <button className='bg-lime-950 text-white border-2 border-white px-3 py-1 rounded-md'> LEARN MORE</button>
//           </div>
//           <div>
//             <img src={SphereX} alt=''/>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Banner2;
import React from 'react';
import SphereX from '../../../assets/spherex-img.jpg';

const Banner2 = () => {
  return (
    <div className='bg-black text-white py-16 md:py-24 relative overflow-hidden z-20'>
      {/* Subtle Space Glow/Nebula Background Effect */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Content Section with Interactive Tech Border */}
          <div className='space-y-6 xl:pr-12 p-6 md:p-8 rounded-xl bg-slate-950/40 backdrop-blur-sm border-l-4 border-b-4 border-l-rose-400 border-b-indigo-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] group/card'>
            
            <div className="inline-block">
              <p className='text-rose-400 text-xs font-bold tracking-widest uppercase bg-rose-950/50 px-3 py-1 rounded-full border border-rose-800/50 italic'>
                🚀 our mission
              </p>
            </div>

            <h1 className='uppercase text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-rose-300'>
              SPHEREx
            </h1>

            <p className='text-slate-400 leading-relaxed text-base sm:text-lg'>
              Deploying a cutting-edge near-infrared space observatory to perform an all-sky spectral survey. Mapping hundreds of millions of galaxies and searching for the foundational ingredients of life across the cosmos.
            </p>

            <div>
              <button className='group relative inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-rose-600/20 hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:ring-offset-black'>
                <span className="relative z-10">LEARN MORE</span>
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200 relative z-10">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Image Section with Creative Micro-Interactions */}
          <div className="relative group/img flex justify-center items-center">
            {/* Tech frame behind image */}
            <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-indigo-500 rounded-2xl opacity-30 blur-md group-hover/img:opacity-60 transition duration-500"></div>
            
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950">
              <img 
                src={SphereX} 
                alt='SPHEREx space observatory satellite mapping the sky'
                className='w-full h-auto object-cover max-h-[450px] transform transition-all duration-700 ease-out group-hover/img:scale-105 group-hover/img:rotate-1'
                loading="lazy"
              />
              {/* Glass overlay grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner2;
