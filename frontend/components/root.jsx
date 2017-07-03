import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import LogInFormContainer from './log_in_form/log_in_form_container';
import SignUpFormContainer from './sign_up_form/sign_up_form_container';
import CampaignShowPageContainer from './campaign/campaign_show_page_container';
import CheckOutContainer from './check_out/check_out_container';
import UserShowPageContainer from './user_show_page/user_show_page_container';
import UserEditPageContainer from './user_edit_page/user_edit_page_container';
import CampaignStartPage from './campaign_create/campaign_start_page';
import CampaignCreatePageContainer from './campaign_create/create_campaign_page_container';
import HomePageContainer from './home_page/home_page_container';
import SearchPageContainer from './search/search_container';

//
// import {fetchUser} from '../actions/user_actions';
// window.fetchUser = fetchUser;
// import {createContribution} from '../actions/contribution_actions';
// window.createContribution = createContribution;
// import {createPerk} from '../actions/perk_actions';
// window.createPerk = createPerk;
// import {createCampaign} from '../actions/campaign_actions';
// window.createCampaign = createCampaign;
// import {searchCampaigns} from '../actions/search_actions';
// window.searchCampaigns = searchCampaigns;

//

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
        <IndexRoute component={HomePageContainer} />
          <Route path="/campaigns/start" component={CampaignStartPage} />
          <Route path="/campaigns/:campaignId" component={CampaignShowPageContainer} />
          <Route path="/check_out" component={CheckOutContainer}/>
          <Route path="/users/:userId" component={UserShowPageContainer} />
          <Route path="/users/:userId/edit" component={UserEditPageContainer} />
          <Route path="/search" component={SearchPageContainer} />
        </Route>
        <Route path="/create-campaign" component={CampaignCreatePageContainer} />
      </Router>
    </Provider>
  )



};

export default Root;
