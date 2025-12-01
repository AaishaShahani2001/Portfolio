import React from 'react'
import imgHero from "../assets/imgHero.jpg"

export default function Contact() {
  return (
    <section 
      id='contact'
      data-aos="fade-up" 
      data-aos-delay="300" 
      className='min-h-screen overflow-hidden flex  justify-center items-center p-6 mt-10 relative'
      >
        <article className='shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative'>
          <aside className='w-full md:w-1/2 relative'>
          <div className='absolute z-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px]
          sm:w-[#400px] h-[300px] sm:h-[400px] rounded-full ng-gradient-to-r from-[#6d2897] via-[#8e6cf5]
          to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)] opacity-30'></div>
          <img 
            src={imgHero}
            alt="Contact Us" 
            className='h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative z-10'
          />
          </aside>
          {/* Form Section */}
          <section className='p-8 w-full  md:w-1/2'>
            <header className='mb-6'>
              <h2 className='text-4xl font-bold text-white text-center'>Contact Me</h2>
            </header>
            <form className='space-y-4'>
              <div>
                <label htmlFor="name" className='block text-gray-300 font-medium mb-2'>Name</label>
                <input 
                  type="text"
                  name='name'
                  id="name"
                  className='w-full px-4 py-2 rounded-lg bg-gray-400 text-white border border-gray-700 focus:outline-none focus:border-purple-500'
                  placeholder='Your Name'
                />
              </div>
              <div>
                <label htmlFor="email" className='block text-white mb-2'>Email</label>
                <input 
                  type="email"
                  name='email'
                  id="email"
                  className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500' />
              </div>
              <div>
                <label htmlFor="message" className='block text-white mb-2'>Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500'
                  placeholder='Your Message'
                >
                </textarea>
              </div>
              <button className='w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c]
              hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'>
                Send Message
              </button>
            </form>
          </section>
        </article>
      
    </section>
  )
}
