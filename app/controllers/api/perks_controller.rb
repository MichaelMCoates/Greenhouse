class Api::PerksController < ApplicationController
  def create
    @perk = Perk.new(perk_params)

    if @perk.save
      render "api/campaigns/show"
    else
      render json: { message: 'not found', status: 404 }
    end
  end

  def perk_params
    params.require(:perk).permit(:campaign_id, :price, :title, :description, :number_available, :number_claimed, :delivery_date)
  end
end
