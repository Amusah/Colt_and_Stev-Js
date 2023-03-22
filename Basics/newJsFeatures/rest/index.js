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
but has no array methods like push()/pop() forEach(), reduce()...
so unless you convert it into an actual array
this can be done with the spread... operator
const argsArray = [...arguments]

the arguments keyword doesn't support arrow functions

it claims every arguments even when n number of 
arguments has initially been passed into function

*/


                /*********REST PARAMETERS*********/
/*
rest... operator, similar to spread but rest
collects individual elements/arguments into a
single array

unlike the arguments keyword, rest... collects
the remaining arguments leaving out the initially
passed/declared arguments and work with it
*/

let arr = (...nums) => {
    console.log(nums);
    console.log(nums.length);

    // let facto = 1;
    // for(let i of nums){
    //     facto *= i;
    // }
    //return facto;
    return nums.reduce((result, value) => result * value);
}
console.log(arr(1,2,3,4,5));


function fullName(first, last, ...titles){
    console.log('firstName: ', first);
    console.log('last: ', last);
    console.log('titles: ',titles);

    return titles.every(title => title[title.length - 1] === '.');
}

console.log(fullName('Henry', 'Amusah', 'Mr.', 'Prof.', 'Eng.'));


const multiply = (...nums) => (
    nums.reduce((total, curVal) => total * curVal)
);
console.log(multiply(1,2,3,4,5));