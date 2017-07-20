import React from 'react';

class CreateHeader extends React.Component {
  render() {
    return (
      <div className="campaign-create-header">
        <div className="cch-content">
          <h1>Campaign / <span className="cch-editor">{this.props.editor}</span></h1>
        </div>
        <div className="cch-controller">
          <div className="launch-button" onClick={this.props.triggerCreateCampaign}>
            REVIEW & LAUNCH
          </div>
        </div>
      </div>
    );
  }
}

export default CreateHeader;
