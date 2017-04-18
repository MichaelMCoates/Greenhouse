import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.login = login;
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
