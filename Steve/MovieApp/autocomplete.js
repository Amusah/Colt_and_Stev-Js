const autoCompleteWidget = ({ root, renderOption }) => {
    root.innerHTML = `
        <label><b>Search for a movie</b></label>
        <input type="text" class="input" />
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results"></div>
            </div>
        </div>
    `;

    const dropdown = root.querySelector('.dropdown');
    const input = root.querySelector('input');
    const resultWrapper = root.querySelector('.results');

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
                option.classList.add('dropdown-item');
                option.innerHTML = renderOption(movie);
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
}