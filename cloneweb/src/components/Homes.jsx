import React from 'react'
import hotel1 from '../assets/hotel1img.png'
import hotel2 from '../assets/hotel2img.png'
import hotel3 from '../assets/hotel3img.png'

const Homes = () => {
  return (
    <>
      <div className='max-w-[1500px] mx-auto pt-[100px]'>
          <h1 className='font-semibold lg:text-5xl ps:text-3xl lg:m-0 ps:ml-2'>Homes</h1>
          <div className='max-w-[1500px] grid lg:grid-cols-3 md:grid-cols-2 ps:grid-cols-1 gap-10 pt-3'>
            <div className='lg:h-[370px] ps:h-[320px] shadow-2xl lg:m-0 ps:mx-2'>
              <img className='w-[473px]' src={hotel1} alt="" />
              <div className='grid lg:grid-cols-2 ps:grid-cols-2 md:grid-cols-2'>
                <div>
                  <h1 className='lg:text-xl ps:text-base font-semibold pt-[12px] pl-[6px]'>Hotel Taj Lands End</h1>
                  <h1 className='lg:text-[20px] ps:text[15px] font-semibold pt-[5px] pl-[6px]'>Rs.5000 Per person</h1>
                  <div className='w-[111px] h-[35px] bg-red-500 rounded-[10px] mt-[10px] ml-[6px]'>
                    <h1 className='text-white font-semibold text-[18px] pl-[13px] pt-[4px]'>Check out</h1>
                  </div>
                  <div className='text-3xl relative lg:bottom-[43px] lg:left-[140px] ps:bottom-[40px] ps:left-[135px]'>
                  <ion-icon name="heart-outline"></ion-icon>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div>
                    <h1 className='lg:text-xl ps:text-lg lg:pl-[175px] font-bold  md:left-[145px] ps:pt-[8px] ps:pl-[125px]  '>4.7</h1>
                  </div>
                  <div className='lg:text-3xl ps:text-xl lg:pt-[7px] lg:pl-[15px] ps:pt-[9px] ps:pl-[12px]'>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:h-[370px] ps:h-[320px] shadow-2xl lg:m-0 ps:mx-2'>
              <img className='w-[473px]' src={hotel2} alt="" />
              <div className='grid lg:grid-cols-2 ps:grid-cols-2 md:grid-cols-2'>
                <div>
                  <h1 className='lg:text-xl ps:text-base font-semibold pt-[12px] pl-[6px]'>Burj Al Arab</h1>
                  <h1 className='lg:text-[20px] ps:text[15px] font-semibold pt-[5px] pl-[6px]'>Rs.10,000 Per person</h1>
                  <div className='w-[111px] h-[35px] bg-red-500 rounded-[10px] mt-[10px] ml-[6px]'>
                    <h1 className='text-white font-semibold text-[18px] pl-[13px] pt-[4px]'>Check out</h1>
                  </div>
                  <div className='text-3xl relative lg:bottom-[43px] lg:left-[140px] ps:bottom-[40px] ps:left-[135px]'>
                  <ion-icon name="heart-outline"></ion-icon>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div>
                    <h1 className='lg:text-xl ps:text-lg lg:pl-[175px] font-bold  md:left-[145px] ps:pt-[8px] ps:pl-[125px]  '>5.0</h1>
                  </div>
                  <div className='lg:text-3xl ps:text-xl lg:pt-[7px] lg:pl-[15px] ps:pt-[9px] ps:pl-[12px]'>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:h-[370px] ps:h-[320px] shadow-2xl lg:m-0 ps:mx-2'>
              <img className='w-[473px]' src={hotel3} alt="" />
              <div className='grid lg:grid-cols-2 ps:grid-cols-2 md:grid-cols-2'>
                <div>
                  <h1 className='lg:text-xl ps:text-base font-semibold pt-[12px] pl-[6px]'>Oberoi Hotel</h1>
                  <h1 className='lg:text-[20px] ps:text[15px] font-semibold pt-[5px] pl-[6px]'>Rs.10,000 Per person</h1>
                  <div className='w-[111px] h-[35px] bg-red-500 rounded-[10px] mt-[10px] ml-[6px]'>
                    <h1 className='text-white font-semibold text-[18px] pl-[13px] pt-[4px]'>Check out</h1>
                  </div>
                  <div className='text-3xl relative lg:bottom-[43px] lg:left-[140px] ps:bottom-[40px] ps:left-[135px]'>
                  <ion-icon name="heart-outline"></ion-icon>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div>
                    <h1 className='lg:text-xl ps:text-lg lg:pl-[175px]  font-bold  md:left-[145px] ps:pt-[8px] ps:pl-[125px]  '>4.8</h1>
                  </div>
                  <div className='lg:text-3xl ps:text-xl lg:pt-[7px] lg:pl-[15px] ps:pt-[9px] ps:pl-[12px]'>
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
