import { connect } from 'react-redux';
import React from 'react';
import Perks from './perks';
import {setPerk} from '../../../actions/check_out_actions';
import LogInFormContainer from '../../log_in_form/log_in_form_container';
import { clearErrors } from '../../../actions/session_actions';
import {addModalContent} from '../../../actions/modal_actions';


const mapStateToProps = ({ campaign }) => ({
  perks: campaign.perks,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Perks);
