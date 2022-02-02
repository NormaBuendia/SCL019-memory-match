import shuffle from '../shuffle.js';


const App = () => {

  // contenedor padre del juego
  const pokemonContainer = document.createElement('div');
  pokemonContainer.className = 'pokemonContainer';
  let nombreUsuario = localStorage.getItem('nombreUsuario');
  // nombre guardado 
  sessionStorage.getItem("nombreUsuario");
  //nombreUsuario = sessionStorage.get('nombre-usuario')
  //const bienvenida = document.getElementsByClassName('nombreUsuario');
  //bienvenida.textContent += nombreUsuario;
    //**** NO PODEMOS IMPRIMIR EL NOMBRE */
  

  //console.log(nombreUsuario);

  let popup = document.getElementById('popup');
  let aqui = document.getElementById('aqui');
  //var close=document.getElementById('close');

  aqui.addEventListener('click', function () {
    popup.classList.add('hidden');
    //close.classList.remove('hidden');
  });

  nombreUsuario = document.createElement('div');
  let nombreContainer = document.createElement('div');
  let containerCard = document.createElement('div');

  containerCard.className = 'containerCard';
  nombreUsuario.className = "nombreUsuario";

  nombreContainer.className = "nombreContainer";
  pokemonContainer.appendChild(nombreContainer);
  nombreContainer.appendChild(nombreUsuario);
  pokemonContainer.appendChild(containerCard);

 
  for (let i = 0; i < shuffle.length; i++) {
    //console.log(cardsTotal[i].id)
    const card = document.createElement('div');
    const front = document.createElement('img');
    const back = document.createElement('img');
    card.className = "card";
    front.className = "front";
    back.className = "back";
    containerCard.appendChild(card);
    card.appendChild(back);
    card.appendChild(front);
    card.setAttribute("name", shuffle[i].id);

    const imgFront = document.createElement('img');
    front.appendChild(imgFront);
    imgFront.className = "imgFront"
    back.setAttribute('src', shuffle[i].image, 'id', 'name');//insertar imagen front  

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


    ///selecciono la carta///
    //le agrego un evento a card, cada vez que hacemos un click sucede este evento
    card.addEventListener('click', (e) => {
      // le agrego un clase togleCard, animacion alternar
      //si la clase toggleCard no existe la añade sino la elimina,usadala clase para la animacion
      card.classList.toggle("toggleCard");
      //cada vez que alterne la carta , verifico las cartas con e=evento
      checkCards(e)
    });

    //creo una funcion check cards que cuando haga click en en evento captura algunos datos
    const checkCards = (e) => {
      //guardamos los elementos que captura cuando hagamos click
      const clickCard = e.target;
      console.log(clickCard);
      //agrego a la lista una clase flipped (voltear)  
      clickCard.classList.add("flipped");
      // una constante y guardamos las cartas seleccionadas en  un Node List de la clase flipped para encontrar elementos que coincidan
      const flippedCards = document.querySelectorAll(".flipped");
      // una constante y guardamos las cartas seleccionadas en  un Node List de la clase toggleCard para encontrar coincidencias
      const toggleCard = document.querySelectorAll(".toggleCard");
      const toggleCards = document.querySelectorAll(".toggleCard");
      console.log(flippedCards);
      //si  logitud de la cartas clickedas es igual  a 2 en todos sus propiedades, solo se puede clickear 2 cartas
      if (flippedCards.length === 2) {
        // ocurre lo siguiente si las cartas voltedas, con el atributo name coinciden
        if (flippedCards[0].getAttribute('name') ===
          flippedCards[1].getAttribute('name')
        ) {
          //imprime match
          console.log('match');
          // ejecuta la funcion por cada carta
          flippedCards.forEach((card) => {
            // se remueve la clase flipped
            card.classList.remove('flipped');
            // el puntero queda desactivado para no seleccionar las cartas match
            card.style.pointerEvents = 'none';
          });
        }
        else {
          //imprime wrong
          console.log('wrong');
          //ejecuta la funcion por cada carta
          flippedCards.forEach((card) => {
            // remuevo el  flipped (volteado)cuando ya estan 2 cards voltedas
            card.classList.remove("flipped");
            //le colocamos tiempo para la animacion
            setTimeout(() =>
              // remueve el toggleCard la animacion en 1 segundo
              card.classList.remove("toggleCard"), 1000);
          });

        }
        //las otras cartas restantes
        //if (toggleCard === 12){
        //  }

        //FALTA LLAMAR AL WIN POPUP AL FINAL DEL JUEGO
         if (toggleCards.length === 12) {
        //window.alert(" Ganaste! ");
    
          
          const overlay = document.querySelector(".overlay");
           
          const popUpWin = document.querySelector(".winPopUp");
    
          const button = document.getElementById("restart");
          
          
          popUpWin.style.display = "block";
          overlay.style.display = "block";
          
          button.addEventListener('click', () => {
            popUpWin.style.display = "none";
            overlay.style.display = "none";
            
            location.reload();

          })
  
    
         };
      }

      
    }

   

   
  }
  return pokemonContainer;
}
export default App;









