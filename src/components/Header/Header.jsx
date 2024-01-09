import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const handleClick = () => {
    setNavActive(!navActive);
  };

  const menuIcon = !navActive ? 'menuIcon' : 'closeMenu';
  return (
    <header>
      <a id='logo' href='/' title='Little lemon, Home'>
        <img src='./imgs/Logo.png' alt='Little Lemon' width='148' height='40' />
      </a>
      <button id='mobile-nav' onClick={handleClick}>
        <img src={`./imgs/${menuIcon}.svg`} alt='Menu' />
      </button>
      <Navigation navType='main-nav' navActive={navActive} />
    </header>
  );
};

export default Header;
