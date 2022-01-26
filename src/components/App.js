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
    
    const imgFront = document.createElement('img');
    front.appendChild(imgFront);
    imgFront.className = "imgFront"

    //insertar imagen back 
    front.setAttribute('src', './img/carta-1.png');
    //creo imgFront hijo de front insertar imagen 
    const imgBack = document.createElement('img');
    back.appendChild(imgBack);
    imgBack.className="imgFront"
    imgBack.id = shuffle[i].id;
    //insertar imagen front  
    back.setAttribute('src', shuffle[i].image);
    pokemonContainer.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  }
  return pokemonContainer;
}
export default App;












