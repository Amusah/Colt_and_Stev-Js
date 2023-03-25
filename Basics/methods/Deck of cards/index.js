/*const makeDeck = () => {
    let deck = [];
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K';
    for(let value of values.split(',')){
        for(let suit of suits){
            deck.push({value, suit});
        }
    }
    return deck;
}

const drawCard = deck =>{
    return deck.pop();
}

const myDeck = makeDeck();
const card1 = drawCard(myDeck);
*/

const myDeck = {
    deck: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K',
    init(){
        const { suits, values, deck } = this;
        for(let value of values.split(',')){
            for(let suit of suits){
                deck.push({value, suit})
            }
        }
        //return deck;
    },
    drawCard(){
        return this.deck.pop();
    }
    
}