//const apiKey = 'your_api_key_here'; // Replace with your API key
const apiUrl = 'https://www.omdbapi.com/?apikey=' + apiKey + '&s=';

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    fetch(apiUrl + query)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            data.Search.forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.className = 'movie';
                movieDiv.innerHTML = `
                    <img src="${movie.Poster}" alt="${movie.Title}">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                    <button onclick="showMoreInfo('${movie.imdbID}')">More Info</button>
                `;
                resultsDiv.appendChild(movieDiv);
            });
        })
        .catch(error => console.error('Error:', error));
});


function showMoreInfo(imdbID) {
    fetch('https://www.omdbapi.com/?apikey=' + apiKey + '&i=' + imdbID)
        .then(response => response.json())
        .then(data => {
            const modal = document.getElementById('movie-modal');
            const movieDetails = document.getElementById('movie-details');
            movieDetails.innerHTML = `
                <h2>${data.Title}</h2>
                <img src="${data.Poster}" alt="${data.Title}">
                <p><strong>Release Date:</strong> ${data.Released}</p>
                <p><strong>Director:</strong> ${data.Director}</p>
                <p><strong>Actors:</strong> ${data.Actors}</p>
                <p><strong>Plot:</strong> ${data.Plot}</p>
            `;
            modal.style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
}

const modal = document.getElementById('movie-modal');
const closeModal = document.querySelector('.close');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
