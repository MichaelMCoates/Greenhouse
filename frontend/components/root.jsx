import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import LogInFormContainer from './log_in_form/log_in_form_container';
import SignUpFormContainer from './sign_up_form/sign_up_form_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } />
      <Route path="/login" component={ LogInFormContainer } />
      <Route path="/signup" component={ SignUpFormContainer } />
    </Router>
  </Provider>
);

export default Root;
