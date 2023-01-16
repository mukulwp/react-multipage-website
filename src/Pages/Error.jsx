import React from 'react'
import CommonHero from '../Components/AboutPage/CommonHero'
import GoToTop from '../Components/GoToTop'

const Error = () => {
  return (
      <>
          <CommonHero headingText="Page Not Found!" goHomeButton="Go to Home"/>
          <GoToTop />
      </>
  )
}

export default Error