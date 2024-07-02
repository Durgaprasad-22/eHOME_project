// Footer.js

import React from 'react';
import './Styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3" style={{ backgroundColor: '#87CEEB' }}>
      <div className="container text-center">
        <span className="text-muted">© 2024 All rights are reserved</span>
        <div className="social-icons mt-3" >
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon mr-3">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <span className="icon-space"></span>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon mr-3">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a><span className="icon-space"></span>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
