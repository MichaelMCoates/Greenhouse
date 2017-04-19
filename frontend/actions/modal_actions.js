export const ADD_MODAL_CONTENT = "ADD_MODAL_CONTENT";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const addModalContent = (content) => ({
  type: ADD_MODAL_CONTENT,
  content
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});
