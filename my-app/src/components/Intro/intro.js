import React from 'react';
import './intro.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
  
      <div className="intro">
        <div className="iconContent">
          <h3 className="iconItem">
            <FaGithub />
          </h3>
          <h3 className="iconItem">
            <FaLinkedin />
          </h3>
          <h3 className="iconItem">
            <FaFacebook />
          </h3>
        </div>
        <div className="introContent">
          <span className="introText">I'm Sinazo Sihentshe</span> <br></br>
          <span className="introSubtitle">SOFTWARE DEVELOPER</span>
        </div>
        
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <button className="btn">Contact me</button>
        </Link>
      </div>
 
  );
};

export default Intro;


             
      


    






