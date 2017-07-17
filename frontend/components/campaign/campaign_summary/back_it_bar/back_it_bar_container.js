import { connect } from 'react-redux';
import React from 'react';
import BackItBar from './back_it_bar';
import {addModalContent} from '../../../../actions/modal_actions';
import {setAmount} from '../../../../actions/check_out_actions';
import SignUpFormContainer from '../../../sign_up_form/sign_up_form_container';
import LogInFormContainer from '../../../log_in_form/log_in_form_container';
import { clearErrors } from '../../../../actions/session_actions';

const mapStateToProps = ({campaign, session}) => ({
  campaign_id: campaign.id,
  loggedIn: Boolean(session.currentUser),
});

const mapDispatchToProps = (dispatch) => ({
  setAmount: (amount) => dispatch(setAmount(amount)),
  modalSignUp: () => dispatch(addModalContent(<SignUpFormContainer />)),
  modalLogIn: () => dispatch(addModalContent(<LogInFormContainer />)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackItBar);
