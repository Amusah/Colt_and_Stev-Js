function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled ${roll}`);
}

function throwDiece(numRolls){
    /*
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    */
   for(let i = 0; i < numRolls; i++){
    rollDie()
   }
}
throwDiece(5);

//  RETURN KEYWORD
// NORW: the return keyword ends execution of the program.
function checkColor(arr){
    for(let color of arr){
        if(color === 'purple' || color === 'magenta'){
            // ex += 1;
            return true;
        }
        //return false;
                        /*<---- this ends execution after first loop 
                        and returns false meanwhile the colors purple and magenta
                        might exist in the array but not the first index
                        */
    }
    // return false; 
                    /* <--- this will rather return false 
                    after the entire loop has finished 
                    */
                   
    
}
console.log(checkColor(['puhhrple', 'pink', 'blue', 'magentakjkj', 'purple']));