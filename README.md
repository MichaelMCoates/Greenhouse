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

The user will typically start at the home page of Greenhouse. The home page shows featured campaigns, suggested campaigns, and campaign categories.

*Carousels*

The main feature of the home page is its two carousels. The top carousel shows Greenhouse's featured campaigns, and is implemented using CSS3 Animations. The user can navigate through the campaigns by clicking on the neighboring campaigns, which triggers the animation. The bottom carousel shows suggested campaigns for the user, and is implemented using react-slick.

*Categories*

Beneath the carousels, users can click on any of the category boxes to be taken to the Search/Categories Page.

![Home Page](/docs/images/home_page.png)

### Campaign Show Page

When the user clicks on a campaign, they are taken to the campaign show page. This page gives information about the campaign, from the user that created it, to the amount that it has been funded thus far.

*Funding Bar*

The funding bar is


![Campaign Show Page](/docs/images/campaign_show_2.png)



## New Features Queue

Some features missing from this iteration of Greenhouse that will hopefully see
implementation at a future date include:

* User profile modification
* Direct deck exchange between users
* Fancy text editing for flashcards
* Timed grading (users will also graded on how long it takes to guess a card)
* Larger Public Deck DataBase with an infinite scroll in the deck browser.
