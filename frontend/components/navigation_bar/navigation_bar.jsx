import React from 'react';
import { Link } from 'react-router';
import UserBarContainer from '../user_bar/user_bar_container';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="left">
        <div>"Logo"</div>
        <button >Explore</button>
        <button >How It Works</button>
        <button >Equity Offerings</button>
          <input className="search-bar" type="text" placeholder="Search..."></input>
      </div>

      <div className="right">
        <input className="pink-button-nav" type="submit" value="START A CAMPAIGN" />
        <UserBarContainer />
      </div>
    </nav>
  );
};

export default NavigationBar;
