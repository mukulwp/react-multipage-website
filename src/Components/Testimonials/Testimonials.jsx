import React, { useState } from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/TestimonialsData';
import leftArrow from '../../images/leftArrow.png'
import rightArrow from '../../images/rightArrow.png'

import { motion } from "framer-motion"

const Testimonials = () => {

    const transition = { type: 'spring', duration: 3 };

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

  return (
      <div className="testimonials container">
          <div className="t-left">
              <h4>testimonials</h4>
              <h3 className="stroke-text">what they</h3>
              <h2>say about us</h2>
              <motion.p
              key={selected}
                  initial={{ opaicty: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={transition}
              >{testimonialsData[selected].review}</motion.p>
              <span>
                  <span style={{color: 'var(--orange)'}}>{testimonialsData[selected].name}{" "}</span>
                  - {testimonialsData[selected].status}
              </span>
          </div>
          <div className="t-right">
              <motion.div
                  initial={{opacity: 0, x: -100}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{...transition, duration: 2}}
              ></motion.div>
              <motion.div
                  initial={{opacity: 0, x: 100}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{...transition, duration: 2}}
              ></motion.div>
              <motion.img src={testimonialsData[selected].image} alt="person"
                  key={selected}
                  initial={{ opaicty: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={transition}
              />
              <div className="arrows">
                  <img src={leftArrow} alt="leftArrow"
                      onClick={() => {
                          selected === 0 ? setSelected(tLength - 1) : setSelected(prev => prev - 1)
                          
                      }}
                      
                  />
                  <img src={rightArrow} alt="rightArrow"
                      onClick={() => {
                          selected !== (tLength -1) ? setSelected(prev => prev +1) : setSelected(0)
                  }}
                  />
              </div>
          </div>
    </div>
  )
}

export default Testimonials