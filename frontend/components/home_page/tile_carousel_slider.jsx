import React from 'react';
import Slider from 'react-slick';

// function NextArrow(props) {
//   const {className, style, onClick} = props;
//   return (
//     <div
//       className={className}
//       style={{display: 'block', background: 'red'}}
//       onClick={onClick}
//     ><img src='/assets/chevron.svg' /></div>
//   );
// }
//
// function PrevArrow(props) {
//   const {className, style, onClick} = props;
//   return (
//     <div
//       className={className}
//       style={{display: 'block', background: 'green'}}
//       onClick={onClick}
//     ></div>
//   );
// }


const NextArrow = function(props) {
  return (
    <div {...props} >
      <img preserveAspectRatio="none" src='/assets/chevron.svg' className='slider-chevron-img next-chevron-img'/>
    </div>
  );
};

const PrevArrow = function(props) {
  return (
    <div {...props} >
      <img preserveAspectRatio="none" src='/assets/chevron.svg' className='slider-chevron-img prev-chevron-img'/>
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

// <div><h3>1</h3></div>
// <div><h3>2</h3></div>
// <div><h3>3</h3></div>
// <div><h3>4</h3></div>
// <div><h3>5</h3></div>
// <div><h3>6</h3></div>
export default TileCarouselSlider;
