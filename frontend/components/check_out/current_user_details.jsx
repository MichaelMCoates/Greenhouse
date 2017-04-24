import React from 'react';

class CurrentUserDetails extends React.Component {


  render() {
    debugger


    return (
      <div className="campaigner-details">
        <img src={this.props.currentUser.avatar_img} />
        <div className="deets">
          <div className="campaigner-details-name" >{this.props.currentUser.first_name} {this.props.currentUser.last_name}</div>
          <div className="campaigner-details-location">{this.props.currentUser.city}, {this.props.currentUser.country}</div>
          <div className="campaigner-details-about">About</div>
        </div>
      </div>
    );
  }
}
export default CurrentUserDetails;
