json.array! @featured_carousel_campaigns do |campaign|
  json.extract! campaign, :id, :title, :tagline 
  json.pitch_img_url image_url(campaign.pitch_img.url)
end
