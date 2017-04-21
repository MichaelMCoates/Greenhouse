import React from 'react';

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

        <br/>
        // CampaignerDetails component, uses user_id. Uses Modal for AboutBox
        // FundingBar component, uses goal_amt, current_amt, created_at, duration
        // BackItBar component, uses state. Has SocialBar and DonationBar
      </div>
    );
  }
}
export default CampaignSummary;
