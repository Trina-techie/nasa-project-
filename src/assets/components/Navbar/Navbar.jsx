import React from 'react'
import spherex from "../../../assets/spherex.jpg";
const Navbar = () => {
  return (
    <div className='fixed t right-0 w-full z-50 bg-black-50/10 backdrop-blur-sm py-4 sm:py-4' >
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 text-white font-medium text-2xl sm:py-0 px-10">
                    {/* <img src={spherex} alt="SphereX"/> */}
                    <span>ASTRO-SHIFT</span>
                </div>
                <div className='text-white'>
                    <ul className='flex items-center gap-7 text-l py-4'>
                        <li><a href='#'>ABOUT</a></li>
                        <li><a href='#'>Lorem, ipsum.</a></li>
                        <li><a href='#'>Lorem</a></li>
                    </ul>
                </div>
                <div>
                    <button className='text-white border-2 border-white px-3 py-1 rounded-md'>LOGIN</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar