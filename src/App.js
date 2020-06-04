import React, { useState, useEffect } from 'react';
import SignIn from './components/login/SignIn';
import VerifyUser from './components/login/VerifyUser';
import CreateAccount from './components/login/CreateAccount';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.scss';

function App(props) {
  const { location } = props;
  const [prevDepth, setPrevDepth] = useState(getPathDepth(location));

  useEffect(() => {
    setPrevDepth(1);
  }, [location]);

  function getPathDepth(location) {
    let pathArr = location.pathname.split('/');
    pathArr = pathArr.filter((n) => n !== '');
    return pathArr.length;
  }

  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 800, exit: 400 };
  return (
    <TransitionGroup component='div' className='container'>
      <CSSTransition
        key={currentKey}
        timeout={timeout}
        classNames='pageSlider'
        mountOnEnter={false}
        unmountOnExit={true}
      >
        <div
          className={getPathDepth(location) - prevDepth >= 0 ? 'left' : 'right'}
        >
          <Switch location={location}>
            <Route path='/' exact component={VerifyUser} />
            <Route path='/signIn' exact component={SignIn} />
            <Route path='/createaccount' exact component={CreateAccount} />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(App);
