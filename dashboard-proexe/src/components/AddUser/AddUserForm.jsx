import React from 'react';
import { useForm } from '../../hooks/useForm';

const INITIAL_STATE = {
  name: '',
  email: '',
};
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validateAddForm = (data) => {
  const errors = {};
  if (!data.name) {
    errors.name = 'Name is required';
  }
  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const AddUserForm = ({ closeModal }) => {
  const addUserOnSubmit = () => {
    console.log('Submitted');
    closeModal();
  };
  const { errors, formData, handleSubmit, handleChange } = useForm(
    addUserOnSubmit,
    validateAddForm,
    INITIAL_STATE
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name || ''}
          onChange={handleChange}
        />
        {errors?.name && <p className='error'>{errors.name}</p>}
      </label>
      <br />
      <label>
        Email:
        <input
          type='email'
          name='email'
          value={formData.email || ''}
          onChange={handleChange}
        />
        {errors?.email && <p className='error'>{errors.email}</p>}
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default AddUserForm;
