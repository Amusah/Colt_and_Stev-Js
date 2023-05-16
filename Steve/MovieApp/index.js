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
    return response.data.Search; 
} 
//requestData().catch(err => console.log(err));



const onInput = async e => {
    if(e.target.value !== ''){
        const movies = await requestData(e.target.value);
        resultWrapper.innerHTML = '';
        dropdown.classList.add('is-active');
        for (let movie of movies){
            let option = document.createElement('a');
            let moviePoster = movie.Poster === 'N/A' ? '' : movie.Poster
            option.classList.add('dropdown-item');
            option.innerHTML = `
                <img src="${moviePoster}"/>
                ${movie.Title }
            `;
            resultWrapper.appendChild(option);
        }
    }
};
input.addEventListener('input', debounce(onInput));