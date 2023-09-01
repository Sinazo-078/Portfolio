import React, { useRef } from 'react';
import './contact.css';
import pc from '../images/pc.jpg';
import emailjs from 'emailjs-com'; // Correct import statement


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kjioybs', 'template_gj3p81i', e.target, 'hPuv9fH3TuF7kOgoU')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${pc})` }}></div>
      <div className="Heading">
        <br /> <br />
        <h1>Contact</h1>
      </div>
      <div className="rightSide">
        <h2>Get in touch</h2>
        <form id="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" from/>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

