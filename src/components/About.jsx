import React from 'react'

export default function About() {
  return (
    <section id='about'
      className='min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 text-white'>
      <div className='max-w-4xl mx-auto py-16'>
        <h2 className='text-4xl font-bold mb-6' data-aos="fade-right" data-aos-duration="500">
          About Me
        </h2>
        <p className='text-lg mb-4' data-aos="fade-left" data-aos-duration="700">
          Hello! I'm Aaisha Shahani, a passionate Fullstack Developer with a knack for creating dynamic and responsive web applications. With expertise in React, Node.js, and MongoDB, I strive to build seamless user experiences that are both functional and visually appealing.
        </p>
        <p className='text-lg mb-4' data-aos="fade-right" data-aos-duration="900">
          My journey in web development began with a curiosity for how websites work, which quickly evolved into a full-blown passion. I enjoy tackling complex problems and turning ideas into reality through code. When I'm not coding, you can find me exploring the latest tech trends or contributing to open-source projects.</p> 
        <p className='text-lg' data-aos="fade-left" data-aos-duration="1100">
          I'm always eager to connect with like-minded individuals and explore new opportunities. Feel free to reach out if you'd like to collaborate or just chat about all things tech!
        </p>
</div>
    </section>
  )
}
