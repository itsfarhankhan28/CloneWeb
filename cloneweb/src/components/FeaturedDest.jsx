import React from 'react'
import dest1 from '../assets/dest1img.png'
import dest2 from '../assets/dest2img.png'
import dest3 from '../assets/dest3img.png'
import dest4 from '../assets/dest4img.png'

const FeaturedDest = () => {
  return (
    <>
      <div className='max-w-[1500px] mx-auto pt-[100px]'>
          <h1 className='font-semibold 2xl:text-5xl ps:text-2xl 2xl:m-0 ps:ml-2'>Featured Destinations</h1>
          <div className='grid 2xl:grid-cols-4 md:grid-cols-2 gap-10 pt-3'>
            <div className='shadow-2xl 2xl:m-0 ps:mx-2'>
              <img className='w-[420px]' src={dest1} alt="" />
              <h1 className='text-3xl font-semibold pl-[15px]'>India</h1>
            </div>
            <div className='shadow-2xl 2xl:m-0 ps:mx-2'>
              <img className='w-[420px]' src={dest2} alt="" />
              <h1 className='text-3xl font-semibold pl-[15px]'>Dubai</h1>
            </div>
            <div className='shadow-2xl 2xl:m-0 ps:mx-2'>
              <img className='w-[420px]' src={dest3} alt="" />
              <h1 className='text-3xl font-semibold pl-[15px]'>Paris</h1>
            </div>
            <div className='shadow-2xl 2xl:m-0 ps:mx-2'>
              <img className='w-[420px]' src={dest4} alt="" />
              <h1 className='text-3xl font-semibold pl-[15px]'>Egypt</h1>
            </div>
          </div>
        </div>
    </>
  )
}

export default FeaturedDest
