import React from 'react';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import useFormValidation from '../../validation/formValidate';
import validateAccount from '../../validation/validateAccount';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../actions/action';
import './signin.scss';

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  username: '',
  retypeUsername: '',
  password: '',
  retypePassword: '',
};

function CreateAccount() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { handleChange, handleSubmit, errors, values } = useFormValidation(
    INITIAL_STATE,
    validateAccount,
    submitAccount
  );

  function submitAccount() {
    console.log('in submit account');
    dispatch(createAccount(true));
    history.push('/');
  }

  return (
    <div className='login-container create-account page'>
      <div className='card'>
        <div className='card-body'>
          <h2 className='title'>Create account</h2>
          <div className='row'>
            <div className='col-md-6 col-xs-6'>
              <div className='form-group input-grp'>
                <label>First name</label>
                <input
                  type='text'
                  onChange={handleChange}
                  name='firstname'
                  value={values.firstname}
                  autoComplete='off'
                  className={`form-control ${
                    errors.firstname && 'error-input'
                  }`}
                />
                {errors.firstname && (
                  <span className='field-error'>
                    <span>{errors.firstname}</span>
                  </span>
                )}
              </div>
            </div>
            <div className='col-md-6 col-xs-6'>
              <div className='form-group input-grp'>
                <label>Last name</label>
                <input
                  type='text'
                  onChange={handleChange}
                  name='lastname'
                  value={values.lastname}
                  autoComplete='off'
                  className={`form-control ${errors.lastname && 'error-input'}`}
                />
                {errors.lastname && (
                  <span className='field-error'>
                    <span>{errors.lastname}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 col-xs-12'>
              <div className='form-group input-grp'>
                <label>Username</label>
                <input
                  type='text'
                  onChange={handleChange}
                  name='username'
                  value={values.username}
                  autoComplete='off'
                  className={`form-control ${errors.username && 'error-input'}`}
                />
                {errors.username && (
                  <span className='field-error'>
                    <span>{errors.username}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 col-xs-12'>
              <div className='form-group input-grp'>
                <label>Re-type username</label>
                <input
                  type='text'
                  onChange={handleChange}
                  name='retypeUsername'
                  value={values.retypeUsername}
                  className={`form-control ${
                    errors.retypeUsername && 'error-input'
                  }`}
                />
                {errors.retypeUsername && (
                  <span className='field-error'>
                    <span>{errors.retypeUsername}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 col-xs-12'>
              <div className='form-group input-grp'>
                <label>Password</label>
                <input
                  type='password'
                  onChange={handleChange}
                  name='password'
                  value={values.password}
                  className={`form-control ${errors.password && 'error-input'}`}
                />
                {errors.password && (
                  <span className='field-error'>
                    <span>{errors.password}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 col-xs-12'>
              <div className='form-group input-grp'>
                <label>Re-type password</label>
                <input
                  type='password'
                  onChange={handleChange}
                  name='retypePassword'
                  value={values.retypePassword}
                  className={`form-control ${
                    errors.retypePassword && 'error-input'
                  }`}
                />
                {errors.retypePassword && (
                  <span className='field-error'>
                    <span>{errors.retypePassword}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 col-xs-12'>
              <button onClick={handleSubmit} className='btn btn-primary'>
                Create account
              </button>
            </div>
          </div>
          <div className='row form-info'>
            <div className='col-md-12 col-xs-12 text-center'>
              <span className='form-info-text'>Already have an account?</span>
              <Link to='/' className='form-info-link'>
                Sign in
              </Link>
            </div>
          </div>
          <div className='row create-account-footer'>
            <div className='col-md-12 col-xs-12'>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
