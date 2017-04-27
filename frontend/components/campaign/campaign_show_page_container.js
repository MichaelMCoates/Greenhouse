import { connect } from 'react-redux';
import { fetchCampaign } from '../../actions/campaign_actions';
import { fetchUser } from '../../actions/user_actions';
import CampaignShowPage from './campaign_show_page';

const mapStateToProps = ({ campaign }) => ({
  campaign
});

const mapDispatchToProps = (dispatch) => ({
  fetchCampaign: (id) => dispatch(fetchCampaign(id)),
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShowPage);
