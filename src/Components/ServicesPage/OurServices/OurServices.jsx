import React from 'react';
import './OurServices.css';
import { ServicesData } from '../../../data/ServicesData';

const OurServices = () => {
  return (
      <section className='services container'>
          <div className="services-header">
              <h4>Our Services</h4>
              <h2><span className='stroke-text'>World Best </span> Services We provide</h2>
          </div>
          <div className="services-cards">
              {ServicesData.map((service, index) => {
                  const { icon, title, desc } = service;
                  return (
                      <div key={index} className="service">
                          {icon}
                          <h4>{title}</h4>
                          <p>{desc}</p>
                      </div>
                  )
              })}
          </div>
    </section>
  )
}

export default OurServices