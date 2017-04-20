import React from 'react';
import { Link } from 'react-router';
import {deactivateUserDropDown} from '../../actions/user_drop_down_actions';


class UserDropDown extends React.Component {
  constructor (props){
    super(props);
  }

  render() {
    return (
      <div className="user-drop-down udd ">
        <ul>
          <li>My Contributions</li>
          <li>My Profile</li>
          <li>My Settings</li>
          <li onClick={this.props.logout}>Log Out</li>
        </ul>
      </div>
    );
  }

}


export default UserDropDown;
