import React from 'react'

const Herosection = () => {
  return (
    <>
        <div className='max-w-[1500px] mx-auto '>
            <div className='md:text-center 2xl:text-left ps:text-center 2xl:leading-[150px]'>
              <h1 className='text-red-500 2xl:text-10xl ps:text-7xl font-semibold pt-[150px]'>Airbnb</h1>
              <h2 className='2xl:text-6xl 2xl:m-0 ps:text-4xl 2xl:leading-[65px] ps:leading-[43px] font-semibold leading-[65px]'>Book unique homes and <br />  experience a city like a local.</h2>
            </div>
        </div>
        <div className='2xl:max-w-[1500px] 2xl:mx-auto ps:mx-2 2xl:h-[70px] ps:h-[50px] relative top-[53px] shadow-xl flex md:mx-10'>
            <div className='2xl:pt-[18px] 2xl:pl-[15px] 2xl:text-4xl ps:text-xl ps:pt-[11px]'>
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <h1 className='2xl:text-xl ps:text-base font-semibold text-gray-400 2xl:pt-[25px] 2xl:pl-[20px] ps:pt-[11px] ps:pl-[5px]'>Try "Osaka"</h1>
        </div>
    </>
  )
}

export default Herosection
