import App from './components/App.js';


const buttonAqui = document.getElementById("aqui");
buttonAqui.addEventListener('click', function () {

//tomar el elemento y cuando haga click pase lo siguiente:
let nombreUsuario = document.getElementById("input").value;
//console.log(nombreUsuario);



let usuario = document.createElement('div');
usuario.className = "usuario";
// un string ,Hola, sumado al valor de usuario 
usuario.textContent = ' Hola ' + nombreUsuario;


let nombreContainer = document.createElement('div');
nombreContainer.className = "nombreContainer";


document.getElementById('root').appendChild(usuario);


//console.log (nombreUsuario); 
});


 document.getElementById('root').appendChild(App());


