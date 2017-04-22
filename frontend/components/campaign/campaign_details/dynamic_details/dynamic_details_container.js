import { connect } from 'react-redux';
import DynamicDetails from './dynamic_details';

const mapStateToProps = ({campaign, session}) => ({
  // needs overview image
  // overview: campaign.overview,
  // campaign_story: campaign.campaign_story,
  // current_user: session.current_user,
  // will need backers, comments, updates
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicDetails);
