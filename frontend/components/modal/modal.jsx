import React from 'react';
import { connect } from 'react-redux';

const modalContent = (content, closeModal) => (
  <div>
    <div className="modal-screen" onClick={closeModal}/>
    <div className="modal-content">
      <button className="modal-close" onClick={closeModal}>x</button>
      {content}
    </div>
  </div>
)

const Modal = ({active, content, closeModal}) => (
  active ? modalContent(content, closeModal) : null
)

export default Modal;
