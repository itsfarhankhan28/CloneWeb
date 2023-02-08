import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='max-w-[100%] mt-[100px] 2xl:h-[460px] ps:h-[1137px] md:h-[730px] bg-gray-200'>
        <div className='max-w-[1500px] mx-auto h-[430px] relative top-[30px]'>
          <div className='grid 2xl:grid-cols-4 md:grid-cols-1'>
            <div className=''>
              <h1 className='font-semibold text-xl 2xl:m-0 ps:ml-3'>Support</h1>
              <div className='text-ps 2xl:pt-[20px] ps:pt-[10px] 2xl:leading-[45px] ps:leading-[35px] grid 2xl:grid-cols-1 md:grid-cols-3 2xl:m-0 ps:ml-3'>
                <div>Help center</div>
                <div>Air cover</div>
                <div>Supporting people with disabilities</div>
                <div>Cancellation options</div>
                <div>Our Covid-19 response</div>
                <div>Report a neighbourhood concern</div>
              </div>
            </div>
            <div className='2xl:pt-0 ps:pt-10 2xl:m-0 ps:ml-3'>
              <h1 className='font-semibold text-xl'>Community</h1>
              <div className='text-ps 2xl:pt-[20px] ps:pt-[10px] 2xl:leading-[45px] ps:leading-[35px] grid 2xl:grid-cols-1 md:grid-cols-2'>
                <div>Airbnb.org: disaster relief housing</div>
                <div>Combating discrimination</div>
              </div>
            </div>
            <div className='2xl:pt-0 ps:pt-10 2xl:m-0 ps:ml-3'>
              <h1 className='font-semibold text-xl'>Hosting</h1>
              <div className='text-ps 2xl:pt-[20px] ps:pt-[10px] 2xl:leading-[45px] ps:leading-[35px] grid 2xl:grid-cols-1 md:grid-cols-3'>
                <div>Airbnb your home</div>
                <div>AirCover for Hosts</div>
                <div>Explore hosting resources</div>
                <div>Visit our community forum</div>
                <div>How to host responsibly</div>
              </div>
            </div>
            <div className='2xl:pt-0 ps:pt-10 2xl:m-0 ps:ml-3'>
              <h1 className='font-semibold text-xl'>Airbnb</h1>
              <div className='text-ps 2xl:pt-[20px] ps:pt-[10px] 2xl:leading-[45px] ps:leading-[35px] grid 2xl:grid-cols-1 md:grid-cols-3'>
                <div>Newsroom</div>
                <div>Learn about new features</div>
                <div>Letter from our founders</div>
                <div>Careers</div>
                <div>Investors</div>
              </div>
            </div>
          </div>

          <div className='max-w-[1500px] border-solid border-2 border-gray-300 mt-[50px] '></div>

          <div className='grid 2xl:grid-cols-2 md:grid-cols-1 ps:grid-cols-1'>
            <div className='text-2xl mt-3 2xl:text-left md:text-center 2xl:m-0 ps:ml-3 ps:text-xl'>2023 Airbnb,Inc,   Privacy   Terms   Sitemap   Company details</div>
            <div className='grid grid-cols-3 mt-3'>
              <div className='flex pl-[420px] relative 2xl:right-0 ps:right-[410px] md:pl-[600px]'>
                <div className='text-[25px] pt-[8px]'>
                  <ion-icon name="globe-outline"></ion-icon>
                </div>
                <h1 className='text-xl pl-2 pt-[8px]'>English</h1>
              </div>
              <div className='text-xl pt-[8px] pl-[320px] relative 2xl:right-0 ps:right-[310px] md:pl-[430px]'>INR</div>
              <div className='flex pl-[160px] relative 2xl:right-0 ps:right-[180px] 2xl:pt-0 ps:pt-2 md:pl-[170px]'>
                <div className='text-xl'>
                  <ion-icon name="logo-twitter"></ion-icon>
                </div>
                <div className='text-xl pl-3'>
                  <ion-icon name="logo-facebook"></ion-icon>
                </div>
                <div className='text-xl pl-3'>
                  <ion-icon name="logo-instagram"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
