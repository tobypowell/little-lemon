import React from 'react';
import './Card.css';

const Card = ({ name, image, price, description }) => {
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <div className='body'>
        <h3>
          {name} <span>${price}</span>
        </h3>
        <p>{description}</p>
        <a href='/' title='Order a delivery'>
          Order a delivery
          <img src='./imgs/scooter.svg' alt='Order a delivery' />
        </a>
      </div>
    </div>
  );
};

export default Card;
