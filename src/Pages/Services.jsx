import React from 'react'
import CommonHero from '../Components/AboutPage/CommonHero'
import OurServices from '../Components/ServicesPage/OurServices/OurServices'
import ServicesIntro from '../Components/ServicesPage/ServicesIntro/ServicesIntro'

const Services = () => {
  return (
    <>
      <CommonHero headingText="Our Best Services" />
      <ServicesIntro />
      <OurServices />
    </>
  )
}

export default Services