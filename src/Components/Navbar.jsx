import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">KoinX</div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#crypto-taxes">Crypto Taxes</a>
        <a href="#free-tools">Free Tools</a>
        <a href="#resource-center">Resource Center</a>
        <button className="get-started">Get Started</button>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
