import * as APIUtil from '../util/contribution_api_util';

import {receiveCampaign} from './campaign_actions';

export const createContribution = contribution => dispatch => (
  APIUtil.createContribution(contribution)
    .then(campaign => dispatch(receiveCampaign(campaign)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
