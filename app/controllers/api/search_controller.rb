class Api::SearchController < ApplicationController

  def search
    query = search_params[:query]
    @campaigns = Campaign.where("title % ? OR tagline % ? OR overview % ?", query, query, query)
    render "api/search/search"
  end

  def search_params
    params.require(:search).permit(:query)
  end

end
