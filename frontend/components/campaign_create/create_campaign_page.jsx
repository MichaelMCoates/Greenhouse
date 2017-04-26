import React from 'react';
import NavigationBar from '../../navigation_bar/navigation_bar';
import CreateHeader from './create_header/create_header';
import CreateBody from './create_body/create_body';

class CreateCampaignPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: 'Basics',
      goal_amt: sessionStorage.getItem('goal_amt'),
      current_amt: 0,
      title: sessionStorage.getItem('title'),
      tagline: '',
      city: '',
      country: '',
      duration: null,
      overview: '',
      campaign_story: '',
    };

    this.createCampaign = this.props.createCampaign.bind(this);
    this.setState = this.setState.bind(this);
    this.update = this.update.bind(this);
    this.triggerCreateCampaign = this.triggerCreateCampaign.bind(this);
  }

  triggerCreateCampaign() {
    this.createCampaign({campaign: this.state});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render() {
    return (
      <div className="create-campaign-page">
        <div className="ccp-sidebar-div">
          <CreateSidebar title={this.state.title} editor={this.state.editor} setState={this.setState}/>
        </div>
        <div className="ccp-main">
          <NavigationBar />
          <CreateHeader editor={this.state.editor} triggerCreateCampaign={this.triggerCreateCampaign} />
          <CreateBody state={this.state} update={this.update} />
        </div>
      </div>
    );
  }
}

export default CreateCampaignPage;
