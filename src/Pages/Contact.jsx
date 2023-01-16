import React from 'react'
import CommonHero from '../Components/AboutPage/CommonHero'
import ContactDetails from '../Components/ContactPage/ContactDetails';
import ContactForm from '../Components/ContactPage/ContactForm';

const Contact = () => {
  return (
      <>
      <CommonHero headingText="Contact Us" />
      <ContactDetails />
      <ContactForm />
      </>
  )
}

export default Contact