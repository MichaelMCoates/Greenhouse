import React from 'react';
import CurrentUserBar from '../user_show_page/current_user_bar';
import {hashHistory} from 'react-router';

class UserEditPage extends React.Component {
  constructor (props) {
    super(props);

    const user = this.props.user.user;

    if (user === null) {
      this.state = {};
    } else {
      this.state = {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        city: user.city,
        country: user.country,
        tagline: user.tagline,
        about_me: user.about_me,
        postal_code: user.postal_code
      };
    }

    this.setState = this.setState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user.user) {
      const user = newProps.user.user;
      this.setState({
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        city: user.city,
        country: user.country,
        tagline: user.tagline,
        about_me: user.about_me,
        postal_code: user.postal_code
      });
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.updateUser({user})
    .then(hashHistory.push('/users/' + this.props.currentUser.id));
	}

  render() {
    if (this.state.first_name === undefined) {
      return (<div> </div>);
    }

    return (
      <div className="cub-sizer">
        <CurrentUserBar userId={this.props.currentUser.id} page="edit-page" />
        <div className="user-edit-page">
          <div>
            <h2 className="user-edit-name">{this.state.first_name} {this.state.last_name}</h2>
            <div></div>
            <input onClick={this.handleSubmit} className="pink-button-edit" type="submit" value="SAVE EDITS" />
          </div>

          <div className="user-edit-page-header">
            <div className="uep-header-item-selected uep-header-item">
              <div>Profile</div>
            </div>
          </div>

          <div className="user-edit-box">
            <div className="user-edit-page-header">Basic Info</div>
            <div className="user-edit-form">
              <div className="user-edit-label">First Name</div>
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="edit-input"
                />

              <div className="user-edit-label">Last Name</div>
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="edit-input"
                />

              <div className="user-edit-label">Country</div>
              <input type="text"
                value={this.state.country}
                onChange={this.update('country')}
                className="edit-input"
                />

              <div className="user-edit-label">City</div>
              <input type="text"
                value={this.state.city}
                onChange={this.update('city')}
                className="edit-input"
                />

              <div className="user-edit-label">Postal Code</div>
              <input type="text"
                value={this.state.postal_code}
                onChange={this.update('postal_code')}
                className="edit-input"
                />
            </div>
          </div>

          <div className="user-edit-box">
            <div className="user-edit-page-header">Your Story</div>
            <div className="user-edit-form">

              <div className="user-edit-label">Short Description</div>
              <input type="text"
                value={this.state.tagline}
                onChange={this.update('tagline')}
                className="edit-input"
              />

              <div className="user-edit-label">About Me</div>
                <textarea
                  value={this.state.about_me}
                  onChange={this.update('about_me')}
                  className="edit-input-textarea"
                />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default UserEditPage;
