import App from './components/App.js';


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


