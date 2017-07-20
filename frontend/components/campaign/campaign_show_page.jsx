import React from 'react';
import MediaBox from './media_box/media_box';
import CampaignSummaryContainer from './campaign_summary/campaign_summary_container';
import CampaignDetailsContainer from './campaign_details/campaign_details_container';
import PerksContainer from './perks/perks_container';

class CampaignShowPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchCampaign(this.props.params.campaignId)
      .then(({campaign: {user_id}}) => this.props.fetchUser(user_id));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.campaignId !== nextProps.params.campaignId) {
      window.scrollTo(0, 0);
      this.props.fetchCampaign(nextProps.params.campaignId)
        .then(({campaign: {user_id}}) => this.props.fetchUser(user_id));
    }
  }

  render() {
    if (this.props.campaign.user_id === null) {
      return (<div></div>);
    }

    return (
      <div className="campaign-show-page">
        <div className="top-half-campaign-show-page">
          <MediaBox pitch_img={this.props.campaign.pitch_img} />
          <CampaignSummaryContainer  />
        </div>

        <div className="bottom-half-campaign-show-page">
          <CampaignDetailsContainer />
          <PerksContainer />
        </div>
      </div>
    );
  }
}
export default CampaignShowPage;
