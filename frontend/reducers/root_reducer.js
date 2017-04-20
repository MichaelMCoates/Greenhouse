import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import UserDropDownReducer from './user_drop_down_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  user_drop_down: UserDropDownReducer,
});

export default RootReducer;
