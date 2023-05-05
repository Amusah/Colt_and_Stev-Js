// let password = 'Eloquent_Javascript';

// if (password.length >= 6) {
//     if(password.indexOf(' ') === -1){
//         console.log('Valid Password');
//     }
//     else{
//         console.log('Password is long enough, but cannot contain spaces');
//     }
// }
// else {
//     console.log('password must be longer!');
// }



// let num = 0;
// while(num <= 12){
//     console.log(num);
//     num += 2;
// }

/*********************CONTROL FLOW*******************/

let result = 1;
let counter = 1;

while(counter <= 2){
    result = result * 5;
    counter += 1;
}
console.log(result);



let number = 0
while(number <= 12){
    console.log(number);
    number += 2;
}

let yourName; 

// do{
//     yourName = prompt("what is your name?");
// } while(!yourName);
// console.log(yourName)

for(let n = 0; n <= 12; n += 2){
    console.log('with for loop ' + n);
}

// introducing the break keyword
for(let cur = 20; ; cur += 1){
    if(cur % 7 == 0){
        console.log(cur);
        break;
    };
   
}




