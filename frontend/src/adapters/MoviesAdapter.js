class MoviesAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/movies"
  }

  fetchMovies() {
    return fetch(this.baseURL)
      .then(resp => resp.json())
  }


  postMovie(formData) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    }

    return fetch(this.baseURL, config)
      .then(resp => resp.json())
  }

  saveReview(formData, movieId) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    }

    return fetch(`${this.baseURL}/${movieId}/reviews`, config)
      .then(resp => resp.json())
  }
}
