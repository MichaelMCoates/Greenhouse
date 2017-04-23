import React from 'react';


class SocialBar extends React.Component {
  constructor (props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    this.props.setState({active: true});
  }

  render() {
    // social buttons and follow later
    return (
      <div className="back-it-bar social-bar">
        <input onClick={this.onClick} className="pink-button" type="submit" value="BACK IT" />
      </div>
    );
  }
}

export default SocialBar;
