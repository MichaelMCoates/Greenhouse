import React from 'react';
import { Link } from 'react-router';
import UserBar from '../user_bar/user_bar';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div>"Logo"</div>
      <UserBar/>
    </nav>
  );
};

export default NavigationBar;
