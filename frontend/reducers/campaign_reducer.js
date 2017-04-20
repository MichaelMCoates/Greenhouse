import {RECEIVE_CAMPAIGN} from '../actions/campaign_actions';
import merge from 'lodash/merge';

const _nullCampaign = Object.freeze({
  id: null,
  user_id: null,
  goal_amt: null,
  current_amt: null,
  title: null,
  tagline: null,
  city: null,
  country: null,
  duration: null,
  overview: null,
  campaign_story: null,
  created_at: null,
});

const CampaignReducer = (state = _nullCampaign, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CAMPAIGN:
      return merge({}, action.campaign);
    default:
      return state;
  }
};

export default CampaignReducer;
