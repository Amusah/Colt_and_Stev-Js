
/*************************CHALLENGE NO. THREE*************************/
/*
A pangram is a sentence that contains every 
letter of the alphabet, like:
// "The quick brown fox jumps over the lazy dog"

write a function called isPangram, which checks to see if a 
given sentence contains every letter of the alphabet.
Make sure you ignore string casing!
*/


function isPangram(sentence){
    let alphabets = 'abcdefghikjlmnopqrstuvwxyz';
    let lowerCase = sentence.toLowerCase();
    for(let ch of alphabets){
        console.log(ch);
        if(lowerCase.indexOf(ch) === -1){
            return false;
        }
    }
    return true;
}
console.log(isPangram('the quick brown fox jumps over the lazy dog'));


//USING THE INCLUDES METHOD

function checkPangram(sentence){
    let alphabets = 'abcdefghikjlmnopqrstuvwxyz';
    //let lowerCase = sentence.toLowerCase();
    for(let ch of alphabets){
        console.log(ch);
        if(!sentence.toLowerCase().includes(ch)){
            return false;
        }
    }
    return true;
}
console.log(checkPangram('The Quick Brown Fox Jumps Over The Lazy Dog'));
