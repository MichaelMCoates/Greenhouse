import { connect } from 'react-redux';
import SearchPage from './search_page';
import {searchCampaigns} from '../../actions/search_actions.js';

const mapStateToProps = ({search}) => {
  return ({
    search: search,
  })
};

const mapDispatchToProps = (dispatch) => ({
  searchCampaigns: (search) => dispatch(searchCampaigns(search)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
