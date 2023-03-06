let nums = [1,2,3];
let myNums = [1,2,3];
console.log(nums === myNums);
/*
    the contents of both variables nums and myNums looks the same
    but checking for equality of both variables returns false...
    this is because, arrays are stored differently than a normal variable
    in this case, the variable holds refrence or address to the memory
    location that holds the actual array content...
    Hence....(nums === myNums) checks for equality of refrence rather
    than content. 
*/

let sameNums = nums;
console.log(sameNums === nums);
/*
    The code above returns true, this is because the variables
    sameNums and nums stores the same refrence or address to 
    the memory location that holds the actual array content.
*/

const user = {
    username        : 'Henry',
    email           : 'hen@gmail.com',
    notifications   : []
};

if(!user.notifications.length){
    console.log('NO NEW NOTIFICATION');
}