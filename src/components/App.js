import shuffle from '../shuffle.js';

const App = () => {
  // contenedor padre del juego
  const pokemonContainer = document.createElement('div');
  pokemonContainer.className = 'pokemonContainer';
  // contenedor hijos de pokemonContainer, donde van a estar las cartas
  //const gridCard = document.createElement('div');
 // gridCard.className = "gridCard"
  //gridCard.appendChild()
  // recorro todas las cartas
  for (let i = 0; i < shuffle.length; i++) {
    //console.log(cardsTotal[i].id)
    const card = document.createElement('div');
    const front = document.createElement('img');
    const back = document.createElement('img');
    card.className = "card";
    front.className = "front";
    back.className = "back";
    // creo hijo de front e inserto imagen back
    const imgBack = document.createElement('img');
    imgBack.appendChild(back);
    imgBack.className = "imgBack"
    //insertar imagen 
    back.setAttribute('src', './img/carta-1.png');
    //creo hijo de imgBack insertar imagen de frente
    const imgFront = document.createElement('img');
    imgFront.appendChild(front);
    imgFront.id = shuffle[i].id;
    //insertar imagen 
    front.setAttribute('src', shuffle[i].image);
    pokemonContainer.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    
  }
  return pokemonContainer;
}
export default App;












