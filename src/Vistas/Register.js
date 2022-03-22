import { newRegister } from '../Rutas/firebase.js';
export const register = () => {
    window.location.hash = '/register';
    const divRegister = document.createElement('div');
    divRegister.className = 'div';
    divRegister.innerHTML= ` 
    <div class="container">
    <div class="bg-screen">
      <div class="bg-screen-content">
         <form class="login">
             <h2>Registrarse</h2>
               <div class="login-field">
                   <i class="login-icon fas fa-user"></i>
                   <input type="email" id="email" class="login-input" placeholder="Email" required>
                   <spam class="login_displayNone" id="registerEmailInUse">Este correo ya se encuentra en uso</spam>
                   <spam class="login_displayNone" id="missinEmail">Ingresa un correo</spam>
                   <spam class="login_displayNone" id="loginEmailNull">Este correo no es válido</spam>
               </div>
               <div class="login-field">
                 <i class="login-icon fas fa-lock"></i>
                 <input type="password" id ="password"class="login-input" placeholder="Password" required>
               </div>
               <div class="login-field">
               <i class="login-icon fas fa-lock"></i>
               <span class="iconEye fas fa-unlock" id="passwordLogin"></span>
               <input type="password" id ="confirmarPassword"class="login-input" placeholder="Confirmar Password" required>
             </div>
               <button class="login-submit">
                 <a href="#/home" id ="register">Registrarse</a>
                 <i class="button-icon fas fa-chevron-right"></i>
               </button>
         </form>
          <div class="social-login">
          
                <div class="social-icons">
                <a href="#" class="social-icon fab fa-instagram"></a>
                <a href="#" class="social-icon fab fa-facebook"></a>
                <a href="#" class="social-icon fab fa-google"></a>
             </div>
          </div>
      </div>
       <div class="screen-background">
            <span class="screen-bg
            screen-bg3"></span>
            <span class="screen-bg
            screen-bg2"></span>
            <span class="screen-bg
            screen-bg1"></span>
       </div>
    </div>
 
  </div>
    `;
    // se busca el el id register, se le agrega el evento , cuando hace click lo primero que va a 
    //hacer es recibir este objeto e
    divRegister.querySelector('#register').addEventListener('click', (e) => {
      // lo primero que va a hacer es cancelar el evento por defecto
      // que es refrescar la pagina, que el formulario no va apoder refresac
      //la pagina y voy a poder continuar con el codigo que continua
      e.preventDefault();  
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
       
    newRegister(firebaseObject.auth, email, password); 
    });


  return divRegister;
  

};
