import React from 'react';

class CampaignDetails extends React.Component {

  render() {
    return (
      <div className="campaign-details campaign-show-left">
        <div className="campaign-show-headerTitle">OVERVIEW</div>
        <div className="campaign-overview">
          // overview image
          <text className="overview-text">{this.props.overview}</text>
        </div>
        // DynamicDetails component, in a div
      </div>
    );
  }
}
export default CampaignDetails;
