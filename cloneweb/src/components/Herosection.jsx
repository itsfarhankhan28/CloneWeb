import React from 'react'

const Herosection = () => {
  return (
    <>
        <div className='max-w-[1500px] mx-auto '>
            <div className='md:text-center lg:text-left sm:text-center lg:leading-[150px]'>
              <h1 className='text-red-500 lg:text-10xl sm:text-7xl font-semibold pt-[150px]'>Airbnb</h1>
              <h2 className='lg:text-6xl sm:text-5xl lg:leading-[65px] sm:leading-[45px] font-semibold leading-[65px]'>Book unique homes and <br />  experience a city like a local.</h2>
            </div>
        </div>
        <div className='max-w-[1500px] mx-auto h-[70px] relative top-[53px] shadow-xl flex'>
            <div className='pt-[18px] pl-[15px] text-4xl'>
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <h1 className='text-xl font-semibold text-gray-400 pt-[25px] pl-[20px]'>Try "Osaka"</h1>
        </div>
    </>
  )
}

export default Herosection
