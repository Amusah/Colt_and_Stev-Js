// FIND
/* find() returns the first element in the array that 
   satisfies the requirement of the callback function
*/
const fruits = ['apple', 'sugar cane', 'banana', 'kewi', 'cranberry', 'strawberry'];
let bestFruit = fruits.find(f => f.includes('berry'));
console.log(bestFruit); // cranberry

const digits = [4, 8, 10, 21, 15];
let  mod3 = digits.find(d => d % 3 === 0); // 21
console.log(mod3);

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
];
const movie = movies.find(movie => {
    return movie.includes('Mrs');
});

const movie2 = movies.find(m => m.indexOf('Mrs') === 0);


const books = [{
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {
        title: 'Bone: Ther Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }
];

const higherRating = books.find(book => book.rating > 4.3);
