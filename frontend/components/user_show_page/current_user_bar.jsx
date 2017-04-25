import React from 'react';
import {Link} from 'react-router';

class CurrentUserBar extends React.Component {

  render() {
    return (
      <div className="current-user-bar">
        <div className="cub-links">
          <Link to={'/users/' + this.props.userId}
            className={this.props.page == "show-page" ? "cub-button cub-button-selected": "cub-button"}>
            View Profile
          </Link>
          <Link to={'/users/' + this.props.userId + '/edit'}
            className={this.props.page == "edit-page" ? "cub-button cub-button-selected": "cub-button"}>
            Edit Profile
          </Link>
        </div>
      </div>
    );
  }
}
export default CurrentUserBar;
