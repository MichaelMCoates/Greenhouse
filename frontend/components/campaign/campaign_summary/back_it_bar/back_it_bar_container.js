import { connect } from 'react-redux';
import React from 'react';
import BackItBar from './back_it_bar';
import {setAmount} from '../../../../actions/check_out_actions';
import {addModalContent} from '../../../../actions/modal_actions';
import LogInFormContainer from '../../../log_in_form/log_in_form_container';
import { clearErrors } from '../../../../actions/session_actions';

const mapStateToProps = ({campaign, session}) => ({
  campaign_id: campaign.id,
  loggedIn: Boolean(session.currentUser),
});

const mapDispatchToProps = (dispatch) => ({
  setAmount: (amount) => dispatch(setAmount(amount)),
  modalLogIn: () => dispatch(addModalContent(<LogInFormContainer />)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackItBar);
