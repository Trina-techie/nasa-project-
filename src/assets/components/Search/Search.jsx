import React from 'react'
import World from "../../../assets/world.jpg";
const Search = () => {
  return (
    <div className='container my-36'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
            <div>
                <h1>Search your grids</h1>
                <div className='flex items-center gap-4'>
                    <input type='text' placeholder='Enter Latitude' className='input-style w-full lg:w-[150px]'/>
                    <input type='text' placeholder='Enter Latitude' className='input-style w-full lg:w-[150px]'/>
                </div>
            </div>
            <div className='cols-span-2'>
                <img src={World} alt='' className='w-full sm:w-[500px] mx-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Search