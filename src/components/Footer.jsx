import React from 'react';
import Navigation from './Navigation';

const Footer = () => {
  return (
    <footer>
      <div className='footer_logo'>
        <img
          src='./imgs/footerLogo.png'
          alt='Little Lemon'
          width='128'
          height='232'
        />
      </div>

      <div className='footer_meta'>
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
      </div>
    </footer>
  );
};

export default Footer;
