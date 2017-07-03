import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_CAMPAIGNS = "RECEIVE_SEARCH_CAMPAIGNS";

export const searchCampaigns = search => dispatch => (
  APIUtil.searchCampaigns(search)
    .then(campaigns => dispatch(receiveSearchCampaigns(campaigns)))
);

export const receiveSearchCampaigns = (campaigns) => ({
  type: RECEIVE_SEARCH_CAMPAIGNS,
  campaigns
});
