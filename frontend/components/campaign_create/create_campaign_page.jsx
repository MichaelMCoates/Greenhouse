import React from 'react';
import NavigationBar from '../navigation_bar/navigation_bar.jsx';
import CreateHeader from './create_header/create_header';
import CreateBody from './create_body/create_body';
import CreateSidebar from './create_sidebar';

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
      user_id: currentUser.id,
      perks_attributes: [],
    };

    this.createCampaign = this.props.createCampaign.bind(this);
    this.setState = this.setState.bind(this);
    this.update = this.update.bind(this);
    this.triggerCreateCampaign = this.triggerCreateCampaign.bind(this);
    this.addPerk = this.addPerk.bind(this);
  }

  triggerCreateCampaign() {
    this.createCampaign({campaign: this.state});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  addPerk(perk_attributes) {
    if (this.state.perks_attributes === undefined) {
      this.setState({perks_attributes: [perk_attributes]});
    } else {
      const newPerksAttributes = this.state.perks_attributes.map(a => Object.assign({}, a));
      newPerksAttributes.push(perk_attributes);
      var dataArray = Object.keys(newPerksAttributes).map(val => newPerksAttributes[val]);
      this.setState({perks_attributes: Object.values(newPerksAttributes)});
    }
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
          <CreateBody state={this.state} addPerk={this.addPerk} update={this.update} />
        </div>
      </div>
    );
  }
}

export default CreateCampaignPage;
