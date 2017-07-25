import { connect } from 'react-redux';
import React from 'react';
import PerkItem from './perk_item';
import {setPerk} from '../../../actions/check_out_actions';
import LogInFormContainer from '../../log_in_form/log_in_form_container';
import { clearErrors } from '../../../actions/session_actions';
import {addModalContent} from '../../../actions/modal_actions';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  setPerk: (perk) => dispatch(setPerk(perk)),
  modalLogIn: () => dispatch(addModalContent(<LogInFormContainer />)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PerkItem);
