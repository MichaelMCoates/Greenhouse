import {RECEIVE_USER, RECEIVE_CAMPAIGNS} from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  user: null,
  campaigns: null,
});

const UserReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return Object.assign({}, _nullUser, {user});
    case RECEIVE_CAMPAIGNS:
      const campaigns = action.campaigns;
      return Object.assign({}, state, {campaigns});
    default:
      return state;
  }
};

export default UserReducer;
