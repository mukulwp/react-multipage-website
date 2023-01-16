import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import Loader from '../../images/loader.gif';
import Notification from '../Notification/Notification';

const ContactForm = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loader, setLoader] = useState("");

    const form = useRef();
    const fullName = useRef();
    const email = useRef();
    const subject = useRef();
    const message = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        setLoader(Loader);

        emailjs.sendForm('service_uhkovlj', 'template_r5u60jn', form.current, 'omT9Z7NL6fpLHAS2d')
            .then((result) => {
                fullName.current.value = '';
                email.current.value = '';
                subject.current.value = '';
                message.current.value = '';
                setSuccessMessage("Thanks for contacting us!");
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
    }
        return (
            <div className="contact-form container">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="fullName">Your Full Name</label>
                        <input ref={fullName} type="text" id='fullName' name='fullName' placeholder='Your Full Name' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email Address</label>
                        <input ref={email} type="email" id='email' name='email' placeholder='Your Email Address' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Subject">Your Full Name</label>
                        <input ref={subject} type="text" id='Subject' name='Subject' placeholder='Subject' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullName">Message</label>
                        <textarea ref={message} name="message" id="message" placeholder='Type Your Message'></textarea>
                    </div>
                    <button type='submit' className='btn'>Send Message</button>
                </form>
                {loader && <img src={loader} alt="Loading" className='loader'/>}
                 <Notification successMessage={successMessage} errorMessage={errorMessage} />
            </div>
        )
    }
export default ContactForm