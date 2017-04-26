class Api::CampaignsController < ApplicationController
  def show
    @campaign = Campaign.find(params[:id])

    if @campaign
      render "api/campaigns/show"
    else
      render json: { message: 'not found', status: 404 }
    end
  end

  def create
    @campaign = Campaign.new(campaign_params)
    @campaign.user_id = current_user.id

    if @campaign.save!
      render "api/campaigns/show"
    else
      render json: { message: 'not found', status: 404 }
    end
  end

  def campaign_params
    params.require(:campaign).permit(
      :goal_amt,
      :current_amt,
      :title,
      :tagline,
      :city,
      :country,
      :duration,
      :overview,
      :campaign_story,
    )
  end
  # when doing campaign create, don't pass down user_id
end
