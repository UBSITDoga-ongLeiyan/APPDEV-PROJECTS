import React from 'react';
import './index.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p>&copy;{new Date().getFullYear} Pokédex App || All rights reserved.</p>
        <div className="social-media">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
