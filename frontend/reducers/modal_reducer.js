import {ADD_MODAL_CONTENT, CLOSE_MODAL} from '../actions/modal_actions';
import merge from 'lodash/merge';

const _nullModal = Object.freeze({
  content: null,
  active: false
});

const ModalReducer = (state = _nullModal, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_MODAL_CONTENT:
      const content = action.content
      return merge({}, _nullModal, {content: content, active: true});
    case CLOSE_MODAL:
      return _nullModal;
    default:
      return _nullModal;
  }
};

export default ModalReducer;
