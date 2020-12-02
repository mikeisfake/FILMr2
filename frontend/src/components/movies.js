class Movies {
  constructor() {
    this.movies = []
    this.adapter = new MoviesAdapter()
    this.loadMovies()
  }

  loadMovies() {
    this.adapter.fetchMovies()
      .then(movies => {
        movies.forEach( movie => this.movies.push(movie))
      })
      .then(() => this.renderMovies())
  }

  renderMovies() {
    const container = document.getElementById('movie-list')
    return this.movies.forEach( movie => {
      let div = document.createElement('div')
      div.innerHTML = `
      <h3>${movie.title}</h3>
      <p>released: ${movie.year} <br>
      directed by: ${movie.director}<br><br>
      ${movie.summary}
      </p>
      `
      container.appendChild(div)
    });
  }

  // renderMovie(movie) {
  //
  // }
}






















































// const BASE_URL = "http://localhost:3000/api/v1"
//
// function fetchMovies() {
//   return fetch(`${BASE_URL}/movies`)
//     .then(resp => resp.json())
//     .then(data => renderMovies(data))
// }
//
// function renderMovies(data) {
//   return data.forEach( movie => renderMovie(movie));
// }
//
// function renderMovie(movie) {
//   const container = document.getElementById('movie-list')
//
//   let div = document.createElement('div')
//   div.innerHTML = `
//   <h3>${movie.title}</h3>
//   <p>released: ${movie.year} <br>
//   directed by: ${movie.director}<br><br>
//   ${movie.summary}
//   </p>
//   `
//   container.appendChild(div)
// }
//
// (function formListener() {
//   const form = document.getElementById('new-movie-form')
//   form.addEventListener("submit", event => {
//     event.preventDefault()
//     let el = event.target;
//     const formData = {
//       title: el.title.value || "",
//       year: el.year.value || "",
//       director: el.director.value || "",
//       summary: el.summary.value || "",
//     };
//     createMovie(formData)
//   })
// })()
//
// function createMovie(formData) {
//   const config = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   }
//
//   return fetch(`${BASE_URL}/movies`, config)
//     .then(resp => resp.json())
//     .then(data => renderMovies(data))
// }
//
// fetchMovies()