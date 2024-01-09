import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id='hero-wrapper'>
      <div className='hero'>
        <div className='hero-text'>
          <h1>Little Lemon</h1>
          <p className='subTitle'>Chicago</p>
          <p>
            Aliquet pellentesque tincidunt volutpat at porttitor egestas.
            Rhoncus augue bibendum rhoncus lacinia accumsan condimentum. Tellus
            hendrerit enim eget pretium facilisi. Eget mi risus eget nullam
            praesent.
          </p>

          <button className='cta'>Reserve a table</button>
        </div>

        <img
          className='hero-img'
          src='./imgs/heroImg.jpg'
          alt='Little Lemon Chicago'
        />
      </div>
    </section>
  );
};

export default Hero;
