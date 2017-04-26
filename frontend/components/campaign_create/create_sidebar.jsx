import React from 'react';


class CreateSidebar extends React.Component {
  constructor (props) {
    super(props);

    this.changeEditor = this.changeEditor.bind(this);
  }

  changeEditor(e) {
    this.props.setState({editor: e.target.getAttribute('value')});
  }

  render() {

    return (
      <div className="sidebar">
        <ul>
          <li className="sidebar-campaign-title">{this.props.title.toUpperCase()}</li>
          <li className="sidebar-campaign-editor-title">CAMPAIGN EDITOR</li>
          <li value="Basics" className={this.props.editor == "Basics" ? "sidebar-button-selected sidebar-button" : "sidebar-button"}
            onClick={this.changeEditor}>
            BASICS
          </li>
          <li value="Story" className={this.props.editor == "Story" ? "sidebar-button-selected sidebar-button" : "sidebar-button"}
            onClick={this.changeEditor}>
            STORY
          </li>
          <li value="Perks" className={this.props.editor == "Perks" ? "sidebar-button-selected sidebar-button" : "sidebar-button"}
            onClick={this.changeEditor}>
            PERKS
          </li>
        </ul>
      </div>
    );
  }

}


export default CreateSidebar;
