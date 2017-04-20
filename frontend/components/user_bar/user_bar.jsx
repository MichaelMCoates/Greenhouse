import React from 'react';
import { Link } from 'react-router';
import UserDropDownContainer from '../user_drop_down/user_drop_down_container';

class UserBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user_dd_visible: false};
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({user_dd_visible: false}, () => {window.removeEventListener('click', this.onClick, false );});
  }

  dropDownToggle(e) {
    this.setState({user_dd_visible: true}, () => {window.addEventListener('click', this.onClick, false);});
    e.stopPropagation();
  }


  render () {
    const sessionLinks = () => {
      return (
        <nav className="user-nav">
          <button className="sign-up-button" onClick={this.props.modalSignUp} >Sign Up</button>
          <button className="log-in-button" onClick={this.props.modalLogIn} >Log In</button>
        </nav>
      );
    };

    const userNav = () => {
      return (
        <nav className="user-nav">
          <button className="user-nav-button" onClick={this.dropDownToggle.bind(this)} >
            {this.props.currentUser.first_name} {this.props.currentUser.last_name}
          </button>
          {this.state.user_dd_visible ? <UserDropDownContainer /> :   <div className="udd hidden"></div> }
        </nav>
      );
    };


    return (this.props.currentUser ? userNav() : sessionLinks());
  }
}

export default UserBar;
