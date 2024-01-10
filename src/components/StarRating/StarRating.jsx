import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(
      <span key={i} style={{ margin: '0 .125rem' }}>
        <FontAwesomeIcon icon={faStar} size='lg' color={'var(--lemon)'} />
      </span>
    );
  }

  return <p>{stars}</p>;
};

export default StarRating;
