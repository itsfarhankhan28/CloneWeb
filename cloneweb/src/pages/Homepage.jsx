import React from 'react'
import hotels from '../assets/hotels.png'
import experience from '../assets/experience.png'
import restaurants from '../assets/restaurants.png'
import Nav from '../components/Nav'
import hotel1 from '../assets/hotel1img.png'
import hotel2 from '../assets/hotel2img.png'
import hotel3 from '../assets/hotel3img.png'
import dest1 from '../assets/dest1img.png'
import dest2 from '../assets/dest2img.png'
import dest3 from '../assets/dest3img.png'
import dest4 from '../assets/dest4img.png'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      {/* NavBar */}
      <Nav/>

      {/* HeroSection */}
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

        {/* Explore Airbnb Section */}
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

        {/* Homes Section */}
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

        {/* Featured destination Section */}
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

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Homepage
