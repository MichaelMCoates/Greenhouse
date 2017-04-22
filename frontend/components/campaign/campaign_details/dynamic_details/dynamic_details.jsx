import React from 'react';

import DynamicHeader from './dynamic_header';
import DynamicBodyContainer from './dynamic_body/dynamic_body_container';


class DynamicDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selected: 'Story'};
    this.setState = this.setState.bind(this);
  }

  render() {
    return (
      <div className="dynamic-details">
        <DynamicHeader selected={this.state.selected} setState={this.setState} />
        <DynamicBodyContainer selected={this.state.selected} />
      </div>
    );
  }
}
export default DynamicDetails;
