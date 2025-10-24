import React from 'react'
import Hero from '../sections/Hero.jsx'
import Metrics from '../sections/Metrics.jsx'
import Features from '../sections/Features.jsx'
import Services from '../sections/Services.jsx'
import Differentiators from '../sections/Differentiators.jsx'
import Contact from '../sections/Contact.jsx'

export default function Home(){
  return (
    <div>
      <Hero />
      <Metrics />
      <Features />
      <Services />
      <Differentiators />
      <Contact />
    </div>
  )
}
