import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import useFormValidation from '../../validation/formValidate';
import validateUser from '../../validation/validateUser';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUsername, createAccount } from '../../actions/action';
import axios from 'axios';
import './signin.scss';

const INITIAL_STATE = {
  username: '',
};

function VerifyUser() {
  const history = useHistory();
  const [verified, setVerified] = useState(false);
  const [isInValidUser, setInValidUser] = useState(false);
  const [isNewAccountCreated, setNewAccountCreated] = useState(false);
  const { newAccountCreated } = useSelector((state) => state.signInReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (newAccountCreated) {
      setNewAccountCreated(true);
      setTimeout(() => {
        dispatch(createAccount(false));
        setNewAccountCreated(false);
      }, 5000);
    }
  }, [newAccountCreated, dispatch]);

  const { handleChange, handleSubmit, errors, values } = useFormValidation(
    INITIAL_STATE,
    validateUser,
    verifyingUser
  );

  function verifyingUser() {
    setVerified(true);
    setInValidUser(false);
    //  Using mock data to validate the username
    axios.get('../../data/data.json').then((res) => {
      const user = res.data.filter((user) => user.username === values.username);
      if (user && user.length > 0) {
        dispatch(setUsername(values.username));
        // Timeout added to show verifying effect
        setTimeout(() => {
          history.push('/signIn');
        }, 500);
      } else {
        setVerified(false);
        setInValidUser(true);
      }
    });
  }

  return (
    <div className='login-container sign-in page'>
      <div className='card'>
        <div className='card-body'>
          {isNewAccountCreated && (
            <div className='alert alert-primary success-msg text-center'>
              Account created successfully
            </div>
          )}
          <h2 className='title'>Sign in</h2>
          <div className='row'>
            <div className='col-md-12 col-xs-12'>
              <div className='form-group input-grp'>
                <label>Username</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='username'
                  value={values.username}
                  className={`form-control ${errors.username && 'error-input'}`}
                  autoComplete='off'
                />
                {errors.username && (
                  <span className='field-error'>
                    <span>{errors.username}</span>
                  </span>
                )}
                {isInValidUser && (
                  <span className='field-error'>
                    <span>The username is not recognized</span>
                  </span>
                )}
              </div>
            </div>
          </div>
          <Link to='/signIn' onClick={handleSubmit}>
            <button type='submit' className='btn btn-primary'>
              {verified ? 'Verifying' : 'Next'}
            </button>
          </Link>
          <div className='row form-info'>
            <div className='col-md-12 col-xs-12 text-center'>
              <span className='form-info-text'>New to Autodesk?</span>
              <Link to='/createaccount' className='form-info-link'>
                Create account
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default VerifyUser;
