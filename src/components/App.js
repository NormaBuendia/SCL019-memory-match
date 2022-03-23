import { cardSelection, shuffle as shuffleFunction } from '../shuffle.js';


const App = () => {

  // contenedor padre del juego
  const pokemonContainer = document.createElement('div');
  pokemonContainer.className = 'pokemonContainer';

  //****activar popup de bienvenida****//
  //creamos los elementos
  let popup = document.getElementById('popup');
  let aqui = document.getElementById('aqui');
  let close = document.getElementById('cerrar-popup');
  //agregamos un evento cuando se hace click en boton aqui
  aqui.addEventListener('click', function () {
    popup.classList.add('hidden');
  });
  //agregamos un evento cuando se hace click en boton X
  close.addEventListener('click', function () {
    popup.classList.add('hidden');
  });


  //hijo de pokemon Container
  let containerCard = document.createElement('div');
  containerCard.className = 'containerCard';

  pokemonContainer.appendChild(containerCard);

  // creamos la constante shuffle que trajimos de otro modulo, con toda la funcion shuffle
  const shuffle = shuffleFunction()
  //realizamos un ciclo para iterar sobre cada una de las cartas y formar la mesa de juego
  for (let i = 0; i < shuffle.length; i++) {

    //creamos los elementos para ver las cartas
    const card = document.createElement('div');
    const front = document.createElement('img');
    const back = document.createElement('img');
    //creamos las clases
    card.className = "card";
    front.className = "front";
    back.className = "back";
    containerCard.appendChild(card);
    card.appendChild(back);
    card.appendChild(front);
    // con esto la carta setea  los parametros que se le da
    card.setAttribute("name", shuffle[i].id);

    back.setAttribute('src', shuffle[i].image, 'id', 'name');//insertar imagen back 

    front.setAttribute('src', './img/carta-1.png')  //insertar imagen front

    card.addEventListener('click', (e) => {
      // le agrego un clase togleCard, animacion alternar
      //si la clase toggleCard no existe la añade sino la elimina,usa la clase para la animacion
      card.classList.toggle("toggleCard");
      //cada vez que alterne la carta , verifico las cartas con e=evento
      checkCards(e)
    });

    //creo una funcion check cards que cuando haga click en en evento captura algunos datos
    const checkCards = (e) => {
      //guardamos los elementos que captura cuando hagamos click
      const clickCard = e.target;
      //console.log(clickCard);
      //agrego a la lista una clase flipped (voltear)  
      clickCard.classList.add("flipped");
      // una constante y guardamos las cartas seleccionadas en  un Node List de la clase flipped para encontrar elementos que coincidan
      const flippedCards = document.querySelectorAll(".flipped");
      // una constante y guardamos las cartas seleccionadas en  un Node List de la clase toggleCard para encontrar coincidencias

      const toggleCards = document.querySelectorAll(".toggleCard");
      //console.log(flippedCards);

      //si  logitud de la cartas clickedas es igual  a 2 en todos sus propiedades, solo se puede clickear 2 cartas
      if (flippedCards.length === 2) {
        //son las constantes  donde hacemos la comparacion de 2 cartas
        // aca las constantes muestran las cartas con get y toman el parametro name para poder hacer match
        const namecard1 = flippedCards[0].getAttribute('name');
        const namecard2 = flippedCards[1].getAttribute('name');

      //colocamos un if, para darle los parametros a la funcion,que exportamos de shuffle.js
        if (cardSelection(namecard1, namecard2)) {
         
          // ejecuta la funcion por cada carta
          flippedCards.forEach((card) => {
            // se remueve la clase flipped
            card.classList.remove('flipped');
            // el puntero queda desactivado para no seleccionar las cartas match
            card.style.pointerEvents = 'none';
          });
        }
        //ademas
        else {
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
        //si todas las cartas se dan vuelta
        if (toggleCards.length === 12) {
          //**** creamos el popup de despedida** */
          //se selecciona el elemento con clase overlay 
          const overlay = document.querySelector(".overlay");
          //se selecciona el elemento con clase overlay
          const popUpWin = document.querySelector(".winPopUp");
          //se selecciona el elemento con id
          const button = document.getElementById("restart");
          // se selecciona al elemento con la clase
          const close = document.querySelector(".close-winPopUp");

          // se les da el estilo display para poder imprimirlo
          popUpWin.style.display = "block";
          overlay.style.display = "block";
          close.style.display = "block";
          // se crea el evento cuando el boton hace click
          button.addEventListener('click', () => {
            popUpWin.style.display = "none";
            overlay.style.display = "none";

            //se reinicia la pagina
            location.reload();

          });
          // se crea un evento cuando se hace click en boton X
          close.addEventListener('click', () => {

            overlay.style.display = "none";
            popUpWin.style.display = "none";
          });


        }

      }
    }





  }
  return pokemonContainer;
}
export default App;








