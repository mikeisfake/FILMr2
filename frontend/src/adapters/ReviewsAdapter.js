class ReviewsAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/movies"
  }

  fetchReviews(movieId) {
    return fetch(`${this.baseURL}/${movieId}/reviews`)
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

    return fetch(`${this.baseURL}${movieId}/reviews`, config)
      .then(resp => resp.json())
  }


}
