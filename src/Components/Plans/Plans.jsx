import React from 'react';
import './Plans.css';
import { plansData } from '../../data/PlansData';
import whiteTick from '../../images/whiteTick.png'

const Plans = () => {
  return (
      <div className="plans">
          <div className="blur plans-left-blur"></div>
          <div className="blur plans-right-blur"></div>
          <div className="container">
          <div className="plans-header">
              <h2>
                  <span className='stroke-text'>ready to start </span>
                  <span>your journey</span>
                  <span className='stroke-text'> now with us</span>
              </h2>
          </div>
          <div className="plans-cards">
              {plansData.map((singlePlanData, index) => {
                  const{icon, name, price, features} = singlePlanData
                  return (
                      <div key={index} className="plans-card">
                          {icon}
                          <h4>{name}</h4>
                          <h2>$ {price}</h2>
                          <div className="plans-features">
                              {features.map((feature, index) => {
                                  return (
                                      <div key={index} className="plans-feature">
                                          <img src={whiteTick} alt="whiteTick" />
                                          <span>{feature}</span>
                                      </div>
                                  )
                              })}
                          </div>
                          <span>See more benefits -&gt; </span>
                          <button>Join Now</button>
                      </div>
                  )
              })}
          </div>
          </div>
          </div>
  )
}

export default Plans