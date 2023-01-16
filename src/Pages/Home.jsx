import React from 'react'
import Hero from '../Components/Hero/Hero'
import Plans from '../Components/Plans/Plans'
import Programs from '../Components/Programs/Programs'
import Reasons from '../Components/Reasons/Reasons'
import Testimonials from '../Components/Testimonials/Testimonials'

export const Home = () => {
  return (
    <>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
    </>
  )
}
