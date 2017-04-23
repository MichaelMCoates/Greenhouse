json.extract! campaign, :id, :user_id, :goal_amt, :current_amt, :title, :tagline, :city, :country, :duration, :overview, :campaign_story, :created_at

json.contributions do
  json.array!(campaign.contributions.sort_by{|contribution| contribution[:created_at]}) do |cont|
    json.id cont.id
    json.user_id cont.user_id
    json.campaign_id cont.campaign_id
    json.perk_id cont.perk_id
    json.amount cont.amount
    json.appearance cont.appearance
    json.created_at cont.created_at
  end
end
