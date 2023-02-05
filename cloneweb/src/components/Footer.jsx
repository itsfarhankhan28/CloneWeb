import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='max-w-[100%] mt-[100px] lg:h-[460px] sm:h-[1124px] bg-gray-200'>
        <div className='max-w-[1500px] mx-auto h-[430px] relative top-[30px]'>
          <div className='grid lg:grid-cols-4 md:grid-cols-1'>
            <div className=''>
              <h1 className='font-semibold text-xl lg:m-0 sm:ml-3'>Support</h1>
              <div className='text-sm lg:pt-[20px] sm:pt-[10px] lg:leading-[45px] sm:leading-[35px] grid lg:grid-cols-1 md:grid-cols-3 lg:m-0 sm:ml-3'>
                <div>Help center</div>
                <div>Air cover</div>
                <div>Supporting people with disabilities</div>
                <div>Cancellation options</div>
                <div>Our Covid-19 response</div>
                <div>Report a neighbourhood concern</div>
              </div>
            </div>
            <div className='lg:pt-0 sm:pt-10 lg:m-0 sm:ml-3'>
              <h1 className='font-semibold text-xl'>Community</h1>
              <div className='text-sm lg:pt-[20px] sm:pt-[10px] lg:leading-[45px] sm:leading-[35px] grid lg:grid-cols-1 md:grid-cols-2'>
                <div>Airbnb.org: disaster relief housing</div>
                <div>Combating discrimination</div>
              </div>
            </div>
            <div className='lg:pt-0 sm:pt-10 lg:m-0 sm:ml-3'>
              <h1 className='font-semibold text-xl'>Hosting</h1>
              <div className='text-sm lg:pt-[20px] sm:pt-[10px] lg:leading-[45px] sm:leading-[35px] grid lg:grid-cols-1 md:grid-cols-3'>
                <div>Airbnb your home</div>
                <div>AirCover for Hosts</div>
                <div>Explore hosting resources</div>
                <div>Visit our community forum</div>
                <div>How to host responsibly</div>
              </div>
            </div>
            <div className='lg:pt-0 sm:pt-10 lg:m-0 sm:ml-3'>
              <h1 className='font-semibold text-xl'>Airbnb</h1>
              <div className='text-sm lg:pt-[20px] sm:pt-[10px] lg:leading-[45px] sm:leading-[35px] grid lg:grid-cols-1 md:grid-cols-3'>
                <div>Newsroom</div>
                <div>Learn about new features</div>
                <div>Letter from our founders</div>
                <div>Careers</div>
                <div>Investors</div>
              </div>
            </div>
          </div>

          <div className='max-w-[1500px] border-solid border-2 border-gray-300 mt-[50px] '></div>

          <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
            <div className='text-sm mt-3 lg:text-left md:text-center lg:m-0 sm:ml-3'>2023 Airbnb,Inc,   Privacy   Terms   Sitemap   Company details</div>
            <div className='grid grid-cols-3 mt-3'>
              <div className='flex pl-[420px] relative lg:right-0 sm:right-[410px]'>
                <div className='text-[25px]'>
                  <ion-icon name="globe-outline"></ion-icon>
                </div>
                <h1 className='text-lg pl-2 pt-[1px]'>English</h1>
              </div>
              <div className='text-lg pt-[1px] pl-[320px] relative lg:right-0 sm:right-[310px]'>INR</div>
              <div className='flex pl-[160px] relative lg:right-0 sm:right-[140px] lg:pt-0 sm:pt-2'>
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
