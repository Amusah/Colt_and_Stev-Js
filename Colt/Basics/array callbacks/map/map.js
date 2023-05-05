// MAP
/* map() returns a new array of elements based on the result of 
   of the callback function on each array.
*/
let texts = ['henry', 'amusah'];
let caps = texts.map(function(t){
    return t.toUpperCase();
});
console.log(caps); // ['HENRY', 'AMUSAH]

// let text = texts.map(t => t);
// console.log(text);

const numbers = [2,3,4,5,6,7,8];
let double = numbers.map(num => num * 2);
console.log(double);

let checkEven = numbers.map(n => {
    return {
        value: n,
        isEven: n % 2 === 0
    }
});
console.log(checkEven);

let reverseText = texts.map(t => {
    return t.toUpperCase().split('').join('.');
});
console.log(reverseText);
