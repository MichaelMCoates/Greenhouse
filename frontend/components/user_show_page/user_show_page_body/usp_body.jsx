import React from 'react';
import UserCampaignsContainer from './user_campaigns/user_campaigns_container';
import UserProfileContainer from './user_profile/user_profile_container';

class UserShowPageBody extends React.Component {

  render() {
    if (this.props.user.campaigns === null) {
      return (<div>Loading...</div>);
    }

    // if (this.props.user.id === this.props.currentUser.id) {
    //
    // }

    

    return (
      <div className="user-show-page-body">
        <div>User Show Page Body</div>
        <UserProfileContainer />
      </div>
    );
  }
}
export default UserShowPageBody;
