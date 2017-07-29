# Greenhouse

[Greenhouse Live Link][heroku]

[heroku]: http://www.the-greenhouse.co/#/

## Summary

Greenhouse is a full-stack clone of Indiegogo, a crowdfunding application. It is built with Ruby on Rails and PostgreSQL on the backend, and React.js and Redux.js on the frontend. The application allows the user to do the following:
* Create user accounts
* Log in to and log out of user accounts
* Edit their user profile
* View and create campaigns
* Contribute to a campaign
* View, create, and purchase perks from campaigns
* View a user's profile, campaigns, and campaigns they've contributed to
* Search for campaigns by both keywords and categories

## Features & Implementation

### Home Page

The user will typically start at the home page of Greenhouse. The `Home Page` shows featured campaigns, suggested campaigns, and campaign categories.

**Carousels**

The main feature of the `Home Page` is its two Carousels. The top carousel shows Greenhouse's featured campaigns, and is implemented using CSS3 Animations. The user can navigate through the campaigns by clicking on the neighboring campaigns, which triggers the animation. The bottom carousel shows suggested campaigns for the user, and is implemented using react-slick.

**Category Boxes**

Beneath the carousels, users can click on any of the Category Boxes to be taken to the `Search/Categories Page`.

![Home Page](/docs/images/home_page.png)



### Campaign Show Page

When the user clicks on a campaign, they are taken to the Campaign Show Page. This page gives information about the campaign, from the user that created it, to the amount that it has been funded thus far.

**Funding Bar**

The Funding Bar uses Moment.js and rc-progress to render campaign fundraising information. It updates automatically as time progresses, and if users purchase perks, or contribute to a campaign.

**Back It Button**

The Back It Button allows the user to contribute to a campaign. It has a click handler to toggle the input field for the user. It also has front-end validations to ensure that the user is logged in before they are redirected to the `Check Out Page`.

**Campaign Overview**

The Campaign Overview section has a small summary of the campaign, and a clickable category button that takes the user to the `Search/Categories Page`. Beneath the summary, the story of the campaign is displayed.

**Perks**

Perks for a campaign are displayed in the bottom right corner. A user can click on a Perk to purchase it from the campaign. The perks have front-end validations to ensure that the user is logged in before they are redirected to the `Check Out Page`. Perks are fetched independently of campaigns, but their *campaign_id* foreign key (which corresponds to the campaign they are associated with) is indexed in the database for fast lookup. Their information is updated automatically as they are purchased.

![Campaign Show Page](/docs/images/campaign_show_2.png)



### Check Out Page



## Upcoming Features

There is still work to be done on Greenhouse. The following is a list of future features that still need implementation:

* User profile image upload
* Campaign image upload
* Comments, Updates, and Backers for Campaigns
* Rich-text formatting for Campaign Stories
