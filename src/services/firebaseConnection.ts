
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyCxJNhAFLrrBAGoecoDrXoKwIjCrlDr9QE",
  authDomain: "tarefasplus-4e2aa.firebaseapp.com",
  projectId: "tarefasplus-4e2aa",
  storageBucket: "tarefasplus-4e2aa.firebasestorage.app",
  messagingSenderId: "950769300745",
  appId: "1:950769300745:web:7271d2943e35c3a2a9cfd8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export {db};
