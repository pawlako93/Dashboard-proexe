import React from 'react';
import './Button.css';

const Button = ({ onClick, text, typeOfButton, type = 'button' }) => {
  return (
    <button
      className={`button ${typeOfButton}`}
      onClick={onClick}
      typeOfButton={typeOfButton}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
