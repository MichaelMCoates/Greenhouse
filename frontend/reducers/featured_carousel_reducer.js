import {SHIFT_RIGHT, SHIFT_LEFT, RECEIVE_CAROUSEL_CAMPAIGNS, RECEIVE_FEATURED_CAROUSEL_CAMPAIGNS} from '../actions/featured_carousel_actions';

const _nullCarousel = Object.freeze({
  active: false,
  direction: undefined,
  featuredCarouselCampaigns: {}
});

const FeaturedCarouselReducer = (state = _nullCarousel, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SHIFT_RIGHT:
      return Object.assign({}, state, {active: true, direction: 'right'});
    case SHIFT_LEFT:
      return Object.assign({}, state, {active: true, direction: 'left'});
    case RECEIVE_FEATURED_CAROUSEL_CAMPAIGNS:
      return Object.assign({}, _nullCarousel, {featuredCarouselCampaigns: action.featuredCarouselCampaigns});
    default:
      return state;
  }
};

export default FeaturedCarouselReducer;
