import { connect } from 'react-redux';
import CampaignDetails from './campaign_details';

const mapStateToProps = ({campaign, session}) => ({
  // needs overview image
  overview: campaign.overview,
  overview_img: campaign.overview_img,
  campaign_story: campaign.campaign_story,
  current_user: session.current_user,
  // will need backers, comments, updates
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignDetails);
