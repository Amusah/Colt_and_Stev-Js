const counterObject = require('./script');

console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

const newCounterObject = require('./script');

console.log(newCounterObject.getCounter());

/*
    in Node, files get required only once when the script
    is executed for the first time. node has an inbuilt 
    cache that store the content of the imported/required file
    as object with the filename as the key and the content
    of the files as the value. anytime the require function
    gets invoked again in the script, the content of the require
    cache is copied over.
*/