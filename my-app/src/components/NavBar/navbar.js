import React from 'react';
import './navbar.css';
import logo from '../../assets/result.png';
import { Link } from 'react-scroll'; // Corrected import statement
import menu from '../../components/images/menu row.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          Project
        </Link>
        <Link activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
       
        
          Contact
        </Link>
        <Link 
          to="Skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem">

          </Link>
      </div>
    </nav>
  );
};

export default Navbar;

