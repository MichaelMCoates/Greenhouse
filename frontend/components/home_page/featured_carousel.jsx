import React from 'react';
import {Link, browserHistory} from 'react-router';

class FeaturedCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.shiftLeft = this.props.shiftLeft.bind(this);
    this.shiftRight = this.props.shiftRight.bind(this);
    this.updateFeaturedCarousel = this.updateFeaturedCarousel.bind(this);
    this.interval = null;
  }

  componentDidMount () {
    this.props.fetchFeaturedCarouselCampaigns();
    window.addEventListener('animationend', this.updateFeaturedCarousel);
    this.interval = setInterval(this.shiftLeft, 5000);
  }

  componentWillUnmount () {
    window.removeEventListener('animationend', this.updateFeaturedCarousel);
    clearInterval(this.interval);
  }

  updateFeaturedCarousel(e) {
    if (e.animationName === "shift-featured-carousel-right") {
      this.props.featuredCarouselCampaigns.unshift(this.props.featuredCarouselCampaigns.pop());
    } else if (e.animationName === "shift-featured-carousel-left") {
      this.props.featuredCarouselCampaigns.push(this.props.featuredCarouselCampaigns.shift());
    }

    this.props.receiveFeaturedCarouselCampaigns(this.props.featuredCarouselCampaigns);
  }

  shiftOrNot(idx) {
    return () => {
      if (idx == 1) {
        this.shiftRight();
      } else if (idx == 3) {
        this.shiftLeft();
      }
    };
  }

  classShifter() {
    if (this.props.active) {
      if (this.props.direction === 'right') {
        return ("shift-featured-carousel-right");
      } else if (this.props.direction === 'left') {
        return ("shift-featured-carousel-left");
      }
    }
  }

  classFader(idx) {
    if (this.props.active) {
      if (this.props.direction === 'right' && idx == 2) {
        return ("featured-carousel-fade-out-right");
      } else if (this.props.direction === 'left' && idx == 2) {
        return ("featured-carousel-fade-out-left");
      } else if (this.props.direction === 'left' && idx == 3) {
        return ("featured-carousel-fade-in-left");
      } else if (this.props.direction === 'right' && idx == 1) {
        return ("featured-carousel-fade-in-right");
      }
    }
  }

  middle(idx) {
    if (idx == 2) {
      return ("middle");
    }
  }

  fCarouselTrack() {
    const fCarouselItems = this.props.featuredCarouselCampaigns.map( (campaign, idx) => (
      <div key={idx} className="featured-carousel-div" >
        <img className="featured-carousel-img" src={campaign.pitch_img_url} />
        <div className="grey"/>
        <div className={this.middle(idx) + " featured-carousel-overlay " + this.classFader(idx)} onClick={this.shiftOrNot(idx)}>
          <div className="featured-carousel-overlay-left">
            <div className="featured-carousel-title">
              {campaign.title}
            </div>
            <div className="featured-carousel-tagline">
              {campaign.tagline}
            </div>
          </div>
          <div className="featured-carousel-overlay-right">
            <div onClick={() => browserHistory.push('/campaigns/' + campaign.id)} className={"see-campaign"}>
              SEE CAMPAIGN
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div className={"featured-carousel-track " + this.classShifter()}>
        {fCarouselItems}
      </div>
    );
  }


  render () {
    if (this.props.featuredCarouselCampaigns[0] === undefined) {
      return (<div> </div>);
    }

    return (
      <div className="featured-carousel">
        <div className="featured-carousel-list">
          {this.fCarouselTrack()}
        </div>
      </div>
    );
  }
}

export default FeaturedCarousel;
