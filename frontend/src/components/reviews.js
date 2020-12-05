class Reviews {
  constructor(revJSON) {
    this.adapter = new ReviewsAdapter()
    this.body = revJSON.body
    this.movieId = revJSON.movieId
  }
}
