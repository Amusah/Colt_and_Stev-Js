const input = document.querySelector('input');
const requestData = async (keyword) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '7fb5b472',
            s: keyword
        }
    });
    //console.log(response.data);
} 
//requestData().catch(err => console.log(err));

const onInput = e => {
    if(e.target.value !== ''){
        requestData(e.target.value);
    }
};
input.addEventListener('input', debounce(onInput));