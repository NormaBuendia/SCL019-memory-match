import {Home} from '../Vistas/Home.js';
import {register} from '../Vistas/Register.js';
import { muro } from '../Vistas/Muro.js';


export const router = (hash) => {
  const containerRoot = document.getElementById('app');
  containerRoot.innerHTML = '';// se reinicia a vacio
  if (hash === '#/' || hash === '/' || hash === '#' || hash === ''){
  containerRoot.appendChild(Home());
  } else if (hash === "#/home") {
    containerRoot.appendChild(Home());
  } else if (hash === "#/register") {
    containerRoot.appendChild(register());
  } else if (hash === "#/muro") {
    containerRoot.appendChild(muro());
  } 
};



