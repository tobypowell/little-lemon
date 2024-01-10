import React from 'react';
import FullWidthSection from '../FullWidthSection/FullWidthSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import Navigation from '../Navigation/Navigation';
import './Footer.css';

const Footer = () => {
  return (
    <FullWidthSection bgColor={'var(--leafLight)'}>
      <footer>
        <div id='footer-logo'>
          <img
            src='./imgs/footerLogo.png'
            alt='Little Lemon'
            width='128'
            height='232'
          />
          <p className='copyright'>
            &copy; Little Lemon {new Date().getFullYear()}
          </p>
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
          <div className='links'>
            <a href='#' title='Facebook'>
              <FontAwesomeIcon size='2x' icon={faFacebook} />
            </a>
            <a href='#' title='Instagram'>
              <FontAwesomeIcon size='2x' icon={faInstagram} />
            </a>
          </div>
        </div>
      </footer>
    </FullWidthSection>
  );
};

export default Footer;
