import React from 'react';
import Slider from 'react-slick';

const NextArrow = function(props) {
  return (
    <div className='slider-chevron-img next-chevron-img' {...props} >
      <div preserveAspectRatio="none" className='slider-chevron-img next-chevron-img'/>
    </div>
  );
};

const PrevArrow = function(props) {
  return (
    <div {...props} >
      <div preserveAspectRatio="none" className='slider-chevron-img prev-chevron-img'/>
    </div>
  );
};

class TileCarouselSlider extends React.Component {
  render () {
    let settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
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

export default TileCarouselSlider;
