import React from 'react';

class UserShowPageHeader extends React.Component {
  constructor (props) {
    super(props);

    this.setProfile = this.setProfile.bind(this);
    this.setCampaigns = this.setCampaigns.bind(this);
  }

  setProfile(e) {
    return this.props.setState({profile_shown: true});
  }

  setCampaigns(e) {
    return this.props.setState({profile_shown: false});
  }

  render() {
    return (
      <div className="user-show-page-header">
        <div className={ this.props.profileShown ? "usp-header-item usp-header-item-selected" : "usp-header-item" }>
          <div onClick={this.setProfile}>Profile</div>
        </div>
        <div className={ this.props.profileShown ? "usp-header-item" : "usp-header-item usp-header-item-selected" }>
          <div onClick={this.setCampaigns}>Campaigns</div>
        </div>
      </div>
    );
  }
}

export default UserShowPageHeader;
