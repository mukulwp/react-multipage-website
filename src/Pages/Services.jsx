import React from 'react'
import CommonHero from '../Components/AboutPage/CommonHero'
import GoToTop from '../Components/GoToTop'
import OurServices from '../Components/ServicesPage/OurServices/OurServices'
import ServicesIntro from '../Components/ServicesPage/ServicesIntro/ServicesIntro'

const Services = () => {
  return (
    <>
      <CommonHero headingText="Our Best Services" />
      <ServicesIntro />
      <OurServices />
      <GoToTop />
    </>
  )
}

export default Services