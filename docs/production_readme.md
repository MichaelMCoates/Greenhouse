# GREENHOUSE

[GREENHOUSE live][heroku]

[heroku]: http://the-greenhouse.herokuapp.com

GREENHOUSE is a web application inspired by Indiegogo. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Campaign Creation and Viewing

  In the database, campaigns are stored in one table, with columns for all user-input form data (such as `title`, `goal_amt`, and `campaign_story`). When a user visits a `CampaignShowPage`, an API call is made to the database, which fetches all of the informaiton about that campaign for the user. 
