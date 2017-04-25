import React from 'react';
import { Link, hashHistory } from 'react-router';


class CheckOutTotal extends React.Component {
  constructor (props) {
    super(props);

  }




  render() {

    if (this.props.perk) {
      return(
        <div className="check-out-total">
          <div className="top-square">
            <div className="check-out-header-top-square">Your Perk</div>
            <div className="check-out-perk-title">{this.props.perk.title}</div>
          </div>
          <div className="review">
            <div className="check-out-header">Review & Pay</div>
            <div className="subtotals">
              <div>
                <div>{this.props.perk.title}</div>
                <div>Shipping</div>
              </div>
              <div className="price">
                <div>${Number(this.props.perk.price).toLocaleString()} <text className="currency">USD</text></div>
                <div>&mdash;</div>
              </div>
            </div>
            <hr className="divider"/>
            <div className="total">
              <div className="check-out-header">Total</div>
              <div>${Number(this.props.perk.price).toLocaleString()}  <text className="currency">USD</text></div>
            </div>
            <p>By clicking 'Submit Payment', you acknowledge you are contributing to <strong> a work-in-progress and not making a direct purchase</strong>. Perks are managed by campaigners and cannot be guaranteed by Indiegogo. You also acknowledge and agree to our Terms of Use and Privacy Policy.</p>

            <input onClick={this.props.handleSubmit} type="submit" className="pink-button-check-out" value="SUBMIT PAYMENT"/>
          </div>
        </div>
      );


    } else {


      return (
        <div className="check-out-total">
          <div className="top-square">
            <div>
              <div className="check-out-header-top-square">Your Contribution &nbsp;&nbsp; <Link className="add-perk-link" to={'/campaigns/' + this.props.campaign_id}> Add Perk</Link></div>

            </div>
            <div className="codi">
              <span className="codi-sign">$</span>
              <span className="codi-currency">USD</span>
              <input className="check-out-donation-input"
                type="number"
                value={this.props.amount}
                onChange={this.props.updateAmount}/>

            </div>
          </div>
          <div className="review">
            <div className="check-out-header">Review & Pay</div>
            <div className="subtotals">
              <div>
                <div>Your Contribution</div>
              </div>
              <div className="price">
                <div>
                  <div>${Number(this.props.amount).toLocaleString()} <text className="currency">USD</text></div>
                </div>
              </div>
            </div>
            <hr className="divider"/>
            <div className="total">
              <div className="check-out-header">Total</div>
              <div>${Number(this.props.amount).toLocaleString()} <text className="currency">USD</text></div>
            </div>
            <p>By clicking 'Submit Payment', you acknowledge you are contributing to <strong> a work-in-progress and not making a direct purchase </strong>. Perks are managed by campaigners and cannot be guaranteed by Indiegogo. You also acknowledge and agree to our Terms of Use and Privacy Policy.</p>

            <input onClick={this.props.handleSubmit} type="submit" className="pink-button-check-out" value="SUBMIT PAYMENT"/>
          </div>
        </div>
      );
    }
  }
}
export default CheckOutTotal;
