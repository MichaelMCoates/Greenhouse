import React from 'react';
import {browserHistory} from 'react-router';

class CurrentUserDetails extends React.Component {
  constructor (props){
    super(props);

    this.redirectToProfile = this.redirectToProfile.bind(this);
  }

  redirectToProfile () {
    browserHistory.push('/users/' + this.props.currentUser.id);
  }

  render() {
    return (
      <div className="current-user-details">
        <img src={this.props.currentUser.avatar_img} />
        <div className="current-user-deets">
          <div className="current-user-details-name" >{this.props.currentUser.first_name} {this.props.currentUser.last_name}</div>
          <div className="current-user-details-location">{this.props.currentUser.city}, {this.props.currentUser.country}</div>
          <div className="current-user-details-about" onClick={this.redirectToProfile}>About</div>
        </div>
      </div>
    );
  }
}

export default CurrentUserDetails;
