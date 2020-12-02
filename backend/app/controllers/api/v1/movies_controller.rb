class Api::V1::MoviesController < ApplicationController

  def index
    @movies = Movie.all.reverse
    render json: @movies
  end

  def create
    Movie.create(movie_params)
    @movies = Movie.all.reverse
    render json: @movies
  end

  
  private

  def movie_params
    params.require(:movie).permit(:title, :year, :director, :summary)
  end
end
