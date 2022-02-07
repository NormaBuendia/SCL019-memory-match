import Pokemon from './data/pokemon/pokemon.js';
//import flippedCards from './components/App.js';
const shuffle = ()  => {
  const cardsItems = Pokemon.items;
  const cardsItemsTwo = Pokemon.items;
  const cardsTotal = cardsItems.concat(cardsItemsTwo);

  //funcion que le de un movimiento aleatorio a las cartas
  let i = cardsTotal.length, j, temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = cardsTotal[j];
    cardsTotal[j] = cardsTotal[i];
    cardsTotal[i] = temp;
  }
  return cardsTotal
};


// funcion hacer match
//let cardSelection = new Set();
//let card1= flippedCards[0].getAttribute('name');
//let card2 = flippedCards[1].getAttribute('name');
//let cardResult = card1===card2;
//return cardResult
//console.log(cardResult);






//export default {shuffle, cardSelection};
export default shuffle;