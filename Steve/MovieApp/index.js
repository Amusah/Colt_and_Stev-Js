const autoCompleteConfig = {
    renderOption(movie){
        let moviePoster = movie.Poster === 'N/A' ? '' : movie.Poster;
        return `
            <img src="${moviePoster}"/>
            ${movie.Title } (${movie.Year}) `
    },
    inputValue(movie){
        return movie.Title;
    },
    async requestData(keyword){
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
};

// left auto complete widget
autoCompleteWidget({
    ...autoCompleteConfig,
    root: document.querySelector('#left-autocomplete'),
    onOptionSelect(movie){
        document.querySelector('.tutorial').classList.add('is-hidden');
        onMovieSelect(movie, document.querySelector('#left-movie-details'), 'left');
    },
    
});
// right auto complete widget
autoCompleteWidget({
    ...autoCompleteConfig,
    root: document.querySelector('#right-autocomplete'),
    onOptionSelect(movie){
        document.querySelector('.tutorial').classList.add('is-hidden');
        onMovieSelect(movie, document.querySelector('#right-movie-details'), 'right');
    },
});

// making a follow up request to get additional information about a specific movie
let leftMovieInfo;
let rightMovieInfo;
const onMovieSelect = async (movie, movieElement, side) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '7fb5b472',
            i: movie.imdbID
        }
    });
    // console.log(movie)
    // console.log(response.data);
    movieElement.innerHTML = renderMovie(response.data);

    //side === 'left' ? leftMovieInfo = response.data : rightMovieInfo = response.data;
    if(side === 'left'){
        leftMovieInfo = response.data;
    }else{
        rightMovieInfo = response.data;
    }

    if(leftMovieInfo && rightMovieInfo){
        runComparison(response.data);
    }
}

const runComparison = () => {
    let leftSideStats = document.querySelectorAll('#left-movie-details .notification'); // nodeList
    let rightSideStats = document.querySelectorAll('#right-movie-details .notification'); // nodeList
    
    leftSideStats.forEach((leftStat, index) => {
        const rightStat = rightSideStats[index];
        const leftSideValue = parseInt(leftStat.dataset.value);
        const rightSideValue = parseInt(rightStat.dataset.value);

        if(leftSideValue > rightSideValue){
            rightStat.classList.remove('is-success');
            rightStat.classList.add('is-warning');
        } else {
            leftStat.classList.remove('is-success');
            leftStat.classList.add('is-warning');
        }
        
    });

    const sumMovieStats = (nodeList) => {
        //console.log(nodeList)
        let title;
        let value = Array.from(nodeList).reduce((total, val) => {
            if(val.dataset.value){
                total = total + parseFloat(val.dataset.value);
            }
            if(val.classList.contains('movie-title')){
                title = val.innerText;
            }
            //console.log(total);
            return total;
        }, 0);
        return {title, value}
    }
    let leftTotalStats = sumMovieStats(leftSideStats);
    let rightTotalStats = sumMovieStats(rightSideStats);
    console.log(leftTotalStats)
    console.log(rightTotalStats)

    leftTotalStats.value > rightTotalStats.value ? 
    alert(`${leftTotalStats.title} has the highest total score`) : 
    alert(`${rightTotalStats.title} has the highest total score`);
}

// injecting movie details into the Dom
const renderMovie = movieDetails => {
    // pulling out number values from movie details
    const dollars = movieDetails.BoxOffice ? parseInt(movieDetails.BoxOffice.replace(/\$/g, '').replace(/,/g, '')) : '';
    const metaScore = movieDetails.Metascore ? parseInt(movieDetails.Metascore) : '';
    const imdbRating = movieDetails.imdbRating ? parseFloat(movieDetails.imdbRating) : '';
    const imdbVotes = movieDetails.imdbVotes ? parseInt(movieDetails.imdbVotes.replace(/,/g, '')) : '';
    const awards = movieDetails.Awards.split(' ').reduce((acc, curr) => {
        let value = parseInt(curr);
        if(isNaN(value)){
            return acc;
        }else{
            return acc + value;
        }
    }, 0)
    // console.log(awards)
    // console.log(dollars, metaScore, imdbRating, imdbVotes)

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

    <article data-value=${awards} class="notification is-success">
        <p class="title">${movieDetails.Awards}</p>
        <p class="subtitle">Awards</p>
    </article>
    <article data-value=${dollars} class="notification is-success">
        <p class="title">${movieDetails.BoxOffice}</p>
        <p class="subtitle">Box Office</p>
    </article>
    <article data-value=${metaScore} class="notification is-success">
        <p class="title">${movieDetails.Metascore}</p>
        <p class="subtitle">Metascore</p>
    </article>
    <article data-value=${imdbRating} class="notification is-success">
        <p class="title">${movieDetails.imdbRating}</p>
        <p class="subtitle">IMDB Rating</p>
    </article>
    <article data-value=${imdbVotes} class="notification is-success">
        <p class="title">${movieDetails.imdbVotes}</p>
        <p class="subtitle">IMDB Votes</p>
    </article>
    <p class="is-hidden movie-title notification">${movieDetails.Title}</p>
    `;
}