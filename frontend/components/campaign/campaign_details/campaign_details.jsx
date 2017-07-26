import React from 'react';
import DynamicDetailsContainer from './dynamic_details/dynamic_details_container';
import {Link, hashHistory, withRouter} from 'react-router';

class CampaignDetails extends React.Component {

  urlUpdate(category) {
    let queryString = `?category=${category}`;
    this.props.router.replace({ pathname: `/search${queryString}`});
  }

  render() {
    return (
      <div className="campaign-details campaign-show-left">
          <div className="campaign-show-header">
            <div className="overview">
              OVERVIEW
            </div>
            <div className="campaign-show-category" onClick={() => this.urlUpdate(`${this.props.category}`)}>
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
export default withRouter(CampaignDetails);
