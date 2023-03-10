// DEFAULT FUCTION PARAMETERS

function sum(x, y){
    if(typeof y === 'undefined'){ 
        y = 0;                      // manually setting a default param
    }
    return x + y;
}
console.log(sum(2));

            // another method
function multiply(x, y){
   // typeof y === 'undefined' ? y = 1 : y = y;
   y = typeof y === 'undefined' ? 1 : y;
    return(x * y)
}
console.log(multiply(2, ));

// MORDERN APPROACH
function product(x, y = 1){
    return x * y;
}
console.log(product(5, 2));

function add(x, y = 0){
    return x + y;
}
console.log(add(4, 1));


const greet = (person, greeting = 'Hi') =>{
    console.log(`${greeting} ${person}`);
}
greet('bro', 'wossop!');