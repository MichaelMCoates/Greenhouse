## Component Hierarchy

---
**ModalContainer**

Renders a component as a modal on top of the current page.


---
**NavigationBarContainer**
   - ExploreCategoriesList
   - SearchBar
   - UserBar



   NavigationBar will contain links to the IndexPage, SearchCategoriesPage, and CreateCampaignPage. May also have other links to HowItWorksPage and EarlyOfferingsPage.

   When the Explore Page link is hovered over, it shows the ExploreCategoriesList: a list of all categories of campaigns. Clicking on a category will take you to the SearchCategoriesPage with that category preselected.

   SearchBar will allow the user to search for campaigns, taking them to the SearchCategoriesPage.


---
**UserBarContainer**
   - SignUp
   - SignIn
   - UserDropDown



   UserBar will either display Sign Up/Sign In buttons if there is no current user, or the user's username with a UserDropDown displayed on click.

   When a user clicks on the Sign Up or Sign In buttons, it dispatches the addContentToModal action with the SignUp or SignIn components, which renders a SignUp or SignIn modal on top of the page.

   The UserDropDown contains links to a user's created campaigns, contributions, profile, and settings. It also allows the user to log out.

---
**SignUpContainer**
   - SignUp

---
**SignInContainer**
   - SignIn


---
**HomePageContainer**
   - FeaturedCarousel
   - TileCarousel
   - CategoryBoxes
   - GetStartedBox


---
**FeaturedCarouselContainer**
   - FeaturedCarouselItems



   FeaturedCarousel renders 5 FeaturedCarouselItems on load, and cycles through them automatically, or on user click.

   FeaturedCarouselItem renders as a large image, representing a campaign. If the image is the selected/middle image, it displays description text and a "Learn More" button which links to the campaign show page.


---
**TileCarouselContainer**
   - TileCarouselHeader
   - TileCarouselArrow
   - TileGroup
     + Tiles



   TileCarousel displays a TileGroup containing 12 Tiles.

   TileCarouselHeader controls what Tiles are displayed in the TileGroup. You can choose to show tiles that are trending, popular near you, or that are specific to the tech or creative sector by clicking on the headers shown. Each of these headers dispatches an AJAX request to the server and returns the Tiles for the TileGroup.

   TileCarouselArrow allows you to cycle through the Tiles shown in the TileGroup, four at a time. Direction of the scroll is passed as a prop so that we don't have to create two components.

 ---
 **TileContainer**
   - FundingBar



 A tile displays information about a campaign. It renders the image, category, title, description, and current funding status (FundingBar) of a campaign. When clicked, it redirects to the CampaignShowPage.



---
**FundingBar**



   Displays how much a campaign has been funded, in dollar amount, a colorized bar, and as a percentage of the overall funding goal. Can be rendered in different ways, depending on if it is being rendered in a Tile or CampaignShowPage.



---
**CategoryBoxesContainer**
   - CategoryBoxes



   Shows 10 CategoryBoxes that a user can click on to redirect to the SearchCategoriesPage.

   CategoryBox renders an image, a symbol, and text for the category it represents.

---
**UserShowPageContainer**
   - UserShowPageHeader
   - UserShowPageBody



   Shows information about a user.

   The UserShowPageHeader is a row of links that control what is rendered in the UserShowPageBody.

   If logged in and looking at your own UserShowPage, a black header bar is rendered, and a link to the UserEditPage is shown.

---
**UserEditPageContainer**
   - UserEditForm



   Pre-filled form that allows you to edit your user information.


---
**UserShowPageBodyContainer**
   - UserProfile
     + UserAbout
   - UserCampaigns
     + CampaignLists
       + CampaignListItems



   UserProfile shows a user image, short description and the UserAbout component, which shows the amount of comments, campaigns, and contributions the user has.

   UserCampaigns shows multiple CampaignLists containing CampaignListItems of campaigns that the user has created, funded, or followed.

   More tabs for looking at your own Activity, Contributions, and Referrals when logged in is a (BONUS) feature.


---
**CampaignShowPageContainer**
   - MediaBox
   - CampaignSummary
   - CampaignDetails
   - Perks



   The CampaignShowPage shows all of the information about a campaign. It is made up of four main display components.

   MediaBox shows the picture for the campaign (and may have the ability to show multiple pictures/videos if I have time for that functionality).

   CampaignSummary shows a summary of the campaign, it's creator, and backing information.

   CampaignDetails shows specific details about the campaign, and shows comments, backers, and updates.

   Perks shows the perks available for backers to receive if they donate a certain amount.


---
**CampaignSummaryContainer**
   - CampaignerDetails
   - FundingBar
   - BackItBar
   - AboutBox



   Shows the title and description of the campaign as text.

   CampaignerDetails shows details about the creator of the campaign. It contains an "About" link, which dispatches the addContentToModal action with the AboutBox component and renders an About modal on top of the page. The AboutBox component displays more information about the campaign creator.

   BackItBar lets the user back the project, follow the project, or share it on social media.


