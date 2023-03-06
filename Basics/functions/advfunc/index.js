/******************ADVANCED FUNCTION******************/
function add(x, y){
    return x + y;
}

const subtract = function(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

const divide = function(x, y){
    return x / y;
}

const operations = [add, subtract, multiply, divide];
for(let eachfunction of operations){
    let result = eachfunction(100, 50);
    console.log(result);
}

console.log('***************FUNCTIONS THAT RETURNS FUNCTIONS*****************')
/******************HIGH ORDER FUNCTION******************/
// functions as arguments
/*
function reportEmergency(speak){
    speak();
    speak();
    speak();
}
*/
function callAtc(){
    console.log('May day!');
};
function callAtc2(){
    console.log('Flight Ej8683');
}
//reportEmergency(callAtc);

// repeat a function call n number of times
function repeatNTimes(call, num){
    for(let i = 0; i < num; i++){
        call();
    }
};
repeatNTimes(callAtc, 1);

// calling between two functions at random
function callRandAtc(atc1, atc2){
    let rand = Math.random();
    console.log(rand);
    rand < 0.5 ? atc1() : atc2();
}
callRandAtc(callAtc, callAtc2);




// FUNCTIONS THAT RETURNS FUNCTIONS
function multiplyBy(num){
    return function(x){
        return x * num;
    }
};

const tripple = multiplyBy(3);
console.log(tripple(2)); //6 

const double = multiplyBy(2);
console.log(double(4)); // 8

const half = multiplyBy(0.5);
console.log(half(20)); //10


function checkAgeRange(min, max){
    return function(num){
        return num >= min && num <= max;
    }
};
const isChild = checkAgeRange(0, 18);
console.log(isChild(12));