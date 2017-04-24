class Api::ContributionsController < ApplicationController
  def create
    @contribution = Contribution.new(contribution_params)

    if @contribution.save
      debugger
      @campaign = @contribution.campaign
      # still need to grab perk and add
      @campaign.add_contribution_amount(@contribution.amount)
      render "api/campaigns/show"
    else
      render json: { message: 'not found', status: 404 }
    end
  end

  def contribution_params
    params.require(:contribution).permit(:user_id, :campaign_id, :perk_id, :amount, :appearance)
  end
end
