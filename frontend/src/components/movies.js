class Movies {
  constructor() {
    this.movies = []
    this.adapter = new MoviesAdapter()
    this.initEventListeners()
    this.loadMovies()
  }

  initEventListeners() {
    this.movieForm = document.getElementById('new-movie-form')
    this.movieForm.addEventListener('submit', this.createMovie.bind(this))
  }

  createMovie(e) {
    e.preventDefault()

    let el = e.target;
    const formData = {
      title: el.title.value || "",
      year: el.year.value || "",
      director: el.director.value || "",
      summary: el.summary.value || "",
    }
    this.adapter.postMovie(formData).then(movie => {
      this.movies.unshift(new Movie(movie))
      this.renderMovies()
      this.movies.forEach(movie => movie.renderReviews())
    })

    el.title.value = ""
    el.year.value = ""
    el.director.value = ""
    el.summary.value = ""
  }

  loadMovies() {
    this.adapter.fetchMovies()
      .then(movies => {
        this.movies = []
        movies.forEach(movie => this.movies.push(new Movie(movie)))
      })
      .then(() => this.renderMovies())
  }

  renderMovies() {
    const container = document.getElementById('movie-list')
    container.innerHTML = ""
    container.innerHTML = this.movies.map(movie => movie.renderMovie()).join('')
    this.btnEventListeners()
  }

  btnEventListeners() {
    const btns = document.querySelectorAll(".review-btn")
    btns.forEach(btn => btn.addEventListener('click', () => this.showRevForm() ))
  }

  showRevForm() {
    let movie_id = event.target.dataset.id
    let title = event.target.dataset.title
    const reviewForm = document.getElementById("review-form-container")
    reviewForm.innerHTML = ""
    reviewForm.innerHTML += `
      <form id="new-review-form">
      <h2>New Review of ${title}</h2>
      <textarea placeholder="your review here" name="review" wrap="physical"></textarea><br>
      <input type="hidden" name="movie_id" value="${movie_id}">
      <input type="submit" value="add review">
      </form>
    `

    const newRevForm = document.getElementById("new-review-form")
    newRevForm.addEventListener('submit', (e) => {
      e.preventDefault()

      const el = e.target
      const movieId = el.movie_id.value
      const revFormData = {
        body: el.review.value,
        movie_id: el.movie_id.value,
      }

      reviewForm.innerHTML = ""

      this.adapter.saveReview(revFormData, movieId)
        .then(review => new Review(review))
        .then(() => this.loadMovies())
    })
  }

}

//
