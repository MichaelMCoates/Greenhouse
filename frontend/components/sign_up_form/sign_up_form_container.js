import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
