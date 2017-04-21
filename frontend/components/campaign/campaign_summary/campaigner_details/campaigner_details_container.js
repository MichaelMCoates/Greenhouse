import { connect } from 'react-redux';
import CampaignDetails from './campaign_details';

const mapStateToProps = ({campaign, session}) => ({
  title: campaign.title,
  tagline: campaign.tagline,
  user_id: campaign.user_id,
  goal_amt: campaign.goal_amt,
  current_amt: campaign.current_amt,
  created_at: campaign.created_at,
  duration: campaign.duration,
  // need to get backers
  current_user: session.current_user,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignDetails);
