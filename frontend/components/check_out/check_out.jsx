import React from 'react';
import { Link, withRouter } from 'react-router';
import CurrentUserDetails from './current_user_details';
import CheckOutTotal from './check_out_total';
// import CampaignerDetailsContainer from '../campaign/campaign_summary/campaigner_details/campaigner_details_container';
// currentuserdetailscontainer

class CheckOut extends React.Component {
	constructor(props) {
		super(props);
		this.state = {appearance: null, };
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();

	}



	render() {
    // <CurrentUserDetailsContainer user_id={this.props.currentUser.id} />
    let checkouttotal;
    if (this.props.perk) {
      checkouttotal = <CheckOutTotal perk={this.props.perk}/>;
    } else {
      checkouttotal = <CheckOutTotal amount={this.props.amount}/>;
    }

		return (
      <div className="check-out-page">
        <header>
          <h2 className="check-out-h2"> You're contributing to {this.props.user.user.first_name} {this.props.user.user.last_name}'s</h2>
          <h1 className="check-out-h1"> {this.props.campaign.title}</h1>
        </header>
        <div className="check-out-bottom">
    			<div className="check-out-form">
            <CurrentUserDetails currentUser={this.props.currentUser} />
            <text>Debit or Credit Card</text>
            <form>
              <div>
                <input className="name-on-card" placeholder="Name on Card" />
                <input className="card-num" placeholder="Debit or Credit Card Number" />
              </div>
              <div>
                <input className="exp-date" placeholder="Expiration Date (MM/YY)" />
                <input className="sec-code" placeholder="Security Code" />
                <input className="post-code" placeholder="Billing Postal Code" />
              </div>
            </form>

            <text>Contribution Appearance</text>
            <text>Choose a name to be displayed publicly next to your contribution on the campaign page.</text>

            <form>
              <input type="radio" name="appearance" value={this.props.currentUser.email}/> {this.props.currentUser.email}<br/>
              <input type="radio" name="appearance" value="Anonymous"/> Anonymous<br/>
              <input type="radio" name="appearance" className="other" value="other"/> Other <br/>
              <input type="text" className="reveal-if-active" name="appearance" placeholder="Other Name"/>
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
