import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ navType, navActive }) => {
  return (
    <nav className={`navigation ${navType} ${navActive ? 'active' : ''}`}>
      <ul>
        <li>
          <NavLink to='/' title='Home'>
            Home
          </NavLink>
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
          <NavLink to='/booking' title='Reservations'>
            Reservations
          </NavLink>
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
