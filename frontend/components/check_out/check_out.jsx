import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import CurrentUserDetails from './current_user_details';
import CheckOutTotal from './check_out_total';

class CheckOut extends React.Component {
	constructor(props) {
		super(props);
		this.state = {appearance: null, amount: this.props.amount || this.props.perk.price};
		this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.setState = this.setState.bind(this);
    this.updateAppearance = this.updateAppearance.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
    if (this.state.appearance === null || this.state.amount === null) {
      alert('Must fill in all fields!');
      return;
    }

    if (this.props.perk) {
      let mycontribution = Object.assign(
        this.state,
        {perk_id: this.props.perk.id,
          campaign_id: this.props.campaign.id,
          user_id: this.props.currentUser.id
        }
      );

      return this.props.createContribution({contribution: mycontribution})
        .then(() => hashHistory.push('/campaigns/' + this.props.campaign.id));

    } else {
      let mycontribution = Object.assign(
        this.state,
        {campaign_id: this.props.campaign.id,
          user_id: this.props.currentUser.id
        }
      );

      return this.props.createContribution({contribution: mycontribution})
        .then(() => hashHistory.push('/campaigns/' + this.props.campaign.id));
    }
	}

  updateAmount(e) {
    (this.setState({amount: e.target.value}));
  }

  updateAppearance(e) {
    (this.setState({appearance: e.target.value}));
  }

	render() {
    let checkouttotal;
    if (this.props.perk) {
      checkouttotal = <CheckOutTotal
          perk={this.props.perk}
          handleSubmit={this.handleSubmit}
        />;
    } else {
      checkouttotal = <CheckOutTotal
          handleSubmit={this.handleSubmit}
          updateAmount={this.updateAmount}
          campaign_id={this.props.campaign.id}
          amount={this.state.amount}
        />;
    }

		return (
      <div className="check-out-page">
        <header>
          <h2 className="check-out-h2">
            You're contributing to {this.props.user.user.first_name} {this.props.user.user.last_name + '\''}s
          </h2>
          <h1 className="check-out-h1"> {this.props.campaign.title}</h1>
        </header>
        <div className="check-out-bottom">
    			<div className="check-out-form">
            <CurrentUserDetails className="current-user-details" currentUser={this.props.currentUser} />
            <text className="check-out-sub-title">Debit or Credit Card</text>
            <br/>
            <text>Fields have been disabled</text>
            <form className="credit-card-deets">
              <div className="credit-card-deets-top">
                <input className="name-on-card" placeholder="Name on Card" disabled/>
                <input className="card-num" placeholder="Debit or Credit Card Number" disabled/>
              </div>
              <div className="credit-card-deets-bottom">
                <input className="exp-date" placeholder="Expiration Date (MM/YY)" disabled/>
                <input className="sec-code" placeholder="Security Code" disabled/>
                <input className="post-code" placeholder="Billing Postal Code" disabled/>
              </div>
            </form>

            <text className="check-out-sub-title">Contribution Appearance</text>
            <br/>
            <text>Choose a name to be displayed publicly next to your contribution on the campaign page.</text>

            <form className="appearance-form" onClick={this.updateAppearance}>

              <label className={this.state.appearance == this.props.currentUser.first_name ? "appearance-radio appearance-radio-selected" : "appearance-radio"}>
                <input type="radio"
                  name="appearance"
                  value={this.props.currentUser.first_name}
                />
                <text className="radio-text">
                  {this.props.currentUser.first_name}
                </text>
                <br/>
              </label>

              <label className={this.state.appearance == "Anonymous" ? "appearance-radio appearance-radio-selected" : "appearance-radio"}>
                <input
                  type="radio"
                  name="appearance"
                  value="Anonymous"
                />
                <text className="radio-text">
                  Anonymous
                </text>
                <br/>
              </label>
            </form>
    			</div>

          <div className="totaling-comp">
            {checkouttotal}
          </div>
        </div>
      </div>
		);
	}

}

export default CheckOut;
