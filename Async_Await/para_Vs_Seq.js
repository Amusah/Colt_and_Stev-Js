/***********Parallel Vs. Sequential Requests*************/
//Sequential request
async function getPokemon() {
    let poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    let poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
    let poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
    console.log(poke1.data.name);
    console.log(poke2.data.name);
    console.log(poke3.data.name);
}
getPokemon().catch(err => console.log(err));


// Parallel request
const getPoke = async () => {
    const pokeData1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const pokeData2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const pokeData3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    let res1 = await pokeData1;
    let res2 = await pokeData2;
    let res3 = await pokeData3;
    console.log(res1.data);    
    console.log(res2.data);
    console.log(res3.data);
}
getPoke();

/*
    Note:
    The sequential request is recommended only when
    subsequent requests depends on the result of the 
    previous request. as these happens synchronously, 
    it rather slows down execution. whilst

    The parallel request is recommended when requests
    are individual and not based on the the result of
    a previous request. requests are sent at a go
    and response are receieved same time.
    hence execution is faster over Sequential requests.
*/


/****The codes below proves futher*****/
const changeBgColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}

// Sequential
const changeColorsInSequence = async () => {
    await(changeBgColor('red', 1000));
    await(changeBgColor('yellow', 1000));
    await(changeBgColor('green', 1000));
    await(changeBgColor('pink', 1000));
}
//changeColorsInSequence();

// Parallel
const changeColorsInParallel = async () => {
    let red = (changeBgColor('red', 1000));
    let yellow = (changeBgColor('yellow', 1000));
    let green = (changeBgColor('green', 1000));
    let blue = (changeBgColor('blue', 1000));

    await red;
    await yellow;
    await green;
    await blue;
}
//changeColorsInParallel();

/*
    When the changeColorsInSequence() function is called,
    the background color of the body chandes in sequence
    whilst
    when the changeColorsInParallel() function is called,
    the effect of the background change occurs at once which
    makes only the last color change on the list visible.
*/