import {React, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Hero from './components/Hero.jsx'

function App(){
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <main className='bg-gray-950'>
      <Hero />
    </main>

  )
}

export default App