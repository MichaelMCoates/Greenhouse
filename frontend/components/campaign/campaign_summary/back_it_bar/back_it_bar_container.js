import { connect } from 'react-redux';
import BackItBar from './back_it_bar';
import {setAmount} from '../../../../actions/check_out_actions';

const mapStateToProps = ({campaign, session}) => ({
  campaign_id: campaign.id,
  loggedIn: Boolean(session.currentUser),
});

const mapDispatchToProps = (dispatch) => ({
  setAmount: (amount) => dispatch(setAmount(amount)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackItBar);
