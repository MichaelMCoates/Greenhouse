import { connect } from 'react-redux';
import FeaturedCarousel from './featured_carousel';
import {fetchFeaturedCarouselCampaigns, shiftLeft, shiftRight, receiveFeaturedCarouselCampaigns} from '../../actions/featured_carousel_actions.js';

const mapStateToProps = ({featuredCarousel}) => ({
  featuredCarouselCampaigns: featuredCarousel.featuredCarouselCampaigns,
  active: featuredCarousel.active,
  direction: featuredCarousel.direction,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFeaturedCarouselCampaigns: () => dispatch(fetchFeaturedCarouselCampaigns()),
  receiveFeaturedCarouselCampaigns: (featuredCarouselCampaigns) => dispatch(receiveFeaturedCarouselCampaigns(featuredCarouselCampaigns)),
  shiftLeft: () => dispatch(shiftLeft()),
  shiftRight: () => dispatch(shiftRight()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedCarousel);
