import App from './components/App.js';

const buttonAqui = document.getElementById('aqui');

   buttonAqui.addEventListener('click', function () {
    
   const nombre = prompt('Jugador escribe tu nombre' );
    // con localStorage podemos guardar informacion y guardo los elementos ahi
   localStorage.setItem('nombreUsuario', nombre);
   //con getItems puedo traer los elementos
//var nombreUsuario = localStorage.getItem('nombreUsuario');
  sessionStorage.getItem("nombreUsuario");
   //console.log(nombreUsuario);

});
/*const buttonAqui = document.getElementById("aqui");
document.getElementById("aqui").addEventListener("click", function login(){
    //tomar el elemento y cuando haga click pase lo siguiente:
let nombre = document.getElementById("name").value;
localStorage.setItem('nombreUsuario', nombre);
sessionStorage.getItem("nombreUsuario");
//sacar el texto que tiene el mensaje y darle el valor

});
}*/
 document.getElementById('root').appendChild(App());


