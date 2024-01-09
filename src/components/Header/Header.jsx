import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  return (
    <header>
      <a id='logo' href='/' title='Little lemon, Home'>
        <img src='./imgs/Logo.png' alt='Little Lemon' width='148' height='40' />
      </a>
      <Navigation navType='main-nav' />
    </header>
  );
};

export default Header;
