import { useState, useEffect } from 'react';

function useFormValidation(INITIAL_STATE, validate, callback) {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const isError = Object.keys(errors).length === 0;
      if (isError && isSubmitting) {
        callback();
      }
      setSubmitting(false);
    }
  }, [errors, isSubmitting, callback]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(validate(values));
    setSubmitting(true);
  }

  return {
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
    values,
  };
}

export default useFormValidation;
