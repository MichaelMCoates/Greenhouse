import React from 'react';

class UserShowPageHeader extends React.Component {
  constructor (props) {
    super(props);

    this.setProfile = this.setProfile.bind(this);
    this.setCampaigns = this.setCampaigns.bind(this);
  }



  setProfile(e) {
    this.props.setState({profile_shown: true});
  }

  setCampaigns(e) {
    this.props.setState({profile_shown: false});
  }

  render() {

    // if (this.props.user.id === this.props.currentUser.id) {
    //
    // }


    return (
      <div className="user-show-page-header">
        <div>User Show Page Header</div>
        <div>
          <div onClick={this.setProfile}>Profile</div>
          <div onClick={this.setCampaigns}>Campaigns</div>
        </div>

      </div>
    );
  }
}
export default UserShowPageHeader;
