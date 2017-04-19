import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import LogInFormContainer from './log_in_form/log_in_form_container';
import SignUpFormContainer from './sign_up_form/sign_up_form_container';



const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
        </Route>
      </Router>
    </Provider>
  )



};

// <Route path="/login" component={ LogInFormContainer } onEnter={_redirectIfLoggedIn} />
// <Route path="/signup" component={ SignUpFormContainer } onEnter={_redirectIfLoggedIn} />
export default Root;
