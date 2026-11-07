import React from 'react'
import SphereX from '../../../assets/spherex-img.jpg';
const Banner = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-20'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img src={SphereX} alt=''/>
          </div>
          <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-l-rose-300 border-b-red-600'>
            <p className='text-rose-800 text-xl items-center uppercase bg-slate-300 italic text-center'>our mission</p>
            <h1 className='uppercase text-5xl'>SPherex</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum, cupiditate culpa pariatur ratione quasi quae vel nostrum ab harum.</p>
            <button className='text-white border-2 border-white px-3 py-1 rounded-md'> LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner