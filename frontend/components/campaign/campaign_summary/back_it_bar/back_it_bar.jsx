import React from 'react';
import SocialBar from './social_bar';
import { Link, hashHistory } from 'react-router';


class BackItBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {active: false, amount: undefined};
    this.setState = this.setState.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.onClickCO = this.onClickCO.bind(this);
  }

  updateAmount(e) {
    (this.setState({amount: e.target.value}));
  }

  onClickCO() {
    if (!this.props.loggedIn) {
      alert("Must be logged in to check out!");
    } else {
      (this.props.setAmount({amount: this.state.amount}));
      hashHistory.push('/check_out');
    }
  }

  render() {
    if (this.state.active) {
      return (
        <div className="back-it-bar donation-bar">
          <div className="donation-input-div">
            <input className="donation-input"
              type="number"
              value={this.state.amount}
              onChange={this.updateAmount}
              placeholder="Donation Amount"
            />

            <span className="donation-input-close"
              onClick={() => this.setState({active: false})}>
              X
            </span>
          </div>

          <div onClick={this.onClickCO}>
            <input className="pink-button" type="submit" value="CHECK OUT" />
          </div>

        </div>
      );
    } else {
      return (<SocialBar setState={this.setState}/>);
    }
  }
}

export default BackItBar;
