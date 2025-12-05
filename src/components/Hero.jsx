import React from 'react'
import Navbar from './Navbar'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import imgHero from '../assets/imgHero.jpg'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[650px] flex flex-col items-center'>
      <Navbar />

      <main
        id='home'
        className='flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-32 pb-10 md:pb-24 pt-32 mt-10 z-10'
      >

        {/* LEFT CONTENT */}
        <section
          className='flex-1 md:text-left mt-10 md:mt-0 relative'
          data-aos="fade-up"
          data-aos-duration="600"
        >

          {/* Background Glow */}
          <div className='absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12'></div>

          {/* NAME */}
          <header>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-3'>
              Aaisha Shahani
            </h1>

            {/* Typing Animation */}
            <h2 className='text-xl md:text-2xl font-semibold text-purple-300'>
              <TypeAnimation
                sequence={[
                  "Fullstack Developer", 1500,
                  "Software Engineer", 1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </header>

          {/* PROFESSIONAL PARAGRAPH */}
          <p className='text-base md:text-lg text-gray-300 mt-4 mb-6 leading-relaxed max-w-xl'>
            Passionate about creating high-quality digital experiences with
            a strong focus on performance, scalability, and clean UI/UX.
            I specialize in building modern web applications using
            React, Node.js, MongoDB, and cloud-based development workflows.
          </p>

          
          {/* Social Icons */}
<div className='flex items-center space-x-6 mb-8'>

  {/* GitHub */}
  <a
    href=''
    target='_blank'
    className='group relative flex items-center justify-center 
               w-14 h-14 rounded-full bg-white/10 text-white text-3xl 
               transition-all duration-300 backdrop-blur-sm'
  >
    {/* Hover Glow Behind */}
    <span className='absolute inset-0 rounded-full 
                     scale-0 group-hover:scale-150 
                     bg-purple-600/30 blur-xl opacity-0 
                     group-hover:opacity-100 
                     transition-all duration-500 -z-10'>
    </span>

    {/* Icon */}
    <FiGithub
      className='relative z-10 transition-all duration-300 
                 group-hover:rotate-12 group-hover:scale-110 
                 group-hover:text-purple-300'
    />
  </a>

  {/* LinkedIn */}
  <a
    href=''
    target='_blank'
    className='group relative flex items-center justify-center 
               w-14 h-14 rounded-full bg-white/10 text-white text-3xl 
               transition-all duration-300 backdrop-blur-sm'
  >
    {/* Hover Glow Behind */}
    <span className='absolute inset-0 rounded-full 
                     scale-0 group-hover:scale-150 
                     bg-purple-600/30 blur-xl opacity-0 
                     group-hover:opacity-100 
                     transition-all duration-500 -z-10'>
    </span>

    {/* Icon */}
    <FiLinkedin
      className='relative z-10 transition-all duration-300 
                 group-hover:rotate-12 group-hover:scale-110 
                 group-hover:text-purple-300'
    />
  </a>

</div>


          {/* CV BUTTON */}
          <a href='' download='Aaisha_Shahani_Resume.pdf'>
            <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none 
              hover:bg-purple-800 rounded-full text-lg 
              hover:shadow-[0_0_30px_rgba(128,0,128,0.6)] transition'>
              Download CV
            </button>
          </a>
        </section>

        {/* HERO IMAGE */}
        <figure
          data-aos="fade-up"
          data-aos-duration="700"
          className='flex-1 flex justify-center md:justify-end mt-10 md:mt-0'
        >
          <img
            src={imgHero}
            alt='Hero Image'
            className='h-80 sm:h-[420px] md:h-[500px] w-[260px] sm:w-[350px] md:w-[430px] 
              object-cover rounded-3xl shadow-xl 
              transition duration-300 hover:scale-105 
              hover:shadow-[0px_0px_40px_rgba(205,60,245,0.6)]'
          />
        </figure>

      </main>
    </div>
  )
}
