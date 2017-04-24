import React from 'react';
import PerkItem from './perk_item';

class Perks extends React.Component {
  constructor (props) {
    super(props);

    this.setPerk = this.props.setPerk.bind(this);
  }

  render() {
    const perks_arr = this.props.perks.map( (perk, idx) => (
      <PerkItem key={idx} perk={perk} setPerk={this.setPerk}/>
    ));

    return (
      <div className="perks">
        <div className="campaign-show-headerTitle">PERKS</div>
        <ul className="perks-list">
         {perks_arr}
        </ul>
      </div>
    );
  }
}

export default Perks;
