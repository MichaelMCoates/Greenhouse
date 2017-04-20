import React from 'react';
import { Link } from 'react-router';
import UserDropDownContainer from '../user_drop_down/user_drop_down_container'



const sessionLinks = (modalSignUp, modalLogIn) => (
  <nav className="user-nav">
    <button className="sign-up-button" onClick={modalSignUp} >Sign Up</button>
    <button className="log-in-button" onClick={modalLogIn} >Log In</button>
  </nav>
);

const userNav = (currentUser, activateUserDropDown) => (
  <nav className="user-nav">
    <button className="user-nav-button" onClick={activateUserDropDown} >
      {currentUser.first_name} {currentUser.last_name}
    </button>
    <UserDropDownContainer />
  </nav>
);


const UserBar = ({ currentUser, active, modalSignUp, modalLogIn, activateUserDropDown, deactivateUserDropDown }) => {
  if (currentUser && active) {
    return userNav(currentUser, deactivateUserDropDown)
  } else if (currentUser) {
    return userNav(currentUser, activateUserDropDown)
  } else {
    return sessionLinks(modalSignUp, modalLogIn)
  }
}

export default UserBar;
