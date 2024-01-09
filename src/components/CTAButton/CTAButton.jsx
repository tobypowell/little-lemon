import React from 'react';
import './CTAButton.css';

const CTAButton = ({ children }) => {
  return <button className='cta'>{children}</button>;
};

export default CTAButton;
