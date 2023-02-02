import React from 'react'
import hotel1 from '../assets/hotel1img.png'
import hotel2 from '../assets/hotel2img.png'
import hotel3 from '../assets/hotel3img.png'

const Homes = () => {
  return (
    <>
      <div className='max-w-[1500px] mx-auto pt-[100px]'>
          <h1 className='font-semibold text-5xl'>Homes</h1>
          <div className='max-w-[1500px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pt-3'>
            <div className='lg:h-[370px] sm:h-[330px] shadow-2xl'>
              <img className='w-[473px]' src={hotel1} alt="" />
              <div className='grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2'>
                <div>
                  <h1 className='lg:text-xl sm:text-base font-semibold pt-[12px] pl-[6px]'>Hotel Taj Lands End</h1>
                  <h1 className='lg:text-[20px] sm:text[15px] font-semibold pt-[5px] pl-[6px]'>Rs.5000 Per person</h1>
                  <div className='w-[111px] h-[35px] bg-red-500 rounded-[10px] mt-[10px] ml-[6px]'>
                    <h1 className='text-white font-semibold text-[18px] pl-[13px] pt-[4px]'>Check out</h1>
                  </div>
                  <div className='text-3xl relative lg:bottom-[43px] lg:left-[140px] sm:bottom-[40px] sm:left-[135px]'>
                  <ion-icon name="heart-outline"></ion-icon>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div>
                    <h1 className='lg:text-xl sm:text-lg relative lg:left-[180px] lg:top-[10px] font-bold sm:top-[8px] md:left-[145px] sm:left-[135px]'>4.7</h1>
                  </div>
                  <div className='lg:text-3xl sm:text-xl lg:pt-[7px] lg:pl-[15px] sm:pt-[9px] sm:pl-[12px]'>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:h-[370px] sm:h-[330px] shadow-2xl'>
              <img className='w-[473px]' src={hotel2} alt="" />
              <div className='grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2'>
                <div>
                  <h1 className='lg:text-xl sm:text-base font-semibold pt-[12px] pl-[6px]'>Burj Al Arab</h1>
                  <h1 className='lg:text-[20px] sm:text[15px] font-semibold pt-[5px] pl-[6px]'>Rs.10,000 Per person</h1>
                  <div className='w-[111px] h-[35px] bg-red-500 rounded-[10px] mt-[10px] ml-[6px]'>
                    <h1 className='text-white font-semibold text-[18px] pl-[13px] pt-[4px]'>Check out</h1>
                  </div>
                  <div className='text-3xl relative lg:bottom-[43px] lg:left-[140px] sm:bottom-[40px] sm:left-[135px]'>
                  <ion-icon name="heart-outline"></ion-icon>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div>
                    <h1 className='lg:text-xl sm:text-lg relative lg:left-[180px] lg:top-[10px] font-bold sm:top-[8px] md:left-[145px] sm:left-[135px]'>5.0</h1>
                  </div>
                  <div className='lg:text-3xl sm:text-xl lg:pt-[7px] lg:pl-[15px] sm:pt-[9px] sm:pl-[12px]'>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:h-[370px] sm:h-[330px] shadow-2xl'>
              <img className='w-[473px]' src={hotel3} alt="" />
              <div className='grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2'>
                <div>
                  <h1 className='lg:text-xl sm:text-base font-semibold pt-[12px] pl-[6px]'>Oberoi Hotel</h1>
                  <h1 className='lg:text-[20px] sm:text[15px] font-semibold pt-[5px] pl-[6px]'>Rs.7000 Per person</h1>
                  <div className='w-[111px] h-[35px] bg-red-500 rounded-[10px] mt-[10px] ml-[6px]'>
                    <h1 className='text-white font-semibold text-[18px] pl-[13px] pt-[4px]'>Check out</h1>
                  </div>
                  <div className='text-3xl relative lg:bottom-[43px] lg:left-[140px] sm:bottom-[40px] sm:left-[135px]'>
                  <ion-icon name="heart-outline"></ion-icon>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div>
                    <h1 className='lg:text-xl sm:text-lg relative lg:left-[180px] lg:top-[10px] font-bold sm:top-[8px] md:left-[145px] sm:left-[135px]'>4.8</h1>
                  </div>
                  <div className='lg:text-3xl sm:text-xl lg:pt-[7px] lg:pl-[15px] sm:pt-[9px] sm:pl-[12px]'>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Homes
