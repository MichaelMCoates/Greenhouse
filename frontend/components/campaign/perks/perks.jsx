import React from 'react';
import PerkItemContainer from './perk_item_container';

class Perks extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const perks_arr = this.props.perks.map( (perk, idx) => (
      <PerkItemContainer key={idx} perk={perk} />
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
