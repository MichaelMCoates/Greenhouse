import React from 'react';
import { Link, hashHistory } from 'react-router';


class CheckOutTotal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {amount: this.props.amount};
    this.updateAmount = this.updateAmount.bind(this);
  }

  updateAmount(e) {
    (this.setState({amount: e.target.value}));
  }


  render() {

    if (this.props.perk) {
      return(
        <div className="check-out-total">
          <div className="top-square">
            <text className="check-out-header">Your Perk</text>
            {this.props.perk.title}
          </div>
          <div className="review">
            <text className="check-out-header">Review & Pay</text>
            <div className="subtotals">
              <div>
                <text>{this.props.perk.title}</text>
                <text>Shipping</text>
              </div>
              <div className="price">
                <div>
                  <text>${this.props.perk.price}</text>
                  <text className="currency">USD</text>
                </div>
                <text>-</text>
              </div>
            </div>
          </div>
          <hr/>
          <div className="total">
            <text>Total</text>
            <div>
              <text>${this.props.perk.price}</text>
              <text className="currency">USD</text>
            </div>
          </div>
          <p>By clicking 'Submit Payment', you acknowledge you are contributing to a work-in-progress and not making a direct purchase. Perks are managed by campaigners and cannot be guaranteed by Indiegogo. You also acknowledge and agree to our Terms of Use and Privacy Policy.</p>

          <input type="submit" className="pink-button" value="SUBMIT PAYMENT"/>
        </div>
      );
    } else {
      return (
        <div className="check-out-total">
          <div className="top-square">
            <div>
              <text className="check-out-header">Your Contribution</text>
              <Link to={'/campaigns/' + this.props.campaign_id}>Add Perk</Link>
            </div>
            <input className="check-out-donation-input"
              type="number"
              value={this.state.amount}
              onChange={this.updateAmount}
            />
          </div>
          <div className="review">
            <text className="check-out-header">Review & Pay</text>
            <div className="subtotals">
              <div>
                <text>Your Contribution</text>
              </div>
              <div className="price">
                <div>
                  <text>${this.state.amount}</text>
                  <text className="currency">USD</text>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="total">
            <text>Total</text>
            <div>
              <text>${this.state.amount}</text>
              <text className="currency">USD</text>
            </div>
          </div>
          <p>By clicking 'Submit Payment', you acknowledge you are contributing to a work-in-progress and not making a direct purchase. Perks are managed by campaigners and cannot be guaranteed by Indiegogo. You also acknowledge and agree to our Terms of Use and Privacy Policy.</p>

          <input type="submit" className="pink-button" value="SUBMIT PAYMENT"/>
        </div>
      );
    }
  }
}
export default CheckOutTotal;
