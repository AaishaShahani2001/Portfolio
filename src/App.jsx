import {React, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Achievements from './components/Achievements.jsx'

function App(){
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <main className='bg-gray-950'>
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />

      <ScrollToTop />
    </main>

  )
}

export default App