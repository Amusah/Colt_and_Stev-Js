axios.get('https://swapi.dev/api/planets/')
.then((res) => {
    //console.log(res)
}).catch((err) => {
    console.log('catch')
    console.log(err)
});

/*
    Note: there is no need to response.json(), axios 
    handles that automatically.
*/

// SEQUENTIAL AXIOS REQUESTS
axios.get('https://swapi.dev/api/planets/')
.then(({ data }) => {
    console.log(data);
    console.log('First ten planet names');
    for(let planet of data.results){
        console.log(planet.name);
    }
    return axios.get(data.next);
})
.then(({ data }) => {
    console.log(data);
    console.log('Second ten planet names');
    for(let planet of data.results){
        console.log(planet.name);
    }
    
})
.catch(err => console.log(err))
 /*
    data is a key/property of a response object returned by 
    axios http request. the callback function in the
    .then() requires an object as an arguement hence 
    the response object
    NB: Object destructure technique observed here (line 16)
 */ 