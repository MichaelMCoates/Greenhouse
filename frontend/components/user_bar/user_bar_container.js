import { connect } from 'react-redux';
import React from 'react';
import {addModalContent} from '../../actions/modal_actions'
import UserBar from './user_bar';
import SignUpFormContainer from '../sign_up_form/sign_up_form_container';
import LogInFormContainer from '../log_in_form/log_in_form_container';
import {activateUserDropDown, deactivateUserDropDown} from '../../actions/user_drop_down_actions'

const mapStateToProps = ({ session, user_drop_down }) => ({
  currentUser: session.currentUser,
  active: user_drop_down.active
});

const mapDispatchToProps = (dispatch) => ({
  modalSignUp: () => dispatch(addModalContent(<SignUpFormContainer />)),
  modalLogIn: () => dispatch(addModalContent(<LogInFormContainer />)),
  activateUserDropDown: () => dispatch(activateUserDropDown()),
  deactivateUserDropDown: () => dispatch(deactivateUserDropDown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBar);
