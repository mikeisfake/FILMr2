class MoviesAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/movies"
  }

  fetchMovies() {
    return fetch(this.baseURL)
      .then(resp => resp.json())
  }
}
