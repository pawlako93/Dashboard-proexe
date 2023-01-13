import './AddUser.css';
import { useModal } from '../../hooks/useModal';
import AddUserForm from './AddUserForm';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import React from 'react';

const AddUser = () => {
  const { isModalOpen, handleModalToggle } = useModal();

  return (
    <div className='container'>
      <h4>User List</h4>
      <Button onClick={handleModalToggle} typeOfButton='add' text='Add new' />
      {isModalOpen && (
        <Modal closeModal={handleModalToggle}>
          <AddUserForm closeModal={handleModalToggle} />
        </Modal>
      )}
    </div>
  );
};

export default AddUser;
