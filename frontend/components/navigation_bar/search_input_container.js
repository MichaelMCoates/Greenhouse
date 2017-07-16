import { connect } from 'react-redux';
import SearchInput from './search_input';
import {searchCampaigns} from '../../actions/search_actions.js';

const mapStateToProps = () => {
  return ({
  });
};

const mapDispatchToProps = (dispatch) => ({
  searchCampaigns: (search) => dispatch(searchCampaigns(search)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
