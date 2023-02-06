import React from 'react'

const Herosection = () => {
  return (
    <>
        <div className='max-w-[1500px] mx-auto '>
            <div className='md:text-center lg:text-left pm:text-center lg:leading-[150px]'>
              <h1 className='text-red-500 lg:text-10xl pm:text-7xl font-semibold pt-[150px]'>Airbnb</h1>
              <h2 className='lg:text-6xl lg:m-0 pm:text-4xl lg:leading-[65px] pm:leading-[43px] font-semibold leading-[65px]'>Book unique homes and <br />  experience a city like a local.</h2>
            </div>
        </div>
        <div className='lg:max-w-[1500px] lg:mx-auto pm:mx-2 lg:h-[70px] pm:h-[50px] relative top-[53px] shadow-xl flex'>
            <div className='lg:pt-[18px] lg:pl-[15px] lg:text-4xl pm:text-xl pm:pt-[11px]'>
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <h1 className='lg:text-xl pm:text-base font-semibold text-gray-400 lg:pt-[25px] lg:pl-[20px] pm:pt-[11px] pm:pl-[5px]'>Try "Osaka"</h1>
        </div>
    </>
  )
}

export default Herosection
