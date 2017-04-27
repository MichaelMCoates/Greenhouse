json.founded do
  json.array! founded do |campaign|
    json.extract! campaign, :id, :user_id, :title, :tagline
    json.tile_img asset_path(campaign.tile_img.url)
    json.overview_img asset_path(campaign.overview_img.url)
    json.pitch_img asset_path(campaign.pitch_img.url)
    json.first_name campaign.user.first_name
    json.last_name campaign.user.last_name
  end
end

json.funded do
  json.array! funded do |contribution|
    json.extract! contribution.campaign, :id, :user_id, :title, :tagline
    json.tile_img asset_path(contribution.campaign.tile_img.url)
    json.overview_img asset_path(contribution.campaign.overview_img.url)
    json.pitch_img asset_path(contribution.campaign.pitch_img.url)
    json.first_name contribution.campaign.user.first_name
    json.last_name contribution.campaign.user.last_name
  end
end
