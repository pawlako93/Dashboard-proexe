import React from 'react';
import { useModal } from '../../hooks/useModal';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import EditUserForm from './EditUserForm';

const EditUser = (props) => {
  const { isModalOpen, handleModalToggle } = useModal();

  return (
    <>
      <Button onClick={handleModalToggle} typeOfButton='edit' text='Edit' />
      {isModalOpen && (
        <Modal closeModal={handleModalToggle}>
          <EditUserForm closeModal={handleModalToggle} {...props} />
        </Modal>
      )}
    </>
  );
};

export default EditUser;
