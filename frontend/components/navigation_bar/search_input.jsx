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
        <input className="search-bar" value={this.state.query} onChange={this.update("query").bind(this)} />
        <div className='magnifying-glass-div'>
          <svg viewBox="0 0 26 26" id="icon-icon-search" width="100%" height="100%"><title>icon-icon-search</title><path d="M25.48 21.96l-4.693-4.587.107-.107c1.067-1.707 1.813-3.84 1.813-5.973C22.6 5.213 17.587.2 11.507.2 5.32.2.307 5.213.307 11.4c0 6.187 5.013 11.2 11.2 11.2 2.133 0 4.16-.64 5.76-1.707l4.693 4.587a1.16 1.16 0 0 0 1.6 0l1.92-1.92a1.16 1.16 0 0 0 0-1.6zM3.507 11.4c0-4.48 3.52-8 8-8 4.373 0 8 3.52 8 8 0 4.373-3.52 8-8 8-4.48-.107-8-3.627-8-8z" fill-rule="evenodd"></path></svg>
        </div>
      </form>
    );
  }
}

export default withRouter(SearchInput);
