
import './Contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5cfuyd2', 'template_48y741c', form.current, 'plrliqRAklLutQF04')
    e.target.reset()
      
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>CONTACT ME</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <MdOutlineEmail className="contact_option-icon"/>
              <h4>Email</h4>
              <h5>akash1222verma@gmail.com</h5>
              <a href="mailto:akash1222verma@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
          <RiMessengerLine className="contact_option-icon"/>
              <h4>Messenger</h4>
              <h5>Akash Verma</h5>
              <a href="https://m.me/100021433956253">Send a message</a>
          </article>

          <article className="contact_option">
          <BsWhatsapp className="contact_option-icon"/>
              <h4>WhatsApp</h4>
              <h5>+917417066770</h5>
              <a href="https://api.whatsapp.com/send?phone=+917417066770">Send a message</a>
          </article>


        </div>


<form ref={form} onSubmit={sendEmail}>
  <input type="text" name="name" placeholder="Your Full Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea rows="7" name="name" placeholder="Your Message" requiemail></textarea>
  <button type="submit" className="btn btn-primary">Send Message</button>
  </form>

      </div>
    </section>
  )
}

export default Contact