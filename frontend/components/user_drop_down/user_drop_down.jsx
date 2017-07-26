import React from 'react';
import { Link, hashHistory } from 'react-router';


class UserDropDown extends React.Component {
  constructor (props){
    super(props);

    this.redirectToProfile = this.redirectToProfile.bind(this);
    this.redirectToEdit = this.redirectToEdit.bind(this);
  }

  redirectToProfile () {
    hashHistory.push('/users/' + this.props.currentUser.id);
  }

  redirectToEdit () {
    hashHistory.push('/users/' + this.props.currentUser.id + '/edit');
  }

  render() {
    return (
      <div className="user-drop-down udd ">
        <ul>
          <li onClick={this.redirectToProfile}>My Profile</li>
          <li onClick={this.props.logout}>Log Out</li>
        </ul>
      </div>
    );
  }
}


export default UserDropDown;
