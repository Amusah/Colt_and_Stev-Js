const autoCompleteWidget = ({ 
    root, 
    renderOption,
    onOptionSelect, 
    inputValue,
    requestData 
    }) => {
    root.innerHTML = `
        <label><b>Search for a movie</b></label>
        <p class="errMsg has-text-danger is-hidden">
        </p>
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
    const errMsg = root.querySelector('.errMsg');

    const inputEvent = async e => {
        try {
            if(e.target.value !== ''){
                const movies = await requestData(e.target.value);
                // resultWrapper.innerHTML = '';
                if(!movies.length){
                    // when there is no movie found
                    dropdown.classList.remove('is-active');
                    resultWrapper.innerHTML = '';
                    input.classList.add('is-danger');
                    errMsg.textContent = '😔Movie not found❌';
                    errMsg.classList.remove('is-hidden');
                    return;
                }
                //resultWrapper.innerHTML = '';
                input.classList.remove('is-danger');
                errMsg.classList.add('is-hidden');
                dropdown.classList.add('is-active');
                for (let movie of movies){
                    let option = document.createElement('a');
                    option.classList.add('dropdown-item');
                    option.innerHTML = renderOption(movie);
                    // fetching movie title into form field on click
                    option.addEventListener('click', () => {
                        input.value = inputValue(movie);
                        dropdown.classList.remove('is-active');
                        onOptionSelect(movie);
                    });

                    resultWrapper.appendChild(option);
                }
            } else {
                resultWrapper.innerHTML = '';
                dropdown.classList.remove('is-active');
            }
        } catch (err) {
            input.classList.add('is-danger');
            errMsg.textContent = 'Check your internet connection📶';
            errMsg.classList.remove('is-hidden');
        }
    };
    input.addEventListener('input', debounce(inputEvent));
    document.addEventListener('click', e => {
        if(!root.contains(e.target)){
            dropdown.classList.remove('is-active');
        }
    });
}