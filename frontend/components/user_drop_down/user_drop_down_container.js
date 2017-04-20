import React from 'react';
import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions';
import { deactivateUserDropDown } from '../../actions/user_drop_down_actions';
import UserDropDown from './user_drop_down';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    active: state.user_drop_down.active,
  });
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  deactivateUserDropDown: () => dispatch(deactivateUserDropDown()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDropDown);
