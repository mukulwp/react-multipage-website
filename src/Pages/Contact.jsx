import React from 'react'
import CommonHero from '../Components/AboutPage/CommonHero'
import ContactDetails from '../Components/ContactPage/ContactDetails';
import ContactForm from '../Components/ContactPage/ContactForm';
import GoToTop from '../Components/GoToTop';

const Contact = () => {
  return (
      <>
      <CommonHero headingText="Contact Us" />
      <ContactDetails />
      <ContactForm />
      <GoToTop />
      </>
  )
}

export default Contact