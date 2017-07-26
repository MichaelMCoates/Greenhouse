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
    window.scrollTo(0, 0);
    let locationQuery = this.props.location.query;
    if (locationQuery.searchText === undefined && locationQuery.category === undefined) {
      return;
    }

    this.props.searchCampaigns(this.state);
  }

  componentWillReceiveProps(nextProps) {
    let locationQuery = this.props.location.query;
    let nextLocationQuery = nextProps.location.query;
    window.scrollTo(0, 0);
    if (locationQuery.searchText !== nextLocationQuery.searchText || locationQuery.category !== nextLocationQuery.category ) {
      this.props.searchCampaigns(
        Object.assign(
          this.state,
          {query: nextLocationQuery.searchText, category: nextLocationQuery.category}
        )
      );
    }

    let nextSearchText = nextLocationQuery.searchText;
    if (nextSearchText === undefined) {
      nextSearchText = '';
    }

    this.setState({query: nextSearchText, category: nextLocationQuery.category});
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
    switch (category.trim()) {
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
      tiles = (<h1>Search something!</h1>);
    } else {
      tiles = this.props.search.map ((campaign, idx) => (
        <CampaignTile campaign={campaign} key={idx} />
      ));
    }

    let placeholder = 'Search for campaigns';

    let categoryTitle;
    if (this.state.category) {
      categoryTitle = this.convertCategoryToString(this.state.category);
      placeholder = `Search Within ${categoryTitle}`;
    }

    let queryHeaderText = this.state.query ? this.state.query : 'nothing yet!';

    return (
      <div className="search-page">
        <div className="search-category-title">
          {categoryTitle}
        </div>

        <div className="search-form-div">
          <div className="query-header">Results for <span className="query-label">{queryHeaderText}</span></div>
          <form className="search-form" onSubmit={this.urlUpdate.bind(this)}>
            <input className="search-field" placeholder={placeholder} value={this.state.query} onChange={this.update("query").bind(this)} />
            <div className='magnifying-glass-search-page-div'>
              <svg viewBox="0 0 26 26" id="icon-icon-search" width="100%" height="100%"><title>icon-icon-search</title><path d="M25.48 21.96l-4.693-4.587.107-.107c1.067-1.707 1.813-3.84 1.813-5.973C22.6 5.213 17.587.2 11.507.2 5.32.2.307 5.213.307 11.4c0 6.187 5.013 11.2 11.2 11.2 2.133 0 4.16-.64 5.76-1.707l4.693 4.587a1.16 1.16 0 0 0 1.6 0l1.92-1.92a1.16 1.16 0 0 0 0-1.6zM3.507 11.4c0-4.48 3.52-8 8-8 4.373 0 8 3.52 8 8 0 4.373-3.52 8-8 8-4.48-.107-8-3.627-8-8z" fill-rule="evenodd"></path></svg>
            </div>
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
