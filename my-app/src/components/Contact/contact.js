import React from 'react';
import "./contact.css";
import pc from '../images/pc.jpg';


const Contact =() =>{
  return (
    
    
   
        <div className="contact">
          <div
            className="leftSide"
            style={{ backgroundImage: `url(${pc})` }}
          ></div>
          <div className='Heading'> <br /> <br />
            <h1>Contact</h1>
          </div>
          <div className="rightSide">
            <h2> Get in touch </h2>
    
            <form id="contact-form" method="POST">
              <label htmlFor="name">Full Name</label>
              <input name="name" placeholder="Enter full name..." type="text" />
              <label htmlFor="email">Email</label>
              <input name="email" placeholder="Enter email..." type="email" />
              <label htmlFor="message">Message</label>
              <textarea
                rows="6"
                placeholder="Enter message..."
                name="message"
                required
              ></textarea>
              <button type="submit"> Send Message</button>
            </form>
          </div>
        </div>
      ); 
    }
    
    export default Contact;
