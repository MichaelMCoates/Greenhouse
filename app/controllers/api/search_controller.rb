class Api::SearchController < ApplicationController

  def search
    if search_params[:query]
      query = search_params[:query]
      campaigns1 = Campaign.where("title % ? OR tagline % ? OR overview % ?", query, query, query)
    else
      campaigns1 = Campaign.all
    end

    @campaigns = campaigns1
    render "api/search/search"
  end

  def search_params
    params.require(:search).permit(:query)
  end

end
