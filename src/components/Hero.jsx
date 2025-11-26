import React from 'react'
import Navbar from './Navbar'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import imgHero from '../assets/imgHero.jpg'

export default function Hero() {
  return (
    <div className='realtive overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center'>
      <Navbar />
      <main id='home' className='flex flex-col md:flex-row items-center justify-center w-full px-4
       md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10'>
        <section
          className='flex-1 mr-28 md:text-left mt-10 md:mt-0 relative'
          data-aos="fade-up" data-aos-duration="500"
        >

          <div className='absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12'></div>
          <header>
            <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
              Aaisha Shahani
            </h1>
            <h2 className='text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2'>
              Fullstack Developer
            </h2>
          </header>
          <p className='text-base sm:text-lg md:tex-lg text-gray-300 mb-6'>
            Crafting seamless web experiences with expertise in React, Node.js, and MongoDB.
          </p>
          <div className='flex items-center space-x-4 mb-6'>
            <a href='' className='text-white mr-6 text-3xl hover:text-gray-300'>
              <FiGithub />
            </a>
            <a href='' className='text-white mr-6 text-3xl hover:text-gray-300'>
              <FiLinkedin />
            </a>
          </div>
          <a href='' download='Aaisha_Shahani_Resume.pdf'>
            <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] 
              hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'>
              Download CV
            </button>
          </a>
        </section>
        <figure data-aos="fade-up" data-aos-duration="700" className='flex-1 flex justify-center md:justify-end mt-0'>
          <img src={imgHero} alt='Hero Image'
            className='h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-lg' />
        </figure>
      </main>
    </div>
  )
}
