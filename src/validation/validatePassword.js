export default function validatePassword(values) {
  let errors = {};
  // Password validation
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.trim().length < 8) {
    errors.password = 'Password must be atleast 6 characters';
  }
  return errors;
}
