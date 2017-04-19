import React from 'react';
import { Link } from 'react-router';


const sessionLinks = (modalSignUp, modalLogIn) => (
  <nav className="user-nav">
    <button className="sign-up-button" onClick={modalSignUp} >Sign Up</button>
    <button className="log-in-button" onClick={modalLogIn} >Log In</button>
  </nav>
);

const userNav = (currentUser) => (
  <nav className="user-nav">
    <button className="user-nav-button" >
      {props.currentUser.first_name} {props.currentUser.last_name}
    </button>
  </nav>
);

const UserBar = ({ currentUser, modalSignUp, modalLogIn }) => (
  currentUser ? userNav(currentUser) : sessionLinks(modalSignUp, modalLogIn)
);

export default UserBar;
