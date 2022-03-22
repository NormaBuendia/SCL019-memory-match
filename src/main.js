
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