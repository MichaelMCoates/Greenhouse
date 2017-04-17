# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Campaigns

- `GET /api/campaigns/`
- `GET /api/campaigns/:id`
- `POST /api/campaigns`
- `PATCH /api/campaigns/:id`
- `DELETE /api/campaigns/:id`

### Perks

- `GET /api/campaigns/:campaign_id/perks`
- `POST /api/campaigns/:campaign_id/perks`
- `PATCH /api/campaigns/:campaign_id/perks/:id`
- `DELETE /api/campaigns/:campaign_id/perks/:id`

### Updates

- `GET /api/campaigns/:campaign_id/updates`
- `POST /api/campaigns/:campaign_id/updates`
- `PATCH /api/campaigns/:campaign_id/updates/:id`
- `DELETE /api/campaigns/:campaign_id/updates/:id`

### Contributions

- `GET /api/campaigns/:campaign_id/contributions`
- `POST /api/campaigns/:campaign_id/contributions`

### Comments

- `GET /api/campaigns/:campaign_id/comments`
- `POST /api/campaigns/:campaign_id/comments`
- `PATCH /api/campaigns/:campaign_id/comments/:id`
- `DELETE /api/campaigns/:campaign_id/comments/:id`

### Categories

- `GET /api/categories`

### Followings

- `GET /api/followings`
- `POST /api/followings`
- `DELETE /api/followings`
