import React from 'react';
import { Link } from 'react-router';
import UserBarContainer from '../user_bar/user_bar_container';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div>"Logo"</div>
      <UserBarContainer />
    </nav>
  );
};

export default NavigationBar;
