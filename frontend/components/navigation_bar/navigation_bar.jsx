import React from 'react';
import { Link, browserHistory } from 'react-router';
import UserBarContainer from '../user_bar/user_bar_container';
import SearchInputContainer from './search_input_container';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="left">
        <a className="logo" onClick={() => browserHistory.push('/')} ></a>
        <a className="my-links" target="_blank" href="https://www.linkedin.com/in/michaelmcoates">LinkedIn</a>
        <a className="my-links" target="_blank" href="http://www.michaelmcoates.com">Portfolio</a>
        <SearchInputContainer />
      </div>

      <div className="right">
        <input onClick={() => browserHistory.push('/campaigns/start')} className="pink-button-nav" type="submit" value="START A CAMPAIGN" />
        <UserBarContainer />
      </div>
    </nav>
  );
};

export default NavigationBar;
