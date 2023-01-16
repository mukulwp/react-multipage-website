import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';
import Notification from '../Notification/Notification';
import Loader from '../../images/loader.gif';
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loader, setLoader] = useState("");

    const form = useRef();
    const nlEmail = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

      setLoader(Loader);

    emailjs.sendForm('service_uhkovlj', 'template_ab1urme', form.current, 'omT9Z7NL6fpLHAS2d')
      .then((result) => {
          setSuccessMessage("Thanks for subscribing!");
          nlEmail.current.value = "";
          setLoader("");
          setTimeout(() => {
              setSuccessMessage("");
          }, 3000)
      }, (error) => {
          setErrorMessage("Failed! Please try again.");
           setTimeout(() => {
              setErrorMessage("");
          }, 3000)
      });
  };

  return (
      <footer className='footer'>
          <div className="newsletter container">
              <div className="nl-left">
                  <h2><span className='stroke-text'>Ready to</span> Level up <br/>your body <span className='stroke-text'> with us</span></h2>
              </div>
              <div className="nl-right">
                  <form ref={form} onSubmit={sendEmail} className="nl-form">
                      <input ref={nlEmail} type="email" name="nl_email" required placeholder='Enter your email address here' />
                      <button type='submit' className='nl-btn'>Join Now</button><br />
                  </form>
                  {loader && <img src={loader} alt="Loading" className='loader'/>}
              </div>
          </div>
          <div className="notifications">
              <Notification successMessage={successMessage} errorMessage={errorMessage} />
          </div>
          <hr />
          <div className="footer-bottom container">
              <div className="social-icons">
                   <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-youtube"></i>
              </div>
              <Link to="/">
                  <img src={Logo} alt="logo" />
              </Link>
          </div>
          <div className="blur footer-blur-1"></div>
          <div className="blur footer-blur-2"></div>
    </footer>
  )
}

export default Footer