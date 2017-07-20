import React from 'react';
import {Link, hashHistory, withRouter} from 'react-router';
import TileFundingBar from './tile_funding_bar';

class TileCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  urlUpdate(e, category) {
    e.stopPropagation();
    let queryString = `?category=${category}`;
    this.props.router.replace({ pathname: `/search${queryString}`});
  }

  render () {
    const camp = this.props.campaign;
    return (
      <div className="campaign-tile" onClick={() => hashHistory.push('/campaigns/' + camp.id)}>
        <div className="tile-img">
          <img src={camp.tile_img_url} />
        </div>
        <div className="tile-body">
          <div className="tile-body-top">
            <div className="tile-category" onClick={(e) => this.urlUpdate(e, `${camp.category}`)}>
              {camp.category}
            </div>
            <div className="tile-title">
              {camp.title}
            </div>
            <div className="tile-tagline">
              {camp.tagline}
            </div>
          </div>

          <div className="tile-body-bottom">
            <div className="tile-funding-bar">
              <TileFundingBar created_at={camp.created_at} current_amt={camp.current_amt} goal_amt={camp.goal_amt} duration={camp.duration} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TileCarousel);
