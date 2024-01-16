import React from 'react';
import Card from '../Card/Card';

import './Specials.css';

const specials = [
  {
    id: 1,
    image: './imgs/salad.jpg',
    name: 'Greek Salad',
    price: '12.99',
    description:
      'Eget pharetra euismod tincidunt senectus pretium feugiat in. Fames ut imperdiet eros placerat ac placerat sit adipiscing.',
  },
  {
    id: 2,
    image: './imgs/bruchetta.jpg',
    name: 'Bruchetta',
    price: '6.99',
    description:
      'Eget pharetra euismod tincidunt senectus pretium feugiat in. Fames ut imperdiet eros placerat ac placerat sit adipiscing.',
  },
  {
    id: 3,
    image: './imgs/lemonCake.jpg',
    name: 'Lemon Cake',
    price: '5.00',
    description:
      'Eget pharetra euismod tincidunt senectus pretium feugiat in. Fames ut imperdiet eros placerat ac placerat sit adipiscing.',
  },
];

const Specials = () => {
  return (
    <section id='specials'>
      <div className='row'>
        <h2>Specials</h2>
        <button className='cta' aria-label='on Click'>
          Online Menu
        </button>
      </div>

      <div className='cards'>
        {specials.map((special) => {
          return <Card key={special.id} {...special} />;
        })}
      </div>
    </section>
  );
};

export default Specials;
