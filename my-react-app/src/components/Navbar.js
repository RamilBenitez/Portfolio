import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={handleClick}>
          <FaBars className="bars-icon" />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMobileMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#experiences" className="nav-links" onClick={closeMobileMenu}>Experiences</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={closeMobileMenu}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links" onClick={closeMobileMenu}>Skills</a>
          </li>
          <li className="nav-item">
            <a href="#contacts" className="nav-links" onClick={closeMobileMenu}>Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;