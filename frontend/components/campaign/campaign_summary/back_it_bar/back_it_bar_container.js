import { connect } from 'react-redux';
import BackItBar from './back_it_bar';

const mapStateToProps = ({campaign}) => ({
  campaign_id: campaign.id,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackItBar);
