
// CODE REFACTORING
const fetchPlanets = (url = 'https://swapi.dev/api/planets/') => {
    return axios.get(url);
}
const printPlanets = ({ data }) => {
    console.log(data);
    for(let planet of data.results){
        console.log(planet.name);
    }
    return fetchPlanets(data.next)
    //return Promise.resolve(data.next)
}
fetchPlanets()
.then(printPlanets)
.then(printPlanets)
.then(printPlanets)
.then(printPlanets)
.catch(err => console.log(err));