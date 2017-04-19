import React from 'react';
import { Link } from 'react-router';
import { logout } from '../../actions/session_actions';
import {connect} from 'react-redux';

const UserDropDown = () => {
  return (
    <nav className="user-drop-down">
      <ul>
        <li>My Contributions</li>
        <li>My Profile</li>
        <li>My Settings</li>
        <li onClick={this.props.logout}>Log Out</li>
      </ul>
    </nav>
  );
};

export default connect(
  ({}),
  ({logout: () => dispatch(logout())})
)(UserDropDown)
