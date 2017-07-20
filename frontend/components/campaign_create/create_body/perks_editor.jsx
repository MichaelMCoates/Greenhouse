import React from 'react';
import PerkItem from '../../campaign/perks/perk_item';

class PerksEditor extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      price: '',
      title: '',
      description: '',
      number_available: '',
      delivery_date: '',
      delivery_date_str: '',
    };

    this.setState = this.setState.bind(this);
    this.setPerkDate = this.setPerkDate.bind(this);
    this.update = this.update.bind(this);
    this.savePerk = this.savePerk.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {

    this.initialState = {
      price: '',
      title: '',
      description: '',
      number_available: '',
      delivery_date: '',
      delivery_date_str: '',
    };

    this.setState(this.initialState);
  }

  setPerkDate (e) {
    this.setState({delivery_date: new Date(e.target.value), delivery_date_str: e.target.value} );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  savePerk () {
    let perkVals = [];
    for(var key in this.state) {
      perkVals.push(this.state[key]);
    }

    if (this.fieldsFilled(perkVals)) {
      this.props.addPerk(this.state);
      this.reset();
      window.scrollTo(0, 0);
    } else {
      alert("Must fill in all fields!");
    }
  }

  fieldsFilled(array) {
    return array.every((field) => {
      return (field.length > 0 || field.toString().length > 0);
    });
  }

  render() {
    let currentPerks;
    let divCurrentPerks;
    if (this.props.state.perks_attributes.length > 0) {
      currentPerks = this.props.state.perks_attributes.map ((perk) => {
        perk.number_claimed = 0;
        return (<PerkItem perk={perk} />);
      });

      divCurrentPerks = (
        <div className="current-perks">
          <div className="current-perks-title">CURRENT PERKS</div>
          {currentPerks}
        </div>
      );
    }

    return (
      <div className="editor">
        <div className="editor-header">Perks</div>
        <div className="editor-description">Perks are incentives offered to backers in exchange for their support. You may edit your perk details until the perk is claimed.</div>
        {divCurrentPerks}


        <div className="editor-input-div">
          <div className="editor-input-title">Price</div>
          <div className="editor-input-description">Set an amount that you want to collect from backers who claim this perk. This amount should represent how much you want to receive for all the items included in this perk.</div>
          <div className="USDDDD">
            <span className="currency-label-cs">$</span>

            <input type="number"
              value={this.state.price}
              onChange={this.update('price')}
              className="editor-input-price-perk"
              />
            <div className="us-div">USD</div>
          </div>
        </div>

        <div className="editor-input-div">
          <div className="editor-input-title">Title</div>
          <div className="editor-input-description">The title for your perk is what will appear on your campaign page and throughout Indiegogo. Create a title that best describes the contents of what this perk is offering.</div>
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
            className="editor-input"
            />
        </div>

        <div className="editor-input-div">
          <div className="editor-input-title">Description</div>
          <div className="editor-input-description">Describe the details of this perk. Be creative, this is your opportunity to educate backers on what they will be receiving after they claim this perk.</div>
          <textarea type="text"
            value={this.state.description}
            onChange={this.update('description')}
            className="editor-textarea"
            />
        </div>

        <div className="editor-input-div">
          <div className="editor-input-title">Number Available</div>
          <div className="editor-input-description">How many of this perk do you want to offer? If you leave this field blank, there will be no limit to number of claims that can be made for this perk.</div>
          <input type="number"
            value={this.state.number_available}
            onChange={this.update('number_available')}
            className="editor-input duration-input"
            />
        </div>

        <div className="editor-input-div">
          <div className="editor-input-title">Estimated Delivery Date</div>
          <div className="editor-input-description">When do you estimate to deliver the items in this perk to your backers? This date will appear on the perk card for your backers to see.</div>
          <input type="text"
            placeholder="YYYY MM"
            value={this.state.delivery_date_str}
            onChange={this.setPerkDate}
            className="editor-input"
            />
        </div>

        <div className="save-perk-button" onClick={this.savePerk}>SAVE PERK TO CAMPAIGN</div>


      </div>
    );
  }
}
export default PerksEditor;
