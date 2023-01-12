import React from 'react';
import './Modal.css';

const Modal = ({ children, closeModal }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <div>{children}</div>
        <button onClick={closeModal}>CLOSE</button>
      </div>
    </div>
  );
};

export default Modal;
