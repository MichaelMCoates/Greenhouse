class Api::CampaignsController < ApplicationController
  def show
    @campaign = Campaign.includes(:perks).find(params[:id])

    if @campaign
      render "api/campaigns/show"
    else
      render json: { message: 'not found', status: 404 }
    end
  end

  def create
    debugger
    if campaign_params['perks_attributes']
      new_perks_attributes = campaign_params['perks_attributes'].map do |key, value|
        value
      end
      new_campaign_params = campaign_params
      new_campaign_params['user_id'] = current_user.id
      new_campaign_params['perks_attributes'] = new_perks_attributes
      new_params = params
      new_params[:campaign] = new_campaign_params
      @campaign = Campaign.new(new_params[:campaign])
    else
      @campaign = Campaign.new(campaign_params)
    end

    if @campaign.save!
      render "api/campaigns/show"
    else
      render json: @campaign.errors.full_messages, status: 422
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
      :user_id,
      :category,
      perks_attributes: [
        :price,
        :title,
        :description,
        :number_available,
        :delivery_date,
      ]
    )
  end
  # when doing campaign create, don't pass down user_id
end
