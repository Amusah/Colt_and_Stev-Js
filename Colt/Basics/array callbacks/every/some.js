// SOME
/*  some() is similar to every() but returns true if any of the 
    elements meet the requirement of the callback...
    Kind of running logics with || it just needs one element 
    to return true
*/

const colors = ['red', 'orange', 'red', 'purple'];
console.log(colors.some(color => color.length === 6)); 

let firstLetter = colors.some(color => color[0] === 'd');
console.log(firstLetter);

let lastLetter = colors.some(color => color[color.length - 1] === 'd');
console.log(lastLetter);

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
 
 },
 {
    title: 'Eloqunet Javascript',
    authors: ['Marjin Haverbeke'],
    rating: 4.5,
    genres: ['Technology', 'Programming']
 }
 ];

 let allGoodBooks = books.some(book => book.rating > 4.4);
 console.log(allGoodBooks);

 let duelAuthors = books.some(book => book.authors.length > 1)
 console.log(`Thats ${duelAuthors}, some of the books has multiple authors`);
