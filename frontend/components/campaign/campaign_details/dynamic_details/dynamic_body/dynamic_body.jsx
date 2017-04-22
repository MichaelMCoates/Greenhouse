import React from 'react';

import StoryContainer from './story/story_container';
import UpdatesContainer from './updates/updates_container';
import CommentsContainer from './comments/comments_container';
import BackersContainer from './backers/backers_container';


class DynamicBody extends React.Component {

  render() {
    let bodyComponent;
    switch(this.props.selected) {
      case "Updates":
        bodyComponent = <UpdatesContainer />;
        break;
      case "Comments":
        bodyComponent = <CommentsContainer />;
        break;
      case "Backers":
        bodyComponent = <BackersContainer />;
        break;
      default:
        bodyComponent = <StoryContainer />;
        break;
    }

  // Could do an interpolation of selected

    return (
      <div className="dynamic-body">
        {bodyComponent}
      </div>
    );
  }
}
export default DynamicBody;
