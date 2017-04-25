import React from 'react';
import UserCampaignItem from './user_campaign_item';

class UserCampaigns extends React.Component {
  constructor (props) {
    super(props);

    this.user = this.props.user;
  }

  campaignsFounded () {

    let founded_camps = this.user.campaigns.founded.map( (camp, idx) => (
      <UserCampaignItem key={idx} campaign={camp} />
    ));

    return (
      <div className="user-campaigns-founded">
        <div className="user-campaigns-header">Campaigns I'm On</div>
        <ul className="user-campaigns-founded-ul">
          {founded_camps}
        </ul>
      </div>
    );
  }

  campaignsFunded () {

    let funded_camps = this.user.campaigns.funded.map( (camp, idx) => (
      <UserCampaignItem key={idx} campaign={camp} />
    ));

    return (
      <div className="user-campaigns-funded">
        <div className="user-campaigns-header">Campaigns I've Funded</div>
        <ul className="user-campaigns-funded-ul">
          {funded_camps}
        </ul>
      </div>
    );
  }


  render() {
    let camp_founded;
    if (this.user.campaigns.founded.length > 0) {
      camp_founded = this.campaignsFounded();
    }

    let camp_funded;
    if (this.user.campaigns.funded.length > 0) {
      camp_funded = this.campaignsFunded();
    }

    return (
      <div className="user-campaigns">
        {camp_founded}
        {camp_funded}

      </div>
    );
  }
}
export default UserCampaigns;
