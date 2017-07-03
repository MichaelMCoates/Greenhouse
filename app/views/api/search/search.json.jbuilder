json.array! @campaigns do |campaign|
  json.partial! "api/campaigns/tile", campaign: campaign
end
