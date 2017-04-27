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
        <div className="sidebar-campaign-title">{this.props.title.toUpperCase()}</div>
        <div className="sidebar-campaign-editor-title">CAMPAIGN EDITOR</div>
        <ul>
          <li value="Basics" className={this.props.editor == "Basics" ? "sidebar-button-selected sidebar-button" : "sidebar-button"}
            onClick={this.changeEditor}>
            1. BASICS
          </li>
          <li value="Story" className={this.props.editor == "Story" ? "sidebar-button-selected sidebar-button" : "sidebar-button"}
            onClick={this.changeEditor}>
            2. STORY
          </li>
          <li value="Perks" className={this.props.editor == "Perks" ? "sidebar-button-selected sidebar-button" : "sidebar-button"}
            onClick={this.changeEditor}>
            3. PERKS
          </li>
        </ul>
      </div>
    );
  }

}


export default CreateSidebar;
