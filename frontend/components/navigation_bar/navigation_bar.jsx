import React from 'react';
import { Link, hashHistory } from 'react-router';
import UserBarContainer from '../user_bar/user_bar_container';
import SearchInputContainer from './search_input_container';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="left">
        <a className="logo" onClick={() => hashHistory.push('/')} ></a>
        <a className="my-links" target="_blank" href="https://www.linkedin.com/in/michaelmcoates">My LinkedIn</a>
        <a className="my-links" target="_blank" href="https://github.com/michaelmcoates/greenhouse">GitHub Repo</a>
        <a className="my-links" target="_blank" href="https://www.michaelmcoates.com">Portfolio</a>
        <SearchInputContainer />
      </div>


      <div className="right">
        <input onClick={() => hashHistory.push('/campaigns/start')} className="pink-button-nav" type="submit" value="START A CAMPAIGN" />
        <UserBarContainer />
      </div>
    </nav>
  );
};

export default NavigationBar;
