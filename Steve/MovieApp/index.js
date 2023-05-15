const input = document.querySelector('input');
const requestData = async (keyword) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '7fb5b472',
            s: keyword
        }
    });
    return response.data.Search; 
} 
//requestData().catch(err => console.log(err));

const onInput = async e => {
    if(e.target.value !== ''){
        const movies = await requestData(e.target.value);
        console.log(movies)
    }
};
input.addEventListener('input', debounce(onInput));