import { connect } from 'react-redux';
import CampaignSummary from './campaign_summary';

const mapStateToProps = ({campaign, session}) => ({
  title: campaign.title,
  tagline: campaign.tagline,
  user_id: campaign.user_id,
  current_user: session.current_user,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignSummary);
