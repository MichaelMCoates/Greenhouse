import React from 'react';
import { Link, hashHistory } from 'react-router';


class UserDropDown extends React.Component {
  constructor (props){
    super(props);

    this.redirectToProfile = this.redirectToProfile.bind(this);
  }

  redirectToProfile () {
    hashHistory.push('/users/' + this.props.currentUser.id);
  }

  render() {
    return (
      <div className="user-drop-down udd ">
        <ul>
          <li>My Contributions</li>
          <li onClick={this.redirectToProfile}>My Profile</li>
          <li>My Settings</li>
          <li onClick={this.props.logout}>Log Out</li>
        </ul>
      </div>
    );
  }

}


export default UserDropDown;
