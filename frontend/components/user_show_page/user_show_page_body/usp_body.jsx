import React from 'react';
import UserCampaignsContainer from './user_campaigns/user_campaigns_container';
import UserProfileContainer from './user_profile/user_profile_container';

class UserShowPageBody extends React.Component {

  render() {
    let component;
    if (this.props.profileShown) {
      component = <UserProfileContainer />;
    } else {
      component = <UserCampaignsContainer />;
    }

    return (
      <div className="user-show-page-body">
        {component}
      </div>
    );
  }
}
export default UserShowPageBody;
