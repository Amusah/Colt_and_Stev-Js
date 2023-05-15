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