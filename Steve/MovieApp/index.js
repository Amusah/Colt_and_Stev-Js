const requestData = async (keyword) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '7fb5b472',
            s: keyword
        }
    });
    if(response.data.Error){
        return [];
    }
    console.log(response.data)
    return response.data.Search; 
} 
//requestData().catch(err => console.log(err));

autoCompleteWidget({
    root: document.querySelector('.autocomplete'),
    renderOption(movie){
        let moviePoster = movie.Poster === 'N/A' ? '' : movie.Poster;
        return `
            <img src="${moviePoster}"/>
            ${movie.Title } (${movie.Year}) `
    },
    onOptionSelect(movie){
        onMovieSelect(movie);
    },
    inputValue(movie){
        return movie.Title;
    }
});

// making a follow up request to get additional information about a specific movie
const onMovieSelect = async movie => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '7fb5b472',
            i: movie.imdbID
        }
    });
    // console.log(movie)
    // console.log(response.data);
    document.querySelector('#movie-details').innerHTML = renderMovie(response.data);
}

// injecting movie details into the Dom
const renderMovie = movieDetails => {
    return `
    <article class="media">
    <figure class="media-left">
      <p class="image">
        <img src="${movieDetails.Poster}" alt="">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h1>${movieDetails.Title}</h1>
        <h4>${movieDetails.Genre}</h4>
        <p>${movieDetails.Plot}</p>
      </div>
    </div>
    </article>

    <article class="notification is-primary">
        <p class="title">${movieDetails.Awards}</p>
        <p class="subtitle">Awards</p>
    </article>
    <article class="notification is-primary">
        <p class="title">${movieDetails.BoxOffice}</p>
        <p class="subtitle">Box Office</p>
    </article>
    <article class="notification is-primary">
        <p class="title">${movieDetails.Metascore}</p>
        <p class="subtitle">Metascore</p>
    </article>
    <article class="notification is-primary">
        <p class="title">${movieDetails.imdbRating}</p>
        <p class="subtitle">IMDB Rating</p>
    </article>
    <article class="notification is-primary">
        <p class="title">${movieDetails.imdbVotes}</p>
        <p class="subtitle">IMDB Votes</p>
    </article>
    `;
}