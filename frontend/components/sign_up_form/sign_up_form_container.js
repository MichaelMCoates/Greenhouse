import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';
import {addModalContent} from '../../actions/modal_actions';
import LogInFormContainer from '../log_in_form/log_in_form_container';
import React from 'react';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    modalLogIn: () => dispatch(addModalContent(<LogInFormContainer />)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
