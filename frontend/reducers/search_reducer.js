import {RECEIVE_SEARCH_CAMPAIGNS} from '../actions/search_actions';

const _nullSearch = Object.freeze({
});

const SearchReducer = (state = _nullSearch, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_CAMPAIGNS:
      return action.campaigns;
    default:
      return state;
  }
};

export default SearchReducer;
