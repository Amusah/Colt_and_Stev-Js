// without async await
function getPlanets(){
    return axios.get('https://swapi.dev/api/planets/');
}
getPlanets()
.then(res => console.log(res.data))
.catch(err => console.log(err));


// with async await
const fetchPlanets = async () => {
    const res = await axios.get('https://swapi.dev/api/planets/');
    console.log(res.data)
}
fetchPlanets();