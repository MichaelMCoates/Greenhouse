import React from 'react';


class CampaignShowPage extends React.Component {
  componentDidMount() {
    this.props.fetchCampaign(this.props.params.campaignId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.campaignId !== nextProps.params.campaignId) {
      this.props.fetchCampaign(nextProps.params.campaignId);
    }
  }

  render() {
    const { campaign } = this.props;
    return (
      <div className="campaign-show-page">
        <h1>{campaign.title}</h1>


      </div>
    );
  }
}
export default CampaignShowPage;
