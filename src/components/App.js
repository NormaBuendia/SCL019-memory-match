

import shuffle from '../components/shuffle.js';

//export default Pokemon;
//console.log(Pokemon);

const App = () => {

  //const cardsItems = Pokemon.items;
  //const cardsItemsTwo = Pokemon.items;
  //const cardsTotal = cardsItems.concat(cardsItemsTwo);

  //Seleccionamos el board 
  //const board = document.querySelector(".board");

  /*let i = cardsTotal.length, j, temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = cardsTotal[j];
    cardsTotal[j] = cardsTotal[i];
    cardsTotal[i] = temp;
    //return cardsTotal;
    console.log(cardsTotal);
  }
 */

  // contenedor padre del juego
  const pokemonContainer = document.createElement('div');
  pokemonContainer.className = 'pokemonContainer';

  // recorro todas las cartas
  for (let i = 0; i <shuffle.length; i++) {
    //console.log(cardsTotal[i].id)
    const card = document.createElement('div');
    const front = document.createElement('img');
    const back = document.createElement('img');
    card.className = "card";
    front.className = "front";
    back.className = "back";
    // creo hijo de front e inserto imagen back
    const imgBack = document.createElement('img');
    imgBack.appendChild(front);
    imgBack.className = "imgBack"
    //insertar imagen 
    back.setAttribute('src', './img/carta-1.png');

    //creo hijo de imgBack insertar imagen de frente
    const imgFront = document.createElement('img');
    imgFront.appendChild(imgBack);
    imgFront.id = shuffle[i].id;
    //insertar imagen 
    front.setAttribute('src', shuffle[i].image);
    pokemonContainer.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

  }
  //funcion que le de un movimiento aleatorio a las cartas
  //function shuffle(cardsTotal) {
    //let i = cardsTotal.length, j, temp;
   // while (--i > 0) {
     // j = Math.floor(Math.random() * (i + 1));
     // temp = cardsTotal[j];
      //cardsTotal[j] = cardsTotal[i];
      //cardsTotal[i] = temp;
      //return cardsTotal;
      //console.log(cardsTotal);
      //return cardsTotal;
   // }

 // }
  //console.log (shuffle ( cardsTotal ) );
    //pokemonContainer()


    //el.className = 'App';
    // el.textContent = 'Hola mundo!';

 return pokemonContainer;

}
export default App;












