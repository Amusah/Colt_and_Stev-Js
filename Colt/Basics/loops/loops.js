let dataSheet1 = ['takeFlight', 'hit cruise', 'return'];
let dataSheet2 = [' vertically', ' altitude', ' to gcc'];
/*
for(let i = 0; i < dataSheet1.length; i++){
    console.log(dataSheet1[i]);
};*/
//console.log(dataSheet1);

/*
for(let actions of dataSheet1){
    console.log(actions); // prints elements from array
    console.log(actions[0]); // prints out first character of each index
}
*/
/*
for(let j = 0; j < dataSheet1.length; j++){
    console.log(dataSheet1[j] + dataSheet2[j]);
}
*/

/**********LOOPING THROUGH AN OBJECT**********/
const movieReviews = {
    Arrival                 : 9.5,
    Alien                   : 9, 
    Amelie                  : 8,
    'In Bruges'             : 9,
    Amadeus                 : 10,
    'Kill Bill'             : 8,
    'Little Miss Sunshine'  : 8.5,
    Caroline                : 7.5
};

// USING FOR OFF LOOP

for(let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie]);
};

const ratings = Object.values(movieReviews);
let total = 0;
for(let r of ratings){
    total += r;
}
let avg = total / ratings.length;
console.log(avg);


// USING FOR IN LOOP
const favClassics = {
    Beethoven : 'Symphony',
    Haydn     : 'Symphony No 18',
    Handel    : 'Messiah',
    Mozart    : 'Eine Kleine',
    Chopine   : 'Nocturne'
}

for(classic in favClassics){
    console.log(classic);
}