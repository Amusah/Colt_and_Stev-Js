
// FILTER
/* filter() returns a new array of elements that pass the
   test initiated by the callback function so when the callback
   returns true, the element is added to the filtered array
*/
const numbers = [9, 7, 8, 6, 4, 6, 2, 4, 1, 6, 3, 7];
let even = numbers.filter(n => n % 2 === 0);
console.log(even); // [8, 6, 4, 6, 2, 4, 6] 

// let allNums = numbers.filter(n => n);
// console.log(allNums);

const books = [{
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

}
];

let ratedBooks = books.filter(b => b.rating > 4.2);
console.log(ratedBooks);

const fantasyBooks = books.filter(fanta => fanta.genres.includes('fantasy'))
console.log(fantasyBooks);


// filtering books array by search keyword
const searchBooks = query => {
   let search = books.filter(book =>{
      return book.title.toUpperCase().includes(query.toUpperCase());
   });
   return search;
};
console.log(searchBooks('A'));
