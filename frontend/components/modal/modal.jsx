import React from 'react';
import { connect } from 'react-redux';

const modalContent = (content, closeModal) => (
  <modal className="modal">
    <button onClick={closeModal}> "XXX" </button>
    {content}
  </modal>
)

const Modal = ({active, content, closeModal}) => (
  active ? modalContent(content, closeModal) : null
)

export default Modal;

// class Modal extends React.Component {
//
//
//
//
// 	render() {
//     if (!this.props) {
//
//     }
//
//     return(
//       this.props.active ? modalContent(content) : null
//     )
// 	}

// const modalContent = (content) => (
//   <modal>
//     <button onClick={this.props.closeModal}> X </button>
//     {content}
//   </modal>
// )
//
// const Modal = ({active, content}) => (
//   this.props.active ? modalContent(content) : null
// )
//
// export default connect(
// 	({ modal: {active, content } }) => ({ active, content }),
// 	(dispatch) => ({closeModal: () => dispatch(closeModal())})
// )(Modal)

// export default connect(
// 	({ modal: {active, content } }) => ({ active, content }),
// 	(dispatch) => ({closeModal: () => dispatch(closeModal())})
// )(Modal)
