// methods
// functions in objects are called methods

const arith = {
    add: (a,b) => (a + b),
    sub: (a,b) => (a - b),
    div: (a,b) => (a / b),
    mul: (a,b) => (a * b),
    mod: (a,b) => (a % b)
}

console.log(arith.add(2,4));


/************THIS KEYWORD*************/
let sayHi = () => {
    console.log('HI');
    console.log(this); /* the this keyword points to 
                          the current execution contest
                          which is the window object which
                          logs it to the console.
                     */
}
sayHi();


/*in a method call, the this
keyword points to the object 
that called the method, hence
person{} object logged to console
                        */
const person = {
    fName: 'Henry',
    lName: 'Amusah',
    nickName: '64Bit',
    fullName(){
        console.log(this);
        const {fName, lName, nickName} = this; // destructure
        return `${fName} ${lName} aka ${nickName}`;
    },
    printBio(){
        console.log(this)
        let fullName = this.fullName();
        console.log(`${fullName} is a person!`);
    }
}
person.fullName();

const printBio = person.printBio;
console.log(printBio());


// NOTE: The 'this' key word depends on the context in which it is being invoked
