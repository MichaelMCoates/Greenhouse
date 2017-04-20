import { connect } from 'react-redux';
import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import Modal from './modal';

const mapStateToProps = ({modal: {active, content}}) => {
  return ({ active, content })
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Modal)
