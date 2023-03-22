// older method with the arguments keyword
// passing unlimited n of argument into a function
function sum(){
    console.log(arguments[0]);
    const argsArray = [...arguments];
    return argsArray.reduce((result, value) => {
        return result + value;
    });
}
console.log(sum(1,2,3,4,5));

/*
    CAVEATS...
the arguments keyword looks like an array
but has no array methods like forEach(), reduce()...
so unless you convert it into an actual array
this can be done with the spread... operator
const argsArray = [...arguments]

the arguments keyword doesn't support arrow functions

it claims every arguments even when n number of 
arguments has initially been passed into function

*/


