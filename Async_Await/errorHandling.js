// Error handling in Async functions
/*
    Actually there're two ways of doing this,
    one is to attach the .catch() to the function call
    and the other is to use the try{} catch{} blocks.
*/
// option one
async function getPlanets(){
    //let res = await axios.get('https://swapi.dev/api/plsdaanets/'); // error request link
    let res = await axios.get('https://swapi.dev/api/planets/');
    console.log(res.data);
}
getPlanets().catch(err => console.log(`Encountered an ${err}`));

// option two
async function fetchPlanets(){
   try {
    let res = await axios.get('https://swapi.dev/api/planets/');
    console.log(res.data);
   } catch (err) {
    console.log('An error occured', err);
   }
}
fetchPlanets();

/*
    Note:
    try{} catch(e){} is more specific, ie. it handles errors
    within a single async function whilst
    .catch() takes care of all errors that occurs in
    multiple function calls (chained together with .then())
*/