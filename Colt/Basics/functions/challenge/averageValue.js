
/*************************CHALLENGE NO. TWO*************************/
/*
Write a function to find the average value in an array 
of numbers. The program should be able to compute
array of any length.
*/

function findAvg(arr){
    sum = 0;
    let avg;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        //console.log(i)
    }
    //console.log(arr.length)
    //console.log(sum);
    avg = sum / arr.length;
    return avg;
}
console.log(findAvg([1, 2, 3, 4, 5]));
