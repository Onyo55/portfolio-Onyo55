class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def index
    redirect_to theme_path(params[:theme_id])
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to theme_path(params[:theme_id])
    else
      @theme = @comment.theme
      @comments = @theme.comments
      render "themes/show"
    end

  end


  private
    def comment_params
      params.require(
        :comment
      ).permit(
        :text,:sub_theme_num
      ).merge(user_id: current_user.id, theme_id: params[:theme_id])
    end

end
