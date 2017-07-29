# Greenhouse

[Greenhouse Live Link][heroku]

[heroku]: http://www.the-greenhouse.co/#/

## Summary

Greenhouse is a full-stack clone of Indiegogo, a crowdfunding application. It is built with Ruby on Rails and PostgreSQL on the backend, and React.js and Redux.js on the frontend.

The application allows the user to do the following:
* Create user accounts
* Log in to and log out of user accounts
* Edit their user profile
* View and create campaigns
* Contribute to a campaign
* View, create, and purchase perks from campaigns
* View a user's profile, campaigns, and campaigns they've contributed to
* Search for campaigns by both keywords and categories

Greenhouse uses the following libraries, languages, technologies, and frameworks:
* Ruby on Rails
* PostgreSQL
* React.js
* Redux.js
* AWS
* Heroku
* Webpack
* Libraries:
  * Moment.js
  * rc-progress
  * react-slick
* Gems:
  * pg_trgm
  * BCrypt
  * Paperclip
  * JBuilder
  * Figaro

# Application Features

## Home Page

![Home Page](/docs/images/home_page.png)

The user will typically start at the Home Page of Greenhouse. The Home Page shows featured campaigns, suggested campaigns, and campaign categories.

*Carousels*

The main feature of the Home Page is its two Carousels. The top [Featured Carousel](./frontend/components/home_page/featured_carousel.jsx) shows Greenhouse's featured campaigns, and is implemented using CSS3 Animations. The user can navigate through the campaigns by clicking on the neighboring campaigns, which triggers the animation. The bottom carousel shows suggested campaigns for the user, and is implemented using react-slick. Campaign information is given to a Campaign Tile component for rendering.


*Category Boxes*

Beneath the carousels, users can click on any of the Category Boxes to be taken to the `Search/Categories Page`.

<br>


## Campaign Show Page

![Campaign Show Page](/docs/images/campaign_show_2.png)

When the user clicks on a campaign, they are taken to the Campaign Show Page. This page gives information about the campaign, from the user that created it, to the amount that it has been funded thus far.

*Funding Bar*

The [Funding Bar](./frontend/components/campaign/campaign_summary/funding_bar/funding_bar.jsx) uses Moment.js and rc-progress to render campaign fundraising information. It updates automatically as time progresses, and if users purchase perks, or contribute to a campaign.

*Back It Button*

The [Back It Button](./frontend/components/campaign/campaign_summary/back_it_bar/back_it_bar.jsx) allows the user to contribute to a campaign. It has a click handler to toggle the input field for the user. It also has front-end validations to ensure that the user is logged in before they are redirected to the `Check Out Page`.

*Campaign Overview*

The Campaign Overview section has a small summary of the campaign, and a clickable category button that takes the user to the `Search/Categories Page`. Beneath the summary, the story of the campaign is displayed.

*Perks*

[Perks](./frontend/components/campaign/perks) for a campaign are displayed in the bottom right corner. A user can click on a Perk to purchase it from the campaign. The perks have front-end validations to ensure that the user is logged in before they are redirected to the `Check Out Page`. Perks are fetched independently of campaigns, but their campaign_id foreign key (which corresponds to the campaign they are associated with) is indexed in the database for fast lookup. Their information is updated automatically as they are purchased.

<br>


## Check Out Page

![Check Out Page](/docs/images/check_out.png)

After a user either clicks on a Perk, or on the Back It Button, they are redirected to the [Check Out Page](./frontend/components/check_out/check_out.jsx). Here, they can fill in their payment information, how they would like their contribution to be displayed, and edit their contribution amount. This page has front-end validations to prevent a user from contributing without choosing their appearances, and prevent a user from accessing the Check Out Page without logging in.

*Check Out Total*

The right side of the page displays the [Check Out Total](./frontend/components/check_out/check_out_total.jsx) component. This component is rendered conditionally, depending on whether the user is purchasing a perk, or simply making a contribution. If the user is making a contribution, it allows the user to change their contribution, or add a perk. If they are purchasing a perk, it displays the perk information instead. Both instances display the total cost of the contribution the user is making, and the button to submit their payment.

<br>


## User Show Page

![User Show Page](/docs/images/user_show.png)

When a user clicks on a user's name or clicks on "My Profile" in the navigation bar after clicking their own name, they are taken to the User Show Page. Here, a user can view information about the user.

*Current User Bar*

If a user is viewing their own profile, the Current User Bar is displayed, which allows the user to edit their profile information.

<br>


## User Campaigns Page

![User Campaigns Page](/docs/images/user_campaigns.png)

If a user clicks on the Campaigns tab in the `User Show Page`, they are taken to the User Campaigns Page. Here, the user can see what campaigns that user has created and contributed to.

<br>


## Campaign Create Start Page

![Campaign Create Start Page](/docs/images/campaign_create_start.png)

If a user clicks on the Start A Campaign button in the Navigation Bar, they are redirected to the Campaign Create Start Page. Here, they can customize how much money they would like to raise and the title of their campaign. When the Create My Campaign button is clicked, the user is redirected to the `Campaign Create Page`. This page has front-end validations to prevent a user from creating a campaign if they are not logged in.

<br>


## Campaign Create Page

![Campaign Create Page](/docs/images/campaign_create.png)

The [Campaign Create Page](./frontend/components/campaign_create/create_campaign_page.jsx) allows the user to create a campaign on Greenhouse. Here, they can edit everything about a campaign, from the category it's in, to its story. All state information about the campaign is stored locally, at the top level, to ensure state preservation between pages, speed up state updating, and enforce input validations for the entire campaign. The user can navigate between pages using the Campaign Create Sidebar.

<br>


## Perk Editor

![Perk Editor](/docs/images/perk_create.png)

The [Perk Editor](/./frontend/components/campaign_create/create_body/perks_editor.jsx) allows the user to create perks for their campaigns. They can customize the price, description, number available, and estimated date of delivery. If they save the perk to the campaign, it is previewed on the page (by re-using the Perk component from the `Campaign Show Page`).

<br>


## Search/Categories Page

![Search Categories Page](/docs/images/search_categories.png)

If the user either searches using the Search Input in the Navigation Bar, or clicks on a category on a `Campaign Show Page` or Campaign Tile component, they are redirected to the Search/Categories Page. This page allows a user to search through campaigns on Greenhouse, and also search within a category for campaigns (which is a feature that Indiegogo does not have). This search uses Trigram Searching on the backend (using the pg_trgm gem) to enable fuzzy search. Even if a user misspells the word they are searching for, this search will still return the results they are looking for. Campaign information is given to a Campaign Tile component for rendering.

<br>


## Upcoming Features

There is still work to be done on Greenhouse. The following is a list of future features that still need implementation:

* User profile image upload
* Campaign image upload
* Comments, Updates, and Backers for Campaigns
* Rich-text formatting for Campaign Stories
* Campaign editing and deletion
* Perk editing and deletion
* Campaign previewing
* Campaign saving without launching
* Search filters
