import { connect } from 'react-redux';
import CampaignerDetails from './campaigner_details';
import {fetchUser} from '../../../../actions/user_actions';

const mapStateToProps = ({user}, ownProps) => {

  return ({
    user: user.user,
    user_id: ownProps.user_id,
  });

};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignerDetails);
