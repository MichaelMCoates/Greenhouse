import { connect } from 'react-redux';
import { createCampaign } from '../../actions/campaign_actions';
import CreateCampaignPage from './create_campaign_page';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createCampaign: (campaign) => dispatch(createCampaign(campaign)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShowPage);
