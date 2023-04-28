// Parallel request
// refactoring multiple awaits with a 'Promise.all()' helper function
const getPoke = async () => {
    const pokeData1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const pokeData2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const pokeData3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const results = await Promise.all([pokeData1, pokeData2, pokeData3]);
    console.log(results);
    for(let result of results){
        console.log(result.data);
    }
}
getPoke();