import React from 'react';
import {hashHistory} from 'react-router';

class CampaignStartPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = { goal_amt: 500, title: '' };
    this.setState = this.setState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
		e.preventDefault();
    if (this.props.currentUser) {
      sessionStorage.setItem('goal_amt', this.state.goal_amt);
      sessionStorage.setItem('title', this.state.title);
      hashHistory.push('/create-campaign');
    }
    else {
      this.props.clearErrors();
      this.props.modalLogIn();
    }
	}

  render() {
    return (
      <div className="campaign-start-page">
        <h2 className="campaign-start-header">Start a campaign</h2>
        <h3 className="campaign-start-tagline">Raise funds for creative, entrepreneurial, or other passion projects.</h3>

        <h4 className="campaign-start-input-text">How much money would you like to raise?</h4>
        <div className="USDDDD">
          <span className="currency-label-cs">$</span>

          <input type="number"
            value={this.state.goal_amt}
            onChange={this.update('goal_amt')}
            className="campaign-start-input-cash"
            />
          <div className="us-div">USD</div>
        </div>

        <h5 className="campaign-start-input-subtext">Minimum $500.</h5>

        <h4 className="campaign-start-input-text">What is the title of your campaign?</h4>
        <input type="text"
          value={this.state.title}
          onChange={this.update('title')}
          className="campaign-start-input-title"
          placeholder="My campaign title..."
          />
        <h5 className="campaign-start-input-subtext">50 characters maximum.</h5>

        <input onClick={this.handleSubmit} className="pink-button-campaign-start" type="submit" value="CREATE MY CAMPAIGN" />
      </div>
    );
  }
}

export default CampaignStartPage;
