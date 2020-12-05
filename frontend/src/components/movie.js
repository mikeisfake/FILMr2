class Movie {
  constructor(movieJSON) {
    this.title = movieJSON.title
    this.year = movieJSON.year
    this.director = movieJSON.director
    this.summary = movieJSON.summary
    this.id = movieJSON.id
    this.revAdapter = new ReviewsAdapter()
    this.reviews = []
    this.loadReviews()
  }

  renderMovie() {
    return `
    <div class="movie-card" data-id="${this.id}">
    <h3>${this.title}</h3>
    <button class="review-btn" data-id="${this.id}"> add review</button>
    <form id="new-review-form"></form>
    <p>released: ${this.year} <br>
    directed by: ${this.director}<br><br>
    ${this.summary}
    </p>
    </div>
    `
  }

  loadReviews() {
    this.revAdapter.fetchReviews()
      .then(review => console.log(review))
  }

}
