import React from 'react';
import Slider from 'react-slick'

class HomePage extends React.Component {
  render () {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,

    };

    return (
      <div className="slider">
        <Slider {...settings} className="slider-comp">
          <div className="tile"><img src="http://www.fillmurray.com/200/305" /></div>
          <div className="tile"><img src="http://www.fillmurray.com/200/304" /></div>
          <div className="tile"><img src="http://www.fillmurray.com/200/303" /></div>
          <div className="tile"><img src="http://www.fillmurray.com/200/302" /></div>
          <div className="tile"><img src="http://www.fillmurray.com/200/301" /></div>
          <div className="tile"><img src="http://www.fillmurray.com/200/306" /></div>
        </Slider>
      </div>
    );
  }
}

export default HomePage;
"https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/apple-desk-designer-display.jpeg",
"https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/food-kitchen-cooking-spices.jpg",
"https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/light-night-lens-shadow.jpg",
"https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/microphones-radio-sound-reportage-161865.png",
