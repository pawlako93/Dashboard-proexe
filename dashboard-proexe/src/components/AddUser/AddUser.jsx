import React from 'react';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import AddUserForm from './AddUserForm';

const AddUser = () => {
  const { isModalOpen, handleModalToggle } = useModal();

  return (
    <div>
      <h4>User List</h4>
      <button onClick={handleModalToggle}>Add new</button>
      {isModalOpen && (
        <Modal closeModal={handleModalToggle}>
          <AddUserForm closeModal={handleModalToggle} />
        </Modal>
      )}
    </div>
  );
};

export default AddUser;
