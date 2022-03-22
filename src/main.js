
<<<<<<< HEAD
import {router} from './Rutas/routes.js';
//import { appInit } from './Rutas/configuFirebase.js';
// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './Rutas/index.js';


// myFunction();

window.addEventListener('load', () => {
    //const firebaseObject = appInit;
    //appInit
    router(window.location.hash );

    window.addEventListener('hashchange', () => {
    router(window.location.hash);
    
});

});
=======

//*****creamos el popup de bienvenida ****/
//seleciono el boton aqui
const buttonAqui = document.getElementById("aqui");

//tomar el elemento y cuando haga click pase lo siguiente:
buttonAqui.addEventListener('click', function () {
//creamos la variable y guardamos el valor del input
let nombreUsuario = document.getElementById("input").value;
//console.log(nombreUsuario);


//creamos la variable para crear el elemento de Dom
let usuario = document.createElement('div');
//creamos la clase
usuario.className = "usuario";
// un string ,Hola, sumado al valor de usuario 
usuario.textContent = ' Hola ' + nombreUsuario;

//creamos el elemento del Dom, donde estara el contenedor 
let nombreContainer = document.createElement('div');
nombreContainer.className = "nombreContainer";

// ubicamos donde estara usuario, es el hijo de root
document.getElementById('root').appendChild(usuario);


//console.log (nombreUsuario); 
});


 document.getElementById('root').appendChild(App());


>>>>>>> 9f6557ab02ee89b631939872c6c692d06dae47b1
