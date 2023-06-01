const counterObject = require('./script');

console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

const newCounterObject = require('./script');

console.log(newCounterObject.getCounter());