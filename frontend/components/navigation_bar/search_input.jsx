import React from 'react';
import {Link, hashHistory, withRouter} from 'react-router';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
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

  render () {
    return (
      <form className="search-bar-form" onSubmit={this.urlUpdate.bind(this)}>
        <input className="search-bar" placeholder="Search..." value={this.state.query} onChange={this.update("query").bind(this)} />
      </form>
    );
  }
}

export default withRouter(SearchInput);
