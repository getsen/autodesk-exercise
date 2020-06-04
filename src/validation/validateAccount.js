export default function validateAccount(values) {
  let errors = {};
  // Firstname validation
  if (!values.firstname) {
    errors.firstname = 'Please enter your firstname';
  }
  // Lastname validation
  if (!values.lastname) {
    errors.lastname = 'Please enter your lastname';
  }

  // Username validation
  if (!values.username || values.username.trim().length < 6) {
    errors.username = 'Please enter a valid username';
  }

  // Retype Username validation
  if (!values.retypeUsername || values.username !== values.retypeUsername) {
    errors.retypeUsername = 'Please enter the same username';
  }

  // Password validation
  if (!values.password || values.password.trim().length < 8) {
    errors.password = 'Please enter a valid password';
  }

  // Retype Password validation
  if (!values.retypePassword || values.password !== values.retypePassword) {
    errors.retypePassword = 'Please enter the same password';
  }

  return errors;
}
