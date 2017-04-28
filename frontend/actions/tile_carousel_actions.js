import * as APIUtil from '../util/tile_carousel_api_util';
export const RECEIVE_TILE_CAROUSEL_CAMPAIGNS = "RECEIVE_TILE_CAROUSEL_CAMPAIGNS";

export const receiveTileCarouselCampaigns = (tileCarouselCampaigns) => ({
  type: RECEIVE_TILE_CAROUSEL_CAMPAIGNS,
  tileCarouselCampaigns
});


export const fetchTileCarouselCampaigns = () => dispatch => (
  APIUtil.fetchTileCarouselCampaigns()
    .then(campaigns => dispatch(receiveTileCarouselCampaigns(campaigns)))
);
