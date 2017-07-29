import React from 'react';
import { Line } from 'rc-progress';
import moment from 'moment';


class FundingBar extends React.Component {
  render() {
    let percent = Math.round((this.props.current_amt / this.props.goal_amt) * 100);
    let truePercent = percent;
    if (percent > 100) {
      percent = 100;
    }

    let timeLeft = moment(this.props.created_at).add(this.props.duration, 'days').fromNow(true);

    return (
      <div className="campaign-summary-funding-bar">
        <div className="csfb-top">
          <text className="csfb-dollabills">${this.props.current_amt.toLocaleString()}</text>
          <text>&nbsp;USD raised by {this.props.backers} backers</text>
        </div>

        <div className="funding-progress-bar">
          <Line percent={percent.toString()} trailWidth="2.1" strokeWidth="2.1" strokeColor="#0eb4b6" trailColor="#dddddd" strokeLinecap="square" />
        </div>

        <div className="csfb-bottom">
          <div className="percent-left">
            <text className="csfb-percent">{truePercent}%</text>
            <text>&nbsp;of ${this.props.goal_amt.toLocaleString()} fixed goal</text>
          </div>
          <div>{timeLeft} left</div>
        </div>
      </div>
    );
  }
}

export default FundingBar;
