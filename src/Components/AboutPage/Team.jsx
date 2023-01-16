import React from 'react';
import './Team.css';
import { TeamsData } from '../../data/TeamsData';

const Team = () => {
  return (
      <section className="team container">
          <div className="blur team-blur1"></div>
          <div className="blur team-blur2"></div>
          <div className="team-header">
              <h2><span className='stroke-text'>Meet The Team </span>Our Professionals</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis delectus dolorem possimus, dolor rerum.</p>
              <button className="btn">READ MORE</button>
          </div>
          
          <div className="team-members">
              {TeamsData.map((TeamData, index) => {
                  const { image, name, title, socials } = TeamData;
                  return (
                      <div key={index} className="team-member">
                          <img src={image} alt="" />
                          <h4>{name}</h4>
                          <h5>{title}</h5>
                          <div className="socials">
                              {socials.map((social, index) => {
                                  const { icon, url } = social;
                                  return (
                                      <a key={index} href={url}>{ icon }</a>
                                  )
                              })}
                          </div>
                      </div>
                  )
              })}
          </div>
    </section>
  )
}

export default Team