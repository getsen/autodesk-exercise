export default function validateUser(values) {
  let errors = {};
  // Username validation
  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.trim().length < 6) {
    errors.username = 'Username must be atleast 6 characters';
  }
  return errors;
}
