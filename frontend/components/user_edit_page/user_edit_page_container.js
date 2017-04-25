import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import UserEditPage from './user_edit_page';

const mapStateToProps = ({user, session}) => {
  return ({
    user: user,
    currentUser: session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user_id) => dispatch(fetchUser(user_id)),
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEditPage);
