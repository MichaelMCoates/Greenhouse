import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LogInForm from './log_in_form';
import {addModalContent} from '../../actions/modal_actions';
import SignUpFormContainer from '../sign_up_form/sign_up_form_container';
import React from 'react';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    modalSignUp: () => dispatch(addModalContent(<SignUpFormContainer />)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInForm);
