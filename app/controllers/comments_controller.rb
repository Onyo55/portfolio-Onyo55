class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def index
    redirect_to theme_path(params[:theme_id])
  end

  def create
    comment = Comment.create(comment_params)
    render json:{comment: comment}
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

