import React from 'react';
import {Link} from 'react-router';

class CurrentUserBar extends React.Component {

  render() {
    return (
      <div className="current-user-bar">
        <div className="cub-links">
          <Link to={'/users/' + this.props.userId}
            className={this.props.page == "show-page" ? "cub-button cub-button-selected": "cub-button"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
              <g transform="matrix(.02146 0 0 .02146 1 1)" fill="#fff">
              <path d="m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1"/>
              <circle cx="466.08" cy="466.02" r="134.5"/>
              </g>
            </svg>
            View Profile
          </Link>
          <Link to={'/users/' + this.props.userId + '/edit'}
            className={this.props.page == "edit-page" ? "cub-button cub-button-selected": "cub-button"}>
            <svg enableBackground="new 0 0 64 64" height="64px" id="Layer_1" version="1.1" viewBox="0 0 64 64" width="64px" xmlns="http://www.w3.org/2000/svg">
              <g>
              <path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z"/>
              <polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  "/>
              <polygon points="20.273,37.028 18.642,46.28 27.913,44.654  "/>
              <path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z"/>
              </g>
            </svg>
            Edit Profile
          </Link>
        </div>
      </div>
    );
  }
}
export default CurrentUserBar;
