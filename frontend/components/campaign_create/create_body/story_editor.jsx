import React from 'react';

class StoryEditor extends React.Component {

  render() {

    return (
      <div className="story-editor">
        <div className="story-editor-header">Campaign Overview</div>
        <div className="story-editor-description">Introduce yourself, your background, your campaign and why it’s important to you. Express the magnitude of what contributors will help you achieve.</div>


        <div className="story-editor-input-div">
          <div className="story-editor-input-title">Campaign Overview</div>
          <div className="story-editor-input-description">Lead with a compelling statement that describes your campaign and why it’s important to you, highlight key campaign features, and remember - keep it short!</div>
          <textarea
            value={this.props.state.overview}
            onChange={this.props.update('overview')}
            className="story-editor-textarea"
            />
        </div>

        <hr/>

        <div className="story-editor-header">Campaign Pitch</div>
        <div className="story-editor-description">Tell potential contributors more about your campaign. Provide details that will motivate people to contribute. A good pitch is compelling, informative, and easy to digest.</div>

        <div className="story-editor-input-div">
          <textarea
            value={this.props.state.campaign_story}
            onChange={this.props.update('campaign_story')}
            className="story-editor-textarea"
            />
        </div>

        <hr/>

      </div>
    );
  }
}
export default StoryEditor;
