import {RECEIVE_SEARCH_CAMPAIGNS} from '../actions/search_actions';

const _nullSearch = []

const SearchReducer = (state = _nullSearch, action) => {
  switch(action.type) {
    case RECEIVE_SEARCH_CAMPAIGNS:
      return action.campaigns;
    default:
      return state;
  }
};

export default SearchReducer;