---
**BackItBarContainer**
   - SocialBar
     + SocialButtons (BONUS)
   - DonationBar



   SocialBar contains a "Back It" button, which hides the SocialBar and shows the DonationBar. It also contains a SocialButtons component, which displays buttons for following the project or sharing it on social media. SocialButtons is a (BONUS) feature.

   DonationBar has an input for the amount that the user wants to donate, and a button that redirects to the CheckOutPage.


---
**CampaignDetailsContainer**
   - CampaignOverview
   - DynamicDetails
    + DynamicHeader
    + DynamicBody



  The CampaignDetails component displays details about the campaign.

  CampaignOverview shows an image from and a brief summary of the campaign as a whole.

  DynamicDetails has a DynamicHeader and a DynamicBody. The DynamicHeader is a row of links that decides what component is rendered inside the DynamicBody.

---
**DynamicBodyContainer**
   - Story
   - Updates
    + UpdateItems
      + UpdateItemHeader
   - Comments
    + CommentForm
    + CommentItems
   - Backers
    + BackerItems



  DynamicBody renders either the Story, Updates, Comments, or Backers component.

  Story simply shows the overall story of the campaign. Campaign creators can fill this with just text, or they can include images and diagrams.

  Updates displays UpdateItems, which are updates to the campaign that the campaign creator has posted. They each contain an UpdateItemHeader, which shows information about when the update was posted.

  Comments displays CommentItems, which are comments that backers of the campaign can leave. If a user is either a backer of the campaign or the campaign creator, the CommentForm is rendered, and that user can use it to leave a comment. Replying to a comment is a (BONUS) feature.

  Backers displays BackerItems, which show users that have backed the campaign and how much they have contributed. A button on the bottom of the component allows you to see more backers.


---
**PerksContainer**
   - PerkItems



  Shows the perks for the campaign, which are rewards that users can receive if they contribute a certain amount to the campaign. Clicking on a perk takes you to the CheckOutPage. Making a PerkItem modal when clicking on a perk is a (BONUS) feature.


---
**CheckOutPageContainer**
   - CheckOutUser



   Won't have many components, only the CheckOutUser component that displays the current user and a Log Out button. Mainly just a massive form to take in payment/shipping information.

   The form changes depending on whether or not the user got to the page from a Perk or from the DonationBar. If from a Perk, it displays the perk and it's cost. It also displays a "Shipping Address" section. If from the DonationBar, it displays the amount originally inputted as "Your Contribution", but has a link back to the CampaignShowPage so that the user can go back and select a Perk if they wish.


---
**CreateCampaignStartPage**

   Form to set the title of your campaign and funding goal. Button at the bottom of the form that redirects to the CreateCampaignPageContainer.

---
**CreateCampaignPageContainer**
   - CreateSidebar
   - CreateHeader
   - CreateBody
     + BasicsEditor
     + StoryEditor
     + PerksEditor
     + Preview (BONUS)



   Displays the page for creating a new campaign. The CreateSidebar has links for the user to choose which editor to display in the CreateBody. The CreateHeader shows the current open editor, and has links to show the Preview page (BONUS), save the campaign, and launch the campaign. The CreateBody renders the BasicsEditor, StoryEditor, PerksEditor, and Preview (BONUS) components, which are forms to edit the campaign being created.


---
**SearchCategoriesPageContainer**
   - SearchForm
     + SearchFormBar
     + CategoriesSelect
     + PropertiesSelect
     + Filters
   - SearchResults
     + Tiles



   Displays the page for searching through and exploring categories. By combining the original search and explore pages, the SearchCategoriesPage allows the user to search for specific campaigns within a specific category.

   SearchForm handles text-searching, category and property/ordering selection, and filtering.

   SearchResults renders tiles for all campaigns that pass the search parameters.


---
**Footer**

   Might have containers in here depending on exactly what I want to show. Most likely will just have links to my github.

---


## Routes

|Path   | Component   |
|-------|-------------|
| "/home" | "HomePageContainer" |
| "/user/:userId" | "UserShowPageContainer" |
| "/user/:userId/campaigns" | "UserCampaigns" |
| "/user/:userId/edit" | "UserEditPageContainer" |
| "/campaigns/:campaignId" | "CampaignShowPageContainer" |
| "/campaigns/:campaignId/updates" | "Updates"
| "/campaigns/:campaignId/comments" | "Comments"
| "/campaigns/:campaignId/backers" | "Backers"
| "/campaigns/:campaignId/checkout" | "CheckOutPageContainer" |
| "/create-campaign/" | "CreateCampaignStartPage" |
| "/create-campaign/:campaignId/basics" | "BasicsEditor" |
| "/create-campaign/:campaignId/story" | "StoryEditor" |
| "/create-campaign/:campaignId/perks" | "PerksEditor" |
| "/search-categories" | "SearchCategoriesPageContainer" |
