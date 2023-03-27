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
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K',
    init(){
        const { suits, values, deck } = this;
        if(deck.length === 0){
            for(let value of values.split(',')){
                for(let suit of suits){
                        deck.push({value, suit});
                }
            }
        }
        //return deck;
    },
    drawCard(){
        const { deck, drawnCards } = this;
        const card = deck.pop();
        drawnCards.push(card);
        return card;
    },
    drawMultiCards(num){
        const cards = [];
        if(num <= this.deck.length){
            for(let i = 0; i < num; i++){
                cards.push(this.drawCard());
            }
            return cards;
        } else {
            return 'Deck quantity out of bounds try reinitializing deck';
        }
    },
    shuffle(){
        let { deck } = this
        // loop array in reverse
        for(let i = deck.length - 1; i > 0; i--){
            // generate random index to be swapped with current index/element
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
    
}