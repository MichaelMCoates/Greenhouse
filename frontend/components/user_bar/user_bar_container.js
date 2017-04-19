import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpForm from './user_bar';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBar);
