// creating and overwriting existing array and string methods with prototype
let arr = [1,2,4];
console.log(arr)
arr.includes = function(num){
    for(let i of arr) {
        if(num === i){
            return true;
        } 
    }
    return false;
}
//console.log(arr.includes(2));

String.prototype.yell = function(){
    console.log(this.toUpperCase());
}
// the 'this' keyword points to whatever string we call the yell() methon on
// String.prototype is where all string methods are stored

Array.prototype.pop = function(){
    alert('i can\'t pop it out')
}
//Array.prototype is a specific object/template that stores array methods

/*
    the difference between __proto__ and prototype is...
    prototype is the actual prototype object whilst
    __proto__ is a reference to the prototype object
*/