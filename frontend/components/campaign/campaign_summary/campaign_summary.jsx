import React from 'react';
import CampaignerDetailsContainer from './campaigner_details/campaigner_details_container';

class CampaignSummary extends React.Component {
  constructor (props) {
    super(props);

    this.state = { donation_amt: null };
  }

  render() {


    return (
      <div className="campaign-summary campaign-show-right">
        <h1 className="campaign-title">{this.props.title}</h1>
        <h2 className="campaign-tagline">{this.props.tagline}</h2>
        <CampaignerDetailsContainer user_id={this.props.user_id} />
        <br/>
        // CampaignerDetails component, uses user_id. Uses Modal for AboutBox
        // FundingBar component, uses goal_amt, current_amt, created_at, duration
        // BackItBar component, uses state. Has SocialBar and DonationBar
      </div>
    );
  }
}
export default CampaignSummary;
