class Api::SearchController < ApplicationController

  def search
    if search_params[:query]
      query = search_params[:query]
      campaigns1 = Campaign.where("title % ? OR tagline % ? OR overview % ?", query, query, query)
    else
      campaigns1 = Campaign.all
    end

    if search_params[:category]
      category = search_params[:category]
      campaigns2 = campaigns1.where("category % ? ", category)
    else
      campaigns2 = campaigns1
    end



    @campaigns = campaigns2
    render "api/search/search"
  end

  def search_params
    params.require(:search).permit(:query, :category)
  end

end
