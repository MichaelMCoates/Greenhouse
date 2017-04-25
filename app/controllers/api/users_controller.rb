class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  def campaigns
    @user = User.find(params[:user_id])

    if @user
      @founded = @user.founded_campaigns_and_user
      @funded = @user.funded_campaigns_and_user
      render partial: 'api/users/campaigns', locals: {founded: @founded, funded: @funded}
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
