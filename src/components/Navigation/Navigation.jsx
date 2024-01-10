import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ navType, navActive }) => {
  return (
    <nav className={`navigation ${navType} ${navActive ? 'active' : ''}`}>
      <ul>
        <li>
          <Link to='/' title='Home'>
            Home
          </Link>
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
          <Link to='/booking' title='Reservations'>
            Reservations
          </Link>
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
