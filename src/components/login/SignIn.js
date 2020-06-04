import React, { useState } from 'react';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFormValidation from '../../validation/formValidate';
import validatePassword from '../../validation/validatePassword';
import axios from 'axios';
import './signin.scss';

const INITIAL_STATE = {
  password: '',
};

function SignIn() {
  const [isInValidUser, setInValidUser] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const { username } = useSelector((state) => state.signInReducer);
  const { handleChange, handleSubmit, errors, values } = useFormValidation(
    INITIAL_STATE,
    validatePassword,
    validateCredentials
  );

  function validateCredentials() {
    setInValidUser(false);
    setAuthenticated(false);
    //  Using mock data to validate the credentials
    axios.get('../../data/data.json').then((res) => {
      const user = res.data.filter(
        (user) =>
          user.username === username && user.password === values.password
      );
      if (user && user.length > 0) {
        setAuthenticated(true);
      } else {
        setInValidUser(true);
      }
    });
  }

  return (
    <div className='login-container sign-in page'>
      <div className='card'>
        <div className='card-body'>
          {isAuthenticated && (
            <div className='alert alert-primary success-msg text-center'>
              {username} Authenticated successfully
            </div>
          )}
          <div className='row'>
            <div className='col-md-12 col-xs-12 welcome-title'>
              <div className='link-pwd-back '>
                <Link to='/'>
                  <i className='arrow-left' />
                </Link>
              </div>
              <div className='text-center'>
                <span>Welcome</span>
              </div>
            </div>
            <div className='col-md-12 col-xs-12 text-center form-info'>
              <span className='form-info-text'>{username}</span>
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
                    <span className=''>{errors.password}</span>
                  </span>
                )}
                {isInValidUser && (
                  <span className='field-error'>
                    <span>The username/password is not recognized</span>
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            type='submit'
            onClick={handleSubmit}
            className='btn btn-primary'
          >
            Sign in
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SignIn;
