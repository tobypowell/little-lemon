import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const Card = ({ name, image, price, description }) => {
  return (
    <div className='card'>
      <img src={image} alt={name} width='300' height='209' />
      <div className='body'>
        <h3>
          {name} <span>${price}</span>
        </h3>
        <p>{description}</p>
      </div>
      <a href='/' title='Order a delivery'>
        Order a delivery <FontAwesomeIcon icon={faBicycle} />
      </a>
    </div>
  );
};

export default Card;
