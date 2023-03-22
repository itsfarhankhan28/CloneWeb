import React from 'react'
import hotel1 from '../assets/hotel1img.png'
import hotel2 from '../assets/hotel2img.png'
import hotel3 from '../assets/hotel3img.png'

const Homes = () => {
  return (
    <>
      <div className='max-w-[1500px] mx-auto pt-[100px] lg:mx-10'>
          <h1 className='font-semibold 2xl:text-5xl ps:text-3xl 2xl:m-0 ps:ml-2'>Homes</h1>
          <div className='max-w-[1500px] grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 ps:grid-cols-1 2xl:gap-10 pt-3'>
            <div className='2xl:h-[370px] ps:h-[320px] shadow-2xl 2xl:m-0 ps:mx-2'>
              <img className='w-[473px]' src={hotel1} alt="" />
              <div className='grid 2xl:grid-cols-2 ps:grid-cols-2 md:grid-cols-2'>
                <div>
                  <h1 className='2xl:text-xl ps:text-base font-semibold pt-[12px] pl-[6px]'>Hotel Taj Lands End</h1>
                  <h1 className='2xl:text-[20px] ps:text[15px] font-semibold pt-[5px] pl-[6px]'>Rs.5000 Per person</h1>
                  <div className='w-[111px] h-[35px] bg-red-500 rounded-[10px] mt-[10px] ml-[6px]'>
                    <h1 className='text-white font-semibold text-[18px] pl-[13px] pt-[4px]'>Check out</h1>
                  </div>
                  <div className='text-3xl relative 2xl:bottom-[43px] 2xl:left-[140px] ps:bottom-[40px] ps:left-[135px]'>
                  <ion-icon name="heart-outline"></ion-icon>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div>
                    <h1 className='2xl:text-2xl ps:text-xl 2xl:pl-[175px] font-bold  md:left-[145px] ps:pt-[6px] ps:pl-[130px]  pl:pl-[145px] md:pl-[130px]'>4.7</h1>
                  </div>
                  <div className='2xl:text-3xl ps:text-xl 2xl:pt-[7px] 2xl:pl-[15px] ps:pt-[9px] ps:pl-[12px]'>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </div>
            <div className='2xl:h-[370px] ps:h-[320px] shadow-2xl 2xl:m-0 ps:mx-2'>
              <img className='w-[473px]' src={hotel2} alt="" />
              <div className='grid 2xl:grid-cols-2 ps:grid-cols-2 md:grid-cols-2'>
                <div>
                  <h1 className='2xl:text-xl ps:text-base font-semibold pt-[12px] pl-[6px]'>Burj Al Arab</h1>
                  <h1 className='2xl:text-[20px] ps:text[15px] font-semibold pt-[5px] pl-[6px]'>Rs.10,000 Per person</h1>
                  <div className='w-[111px] h-[35px] bg-red-500 rounded-[10px] mt-[10px] ml-[6px]'>
                    <h1 className='text-white font-semibold text-[18px] pl-[13px] pt-[4px]'>Check out</h1>
                  </div>
                  <div className='text-3xl relative 2xl:bottom-[43px] 2xl:left-[140px] ps:bottom-[40px] ps:left-[135px]'>
                  <ion-icon name="heart-outline"></ion-icon>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div>
                    <h1 className='2xl:text-2xl ps:text-xl 2xl:pl-[175px] font-bold  md:left-[145px] ps:pt-[6px] ps:pl-[130px]  pl:pl-[145px] md:pl-[130px]'>5.0</h1>
                  </div>
                  <div className='2xl:text-3xl ps:text-xl 2xl:pt-[7px] 2xl:pl-[15px] ps:pt-[9px] ps:pl-[12px]'>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </div>
            <div className='2xl:h-[370px] ps:h-[320px] shadow-2xl 2xl:m-0 ps:mx-2'>
              <img className='w-[473px]' src={hotel3} alt="" />
              <div className='grid 2xl:grid-cols-2 ps:grid-cols-2 md:grid-cols-2'>
                <div>
                  <h1 className='2xl:text-xl ps:text-base font-semibold pt-[12px] pl-[6px]'>Oberoi Hotel</h1>
                  <h1 className='2xl:text-[20px] ps:text[15px] font-semibold pt-[5px] pl-[6px]'>Rs.10,000 Per person</h1>
                  <div className='w-[111px] h-[35px] bg-red-500 rounded-[10px] mt-[10px] ml-[6px]'>
                    <h1 className='text-white font-semibold text-[18px] pl-[13px] pt-[4px]'>Check out</h1>
                  </div>
                  <div className='text-3xl relative 2xl:bottom-[43px] 2xl:left-[140px] ps:bottom-[40px] ps:left-[135px]'>
                  <ion-icon name="heart-outline"></ion-icon>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div>
                    <h1 className='2xl:text-2xl ps:text-xl 2xl:pl-[175px]  font-bold  md:left-[145px] ps:pt-[6px] ps:pl-[130px] pl:pl-[145px] md:pl-[130px]'>4.8</h1>
                  </div>
                  <div className='2xl:text-3xl ps:text-xl 2xl:pt-[7px] 2xl:pl-[15px] ps:pt-[9px] ps:pl-[12px]'>
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
