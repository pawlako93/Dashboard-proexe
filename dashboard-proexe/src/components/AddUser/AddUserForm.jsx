import { addUser } from '../../redux/reducers';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { validateForm } from '../utils';
import Input from '../Input/Input';
import React from 'react';
import Button from '../Button/Button';
import './AddUserForm.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  username: '',
  address: { city: '' },
};

const AddUserForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const addUserOnSubmit = () => {
    dispatch(addUser({ ...formData, id: crypto.randomUUID().slice(0, 2) }));
    closeModal();
  };

  const { errors, formData, handleSubmit, handleChange } = useForm(
    addUserOnSubmit,
    validateForm,
    INITIAL_STATE
  );

  return (
    <form className='add-form' onSubmit={handleSubmit}>
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
      <Button typeOfButton='add' type='submit' text='Submit' />
    </form>
  );
};

export default AddUserForm;
