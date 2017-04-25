import React from 'react';
import UserCampaignsContainer from './user_campaigns/user_campaigns_container';
import UserProfileContainer from './user_profile/user_profile_container';

class UserShowPageBody extends React.Component {

  render() {

    return (
      <div className="user-show-page-body">
        <UserProfileContainer />
      </div>
    );
  }
}
export default UserShowPageBody;
