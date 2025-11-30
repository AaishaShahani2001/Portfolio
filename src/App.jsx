import {React, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'

function App(){
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <main className='bg-gray-950'>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>

  )
}

export default App