import React from 'react';

class BasicsEditor extends React.Component {

  render() {
    debugger

    return (
      <div className="basics-editor">
        <div className="basics-editor-header">Basics</div>
        <div className="basics-editor-description">Make a good first impression: introduce your campaign objectives and entice people to learn more. This basic information will represent your campaign on your campaign page, on your campaign card, and in searches.</div>


        <div className="basics-editor-input-div">
          <div className="basics-editor-input-title">Campaign Title</div>
          <div className="basics-editor-input-description">What is the title of your campaign?</div>
          <input type="text"
            value={this.props.state.title}
            onChange={this.props.update('title')}
            className="basics-editor-input"
            />
        </div>


        <div className="basics-editor-input-div">
          <div className="basics-editor-input-title">Campaign Tagline</div>
          <div className="basics-editor-input-description">Provide a short description that best describes your campaign to your audience.</div>
          <input type="text"
            value={this.props.state.tagline}
            onChange={this.props.update('tagline')}
            className="basics-editor-input"
            />
        </div>


        <div className="basics-editor-input-div">
          <div className="basics-editor-input-title">Location</div>
          <div className="basics-editor-input-description">Choose the location where you are running the campaign. This location will be visible on your campaign page for your audience to see.</div>
          <div className="location">
            <input type="text"
              value={this.props.state.city}
              onChange={this.props.update('city')}
              className="basics-editor-input"
              placeholder="City"
              />
            <input type="text"
              value={this.props.state.country}
              onChange={this.props.update('country')}
              className="basics-editor-input"
              placeholder="Country"
              />
          </div>
        </div>


        <div className="basics-editor-input-div">
          <div className="basics-editor-input-title">Campaign Duration</div>
          <div className="basics-editor-input-description">How many days will you be running your campaign for? You can run a campaign for any number of days, with a 60 day duration maximum.</div>
          <input type="number"
            value={this.props.state.duration}
            onChange={this.props.update('duration')}
            className="basics-editor-input"
            />
        </div>

      </div>
    );
  }
}
export default BasicsEditor;
