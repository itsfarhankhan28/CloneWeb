import React from 'react'
import hotels from '../assets/hotels.png'
import experience from '../assets/experience.png'
import restaurants from '../assets/restaurants.png'

const Homepage = () => {
  return (
    <div>
        <div className='leading-[145px] max-w-[1500px] mx-auto grid'>
            <div className='text-red-500 lg:text-10xl md:text-6xl sm:text-xl font-semibold pt-[178px]'>
                Airbnb
            </div>
            <div className='lg:text-6xl md:text-5xl sm:text-xl font-semibold w-[1000px] leading-[65px]'>
                Book unique homes and experience a city like a local.
            </div>
        </div>
        <div className='max-w-[1500px] mx-auto h-[70px] relative top-[53px] shadow-xl'>
            {/* <img src={searchicon2} alt="" /> */}
            <h1 className='text-xl font-semibold text-gray-400 relative top-[22px] left-[70px]'>Try "Osaka"</h1>
            <div className='w-[110px] h-[48px] relative left-[1370px] bottom-[21px] rounded-[10px] bg-red-500'>
                <h1 className='text-white relative left-[24px] top-[8px] text-lg'>Search</h1>
            </div>
        </div>
        <div className='max-w-[1500px] mx-auto pt-[150px] font-semibold text-5xl'>
          <h1>Explore Airbnb</h1>
          <div className='max-w-[1000px] text-xl grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pt-3'>
            <div className='flex border-solid border-2 shadow-2xl'>
              <img src={hotels} alt="" />
              <h1>Hotels</h1>
            </div>
            <div className='flex border-solid border-2 shadow-2xl'>
              <img src={experience} alt="" />
              <h1>Experience</h1>
            </div>
            <div className='flex border-solid border-2 shadow-2xl'>
              <img src={restaurants} alt="" />
              <h1>Restaurants</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Homepage
