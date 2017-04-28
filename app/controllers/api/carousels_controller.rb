class Api::CarouselsController < ApplicationController
  def featured
    @featured_carousel_campaigns = Campaign.order('id').limit(5)
    render "api/carousels/featured"
  end
end
