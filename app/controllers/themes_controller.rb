class ThemesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create]

  def index
    @themes = Theme.all
  end

  def new
    @theme = Theme.new
  end

  def create
    @theme = Theme.new(theme_params)
    if @theme.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @theme = Theme.find(params[:id])
  end

  private

  def theme_params
    params.require(
      :theme
    ).permit(
      :main_theme,:sub_theme_1, :sub_theme_2,
    ).merge(user_id: current_user.id)
  end
end
