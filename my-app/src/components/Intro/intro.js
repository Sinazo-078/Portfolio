import React from 'react';
import './intro.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Sihentshe from '../../assets/Sinazos.png';

const Intro = () => {
    return (

        <div className="body">
                    <section className="intro" id="home">
            <div className="introContent">
                <span className="introText">
                <h5>Hi I'm Sinazo Sihentshe</h5>
                </span>
                <br />
                <span className="introSubtitle">SOFTWARE DEVELOPER</span>
                <br />
                <br />
                <Link activeClass="active"to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <button className="btn">Contact me</button>
                </Link>

                <div className="iconContent">
                <h3 className="iconItem">
                    <FaGithub />
                </h3>
                <h3 className="iconItem">
                    <FaLinkedin />
                </h3>
                <h3 className="iconItem">
                    <FaFacebook color='blue'/>
                </h3>
                </div>
            </div>
            <img src={Sihentshe} alt="logo" className="imgContainer" />
            </section>
            </div>
    );
};

export default Intro;
