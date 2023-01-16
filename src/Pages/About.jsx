import React from 'react'
import AboutUs from '../Components/AboutPage/AboutUs'
import CommonHero from '../Components/AboutPage/CommonHero'
import Team from '../Components/AboutPage/Team';
import GoToTop from '../Components/GoToTop';

const About = () => {
  return (
      <>
      <CommonHero headingText="About Us and Our Work" />
      <AboutUs />
      <Team />
      <GoToTop />
      </>
  )
}

export default About