import React from 'react';
import bgDown from '../../../assets/bg-down.jpg'
const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative x-0 z-40'>
        <div className="h-full flex justify-center items-center py-60 px-10 ">
            <div className="container rel grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <div className='relative space-y-6 lg:pr-40'>
                    <h1 className='text-5xl font-bold uppercase'>Search your grids</h1>
                    <p className='lg:pr-36'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi dolores excepturi nihil quo labore, voluptates eos vel ab deserunt consequuntur quaerat hic id suscipit nam officiis! Sit voluptate quo quod.</p>
                    <button className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-2 rounded-md duration-200'>Learn More</button>
                </div>
                <div></div>
            </div>
        </div>
        {/* <img src={bgDown} alt='' className='justify-center left-50 object-bottom mix-blend-screen bottom-50 h-20 w-20 z-60 ' /> */}
        <div className='absolute bottom-0 w-full z-20 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]'></div>
    </div>
  );
};

export default Hero