import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <button className="sign-up-button" >Sign Up</button>
    <button className="log-in-button" >Log In</button>
  </nav>
);

const userNav = (currentUser) => (
  <nav className="userNav">
    <button className="sign-up-button" >
      {props.currentUser.first_name} {props.currentUser.first_name}
    </button>
  </nav>
);

const UserBar = ({ currentUser}) => (
  currentUser ? userNav(currentUser) : sessionLinks()
);

export default UserBar;
