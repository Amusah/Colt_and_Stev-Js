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

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods];
console.log(mollusca);

const inverts = [...cnidaria, ...gastropods, ...cephalopods];
console.log(inverts);

const cnidariaCopy = [...cnidaria]
console.log(cnidariaCopy);


// spread in object literals
const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Canine',
    furry: true
};

const dog = {
    ...canine,
    isPet: true,
    adorable: true
}

console.log(dog['family']);

console.log({...[1,2,3]});