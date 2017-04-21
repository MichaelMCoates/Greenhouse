import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = user_id => dispatch => (
  APIUtil.fetchUser(user_id)
    .then(user => dispatch(receiveUser(user)))
);

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});
