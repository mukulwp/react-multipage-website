import React from 'react';
import './ContactDetails.css';

const ContactDetails = () => {
  return (
      <section className='contact container'>
          <div className='contact-details'>
          <div className="contact-detail">
                  <i className="fa-solid fa-location-dot"></i>
                  <h4>Address</h4>
                  <p>Mada Contar 8th floor, 379 Hudson St. New York, NY 1001B US</p>
          </div>
          <div className="contact-detail">
                  <i className="fa-solid fa-phone"></i>
                  <h4>Let's Talk</h4>
                  <p>+10053848374</p>
          </div>
          <div className="contact-detail">
                  <i className="fa-regular fa-envelope"></i>
                  <h4>General Support</h4>
                  <p>fitnesssupport@gmail.com</p>
          </div>
          </div>
      </section>
  )
}

export default ContactDetails