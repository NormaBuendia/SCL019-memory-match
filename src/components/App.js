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

   


    card.addEventListener('click', (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);

    });


    //Check Cards

    const checkCards = (e) => {
      //console.log(e);
      const clickedCard = e.target;
     
      clickedCard.classList.add("flipped");
      const flippedCards = document.querySelectorAll(".flipped");
      const toggleCards = document.querySelectorAll(".toggleCard");
      //console.log(flippedCards);


      //Match
     

     if (flippedCards.length === 2) {
       if (
         flippedCards[0].getAttribute("name") === 
       flippedCards[1].getAttribute("name")
       ) {
         //console.log("match");
         flippedCards.forEach((card) => {
           card.classList.remove("flipped");
           card.style.pointerEvents = "none";
         });
      } else {
         //console.log("wrong");
         flippedCards.forEach((card) =>{
           card.classList.remove("flipped");
           setTimeout(() => card.classList.remove("toggleCard"), 1000);
         });
       }


     };

     if(toggleCards.length === 12 ) {
        window.alert(" Ganaste! ");

        const modalWin= document.createElement('div');
        modalWin.className = 'modalWin';
        

     };
    


    };

  } return pokemonContainer;









  //console.log(clickCard);






}








export default App;












