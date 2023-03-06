let nums = [3,6,8,0,6,7,3,6,1,3,2];
console.log(nums.sort()); //[0, 1, 2, 3, 3, 3, 6, 6, 6, 7, 8]

let digits = [66.7, 88.5, 400.00, 200, 966.87, 9000, 406.791];
console.log(digits.sort()); //[200, 400, 406.791, 66.7, 88.5, 9000, 966.87]

// sorting correctly with a callback
let ascendSort = digits.sort((a, b) => a - b);
console.log(ascendSort); // sorts in ascending order

// sorts in decending order
let decendSort = digits.sort((a, b) => b - a);
console.log(decendSort); //[9000, 966.87, 406.791, 400, 200, 88.5, 66.7]

console.log(ascendSort); //[9000, 966.87, 406.791, 400, 200, 88.5, 66.7]

/*
    after sorting in decending order, when we called ascendSort variable/binding,
    it prints the array in decending order instead of ascending order
    ...this is because sort() is an array method that mutates the original
    array. :)
    so in order to avoid this, we can duplicate the original array with the 
    slice() method and the we perform our sort operation on it.
*/

// the slice() method makes a copy of the entire array when no argument is passed in
let newAscendSort = digits.slice().sort((a, b) => a - b);
console.log(newAscendSort);
