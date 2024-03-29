import React from 'react';
import { Link } from 'react-router-dom';

import FullWidthSection from '../FullWidthSection/FullWidthSection';
import './Hero.css';

const Hero = () => {
  return (
    <FullWidthSection bgColor={'var(--leaf)'}>
      <div className='container hero'>
        <div className='hero-text'>
          <h1>Little Lemon</h1>
          <p className='subTitle'>Chicago</p>
          <p>
            Aliquet pellentesque tincidunt volutpat at porttitor egestas.
            Rhoncus augue bibendum rhoncus lacinia accumsan condimentum. Tellus
            hendrerit enim eget pretium facilisi. Eget mi risus eget nullam
            praesent.
          </p>

          <Link
            to='./booking'
            title='Reserve a table'
            aria-label='on Click'
            className='cta'>
            Reserve a table
          </Link>
        </div>

        <img
          className='hero-img'
          src='./imgs/heroImg.jpg'
          alt='Little Lemon Chicago'
          width='416'
          height='535'
        />
      </div>
    </FullWidthSection>
  );
};

export default Hero;
