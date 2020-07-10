import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import loginImage from '../../assest/login.jpg';
import './index.scss';
import ForgotPasswordForm from './ForgotPasswordForm';
import LoginForm from './LoginForm';

const Auth: FC = () => {
  return (
    <Router>
      <div className="container">
        <div className="form">
          <div className="form__image">
            <img src={loginImage} alt="login"></img>
          </div>
          <div className="form__data">
            <Switch>
              <Route exact path="/login">
                <LoginForm />
              </Route>
              <Route exact path="/forgot-password">
                <ForgotPasswordForm />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Auth;
