import { connect } from 'react-redux';
import Perks from './perks';
import {setPerk} from '../../../actions/check_out_actions';

const mapStateToProps = ({campaign}) => ({
  perks: campaign.perks,
});

const mapDispatchToProps = (dispatch) => ({
  setPerk: (perk) => dispatch(setPerk(perk)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Perks);
