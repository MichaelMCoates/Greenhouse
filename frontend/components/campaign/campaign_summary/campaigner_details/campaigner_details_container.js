import { connect } from 'react-redux';
import CampaignerDetails from './campaigner_details';
import {fetchUser} from '../../../../actions/user_actions';

const mapStateToProps = ({user}, ownProps) => {
  return ({
    user: user.user,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignerDetails);
