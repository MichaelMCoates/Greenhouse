import React from 'react';
import BasicsEditor from './basics_editor';
import PerksEditor from './perks_editor';
import StoryEditor from './story_editor';

class CreateBody extends React.Component {
  render() {
    let editor;
    if (this.props.state.editor === 'Perks') {
      editor = <PerksEditor addPerk={this.props.addPerk} state={this.props.state} />;
    } else if (this.props.state.editor === 'Story') {
      editor = <StoryEditor state={this.props.state} update={this.props.update} />;
    } else {
      editor = <BasicsEditor state={this.props.state} update={this.props.update} setState={this.props.setState} />;
    }

    return (
      <div className="create-body">
        {editor}
      </div>
    );
  }
}

export default CreateBody;
