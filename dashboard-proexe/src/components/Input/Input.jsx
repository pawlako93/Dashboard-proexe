import React from 'react';
import './Input.css';

const Input = ({ name, type, value, onChange, errorDisplay, errors }) => {
  return (
    <div className='input-container'>
      <label>{name}</label>
      <input type={type} name={name} value={value || ''} onChange={onChange} />
      {errorDisplay && errors[name] && <p className='error'>{errors[name]}</p>}
    </div>
  );
};

export default Input;
