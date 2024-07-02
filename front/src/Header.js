import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faEnvelope, faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';
import './Styles.css'
import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#87CEEB' }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          {/* Menu bar icon */}
          <FontAwesomeIcon icon={faBars} className="mr-2" />

          {/* Space between icons */}
          <span className="icon-space"></span>

          {/* Logo icon */}
          <FontAwesomeIcon icon={faHome} size="2x" className="d-inline-block align-top mr-2" />
          <span className="icon-space"></span>
          <span className="name">eHOME</span>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about"><FontAwesomeIcon icon={faUser} /> About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#signup">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
