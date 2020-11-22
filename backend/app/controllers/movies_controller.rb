class MoviesController < ApplicationController

  def index
    @movies = Movie.all
    render json: @movies
  end

  private

  # def movie_params
  #   params.require(:movie).permit(:title, :year, :director, :summary)
  # end
end
