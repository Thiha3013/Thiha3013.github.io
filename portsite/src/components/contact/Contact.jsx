import './contact.css'
import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {FaInstagram} from "react-icons/fa";
import {useRef} from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e2m6m9e', 'service_e2m6m9e', form.current, 'AnBu2_Avb7Fiz1AD-')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>mminnthiha@gmail.com</h5>
              <a href="mailto:mminnthiha@gmail.com">Send a message</a>
            </article>

            <article className="contact_option">
              <FaInstagram className='contact_option-icon'/>
              <h4>Instagram</h4>
              <h5>Myat Minn Thiha</h5>
              <a href="https://www.instagram.com/thiha.3013/">Send a message</a>
            </article>

{/*
            <article className="contact_option">
              <BsWhatsapp className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+123456789</h5>
              <a href="https://api.whatsapp.com/send?phone+233445533">Send a message</a>
            </article>
  */}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact




