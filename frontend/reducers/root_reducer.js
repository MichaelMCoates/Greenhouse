import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import CampaignReducer from './campaign_reducer';
import UserReducer from './user_reducer';
import CheckOutReducer from './check_out_reducer';
import FeaturedCarouselReducer from './featured_carousel_reducer';
import TileCarouselReducer from './tile_carousel_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  campaign: CampaignReducer,
  user: UserReducer,
  checkOut: CheckOutReducer,
  featuredCarousel: FeaturedCarouselReducer,
  tileCarousel: TileCarouselReducer,
  search: SearchReducer
});

export default RootReducer;
