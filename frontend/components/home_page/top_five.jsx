import React from 'react';

class TopFive extends React.Component {
  constructor(props) {
     super(props);
   }


  render () {

    return (
      <div className="top-five">
          <div ><img src="https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/hexagon/hexagon-pitch-img.jpg" /></div>
          <div ><img src="https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/sobro/sobro-pitch-img.jpg" /></div>
          <div ><img src="https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/juisir/juisir-pitch-img.jpg" /></div>
          <div ><img src="https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/revolar/revolar-pitch-img.jpg" /></div>
          <div ><img src="https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/river/river-pitch-img.jpg" /></div>
      </div>
    );
  }
}

export default TopFive;
