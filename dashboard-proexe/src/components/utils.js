const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validateForm = (data) => {
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
