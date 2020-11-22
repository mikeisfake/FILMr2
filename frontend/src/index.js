const BASE_URL = "http://localhost:3000"

function fetchMovies() {
  fetch(BASE_URL + "/movies")
    .then(resp => resp.json())
    .then(data => renderMovies(data))
}

function renderMovies(data) {
  data.forEach( movie => console.log(movie));
}

function renderMovie(movie) {
  const container = document.getElementById('movie-list')
}

fetchMovies()
