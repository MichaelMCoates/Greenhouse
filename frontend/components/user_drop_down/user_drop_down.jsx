import React from 'react';
import { Link } from 'react-router';

class UserDropDown extends React.Component {
  constructor (props){
    super(props);
  }

  render() {
    if (this.props.active) {
      return (
        <div className="user-drop-down">
          <ul>
            <li>My Contributions</li>
            <li>My Profile</li>
            <li>My Settings</li>
            <li onClick={this.props.logout}>Log Out</li>
          </ul>
        </div>
      );
    } else {
      return (<nav></nav>);
    }
  }

}


export default UserDropDown;
