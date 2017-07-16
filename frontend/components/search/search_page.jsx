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
    };
  }

  componentDidMount () {
    let locationQuery = this.props.location.query;
    if (locationQuery.searchText === undefined && locationQuery.category === undefined) {
      return;
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
      queryString = `?searchText=${this.state.query}&category=${this.state.category}`;
    } else if (this.state.query) {
      queryString = `?searchText=${this.state.query}`;
    } else if (this.state.category) {
      queryString = `?category=${this.state.category}`;
    }

    this.props.router.replace({ pathname: `/search${queryString}`});
  }

  convertCategoryToString(category) {
    switch (category) {
      case "Phones":
        return "Phones & Accessories";
      case "Travel":
        return "Travel & Outdoors";
      case "Health":
        return "Health & Fitness";
      case "Fashion":
        return "Fashion & Wearables";
      case "Tabletop":
        return "Tabletop Games";
      case "Food":
        return "Food & Beverages";
      default:
        return category;
    }
  }


  render () {
    let tiles;
    if (this.props.search.length == 0) {
      tiles = (<h1>"Search something!"</h1>);
    } else {
      tiles = this.props.search.map ((campaign, idx) => (
        <CampaignTile campaign={campaign} key={idx} />
      ));
    }

    let categoryTitle;
    if (this.state.category) {
      categoryTitle = this.convertCategoryToString(this.state.category);
    }

    return (
      <div className="search-page">
        <div className="search-category-title">
          {categoryTitle}
        </div>

        <div className="search-form-div">
          <div className="query-header">Results for <span className="query-label">{this.state.query}</span></div>
          <form className="search-form" onSubmit={this.urlUpdate.bind(this)}>
            <input className="search-field" value={this.state.query} onChange={this.update("query").bind(this)} />
          </form>
        </div>

        <div className="search-tiles-div">
          {tiles}


        </div>

      </div>
    );
  }
}

export default withRouter(SearchPage);
