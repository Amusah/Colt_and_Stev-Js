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

//Handling unnecessary multiple requests on each keypress (Debouncing)
const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};
// let timeOutId;
// const inputEvent = e => {
//     if(timeOutId){
//         clearTimeout(timeOutId);
//     }
//     timeOutId = setTimeout(() => {
//         requestData(e.target.value);
//     }, 1000);
// }
//input.addEventListener('input', inputEvent);

const onInput = e => {
    // if(e.target.value !== ''){
    //     requestData(e.target.value);
    // }
    requestData(e.target.value);
};
input.addEventListener('input', debounce(onInput));