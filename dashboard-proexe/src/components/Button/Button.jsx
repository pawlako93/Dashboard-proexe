import React from 'react';
import './Button.css';

const Button = ({ onClick, text, typeOfButton = 'add', type = 'button' }) => {
  return (
    <button className={`button ${typeOfButton}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
