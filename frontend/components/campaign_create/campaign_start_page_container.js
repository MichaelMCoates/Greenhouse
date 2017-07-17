import { connect } from 'react-redux';
import React from 'react';
import {addModalContent} from '../../actions/modal_actions'
import CampaignStartPage from './campaign_start_page';
import SignUpFormContainer from '../sign_up_form/sign_up_form_container';
import LogInFormContainer from '../log_in_form/log_in_form_container';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  modalSignUp: () => dispatch(addModalContent(<SignUpFormContainer />)),
  modalLogIn: () => dispatch(addModalContent(<LogInFormContainer />)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignStartPage);
