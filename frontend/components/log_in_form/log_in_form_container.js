import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LogInForm from './log_in_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInForm);
