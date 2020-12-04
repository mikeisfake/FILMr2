class Movie {
  constructor(movieJSON) {
    this.title = movieJSON.title
    this.year = movieJSON.year
    this.director = movieJSON.director
    this.summary = movieJSON.summary
  }

  renderMovie() {
    return `
    <div class="movie-card">
    <h3>${this.title}</h3>
    <p>released: ${this.year} <br>
    directed by: ${this.director}<br><br>
    ${this.summary}
    </p>
    </div>
    `
  }

}
