/*
    The async keyword used in front of a function
    declaration or a function expression
    async functions always returns a promise
    if the function returns a value or throws an
    error, the promise resolves and rejects with
    that value respectively.
*/


async function greet(){
    return 'Good morning';
};
let response = greet();
console.log(response);
greet().then(val => console.log('Promised resolved with', `"${val}"`))


// function that throws an error
async function add(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw 'Enter a valid number';
    }
    return x + y;
}
add(4, 'h')
.then(val => console.log(`Promise rejected with ${val}`))
.catch(err => console.log(`Promise rejected with ${err}`));

/*
    So basically, async is a short syntax used to create functions 
    that returns a promise :)
*/