import React from 'react'
import CommonHero from '../Components/AboutPage/CommonHero'
import Blogs from '../Components/BlogPage/Blogs'
import GoToTop from '../Components/GoToTop'

const Blog = () => {
  return (
      <>
      <CommonHero headingText="Our Recent Blog" />
      <Blogs />
      <GoToTop />
      </>
  )
}

export default Blog