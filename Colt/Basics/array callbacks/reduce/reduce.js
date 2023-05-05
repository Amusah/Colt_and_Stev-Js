/*
    reduce() method accepts a callback that takes in two
    parameters, they're mostly called (accumulator, currentValue)
    by default. the accumulator holds the outcome/result of each
    call whilst the currentValue points to a different value after
    each call until the call ends.
*/

const nums = [1, 2, 3, 4, 5];
let sum = nums.reduce((oldValue, currentValue) =>{
    return oldValue + currentValue;
});
console.log(sum);


// finding the maximum number
const grades = [87, 96, 90, 72, 76, 70, 81];
let highestGrade = grades.reduce((max, curVal) =>{
    if(max > curVal) return max;
    return curVal;
});
console.log(highestGrade);
        // OR
let maxGrade = grades.reduce((max, curVal) => (
    Math.max(max, curVal)
));
console.log(maxGrade);

let minGrade = grades.reduce((min, curVal) => (
    Math.min(min, curVal)
));
console.log(minGrade);

// checking the longest element/word
const wordList = ['yeboah', 'morbidelli', 'verdi', 'yeboshi'];
let longWord = wordList.reduce((prvWord, curWord) =>{
    if(curWord.length > prvWord.length) return curWord;
    return prvWord;
});
console.log(longWord);


/*
    for reduce, it is possible to pass in a value as starting point
    where the the accumulator value starts from that value initially
    ... so in this case, the accumulator which is the tally parameter
    is initialized as an empty object {} instead of the first array 
    element which is 'y'
*/
// VOTE COUNT
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'y', 'n'];
let result = votes.reduce((tally, val) =>{
    if(tally[val]){
        tally[val]++
    }else{
        tally[val] = 1;
    }
    return tally;
}, {});
console.log(result);

// SHORT FORM
let newResult = votes.reduce((tally, val) => {
    //console.log(tally[val])
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {});
console.log(newResult);


// GROUPING EACH PER THEIR RATING
const music = [{

    title: 'Eine Kleine',
    authors: ['Wolfgang Amadeus Mozart'],
    rating: 3.48,
    genres: ['Classical Music', 'Nactmuzik']
 },
 {
    title: 'Seneca',
    authors: ['Claudio Monteverdi'],
    rating: 4.39,
    genres: ['Classical Music', 'Opera']
 },
 {
    title: 'Radetzky March',
    authors: ['Johann Strauss'],
    rating: 2.36,
    genres: ['CLassical Music', 'March']
 
 },
 {
    title: 'Ode to joy',
    authors: ['Ludwig Van Beethoven'],
    rating: 4.6,
    genres: ['Classical Music', 'Celebration']
 },
 {
    title: 'Messiah',
    authors: ['George, Fredric Handel'],
    rating: 5.0,
    genres: ['Classical Music', 'Oratorio']
 },
 {
    title: 'Symphony No 18',
    authors: ['Franz Joseph Haydn'],
    rating: 2.7,
    genres: ['Classical Music', 'Symphony']
 }
 ];

 const ratedMusic = music.reduce((groupedMusic, music) =>{
    const rate = Math.floor(music.rating); // chop off decimals
    if(!groupedMusic[rate]){ // checking if rating key not exists
        groupedMusic[rate] = []; // init an empty array to group specific rate key
    }
       groupedMusic[rate].push(music);
    return groupedMusic;
 }, {});
console.log(ratedMusic);


// revisit for futhur clarity