import React from 'react'
import hotels from '../assets/hotels.png'
import experience from '../assets/experience.png'
import restaurants from '../assets/restaurants.png'

const ExploreAirbnb = () => {
  return (
    <>
      <div className='max-w-[1500px] mx-auto pt-[150px]'>
          <h1 className='font-semibold 2xl:text-5xl ps:text-3xl 2xl:m-0 ps:ml-2'>Explore Airbnb</h1>
          <div className='max-w-[1000px] text-xl grid 2xl:grid-cols-3 md:grid-cols-2 ps:grid-cols-1 2xl:gap-10 ps:gap-9 md:gap-10 pt-3'>
            <div className='flex border-solid border-2 2xl:shadow-2xl ps:shadow-xl 2xl:m-0 ps:ml-2 ps:mr-[50px] pl:mr-[120px]'>
              <img className='2xl:h-[95px] ps:h-[70px]' src={hotels} alt="" />
              <h1 className='relative 2xl:top-[30px] 2xl:left-[15px] ps:top-[18px] ps:left-[10px]'>Hotels</h1>
            </div>
            <div className='flex border-solid border-2 2xl:shadow-2xl ps:shadow-xl 2xl:m-0 ps:ml-2 ps:mr-[50px] pl:mr-[120px]'>
              <img className='2xl:h-[95px] ps:h-[70px]' src={experience} alt="" />
              <h1 className='relative 2xl:top-[30px] 2xl:left-[15px] ps:top-[18px] ps:left-[10px]'>Experience</h1>
            </div>
            <div className='flex border-solid border-2 2xl:shadow-2xl ps:shadow-xl 2xl:m-0 ps:ml-2 ps:mr-[50px] pl:mr-[120px]'>
              <img className='2xl:h-[95px] ps:h-[70px]' src={restaurants} alt="" />
              <h1 className='relative 2xl:top-[30px] 2xl:left-[15px] ps:top-[18px] ps:left-[10px]'>Restaurants</h1>
            </div>
          </div>
        </div>
    </>
  )
}

export default ExploreAirbnb
