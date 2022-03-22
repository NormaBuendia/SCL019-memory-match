//import { getAnalytics } from './firebase.js'
import{
  getFirestore,
    //documentos
    doc,
    // crear una coleccion de datos
    collection,
    //añadir documentos
    addDoc,
    // obtener documentos
    getDocs,
    getDoc,
    //cuando los datos cambien
    onSnapshot,
    // borrar doc
    deleteDoc,
    //actualizar doc
    updateDoc,
    
    } 
    //from "./configuFirebase.js" 
    from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
import { auth } from "./firebase.js";
// db base de datos
    const db = getFirestore();
  
    export const saveTask = (title,description) => {
     let userName;
      // si el usuario se registró sin google (es decir no se guardó su displayName)
      // al momento de crear el post
      // su nombre será el email.
      
      if (auth.currentUser.displayName === null) {
        userName = auth.currentUser.email;
      } else {
     userName = auth.currentUser.displayName;
       }
      addDoc(collection(db, 'post'), {
      title, 
      description, 
      userName
      
    })
    }
  
    export const getTasks = () => getDocs(collection(db, 'post'))
   
    export const getTask = id => getDoc(doc(db, 'post', id))
   
    export const onGetTasks = (callback) => onSnapshot(collection(db, 'post'), callback)
   
    export const deleteTask = id => deleteDoc(doc(db, 'post', id))
   
    export const editTask = (id, newContent) => updateDoc(doc(db,'post', id) , newContent)



