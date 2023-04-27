// Destructuring Array... fbased on position of element
const raceResults = [
    'Vallentino Rossi',
    'Franko Morbidelli',
    'Lewis Hamilton',
    'John Champion'
];

// previously...
// const gold = raceResults[0];
// const silver = raceResults[1];

// now....
const [gold, silver, bronze] = raceResults;
console.log(`${gold} & ${silver}`);

const [firstRunner, , , fourth] = raceResults;
console.log(fourth);

const [winner, ...others] = raceResults;
console.log(others);


// Destructuring objects
// similar to array destructuring but the variable name must
// exist in the object as property/key
const racer = {
    first: 'Valentino',
    last: 'Rossi',
    country: 'Italy',
    title: 'The Doctor'
}

const {first, last, country, time} = racer;
console.log(first, last);
console.log(time); // undefined

// making a variable based on the value of a key
const {country: nation, title: honor} = racer;
console.log(nation, honor);

const {first: fName, last: lName, ...other} = racer;
console.log(other);



/**********NESTED DESTRUCTURING**********/
const riders = [{
        firstName: 'Valentino',
        lastName: 'Rossi',
        origin: 'Italy'
    },
    {
        firstName: 'Fabio',
        lastNmae: 'Quartararo',
        origin: 'France'
    },
    {
        firstName: 'Loris',
        lastName: 'Capirossi',
        origin: 'Italy'
    }
];

const [, {origin}, {origin: home}] = riders;
console.log(origin)
console.log(home);


/*********DESTRUCTURING PARAMETERS**********/
// objects
const swimmer = {
    first: 'Michael',
    last: 'Phelps',
    country: 'USA'
}
const fullName = ({first, last}) => {
    return `${first} ${last}`;
}
// Note: this function expects an object as an aruement when called
console.log(fullName(swimmer));

// arrays
const response = [
    'HTTP/1.1',
    '404 ERROR',
    'application/json'
]

let parseResponse = ([protocol, statusCode, contentType]) =>{
    console.log(`status: ${statusCode}`);
}
parseResponse(response);