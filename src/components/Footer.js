import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Umar Sadique</h3>
            <p>Breaking barriers. Building dreams.</p>
            <p>Civil Engineering Student & Content Creator</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/achievements">Achievements</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Follow My Journey</h4>
            <div className="social-links">
              <a href="https://youtube.com/@umarsadique" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://instagram.com/umarsadique" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://tiktok.com/@umarsadique" target="_blank" rel="noopener noreferrer">TikTok</a>
              <a href="https://facebook.com/umarsadique" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Umar Sadique. All rights reserved.</p>
          <p>
            <a href="https://github.com/MajidInFocus" target="_blank" rel="noopener noreferrer">&lt;/&gt; Developed by Mj</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
