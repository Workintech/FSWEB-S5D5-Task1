import { apiKey } from './index.js';

document.querySelector('button').addEventListener('click', searchMovie);
document.querySelector('input').addEventListener('keydown', keypress);

const movieInfoDiv = document.getElementsByClassName('movie-container')[0];

function displayMovieInfo(movieInfo) {
  if (movieInfo.Response === 'True') {
    const html = `
      <div id="movieInfo">
          <h2>${movieInfo.Title}</h2>
          <p><span>Year:</span> ${movieInfo.Year}</p>
          <p><span>Genre:</span> ${movieInfo.Genre}</p>
          <p><span>Plot:</span> ${movieInfo.Plot}</p>
          <img src="${movieInfo.Poster}" alt="${movieInfo.Title} Poster" />
      </div>
      `;

    movieInfoDiv.innerHTML = html;
  } else {
    movieInfoDiv.innerHTML = '<p>No movie found with that title.</p>';
  }
}

function keypress(event) {
  if (event.key == 'Enter') {
    searchMovie();
  }
}

function searchMovie() {
  const movieTitle = document.getElementById('movieTitle').value;

  const apiUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;

  axios
    .get(apiUrl)
    .then((response) => {
      const movieInfo = response.data;
      displayMovieInfo(movieInfo);
    })
    .catch((error) => {
      console.error('Error fetching movie data:', error);
    });
}
