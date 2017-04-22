import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import CampaignReducer from './campaign_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  campaign: CampaignReducer,
  user: UserReducer,
});

export default RootReducer;
