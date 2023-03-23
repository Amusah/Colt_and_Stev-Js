// Annoyomatic Demo
let randQuote = (quote) => {
    let rand = Math.floor(Math.random() * (quote.length));
    console.log(rand);
    console.log(quote[rand]);
}

// setInterval(() => {
//     randQuote(['i love u', 'Hard work pays', 'love for all']);
// }, 2000);

const quotes = {
    phrases: [
    'Kick it hard', 
    'Nothing impossible with God', 
    'What we know is a drop, what we don\'t know is an occean',
    'learning never exhausts the mind',
    'there is no great pain than that of a time wasted',
    'if your hatred could be turned into electricity, it would light up the whole world',
    'Plato is my friend, Aristotle is my friend, but my best friend is truth',
    'If i have seen further than others, it is by standing upon the shoulders of giants'
],

pickPhrase(){
    const {phrases} = this;
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
},

start(){
    //let that = this;
    this.timerId = setInterval(() => {
        console.log(this.pickPhrase())}, 2000);
},

stop(){
    clearInterval(this.timerId);
    //console.log(this.timerId)
    console.log('Applaud friends, the commedy is over');
}

}
quotes.start();
//quotes.stop();
