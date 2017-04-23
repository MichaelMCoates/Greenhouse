import React from 'react';
import SocialBar from './social_bar';
import { Link } from 'react-router';


class BackItBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {active: false, amount: undefined};
    this.setState = this.setState.bind(this);
  }

  updateAmount(e) {
    (this.setState({amount: e.target.value}));
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

          <Link to={"/campaigns/1"}>
            <input className="pink-button" type="submit" value="CHECK OUT" />
          </Link>

        </div>
      );
    } else {
      return (<SocialBar setState={this.setState}/>);
    }
  }
}

export default BackItBar;
