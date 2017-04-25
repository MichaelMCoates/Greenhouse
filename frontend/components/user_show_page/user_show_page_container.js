import { connect } from 'react-redux';
import { fetchUser, fetchCampaigns } from '../../actions/user_actions';
import UserShowPage from './user_show_page';

const mapStateToProps = ({user, session}) => {
  return ({
    user: user,
    currentUser: session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user_id) => dispatch(fetchUser(user_id)),
  fetchCampaigns: (user_id) => dispatch(fetchCampaigns(user_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShowPage);
