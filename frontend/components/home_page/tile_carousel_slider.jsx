import React from 'react';
import Slider from 'react-slick';

class TileCarouselSlider extends React.Component {

  render () {

    let settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };

    const wrapper = this.props.campaignTiles.map ((tile) => (
      <div><h3>{tile}</h3></div>
    ));

    return (
      <Slider {...settings}>
          {wrapper}
      </Slider>
    );
  }
}

// <div><h3>1</h3></div>
// <div><h3>2</h3></div>
// <div><h3>3</h3></div>
// <div><h3>4</h3></div>
// <div><h3>5</h3></div>
// <div><h3>6</h3></div>
export default TileCarouselSlider;
