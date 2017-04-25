import React from 'react';

class UserProfile extends React.Component {
  constructor (props) {
    super(props);

    this.user = this.props.user.user;
  }


  render() {

    return (
      <div className="user-profile">
        <div>User Profile</div>
        <div className="user-profile-left">
          <div>{this.user.tagline}</div>
          <div>{this.user.about_me}</div>
        </div>

        <div className="user-profile-right">
          <div>About Me</div>
        </div>
      </div>
    );
  }
}
export default UserProfile;
