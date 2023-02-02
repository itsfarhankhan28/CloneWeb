import React from 'react'
import hotels from '../assets/hotels.png'
import experience from '../assets/experience.png'
import restaurants from '../assets/restaurants.png'

const ExploreAirbnb = () => {
  return (
    <>
      <div className='max-w-[1500px] mx-auto pt-[150px] font-semibold text-5xl'>
          <h1>Explore Airbnb</h1>
          <div className='max-w-[1000px] text-xl grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-10 sm:gap-10 md:gap-10 pt-3'>
            <div className='flex border-solid border-2 shadow-2xl'>
              <img src={hotels} alt="" />
              <h1 className='relative top-[30px] left-[15px]'>Hotels</h1>
            </div>
            <div className='flex border-solid border-2 shadow-2xl'>
              <img src={experience} alt="" />
              <h1 className='relative top-[30px] left-[15px]'>Experience</h1>
            </div>
            <div className='flex border-solid border-2 shadow-2xl'>
              <img src={restaurants} alt="" />
              <h1 className='relative top-[30px] left-[15px]'>Restaurants</h1>
            </div>
          </div>
        </div>
    </>
  )
}

export default ExploreAirbnb
