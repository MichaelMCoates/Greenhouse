import React from 'react';
import {Link, hashHistory} from 'react-router';
import CampaignTile from './campaign_tile';

class TileCarousel extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount () {
    this.props.fetchTileCarouselCampaigns();
  }


  render () {

    if (this.props.tileCarouselCampaigns[0] === undefined) {
      return (<div>Loading...</div>);
    }

    const campaignTiles = this.props.tileCarouselCampaigns.map ((campaign, idx) => (
      <CampaignTile campaign={campaign} key={idx} />
    ));

    return (
      <div className="tile-carousel">
        <div className="tile-carousel-list">
          {campaignTiles}
        </div>
      </div>
    );
  }
}

export default TileCarousel;
