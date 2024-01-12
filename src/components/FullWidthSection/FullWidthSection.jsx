import React from 'react';
import './FullWidthSection.css';

const FullWidthSection = ({ children, bgColor, classes }) => {
  return (
    <section
      className={`wrapper ${classes}`}
      style={{ backgroundColor: `${bgColor}` }}>
      {children}
    </section>
  );
};

export default FullWidthSection;
