json.extract! user, :id, :email, :first_name, :last_name
json.avatar_img asset_path(user.avatar_img.url)
