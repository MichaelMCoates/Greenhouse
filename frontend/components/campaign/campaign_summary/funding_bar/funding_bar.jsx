import React from 'react';
import { Line, Circle } from 'rc-progress';


class FundingBar extends React.Component {


  render() {
    let percent = Math.round((this.props.current_amt / this.props.goal_amt) * 100);
    if (percent > 100) {
      percent = 100;
    }


    return (
      <div className="campaign-summary-funding-bar">
        <div className="csfb-top">
          <text className="csfb-dollabills">${this.props.current_amt.toLocaleString()}</text>
          <text>&nbsp;USD raised by x backers</text>
        </div>
        <div className="barbarbar">
          <Line percent="75" trailWidth="2.1" strokeWidth="2.1" strokeColor="#0eb4b6" trailColor="#dddddd" strokeLinecap="square" />
        </div>
        <div className="csfb-bottom">
          <div className="percent-left">
            <text className="csfb-percent">{percent}%</text>
            <text>&nbsp;of ${this.props.goal_amt.toLocaleString()} fixed goal</text>
          </div>
          <div> a month left</div>
        </div>
      </div>
    );
  }
}

export default FundingBar;
