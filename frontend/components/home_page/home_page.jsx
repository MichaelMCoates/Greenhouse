import React from 'react';
import FeaturedCarouselContainer from './featured_carousel_container';

class HomePage extends React.Component {
  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    // if (this.props.campaign.user_id === null) {
    //   return (<div>Loading...</div>);
    // }

    return (
      <div className="home-page">
        <FeaturedCarouselContainer />
      </div>
    );
  }
}
export default HomePage;
