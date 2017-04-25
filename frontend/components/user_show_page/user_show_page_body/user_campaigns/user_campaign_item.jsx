import React from 'react';
import { Link } from 'react-router';

class UserCampaignItem extends React.Component {
  constructor (props) {
    super(props);

  }

  render() {
    const campaign = this.props.campaign;

    return (
      <li className="user-campaign-item">
        <div className="uci-tile-img">
          <img src="http://lorempixel.com/200/200" />
        </div>
        <div className="uci-body">
          <Link to={'/campaigns/' + campaign.id} className="uci-title">{campaign.title}</Link>
          <div className="uci-user">by <Link className="uci-link" to={'/users/' + campaign.user_id}>{campaign.first_name} {campaign.last_name}</Link></div>
          <div className="uci-tagline">{campaign.tagline}</div>
        </div>

      </li>
    );
  }
}
export default UserCampaignItem;
