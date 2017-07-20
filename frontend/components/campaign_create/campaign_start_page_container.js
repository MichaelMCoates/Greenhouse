import { connect } from 'react-redux';
import React from 'react';
import {addModalContent} from '../../actions/modal_actions'
import LogInFormContainer from '../log_in_form/log_in_form_container';
import { clearErrors } from '../../actions/session_actions';
import CampaignStartPage from './campaign_start_page';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  modalLogIn: () => dispatch(addModalContent(<LogInFormContainer />)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignStartPage);
