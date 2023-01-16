import React from 'react';
import './Programs.css';
import { programsData } from '../../data/ProgramsData/ProgramsData';
import { Link } from 'react-router-dom';
import RightArrow from '../../images/rightArrow.png'

const Programs = () => {
  return (
      <div className='programs container'>
          <div className="programs-header">
              <span className='stroke-text'>explore</span>
              <span>programs</span>
              <span className='stroke-text'>to shape you</span>
          </div>
          <div className="programs-cards">
              {programsData.map((category, index) => {
                  const {image, heading, details} = category;
                  return (
                      <div key={index} className="programs-card">
                          {image}
                          <h4>{heading}</h4>
                          <p>{details}</p>
                          <Link to='/contact'>
                              <span>Join Now</span>
                              <img src={ RightArrow} alt="Right Arrow" />
                          </Link>
                      </div>
                  )
              })}
          </div>
    </div>
  )
}

export default Programs