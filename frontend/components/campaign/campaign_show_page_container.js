import { connect } from 'react-redux';
import { fetchCampaign } from '../../actions/campaign_actions';
import CampaignShowPage from './campaign_show_page';

const mapStateToProps = ({ campaign }) => ({
  campaign
});

const mapDispatchToProps = (dispatch) => ({
  fetchCampaign: (id) => dispatch(fetchCampaign(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShowPage);
