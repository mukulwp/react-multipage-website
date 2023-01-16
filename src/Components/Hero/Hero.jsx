import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import CountUp from 'react-countup';

import './Hero.css';
import Hero from '../../images/hero_image.png';
import HeroBack from '../../images/hero_image_back.png';
import Calories from '../../images/download.png';
import Heart from '../../images/heart.png';



const Header = () => {

  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <header>
      <div className="blur header-blur"></div>
      <div className="container header">
        <div className="header-left">
          <div className="the-best-fitness">
            <motion.div
              initial={{ left: mobile ? '178px' : '238px' }}
              whileInView={{ left: '8px' }}
              transition={{...transition, type: 'linear'}}
            ></motion.div>
            <span>the best fitness club in the town</span>
          </div>

          <div className="hero-heading">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div><span>Ideal Body</span></div>
            <p>In here we will help you to shape and build your ideal body and live up your life to fullest</p>
          </div>

          <div className="figures">
            <div>
              <h3><CountUp className='counter-up' start={1} end={150}  duration={4} prefix={"+ "}/></h3>
              <span>expert coaches</span>
            </div>
            <div>
              <h3><CountUp className='counter-up' start={1} end={858}  duration={3} prefix={"+ "}/></h3>
              <span>members joined</span>
            </div>
            <div>
              <h3><CountUp className='counter-up' start={1} end={100}  duration={4} prefix={"+ "}/></h3>
              <span>fitness programs</span>
            </div>
          </div>

          <div className="header-btn">
            <Link to='/programs' className='btn-get-started'>Get Started</Link>
            <Link to='/plans' className='btn-learn-more'>Learn More</Link>
          </div>
        </div>
        <div className="header-right">
          <motion.div className="heart-rate"
            initial={{ right: '-1rem' }}
            whileInView={{ right: '4rem' }}
            transition={transition}
          >
            <img src={Heart} alt="Heart" />
            <span>Heart Rate</span>
            <span>118 bpm</span>
          </motion.div>

          <img src={Hero} alt="Hero" className="hero-img" />
          <motion.img
            initial={{right: '12rem'}}
            whileInView={{ right: '20rem' }}
            transition={transition}
            src={HeroBack} alt="HeroBack" className="hero-img-back" />

          <motion.div
            initial={{right: '34rem'}}
            whileInView={{ right: '28rem' }}
            transition={transition}
            className="calories">
            <img src={Calories} alt="Calories" />
            <div>
              <span>Calories burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
      </div>
      </div>
    </header>
  )
}

export default Header