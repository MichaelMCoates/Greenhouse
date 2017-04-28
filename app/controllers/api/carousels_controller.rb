class Api::CarouselsController < ApplicationController
  def featured
    @featured_carousel_campaigns = Campaign.order('id').limit(5)
    render "api/carousels/featured"
  end

  def tile
    @tile_carousel_campaigns = Campaign.order('id').limit(16)
    render "api/carousels/tile"
  end

end
