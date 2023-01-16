import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  return (
      <nav className='navbar'>
          <div className="container nav">
               <div className="nav-left">
              <Link to="/react-multipage-website"><img src={Logo} alt="Fit Club" /></Link>
          </div>
              <div className="nav-middle">
                  <ul onClick={() => {setMobileMenuToggle(false)}} className={mobileMenuToggle ? 'nav-menu open-menu' : 'nav-menu'}>
                      <li>
                          <NavLink className='nav-link' to="/react-multipage-website">Home</NavLink>
                          <NavLink className='nav-link' to="/about">About</NavLink>
                          <NavLink className='nav-link' to="/services">Services</NavLink>
                          <NavLink className='nav-link' to="/blog">Blog</NavLink>
                          <NavLink className='nav-link' to="/contact">Contact</NavLink>
                      </li>
                  </ul>
                   <div className="mobile-menu-icons" onClick={() => {setMobileMenuToggle(!mobileMenuToggle)}}>
                      {mobileMenuToggle ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                  </div>
              </div>
              <div className="nav-right">
                  
                  <NavLink className="join-now" to="/join-now">Join Now</NavLink>
              </div>
         </div>
    </nav>
  )
}

export default Navbar