json.founded do
  json.array! founded do |campaign|
    json.extract! campaign, :id, :user_id, :title, :tagline
    json.first_name campaign.user.first_name
    json.last_name campaign.user.last_name
  end
end

json.funded do
  json.array! funded do |contribution|
    json.extract! contribution.campaign, :id, :user_id, :title, :tagline
    json.first_name contribution.campaign.user.first_name
    json.last_name contribution.campaign.user.last_name
  end
end
