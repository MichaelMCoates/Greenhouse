import React from 'react';
import CampaignerDetailsContainer from './campaigner_details/campaigner_details_container';
import FundingBarContainer from './funding_bar/funding_bar_container';
import BackItBarContainer from './back_it_bar/back_it_bar_container';
import { Line, Circle } from 'rc-progress';


class CampaignSummary extends React.Component {
  constructor (props) {
    super(props);

  }

  render() {


    return (
      <div className="campaign-summary campaign-show-right">
        <div className="campaign-summary-top">
          <h1 className="campaign-title">{this.props.title}</h1>
          <h2 className="campaign-tagline">{this.props.tagline}</h2>
          <CampaignerDetailsContainer user_id={this.props.user_id} />
        </div>
        <FundingBarContainer />
        <BackItBarContainer />
      </div>
    );
  }
}
export default CampaignSummary;
