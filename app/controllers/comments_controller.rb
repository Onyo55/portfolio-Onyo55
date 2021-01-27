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

  def sort
    @theme = Theme.find(params[:id])
    @comment = Comment.new
    if params[:keyword] == "new"
      @comments = Comment.where(theme_id: @theme.id).order('created_at DESC')
    elsif params[:keyword] == "old"
      @comments = Comment.where(theme_id: @theme.id).order('created_at ASC')
    end
    render "themes/show"
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
