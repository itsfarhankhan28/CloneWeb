import React from 'react'

const Homepage = () => {
  return (
    <div>
      <div className='leading-[145px] max-w-[1500px] mx-auto'>
            <div className='text-red-500 text-10xl font-semibold pt-[178px]'>
                Airbnb
            </div>
            <div className='text-6xl font-semibold w-[1000px] leading-[65px]'>
                Book unique homes and experience a city like a local.
            </div>
        </div>
        <div className='max-w-[1500px] mx-auto h-[70px] relative top-[53px] shadow-xl'>
            {/* <img src={searchicon2} alt="" /> */}
            <h1 className='text-xl font-semibold text-gray-400 relative top-[22px] left-[70px]'>Try "Osaka"</h1>
            <div className='w-[110px] h-[48px] relative left-[1370px] bottom-[21px] rounded-[10px] bg-red-500'>
                <h1 className='text-white relative left-[24px] top-[8px] text-lg'>Search</h1>
            </div>
        </div>
    </div>
  )
}

export default Homepage
