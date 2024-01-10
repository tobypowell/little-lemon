import React from 'react';
import FullWidthSection from '../FullWidthSection/FullWidthSection';
import StarRating from '../StarRating/StarRating';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Brent Streich',
    quote:
      'A risus aliquam sit eu sed sed sem quam. Vel scelerisque iaculis morbi volutpat orci. ',
    image: './imgs/man.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jenny Wilson',
    quote:
      'A risus aliquam sit eu sed sed sem quam. Vel scelerisque iaculis morbi volutpat orci. ',
    image: './imgs/woman2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Esther Howard',
    quote:
      'A risus aliquam sit eu sed sed sem quam. Vel scelerisque iaculis morbi volutpat orci. ',
    image: './imgs/woman.jpg',
    rating: 4,
  },
  {
    id: 4,
    name: 'Albert Flores',
    quote:
      'A risus aliquam sit eu sed sed sem quam. Vel scelerisque iaculis morbi volutpat orci. ',
    image: './imgs/asianMan.jpg',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <FullWidthSection bgColor={'var(--leafLight)'}>
      <div className='container testimonials'>
        <h2>Testimonials</h2>
        <div className='testimonial-cards'>
          {testimonials.map((item) => {
            const { id, name, quote, image, rating } = item;
            return (
              <article key={id} className='testimonial'>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>{quote}</p>
                <StarRating rating={rating} />
              </article>
            );
          })}
        </div>
      </div>
    </FullWidthSection>
  );
};

export default Testimonials;
