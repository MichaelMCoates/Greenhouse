json.extract! campaign, :id, :user_id, :goal_amt, :current_amt, :title, :tagline, :city, :country, :duration, :overview, :campaign_story, :created_at
json.tile_img asset_path(campaign.tile_img.url)
json.overview_img asset_path(campaign.overview_img.url)
json.pitch_img asset_path(campaign.pitch_img.url)

json.contributions do
  json.array! (campaign.contributions.order('created_at DESC') do |cont|
    json.id cont.id
    json.user_id cont.user_id
    json.campaign_id cont.campaign_id
    json.perk_id cont.perk_id
    json.amount cont.amount
    json.appearance cont.appearance
    json.created_at cont.created_at
  end)
end

json.perks do
  json.array! (campaign.perks.order('price ASC') do |perk|
    json.id perk.id
    json.campaign_id perk.campaign_id
    json.price perk.price
    json.title perk.title
    json.description perk.description
    json.number_available perk.number_available
    json.number_claimed perk.number_claimed
    json.delivery_date perk.delivery_date
  end)
end


# sort_by{|contribution| contribution[:created_at]})
# Should do json.extract! perk, :id instead
