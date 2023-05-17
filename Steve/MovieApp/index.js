const root = document.querySelector('.autocomplete');
root.innerHTML = `
    <label><b>Search for a movie</b></label>
    <input type="text" class="input" />
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>
`;
const dropdown = document.querySelector('.dropdown');
const input = document.querySelector('input');
const resultWrapper = document.querySelector('.results');

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
    //console.log(response.data)
    return response.data.Search; 
} 
//requestData().catch(err => console.log(err));



const inputEvent = async e => {
    //resultWrapper.innerHTML = '';
    // dropdown.classList.remove('is-active')
    if(e.target.value !== ''){
        const movies = await requestData(e.target.value);
        // resultWrapper.innerHTML = '';
        if(!movies.length){
            dropdown.classList.remove('is-active');
            resultWrapper.innerHTML = '';
            return;
        }
        //resultWrapper.innerHTML = '';
        dropdown.classList.add('is-active');
        for (let movie of movies){
            let option = document.createElement('a');
            let moviePoster = movie.Poster === 'N/A' ? '' : movie.Poster
            option.classList.add('dropdown-item');
            option.innerHTML = `
                <img src="${moviePoster}"/>
                ${movie.Title }
            `;
            // fetching movie title into form field on click
            option.addEventListener('click', () => {
                input.value = movie.Title;
                dropdown.classList.remove('is-active');
                onMovieSelect(movie)
            });

            resultWrapper.appendChild(option);
        }
    } else {
        resultWrapper.innerHTML = '';
        dropdown.classList.remove('is-active');
    }
};
input.addEventListener('input', debounce(inputEvent));
document.addEventListener('click', e => {
    if(!root.contains(e.target)){
        dropdown.classList.remove('is-active');
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
    `
}