import './DeleteUser.css';
import { deleteUser } from '../../redux/reducers';
import { useDispatch } from 'react-redux';
import { useModal } from '../../hooks/useModal';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import React from 'react';

const DeleteUser = ({ id }) => {
  const dispatch = useDispatch();
  const { isModalOpen, handleModalToggle } = useModal();
  const handleDeleteUser = (id) => () => {
    dispatch(deleteUser(id));
    handleModalToggle();
  };

  return (
    <>
      <Button onClick={handleModalToggle} typeOfButton='delete' text='Delete' />
      {isModalOpen && (
        <Modal closeModal={handleModalToggle}>
          <div className='modal-content'>
            Are you sure you want to delete this user?
            <Button
              onClick={handleDeleteUser(id)}
              typeOfButton='delete'
              text='Delete'
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default DeleteUser;
