import React from 'react'
import hotels from '../assets/hotels.png'
import experience from '../assets/experience.png'
import restaurants from '../assets/restaurants.png'

const ExploreAirbnb = () => {
  return (
    <>
      <div className='max-w-[1500px] mx-auto pt-[150px]'>
          <h1 className='font-semibold lg:text-5xl pm:text-3xl lg:m-0 pm:ml-2'>Explore Airbnb</h1>
          <div className='max-w-[1000px] text-xl grid lg:grid-cols-3 md:grid-cols-2 pm:grid-cols-1 lg:gap-10 pm:gap-9 md:gap-10 pt-3'>
            <div className='flex border-solid border-2 lg:shadow-2xl pm:shadow-xl lg:m-0 pm:ml-2 pm:mr-[50px]'>
              <img className='lg:h-[95px] pm:h-[70px]' src={hotels} alt="" />
              <h1 className='relative lg:top-[30px] lg:left-[15px] pm:top-[18px] pm:left-[10px]'>Hotels</h1>
            </div>
            <div className='flex border-solid border-2 lg:shadow-2xl pm:shadow-xl lg:m-0 pm:ml-2 pm:mr-[50px]'>
              <img className='lg:h-[95px] pm:h-[70px]' src={experience} alt="" />
              <h1 className='relative lg:top-[30px] lg:left-[15px] pm:top-[18px] pm:left-[10px]'>Experience</h1>
            </div>
            <div className='flex border-solid border-2 lg:shadow-2xl pm:shadow-xl lg:m-0 pm:ml-2 pm:mr-[50px]'>
              <img className='lg:h-[95px] pm:h-[70px]' src={restaurants} alt="" />
              <h1 className='relative lg:top-[30px] lg:left-[15px] pm:top-[18px] pm:left-[10px]'>Restaurants</h1>
            </div>
          </div>
        </div>
    </>
  )
}

export default ExploreAirbnb
