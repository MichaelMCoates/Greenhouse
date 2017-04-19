import React from 'react';
import { Link } from 'react-router';
import UserDropDownContainer from '../user_drop_down/user_drop_down'


const sessionLinks = (modalSignUp, modalLogIn) => (
  <nav className="user-nav">
    <button className="sign-up-button" onClick={modalSignUp} >Sign Up</button>
    <button className="log-in-button" onClick={modalLogIn} >Log In</button>
  </nav>
);

const userNav = (currentUser) => (
  <nav className="user-nav">
    <button className="user-nav-button" >
      {currentUser.first_name} {currentUser.last_name}
    </button>
  </nav>
);

// <div type="hidden"><UserDropDownContainer /></div>

const UserBar = ({ currentUser, modalSignUp, modalLogIn }) => (
  currentUser ? userNav(currentUser) : sessionLinks(modalSignUp, modalLogIn)
);

export default UserBar;
