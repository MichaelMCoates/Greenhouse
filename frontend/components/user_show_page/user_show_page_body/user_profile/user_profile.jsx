import React from 'react';

class UserProfile extends React.Component {
  constructor (props) {
    super(props);

    this.user = this.props.user;
  }


  render() {

    return (
      <div className="user-profile">
        <div className="user-profile-left">
          <img className="user-profile-img" src={this.user.user.prof_img} />
          <div className="tagline">{this.user.user.tagline}</div>
          <div className="about-me">{this.user.user.about_me}</div>
        </div>

        <div className="user-profile-right">
          <div className="user-profile-right-container">
            <div className="user-stats-header">
              <img src={this.user.user.avatar_img} />
              <div className="user-stats-header-am">About Me</div>
            </div>
            <div className="user-stat">
              <div className="user-stat-num">{this.user.campaigns.founded.length}</div>
              <div className="user-stat-title">{this.user.campaigns.founded.length === 1 ? "Campaign" : "Campaigns"}</div>
            </div>
            <div className="user-stat">
              <div className="user-stat-num">{this.user.campaigns.funded.length}</div>
              <div className="user-stat-title">{this.user.campaigns.funded.length === 1 ? "Contribution" : "Contributions"}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserProfile;
