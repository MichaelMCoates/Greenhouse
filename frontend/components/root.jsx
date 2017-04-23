import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import LogInFormContainer from './log_in_form/log_in_form_container';
import SignUpFormContainer from './sign_up_form/sign_up_form_container';
import CampaignShowPageContainer from './campaign/campaign_show_page_container';

//
import {fetchUser} from '../actions/user_actions';
window.fetchUser = fetchUser;
import {createContribution} from '../actions/contribution_actions';
window.createContribution = createContribution;
import {createPerk} from '../actions/perk_actions';
window.createPerk = createPerk;

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
          <Route path="/campaigns/:campaignId" component={CampaignShowPageContainer}/>
        </Route>
      </Router>
    </Provider>
  )



};

export default Root;
