// SPREAD OPERATION
// spread in function call
const nums = [5, 4, 7, 8];
console.log(Math.max(nums)); // NAN
console.log(Math.max(...nums)); // chops of the [] and return array numbers without looping

function printItems(a, b, c, d){
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}
//printItems(nums); // a [5 , 4, 7, 8, 9, 2]; a is seen as a single argument
printItems(...nums);