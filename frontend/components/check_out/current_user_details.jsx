import React from 'react';

class CurrentUserDetails extends React.Component {


  render() {

    return (
      <div className="current-user-details">
        <img src={this.props.currentUser.avatar_img} />
        <div className="current-user-deets">
          <div className="current-user-details-name" >{this.props.currentUser.first_name} {this.props.currentUser.last_name}</div>
          <div className="current-user-details-location">{this.props.currentUser.city}, {this.props.currentUser.country}</div>
          <div className="current-user-details-about">About</div>
        </div>
      </div>
    );
  }
}
export default CurrentUserDetails;
