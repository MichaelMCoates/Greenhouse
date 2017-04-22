import React from 'react';


class DynamicHeader extends React.Component {

  render() {
    let headers = ["Story", "Updates", "Comments", "Backers"];

    let headerHTML = headers.map( (header) => (
      <text className={this.props.selected === header ? header + " active" : header}>
        {header === "Story" ? header : header + " (#)"}
      </text>
    ));

    return (
      <div className="dynamic-header campaign-show-headerTitle">
        {headerHTML}
      </div>
    );
  }
}
export default DynamicHeader;


// <text className="story" selected={this.props.selected === "Story" ? true : false}>Story</text>
// <text className="updates" selected={this.props.selected === "Updates" ? true : false}>Updates (#)</text>
// <text className="comments" selected={this.props.selected === "Comments" ? true : false}>Comments (#)</text>
// <text className="backers" selected={this.props.selected === "Backers" ? true : false}>Backers (#)</text>
