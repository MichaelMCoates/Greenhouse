import React from 'react';

class Story extends React.Component {
  render() {
    return (
      <div className="campaign-story">
        {this.props.campaign_story}
      </div>
    );
  }
}
export default Story;
