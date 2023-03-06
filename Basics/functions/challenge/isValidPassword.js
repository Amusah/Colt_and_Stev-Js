/*************************CHALLENGE NO. ONE*************************/
/*
write a isValidPassword function
it accepts 2 arguments: password and username
password must:
    - be at least 8 characters
    - cannot contain spaces
    - cannot contain the username
if all requirements are met, return true.
otherwise: false

*/

function isValidPassword(password, username){
    //let pass = String(password);
    if(password.length < 8){
        //console.log('edith password');
        return false;
    }
    if(password.indexOf(' ') !== -1){
        //console.log('edith password');
        return false;
    }
    if(password.indexOf(username) !== -1){
        //console.log('edith password')
        return false
    }
    else{
        return true;
    }
}
console.log(isValidPassword('henrynambnbdf7', 'henry'));


        // SHORT VERSION
    
function isValidPassword(password, username){
    if(password.length < 8 || 
        password.indexOf(' ') !== -1 || 
        password.indexOf(username) !== -1
    ){
        return false;
    }
    return true;
}
console.log(isValidPassword('nanyeboah', 'nana'));


        // SHORTER VERSION
        function isValidPassword(password, username){
            const tooShort = password.length < 8;
            const hasSpace = password.indexOf(' ') !== -1;
            const tooSimilar = password.indexOf(username) !== -1;
            
            return !tooShort && !hasSpace && !tooSimilar;
        }
        
        console.log(isValidPassword('hadsdfnry', 'henry'));
        