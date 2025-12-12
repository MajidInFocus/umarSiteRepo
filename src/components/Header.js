import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Umar Sadique</Link>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/achievements" onClick={() => setIsMenuOpen(false)}>Achievements</Link></li>
            <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
