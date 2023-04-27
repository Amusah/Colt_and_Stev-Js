// fetch('https://swapi.dev/api/planets/')
// .then((response) => {
//     //console.log(response)
//     if(!response.ok) throw new Error();
//         return response.json();
// }).then((data) => {
//     console.log('First request fetched all planet and extracted a film url from array of objects')
//     console.log(data.results[7].films[0]);
//     const filmUrl = data.results[7].films[0];
//     return fetch(filmUrl);
// })
// .then((response) => {
//    return !response.ok ? new Error('Request failed') : response.json();
// })
// .then((data) => {
//     console.log('Second request fetched a film data and extracted the film title');
//     console.log(data.title);
// })
// .catch(err => {
//     console.log('SOMETHING WENT WRONG :(');
//     console.log(err)
// });


// CODE REFACTURING
const checkStatusAndParse = (response) => {
    if(!response.ok) throw new Error();
        return response.json();
};
const extractFilmUrl = (data) => {
    //console.log(fetchMsg)
    console.log('First request fetched all planet and extracted a film url from array of objects');
    console.log(data.results[7].films[0]);
    const filmUrl = data.results[7].films[0];
    return fetch(filmUrl);
};
const extractFilmData = (data) => {
    console.log('Second request fetched a film data and extracted the film title');
    console.log(data.title);
};

fetch('https://swapi.dev/api/planets/')
.then(checkStatusAndParse)
.then(extractFilmUrl)
.then(checkStatusAndParse)
.then(extractFilmData)
.catch(err => {
    console.log('SOMETHING WENT WRONG :(');
    console.log(err);
});

/*
    Note: the catch block will only run when there's no response
    like no internet connection. unless otherwise you handle 
    errors manually
*/