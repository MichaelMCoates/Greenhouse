import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = ({user, session}) => {
  return ({
    user: user,
  });
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
