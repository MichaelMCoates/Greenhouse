class Api::ContributionsController < ApplicationController
  def create
    @contribution = Contribution.new(contribution_params)

    if @contribution.save
      @campaign = @contribution.campaign
      @campaign.add_to_current_amount(@contribution.amount)
      @contribution.perk.purchase! if @contribution.perk
      render "api/campaigns/show"
    else
      render json: { message: 'not found', status: 404 }
    end
  end

  def contribution_params
    params.require(:contribution).permit(:user_id, :campaign_id, :perk_id, :amount, :appearance)
  end
end
