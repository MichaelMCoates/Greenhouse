import React from 'react';
import {Link, hashHistory} from 'react-router';
import CampaignTile from './campaign_tile';
import TileCarouselSlider from './tile_carousel_slider';

class TileCarousel extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount () {
    this.props.fetchTileCarouselCampaigns();
  }

  render () {
    if (this.props.tileCarouselCampaigns[0] === undefined) {
      return (<div> </div>);
    }

    const campaignTiles = this.props.tileCarouselCampaigns.map ((campaign, idx) => (
      <CampaignTile campaign={campaign} key={idx} />
    ));

    return (
      <div className="tile-carousel">
        <div className="tile-carousel-list">
          <div className="user-show-page-header">
            <div className={"usp-header-item usp-header-item-selected"}>
              <div>Top picks for you</div>
            </div>
          </div>
          <TileCarouselSlider campaignTiles={campaignTiles} />
        </div>
      </div>
    );
  }
}

export default TileCarousel;
