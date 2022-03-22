import Pokemon from './data/pokemon/pokemon.js';

export const shuffle = ()  => {
  const cardsItems = Pokemon.items;
  const cardsItemsTwo = Pokemon.items;
  const cardsTotal = cardsItems.concat(cardsItemsTwo);

  //****funcion que le de un movimiento aleatorio a las cartas
  // la variable va fuera 
  let i = cardsTotal.length, j, temp;
  //mientas que la condicion sea verdadera
  //***mientras queden elementos por barajar
  while (--i > 0) {
    // indice aleatorio entre 0 e i, math.floor me devuelve un numero entero menor que cero o igual a el mismo
    //***elige un elemento restante
    j = Math.floor(Math.random() * (i + 1));
    // luego el valor temporal es igual a cardstotal de j
    //*** y cambialo por el elemento actual
    temp = cardsTotal[j];
    cardsTotal[j] = cardsTotal[i];
    cardsTotal[i] = temp;
  }
  return cardsTotal
};


// funcion para seleccionar 2 cartas
// se crea una funcion con dos parametros , que luego se van a comparar con todas sus propiedades
export const cardSelection = (namecard1, namecard2 ) =>{
// retorna un booleano, para comparar
return namecard1 === namecard2

}





//export default {shuffle, cardSelection};
//export default shuffle ();