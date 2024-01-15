import React from 'react';
import './About.css';
const About = () => {
  return (
    <section id='about'>
      <div className='about-text'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Interdum adipiscing elementum faucibus vitae arcu porta. Et non mattis
          lacus faucibus enim scelerisque mauris hendrerit. Nam consequat semper
          donec libero. Gravida lectus tellus phasellus mattis tellus ac
          praesent. Senectus netus varius faucibus nunc ut amet. Nisi massa
          sagittis ut at nibh pulvinar lorem tortor euismod. Lorem risus
          venenatis viverra facilisis mauris senectus sed quisque et. Euismod
          diam integer lectus a nunc sempe.
        </p>
      </div>

      <img
        src='./imgs/about.png'
        alt='About Little Lemon'
        width='445'
        height='391'
      />
    </section>
  );
};

export default About;
