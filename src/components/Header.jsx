import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <img src='./imgs/Logo.png' alt='Little Lemon' width='148' height='40' />
      <Navigation navType='main-nav' />
    </header>
  );
};

export default Header;
