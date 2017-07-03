json.extract! campaign, :id, :title, :tagline, :current_amt, :goal_amt, :created_at, :duration, :category
json.tile_img_url image_url(campaign.tile_img.url)
