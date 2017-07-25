import { connect } from 'react-redux';
import TileCarousel from './tile_carousel';
import {fetchTileCarouselCampaigns} from '../../actions/tile_carousel_actions.js';

const mapStateToProps = ({ tileCarousel }) => {
  return ({
    tileCarouselCampaigns: tileCarousel.tileCarouselCampaigns,
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchTileCarouselCampaigns: () => dispatch(fetchTileCarouselCampaigns()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TileCarousel);
