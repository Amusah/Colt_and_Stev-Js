/*************************CHALLENGE NO. FOUR*************************/
/*
Write a getCard() function which returns a random playing card Object, like:
    {
        value: 'K'
        suit: 'clubs'
    }
pick a random value from:
------2,3,4,5,6,7,8,9,10,J,K,A
Pick a random suit from:
------clubs, spades, hearts, diamonds
Return both in an Object
*/


/*
function getCard(){
    let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J','K','A'];
    let cardSuit = ['clubs', 'spades', 'hearts', 'diamonds'];
    
    // generate random numbers between 0 and the length of cardValues array to access it's index
    let randomValueNumber = Math.floor(Math.random() * cardValues.length);
    // console.log(`random cardValue array index: ${randomValueNumber}`);
    // console.log(`random cardValue array element: ${cardValues[randomValueNumber]}`);

// generate random numbers between 0 and the length of cardSuitarray to access it's index
    let randomSuitNumber = Math.floor(Math.random() * cardSuit.length);
    // console.log(`random cardSuit array index: ${randomSuitNumber}`);
    // console.log(`random cardSuit array element: ${cardSuit[randomSuitNumber]}`);

    let value = cardValues[randomValueNumber];
    let suit = cardSuit[randomSuitNumber];
    return {
        value: cardValues[randomValueNumber],
        suit: cardSuit[randomSuitNumber]
    };
    
}
console.log(getCard());
*/

            /***********STRIPED DOWN VERSION************/
function getCard(){
    let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J','K','A'];
    let cardSuit = ['clubs', 'spades', 'hearts', 'diamonds'];

    function genRandNum(arr){
        // return random numbers worth the length of an array
       let randNum =  Math.floor(Math.random() * arr.length);
       return arr[randNum];
    };
    // let randomValueNumber = genRandNum(cardValues);
    // let randomSuitNumber = genRandNum(cardSuit);

    let value = genRandNum(cardValues);
    let suit = genRandNum(cardSuit);

    // destructure technique
    return {value, suit};
};
console.log(getCard());
