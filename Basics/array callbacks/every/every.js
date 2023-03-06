
// EVERY
/* every() tests each element to see whether they all meet
   requirement of the callback function...
   it returns a boolean value
   kind of running logics with &&
   it needs all the element to return true
*/

const words = ['cat', 'fat', 'sit', 'eat'];
console.log(words.every(word => word.length === 3)); // true
// checking if last letter of every array ends with 't'
let last = words.every(word => word[word.length - 1] === 't');
console.log(last)
// console.log(words.every(word => word[word.length - 1] === 't')) // true

const allBooks = [{
   title: 'Good Omens',
   authors: ['Terry Pratchett', 'Neil Gaiman'],
   rating: 4.25,
   genres: ['fiction', 'fantasy']
},
{
   title: 'Bone: The Complete Edition',
   authors: ['Jeff Smith'],
   rating: 4.42,
   genres: ['nonfiction', 'essays']
},
{
   title: 'American Gods',
   authors: ['Neil Gaiman'],
   rating: 4.11,
   genres: ['fiction', 'graphical novel', 'fantasy']
},
{
   title: 'A Gentleman in Moscow',
   authors: ['Amor Towles'],
   rating: 4.36,
   genres: ['fiction', 'fantasy']

},
{
   title: 'Eloqunet Javascript',
   authors: ['Marjin Haverbeke'],
   rating: 4.2,
   genres: ['Technology', 'Programming']
}
];

let goodBooks = allBooks.every(book => book.rating > 4.5)
console.log(goodBooks);

let multipleAuthors = allBooks.every(book => book.authors.length > 1)
console.log(`Thats ${multipleAuthors} not all of the books have multiple authors`);