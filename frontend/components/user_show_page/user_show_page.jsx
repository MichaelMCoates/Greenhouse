import React from 'react';
import UserShowPageHeaderContainer from './user_show_page_header/usp_header_container';
import UserShowPageBodyContainer from './user_show_page_body/usp_body_container';

class UserShowPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = { profile_shown: true };
    this.setState = this.setState.bind(this);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.params.userId)
    .then(() => this.props.fetchCampaigns(this.props.params.userId));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.userId !== nextProps.params.userId) {
      this.props.fetchUser(nextProps.params.userId)
      .then(() => this.props.fetchCampaigns(nextProps.params.userId));
    }
  }

  render() {
    if (this.props.user.campaigns === null) {
      return (<div>Loading...</div>);
    }

    // if (this.props.user.id === this.props.currentUser.id) {
    //
    // }
    return (
      <div className="user-show-page">
        <div className="user-show-name">
          <h2 >{this.props.user.user.first_name} {this.props.user.user.last_name}</h2>
        </div>

        <UserShowPageHeaderContainer profileShown={this.state.profile_shown} setState={this.setState} />
        <UserShowPageBodyContainer profileShown={this.state.profile_shown} />
      </div>
    );
  }
}
export default UserShowPage;
