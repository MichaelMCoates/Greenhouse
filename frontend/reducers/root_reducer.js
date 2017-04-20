import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import CampaignReducer from './campaign_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  campaign: CampaignReducer,
});

export default RootReducer;
