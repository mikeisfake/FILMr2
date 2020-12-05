class Movies {
  constructor() {
    this.movies = []
    this.adapter = new MoviesAdapter()
    this.loadMovies()
    this.initEventListeners()
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
        movies.forEach(movie => this.movies.push(new Movie(movie)))
      })
      .then(() => this.renderMovies())
  }

  renderMovies() {
    const container = document.getElementById('movie-list')
    container.innerHTML = this.movies.map(movie => movie.renderMovie()).join('')
    this.btnEventListeners()
  }

  btnEventListeners() {
    const btns = document.querySelectorAll(".review-btn")
    btns.forEach(btn => btn.addEventListener('click', () => this.showRevForm() ))
  }

  showRevForm() {
    const reviewForm = document.getElementById("review-form-container")
    reviewForm.innerHTML += `
      <h2>New Review</h2>
      <form id="new-review-form">
      <input type="text" name="review" placeholder="your review here">
      <input type="submit">
      </form>
    `
  }
}

//
