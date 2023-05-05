// FOREACH
// forEach() method calls a callback function on each array element.
// NOTE: unlike map(), forEach() always returns undefined and is unchainable;
const nums = [1,2,3,4,5];
/*let incre = */nums.forEach(function(n){
    //return n++;
    console.log(n + 1); // 2 3 4 5 6
});
//console.log(incre);

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
]
books.forEach(book => {
    console.log(book.authors)
});
