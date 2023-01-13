import { editUser } from '../../redux/reducers';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { validateForm } from '../utils';
import Input from '../Input/Input';
import React from 'react';
import Button from '../Button/Button';
import './EditUserForm.css';

const EditUserForm = (props) => {
  const { closeModal, ...otherProps } = props;
  const dispatch = useDispatch();
  const INITIAL_STATE = {
    ...otherProps,
  };

  const editUserOnSubmit = () => {
    dispatch(editUser({ ...formData }));
    closeModal();
  };

  const { errors, formData, handleSubmit, handleChange } = useForm(
    editUserOnSubmit,
    validateForm,
    INITIAL_STATE
  );

  return (
    <form className='edit-form' onSubmit={handleSubmit}>
      <Input
        type='text'
        name='name'
        value={formData.name || ''}
        onChange={handleChange}
        errorDisplay
        errors={errors}
      />
      <br />
      <Input
        type='text'
        name='email'
        value={formData.email || ''}
        onChange={handleChange}
        errorDisplay
        errors={errors}
      />
      <br />
      <Input
        type='text'
        name='username'
        value={formData.username || ''}
        onChange={handleChange}
      />
      <br />
      <Input
        type='text'
        name='city'
        value={formData.address.city || ''}
        onChange={handleChange}
      />
      <br />
      <Button typeOfButton='edit' type='submit' text='Edit' />
    </form>
  );
};

export default EditUserForm;
