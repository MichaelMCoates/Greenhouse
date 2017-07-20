import { connect } from 'react-redux';
import { createContribution } from '../../actions/contribution_actions';
import CheckOut from './check_out';
import React from 'react';

const mapStateToProps = ({session, checkOut, campaign, user}) => {
 if (checkOut.perk) {
    return ({
      currentUser: session.currentUser,
      perk: checkOut.perk,
      campaign: campaign,
      user: user,
    });
  } else if (checkOut.amount) {
    return ({
      currentUser: session.currentUser,
      amount: checkOut.amount,
      campaign: campaign,
      user: user,
    });
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContribution: (contribution) => dispatch(createContribution(contribution))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckOut);
