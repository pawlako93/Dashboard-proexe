import { useEffect, useState } from 'react';

export const useForm = (callback, validate, initialValues) => {
  const [formData, setFormData] = useState({ ...initialValues });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setFormData(initialValues);
    }
  }, [errors]);

  const handleSubmit = (event) => {
    event && event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(formData));
  };

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    if (name === 'city') {
      setFormData((prevState) => {
        return {
          ...prevState,
          address: { ...formData.address, [name]: value.trim() },
        };
      });
    }
    setFormData((prevState) => {
      return { ...prevState, [name]: value.trim() };
    });
  };

  return { formData, handleSubmit, handleChange, errors };
};
