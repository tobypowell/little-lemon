import React from 'react';
import './FormError.css';

const FormError = ({ children }) => {
  return <p className='error'>{children}</p>;
};

export default FormError;
