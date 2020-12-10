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
    <h3>${this.title} <button class="review-btn" data-title="${this.title}" data-id="${this.id}">+</button></h3>
    <p>released: ${this.year} <br>
    directed by: ${this.director}<br><br>
    ${this.summary}
    </p>
    <ul id="review-container-${this.id}" data-mov-id="${this.id}">
    </ul>
    </div>
    `
  }

  renderReviews() {
    const list = document.getElementById(`review-container-${this.id}`)
    list.innerHTML = this.reviews.map(review => review.renderLi()).join('')
  }

  loadReviews() {
    this.revAdapter.fetchReviews(this.id)
      .then(reviews => reviews.forEach(review => this.reviews.push(new Review(review))))
      .then(()=> this.renderReviews())
  }


}
