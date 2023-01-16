import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
    const [sticky, setSticky] = useState(0);

    window.addEventListener("scroll", () => {
        setSticky(window.scrollY);
    })

  return (
      <nav className={sticky > 100 ? 'sticky' : ''}>
          <div className="container nav">
               <div className="nav-left">
              <Link to="/"><img src={Logo} alt="Fit Club" /></Link>
          </div>
              <div className="nav-middle">
                  <ul className={mobileMenuToggle ? 'nav-menu open-menu' : 'nav-menu'}>
                      <li onClick={() => {setMobileMenuToggle(false)}}>
                          <NavLink className='nav-link' to="/">Home</NavLink>
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