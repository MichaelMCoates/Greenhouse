import React from 'react';


class CreateSidebar extends React.Component {

  render() {
    return (
      <div className="sidebar">
        <ul>
          <li className="sidebar-campaign-title">{this.props.title.toUppercase()}</li>
          <li className="sidebar-campaign-editor-title">CAMPAIGN EDITOR</li>
          <li className={this.props.editor == "Basics" ? "sidebar-button-selected sidebar-button" : "sidebar-button"}
            onClick={this.props.setState({editor: 'Basics'})}>
            BASICS
          </li>
          <li className={this.props.editor == "Story" ? "sidebar-button-selected sidebar-button" : "sidebar-button"}
            onClick={this.props.setState({editor: 'Story'})}>
            STORY
          </li>
          <li className={this.props.editor == "Perks" ? "sidebar-button-selected sidebar-button" : "sidebar-button"}
            onClick={this.props.setState({editor: 'Perks'})}>PERKS</li>
        </ul>
      </div>
    );
  }

}


export default CreateSidebar;
