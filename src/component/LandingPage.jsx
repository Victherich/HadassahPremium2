import React from 'react'
import Header from "./Header"
import Hero from "./Hero"
import Solutions from './Solutions'
import Products from './Products'
import WhyUs from './WhyUs'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <Solutions/>
      <Products/>
      <WhyUs/>
    </div>
  )
}

export default LandingPage
