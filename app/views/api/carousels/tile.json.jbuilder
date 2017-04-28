json.array! @tile_carousel_campaigns do |campaign|
  json.extract! campaign, :id, :title, :tagline, :current_amt, :goal_amt, :created_at, :duration
  json.tile_img_url image_url(campaign.tile_img.url)
end
