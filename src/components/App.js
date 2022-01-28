import shuffle from '../shuffle.js';

const App = () => {

  // contenedor padre del juego
  const pokemonContainer = document.createElement('div');
  pokemonContainer.className = 'pokemonContainer';
  // se crea funcion que muestra todas las cartas

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
      card.setAttribute("name", shuffle[i].id);

      const imgFront = document.createElement('img');
      front.appendChild(imgFront);
      imgFront.className = "imgFront"
      back.setAttribute('src', shuffle[i].image,'id','name');//insertar imagen front  

      //creo imgFront hijo de front insertar imagen 
      const imgBack = document.createElement('img');
      front.setAttribute('src', './img/carta-1.png')  //insertar imagen back 
      back.appendChild(imgBack);
      imgBack.className = "imgFront"
      imgBack.id = shuffle[i].id;

      // FUNCION FLECHA
      //init: function () {
      // console.log('Los siguientes pilotos van a comenzar la carrera:', this.drivers);
      //setTimeout(() => console.log('El ganador es', randomWinner(this.drivers)), 1000);
      //} 
     //le agrego un evento a card, cada vez que hacemos un click sucede este evento
      card.addEventListener('click', (e)=> { 
    // le agrego un clase togleCard, cuando se hace click
      card.classList.toggle("toggleCard");
        
       checkCards(e)
      });

      //creo una funcion check cards que cuando haga click en en evento captura algunos datos
      const checkCards = (e) => {
        //guardamos los elementos que captura cuando hagamos click
      const clickCard = e.target;
      console.log(clickCard);
        //agrego a la lista una clase flipped  cuando hace click 
      clickCard.classList.add("flipped");
      // creo constante y guardamos las cartas selecionadas en  un Node List de todo el elemento
        const flippedCards = document.querySelectorAll(".flipped");
       const toggleCard = document.querySelectorAll(".toggleCard")
        console.log(flippedCards);
        //si  logitud de la cartas clickedas es menor a 2
        if (flippedCards.length === 2) {
          // ocurre lo siguiente
          if (flippedCards[0].getAttribute('name') ===
            flippedCards[1].getAttribute('name')
             ) {
              console.log('match');
              flippedCards.forEach((card) => {
             card.classList.remove('flipped');
             card.style.pointerEvents = 'none';
              });
            }
            else {
          console.log('wrong');
            flippedCards.forEach((card) => {
              // remuevo el  flipped (volteado)cuando ya estamos
            card.classList.remove("flipped");
            setTimeout(() =>
            card.classList.remove("toggleCard"),1000);
                                   });

             }
          //las otras cartas restantes
          //if (toggleCard === 12)
                                       }
                               }   
   }                           
return pokemonContainer;
    }
export default App;



//var clickCard = [];
//var matchCard = [];

//if (shuffle[i].matched) {
  //card.setAttribute('src', shuffle[i].image);
//}

// a card le agrego un evento para clickear las carta 
//card.addEventListener('click', function () {
  //si  logitud de la cartas clickedas es menor a 2
  //if (clickCard.length === 2) {
   // front.setAttribute('src', './img/carta-1.png')  //insertar imagen back 
    //click car agrega con push a todas las cartas barajadas
    //shuffle[i].push(clickCard);
  //}
//});
//console.log(clickCard);








