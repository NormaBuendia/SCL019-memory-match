
import Pokemon from '../data/pokemon/pokemon.js';
const shuffle = () => {
    const cardsItems = Pokemon.items;
    const cardsItemsTwo = Pokemon.items;
    var cardsTotal = cardsItems.concat(cardsItemsTwo);


    //funcion que le de un movimiento aleatorio a las cartas

        let i = cardsTotal.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = cardsTotal[j];
        cardsTotal[j] = cardsTotal[i];
        cardsTotal[i] = temp;
    }   
};

export default shuffle();
