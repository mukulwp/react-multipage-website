import React from 'react';
import './CommonHero.css'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CommonHero = ({ headingText, goHomeButton }) => {

  const transition = { type: 'linear', duration: 1 }
  
  const navigate = useNavigate();
  
  return (
    <section className='common-hero'>
      <div className="container">
        <motion.h2
          initial={{ left: '10rem' }}
          whileInView={{ left: '0' }}
          transition={transition}
        >{headingText}</motion.h2>
        {goHomeButton && <button onClick={() => {navigate("/react-multipage-website")}} className='btn'>{ goHomeButton }</button>}
        </div>
    </section>
  )
}

export default CommonHero