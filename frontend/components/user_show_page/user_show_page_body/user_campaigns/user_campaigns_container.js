import { connect } from 'react-redux';
import UserCampaigns from './user_campaigns';

const mapStateToProps = ({user, session}) => {
  return ({
    user: user,
  });
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCampaigns);
