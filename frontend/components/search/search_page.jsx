import React from 'react';
import {Link, hashHistory, withRouter} from 'react-router';
import CampaignTile from '../home_page/campaign_tile';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    let locationQuery = this.props.location.query;

    this.state = {
      query: locationQuery.searchText,
      category: locationQuery.category,
    }
  }

  componentDidMount () {
    let locationQuery = this.props.location.query;
    if (locationQuery.searchText === undefined && locationQuery.category === undefined) {
      return
    }

    this.props.searchCampaigns(this.state);
  }

  componentWillReceiveProps(nextProps) {
    let locationQuery = this.props.location.query;
    let nextLocationQuery = nextProps.location.query;
    if (locationQuery.searchText !== nextLocationQuery.searchText || locationQuery.category !== nextLocationQuery.category ) {
      this.props.searchCampaigns(
        Object.assign(
          this.state,
          {query: nextLocationQuery.searchText, category: nextLocationQuery.category}
        )
      );
    }
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  urlUpdate(e) {
    e.preventDefault();

    let queryString;
    if (this.state.query && this.state.category) {
      queryString = `?searchText=${this.state.query}&category=${this.state.category}`
    } else if (this.state.query) {
      queryString = `?searchText=${this.state.query}`
    } else if (this.state.category) {
      queryString = `?category=${this.state.category}`
    }

    this.props.router.replace({ pathname: `/search${queryString}`})
  }


  render () {
    return (
      <div className="search-page">

        <div className="search-form-div">
          <div className="query-header">Results for <span className="query-label">{this.state.query}</span></div>
          <form className="search-form" onSubmit={this.urlUpdate.bind(this)}>
            <input className="search-field" value={this.state.query} onChange={this.update("query").bind(this)} />
          </form>
        </div>

      </div>
    );
  }
}

export default withRouter(SearchPage);
