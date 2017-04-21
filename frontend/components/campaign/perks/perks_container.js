import { connect } from 'react-redux';
import Perks from './perks';

const mapStateToProps = ({campaign}) => ({
  id: campaign.id,
  // needs to grab perks
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Perks);
