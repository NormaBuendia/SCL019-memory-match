import shuffle from '../shuffle.js';

const App = () => {



  // contenedor padre del juego
  const pokemonContainer = document.createElement('div');
  pokemonContainer.className = 'pokemonContainer';

  for (let i = 0; i < shuffle.length; i++) {
    //console.log(cardsTotal[i].id)
    const card = document.createElement('div');
    const front = document.createElement('img');
    const back = document.createElement('img');
    card.className = "card";
    front.className = "front";
    back.className = "back";
    pokemonContainer.appendChild(card);
    card.appendChild(back);
    card.appendChild(front);


    const imgFront = document.createElement('img');
    front.appendChild(imgFront);
    imgFront.className = "imgFront"
    front.setAttribute('src', shuffle[i].image);//insertar imagen front  

      //creo imgFront hijo de front insertar imagen 
    const imgBack = document.createElement('img');
    back.setAttribute('src', './img/carta-1.png')  //insertar imagen back 
    back.appendChild(imgBack);
    imgBack.className = "imgFront"
    imgBack.id = shuffle[i].id;

    // FUNCION FLECHA
    //init: function () {
    // console.log('Los siguientes pilotos van a comenzar la carrera:', this.drivers);
    //setTimeout(() => console.log('El ganador es', randomWinner(this.drivers)), 1000);
    //} 
    // tenemos 2 variables, clickCard y matchCard que son igual a un array

    var clickCard = []
    //var matchCard = [];
    // a card le agrego un evento para clickear las carta 
    card.addEventListener('click', function () {
      //si  logitud de la cartas clickedas es menor a 2
      if (clickCard.length < 2) {
        back.setAttribute('src', './img/carta-1.png')  //insertar imagen back 
        //click car agrega con push a todas las cartas barajadas
        //clickCard.push(shuffle[i]);
        }
        });
       //console.log(clickCard);





      }

      return pokemonContainer;




    }


export default App;












