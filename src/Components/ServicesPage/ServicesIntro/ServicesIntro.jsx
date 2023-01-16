import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesIntro.css';
import ServicesImage from '../../../images/ServicesIntro.jpg';
import { motion } from 'framer-motion';

const ServicesIntro = () => {

  const transition = {type: "spring", duration: 2}

  return (
      <section className='services-intro container'>
          <div className="services-intro-left">
        <motion.h2
        initial={{transform: 'scale(0.8)'}}
          whileInView={{ transform: 'scale(1)' }}
          transition={transition}
        ><span className='stroke-text'>Our best </span> Services </motion.h2>
        <motion.p
        initial={{transform: 'scale(0.8)'}}
          whileInView={{ transform: 'scale(1)' }}
          transition={transition}
        >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</motion.p>
        <motion.p
        initial={{transform: 'scale(0.8)'}}
          whileInView={{ transform: 'scale(1)' }}
          transition={transition}
        ><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</strong></motion.p>
        <motion.div
          initial={{ marginTop: '6rem'}}
          whileInView={{ marginTop: '1.5rem' }}
          transition={transition}
        >
          <Link to="/contact" className='btn'>Book a Call</Link>
              </motion.div>
          </div>
          <div className="services-intro-right">
        <motion.img src={ServicesImage} alt=""
        initial={{transform: 'scale(0.8)'}}
          whileInView={{ transform: 'scale(1)' }}
          transition={transition}
        />
          </div>
    </section>
  )
}

export default ServicesIntro