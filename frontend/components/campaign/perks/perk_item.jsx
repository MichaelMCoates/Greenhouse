import React from 'react';
import moment from 'moment';

class PerkItem extends React.Component {

  render() {
    let perk = this.props.perk;
    return (
      <li className="perk-item">
        <div className="perk-body">
          <div className="perk-cash-money">
            <text className="perk-cost">${perk.price}</text>
            <text className="perk-currency">&nbsp;USD + Shipping</text>
          </div>
          <div className="perk-title">{perk.title}</div>
          <p className="perk-description">{perk.description}</p>
          <div className="claimed">
            <div>{perk.number_claimed} out of {perk.number_available} claimed </div>
            <div>Ships Worldwide</div>
          </div>
        </div>

        <div className="perk-date">ESTIMATED {moment(perk.delivery_date).format('MMMM YYYY').toUpperCase()}</div>
        <div className="perk-date perk-date-hidden">GET THIS PERK</div>
      </li>
    );
  }
}

export default PerkItem;
