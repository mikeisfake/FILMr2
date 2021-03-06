class Api::V1::ReviewsController < ApplicationController

  def index
    @reviews = Movie.find(params[:movie_id]).reviews
    render json: @reviews
  end

  def create
    @review = Review.create(review_params)
    render json: @review
  end

  private

  def review_params
    params.require(:review).permit(:body, :movie_id)
  end

end
