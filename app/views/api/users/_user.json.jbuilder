json.extract! user, :id, :email, :first_name, :last_name, :city, :country
json.avatar_img asset_path(user.avatar_img.url)
