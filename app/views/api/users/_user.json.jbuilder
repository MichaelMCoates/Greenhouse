json.extract! user, :id, :email, :first_name, :last_name, :city, :country
json.avatar_img asset_path(user.avatar_img.url)

json.contributions do
  json.array!(user.contributions.sort_by{|contribution| contribution[:created_at]}) do |cont|
    json.id cont.id
    json.user_id cont.user_id
    json.campaign_id cont.campaign_id
    json.perk_id cont.perk_id
    json.amount cont.amount
    json.appearance cont.appearance
    json.created_at cont.created_at
  end
end
