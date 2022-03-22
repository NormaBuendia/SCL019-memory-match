//import {  onGetPost } from '../Rutas/firestore.js'
//import { logOut, auth} from '../Rutas/firebase.js'

//import {createPost, onGetPost, deletePost} from '../Rutas/firestore.js'

import { saveTask, deleteTask, editTask} from "../Rutas/firestore.js"
import { getTasks, onGetTasks, getTask} from "../Rutas/firestore.js"



export const muro = () => {
  window.location.hash = '/muro';
 const divMuro = document.createElement('div');
  
  divMuro.className = 'div';
  divMuro.innerHTML= `
  <div class="container">
   <div class="bg-screen">
    <div class="bg-screen-content">
  
    <form class='form-muro'id="form">
    <h2 class='title-muro'> QUE VAS A HACER HOY!</h2>
                    <label for="title" class="login-muro"> Actividad </label>
                    <input type="text" name="title" id="title" placeholder="Coloca una Tarea">
                    <label for="content" class="login-muro"> Contenido </label>
                    <textarea name="content" id="content" cols="30" rows="3" placeholder="Escribe un contenido"></textarea>
                    <button id="btn-form" class="btn-form">Enviar</button>
                </form>
        
        <div id="task-container" class="col-md-6"></div>
  </div>
</div>

</div>
</div>
     </div>
`
// //seleccionamos el div con el task container
// // cada vez que se recorra un dato, voy a generar una especie de
// // interfaz y voy a colocarlo dentro del task container

  const taskContainer = divMuro.querySelector('#task-container')
  const form = divMuro.querySelector('#form')
  let editStatus = false;
  
  let id = '';
  //window.addEventListener('DOMContentLoaded', () =>{
   //para iniciar ,si divmuro no es igual a vacio, 
 if (divMuro != ''){
      // const post = await getTask();
     onGetTasks((post)=> {
       console.log('hello')
       // cada vez que se recorra voy a estar añadiendo este Html
          let html = ''
          taskContainer.innerHTML = '' // colocarlo para que se reinicie
         // voy a recorrer uno a uno esos datos
          post.forEach(doc => {
            //una variable donde se van a guardar los datos de doc
              const postData = doc.data();
       
               html += `
               <div class="post">
               <p class='user-name'>${postData.userName} publicó: </p>
                   <h3 id='title'> ${postData.titulo} </h3>
                   <p id='description'> ${postData.descripcion} </p>
                   <div class='btn-delete-edit'>
                   <button class="btn-delete"  data-id="${doc.id}"> Delete </button>
                   <button class="btn-edit" data-id="${doc.id}"> Edit </button>
                   </div>
                   </div>
  
               </div>
               `
          })
  
         taskContainer.innerHTML = html
         
         
         const buttonsDelete =  divMuro.querySelectorAll('.btn-delete');
         buttonsDelete.forEach( btn => {
               //btn.addEventListener('click', ({target: {dataset}})=>{
               btn.addEventListener('click', (e) => {
               console.log('chau')
                id= e.target.dataset.id
                const closeConfirm = confirm('Desea borrar este post?')
                if( closeConfirm === true){
                    deleteTask(id)
                    alert('se borro tu post')
                }else{
                    alert('post no eliminado')
                }
                  
                  
              })
          })
          const buttonsEdit =  divMuro.querySelectorAll('.btn-edit');
          buttonsEdit.forEach( btn => {
              btn.addEventListener('click', async (e) => {
                  const doc = await getTask(e.target.dataset.id)
                  const task = doc.data();
  
                  form['title'].value = task.title // task.title es lo contiene doc adentro
                  form['content'].value = task.content
  
                  editStatus = true;
                  id = e.target.dataset.id;
  
                  if(!editStatus){
                      form['btn-form'].innerText = 'Enviar'
                  }else{
                      form['btn-form'].innerText = 'Actualizar'
                  }
              })
          })
      })
  
     
  }
  
  form.addEventListener('submit', (e) =>{
      e.preventDefault()
  
      //const title = form.querySelector('#title').value
      //const content = form.querySelector('#description').value
    const title = divMuro.querySelector('#title').value
   const content = divMuro.querySelector('#content').value
   
      if(!editStatus){
          saveTask (title,content);
      }else{
          editTask(
              id,
              {
              titulo: title,
              descripcion:content
              }
          )
          editStatus = false;
      }
     
      form.reset()
  
  } )


 return divMuro;
 };







