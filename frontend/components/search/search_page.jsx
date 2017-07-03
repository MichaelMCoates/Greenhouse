import React from 'react';
import {Link, hashHistory} from 'react-router';
import CampaignTile from '../home_page/campaign_tile';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: this.props.location.query.searchText,
    }
  }

  componentDidMount () {
    this.props.searchCampaigns(this.state);
  }


  render () {
    debugger
    return (
      <div className="lolsearch">
        SEARCH PAGE
      </div>
    );
  }
}

export default SearchPage;
