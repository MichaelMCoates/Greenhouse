import * as APIUtil from '../util/perk_api_util';

import {receiveCampaign} from './campaign_actions';

export const createPerk = perk => dispatch => (
  APIUtil.createPerk(perk)
    .then(campaign => dispatch(receiveCampaign(campaign)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
