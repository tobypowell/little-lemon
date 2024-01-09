import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Footer.css';

const Footer = () => {
  return (
    <div id='footer-wrapper'>
      <footer>
        <div id='footer-logo'>
          <img
            src='./imgs/footerLogo.png'
            alt='Little Lemon'
            width='128'
            height='232'
          />
        </div>

        <Navigation navType='doormat-nav' />

        <address>
          <h5>Contact: </h5>
          <p>
            2464 Royal Ln. Mesa,
            <br /> New Jersey 45463
          </p>
          <p>
            <strong>tel: </strong>(505) 555-0125
            <br />
            <strong>email: </strong>info@littlelemon.com
          </p>
        </address>

        <div className='social-media'>
          <h5>Follow us:</h5>
          <a href='#' title='Facebook'>
            Facebook
          </a>
          <a href='#' title='Instagram'>
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
