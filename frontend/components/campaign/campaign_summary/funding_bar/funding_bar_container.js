import { connect } from 'react-redux';
import FundingBar from './funding_bar';

const mapStateToProps = ({ campaign }) => ({
  goal_amt: campaign.goal_amt,
  current_amt: campaign.current_amt,
  created_at: campaign.created_at,
  duration: campaign.duration,
  backers: campaign.contributions.length,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FundingBar);
