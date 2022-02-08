import Pokemon from './data/pokemon/pokemon.js';

export const shuffle = ()  => {
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


// funcion para seleccionar 2 cartas
export const cardSelection = (namecard1, namecard2 ) =>{
// retorna
return namecard1 === namecard2

}





//export default {shuffle, cardSelection};
//export default shuffle;