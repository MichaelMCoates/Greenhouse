import { connect } from 'react-redux';
import { signup, clearErrors, login } from '../../actions/session_actions';
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
    clearErrors: () => dispatch(clearErrors()),
    guestLogin: () => dispatch(login({user: {email: "BillNye@gmail.com", password: "thescienceguy"}})),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
