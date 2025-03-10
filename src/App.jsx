import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Companies from './components/Companies'
import Expertise from './components/Expertise'
import Service  from './components/Service'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Companies/>
      <Expertise/>
      <Service/>
      <Testimonials/>
      <Team/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App