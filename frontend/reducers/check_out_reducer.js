import {SET_AMOUNT, SET_PERK} from '../actions/check_out_actions';

const _nullCheckOut = Object.freeze({
  amount: null,
  perk: null,
});

const CheckOutReducer = (state = _nullCheckOut, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_AMOUNT:
      const amount = Number(action.amount.amount);
      return Object.assign({}, _nullCheckOut, {amount});
    case SET_PERK:
      const perk = action.perk;
      return Object.assign({}, _nullCheckOut, {perk});
    default:
      return state;
  }
};

export default CheckOutReducer;
