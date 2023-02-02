import React from 'react'
import dest1 from '../assets/dest1img.png'
import dest2 from '../assets/dest2img.png'
import dest3 from '../assets/dest3img.png'
import dest4 from '../assets/dest4img.png'

const FeaturedDest = () => {
  return (
    <>
      <div className='max-w-[1500px] mx-auto pt-[100px]'>
          <h1 className='font-semibold lg:text-5xl sm:text-3xl'>Featured Destinations</h1>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10 pt-3'>
            <div className='shadow-2xl'>
              <img className='w-[400px]' src={dest1} alt="" />
              <h1 className='text-3xl font-semibold pl-[15px]'>India</h1>
            </div>
            <div className='shadow-2xl'>
              <img className='w-[400px]' src={dest2} alt="" />
              <h1 className='text-3xl font-semibold pl-[15px]'>Dubai</h1>
            </div>
            <div className='shadow-2xl'>
              <img className='w-[400px]' src={dest3} alt="" />
              <h1 className='text-3xl font-semibold pl-[15px]'>Paris</h1>
            </div>
            <div className='shadow-2xl'>
              <img className='w-[400px]' src={dest4} alt="" />
              <h1 className='text-3xl font-semibold pl-[15px]'>Egypt</h1>
            </div>
          </div>
        </div>
    </>
  )
}

export default FeaturedDest