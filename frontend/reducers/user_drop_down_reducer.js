import {ACTIVATE_USER_DROP_DOWN, DEACTIVATE_USER_DROP_DOWN} from '../actions/user_drop_down_actions';
import merge from 'lodash/merge';

const _nullUDD = Object.freeze({
  active: false
});

const UserDropDownReducer = (state = _nullUDD, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ACTIVATE_USER_DROP_DOWN:
      return {active: true};
    case DEACTIVATE_USER_DROP_DOWN:
      return {active: false};
    default:
      return state;
  }
};

export default UserDropDownReducer;
