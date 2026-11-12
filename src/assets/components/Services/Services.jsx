// import React from 'react';
// import {FaReact} from  "react-icons/fa";
// import {FaShuttleSpace, FaSpaceAwesome} from 'react-icons/fa6';
// import downbg from "../../../assets/image.gif";
// const ServiceData=[
//     {
//     title:"lorem",
//     content:"loremipsum",
//     description:
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quibusdam.",
//     icon: <FaReact className="text-7xl"/>,
//     aosDelay:"300",
//     },
//      {
//     title:"lorem",
//     content:"loremipsum",
//     description:
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quibusdam.",
//     icon: <FaShuttleSpace className="text-7xl"/>,
//     aosDelay:"500",
//     },
//      {
//     title:"lorem",
//     content:"loremipsum",
//     description:
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quibusdam.",
//     icon: <FaSpaceAwesome className="text-7xl"/>,
//     aosDelay:"700",
//     },
// ];
// const Services = () => {
//   return (
//     <div className='bg-black text-white relative z-50'>
//         <div className="container">
//             <div className='min-h-[400px]'>
//                 <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10'>
//                     {ServiceData.map((data,index) => 
//                         (
//                             <div className='min-h-[180px] flex flex-col gap-4 justify-center items-center bg-gray-900 rounded-xl backdrop-blur-sm  text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto'>
//                                 {data.icon}
//                                 <h1>{data.title}</h1>
//                                 <p>{data.content}</p>
//                                 <p className='text-sm'>{data.description}</p>
//                             </div>
//                         ))
//                     }
//                 </div>
//                 <img src={downbg} alt='' className='h-[150px]  w-full object-bottom mix-blend-screen translate-y-0 translate-x-0 relative z-[0]'/>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default Services
import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from 'react-icons/fa6';
import downbg from "../../../assets/image.gif";

const ServiceData = [
  {
    title: "Orbital Tracking",
    content: "Real-time telemetry grids",
    description: "Monitor and stream spatial matrix layouts across planetary coordinates instantly with high precision.",
    icon: <FaReact className="text-5xl text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
    aosDelay: "300",
  },
  {
    title: "Space Exploration",
    content: "Satellite infrastructure",
    description: "Deploying structural modules mapped specifically for deep-field surveys and constellation analysis.",
    icon: <FaShuttleSpace className="text-5xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
    aosDelay: "500",
  },
  {
    title: "Cosmic Analytics",
    content: "Advanced spectral data",
    description: "Analyze chemical ice properties and structural signatures across hundreds of millions of distant galaxies.",
    icon: <FaSpaceAwesome className="text-5xl text-pink-400 group-hover:scale-110 transition-transform duration-300" />,
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white relative py-24 sm:py-32 overflow-hidden z-20">
      
      {/* Subtle background ambient mesh glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/5 to-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 sm:px-12 relative z-10">
        
        {/* Section Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-sm font-mono tracking-widest text-blue-400 uppercase">Mission Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Our Core Specializations
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-2" />
        </div>

        {/* Feature Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {ServiceData.map((data, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between items-start bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 rounded-2xl backdrop-blur-md p-8 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/5 hover:-translate-y-1"
            >
              {/* Card Accent Glow Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />
              
              <div className="space-y-5 w-full">
                {/* Icon Wrapper with glowing backdrop circle */}
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                  {data.icon}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-wide text-slate-100 group-hover:text-white transition-colors">
                    {data.title}
                  </h3>
                  <p className="text-xs font-mono tracking-wider text-purple-400/80 uppercase">
                    {data.content}
                  </p>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {data.description}
                </p>
              </div>

              {/* Decorative technical line at the card bottom */}
              <div className="w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 mt-6 rounded-full" />
            </div>
          ))}
        </div>

        {/* Realigned Animated Graphic Base Layer */}
        <div className="mt-16 sm:mt-24 border-t border-white/5 pt-8 relative overflow-hidden rounded-xl">
          <img 
            src={downbg} 
            alt="Telemetry Footer Signal" 
            className="h-[120px] sm:h-[180px] w-full object-cover mix-blend-screen opacity-50 hover:opacity-70 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02000a] via-transparent to-transparent" />
        </div>

      </div>
    </section>
  );
};

export default Services;
