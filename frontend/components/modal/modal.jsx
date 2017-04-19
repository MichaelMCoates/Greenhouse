import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import { connect } from 'react-redux';

// class Modal extends React.Component {
//
//
//
//
// 	render() {
//     return(
//       this.props.active ? modalContent(content) : null
//     )
// 	}

const modalContent = (content) => (
  <modal>
    <button onClick={this.props.closeModal}> X </button>
    {content}
  </modal>
)

const Modal = ({active, content}) => (
  this.props.active ? modalContent(content) : null
)

export default connect(
	({ modal: {active, content } }) => ({ active, content }),
	(dispatch) => ({closeModal: () => dispatch(closeModal())})
)(Modal)
