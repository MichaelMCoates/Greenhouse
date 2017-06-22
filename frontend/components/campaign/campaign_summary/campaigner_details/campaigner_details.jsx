import React from 'react';
import {hashHistory} from 'react-router';

class CampaignerDetails extends React.Component {
  constructor (props){
    super(props);

    this.redirectToProfile = this.redirectToProfile.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user_id);
  }

  redirectToProfile () {
    hashHistory.push('/users/' + this.props.user_id);
  }


  render() {
    if (this.props.user === null) {
      return (<div> </div>);
    }


    return (
      <div className="campaigner-details">
        <img src={this.props.user.avatar_img} />
        <div className="deets">
          <div className="campaigner-details-name" >{this.props.user.first_name} {this.props.user.last_name}</div>
          <div className="campaigner-details-location">{this.props.user.city}, {this.props.user.country}</div>
          <div className="campaigner-details-about" onClick={this.redirectToProfile}>About</div>
        </div>
      </div>
    );
  }
}
export default CampaignerDetails;
