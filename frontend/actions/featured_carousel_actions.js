import * as APIUtil from '../util/featured_carousel_api_util';
export const SHIFT_RIGHT = "SHIFT_RIGHT";
export const SHIFT_LEFT = "SHIFT_LEFT";
export const RECEIVE_FEATURED_CAROUSEL_CAMPAIGNS = "RECEIVE_FEATURED_CAROUSEL_CAMPAIGNS";

export const shiftRight = () => ({
  type: SHIFT_RIGHT
});

export const shiftLeft = () => ({
  type: SHIFT_LEFT
});

export const receiveFeaturedCarouselCampaigns = (featuredCarouselCampaigns) => ({
  type: RECEIVE_FEATURED_CAROUSEL_CAMPAIGNS,
  featuredCarouselCampaigns
});

export const fetchFeaturedCarouselCampaigns = () => dispatch => (
  APIUtil.fetchFeaturedCarouselCampaigns()
    .then(campaigns => dispatch(receiveFeaturedCarouselCampaigns(campaigns)))
);
