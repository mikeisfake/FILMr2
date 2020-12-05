class Review {
  constructor(revJSON) {
    this.body = revJSON.body
    this.movieId = revJSON.movie_id
  }

  renderLi() {
    return `<li>${this.body}</li>`
  }
}
