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
import CampaignStartPageContainer from './campaign_create/campaign_start_page_container';
import CampaignCreatePageContainer from './campaign_create/create_campaign_page_container';
import HomePageContainer from './home_page/home_page_container';
import SearchPageContainer from './search/search_container';

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
          <Route path="/campaigns/start" component={CampaignStartPageContainer} />
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
