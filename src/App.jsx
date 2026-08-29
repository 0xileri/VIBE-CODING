import { useMemo } from 'react'
import { testimonials } from './data'
import { useReveal, useScrollSpy } from './hooks/useReveal'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Stats from './components/Stats'
import Featured from './components/Featured'
import Achievements from './components/Achievements'
import Proof from './components/Proof'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'proof', label: 'Proof' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  useReveal()
  useScrollSpy(useMemo(() => NAV.map((s) => s.id), []))

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <Nav sections={NAV} />

      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Stats />
        <Featured />
        <Achievements />
        <Proof />
        {testimonials.length > 0 && <Testimonials />}
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
