class Api::CampaignsController < ApplicationController
  def show
    @campaign = Campaign.find(params[:id])

    if @campaign
      render "api/campaigns/show"
    else
      render json: { message: 'not found', status: 404 }
    end
  end

  # when doing campaign create, don't pass down user_id
end
