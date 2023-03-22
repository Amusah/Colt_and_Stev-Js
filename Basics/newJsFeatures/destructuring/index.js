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
console.log(time);

// making a variable based on the value of a key
const {country: nation, title: honor} = racer;
console.log(country, honor);

const {first: fName, last: lName, ...other} = racer;
console.log(other);