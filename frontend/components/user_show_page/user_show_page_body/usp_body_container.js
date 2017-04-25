import { connect } from 'react-redux';
import UserShowPageBody from './usp_body';

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
)(UserShowPageBody);
