
import Pokemon from '../data/pokemon/pokemon.js';

//export default Pokemon;
//console.log(Pokemon);

const App = () => {

  const cardsItems = Pokemon.items;
  const cardsItemsTwo = Pokemon.items;
  const cardsTotal = cardsItems.concat(cardsItemsTwo);

  //Seleccionamos el board 
  //const board = document.querySelector(".board");

  let i = cardsTotal.length, j, temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = cardsTotal[j];
    cardsTotal[j] = cardsTotal[i];
    cardsTotal[i] = temp;
    //return cardsTotal;
  }

  //console.log(cardsTotal);


  //funcion que le de un movimiento aleatorio a las cartas
  //



  // con esto crearemos la estructura
  //const App = () => {
  // contenedor padre del juego
  const pokemonContainer = document.createElement('div');
  pokemonContainer.className = 'pokemonContainer';

  //contenedor del grid de cartas
  const cardsGrid = document.createElement('div');
  cardsGrid.id = 'cardsGrid';
  cardsGrid.className = 'cardsGrid';
  pokemonContainer.appendChild(cardsGrid);
  //console.log(cardsGrid);

  //mostrar las cartas
  const boardCards = () => {
    for (let i = 0; i < cardsTotal.length; i++) {
      //console.log(cardsTotal[i].id)
      const boardCards = cardsTotal.innerHTML('cardsGrid')
    
    
  }
}



  //el.className = 'App';
  // el.textContent = 'Hola mundo!';

  //return el;
}

export default App;












