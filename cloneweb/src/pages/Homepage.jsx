import React from 'react'
import hotels from '../assets/hotels.png'
import experience from '../assets/experience.png'
import restaurants from '../assets/restaurants.png'
import Nav from '../components/Nav'
import hotel1 from '../assets/hotel1img.png'
import hotel2 from '../assets/hotel2img.png'
import hotel3 from '../assets/hotel3img.png'

const Homepage = () => {
  return (
    <div>
      <Nav/> 
      <div className='max-w-[1500px] mx-auto '>
            {/* <div className='text-red-500 text-10xl font-semibold pt-[178px]'>
                Airbnb
            </div>
            <div className='text-6xl font-semibold w-[1000px] leading-[65px]'>
                Book unique homes and experience a city like a local.
            </div> */}
            <div className='md:text-center lg:text-left sm:text-center lg:leading-[150px]'>
              <h1 className='text-red-500 lg:text-10xl sm:text-7xl font-semibold pt-[150px]'>Airbnb</h1>
              <h2 className='lg:text-6xl sm:text-5xl lg:leading-[65px] sm:leading-[45px] font-semibold leading-[65px]'>Book unique homes and <br />  experience a city like a local.</h2>
            </div>
        </div>
        <div className='max-w-[1500px] mx-auto h-[70px] relative top-[53px] shadow-xl'>
            {/* <img src={searchicon2} alt="" /> */}
            <h1 className='text-xl font-semibold text-gray-400 relative top-[22px] left-[70px]'>Try "Osaka"</h1>
            {/* <div className='w-[110px] h-[48px] relative left-[1370px] bottom-[21px] rounded-[10px] bg-red-500'>
                <h1 className='text-white relative left-[24px] top-[8px] text-lg'>Search</h1>
            </div> */}
        </div>
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
        <div className='max-w-[1500px] mx-auto pt-[100px]'>
          <h1 className='font-semibold text-5xl'>Homes</h1>
          <div className='max-w-[1500px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pt-3'>
            <div className='h-[400px] shadow-2xl'>
              <img className='w-[470px]' src={hotel1} alt="" />
              <h1 className='text-xl font-semibold pt-[12px] pl-[6px]'>Hotel Taj Lands End</h1>
              <h1 className='text-[18px] font-semibold pt-[12px] pl-[6px]'>Rs.5000 Per person</h1>
            </div>
            <div className='h-[400px] shadow-2xl'>
              <img className='w-[470px]' src={hotel1} alt="" />
              <h1 className='text-xl font-semibold pt-[12px] pl-[6px]'>Burj Al Arab</h1>
              <h1 className='text-[18px] font-semibold pt-[12px] pl-[6px]'>Rs.10,000 Per person</h1>
            </div>
            <div className='h-[400px] shadow-2xl'>
              <img className='w-[470px]' src={hotel1} alt="" />
              <h1 className='text-xl font-semibold pt-[12px] pl-[6px]'>Oberoi Hotel</h1>
              <h1 className='text-[18px] font-semibold pt-[12px] pl-[6px]'>Rs.7000 Per person</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Homepage
