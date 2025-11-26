import React from 'react'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <div className='realtive overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center'>
      {/*--<div className='md:h-[550px] h-[500px] w-[450px] bg-linear-to-r absolute from-[#6d2897] via-[#8e6cf5]
      to-[#bb61c5] rounded-3xl transform -rotate-45 top-28 z-0 right-2'>
      </div>*/}
      <Navbar />
    </div>
  )
}
