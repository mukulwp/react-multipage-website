import React from 'react';
import './Reasons.css';
import img1 from '../../images/image1.png';
import img2 from '../../images/image2.png';
import img3 from '../../images/image3.png';
import img4 from '../../images/image4.png';
import tick from '../../images/tick.png';
import adidas from '../../images/adidas.png';
import nb from '../../images/nb.png';
import nike from '../../images/nike.png';

const Reasons = () => {
  return (
      <div className='reasons container'>
          <div className="reasons-left">
              <img src={img1} alt=""/>
              <img src={img2} alt=""/>
              <img src={img3} alt=""/>
              <img src={img4} alt=""/>
          </div>
          <div className="reasons-right">
              <h5>some reasons</h5>
              <h2><span className='stroke-text'>Why </span><span>choose us?</span></h2>
              <div className="reasons-items">
                  <div className="reasons-item">
                      <img src={tick} alt="tick" />
                      <span>OVER 140+ EXPERT COACHS</span>
                  </div>
                  <div className="reasons-item">
                      <img src={tick} alt="tick" />
                      <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                  </div>
                  <div className="reasons-item">
                      <img src={tick} alt="tick" />
                      <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                  </div>
                  <div className="reasons-item">
                      <img src={tick} alt="tick" />
                      <span>RELIABLE PARTNERS</span>
                  </div>
              </div>
              <p>our partners</p>
              <div className="brands">
                  <img src={adidas} alt="adidas" />
                  <img src={nb} alt="nb" />
                  <img src={nike} alt="nike" />
              </div>
          </div>
    </div>
  )
}

export default Reasons