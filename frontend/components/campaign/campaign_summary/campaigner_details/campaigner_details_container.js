import { connect } from 'react-redux';
import CampaignerDetails from './campaign_details';
// import {fetchUser} from '../../../util' finish

const mapStateToProps = ({user}, ownProps) => ({
  first_name: user.first_name,
  last_name: user.last_name,
  country: user.country,
  city: user.city,
  avatar_img_url: user.avatar_img_url,
  created_at: user.created_at,
  duration: user.duration,
  user_id: ownProps.params.user_id,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignerDetails);
