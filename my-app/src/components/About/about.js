import React from 'react';
import './about.css';
import Design from '../images/Design.png';
import Frontend from '../images/Frontend.png';
import Backend from '../images/Backend.jpg';

const About = () => {
  return (
    <section id="about">
      <div className="aboutTitle">
        <h4>What I Do</h4>
      </div>
      <div className="aboutDesc">
        <p>
          I'm a qualified IT graduate with a National Diploma in Information Technology from Walter Sisulu University. I have a strong foundation of knowledge, experience, and educational background.
        </p>
      </div>
      <div className="aboutBars">
        <div className="aboutBar">
          <img src={Design} alt="Design" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>UI Design</h2>
            <p>Content about UI Design</p>
          </div>
        </div>
        <div className="aboutBar">
          <img src={Frontend} alt="Frontend" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Front-End</h2>
            <p>Content about Front-End development</p>
          </div>
        </div>
        <div className="aboutBar">
          <img src={Backend} alt="Backend" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Back-End</h2>
            <p>Content about Back-End development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

