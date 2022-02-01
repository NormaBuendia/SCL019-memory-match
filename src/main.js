import App from './components/App.js';

const buttonAqui = document.getElementById('aqui');

   buttonAqui.addEventListener('click', function () {
     
   const nombre =prompt('Jugador escribe tu nombre');
    // con localStorage podemos guardar informacion y guardo los elementos ahi
   localStorage.setItem('nombreUsuario', nombre);
   //con getItems puedo traer los elementos
//var nombreUsuario = localStorage.getItem('nombreUsuario');
sessionStorage.getItem("nombreUsuario");
//console.log(nombreUsuario);
});
 

   
    

 
 document.getElementById('root').appendChild(App());


