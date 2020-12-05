class ReviewsAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/movies"
  }

  fetchReviews(movieId) {
    return fetch(`${this.baseURL}/${movieId}/reviews`)
      .then(resp => resp.json())
  }




}
