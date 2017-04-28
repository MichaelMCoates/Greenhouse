import React from 'react';
import { Line, Circle } from 'rc-progress';
import moment from 'moment';


class TileFundingBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    // debugger

    if (this.props.current_amt === undefined) {
      return (<div>Loading...</div>);
    }

    // debugger

    let percent = Math.round((this.props.current_amt / this.props.goal_amt) * 100);
    let truePercent = percent;
    if (percent > 100) {
      percent = 100;
    }

    let timeLeft = moment(this.props.created_at).add(this.props.duration, 'days').fromNow(true);

    return (
      <div className="tile-funding-bar">
        <div className="tfb-top">
          <text className="tfb-dollabills">${this.props.current_amt.toLocaleString()}</text>
          <text>&nbsp;USD</text>
        </div>
        <div className="tfb-barbarbar">
          <Line className="tfb-line" percent={percent.toString()} trailWidth="3.8" strokeWidth="3.8" strokeColor="#eb1478" trailColor="#dddddd" strokeLinecap="square" />
        </div>
        <div className="tfb-bottom">
          <div className="tfb-percent-left">
            <text className="tfb-percent">{truePercent}%</text>
          </div>
          <div>{timeLeft} left</div>
        </div>
      </div>
    );
  }
}

export default TileFundingBar;
