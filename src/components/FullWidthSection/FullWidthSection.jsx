import React from 'react';
import './FullWidthSection.css';

const FullWidthSection = ({ children, bgColor }) => {
  return (
    <section className='wrapper' style={{ backgroundColor: `${bgColor}` }}>
      {children}
    </section>
  );
};

export default FullWidthSection;
