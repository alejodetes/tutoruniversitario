/* Instancia única de Firebase, compartida por sync.js y auth.js
   (inicializar la app dos veces con el mismo config tira error). */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVTdF-ksrbczO3lTcWf11gBRYK-jfdDKg",
  authDomain: "tutor-uan.firebaseapp.com",
  projectId: "tutor-uan",
  storageBucket: "tutor-uan.firebasestorage.app",
  messagingSenderId: "721233903332",
  appId: "1:721233903332:web:e976ed067cf8930465f6f1"
};

export const app = initializeApp(firebaseConfig);
