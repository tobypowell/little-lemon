import React from 'react';

const Navigation = ({ navType }) => {
  return (
    <nav className={navType}>
      <ul>
        <li>
          <a href='#' title='Home'>
            Home
          </a>
        </li>
        <li>
          <a href='#' title='About'>
            About
          </a>
        </li>
        <li>
          <a href='#' title='Menu'>
            Menu
          </a>
        </li>
        <li>
          <a href='#' title='Reservations'>
            Reservations
          </a>
        </li>
        <li>
          <a href='#' title='Order Online'>
            Order Online
          </a>
        </li>
        <li>
          <a href='#' title='Login'>
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
