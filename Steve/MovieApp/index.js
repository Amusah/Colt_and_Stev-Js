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
let timeOutId;
const inputEvent = e => {
    if(timeOutId){
        clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
        requestData(e.target.value);
    }, 1000);
}
input.addEventListener('input', inputEvent);