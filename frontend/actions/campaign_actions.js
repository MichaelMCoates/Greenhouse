import * as APIUtil from '../util/campaign_api_util';

export const RECEIVE_CAMPAIGN = "RECEIVE_CAMPAIGN";

export const fetchCampaign = campaignId => dispatch => (
  APIUtil.fetchCampaign(campaignId)
    .then(campaign => dispatch(receiveCampaign(campaign)))
);

export const receiveCampaign = (campaign) => ({
  type: RECEIVE_CAMPAIGN,
  campaign
});
