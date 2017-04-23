import { connect } from 'react-redux';
import Perks from './perks';

const mapStateToProps = ({campaign}) => ({
  perks: campaign.perks,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Perks);
