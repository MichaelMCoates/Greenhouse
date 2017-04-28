import React from 'react';


class DynamicHeader extends React.Component {
  constructor (props) {
    super(props);

    this.headerHTML = null;
    this.onClickSS = this.onClickSS.bind(this);
  }

  onClickSS(e) {
    this.props.setState({selected: e.target.className});
  }

  render() {

    let headers = ["Story"];
    // let headers = ["Story", "Updates", "Comments", "Backers"];

    this.headerHTML = headers.map( (header, idx) => (
      <text
      key={idx}
      className={this.props.selected === header ? header + " active" : header}
      onClick={this.props.selected === header ? console.log("") : this.onClickSS}
      >
        {header === "Story" ? header : header + " (#)"}
      </text>

    ));


    return (
      <div className="dynamic-header campaign-show-headerTitle">
        {this.headerHTML}
      </div>
    );
  }
}
export default DynamicHeader;
