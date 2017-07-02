import React from 'react';
import DynamicDetailsContainer from './dynamic_details/dynamic_details_container';

class CampaignDetails extends React.Component {

  render() {
    return (
      <div className="campaign-details campaign-show-left">
          <div className="campaign-show-header">
            <div className="overview">
              OVERVIEW
            </div>
            <div className="campaign-show-category">
              {this.props.category}
            </div>
          </div>
        <div className="campaign-overview">
          <img className="overview-img" src={this.props.overview_img} />
          <text className="overview-text">{this.props.overview}</text>
        </div>
        <DynamicDetailsContainer />
      </div>
    );
  }
}
export default CampaignDetails;
