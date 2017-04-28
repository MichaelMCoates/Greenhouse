import {RECEIVE_TILE_CAROUSEL_CAMPAIGNS} from '../actions/tile_carousel_actions';

const _nullTileCarousel = Object.freeze({
  tileCarouselCampaigns: {}
});

const TileCarouselReducer = (state = _nullTileCarousel, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TILE_CAROUSEL_CAMPAIGNS:
      return Object.assign({}, _nullTileCarousel, {tileCarouselCampaigns: action.tileCarouselCampaigns});
    default:
      return state;
  }
};

export default TileCarouselReducer;
