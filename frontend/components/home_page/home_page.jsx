import React from 'react';
import FeaturedCarouselContainer from './featured_carousel_container';
import TileCarouselContainer from './tile_carousel_container';
import CategoryBoxes from './category_boxes';

class HomePage extends React.Component {
  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    // if (this.props.campaign.user_id === null) {
    //   return (<div> </div>);
    // }

    return (
      <div className="home-page">
        <FeaturedCarouselContainer />
        <TileCarouselContainer />
        <CategoryBoxes />
      </div>
    );
  }
}
export default HomePage;
